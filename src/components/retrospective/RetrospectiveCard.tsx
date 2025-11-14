import { useState } from "react";
import type {
  MemberRetrospective,
  RetrospectiveLang,
} from "../../types/retrospective";
import { RetrospectiveModal } from "./RetrospectiveModal";

interface Props {
  member: MemberRetrospective;
  lang: RetrospectiveLang;
}

export function RetrospectiveCard({ member, lang }: Props) {
  const comment = member.comment?.[lang];
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="
        group relative
        flex flex-col items-center justify-between
        w-70 h-[520px]
        rounded-[40px]
        bg-white/90
        shadow-[0_18px_60px_rgba(15,23,42,0.12)]
        backdrop-blur-sm
        transition-all duration-300
        overflow-hidden
      "
        onClick={() => setOpen(true)}
      >
        <div className="pt-10 text-center">
          <div className="text-[17px] font-semibold text-slate-900">
            {member.name[lang] ?? member.name.ko}
          </div>
          <div className="mt-1 text-[11px] font-medium tracking-[0.16em] text-slate-500">
            {member.role}
          </div>
        </div>

        <div className="flex-1 flex items-center justify-center">
          <img
            src={member.characterImg}
            alt={member.name[lang] ?? member.name.ko}
            className="h-40 object-contain pointer-events-none select-none"
          />
        </div>

        <div className="pb-8 text-[10px] text-slate-400">
          여기에 마우스를 올려보세요!
        </div>

        <div
          className="
          pointer-events-none
          absolute inset-0
          rounded-[40px]
          bg-slate-700/90
          text-slate-100
          opacity-0
          scale-[0.96]
          translate-y-3
          group-hover:opacity-100
          group-hover:scale-100
          group-hover:translate-y-0
          transition-all duration-300
          flex flex-col items-center justify-center
          px-8
        "
        >
          <div className="mb-4 text-3xl leading-none">“</div>
          <p className="text-[16px] leading-relaxed text-center whitespace-pre-line">
            {comment}
          </p>
          <div className="mt-4 text-3xl leading-none">”</div>
        </div>
      </div>

      <RetrospectiveModal
        open={open}
        member={member}
        lang={lang}
        onClose={() => setOpen(false)}
      />
    </>
  );
}
