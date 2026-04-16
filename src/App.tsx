import { useEffect, useState } from "react";

const projects = [
	{
		id: 1,
		title: "Dindinho",
		category: "Fintech / PWA",
		description:
			"Full-stack PWA for financial organization, featuring shared expenses and URL-based state synchronization for collaboration.",
		tags: ["Angular", "Node.js", "Prisma", "MySQL"],
		repoUrl: "https://github.com/pwdbymoral/dindinho",
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

function App() {
	const [isVisible, setIsVisible] = useState(false);

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

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<>
			<header className="header">
				<div className="container header-content">
					<div
						style={{
							fontSize: "1.25rem",
							fontWeight: 700,
							letterSpacing: "-0.02em",
						}}
					>
						VINÍCIUS VARJÃO
						<span style={{ color: "var(--accent-primary)" }}>.</span>
					</div>
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
				</div>
			</header>

			<main>
				<section className="hero">
					<div className="container">
						<span className="hero-tag">Available for new opportunities</span>
						<h1 className="hero-title">
							Product Engineer
							<br />
							at the intersection of UX & QA.
						</h1>
						<p className="hero-description">
							I build digital products that not only work flawlessly but solve
							real problems and generate measurable results through technical
							excellence and business strategy.
						</p>
						<div
							style={{ display: "flex", gap: "1rem", justifyContent: "center" }}
						>
							<a href="#work" className="btn btn-primary">
								View Projects
							</a>
							<a
								href="#contact"
								className="btn"
								style={{ border: "1px solid var(--border-highlight)" }}
							>
								Get in touch
							</a>
						</div>
					</div>
				</section>

				<section id="work" className="section">
					<div className="container">
						<h2 className="section-title">Selected Works</h2>
						<div className="grid">
							{projects.map((project) => (
								<div key={project.id} className="card">
									<div className="card-image-placeholder">
										<span>{project.title} Preview</span>
									</div>
									<div className="card-category">{project.category}</div>
									<h3 className="card-title">{project.title}</h3>
									<p
										style={{
											color: "var(--text-secondary)",
											fontSize: "0.9rem",
										}}
									>
										{project.description}
									</p>
									<div className="card-footer">
										<div
											style={{
												display: "flex",
												gap: "0.5rem",
												flexWrap: "wrap",
											}}
										>
											{project.tags.map((tag) => (
												<span key={tag} className="tag">
													{tag}
												</span>
											))}
										</div>
										<div
											style={{
												marginTop: "1rem",
												display: "flex",
												gap: "1rem",
											}}
										>
											<a
												href={project.repoUrl}
												className="nav-link"
												style={{ fontSize: "0.8rem" }}
												target="_blank"
												rel="noopener noreferrer"
											>
												GitHub
											</a>
											{project.liveUrl && (
												<a
													href={project.liveUrl}
													className="nav-link"
													style={{ fontSize: "0.8rem" }}
													target="_blank"
													rel="noopener noreferrer"
												>
													Live Demo
												</a>
											)}
										</div>
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
						background: "var(--bg-secondary)",
						borderBlock: "1px solid var(--border-subtle)",
					}}
				>
					<div
						className="container"
						style={{ textAlign: "center", maxWidth: "800px" }}
					>
						<h2 style={{ marginBottom: "1.5rem" }}>The Approach</h2>
						<p style={{ color: "var(--text-secondary)", fontSize: "1.1rem" }}>
							I believe in building software that is not only functional but
							also a joy to use. By connecting code to business strategy and
							understanding the user journey from acquisition to final
							interaction, I create solutions that scale and provide real value.
						</p>
					</div>
				</section>
			</main>

			<footer className="footer">
				<div className="container">
					<p>&copy; 2026 Designed & Built with React 19 & Vite 8</p>
					<div
						style={{
							marginTop: "1rem",
							display: "flex",
							gap: "1.5rem",
							justifyContent: "center",
						}}
					>
						<a href="https://github.com/pwdbymoral" className="nav-link">
							GitHub
						</a>
						<a href="https://linkedin.com/in/vinmvarjao" className="nav-link">
							LinkedIn
						</a>
					</div>
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
