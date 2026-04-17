interface TimelineEvent {
	id: number;
	date: string;
	title: string;
	company: string;
	description: string;
}

const events: TimelineEvent[] = [
	{
		id: 1,
		date: "2024 - PRESENT",
		title: "Product Engineer",
		company: "Freelance / Independent",
		description:
			"Leading technical strategy and full-stack development for high-impact MVPs and accessible public platforms.",
	},
	{
		id: 2,
		date: "2022 - 2024",
		title: "Senior Frontend Engineer",
		company: "ForjaCorp",
		description:
			"Architected scalable monorepos and PWA solutions with a focus on real-time synchronization and TDD.",
	},
	{
		id: 3,
		date: "2020 - 2022",
		title: "Full Stack Developer",
		company: "Tech Solutions",
		description:
			"Developed and maintained enterprise-level e-commerce and event management systems.",
	},
];

export const ExperienceTimeline = () => {
	return (
		<div style={{ marginTop: "4rem" }}>
			{events.map((event) => (
				<div key={event.id} className="timeline-item">
					<div className="timeline-date">{event.date}</div>
					<h3 style={{ marginBottom: "0.25rem" }}>{event.title}</h3>
					<div
						style={{
							fontWeight: 800,
							textTransform: "uppercase",
							fontSize: "0.9rem",
							marginBottom: "1rem",
							opacity: 0.8,
						}}
					>
						{event.company}
					</div>
					<p style={{ fontWeight: 600, maxWidth: "600px" }}>
						{event.description}
					</p>
				</div>
			))}
		</div>
	);
};
