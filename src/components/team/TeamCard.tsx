import { forwardRef } from "react";

interface TeamMemberCardProps {
  name: string;
  role: string;
  description: string;
  characterImg: string;
  badge?: string;
  imageScale?: number;
  imageOffsetY?: number;
  onClick?: () => void;
}

export const TeamCard = forwardRef<HTMLDivElement, TeamMemberCardProps>(
  (
    {
      name,
      role,
      description,
      characterImg,
      badge,
      imageScale = 1,
      imageOffsetY = 0,
      onClick,
    },
    ref
  ) => {
    const baseTop = -70;
    return (
      <div
        ref={ref}
        onClick={onClick}
        className="
          relative flex flex-col items-center justify-end
          cursor-pointer select-none
          rounded-3xl bg-white
          px-10 pt-28 pb-5
          shadow-[0_18px_60px_rgba(15,23,42,0.12)]
          transition-colors duration-300
          shrink-0
        "
        style={{
          width: 260,
          minHeight: 340,
          isolation: "isolate",
          backfaceVisibility: "hidden",
          transform: "translateZ(0)",
        }}
      >
        <div
          className="
            absolute -top-15
            left-1/2 -translate-x-1/2
            w-32 h-32
            flex items-center justify-center
            pointer-events-none select-none
          "
          style={{
            top: baseTop + imageOffsetY,
          }}
        >
          <img
            src={characterImg}
            alt={name}
            className="max-w-full max-h-full object-contain"
            style={{
              transform: `scale(${imageScale})`,
              transformOrigin: "center bottom",
            }}
          />
        </div>

        {badge && (
          <div
            className="
              mb-3 px-3 py-1
              rounded-full bg-green-100 border
              text-[11px] font-semibold
              text-slate-500 tracking-[0.12em]
            "
          >
            {badge}
          </div>
        )}

        <h3 className="text-[22px] font-extrabold text-slate-900 leading-tight">
          {name}
        </h3>

        <div className="mb-1 text-[16px] font-semibold text-slate-500 tracking-[0.16em]">
          {role}
        </div>

        <p className="mt-1 text-[11px] leading-relaxed text-slate-500 text-center whitespace-pre-line">
          {description}
        </p>
      </div>
    );
  }
);

TeamCard.displayName = "TeamCard";
