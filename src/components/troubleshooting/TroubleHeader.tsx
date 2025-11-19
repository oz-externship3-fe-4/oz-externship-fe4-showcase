import { motion } from "framer-motion";
import type { TS_Lang } from "../../types/troubleshooting";
import { pickText } from "../../utils/i18n";
import { TEAM_MEMBERS } from "../team/teamMembers";
import type { TroubleItem } from "../../types/troubleshooting";

const BADGE_LABEL: Record<string, { ko: string; en: string; jp: string }> = {
  "TEAM LEADER": {
    ko: "Team Leader",
    en: "Team Leader",
    jp: "Team Leader",
  },
  "DESIGN LEAD": {
    ko: "Design Lead",
    en: "Design Lead",
    jp: "Design Lead",
  },
  "EN TRANSLATOR": {
    ko: "EN Translator",
    en: "EN Translator",
    jp: "EN Translator",
  },
  "JP TRANSLATOR": {
    ko: "JP Translator",
    en: "JP Translator",
    jp: "JP Translator",
  },
  "COMMUNICATION LEAD": {
    ko: "Communication Lead",
    en: "Communication Lead",
    jp: "Communication Lead",
  },
};

const LANG_LABEL: Record<TS_Lang, string> = {
  ko: "한국어",
  en: "English",
  jp: "日本語",
};

type TroubleHeaderProps = {
  owner: TroubleItem["owner"];
  lang: TS_Lang;
  setLang?: (lang: TS_Lang) => void;
};

export function TroubleHeader({ owner, lang, setLang }: TroubleHeaderProps) {
  const ownerName = pickText(owner, lang);
  const avatarInitial = ownerName.trim().charAt(0) || "?";
  const ownerKoName = pickText(owner, "ko");
  // 매칭할때는 국문으로 고정해서 비교, 화면에 표시되는 부분은 계속 lang기준으로.
  const matchedMember = TEAM_MEMBERS.find(
    (m) => pickText(m.name, "ko") === ownerKoName
  );

  type MaybeWithBadge = { badge?: string };
  const rawBadge = (matchedMember as MaybeWithBadge | undefined)?.badge;

  const badgeLabel =
    rawBadge &&
    pickText(
      BADGE_LABEL[rawBadge] ?? {
        ko: rawBadge,
        en: rawBadge,
        jp: rawBadge,
      },
      lang
    );

  return (
    <header
      className="
        flex w-full items-start gap-6
        px-8 pt-7 pb-5
        bg-linear-to-r from-[#EFF8FF] via-[#FFFFFF] to-[#FFF5F7]
        border-b border-slate-100/70
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
          <h2
            className="
              text-[22px] md:text-2xl
              font-extrabold text-slate-900 tracking-tight
            "
          >
            {ownerName}
          </h2>

          <div className="flex items-center gap-2">
            <p className="text-[11px] font-semibold tracking-[0.16em] text-slate-400">
              FRONTEND
            </p>

            {badgeLabel && (
              <span
                className="
                  inline-flex items-center
                  rounded-full border border-emerald-200
                  bg-emerald-50 px-3 py-1
                  text-[10px] font-semibold text-emerald-600
                  shadow-[0_4px_10px_rgba(16,185,129,0.18)]
                "
              >
                {badgeLabel}
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="ml-auto flex flex-col items-end gap-3">
        <div
          className="
            relative inline-flex items-center gap-1
            rounded-full bg-white/90
            px-2 py-1.5
            shadow-[0_8px_24px_rgba(15,23,42,0.10)]
            border border-slate-100/70
          "
        >
          {(["ko", "en", "jp"] as TS_Lang[]).map((code) => {
            const isActive = lang === code;

            return (
              <button
                key={code}
                type="button"
                onClick={() => setLang && setLang(code)}
                className={`
                  relative px-3 py-1.5 text-[10px]
                  rounded-full transition-colors
                  ${
                    isActive
                      ? "text-slate-900 font-semibold"
                      : "text-slate-500 hover:text-slate-700"
                  }
                  ${!setLang && "cursor-default"}
                `}
              >
                {isActive && (
                  <motion.span
                    layoutId="ts-lang-pill"
                    className="
                      absolute inset-0 rounded-full
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
