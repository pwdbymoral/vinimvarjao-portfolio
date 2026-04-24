import { expect, test } from "@playwright/test";

test.describe("Production Smoke Test", () => {
	test("should load the portfolio in production", async ({ page }) => {
		// This test is intended to run against the production build
		await page.goto("/");

		// Check for the brand name (it's in a div, not a heading)
		const brandName = page.getByText("VINÍCIUS VARJÃO");
		await expect(brandName).toBeVisible();

		// Check for the hero heading
		const heroHeading = page.getByRole("heading", { name: /Product/i });
		await expect(heroHeading).toBeVisible();

		// Check if the page title is correct (SEO requirement)
		await expect(page).toHaveTitle(/Vinícius Varjão/i);
	});
});
