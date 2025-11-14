import type { ResumeLang, MemberWithResume } from "./resume";

export type RetrospectiveLang = ResumeLang;

export type MemberRetrospective = {
  id: MemberWithResume["id"];
  name: {
    ko: string;
    en: string;
    jp: string;
  };
  role: string;
  characterImg: string;
  message: {
    ko: string;
    en: string;
    jp: string;
  };
  comment?: Record<RetrospectiveLang, string>;
};
