import { expect, test } from "@playwright/test";

test.describe("Mobile Header Layout Integrity", () => {
	test.use({ viewport: { width: 375, height: 667 } }); // iPhone SE size

	test("header elements should not exceed viewport width", async ({ page }) => {
		await page.goto("http://localhost:5173/");

		const header = page.locator(".header");
		const headerBox = await header.boundingBox();

		expect(headerBox?.width).toBeLessThanOrEqual(375);
	});

	test("mobile menu toggles navigation links", async ({ page }) => {
		await page.goto("http://localhost:5173/");

		// The header navigation should have an accessible name
		const mainNav = page.getByRole("navigation", { name: "Main Navigation" });
		const menuBtn = page.getByRole("button", {
			name: "Toggle Navigation Menu",
		});

		// Menu button should be visible on mobile
		await expect(menuBtn).toBeVisible();

		// Nav should be hidden initially
		await expect(mainNav).not.toBeVisible();

		// Click to open
		await menuBtn.click();
		await expect(mainNav).toBeVisible();

		// Click to close
		await menuBtn.click();
		await expect(mainNav).not.toBeVisible();
	});
});
