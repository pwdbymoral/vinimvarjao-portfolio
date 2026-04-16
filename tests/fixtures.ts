import { test as base } from "@playwright/test";
import { TestDataFactory } from "./helpers/test-data";
import { PortfolioPage } from "./pages/PortfolioPage";

type TestFixtures = {
	uniqueTestData: TestDataFactory;
	portfolioPage: PortfolioPage;
};

type WorkerFixtures = {
	workerId: string;
};

export const test = base.extend<TestFixtures, WorkerFixtures>({
	// Worker fixture
	workerId: [
		async ({}, use, testInfo) => {
			await use(`w${testInfo.parallelIndex}`);
		},
		{ scope: "worker" },
	],

	// Test data factory fixture
	uniqueTestData: async ({ workerId }, use) => {
		await use(new TestDataFactory(workerId));
	},

	// Page object fixtures
	portfolioPage: async ({ page }, use) => {
		await use(new PortfolioPage(page));
	},
});

export { expect } from "@playwright/test";
