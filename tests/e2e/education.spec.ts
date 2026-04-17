import { expect, test } from "../fixtures";

test.describe("Portfolio Education Section", () => {
	test.beforeEach(async ({ portfolioPage }) => {
		await portfolioPage.goto();
	});

	test("education section is visible and contains professional journey", async ({
		portfolioPage,
	}) => {
		// Expect heading
		const heading = portfolioPage.page.getByRole("heading", {
			name: /Education|Journey/i,
		});
		await expect(heading).toBeVisible();

		// Expect UFCG entry (Federal University of Campina Grande)
		const ufcg = portfolioPage.page.getByText(
			/Federal University of Campina Grande/i,
		);
		await expect(ufcg).toBeVisible();
		await expect(
			portfolioPage.page.getByText(/Academic Foundation/i),
		).toBeVisible();

		// Expect UNINASSAU entry
		const uninassau = portfolioPage.page.getByText(/UNINASSAU/i);
		await expect(uninassau).toBeVisible();
		await expect(
			portfolioPage.page.getByText(/Application Delivery & Leadership/i),
		).toBeVisible();

		// Expect timeline structure
		const timelineItems = portfolioPage.page.locator(".timeline-item");
		await expect(timelineItems).toHaveCount(2);
	});
});
