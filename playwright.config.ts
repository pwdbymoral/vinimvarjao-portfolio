import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
	testDir: "./tests",
	fullyParallel: true,
	forbidOnly: !!process.env.CI,
	retries: process.env.CI ? 2 : 1,
	workers: process.env.CI ? 1 : 4,
	reporter: [
		["html"],
		["json", { outputFile: "test-results.json" }],
		["junit", { outputFile: "results.xml" }],
	],
	use: {
		baseURL: process.env.TEST_PROD
			? "http://localhost:4173"
			: "http://localhost:5173",
		trace: "on-first-retry",
		screenshot: "only-on-failure",
		video: "on-first-retry",
	},
	projects: [
		{
			name: "chromium",
			use: { ...devices["Desktop Chrome"] },
		},
		{
			name: "firefox",
			use: { ...devices["Desktop Firefox"] },
		},
		// {
		//   name: "webkit",
		//   use: { ...devices["Desktop Safari"] },
		// },
	],
	webServer: {
		command: process.env.TEST_PROD ? "npm run preview" : "npm run dev",
		url: process.env.TEST_PROD
			? "http://localhost:4173"
			: "http://localhost:5173",
		reuseExistingServer: !process.env.CI,
		timeout: 120000,
	},
});
