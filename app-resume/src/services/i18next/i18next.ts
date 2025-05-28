import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import { es, en } from "@/utils/lang";

export const defaultNS = false;
export const resources = {
  en,
  es,
} as const;

i18next.use(initReactI18next).init({
  fallbackLng: "en",
  ns: Object.keys(en),
  defaultNS,
  resources,
});
