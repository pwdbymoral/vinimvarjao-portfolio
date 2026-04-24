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

const education = [
	{
		id: 1,
		institution: "UNINASSAU",
		degree: "B.S. in Systems Analysis and Development",
		period: "2023 — 2024",
		status: "Graduated",
		description:
			"Spearheaded technical leadership in cross-functional teams and delivered robust, real-world applications using modern Agile methodologies.",
		narrative: "Application Delivery & Leadership",
	},
	{
		id: 2,
		institution: "Federal University of Campina Grande (UFCG)",
		degree: "Computer Science",
		period: "2019 — 2022",
		status: "Academic Foundation",
		description:
			"Deep-dived into architectural design, matured collaborative engineering, and optimized code efficiency within the Computer Science program.",
		narrative: "Academic Foundation",
	},
];

const experience = [
	{
		id: 1,
		company: "4GrowthBR",
		role: "Traffic Team Leader & Software Engineer",
		period: "Aug 2025 — Present",
		description:
			"Lead, train, and supervise junior traffic managers while designing software solutions that improve campaign execution, CRM integrations, reporting, client workflows, and operational efficiency.",
		narrative: "Leadership, Systems & Growth",
	},
	{
		id: 2,
		company: "4GrowthBR",
		role: "Traffic Manager & Software Developer",
		period: "Sept 2024 — Aug 2025",
		description:
			"Managed paid media campaigns while building PWAs, APIs, automations, and integrations between traffic platforms, CRMs, spreadsheets, and internal workflows to improve performance and scalability.",
		narrative: "Marketing Performance & Automation",
	},
	{
		id: 3,
		company: "Uol Compass",
		role: "Cloud Engineering Intern",
		period: "2023 — 2024",
		description:
			"Reinforced and applied knowledge in data analysis, Python, AWS Lambda, cloud computing, and agile software development inside a Scrum-based enterprise engineering team.",
		narrative: "Cloud & Data Foundations",
	},
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
				"--top": top,
				"--left": left,
				"--right": right,
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
	const [activeCard, setActiveCard] = useState<"exp" | "edu">("exp");
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

	const handleNavClick = (card: "exp" | "edu") => {
		setActiveCard(card);
		const element = document.getElementById("resume");
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	const handleKeyDown = (e: React.KeyboardEvent, card: "exp" | "edu") => {
		if (e.key === "Enter" || e.key === " ") {
			e.preventDefault();
			handleNavClick(card);
		}
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
									<button
										type="button"
										onClick={() => handleNavClick("exp")}
										className="nav-link"
									>
										Experience
									</button>
								</li>
								<li>
									<button
										type="button"
										onClick={() => handleNavClick("edu")}
										className="nav-link"
									>
										Education
									</button>
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
							top="92%"
							left="-2%"
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
											aria-label={`View Source: ${project.title} code on GitHub (opens in a new tab)`}
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
												aria-label={`Live Demo: ${project.title} (opens in a new tab)`}
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

				{/* CAREER & EDUCATION SECTION */}
				<section id="resume" className="section resume-section">
					<div className="container">
						<h2 style={{ marginBottom: "1rem" }}>Career & Education</h2>
						<p style={{ marginBottom: "3rem", fontWeight: 600 }}>
							A journey of continuous learning and technical leadership.
						</p>
						<div
							className="stacked-cards-container"
							style={{ height: "700px" }}
						>
							<button
								type="button"
								className={`section-card experience-card ${activeCard === "exp" ? "is-active" : ""}`}
								onClick={() => handleNavClick("exp")}
								onKeyDown={(e) => handleKeyDown(e, "exp")}
								style={{ cursor: "pointer" }}
								aria-label="View Professional Experience"
							>
								<h2 className="card-heading">Professional Experience</h2>
								<div className="timeline">
									{experience.map((item) => (
										<div key={item.id} className="timeline-item">
											<div className="timeline-date">{item.period}</div>
											<div
												className="card-category"
												style={{ marginBottom: "0.5rem" }}
											>
												{item.narrative}
											</div>
											<h3 style={{ marginBottom: "0.25rem" }}>
												{item.company}
											</h3>
											<p
												style={{
													fontWeight: 800,
													fontSize: "1.1rem",
													marginBottom: "1rem",
													textTransform: "uppercase",
													color: "var(--accent-secondary)",
												}}
											>
												{item.role}
											</p>
											<p style={{ fontWeight: 600 }}>{item.description}</p>
										</div>
									))}
								</div>
							</button>

							<button
								type="button"
								className={`section-card education-card ${activeCard === "edu" ? "is-active" : ""}`}
								onClick={() => handleNavClick("edu")}
								onKeyDown={(e) => handleKeyDown(e, "edu")}
								style={{ cursor: "pointer" }}
								aria-label="View Education and Growth"
							>
								<h2 className="card-heading">Education & Growth</h2>
								<div className="timeline">
									{education.map((item) => (
										<div key={item.id} className="timeline-item">
											<div className="timeline-date">{item.period}</div>
											<div
												className="card-category"
												style={{ marginBottom: "0.5rem" }}
											>
												{item.narrative}
											</div>
											<h3 style={{ marginBottom: "0.25rem" }}>
												{item.institution}
											</h3>
											<p
												style={{
													fontWeight: 800,
													fontSize: "1.1rem",
													marginBottom: "1rem",
													textTransform: "uppercase",
													color: "var(--accent-secondary)",
												}}
											>
												{item.degree} • {item.status}
											</p>
											<p style={{ fontWeight: 600 }}>{item.description}</p>
										</div>
									))}
								</div>
							</button>
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
					<nav className="footer-nav" aria-label="Footer Navigation">
						<ul className="nav-links">
							<li>
								<a href="#work" className="nav-link">
									Work
								</a>
							</li>
							<li>
								<button
									type="button"
									onClick={() => handleNavClick("exp")}
									className="nav-link"
								>
									Experience
								</button>
							</li>
							<li>
								<button
									type="button"
									onClick={() => handleNavClick("edu")}
									className="nav-link"
								>
									Education
								</button>
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
					<div className="footer-socials">
						<a
							href="https://github.com/pwdbymoral"
							className="nav-link"
							aria-label="GitHub Profile (opens in a new tab)"
						>
							<GitHubIcon />
							GitHub
						</a>
						<a
							href="https://linkedin.com/in/vinmvarjao"
							className="nav-link"
							aria-label="LinkedIn Profile (opens in a new tab)"
						>
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
