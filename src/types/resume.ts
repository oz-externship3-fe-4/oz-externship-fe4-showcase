export type ResumeLang = "ko" | "en" | "jp";

export type ResumeKpi = { label: string; value: string };
export type ResumeExperience = {
  period?: string;
  title: string;
  details?: string[];
};
export type ResumeProjectLink = { href: string; label: string };
export type ResumeProject = {
  name: string;
  period?: string;
  role?: string;
  summary?: string;
  tech?: string[];
  bullets?: string[];
  link?: ResumeProjectLink;
};
export type ResumeEducation = {
  school: string;
  degree?: string;
  period?: string;
};
export type ResumeCertification = {
  name: string;
  issuedBy?: string;
  date?: string;
};
export type ResumeLink = { href: string; label: string };

export type ResumeCardMeta = {
  characterImg: string;
  tagline: string;
};

export type ResumeData = {
  card: ResumeCardMeta;
  intro?: string;
  kpis?: ResumeKpi[];
  experiences?: ResumeExperience[];
  projects?: ResumeProject[];
  skills?: string[];
  education?: ResumeEducation[];
  certifications?: ResumeCertification[];
  links?: ResumeLink[];
};

export type MemberBase = {
  id: string;
  name: LocalizedText;
  role: LocalizedText;
  badge?: string;
  github?: string;
  linkedin?: string;
  email?: string;
  imageScale?: number;
  imageOffsetY?: number;
};

export type MemberWithResume = MemberBase & {
  characterImg: string;
  description: LocalizedText;
  resume?: {
    ko: ResumeData;
    en: ResumeData;
    jp: ResumeData;
  };
};

export type LocalizedText = {
  ko: string;
  en: string;
  jp: string;
};
