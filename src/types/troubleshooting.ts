export type TS_Lang = "ko" | "en" | "jp";

export type LocalizedText = {
  ko?: string;
  en?: string;
  jp?: string;
};

export type IconName =
  | "Sun" // flicker
  | "Hammer" // build/fix
  | "FileClock" // timing/debounce
  | "Eye" // visibility
  | "ListChecks" // list/state
  | "Network" // network
  | "ServerCrash"
  | "AlertCircle" // validation
  | "Shield" // auth
  | "MessageCircle" // comment/review
  | "Circle"; // default

export interface TS_Section {
  heading: LocalizedText;
  body: LocalizedText;
  code?: string;
  codeLang?: "bash" | "ts" | "tsx" | "js" | "json";
}

export interface TroubleItem {
  id: string;
  icon?: IconName;
  title: LocalizedText;
  subtitle?: LocalizedText;
  page: LocalizedText;
  owner: LocalizedText;
  tags?: string[];
  sections: TS_Section[];
}
