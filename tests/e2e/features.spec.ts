import { expect, test } from "../fixtures";

test.describe("New Features - TDD Demo", () => {
	test("should display scroll to top button after scrolling down", async ({
		portfolioPage,
	}) => {
		await portfolioPage.goto();

		// Initially, the button should not be visible
		const scrollToTopBtn = portfolioPage.page.getByRole("button", {
			name: "Scroll to top",
		});
		await expect(scrollToTopBtn).not.toBeVisible();

		// Scroll down
		await portfolioPage.page.evaluate(() => window.scrollTo(0, 1000));

		// Now it should be visible (This will FAIL)
		await expect(scrollToTopBtn).toBeVisible();

		// Click it
		await scrollToTopBtn.click();

		// The button should disappear as we scroll up
		await expect(scrollToTopBtn).not.toBeVisible();

		// Verify we are back at the top
		await expect(async () => {
			const scrollTop = await portfolioPage.page.evaluate(() => window.scrollY);
			expect(scrollTop).toBe(0);
		}).toPass();
	});
});
