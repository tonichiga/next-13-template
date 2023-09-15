import "server-only";
import type { Locale } from "./i18n-config";

// We enumerate all dictionaries here for better linting and typescript support
// We also get the default import for cleaner types
const dictionaries = {
  en: () => import("./dictionaries/en.json").then((module) => module.default),
  ua: () => import("./dictionaries/ua.json").then((module) => module.default),
  ru: () => import("./dictionaries/ru.json").then((module) => module.default),
  es: () => import("./dictionaries/es.json").then((module) => module.default),
  kz: () => import("./dictionaries/kz.json").then((module) => module.default),
  az: () => import("./dictionaries/az.json").then((module) => module.default),
};

export const getDictionary = async (locale: Locale) =>
  dictionaries[locale]?.() ?? dictionaries.en();