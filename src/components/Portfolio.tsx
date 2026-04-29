import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { SkillsMarquee, StatusBadge, Sticker } from "./Common";
import { ExternalIcon, GitHubIcon, LinkedInIcon } from "./Icons";

const projects = [
	{
		id: 1,
		titleKey: "dindinho",
		category: "Fintech / PWA",
		tags: ["Angular", "Node.js", "Prisma", "MySQL"],
		repoUrl: "https://github.com/forjacorp/dindinho",
	},
	{
		id: 2,
		titleKey: "checkfacil",
		category: "Event Management / PWA",
		tags: ["React", "Node.js", "TypeScript", "Turborepo"],
		repoUrl: "https://github.com/forjacorp/checkFacil",
	},
	{
		id: 3,
		titleKey: "lojinho",
		category: "E-commerce Study",
		tags: ["Next.js", "React", "Tailwind CSS", "Storybook"],
		repoUrl: "https://github.com/pwdbymoral/lojinho-do-tatu-nextjs",
		liveUrl: "https://lojinhodotatu.vercel.app",
	},
	{
		id: 4,
		titleKey: "portfolio",
		category: "Personal Portfolio",
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
	"Prisma",
	"PostgreSQL",
	"MySQL",
	"Docker",
];

const education = [
	{ id: 1, key: "uninassau" },
	{ id: 2, key: "ufcg" },
];

const experience = [
	{ id: 1, key: "growth_lead" },
	{ id: 2, key: "growth_dev" },
	{ id: 3, key: "compass" },
];

export const Portfolio = () => {
	const { t } = useTranslation();
	const [activeCard, setActiveCard] = useState<"exp" | "edu">("exp");

	useEffect(() => {
		const handleEvent = (e: Event) => {
			const customEvent = e as CustomEvent;
			if (customEvent.detail) setActiveCard(customEvent.detail);
		};
		window.addEventListener("setActiveCard", handleEvent);
		return () => window.removeEventListener("setActiveCard", handleEvent);
	}, []);

	const handleNavClick = (card: "exp" | "edu") => {
		setActiveCard(card);
	};

	return (
		<main>
			<section className="hero">
				<div className="container" style={{ textAlign: "left" }}>
					<StatusBadge />
					<h1 className="hero-title">
						{t("hero.title_1")} <br />
						{t("hero.title_2")}
					</h1>
					<div className="hero-description">{t("hero.description")}</div>
					<div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
						<a href="#work" className="btn btn-primary">
							{t("hero.cta_work")}
						</a>
						<a href="#contact" className="btn">
							{t("hero.cta_contact")}
						</a>
					</div>

					<Sticker
						text={t("stickers.infra")}
						top="15%"
						right="5%"
						rotation="5deg"
						className="sticker-1"
					/>
					<Sticker
						text={t("stickers.product")}
						top="45%"
						left="2%"
						rotation="-8deg"
						className="sticker-2"
					/>
					<Sticker
						text={t("stickers.ux")}
						top="75%"
						right="3%"
						rotation="3deg"
						className="sticker-3"
					/>
					<Sticker
						text={t("stickers.business")}
						top="92%"
						left="-2%"
						rotation="12deg"
						className="sticker-4"
					/>
				</div>
			</section>

			<SkillsMarquee skills={skills} />

			<section id="work" className="section">
				<div className="container">
					<h2>{t("work.title")}</h2>
					<div className="grid">
						{projects.map((project) => (
							<div key={project.id} className="card">
								<div className="card-category">{project.category}</div>
								<h3 className="card-title">
									{t(`projects.${project.titleKey}.title`)}
								</h3>
								<p style={{ fontWeight: 600, marginBottom: "1.5rem" }}>
									{t(`projects.${project.titleKey}.description`)}
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
									>
										<GitHubIcon />
										{t("work.view_source")}
										<span className="sr-only">
											{t("work.github_sr", {
												title: t(`projects.${project.titleKey}.title`),
											})}
										</span>
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
										>
											<ExternalIcon />
											{t("work.live_demo")}
											<span className="sr-only">
												{t("work.demo_sr", {
													title: t(`projects.${project.titleKey}.title`),
												})}
											</span>
										</a>
									)}
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			<section id="resume" className="section resume-section">
				<div className="container">
					<h2 style={{ marginBottom: "1rem" }}>{t("resume.title")}</h2>
					<p style={{ marginBottom: "3rem", fontWeight: 600 }}>
						{t("resume.subtitle")}
					</p>
					<div className="stacked-cards-container">
						<button
							type="button"
							className={`section-card experience-card ${activeCard === "exp" ? "is-active" : ""}`}
							onClick={() => handleNavClick("exp")}
						>
							<h2 className="card-heading">{t("resume.experience_title")}</h2>
							<div className="timeline">
								{experience.map((item) => (
									<div key={item.id} className="timeline-item">
										<div className="timeline-date">
											{t(`experience.${item.key}.period`)}
										</div>
										<div
											className="card-category"
											style={{ marginBottom: "0.5rem" }}
										>
											{t(`experience.${item.key}.narrative`)}
										</div>
										<h3 style={{ marginBottom: "0.25rem" }}>
											{t(`experience.${item.key}.company`)}
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
											{t(`experience.${item.key}.role`)}
										</p>
										<p style={{ fontWeight: 600 }}>
											{t(`experience.${item.key}.description`)}
										</p>
									</div>
								))}
							</div>
						</button>

						<button
							type="button"
							className={`section-card education-card ${activeCard === "edu" ? "is-active" : ""}`}
							onClick={() => handleNavClick("edu")}
						>
							<h2 className="card-heading">{t("resume.education_title")}</h2>
							<div className="timeline">
								{education.map((item) => (
									<div key={item.id} className="timeline-item">
										<div className="timeline-date">
											{t(`education.${item.key}.period`)}
										</div>
										<div
											className="card-category"
											style={{ marginBottom: "0.5rem" }}
										>
											{t(`education.${item.key}.narrative`)}
										</div>
										<h3 style={{ marginBottom: "0.25rem" }}>
											{t(`education.${item.key}.institution`)}
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
											{t(`education.${item.key}.degree`)} •{" "}
											{t(`education.${item.key}.status`)}
										</p>
										<p style={{ fontWeight: 600 }}>
											{t(`education.${item.key}.description`)}
										</p>
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
					<h2>{t("about.title")}</h2>
					<div
						style={{
							background: "var(--bg-primary)",
							border: "var(--border-main)",
							boxShadow: "var(--shadow-main)",
							padding: "2rem",
							maxWidth: "800px",
						}}
					>
						<p style={{ fontSize: "1.5rem", fontWeight: 800, lineHeight: 1.2 }}>
							{t("about.content")}
						</p>
					</div>
				</div>
			</section>

			<section id="contact" className="section">
				<div className="container">
					<h2>{t("contact.title")}</h2>
					<div className="grid">
						<a
							href="https://github.com/pwdbymoral"
							className="btn"
							target="_blank"
							rel="noopener noreferrer"
						>
							<GitHubIcon />
							{t("contact.github")}
							<span className="sr-only"> {t("contact.sr_tab")}</span>
						</a>
						<a
							href="https://linkedin.com/in/vinimvarjao"
							className="btn"
							target="_blank"
							rel="noopener noreferrer"
						>
							<LinkedInIcon />
							{t("contact.linkedin")}
							<span className="sr-only"> {t("contact.sr_tab")}</span>
						</a>
					</div>
				</div>
			</section>
		</main>
	);
};
