import { useEffect, useState } from "react";

const GitHubIcon = () => (
	<svg
		viewBox="0 0 24 24"
		width="20"
		height="20"
		stroke="currentColor"
		strokeWidth="3"
		fill="none"
		strokeLinecap="round"
		strokeLinejoin="round"
		style={{ verticalAlign: "middle", marginRight: "8px" }}
		role="img"
		aria-label="GitHub Icon"
	>
		<title>GitHub Icon</title>
		<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
	</svg>
);

const ExternalIcon = () => (
	<svg
		viewBox="0 0 24 24"
		width="18"
		height="18"
		stroke="currentColor"
		strokeWidth="3"
		fill="none"
		strokeLinecap="round"
		strokeLinejoin="round"
		style={{ verticalAlign: "middle", marginRight: "8px" }}
		role="img"
		aria-label="External Link Icon"
	>
		<title>External Link Icon</title>
		<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
		<polyline points="15 3 21 3 21 9" />
		<line x1="10" y1="14" x2="21" y2="3" />
	</svg>
);

const LinkedInIcon = () => (
	<svg
		viewBox="0 0 24 24"
		width="20"
		height="20"
		stroke="currentColor"
		strokeWidth="3"
		fill="none"
		strokeLinecap="round"
		strokeLinejoin="round"
		style={{ verticalAlign: "middle", marginRight: "8px" }}
		role="img"
		aria-label="LinkedIn Icon"
	>
		<title>LinkedIn Icon</title>
		<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
		<rect x="2" y="9" width="4" height="12" />
		<circle cx="4" cy="4" r="2" />
	</svg>
);

const projects = [
	{
		id: 1,
		title: "Dindinho",
		category: "Fintech / PWA",
		description:
			"Full-stack PWA for financial organization, featuring shared expenses and URL-based state synchronization for collaboration.",
		tags: ["Angular", "Node.js", "Prisma", "MySQL"],
		repoUrl: "https://github.com/forjacorp/dindinho",
	},
	{
		id: 2,
		title: "CheckFacil",
		category: "Event Management / PWA",
		description:
			"Event management PWA with real-time check-in/out and a scalable monorepo architecture for event staff.",
		tags: ["React", "Node.js", "TypeScript", "Turborepo"],
		repoUrl: "https://github.com/forjacorp/checkFacil",
	},
	{
		id: 3,
		title: "Lojinho do Tatu",
		category: "E-commerce Study",
		description:
			"Full-stack e-commerce platform focused on server-side rendering, modern UI patterns, and Storybook documentation.",
		tags: ["Next.js", "React", "Tailwind CSS", "Storybook"],
		repoUrl: "https://github.com/pwdbymoral/lojinho-do-tatu-nextjs",
		liveUrl: "https://lojinhodotatu.vercel.app",
	},
	{
		id: 4,
		title: "vinimvarjao-portfolio",
		category: "Personal Portfolio",
		description:
			"Premium developer portfolio built with a focus on TDD, extreme code quality, and automated testing pipelines.",
		tags: ["React", "TypeScript", "Playwright", "Vitest"],
		repoUrl: "https://github.com/pwdbymoral/vinimvarjao-portfolio",
	},
];

const skills = [
	"React",
	"Angular",
	"TypeScript",
	"Node.js",
	"Playwright",
	"Vitest",
	"PostgreSQL",
	"MySQL",
	"Docker",
	"UX Strategy",
	"TDD",
	"Product Engineering",
];

interface StickerProps {
	text: string;
	top?: string;
	left?: string;
	right?: string;
	rotation?: string;
	className?: string;
}

const Sticker = ({
	text,
	top,
	left,
	right,
	rotation,
	className,
}: StickerProps) => (
	<div
		className={`sticker ${className || ""}`}
		style={
			{
				top,
				left,
				right,
				"--rotation": rotation,
			} as React.CSSProperties
		}
	>
		{text}
	</div>
);

const SkillsMarquee = () => {
	const skillsWithId = [
		...skills.map((s) => ({ name: s, id: `1-${s}` })),
		...skills.map((s) => ({ name: s, id: `2-${s}` })),
	];

	return (
		<div className="marquee-container">
			<div className="marquee-content">
				{skillsWithId.map((skill) => (
					<div key={skill.id} className="marquee-item">
						{skill.name}
					</div>
				))}
			</div>
		</div>
	);
};

const StatusBadge = () => (
	<div className="status-badge">
		<div className="status-dot" />
		Available for new opportunities
	</div>
);

