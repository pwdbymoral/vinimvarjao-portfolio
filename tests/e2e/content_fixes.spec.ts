import { expect, test } from "@playwright/test";
import { PortfolioPage } from "../pages/PortfolioPage";

test.describe("Content Accuracy and Visibility Fixes", () => {
	let portfolio: PortfolioPage;

	test.beforeEach(async ({ page }) => {
		portfolio = new PortfolioPage(page);
		await portfolio.goto();
	});

	test("should not contain hallucinated leadership title", async ({ page }) => {
		// This should FAIL initially because I added it in the previous turn
		await expect(
			page.getByText(/Available for technical leadership/i),
		).not.toBeVisible();
	});

	test("should restore original hero description", async ({ page }) => {
		// The description should match the original text
		const originalText =
			/Expert in the intersection of UX and Quality Assurance/i;
		await expect(page.getByText(originalText)).toBeVisible();
	});

	test("hero description should be visible in dark mode", async ({ page }) => {
		await portfolio.toggleDarkMode();
		await expect(page.locator("html")).toHaveClass(/dark/);
		const heroDesc = page.locator(".hero-description");

		// Web-first assertion avoids race conditions with transitions
		await expect(heroDesc).toHaveCSS("background-color", "rgb(0, 0, 0)");
	});

	test("project cards should be visible in dark mode", async ({ page }) => {
		await portfolio.toggleDarkMode();
		await expect(page.locator("html")).toHaveClass(/dark/);
		const card = page.locator(".card").first();
		await expect(card).toHaveCSS("background-color", "rgb(0, 0, 0)");
	});
});
