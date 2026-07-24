import { expect, test } from "@playwright/test";

test.describe("Bio contact hub", () => {
	test.use({ viewport: { width: 390, height: 844 } });

	test("renders the mobile-first page without horizontal overflow", async ({
		page,
	}) => {
		await page.goto("/pt/bio");

		await expect(
			page.getByRole("heading", { level: 1, name: "Vinícius Varjão" }),
		).toBeVisible();
		await expect(page.getByText("Desenvolvimento de software")).toBeVisible();
		await expect(page.getByText("Tráfego pago")).toBeVisible();
		await expect(page.getByText("Automações e integrações")).toBeVisible();

		const whatsappLinks = page.getByRole("link", {
			name: /Falar sobre um projeto/i,
		});
		await expect(whatsappLinks).toHaveCount(2);
		await expect(whatsappLinks.first()).toHaveAttribute(
			"href",
			/^https:\/\/wa\.me\/5579981370707/,
		);

		const documentWidth = await page.evaluate(
			() => document.documentElement.scrollWidth,
		);
		expect(documentWidth).toBeLessThanOrEqual(390);
	});

	test("uses the intended portrait crop", async ({ page }) => {
		await page.goto("/pt/bio");

		const portrait = page.locator(".bio-photo");
		await expect(portrait).toHaveCSS("object-position", "50% 42%");
		await expect(portrait).toHaveCSS(
			"transform",
			"matrix(1.44, 0, 0, 1.44, 0, 0)",
		);
	});

	test("uses one clean Forja cursor shape with link color feedback", async ({
		page,
	}) => {
		await page.goto("/pt/bio");

		const bodyCursor = await page
			.locator("body")
			.evaluate((element) =>
				window.getComputedStyle(element).cursor.toLowerCase(),
			);
		const linkCursors = await page
			.locator(".bio-primary-cta, .bio-scroll-cue")
			.evaluateAll((elements) =>
				elements.map((element) =>
					window.getComputedStyle(element).cursor.toLowerCase(),
				),
			);

		expect(bodyCursor).toContain("width='24'");
		expect(bodyCursor).toContain("%23f0f0f0");
		expect(bodyCursor).toContain("%23250a2b");
		expect(bodyCursor).not.toContain("<circle");

		expect(new Set(linkCursors).size).toBe(1);
		for (const cursor of linkCursors) {
			expect(cursor).toContain("width='24'");
			expect(cursor).toContain("%23ea6a13");
			expect(cursor).toContain("%23250a2b");
			expect(cursor).not.toContain("<circle");
		}
	});

	test("smoothly reveals services while respecting reduced motion", async ({
		page,
	}) => {
		await page.addInitScript(() => {
			const scrollIntoView = Element.prototype.scrollIntoView;

			Element.prototype.scrollIntoView = function (
				options?: boolean | ScrollIntoViewOptions,
			) {
				if (typeof options === "object") {
					document.documentElement.dataset.bioScrollBehavior =
						options.behavior ?? "";
				}
				return scrollIntoView.call(this, options);
			};
		});
		await page.goto("/pt/bio");

		await page.locator(".bio-scroll-cue").click();
		await expect(page).toHaveURL(/#services$/);
		await expect(page.locator("#services")).toBeInViewport();
		await expect(page.locator("html")).toHaveAttribute(
			"data-bio-scroll-behavior",
			"smooth",
		);

		await page.emulateMedia({ reducedMotion: "reduce" });
		await page.goto("/pt/bio");
		await page.locator(".bio-scroll-cue").click();
		await expect(page.locator("html")).toHaveAttribute(
			"data-bio-scroll-behavior",
			"auto",
		);
	});

	test("exposes the authorized secondary contacts", async ({ page }) => {
		await page.goto("/pt/bio");

		await expect(page.getByRole("link", { name: "LinkedIn" })).toHaveAttribute(
			"href",
			"https://www.linkedin.com/in/vinimvarjao/",
		);
		await expect(page.getByRole("link", { name: "Instagram" })).toHaveAttribute(
			"href",
			"https://www.instagram.com/vinimvarjao/",
		);
		await expect(page.getByRole("link", { name: "GitHub" })).toHaveAttribute(
			"href",
			"https://github.com/pwdbymoral",
		);
		await expect(page.getByRole("link", { name: "Twitter" })).toHaveAttribute(
			"href",
			"https://x.com/vinimvarjao",
		);
		await expect(page.getByRole("link", { name: "E-mail" })).toHaveAttribute(
			"href",
			"mailto:moraesvxp@gmail.com",
		);
	});

	test("keeps the WhatsApp call to action legible on hover", async ({
		page,
	}) => {
		await page.goto("/pt/bio");

		const whatsappLink = page
			.getByRole("link", { name: /Falar sobre um projeto/i })
			.first();
		await whatsappLink.hover();
		await page.waitForTimeout(200);

		const colors = await whatsappLink.evaluate((element) => {
			const style = window.getComputedStyle(element);
			const title = element.querySelector("strong");

			return {
				background: style.backgroundColor,
				text: title ? window.getComputedStyle(title).color : "",
			};
		});

		expect(colors).toEqual({
			background: "rgb(255, 227, 164)",
			text: "rgb(37, 10, 43)",
		});
	});
});
