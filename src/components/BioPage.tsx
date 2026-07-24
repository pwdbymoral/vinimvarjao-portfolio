import { type MouseEvent, useEffect } from "react";
import {
	FaGithub,
	FaInstagram,
	FaLinkedinIn,
	FaWhatsapp,
	FaXTwitter,
} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

type BioLanguage = "pt" | "en";

interface BioPageProps {
	lang: BioLanguage;
}

const contacts = [
	{
		label: "LinkedIn",
		href: "https://www.linkedin.com/in/vinimvarjao/",
		handle: "/in/vinimvarjao",
		icon: FaLinkedinIn,
	},
	{
		label: "Instagram",
		href: "https://www.instagram.com/vinimvarjao/",
		handle: "@vinimvarjao",
		icon: FaInstagram,
	},
	{
		label: "GitHub",
		href: "https://github.com/pwdbymoral",
		handle: "@pwdbymoral",
		icon: FaGithub,
	},
	{
		label: "Twitter",
		href: "https://x.com/vinimvarjao",
		handle: "@vinimvarjao",
		icon: FaXTwitter,
	},
	{
		label: "E-mail",
		href: "mailto:moraesvxp@gmail.com",
		handle: "moraesvxp@gmail.com",
		icon: MdEmail,
	},
];

const copy = {
	pt: {
		htmlLang: "pt-BR",
		pageTitle: "Vinícius Varjão | Growth Engineer",
		description:
			"Software, tráfego pago e automações para empresas que buscam crescer com mais clareza, eficiência e controle.",
		homeLabel: "Página inicial",
		languageLabel: "Ver página em inglês",
		languageName: "English",
		languageHref: "/en/bio",
		role: "Growth Engineer",
		eyebrow: "Tecnologia aplicada ao crescimento",
		title: "Vinícius Varjão",
		intro:
			"Construo software, operações automatizadas e estratégias de aquisição para empresas que querem crescer com mais clareza, eficiência e controle.",
		availability:
			"Disponível para projetos selecionados e contratos recorrentes",
		cta: "Falar sobre um projeto",
		ctaNote: "Conte seu cenário. Eu respondo pessoalmente.",
		scrollCue: "Veja como posso ajudar",
		servicesLabel: "Serviços",
		servicesKicker: "Como posso ajudar",
		servicesTitle: "Três frentes. Uma visão de negócio.",
		servicesIntro:
			"Entro para entender o problema, desenhar a solução e entregar algo que funcione no mundo real.",
		services: [
			{
				number: "01",
				title: "Desenvolvimento de software",
				description:
					"Sites, plataformas, PWAs, APIs e sistemas internos construídos para resolver gargalos reais — não apenas para parecer modernos.",
				tags: ["React", "TypeScript", "Node.js"],
			},
			{
				number: "02",
				title: "Tráfego pago",
				description:
					"Campanhas, rastreamento e funis orientados por dados, com foco em eficiência, escala sustentável e decisões de negócio.",
				tags: ["Meta Ads", "Google Ads", "GA4 · GTM"],
			},
			{
				number: "03",
				title: "Automações e integrações",
				description:
					"Fluxos que conectam ferramentas e reduzem trabalho manual, usando automação, APIs, CRMs e sistemas operacionais.",
				tags: ["n8n", "Make", "APIs · CRM"],
			},
		],
		authorityKicker: "Experiência multidisciplinar",
		authorityTitle: "Execução técnica com visão de crescimento.",
		authorityText:
			"Minha experiência passa por liderança de performance, engenharia de automação, rastreamento avançado e desenvolvimento de produtos digitais. Enxergo tecnologia, marketing e operação como partes do mesmo sistema.",
		signals: [
			{
				value: "3 anos",
				label: "entre software, performance e automação",
			},
			{
				value: "Growth Lead",
				label: "experiência com liderança e estratégia",
			},
			{
				value: "Do código à operação",
				label: "soluções pensadas para gerar valor real",
			},
		],
		contactKicker: "Vamos conversar",
		contactTitle: "Tem um problema bom para resolver?",
		contactText:
			"Se você busca alguém que entenda tecnologia e negócio na mesma conversa, me conte o contexto. Avalio pessoalmente cada projeto.",
		secondaryLabel: "Outros contatos",
		footerText: "Projetos pontuais · Contratos recorrentes · Trabalho remoto",
		brandText: "Identidade visual",
	},
	en: {
		htmlLang: "en",
		pageTitle: "Vinícius Varjão | Growth Engineer",
		description:
			"Software, paid media, and automation for companies ready to grow with more clarity, efficiency, and control.",
		homeLabel: "Portfolio home",
		languageLabel: "View page in Portuguese",
		languageName: "Português",
		languageHref: "/pt/bio",
		role: "Growth Engineer",
		eyebrow: "Technology applied to growth",
		title: "Vinícius Varjão",
		intro:
			"I build software, automated operations, and acquisition strategies for companies ready to grow with more clarity, efficiency, and control.",
		availability: "Available for selected projects and ongoing partnerships",
		cta: "Talk about a project",
		ctaNote: "Share your context. I reply personally.",
		scrollCue: "See how I can help",
		servicesLabel: "Services",
		servicesKicker: "How I can help",
		servicesTitle: "Three capabilities. One business perspective.",
		servicesIntro:
			"I step in to understand the problem, design the solution, and deliver something that works in the real world.",
		services: [
			{
				number: "01",
				title: "Software development",
				description:
					"Websites, platforms, PWAs, APIs, and internal systems built to solve real bottlenecks — not just to look modern.",
				tags: ["React", "TypeScript", "Node.js"],
			},
			{
				number: "02",
				title: "Paid media",
				description:
					"Data-driven campaigns, tracking, and funnels focused on efficiency, sustainable scale, and better business decisions.",
				tags: ["Meta Ads", "Google Ads", "GA4 · GTM"],
			},
			{
				number: "03",
				title: "Automation and integrations",
				description:
					"Workflows that connect tools and reduce manual work using automation, APIs, CRMs, and operational systems.",
				tags: ["n8n", "Make", "APIs · CRM"],
			},
		],
		authorityKicker: "Multidisciplinary experience",
		authorityTitle: "Technical execution with a growth perspective.",
		authorityText:
			"My experience spans performance leadership, automation engineering, advanced tracking, and digital product development. I see technology, marketing, and operations as parts of the same system.",
		signals: [
			{
				value: "3 years",
				label: "across software, performance, and automation",
			},
			{
				value: "Growth Lead",
				label: "leadership and strategy experience",
			},
			{
				value: "Code to operations",
				label: "solutions designed to create real value",
			},
		],
		contactKicker: "Let's talk",
		contactTitle: "Have a meaningful problem to solve?",
		contactText:
			"If you need someone who understands technology and business in the same conversation, share the context. I personally review every project.",
		secondaryLabel: "Other contacts",
		footerText: "One-off projects · Ongoing partnerships · Remote work",
		brandText: "Visual identity",
	},
} satisfies Record<BioLanguage, object>;

