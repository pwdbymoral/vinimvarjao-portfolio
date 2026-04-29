import { useTranslation } from "react-i18next";

interface StickerProps {
	text: string;
	top?: string;
	left?: string;
	right?: string;
	rotation?: string;
	className?: string;
}

export const Sticker = ({
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

export const SkillsMarquee = ({ skills }: { skills: string[] }) => {
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

export const StatusBadge = () => {
	const { t } = useTranslation();
	return (
		<div className="status-badge">
			<div className="status-dot" />
			{t("common.status_available")}
		</div>
	);
};
