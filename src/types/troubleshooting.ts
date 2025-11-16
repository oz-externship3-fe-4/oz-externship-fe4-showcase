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
  | "Circle" // default
  | "Code"
  | "PieChart";

export interface TS_Section {
  heading: LocalizedText;
  body: LocalizedText;
  code?: string;
  codeLang?: "bash" | "ts" | "tsx" | "js" | "json";
  video?: TroubleVideo;
}

export interface TroubleVideo {
  basePath: string; // base경로
  poster?: string;
  label?: LocalizedText;
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
  video?: TroubleVideo; // 옵션 있으면 렌더, 없으면 무시
}
