import { expect, test } from "../fixtures";

test.describe("Portfolio Education Section", () => {
	test.beforeEach(async ({ portfolioPage }) => {
		await portfolioPage.goto();
	});

	test("education section is visible and contains professional journey", async ({
		portfolioPage,
	}) => {
		// Expect heading inside education section
		const eduSection = portfolioPage.sectionEducation;
		const heading = eduSection.getByRole("heading", {
			name: /Education & Growth/i,
		});
		await expect(heading).toBeVisible();

		// Expect UFCG entry (Federal University of Campina Grande)
		const ufcg = eduSection.getByText(/Federal University of Campina Grande/i);
		await expect(ufcg).toBeVisible();
		await expect(
			eduSection.getByText(/Academic Foundation/i).first(),
		).toBeVisible();

		// Expect UNINASSAU entry
		const uninassau = eduSection.getByText(/UNINASSAU/i);
		await expect(uninassau).toBeVisible();
		await expect(
			eduSection.getByText(/Application Delivery & Leadership/i),
		).toBeVisible();

		// Expect timeline structure within the education section
		const timelineItems = eduSection.locator(".timeline-item");

		// Verify specific entries exist within the education section
		await expect(timelineItems.filter({ hasText: "UNINASSAU" })).toBeVisible();
		await expect(
			timelineItems.filter({ hasText: "Federal University of Campina Grande" }),
		).toBeVisible();

		// Narrative check
		await expect(eduSection).toContainText("Application Delivery & Leadership");
		await expect(eduSection).toContainText("Academic Foundation");
	});

	test("navigation link for education works", async ({ portfolioPage }) => {
		const navLink = portfolioPage.navEducation;
		await expect(navLink).toBeVisible();
		await navLink.click();

		// Check if section is in view
		await expect(portfolioPage.sectionEducation).toBeInViewport();

		// Verify card is active
		await expect(portfolioPage.sectionEducation).toHaveClass(/is-active/);
	});
});
