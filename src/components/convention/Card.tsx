import { useRef } from "react";
import { useHoverGsap } from "../../hooks/animations/useHoverGsap";
import type { CommitType, CommitTypeId } from "../../constants/git/types";

const ICON_COLORS: Record<CommitTypeId, string> = {
  feat: "text-amber-400",
  fix: "text-rose-400",
  refactor: "text-emerald-400",
  chore: "text-sky-400",
  docs: "text-indigo-400",
  build: "text-fuchsia-400",
  hotfix: "text-red-500",
};

interface CommitTypeCardProps {
  type: CommitType;
}

export function CommitTypeCard({ type }: CommitTypeCardProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);

  useHoverGsap(cardRef, cardRef, {
    scale: 1.04,
    translateY: -6,
    rotate: 0,
    iconTranslateX: 3,
    shadowStart: "0 5px 8px rgba(15,23,42,0.08)",
    shadowEnd: "0 5px 8px rgba(15,23,42,0.22)",
    duration: 0.12,
  });

  const Icon = type.icon;

  return (
    <div
      ref={cardRef}
      className="
        flex flex-1 items-center gap-4
        rounded-3xl
        bg-[#eef0f4]
        px-4 py-4
        transition-transform
        select-none
      "
    >
      <div
        className="
          flex h-[52px] w-[52px] items-center justify-center
          rounded-full bg-white shadow-sm
        "
      >
        <Icon className={`h-6 w-6 ${ICON_COLORS[type.id]} drop-shadow-sm`} />
      </div>
      <div className="flex flex-col">
        <span className="text-xl font-extrabold text-slate-900">
          {type.label}
        </span>
        <span className="text-[15px] md:text-[13px] text-slate-500">
          {type.desc}
        </span>
      </div>
    </div>
  );
}
