/// <reference types="node" />

import { execFileSync } from "node:child_process";
import { resolve } from "node:path";
import { cwd, execPath } from "node:process";
import { describe, expect, it } from "vitest";

interface SetupStep {
	command: string;
	args: string[];
}

interface SetupPlan {
	platform: string;
	steps: SetupStep[];
}

const readPlan = (platform: "win32" | "linux") => {
	const scriptPath = resolve(cwd(), "scripts/setup.mjs");
	const output = execFileSync(
		execPath,
		[scriptPath, "--dry-run", "--json", "--platform", platform],
		{ encoding: "utf8" },
	);

	return JSON.parse(output) as SetupPlan;
};

const commandsFrom = (plan: SetupPlan) =>
	plan.steps.map(({ command, args }) => ({ command, args }));

describe("repository setup", () => {
	it("prepares Windows with local Git settings and both Playwright browsers", () => {
		const plan = readPlan("win32");
		const commands = commandsFrom(plan);

		expect(plan.platform).toBe("win32");
		expect(commands).toContainEqual({
			command: "git",
			args: ["config", "--local", "core.filemode", "false"],
		});
		expect(commands).toContainEqual({
			command: "git",
			args: ["config", "--local", "core.autocrlf", "false"],
		});
		expect(commands).toContainEqual({
			command: "git",
			args: ["config", "--local", "core.eol", "lf"],
		});
		expect(commands).toContainEqual({
			command: "npm.cmd",
			args: ["ci"],
		});
		expect(commands).toContainEqual({
			command: "npx.cmd",
			args: ["playwright", "install", "--with-deps", "chromium", "firefox"],
		});
	});

	it("includes Linux browser dependencies and the complete verification flow", () => {
		const plan = readPlan("linux");
		const commands = commandsFrom(plan);

		expect(commands).toContainEqual({
			command: "git",
			args: ["config", "--local", "core.filemode", "true"],
		});
		expect(commands).toContainEqual({
			command: "npx",
			args: ["playwright", "install", "--with-deps", "chromium", "firefox"],
		});
		expect(commands.slice(-4)).toEqual([
			{ command: "npm", args: ["run", "lint"] },
			{ command: "npm", args: ["run", "test"] },
			{ command: "npm", args: ["run", "build"] },
			{ command: "npm", args: ["run", "test:e2e"] },
		]);
	});
});
