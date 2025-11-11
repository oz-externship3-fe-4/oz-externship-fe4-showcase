import type { NavItem } from "./layoutConfig";
import { ShineText } from "./ShineText";
import type { RetrospectiveLang } from "../../types/retrospective";
import { motion } from "framer-motion";

const LANG_LABEL: Record<RetrospectiveLang, string> = {
  ko: "한국어",
  en: "English",
  jp: "日本語",
};

const LANG_ORDER: RetrospectiveLang[] = ["ko", "en", "jp"];

interface LayoutHeaderProps {
  activeItem: NavItem;
  lang: RetrospectiveLang;
  onChangeLang: (lang: RetrospectiveLang) => void;
}

export function LayoutHeader({
  activeItem,
  lang,
  onChangeLang,
}: LayoutHeaderProps) {
  const title = activeItem.title || activeItem.label;

  return (
    <header className="mb-10">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-[35px] font-extrabold select-none">
          <ShineText text={title} />
        </h2>
        <div
          className="
            ml-auto
            relative inline-flex items-center gap-1
            rounded-full bg-white/90
            px-2 py-1.5
            shadow-[0_8px_24px_rgba(15,23,42,0.10)]
            border border-slate-100/70
          "
        >
          {LANG_ORDER.map((code) => {
            const isActive = lang === code;

            return (
              <button
                key={code}
                onClick={() => onChangeLang(code)}
                className={`
                  relative px-3 py-1.5 text-[14px]
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
