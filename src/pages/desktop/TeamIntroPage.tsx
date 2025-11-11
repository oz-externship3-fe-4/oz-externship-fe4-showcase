import { useRef, useState, useEffect } from "react";
import { TeamCard } from "../../components/team/TeamCard";
import { useTeamCardsFocus } from "../../hooks/animations/useTeamCardsFocus";
import { softPaintBg } from "../../components/Layout/layoutConfig";
import { TEAM_MEMBERS } from "../../components/team/teamMembers";
import type { MemberWithResume } from "../../types/resume";
import ResumeModal from "../../components/team/ResumeModal";
import type { LayoutContext } from "../../components/Layout/Layout";
import { useOutletContext } from "react-router";
import type { ResumeLang } from "../../types/resume";

export default function TeamIntroPage() {
  const { lang } = useOutletContext<LayoutContext>();
  const [activeIndex, setActiveIndex] = useState(2);
  const [selectedMember, setSelectedMember] = useState<MemberWithResume | null>(
    null
  );
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const wheelLockRef = useRef(false);

  const EXTENDED_MEMBERS: MemberWithResume[] = [
    ...TEAM_MEMBERS,
    ...TEAM_MEMBERS,
    ...TEAM_MEMBERS,
  ];

  useTeamCardsFocus(cardRefs.current, activeIndex);

  const handleWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    if (wheelLockRef.current) {
      event.preventDefault();
      return;
    }

    const { deltaY, deltaX } = event;

    const amount = Math.abs(deltaY) > Math.abs(deltaX) ? deltaY : deltaX;
    if (Math.abs(amount) < 10) return;

    event.preventDefault();

    setActiveIndex((prev) => prev + (amount > 0 ? 1 : -1));

    wheelLockRef.current = true;
    setTimeout(() => {
      wheelLockRef.current = false;
    }, 450);
  };

  useEffect(() => {
    const total = TEAM_MEMBERS.length;
    const safeIndex = activeIndex % total;

    if (activeIndex > total * 2 || activeIndex < total) {
      setActiveIndex(total + safeIndex);
    }
  }, [activeIndex]);

  const handleCardClick = (index: number) => {
    setActiveIndex(index);
    const member = EXTENDED_MEMBERS[index];
    if (member) {
      setSelectedMember(member);
    }
  };

  const handleCloseModal = () => {
    setSelectedMember(null);
  };

  return (
    <>
      <div
        className="relative flex flex-col h-full px-16 pt-80"
        style={{ background: softPaintBg }}
        onWheel={handleWheel}
      >
        <div className="relative mt-2 h-[350px] flex items-end justify-center overflow-visible">
          {EXTENDED_MEMBERS.map((member, index) => (
            <div
              key={`${member.id}-${index}`}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              className="absolute left-1/2 cursor-pointer"
              onClick={() => setActiveIndex(index)}
            >
              <TeamCard
                key={member.id}
                name={member.name[lang]}
                role={member.role[lang]}
                badge={member.badge}
                characterImg={member.characterImg}
                description={member.description[lang]}
                imageScale={member.imageScale}
                imageOffsetY={member.imageOffsetY}
                onClick={() => handleCardClick(index)}
              />
            </div>
          ))}
        </div>
      </div>

      <ResumeModal
        open={!!selectedMember}
        member={selectedMember}
        onClose={handleCloseModal}
        languageDefault={lang as ResumeLang}
      />
    </>
  );
}
