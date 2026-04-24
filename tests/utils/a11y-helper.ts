import AxeBuilder from "@axe-core/playwright";
import { expect, type Page } from "@playwright/test";

export async function checkA11y(
	page: Page,
	options?: {
		include?: string[];
		exclude?: string[];
		tags?: string[];
	},
) {
	let builder = new AxeBuilder({ page });

	if (options?.include) {
		builder = builder.include(options.include);
	}

	if (options?.exclude) {
		builder = builder.exclude(options.exclude);
	}

	if (options?.tags) {
		builder = builder.withTags(options.tags);
	} else {
		// Default to WCAG 2.1 AA
		builder = builder.withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"]);
	}

	const results = await builder.analyze();

	if (results.violations.length > 0) {
		console.error(
			"Accessibility violations:",
			JSON.stringify(results.violations, null, 2),
		);
	}

	return results.violations;
}

export async function expectNoA11yViolations(
	page: Page,
	options?: Parameters<typeof checkA11y>[1],
) {
	const violations = await checkA11y(page, options);
	expect(violations).toEqual([]);
}
