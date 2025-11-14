import { useEffect, useMemo } from "react";
import { useBodyScrollLock } from "../../hooks/useBodyScrollLock";
import type {
  MemberRetrospective,
  RetrospectiveLang,
} from "../../types/retrospective";
import { ResumeModalShell } from "../team/ResumeModalShell";

interface RetrospectiveModalProps {
  open: boolean;
  member: MemberRetrospective | null;
  lang: RetrospectiveLang;
  onClose: () => void;
}

export function RetrospectiveModal({
  open,
  member,
  lang,
  onClose,
}: RetrospectiveModalProps) {
  useBodyScrollLock(open);

  const prefersReduce = useMemo(() => {
    if (typeof window === "undefined" || !window.matchMedia) return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open || !member) return null;

  const message = member.message?.[lang] ?? member.message?.ko ?? "";

  const overlay = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: prefersReduce ? 0 : 0.18 } },
    exit: { opacity: 0, transition: { duration: prefersReduce ? 0 : 0.12 } },
  };

  const panel = {
    hidden: {
      opacity: 0,
      y: prefersReduce ? 0 : 25,
      scale: prefersReduce ? 1 : 0.96,
    },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "tween" as const,
        duration: prefersReduce ? 0 : 0.25,
      },
    },
    exit: {
      opacity: 0,
      y: prefersReduce ? 0 : 20,
      scale: prefersReduce ? 1 : 0.97,
      transition: { duration: prefersReduce ? 0 : 0.16 },
    },
  };

  return (
    <ResumeModalShell
      open={open}
      onClose={onClose}
      overlay={overlay}
      panel={panel}
    >
      <div className="px-10 pt-8 pb-6 flex flex-col items-center text-center bg-[linear-gradient(180deg,#fff8f3_0%,#fff_45%,#fdf6f0_100%)] rounded-t-3xl">
        <img
          src={member.characterImg}
          alt={member.name[lang] ?? member.name.ko}
          className="w-[120px] h-[120px] object-contain mb-3 drop-shadow-[0_8px_24px_rgba(255,176,123,0.4)]"
        />
        <h2 className="text-[22px] font-extrabold text-slate-900 tracking-tight">
          {member.name[lang] ?? member.name.ko}
        </h2>
        <p className="mt-1 text-[12px] font-semibold text-amber-500 tracking-[0.16em]">
          {member.role}
        </p>
      </div>

      <div
        className="
    relative
    max-h-[50vh]
    overflow-y-auto
    px-10 py-6
    scrollbar-hide
    bg-[linear-gradient(180deg,#ffffff_0%,#fffaf6_65%,#fff4ec_100%)]
  "
      >
        <div className="text-3xl text-amber-300 mb-3 leading-none">“</div>

        <p className="text-[15px] leading-relaxed text-slate-800 whitespace-pre-wrap">
          {message}
        </p>

        <div className="text-3xl text-amber-300 mt-3 leading-none text-right">
          ”
        </div>
      </div>

      <div
        className="
          flex justify-center px-10 py-6
          bg-[linear-gradient(90deg,#ffe8d1_0%,#fff0e0_50%,#fffaf5_100%)]
          rounded-b-3xl
        "
      >
        <button
          onClick={onClose}
          className="
            inline-flex items-center justify-center
            rounded-full
            bg-[linear-gradient(90deg,#f9c28d_0%,#f7a06e_100%)]
            px-10 py-2.5
            text-sm font-semibold text-white
            shadow-[0_12px_30px_rgba(249,164,93,0.45)]
            hover:opacity-90
            active:scale-[0.97]
            transition-all
          "
        >
          닫기
        </button>
      </div>
    </ResumeModalShell>
  );
}
