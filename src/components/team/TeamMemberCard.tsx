import { forwardRef } from "react";

interface TeamMemberCardProps {
  name: string;
  role: string;
  badge?: string;
  description: string;
  characterImg: string;
  onClick?: () => void;
}

export const TeamMemberCard = forwardRef<HTMLDivElement, TeamMemberCardProps>(
  ({ name, role, badge, description, characterImg, onClick }, ref) => {
    return (
      <div
        ref={ref}
        onClick={onClick}
        className="
          relative flex flex-col items-center
          cursor-pointer select-none
          rounded-4xl
          bg-white/98
          px-10 pt-24 pb-10
          shadow-[0_14px_40px_rgba(15,23,42,0.10)]
          transition-all duration-300
        "
      >
        <img
          src={characterImg}
          alt={name}
          className="
            absolute -top-32
            h-40 object-contain
            pointer-events-none
          "
        />

        {badge && (
          <div
            className="
              mb-3 px-4 py-1
              rounded-full bg-slate-100
              text-[11px] font-semibold text-slate-600
              tracking-[0.08em]
            "
          >
            {badge}
          </div>
        )}

        {/* 이름 / 역할 */}
        <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
          {name}
        </h3>
        <div className="mb-3 text-[10px] font-semibold text-slate-500 tracking-[0.16em]">
          {role}
        </div>

        <p className="mt-1 text-[11px] leading-relaxed text-slate-500 text-center">
          {description}
        </p>
      </div>
    );
  }
);

TeamMemberCard.displayName = "TeamMemberCard";