const whatsappMessage = encodeURIComponent(
	"Olá, Vinícius! Vim pelo seu link na bio e quero conversar sobre um projeto.",
);
const whatsappHref = `https://wa.me/5579981370707?text=${whatsappMessage}`;

const revealServices = (event: MouseEvent<HTMLButtonElement>) => {
	const services = document.getElementById("services");
	if (!services) return;

	event.preventDefault();
	const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches
		? "auto"
		: "smooth";

	services.scrollIntoView({ behavior, block: "start" });
	window.history.pushState(null, "", "#services");
};

export const BioPage = ({ lang }: BioPageProps) => {
	const content = copy[lang] as (typeof copy)["pt"];

	useEffect(() => {
		document.documentElement.lang = content.htmlLang;
		document.title = content.pageTitle;

		const description = document.querySelector<HTMLMetaElement>(
			'meta[name="description"]',
		);
		const previousDescription = description?.content;
		if (description) description.content = content.description;

		return () => {
			if (description && previousDescription) {
				description.content = previousDescription;
			}
		};
	}, [content]);

	return (
		<main className="bio-page">
			<img
				className="bio-decoration bio-decoration-brackets"
				src="/bio-assets/brackets-gradient.svg"
				alt=""
				aria-hidden="true"
			/>
			<img
				className="bio-decoration bio-decoration-star"
				src="/bio-assets/star-purple.svg"
				alt=""
				aria-hidden="true"
			/>

			<div className="bio-shell">
				<header className="bio-topbar">
					<a
						className="bio-home-link"
						href={`/${lang}`}
						aria-label={content.homeLabel}
					>
						<span className="bio-forja-symbol" aria-hidden="true" />
						<span className="sr-only">{content.homeLabel}</span>
					</a>
					<a
						className="bio-language"
						href={content.languageHref}
						aria-label={content.languageLabel}
					>
						{content.languageName}
					</a>
				</header>

				<section className="bio-hero" aria-labelledby="bio-title">
					<div className="bio-photo-frame">
						<img
							className="bio-photo"
							src="/bio-assets/vinicius.jpg"
							alt="Vinícius Varjão"
						/>
					</div>

					<p className="bio-eyebrow">
						<strong>{content.role}</strong>
						<span> · {content.eyebrow}</span>
					</p>
					<h1 id="bio-title">{content.title}</h1>
					<p className="bio-intro">{content.intro}</p>

					<div className="bio-availability">
						<span className="bio-status-dot" aria-hidden="true" />
						{content.availability}
					</div>

					<a
						className="bio-primary-cta"
						href={whatsappHref}
						target="_blank"
						rel="noopener noreferrer"
					>
						<span className="bio-primary-icon" aria-hidden="true">
							<FaWhatsapp />
						</span>
						<span className="bio-primary-copy">
							<strong>{content.cta}</strong>
							<small>{content.ctaNote}</small>
						</span>
						<span className="bio-cta-arrow" aria-hidden="true">
							↗
						</span>
					</a>

					<button
						type="button"
						className="bio-scroll-cue"
						onClick={revealServices}
					>
						{content.scrollCue}
						<span aria-hidden="true">↓</span>
					</button>
				</section>

				<section
					id="services"
					className="bio-section"
					aria-label={content.servicesLabel}
				>
					<div className="bio-section-heading">
						<p>{content.servicesKicker}</p>
						<h2>{content.servicesTitle}</h2>
						<span>{content.servicesIntro}</span>
					</div>

					<div className="bio-services">
						{content.services.map((service) => (
							<article className="bio-service-card" key={service.number}>
								<span className="bio-service-number">{service.number}</span>
								<h3>{service.title}</h3>
								<p>{service.description}</p>
								<ul
									aria-label={`${service.title}: tecnologias e especialidades`}
								>
									{service.tags.map((tag) => (
										<li key={tag}>{tag}</li>
									))}
								</ul>
							</article>
						))}
					</div>
				</section>

				<section className="bio-section bio-authority">
					<div className="bio-section-heading">
						<p>{content.authorityKicker}</p>
						<h2>{content.authorityTitle}</h2>
						<span>{content.authorityText}</span>
					</div>

					<div className="bio-signals">
						{content.signals.map((signal) => (
							<div className="bio-signal" key={signal.value}>
								<strong>{signal.value}</strong>
								<span>{signal.label}</span>
							</div>
						))}
					</div>
				</section>

				<section className="bio-section bio-contact">
					<div className="bio-section-heading">
						<p>{content.contactKicker}</p>
						<h2>{content.contactTitle}</h2>
						<span>{content.contactText}</span>
					</div>

					<a
						className="bio-primary-cta"
						href={whatsappHref}
						target="_blank"
						rel="noopener noreferrer"
					>
						<span className="bio-primary-icon" aria-hidden="true">
							<FaWhatsapp />
						</span>
						<span className="bio-primary-copy">
							<strong>{content.cta}</strong>
							<small>{content.ctaNote}</small>
						</span>
						<span className="bio-cta-arrow" aria-hidden="true">
							↗
						</span>
					</a>

					<nav
						className="bio-secondary-contacts"
						aria-label={content.secondaryLabel}
					>
						{contacts.map((contact) => {
							const ContactIcon = contact.icon;

							return (
								<a
									key={contact.label}
									href={contact.href}
									aria-label={contact.label}
									target={
										contact.href.startsWith("mailto:") ? undefined : "_blank"
									}
									rel={
										contact.href.startsWith("mailto:")
											? undefined
											: "noopener noreferrer"
									}
								>
									<span className="bio-contact-main">
										<span className="bio-contact-icon" aria-hidden="true">
											<ContactIcon />
										</span>
										<span className="bio-contact-copy">
											<strong>{contact.label}</strong>
											<small>{contact.handle}</small>
										</span>
									</span>
									<span className="bio-contact-arrow" aria-hidden="true">
										↗
									</span>
								</a>
							);
						})}
					</nav>
				</section>

				<footer className="bio-footer">
					<p>{content.footerText}</p>
					<div className="bio-brand-signature">
						<span>{content.brandText}</span>
						<img src="/bio-assets/forjacorp-logo.svg" alt="ForjaCorp" />
					</div>
				</footer>
			</div>
		</main>
	);
};
