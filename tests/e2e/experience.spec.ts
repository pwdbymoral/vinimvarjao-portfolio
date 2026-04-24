import { expect, test } from "../fixtures";

test.describe("Portfolio Experience Section", () => {
	test.beforeEach(async ({ portfolioPage }) => {
		await portfolioPage.goto();
	});

	test("experience section is visible and contains synthesized career history", async ({
		portfolioPage,
	}) => {
		// Scope all content checks to the experience section card
		const expSection = portfolioPage.sectionExperience;

		// Expect heading
		const heading = expSection.getByRole("heading", {
			name: /Professional Experience|Work History/i,
		});
		await expect(heading).toBeVisible();

		// Check for 4GrowthBR entry (two entries exist within experience section)
		const fourGrowth = expSection.getByText(/4GrowthBR/i).first();
		await expect(fourGrowth).toBeVisible();

		// Check for leadership role
		await expect(expSection.getByText(/Traffic Team Leader/i)).toBeVisible();

		// Check for software engineering focus
		await expect(
			expSection.getByText(/Software Engineer/i).first(),
		).toBeVisible();

		// Check for Uol Compass entry
		await expect(expSection.getByText(/Uol Compass/i)).toBeVisible();
		await expect(
			expSection.getByText(/Cloud Engineering Intern/i),
		).toBeVisible();

		// Check for new narrative keywords (scoped to experience section)
		await expect(
			expSection.getByText(/CRM integrations/i).first(),
		).toBeVisible();
		await expect(expSection.getByText(/AWS Lambda/i)).toBeVisible();
	});

	test("navigation link for experience works", async ({ portfolioPage }) => {
		const navLink = portfolioPage.navExperience;
		await expect(navLink).toBeVisible();
		await navLink.click();

		// Check if section is in view (navigation now scrolls to #resume container)
		await expect(portfolioPage.sectionExperience).toBeInViewport();

		// Verify card is active
		await expect(portfolioPage.sectionExperience).toHaveClass(/is-active/);
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
		expect(boundingBox?.width).toBeGreaterThan(0);
	});
});
