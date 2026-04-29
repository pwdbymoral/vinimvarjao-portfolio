import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Portfolio } from "../components/Portfolio";
import "../i18n/config";

// Mock router hooks since Portfolio uses them via Header
import { vi } from "vitest";

vi.mock("@tanstack/react-router", () => ({
	useNavigate: () => vi.fn(),
	useRouter: () => ({ state: { location: { pathname: "/en" } } }),
	Link: ({ children, to }: { children: React.ReactNode; to?: string }) => (
		<a href={to || "#"}>{children}</a>
	),
	useParams: () => ({ lang: "en" }),
}));

describe("Portfolio Component", () => {
	it("renders the hero title", () => {
		render(<Portfolio />);
		const elements = screen.getAllByText(/Product Engineer/i);
		expect(elements.length).toBeGreaterThanOrEqual(1);
		expect(elements[0]).toBeInTheDocument();
	});

	it("contains the hero section with the mission summary", () => {
		render(<Portfolio />);
		const elements = screen.getAllByText(/UX/i);
		expect(elements.length).toBeGreaterThanOrEqual(1);
	});

	it("renders the 4 selected projects with links", () => {
		render(<Portfolio />);
		const dindinho = screen.getByText("Dindinho");
		expect(dindinho).toBeInTheDocument();
		expect(screen.getByText("CheckFacil")).toBeInTheDocument();
		expect(screen.getByText("Lojinho do Tatu")).toBeInTheDocument();
		expect(screen.getByText("vinimvarjao-portfolio")).toBeInTheDocument();

		// Check if GitHub links are present
		const githubLinks = screen.getAllByRole("link", { name: /GitHub/i });
		expect(githubLinks.length).toBeGreaterThanOrEqual(4);
	});
});
