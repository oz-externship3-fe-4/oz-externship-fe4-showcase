import { useOutletContext } from "react-router";
import { softPaintBg } from "../../components/Layout/layoutConfig";
import { TEAM_MEMBERS } from "../../components/team/teamMembers";
import type { LayoutContext } from "../../components/Layout/Layout";
import type { MemberWithResume } from "../../types/resume";
import { FolderIcon } from "../../components/plan/FolderIcon";
import { GithubIcon } from "lucide-react";

const FRONTEND_DEPLOY_URL = "https://admin.ozcoding.site/";
const TEAM_GITHUB_URL =
  "https://github.com/OZ-Coding-School/oz_externship_fe_03_team4";
const POPOL_GITHUB_URL =
  "https://github.com/oz-externship3-fe-4/oz-externship-fe4-showcase";

export default function TeamLinksPage() {
  const { lang } = useOutletContext<LayoutContext>();
  const members = TEAM_MEMBERS as unknown as MemberWithResume[];

  return (
    <div
      className="relative flex h-full w-full flex-col px-16 pt-5"
      style={{ background: softPaintBg }}
    >
      <div className="mb-15 flex flex-col items-center gap-6 md:flex-row md:justify-center md:gap-16">
        <FolderIcon
          label="프론트엔드 배포"
          color="blue"
          href={FRONTEND_DEPLOY_URL}
          iconSrc="/images/Vercel-Dark.svg"
        />
        <FolderIcon
          label="프로젝트 GitHub"
          color="pink"
          href={TEAM_GITHUB_URL}
          icon={<GithubIcon size={50} className="text-slate-700 opacity-80" />}
        />
        <FolderIcon
          label="포트폴리오 GitHub"
          color="green"
          href={POPOL_GITHUB_URL}
          icon={<GithubIcon size={50} className="text-slate-700 opacity-80" />}
        />
      </div>

      {/* 멤버 카드 영역 */}
      <div className="mt-10 flex w-full max-w-8xl flex-wrap justify-center gap-8 self-center">
        {members.map((member) => {
          const scale = member.imageScale ?? 1.4;
          const offsetY = member.imageOffsetY ?? 0;

          return (
            <div
              key={member.id}
              className="
    relative flex flex-col items-center justify-end
    rounded-3xl bg-white
    px-8 pb-5 pt-16
    shadow-[0_18px_60px_rgba(15,23,42,0.12)]
    w-60
    h-[280px]
    transform-gpu
    transition-all duration-300
    hover:-translate-y-3 hover:scale-[1.02]
    hover:shadow-[0_26px_80px_rgba(15,23,42,0.22)]
    select-none
  "
              style={{
                isolation: "isolate",
                backfaceVisibility: "hidden",
              }}
            >
              <div
                className="
                  absolute -top-10
                  left-1/2 -translate-x-1/2
                  flex h-24 w-28 items-center justify-center
                  pointer-events-none select-none
                "
                style={{ marginTop: offsetY }}
              >
                <img
                  src={member.characterImg}
                  alt={member.name[lang]}
                  className="max-h-full max-w-full object-contain"
                  style={{
                    transform: `scale(${scale})`,
                    transformOrigin: "center bottom",
                  }}
                />
              </div>

              {member.badge && (
                <div
                  className="
                    mb-3 px-3 py-1
                    rounded-full bg-green-100 border
                    text-[11px] font-semibold
                    text-slate-500 tracking-[0.12em]
                  "
                >
                  {member.badge}
                </div>
              )}

              <h3 className="mt-1 text-[18px] font-extrabold leading-tight text-slate-900">
                {member.name[lang]}
              </h3>
              <p className="mt-0.5 text-[11px] font-semibold tracking-[0.18em] text-slate-500">
                {member.role[lang]}
              </p>

              <p className="mt-3 text-center text-[11px] leading-snug text-slate-500">
                {member.email}
              </p>

              {member.github && (
                <a
                  href={member.github}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    group
                    mt-4 inline-flex items-center justify-center
                    rounded-full border border-slate-200 bg-slate-50
                    px-4 py-1.5 text-[11px] font-semibold text-slate-700
                    shadow-[0_8px_18px_rgba(15,23,42,0.06)]
                    transition-colors
                    hover:border-slate-900 hover:bg-slate-900 hover:text-white
                  "
                >
                  <GithubIcon
                    size={15}
                    className="mr-2 text-slate-700 opacity-80 transition-colors group-hover:text-white"
                  />
                  개인 Github
                </a>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
