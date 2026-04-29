import { createRootRoute, Outlet } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export const Route = createRootRoute({
	component: RootLayout,
});

function RootLayout() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [isVisible, setIsVisible] = useState(false);
	const [isDarkMode, setIsDarkMode] = useState(() => {
		if (typeof window !== "undefined") {
			const saved = localStorage.getItem("darkMode");
			return saved ? JSON.parse(saved) : false;
		}
		return false;
	});

	useEffect(() => {
		const toggleVisibility = () => {
			if (window.scrollY > 300) setIsVisible(true);
			else setIsVisible(false);
		};
		window.addEventListener("scroll", toggleVisibility);
		return () => window.removeEventListener("scroll", toggleVisibility);
	}, []);

	useEffect(() => {
		const root = window.document.documentElement;
		if (isDarkMode) root.classList.add("dark");
		else root.classList.remove("dark");
		localStorage.setItem("darkMode", JSON.stringify(isDarkMode));
	}, [isDarkMode]);

	const handleNavClick = (card: "exp" | "edu") => {
		setIsMobileMenuOpen(false);
		const element = document.getElementById("resume");
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
		// Dispatch event to update active card in Portfolio component
		window.dispatchEvent(new CustomEvent("setActiveCard", { detail: card }));
	};

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "auto" });
	};

	return (
		<>
			<Header
				isDarkMode={isDarkMode}
				toggleDarkMode={() => setIsDarkMode(!isDarkMode)}
				isMobileMenuOpen={isMobileMenuOpen}
				setIsMobileMenuOpen={setIsMobileMenuOpen}
				handleNavClick={handleNavClick}
			/>
			<Outlet />
			<Footer handleNavClick={handleNavClick} />
			{isVisible && (
				<button
					type="button"
					onClick={scrollToTop}
					className="scroll-to-top"
					aria-label="Scroll to top"
				>
					↑
				</button>
			)}
		</>
	);
}