function App() {
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
			if (window.scrollY > 300) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		};

		window.addEventListener("scroll", toggleVisibility);
		return () => window.removeEventListener("scroll", toggleVisibility);
	}, []);

	useEffect(() => {
		const root = window.document.documentElement;
		if (isDarkMode) {
			root.classList.add("dark");
		} else {
			root.classList.remove("dark");
		}
		localStorage.setItem("darkMode", JSON.stringify(isDarkMode));
	}, [isDarkMode]);

	const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "auto",
		});
	};

	return (
		<>
			<header className="header">
				<div className="container header-content">
					<div
						className="brand"
						style={{
							fontSize: "1.5rem",
							fontWeight: 900,
							letterSpacing: "-0.05em",
							textTransform: "uppercase",
						}}
					>
						VINÍCIUS VARJÃO
					</div>
					<div className="header-right">
						<nav>
							<ul className="nav-links">
								<li>
									<a href="#work" className="nav-link">
										Work
									</a>
								</li>
								<li>
									<a href="#about" className="nav-link">
										About
									</a>
								</li>
								<li>
									<a href="#contact" className="nav-link">
										Contact
									</a>
								</li>
							</ul>
						</nav>
						<div className="nav-toggle-container">
							<button
								type="button"
								onClick={toggleDarkMode}
								className="btn"
								style={{
									padding: "0.5rem 1rem",
									fontSize: "0.80rem",
								}}
								aria-label="Toggle Dark Mode"
							>
								{isDarkMode ? "☀️ LIGHT" : "🌙 DARK"}
							</button>
						</div>
					</div>
				</div>
			</header>

			<main>
				<section className="hero">
					<div className="container" style={{ textAlign: "left" }}>
						<StatusBadge />
						<h1 className="hero-title">
							Product <br />
							Engineer.
						</h1>
						<div className="hero-description">
							I solve real problems through technical excellence and business
							strategy. Expert in the intersection of UX and Quality Assurance.
						</div>
						<div
							style={{
								display: "flex",
								gap: "1.5rem",
								flexWrap: "wrap",
							}}
						>
							<a href="#work" className="btn btn-primary">
								Selected Work ↓
							</a>
							<a href="#contact" className="btn">
								Get in touch
							</a>
						</div>

						<Sticker
							text="INFRA DRIVEN"
							top="15%"
							right="5%"
							rotation="5deg"
							className="sticker-1"
						/>
						<Sticker
							text="PRODUCT DRIVEN"
							top="45%"
							left="2%"
							rotation="-8deg"
							className="sticker-2"
						/>
						<Sticker
							text="UX STRATEGY"
							top="75%"
							right="3%"
							rotation="3deg"
							className="sticker-3"
						/>
						<Sticker
							text="ACCESSIBLE"
							top="85%"
							left="5%"
							rotation="12deg"
							className="sticker-4"
						/>
					</div>
				</section>

				<SkillsMarquee />

				<section id="work" className="section">
					<div className="container">
						<h2>Selected Works</h2>
						<div className="grid">
							{projects.map((project) => (
								<div key={project.id} className="card">
									<div className="card-category">{project.category}</div>
									<h3 className="card-title">{project.title}</h3>
									<p style={{ fontWeight: 600, marginBottom: "1.5rem" }}>
										{project.description}
									</p>
									<div className="card-footer">
										{project.tags.map((tag) => (
											<span key={tag} className="tag">
												{tag}
											</span>
										))}
									</div>
									<div
										style={{
											marginTop: "2rem",
											display: "flex",
											flexDirection: "column",
											gap: "1rem",
										}}
									>
										<a
											href={project.repoUrl}
											className="btn"
											style={{ padding: "0.5rem 1rem", fontSize: "0.9rem" }}
											target="_blank"
											rel="noopener noreferrer"
											aria-label={`View source code for ${project.title} on GitHub (opens in a new tab)`}
										>
											<GitHubIcon />
											View Source
										</a>
										{project.liveUrl && (
											<a
												href={project.liveUrl}
												className="btn"
												style={{
													padding: "0.5rem 1rem",
													fontSize: "0.9rem",
													background: "var(--accent-primary)",
												}}
												target="_blank"
												rel="noopener noreferrer"
												aria-label={`View live demo of ${project.title} (opens in a new tab)`}
											>
												<ExternalIcon />
												Live Demo
											</a>
										)}
									</div>
								</div>
							))}
						</div>
					</div>
				</section>

				<section
					id="about"
					className="section"
					style={{
						background: "var(--accent-primary)",
						borderTop: "var(--border-main)",
					}}
				>
					<div className="container">
						<h2>The Approach</h2>
						<div
							style={{
								background: "var(--bg-primary)",
								border: "var(--border-main)",
								boxShadow: "var(--shadow-main)",
								padding: "2rem",
								maxWidth: "800px",
							}}
						>
							<p
								style={{
									fontSize: "1.5rem",
									fontWeight: 800,
									lineHeight: 1.2,
								}}
							>
								I build software that doesn't just work—it scales and solves. By
								connecting code to strategy and UX, I ensure every line delivers
								real business value.
							</p>
						</div>
					</div>
				</section>

				<section id="contact" className="section">
					<div className="container">
						<h2>Connect</h2>
						<div className="grid">
							<a
								href="https://github.com/pwdbymoral"
								className="btn"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Visit my GitHub profile (opens in a new tab)"
							>
								<GitHubIcon />
								GitHub Profile
							</a>
							<a
								href="https://linkedin.com/in/vinmvarjao"
								className="btn"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Connect with me on LinkedIn (opens in a new tab)"
							>
								<LinkedInIcon />
								LinkedIn
							</a>
						</div>
					</div>
				</section>
			</main>

			<footer className="footer">
				<div className="container">
					<ul className="nav-links">
						<li>
							<a href="#work" className="nav-link">
								Work
							</a>
						</li>
						<li>
							<a href="#about" className="nav-link">
								About
							</a>
						</li>
						<li>
							<a href="#contact" className="nav-link">
								Contact
							</a>
						</li>
					</ul>
					<div className="footer-socials">
						<a href="https://github.com/pwdbymoral" className="nav-link">
							<GitHubIcon />
							GitHub
						</a>
						<a href="https://linkedin.com/in/vinmvarjao" className="nav-link">
							<LinkedInIcon />
							LinkedIn
						</a>
					</div>
					<p style={{ fontWeight: 800, textTransform: "uppercase" }}>
						&copy; 2026 Developed with Product Engineering mindset
					</p>
				</div>
			</footer>

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

export default App;
