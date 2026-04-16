import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "../App";

describe("App Component", () => {
	it("renders the portfolio title", () => {
		render(<App />);
		expect(screen.getByText(/PORTFOLIO/i)).toBeInTheDocument();
	});

	it("contains the hero section with correct wording", () => {
		render(<App />);
		expect(
			screen.getByText(/Crafting digital experiences/i),
		).toBeInTheDocument();
	});
});
