import type { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class PortfolioPage extends BasePage {
	readonly brand: Locator;
	readonly navWork: Locator;
	readonly navAbout: Locator;
	readonly navContact: Locator;
	readonly heroTitle: Locator;
	readonly viewProjectsBtn: Locator;
	readonly getInTouchBtn: Locator;
	readonly projectCards: Locator;
	readonly sectionWorks: Locator;
	readonly sectionAbout: Locator;
	readonly footer: Locator;

	constructor(page: Page) {
		super(page);
		this.brand = page.locator(".header").getByText(/VINÍCIUS VARJÃO/i);
		this.navWork = page.locator(".header").getByRole("link", { name: /Work/i });
		this.navAbout = page
			.locator(".header")
			.getByRole("link", { name: /About/i });
		this.navContact = page
			.locator(".header")
			.getByRole("link", { name: /Contact/i });
		this.heroTitle = page.getByRole("heading", { level: 1 });
		this.viewProjectsBtn = page.getByRole("link", { name: /Selected Work/i });
		this.getInTouchBtn = page.getByRole("link", { name: "Get in touch" });
		this.projectCards = page.locator(".card");
		this.sectionWorks = page.locator("#work");
		this.sectionAbout = page.locator("#about");
		this.footer = page.getByRole("contentinfo");
	}

	async goto() {
		await super.goto("/");
	}

	async clickWork() {
		await this.navWork.click();
	}

	async clickViewProjects() {
		await this.viewProjectsBtn.click();
	}

	async getProjectCount() {
		return await this.projectCards.count();
	}
}
