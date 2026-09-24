import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Header } from "../components/Header";
import "../i18n/config";

vi.mock("@tanstack/react-router", () => ({
	useNavigate: () => vi.fn(),
	useParams: () => ({ lang: "pt" }),
}));

describe("Header language switch", () => {
	it("renders the alternate country flag as a stable image", () => {
		render(
			<Header
				isDarkMode={false}
				toggleDarkMode={vi.fn()}
				isMobileMenuOpen={false}
				setIsMobileMenuOpen={vi.fn()}
				handleNavClick={vi.fn()}
			/>,
		);

		const button = screen.getByRole("button", { name: "Change Language" });
		expect(button.querySelector('img[src="/flags/us.svg"]')).toBeInTheDocument();
		expect(button).not.toHaveTextContent("🇺🇸");
	});
});
