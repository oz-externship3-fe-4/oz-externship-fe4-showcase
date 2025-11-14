import type { LocalizedText } from "../types/troubleshooting";
import type { TS_Lang } from "../types/troubleshooting";

export function pickText(v: LocalizedText | string, lang: TS_Lang): string {
  if (typeof v === "string") return v;
  return v[lang] ?? v.ko ?? v.en ?? v.jp ?? "";
}
