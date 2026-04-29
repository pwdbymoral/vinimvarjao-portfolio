import { createFileRoute, redirect } from "@tanstack/react-router";
import i18n from "../i18n/config";

export const Route = createFileRoute("/")({
	beforeLoad: () => {
		const lang = i18n.language || "en";
		const targetLang = lang.startsWith("pt") ? "pt" : "en";
		throw redirect({
			to: "/$lang",
			params: { lang: targetLang },
		});
	},
});
