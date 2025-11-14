import { pickText } from "../../utils/i18n";
import type {
  TroubleItem,
  TS_Lang,
  IconName,
} from "../../types/troubleshooting";
import * as Lucide from "lucide-react";

const ICONS: Record<IconName, Lucide.LucideIcon> = {
  Sun: Lucide.Sun,
  Hammer: Lucide.Hammer,
  FileClock: Lucide.FileClock,
  Eye: Lucide.Eye,
  ListChecks: Lucide.ListChecks,
  Network: Lucide.Network,
  ServerCrash: Lucide.ServerCrash,
  AlertCircle: Lucide.AlertCircle,
  Shield: Lucide.Shield,
  MessageCircle: Lucide.MessageCircle,
  Circle: Lucide.Circle,
  PieChart: Lucide.PieChart,
  Code: Lucide.Code,
};

export function TroubleCard({
  item,
  lang,
  onClick,
}: {
  item: TroubleItem;
  lang: TS_Lang;
  onClick: () => void;
}) {
  const Icon = ICONS[item.icon ?? "Circle"];

  return (
    <button
      onClick={onClick}
      className="
        group w-65 h-[225px]
        rounded-[20px]
        border border-white/80 bg-white/80
        shadow-[0_10px_25px_rgba(15,23,42,0.08)]
        backdrop-blur-md
        text-left p-4
        transition-all
        hover:-translate-y-0.5
        hover:shadow-[0_18px_40px_rgba(15,23,42,0.15)]
        hover:bg-white
      "
    >
      <div className="flex flex-col h-full justify-between">
        <div
          className="
            flex items-center justify-center
            w-full h-34
            rounded-xl border border-slate-100/70
            bg-linear-to-tr from-emerald-50 via-sky-50 to-amber-50
            shadow-inner
          "
        >
          <Icon
            className="
            w-20 h-20 shrink-0
            text-slate-700/90
            transition-transform duration-300 group-hover:scale-110
            "
          />
        </div>

        <div className="mt-3 text-[15px] font-bold text-slate-900 truncate">
          {pickText(item.title, lang)}
        </div>

        <div className="mt-1 flex items-center justify-between text-[12px] text-slate-500">
          <span className="truncate">{pickText(item.page, lang)}</span>
          <span className="truncate font-medium">
            {pickText(item.owner, lang)}
          </span>
        </div>
      </div>
    </button>
  );
}
