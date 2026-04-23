import { expect, test } from "../fixtures";

test.describe("Portfolio Experience Section", () => {
	test.beforeEach(async ({ portfolioPage }) => {
		await portfolioPage.goto();
	});

	test("experience section is visible and contains synthesized career history", async ({
		portfolioPage,
	}) => {
		// Expect heading
		const heading = portfolioPage.page.getByRole("heading", {
			name: /Professional Experience|Work History/i,
		});
		await expect(heading).toBeVisible();

		// Scope all content checks to the #experience section
		const expSection = portfolioPage.page.locator("#experience");

		// Check for 4GrowthBR entry (two entries exist within experience section)
		const fourGrowth = expSection.getByText(/4GrowthBR/i).first();
		await expect(fourGrowth).toBeVisible();

		// Check for leadership role
		await expect(expSection.getByText(/Traffic Team Leader/i)).toBeVisible();

		// Check for software development focus (both 4GrowthBR roles contain this)
		await expect(
			expSection.getByText(/Software Developer/i).first(),
		).toBeVisible();

		// Check for Uol Compass entry
		await expect(expSection.getByText(/Uol Compass/i)).toBeVisible();
		await expect(
			expSection.getByText(/Cloud Engineering Intern/i),
		).toBeVisible();

		// Check for automation keywords (scoped to experience section)
		await expect(expSection.getByText(/PWA/i).first()).toBeVisible();
		await expect(expSection.getByText(/Pipedrive/i)).toBeVisible();
	});

	test("navigation link for experience works", async ({ portfolioPage }) => {
		const navLink = portfolioPage.navExperience;
		await expect(navLink).toBeVisible();
		await navLink.click();

		// Check if URL contains #experience or section is in view
		await expect(portfolioPage.page).toHaveURL(/.*#experience/);
		await expect(portfolioPage.sectionExperience).toBeInViewport();
	});

	test("mobile header includes experience link without breaking", async ({
		portfolioPage,
	}) => {
		// Set viewport to mobile
		await portfolioPage.page.setViewportSize({ width: 375, height: 667 });

		const navLink = portfolioPage.navExperience;
		await expect(navLink).toBeVisible();

		// Check if navigation is still functional and visible
		const boundingBox = await navLink.boundingBox();
		expect(boundingBox).not.toBeNull();
		expect(boundingBox!.width).toBeGreaterThan(0);
	});
});
