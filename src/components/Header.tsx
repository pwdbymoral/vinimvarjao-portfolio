import { useNavigate, useParams } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";

interface HeaderProps {
	isDarkMode: boolean;
	toggleDarkMode: () => void;
	isMobileMenuOpen: boolean;
	setIsMobileMenuOpen: (open: boolean) => void;
	handleNavClick: (card: "exp" | "edu") => void;
}

export const Header = ({
	isDarkMode,
	toggleDarkMode,
	isMobileMenuOpen,
	setIsMobileMenuOpen,
	handleNavClick,
}: HeaderProps) => {
	const { t, i18n } = useTranslation();
	const navigate = useNavigate();
	const { lang } = useParams({ strict: false });

	const changeLanguage = (newLang: string) => {
		i18n.changeLanguage(newLang);
		navigate({ to: `/${newLang}`, replace: true });
	};

	return (
		<header className="header">
			<div className="container header-content">
				<div className="brand">{t("common.brand")}</div>
				<div className="header-right">
					<nav
						aria-label={t("nav.main_nav_label") || "Main Navigation"}
						className={`main-nav ${isMobileMenuOpen ? "is-open" : ""}`}
					>
						<ul
							className="nav-links"
							onClick={() => setIsMobileMenuOpen(false)}
							onKeyDown={(e) => {
								if (e.key === "Enter" || e.key === " ") {
									setIsMobileMenuOpen(false);
								}
							}}
						>
							<li>
								<a href="#work" className="nav-link">
									{t("nav.work")}
								</a>
							</li>
							<li>
								<button
									type="button"
									onClick={() => handleNavClick("exp")}
									className="nav-link"
								>
									{t("nav.experience")}
								</button>
							</li>
							<li>
								<button
									type="button"
									onClick={() => handleNavClick("edu")}
									className="nav-link"
								>
									{t("nav.education")}
								</button>
							</li>
							<li>
								<a href="#about" className="nav-link">
									{t("nav.about")}
								</a>
							</li>
							<li>
								<a href="#contact" className="nav-link">
									{t("nav.contact")}
								</a>
							</li>
						</ul>
					</nav>
					<div className="header-actions">
						<button
							type="button"
							className="btn lang-switch"
							onClick={() => changeLanguage(lang === "en" ? "pt" : "en")}
							aria-label="Change Language"
						>
							{lang === "en" ? "🇧🇷 " : "🇺🇸 "}
							<span className="btn-text">{lang === "en" ? "PT" : "EN"}</span>
						</button>
						<button
							type="button"
							onClick={toggleDarkMode}
							className="btn"
							style={{ padding: "0.5rem 1rem", fontSize: "0.80rem" }}
							aria-label="Toggle Dark Mode"
						>
							{isDarkMode ? "☀️ " : "🌙 "}
							<span className="btn-text">
								{isDarkMode ? t("nav.light_mode") : t("nav.dark_mode")}
							</span>
						</button>
					</div>
					<div className="nav-toggle-container">
						<button
							type="button"
							className="mobile-menu-btn"
							onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
							aria-label="Toggle Navigation Menu"
							aria-expanded={isMobileMenuOpen}
						>
							<svg
								viewBox="0 0 24 24"
								width="24"
								height="24"
								stroke="currentColor"
								strokeWidth="3"
								fill="none"
								role="img"
								aria-label="Mobile Menu Icon"
							>
								<title>Mobile Menu Icon</title>
								{isMobileMenuOpen ? (
									<>
										<line x1="18" y1="6" x2="6" y2="18" />
										<line x1="6" y1="6" x2="18" y2="18" />
									</>
								) : (
									<>
										<line x1="3" y1="12" x2="21" y2="12" />
										<line x1="3" y1="6" x2="21" y2="6" />
										<line x1="3" y1="18" x2="21" y2="18" />
									</>
								)}
							</svg>
						</button>
					</div>
				</div>
			</div>
		</header>
	);
};
