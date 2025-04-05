import { defineRouting } from "next-intl/routing";

export const i18nLocales = [
  { label: "English", code: "en", flag: "us" },
  { label: "Arabic", code: "ar", flag: "eg" },
];

export const routing = defineRouting({
  locales: i18nLocales.map((locale) => locale.code),
  defaultLocale: "en",
});
