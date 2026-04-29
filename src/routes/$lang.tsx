import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Portfolio } from "../components/Portfolio";

export const Route = createFileRoute("/$lang")({
	component: LanguageWrapper,
});

function LanguageWrapper() {
	const { lang } = Route.useParams();
	const { i18n } = useTranslation();

	useEffect(() => {
		if (i18n.language !== lang) {
			i18n.changeLanguage(lang);
		}
		document.documentElement.lang = lang;
	}, [lang, i18n]);

	return <Portfolio />;
}
