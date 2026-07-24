import { readdirSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

describe("deployment asset topology", () => {
	it("lets Coolify manage the application network", () => {
		const compose = readFileSync(
			resolve(process.cwd(), "docker-compose.yaml"),
			"utf8",
		);

		expect(compose).not.toMatch(/^\s+networks:/m);
		expect(compose).not.toMatch(/^networks:/m);
		expect(compose).not.toContain("external: true");
	});

	it("keeps public asset directories distinct from root SPA routes", () => {
		const rootSpaRoutes = new Set(["bio"]);
		const publicDirectories = readdirSync(resolve(process.cwd(), "public"), {
			withFileTypes: true,
		})
			.filter((entry) => entry.isDirectory())
			.map((entry) => entry.name);

		const routeCollisions = publicDirectories.filter((directory) =>
			rootSpaRoutes.has(directory),
		);

		expect(routeCollisions).toEqual([]);
	});

	it("uses the ForjaCorp favicon in browser and install metadata", () => {
		const indexHtml = readFileSync(
			resolve(process.cwd(), "index.html"),
			"utf8",
		);
		const favicon = readFileSync(
			resolve(process.cwd(), "public/favicon.svg"),
			"utf8",
		);
		const manifest = JSON.parse(
			readFileSync(resolve(process.cwd(), "public/manifest.json"), "utf8"),
		) as {
			icons: Array<{ src: string; sizes: string; type: string }>;
		};

		expect(indexHtml).toContain(
			'<link rel="icon" type="image/svg+xml" href="/favicon.svg" />',
		);
		expect(favicon).toContain(
			"<title>Vinícius Varjão — símbolo ForjaCorp</title>",
		);
		expect(favicon).toContain("#250a2b");
		expect(favicon).toContain("#ea6a13");
		expect(manifest.icons).toContainEqual({
			src: "/favicon.svg",
			sizes: "any",
			type: "image/svg+xml",
		});
	});
});
