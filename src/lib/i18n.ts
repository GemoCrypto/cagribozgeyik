export const languages = ["en", "tr", "de"] as const;
export type Lang = (typeof languages)[number];

export const defaultLang: Lang = "en";

export function isLang(value: string): value is Lang {
  return (languages as readonly string[]).includes(value);
}
