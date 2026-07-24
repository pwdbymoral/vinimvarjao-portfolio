import { spawnSync } from "node:child_process";
import { dirname, resolve } from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

const supportedPlatforms = new Set(["darwin", "linux", "win32"]);
const args = process.argv.slice(2);
const dryRun = args.includes("--dry-run");
const jsonOutput = args.includes("--json");
const skipChecks = args.includes("--skip-checks");
const platformFlagIndex = args.indexOf("--platform");
const requestedPlatform =
	platformFlagIndex >= 0 ? args[platformFlagIndex + 1] : undefined;

if (requestedPlatform && !dryRun) {
	throw new Error("--platform can only be used together with --dry-run.");
}

const platform = requestedPlatform ?? process.platform;
if (!supportedPlatforms.has(platform)) {
	throw new Error(`Unsupported platform: ${platform}`);
}

const repoRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const npmCommand = platform === "win32" ? "npm.cmd" : "npm";
const npxCommand = platform === "win32" ? "npx.cmd" : "npx";
const fileMode = platform === "win32" ? "false" : "true";

const steps = [
	{
		label: "Configure Git file mode",
		command: "git",
		args: ["config", "--local", "core.filemode", fileMode],
	},
	{
		label: "Disable automatic CRLF conversion",
		command: "git",
		args: ["config", "--local", "core.autocrlf", "false"],
	},
	{
		label: "Keep LF as the local Git line ending",
		command: "git",
		args: ["config", "--local", "core.eol", "lf"],
	},
	{
		label: "Install locked npm dependencies",
		command: npmCommand,
		args: ["ci"],
	},
	{
		label: "Install Playwright browsers",
		command: npxCommand,
		args: ["playwright", "install", "--with-deps", "chromium", "firefox"],
	},
	...(skipChecks
		? []
		: [
				{
					label: "Run lint checks",
					command: npmCommand,
					args: ["run", "lint"],
				},
				{
					label: "Run component tests",
					command: npmCommand,
					args: ["run", "test"],
				},
				{
					label: "Build the production bundle",
					command: npmCommand,
					args: ["run", "build"],
				},
				{
					label: "Run browser tests",
					command: npmCommand,
					args: ["run", "test:e2e"],
				},
			]),
];

if (dryRun) {
	const plan = { platform, steps };
	process.stdout.write(
		jsonOutput
			? `${JSON.stringify(plan)}\n`
			: `${JSON.stringify(plan, null, 2)}\n`,
	);
	process.exit(0);
}

const run = (command, commandArgs, options = {}) => {
	const isWindowsCommand =
		process.platform === "win32" && command.endsWith(".cmd");
	const executable = isWindowsCommand
		? (process.env.ComSpec ?? "cmd.exe")
		: command;
	const executableArgs = isWindowsCommand
		? ["/d", "/s", "/c", command, ...commandArgs]
		: commandArgs;
	const result = spawnSync(executable, executableArgs, {
		cwd: repoRoot,
		stdio: "inherit",
		...options,
	});

	if (result.error) {
		throw result.error;
	}

	if (result.status !== 0) {
		throw new Error(
			`${command} ${commandArgs.join(" ")} failed with exit code ${result.status ?? "unknown"}.`,
		);
	}
};

const assertRepository = () => {
	const result = spawnSync("git", ["rev-parse", "--show-toplevel"], {
		cwd: repoRoot,
		encoding: "utf8",
	});

	if (result.error) {
		throw new Error(
			`Git is required to set up this repository: ${result.error.message}`,
		);
	}

	if (result.status !== 0) {
		throw new Error("Run this command from a Git clone of the repository.");
	}

	const detectedRoot = resolve(result.stdout.trim());
	if (detectedRoot !== repoRoot) {
		throw new Error(
			`Expected repository root ${repoRoot}, received ${detectedRoot}.`,
		);
	}
};

const formatCommand = ({ command, args: commandArgs }) =>
	[command, ...commandArgs]
		.map((part) => (part.includes(" ") ? JSON.stringify(part) : part))
		.join(" ");

try {
	assertRepository();

	console.log(`\nSetting up the repository for ${platform}...\n`);
	for (const [index, step] of steps.entries()) {
		console.log(`[${index + 1}/${steps.length}] ${step.label}`);
		console.log(`> ${formatCommand(step)}\n`);
		run(step.command, step.args);
	}

	console.log("\nSetup complete. Run `npm run dev` to start developing.\n");
} catch (error) {
	const message = error instanceof Error ? error.message : String(error);
	console.error(`\nSetup failed: ${message}\n`);
	process.exit(1);
}
