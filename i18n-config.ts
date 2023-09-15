export const locales = ["en", "ua", "ru", "az", "kz", "es"];
export const defaultLocale = "en";
export const i18n = {
  defaultLocale: defaultLocale,
  locales: locales,
} as const;

export type Locale = (typeof i18n)["locales"][number];
