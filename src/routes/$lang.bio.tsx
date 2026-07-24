import { createFileRoute } from "@tanstack/react-router";
import { BioPage } from "../components/BioPage";

export const Route = createFileRoute("/$lang/bio")({
	component: BioRoute,
});

function BioRoute() {
	const { lang } = Route.useParams();

	return <BioPage lang={lang === "en" ? "en" : "pt"} />;
}
