import { useEffect, useState } from "react";

const projects = [
	{
		id: 1,
		title: "EcoSphere Dashboard",
		category: "Product Design",
		description:
			"A comprehensive environmental monitoring dashboard for smart cities.",
		tags: ["React", "D3.js", "IoT"],
	},
	{
		id: 2,
		title: "Lumina AI",
		category: "Machine Learning",
		description:
			"Generative AI interface for creative designers and architects.",
		tags: ["Next.js", "OpenAI", "Tailwind"],
	},
	{
		id: 3,
		title: "Voyager Pay",
		category: "Fintech",
		description:
			"Borderless cryptocurrency payment gateway for enterprise businesses.",
		tags: ["Solidity", "TypeScript", "Node.js"],
	},
	{
		id: 4,
		title: "Nexus OS",
		category: "Interface Design",
		description:
			"Minimalist desktop operating system concept for focused deep work.",
		tags: ["Figma", "WebAssembly", "Rust"],
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
							Building premium experiences
							<br />
							driven by passion for UX & QA.
						</h1>
						<p className="hero-description">
							Vinícius Varjão — Desenvolvedor com paixão por UX e QA que busca
							constantemente fluxos de trabalho otimizados e excelência técnica.
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
										{project.tags.map((tag) => (
											<span key={tag} className="tag">
												{tag}
											</span>
										))}
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
							also a joy to use. By leveraging modern technologies and clean
							architecture, I create solutions that scale and provide real value
							to users.
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
						<a href="/" className="nav-link">
							Twitter
						</a>
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
