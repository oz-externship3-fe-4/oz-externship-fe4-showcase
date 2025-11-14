import { NavLink } from "react-router";
import { NAV_ITEMS, STRIP_COLORS, softPaintBg } from "./layoutConfig";
import type { RetrospectiveLang } from "../../types/retrospective";

interface SectionNavProps {
  activePath: string;
  lang: RetrospectiveLang;
}

export function SectionNav({ activePath, lang }: SectionNavProps) {
  return (
    <aside
      className="
        flex-[0.3]
        px-10 py-12
        flex flex-col gap-4
        border-l border-white/40
      "
      style={{ background: softPaintBg }}
    >
      <div className="text-xl font-semibold text-slate-500 mb-1 tracking-[0.16em]">
        MENU
      </div>

      <div className="space-y-3">
        {NAV_ITEMS.map((item, index) => {
          const isActive = activePath.startsWith(item.path);
          const baseColor = STRIP_COLORS[index] ?? "#F4F6F9";

          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={`
                flex items-center justify-between
                rounded-[999px]
                px-6 py-3
                text-sm font-semibold
                shadow-[0_6px_16px_rgba(15,23,42,0.04)]
                transition-shadow
                ${
                  isActive
                    ? "scale-[1.02] shadow-[0_10px_24px_rgba(15,23,42,0.14)]"
                    : "hover:scale-[1.01]"
                }
              `}
              style={{ backgroundColor: baseColor, color: "#111827" }}
            >
              <span className="text-xs font-bold text-slate-700">
                {item.order}
              </span>
              <span className="ml-3">{item.label[lang]}</span>
            </NavLink>
          );
        })}
      </div>
    </aside>
  );
}
