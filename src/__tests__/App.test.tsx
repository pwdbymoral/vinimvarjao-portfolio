import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "../App";

describe("App Component", () => {
	it("renders the professional name (Vinícius Varjão)", () => {
		render(<App />);
		const elements = screen.getAllByText(/Vinícius Varjão/i);
		expect(elements.length).toBeGreaterThanOrEqual(1);
		expect(elements[0]).toBeInTheDocument();
	});

	it("contains the hero section with the mission summary", () => {
		render(<App />);
		expect(screen.getByText(/UX e QA/i)).toBeInTheDocument();
		expect(
			screen.getByText(/fluxos de trabalho otimizados/i),
		).toBeInTheDocument();
	});

	it("renders the 4 selected projects", () => {
		render(<App />);
		expect(screen.getByText("Dindinho")).toBeInTheDocument();
		expect(screen.getByText("CheckFacil")).toBeInTheDocument();
		expect(screen.getByText("Lojinho do Tatu")).toBeInTheDocument();
		expect(screen.getByText("vinimvarjao-portfolio")).toBeInTheDocument();
	});
});
