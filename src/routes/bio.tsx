import { createFileRoute, redirect } from "@tanstack/react-router";
import i18n from "../i18n/config";

export const Route = createFileRoute("/bio")({
	beforeLoad: () => {
		const targetLang = i18n.language?.startsWith("en") ? "en" : "pt";

		throw redirect({
			to: "/$lang/bio",
			params: { lang: targetLang },
		});
	},
});
