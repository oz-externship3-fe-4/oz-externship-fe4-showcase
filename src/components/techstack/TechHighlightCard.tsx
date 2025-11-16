import { pickText } from "../../utils/i18n";
import type { HighlightTech } from "./techStackConfig";
import type { RetrospectiveLang } from "../../types/retrospective";

interface TechHighlightCardProps {
  tech: HighlightTech;
  lang: RetrospectiveLang;
}

export function TechHighlightCard({ tech, lang }: TechHighlightCardProps) {
  const { name, icon, color, desc } = tech;
  return (
    <div
      className="
        w-[290px]
        flex flex-col gap-3
        rounded-[26px]
        bg-white/96
        px-2 py-10
        border border-white/80
        backdrop-blur-sm
        transition-all duration-300 ease-out
        hover:-translate-y-1
        hover:shadow-[0_10px_30px_rgba(15,23,42,0.14)]
      "
    >
      <div className="flex items-center gap-2">
        <div
          className="flex h-10 w-10 items-center justify-center rounded-2xl"
          style={{ backgroundColor: `${color}16` }}
        >
          <img src={icon} alt={name} className="h-7 w-7 object-contain" />
        </div>
        <h3 className="text-[16px] font-semibold text-slate-900">{name}</h3>
      </div>
      <p className="text-[13px] leading-relaxed text-slate-600">
        {pickText(desc, lang)}
      </p>
    </div>
  );
}
