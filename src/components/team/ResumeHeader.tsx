import { motion } from "framer-motion";
import type {
  ResumeLang,
  MemberWithResume,
  LocalizedText,
} from "../../types/resume";

const LANG_LABEL: Record<ResumeLang, string> = {
  ko: "한국어",
  en: "English",
  jp: "日本語",
};

function pickText(value: LocalizedText | string, lang: ResumeLang): string {
  if (typeof value === "string") return value;
  return value[lang] ?? value.ko ?? value.en ?? value.jp ?? "";
}

interface ResumeHeaderProps {
  member: MemberWithResume;
  lang: ResumeLang;
  setLang: (lang: ResumeLang) => void;
}

export function ResumeHeader({ member, lang, setLang }: ResumeHeaderProps) {
  const displayName = pickText(member.name, lang);
  const displayRole = pickText(member.role, lang);
  const avatarInitial = displayName.trim().charAt(0) || "?";

  return (
    <header
      className="
        flex w-full items-start gap-6
        px-8 pt-7 pb-5
        bg-linear-to-r from-[#EFF8FF] via-[#FFFFFF] to-[#FFF5F7]
        rounded-t-4xl
      "
    >
      <div className="flex items-center gap-4">
        <div
          className="
            relative flex h-16 w-16 items-center justify-center
            rounded-full bg-white
            shadow-[0_10px_30px_rgba(15,23,42,0.16)]
            text-2xl font-semibold text-slate-800
            overflow-hidden
          "
        >
          {avatarInitial}
        </div>

        <div className="flex flex-col gap-1">
          <div className="flex items-baseline gap-2">
            <h2
              id="resume-modal-title"
              className="
                text-[22px] md:text-2xl
                font-extrabold text-slate-900 tracking-tight
              "
            >
              {displayName}
            </h2>
          </div>

          <p className="text-[10px] font-semibold text-slate-500 tracking-[0.16em] uppercase">
            {displayRole}

            {member.badge && (
              <span
                className="
                  inline-flex items-center
                  rounded-full border border-emerald-200
                  bg-emerald-50 px-3 py-1 ml-2
                  text-[10px] font-semibold text-emerald-600
                  shadow-[0_4px_10px_rgba(16,185,129,0.18)]
                "
              >
                {member.badge}
              </span>
            )}
          </p>
        </div>
      </div>

      <div className="ml-auto flex flex-col items-end gap-2">
        <div
          className="
      relative
      inline-flex items-center gap-1
      rounded-full bg-white/90
      px-2 py-1.5
      shadow-[0_8px_24px_rgba(15,23,42,0.10)]
      border border-slate-100/70
    "
        >
          {(["ko", "en", "jp"] as const).map((code) => {
            const isActive = lang === code;

            return (
              <button
                key={code}
                onClick={() => setLang(code)}
                className={`
            relative px-3 py-1.5 text-[10px]
            rounded-full transition-colors
            ${
              isActive
                ? "text-slate-900 font-semibold"
                : "text-slate-500 hover:text-slate-700"
            }
          `}
              >
                {isActive && (
                  <motion.span
                    layoutId="lang-pill"
                    className="
                absolute inset-0
                rounded-full
                bg-linear-to-r from-[#A9EACD] to-[#C8F5FF]
                shadow-[0_3px_10px_rgba(148,187,233,0.35)]
              "
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 26,
                    }}
                  />
                )}
                <span className="relative z-10">{LANG_LABEL[code]}</span>
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
}
