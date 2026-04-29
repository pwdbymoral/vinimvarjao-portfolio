import { useTranslation } from "react-i18next";
import { GitHubIcon, LinkedInIcon } from "./Icons";

interface FooterProps {
	handleNavClick: (card: "exp" | "edu") => void;
}

export const Footer = ({ handleNavClick }: FooterProps) => {
	const { t } = useTranslation();

	return (
		<footer className="footer">
			<div className="container">
				<nav className="footer-nav" aria-label="Footer Navigation">
					<ul className="nav-links">
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
				<div className="footer-socials">
					<a href="https://github.com/pwdbymoral" className="nav-link">
						<GitHubIcon />
						GitHub
						<span className="sr-only"> {t("contact.sr_tab")}</span>
					</a>
					<a href="https://linkedin.com/in/vinimvarjao" className="nav-link">
						<LinkedInIcon />
						LinkedIn
						<span className="sr-only"> {t("contact.sr_tab")}</span>
					</a>
				</div>
				<p style={{ fontWeight: 800, textTransform: "uppercase" }}>
					{t("footer.copy")}
				</p>
			</div>
		</footer>
	);
};
