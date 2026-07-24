import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { BioPage } from "../components/BioPage";

describe("BioPage", () => {
	it("prioritizes a qualified WhatsApp conversation and the three services", () => {
		render(<BioPage lang="pt" />);

		expect(
			screen.getByRole("heading", { level: 1, name: /Vinícius Varjão/i }),
		).toBeInTheDocument();
		expect(screen.getByText("Growth Engineer")).toBeInTheDocument();

		const homeLink = screen.getByRole("link", { name: "Página inicial" });
		expect(homeLink).toHaveAttribute("href", "/pt");
		expect(homeLink).not.toHaveTextContent("VV");
		expect(homeLink.querySelector(".bio-forja-symbol")).toBeInTheDocument();

		const whatsappLinks = screen.getAllByRole("link", {
			name: /Falar sobre um projeto/i,
		});
		expect(whatsappLinks).toHaveLength(2);
		for (const link of whatsappLinks) {
			expect(link).toHaveAttribute(
				"href",
				expect.stringContaining("https://wa.me/5579981370707"),
			);
			expect(link.querySelector(".bio-primary-icon svg")).toBeInTheDocument();
		}

		const services = within(
			screen.getByRole("region", { name: "Serviços" }),
		).getAllByRole("heading", { level: 3 });

		expect(services.map((service) => service.textContent)).toEqual([
			"Desenvolvimento de software",
			"Tráfego pago",
			"Automações e integrações",
		]);
	});

	it("keeps only approved secondary contacts and omits portfolio links", () => {
		render(<BioPage lang="pt" />);

		const languageLink = screen.getByRole("link", {
			name: "Ver página em inglês",
		});
		expect(languageLink).toHaveTextContent("English");
		expect(
			languageLink.querySelector(".bio-language-flag"),
		).not.toBeInTheDocument();

		const contacts = within(
			screen.getByRole("navigation", { name: "Outros contatos" }),
		);

		const expectedContacts = [
			["LinkedIn", "https://www.linkedin.com/in/vinimvarjao/"],
			["Instagram", "https://www.instagram.com/vinimvarjao/"],
			["GitHub", "https://github.com/pwdbymoral"],
			["Twitter", "https://x.com/vinimvarjao"],
			["E-mail", "mailto:moraesvxp@gmail.com"],
		] as const;

		for (const [label, href] of expectedContacts) {
			const link = contacts.getByRole("link", { name: label });
			expect(link).toHaveAttribute("href", href);
			expect(link.querySelector(".bio-contact-icon svg")).toBeInTheDocument();
		}

		expect(screen.queryByText(/portf[oó]lio/i)).not.toBeInTheDocument();
		expect(screen.getByAltText("ForjaCorp")).toBeInTheDocument();
	});

	it("shows the alternate language as the direct switch action", () => {
		render(<BioPage lang="en" />);

		expect(
			screen.getByRole("link", { name: "Portfolio home" }),
		).toHaveAttribute("href", "/en");
		expect(
			screen.getByRole("link", { name: "View page in Portuguese" }),
		).toHaveTextContent("Português");
	});
});
