import { expect, test } from "../fixtures";

test.describe("Portfolio Core Functionality", () => {
	test.beforeEach(async ({ portfolioPage }) => {
		await portfolioPage.goto();
	});

	test("hero section elements are visible", async ({ portfolioPage }) => {
		await expect(portfolioPage.heroTitle).toBeVisible();
		await expect(portfolioPage.heroTitle).toContainText(/Product/i);
		await expect(portfolioPage.heroTitle).toContainText(/Engineer/i);
		await expect(
			portfolioPage.page.getByText(/UX and Quality Assurance/i),
		).toBeVisible();
		await expect(portfolioPage.viewProjectsBtn).toBeVisible();
	});

	test("navigation links are present and visible", async ({
		portfolioPage,
	}) => {
		await expect(portfolioPage.brand).toBeVisible();
		await expect(portfolioPage.navWork).toBeVisible();
		await expect(portfolioPage.navAbout).toBeVisible();
		await expect(portfolioPage.navContact).toBeVisible();
	});

	test("availability badge is displayed", async ({ portfolioPage }) => {
		await expect(
			portfolioPage.page.getByText("Available for new opportunities"),
		).toBeVisible();
	});

	test("view projects button scrolls to work section", async ({
		portfolioPage,
	}) => {
		await portfolioPage.clickViewProjects();
		await expect(portfolioPage.sectionWorks).toBeInViewport();
	});

	test("project grid displays correct number of projects", async ({
		portfolioPage,
	}) => {
		const count = await portfolioPage.getProjectCount();
		expect(count).toBeGreaterThanOrEqual(4);
	});

	test("project cards contain details", async ({ portfolioPage }) => {
		const firstProject = portfolioPage.projectCards.first();
		await expect(firstProject.getByRole("heading", { level: 3 })).toBeVisible();
		await expect(firstProject.locator(".card-category")).toBeVisible();
		await expect(firstProject.locator(".tag").first()).toBeVisible();
	});

	test("the approach section is visible", async ({ portfolioPage }) => {
		await expect(portfolioPage.sectionAbout).toBeVisible();
		await expect(portfolioPage.page.getByText("The Approach")).toBeVisible();
	});

	test("footer displays social links", async ({ portfolioPage }) => {
		await expect(portfolioPage.footer).toBeVisible();
		await expect(
			portfolioPage.footer.getByRole("link", { name: /GitHub/i }),
		).toBeVisible();
		await expect(
			portfolioPage.footer.getByRole("link", { name: /LinkedIn/i }),
		).toBeVisible();
	});

	test("contains the specific real projects with github links", async ({
		portfolioPage,
	}) => {
		await expect(
			portfolioPage.page.getByRole("heading", { name: "Dindinho" }),
		).toBeVisible();
		await expect(
			portfolioPage.page.getByRole("heading", { name: "CheckFacil" }),
		).toBeVisible();
		await expect(
			portfolioPage.page.getByRole("heading", { name: "Lojinho do Tatu" }),
		).toBeVisible();
		await expect(
			portfolioPage.page.getByRole("heading", {
				name: "vinimvarjao-portfolio",
			}),
		).toBeVisible();

		// Check if each project card has a link (GitHub or Live)
		const projectLinks = portfolioPage.page.locator(".card").getByRole("link");
		const count = await projectLinks.count();
		expect(count).toBeGreaterThanOrEqual(4);

		// Specifically check for 'View Source' or 'GitHub'
		await expect(
			portfolioPage.page
				.getByRole("link", { name: /View Source|GitHub/i })
				.first(),
		).toBeVisible();
	});
});
