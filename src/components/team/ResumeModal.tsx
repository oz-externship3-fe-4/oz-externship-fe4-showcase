import { useEffect, useMemo, useState } from "react";
import { ResumeModalShell } from "./ResumeModalShell";
import { ResumeHeader } from "./ResumeHeader";
import { ResumeContent } from "./ResumeContent";
import { useBodyScrollLock } from "../../hooks/useBodyScrollLock";
import type {
  MemberWithResume,
  ResumeData,
  ResumeLang,
} from "../../types/resume";

interface Props {
  open: boolean;
  member: MemberWithResume | null;
  onClose: () => void;
  languageDefault?: ResumeLang;
}

export default function ResumeModal({
  open,
  member,
  onClose,
  languageDefault = "ko",
}: Props) {
  useBodyScrollLock(open);
  const [lang, setLang] = useState<ResumeLang>(languageDefault);

  const prefersReduce = useMemo(() => {
    if (typeof window === "undefined" || !window.matchMedia) return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  useEffect(() => {
    if (open) {
      setLang(languageDefault);
    }
  }, [open, languageDefault]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open || !member) return null;

  const resumeKO = member.resume?.ko;
  const resumeEN = member.resume?.en;
  const resumeJP = member.resume?.jp;

  const pickData = (): ResumeData | undefined => {
    if (lang === "ko") return resumeKO ?? resumeEN ?? resumeJP;
    if (lang === "en") return resumeEN ?? resumeKO ?? resumeJP;
    return resumeJP ?? resumeKO ?? resumeEN;
  };

  const data = pickData();

  const overlay = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { duration: prefersReduce ? 0 : 0.16 },
    },
    exit: {
      opacity: 0,
      transition: { duration: prefersReduce ? 0 : 0.12 },
    },
  };

  const panel = {
    hidden: {
      opacity: 0,
      y: prefersReduce ? 0 : 22,
      scale: prefersReduce ? 1 : 0.97,
    },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "tween" as const,
        duration: prefersReduce ? 0 : 0.22,
      },
    },
    exit: {
      opacity: 0,
      y: prefersReduce ? 0 : 18,
      scale: prefersReduce ? 1 : 0.97,
      transition: {
        type: "tween" as const,
        duration: prefersReduce ? 0 : 0.16,
      },
    },
  };

  return (
    <ResumeModalShell
      open={open}
      onClose={onClose}
      overlay={overlay}
      panel={panel}
    >
      <ResumeHeader member={member} lang={lang} setLang={setLang} />
      <ResumeContent member={member} data={data} lang={lang} />
      <div
        className="
    flex justify-end px-8 py-5
    bg-linear-to-r from-emerald-400/15 via-emerald-500/10 to-transparent
  "
      >
        <button
          onClick={onClose}
          className="
      inline-flex items-center justify-center
      rounded-2xl bg-emerald-500
      px-8 py-2.5
      text-sm font-semibold text-white
      shadow-[0_12px_30px_rgba(16,185,129,0.45)]
      hover:bg-emerald-600
      transition
    "
        >
          닫기
        </button>
      </div>
    </ResumeModalShell>
  );
}
