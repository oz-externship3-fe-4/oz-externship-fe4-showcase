import {
  SKILLS,
  HIGHLIGHT_TECHS,
} from "../../components/techstack/techStackConfig";
import { SkillIconCard } from "../../components/techstack/SkillIconCard";
import { TechHighlightCard } from "../../components/techstack/TechHighlightCard";

export default function TechStackPage() {
  return (
    <div className="relative flex flex-col h-full pt-2 pb-10">
      <section className="mb-8">
        <div
          className="
            grid grid-cols-5 gap-y-8
            justify-items-center
          "
        >
          {SKILLS.map((skill) => (
            <SkillIconCard key={skill.name} skill={skill} />
          ))}
        </div>
      </section>

      {/* 하단 대표 기술 카드 */}
      <section
        className="
          grid gap-6
          md:grid-cols-2
          xl:grid-cols-4
        "
      >
        {HIGHLIGHT_TECHS.map(({ key, ...tech }) => (
          <TechHighlightCard key={key} {...tech} />
        ))}
      </section>
    </div>
  );
}
