import { readdirSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

describe("deployment asset topology", () => {
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
});
