import type { Page } from "@playwright/test";

export class BasePage {
	readonly page: Page;

	constructor(page: Page) {
		this.page = page;
	}

	/**
	 * Navigate to a relative URL
	 */
	async goto(path: string) {
		await this.page.goto(path);
	}

	/**
	 * Wait for page to be fully loaded
	 */
	async waitForPageLoad() {
		await this.page.waitForLoadState("domcontentloaded");
	}

	/**
	 * Get URL of current page
	 */
	url(): string {
		return this.page.url();
	}
}
