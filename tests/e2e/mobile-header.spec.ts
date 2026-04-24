import { expect, test } from "@playwright/test";

test.describe("Mobile Header Layout Integrity", () => {
	test.use({ viewport: { width: 375, height: 667 } }); // iPhone SE size

	test("header elements should not exceed viewport width", async ({ page }) => {
		await page.goto("http://localhost:5173/");

		const header = page.locator(".header");
		const headerBox = await header.boundingBox();

		expect(headerBox?.width).toBeLessThanOrEqual(375);
	});

	test("nav items and toggle should be positioned correctly (Option 1 check)", async ({
		page,
	}) => {
		await page.goto("http://localhost:5173/");

		const brand = page.locator(".brand");
		const toggle = page.locator(".nav-toggle-container");
		const nav = page.locator("header nav");

		const brandBox = await brand.boundingBox();
		const toggleBox = await toggle.boundingBox();
		const navBox = await nav.boundingBox();

		if (brandBox && toggleBox && navBox) {
			// In the problematic layout, nav and toggle are side-by-side but crowded.
			// In Option 1, Toggle should be vertically aligned with Brand,
			// and Nav should be below them.

			// This test is designed to FAIL before implementation of Option 1
			// because currently Nav and Toggle are side-by-side in .header-right

			// Expected for Option 1:
			// Toggle Y should be similar to Brand Y
			// Nav Y should be GREATER than Brand Y + height
			expect(navBox.y).toBeGreaterThan(brandBox.y + brandBox.height / 2);

			// Brand and Toggle should be on the same "row" (visually)
			expect(Math.abs(brandBox.y - toggleBox.y)).toBeLessThan(20);
		}
	});
});
