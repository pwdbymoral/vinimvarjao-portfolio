import { expect, test } from "../fixtures";
import { expectNoA11yViolations } from "../utils/a11y-helper";

test.describe("Accessibility Audit", () => {
	test.beforeEach(async ({ portfolioPage }) => {
		await portfolioPage.goto();
	});

	test("homepage should have no accessibility violations (WCAG 2.1 AA)", async ({
		page,
	}) => {
		await expectNoA11yViolations(page);
	});

	test("keyboard navigation should follow a logical header order", async ({
		page,
	}) => {
		// Ensure focus is at the top of the body
		await page.click("body", { position: { x: 0, y: 0 } });

		// Start from the top
		await page.keyboard.press("Tab");
		// First focusable element should be 'Work' link (since brand is a div)
		await expect(
			page.getByRole("link", { name: "Work" }).first(),
		).toBeFocused();

		await page.keyboard.press("Tab");
		await expect(
			page.getByRole("button", { name: "Experience" }).first(),
		).toBeFocused();

		await page.keyboard.press("Tab");
		await expect(
			page.getByRole("button", { name: "Education" }).first(),
		).toBeFocused();

		await page.keyboard.press("Tab");
		await expect(
			page.getByRole("link", { name: "About" }).first(),
		).toBeFocused();

		await page.keyboard.press("Tab");
		await expect(
			page.getByRole("link", { name: "Contact" }).first(),
		).toBeFocused();

		await page.keyboard.press("Tab");
		await expect(
			page.getByRole("button", { name: "Change Language" }),
		).toBeFocused();

		await page.keyboard.press("Tab");
		await expect(
			page.getByRole("button", { name: /LIGHT|DARK/i }),
		).toBeFocused();
	});

	test("semantic landmarks should be present", async ({ page }) => {
		await expect(page.locator("header")).toBeVisible();
		await expect(page.locator("main")).toBeVisible();
		await expect(page.locator("footer")).toBeVisible();
		await expect(page.locator("nav")).toHaveCount(2); // Header and Footer
	});

	test("dark mode should maintain color contrast", async ({
		portfolioPage,
		page,
	}) => {
		await portfolioPage.toggleDarkMode();
		await expectNoA11yViolations(page, { tags: ["color-contrast"] });
	});

	test("images and icons should have alternative text or titles", async ({
		page,
	}) => {
		// Check for SVGs with titles/aria-labels
		const icons = page.locator("svg");
		const count = await icons.count();
		for (let i = 0; i < count; i++) {
			const icon = icons.nth(i);
			const label = await icon.getAttribute("aria-label");
			const title = await icon.locator("title").count();
			expect(label || title > 0).toBeTruthy();
		}
	});
});
