import { pickText } from "../../utils/i18n";
import type {
  TroubleItem,
  TS_Lang,
  IconName,
} from "../../types/troubleshooting";
import * as Lucide from "lucide-react";
import { OWNER_STYLES } from "./owner";

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

  const ownerKoName = item.owner.ko ?? "default";
  const style = OWNER_STYLES[ownerKoName];
  return (
    <button
      onClick={onClick}
      className={`
        group w-65 h-60
        rounded-[20px]
        border border-white/50 bg-white
        backdrop-blur-md
        text-left p-4
        transition-all
        hover:-translate-y-0.5
        hover:shadow-[0_5px_10px_rgba(15,23,42,0.15)]
      `}
    >
      <div className="flex flex-col h-full justify-between">
        <div
          className={`
            flex items-center justify-center
            w-full h-34
            rounded-xl border border-slate-100/70
            bg-linear-to-tr from-emerald-50 via-sky-50 to-amber-50
            shadow-inner
            ${style.frameBg}
          `}
        >
          <Icon
            className={`
            w-20 h-20 shrink-0
            text-slate-700/90
            transition-transform duration-300 group-hover:scale-110
            ${style.iconColor}
            `}
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
