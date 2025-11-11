import type {
  MemberWithResume,
  ResumeData,
  ResumeLang,
} from "../../types/resume";
import { IconButton } from "./ResumeIconButton";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

const LABEL: Record<ResumeLang, Record<string, string>> = {
  ko: {
    intro: "소개",
    kpi: "프로젝트 핵심 성과",
    exp: "경력",
    proj: "프로젝트",
    skills: "스킬",
    edu: "학력",
    cert: "자격 및 수료",
    contact: "연락 및 링크",
  },
  en: {
    intro: "Summary",
    kpi: "Key Achievements",
    exp: "Experience",
    proj: "Projects",
    skills: "Skills",
    edu: "Education",
    cert: "Certificates",
    contact: "Contact & Links",
  },
  jp: {
    intro: "紹介",
    kpi: "主要成果",
    exp: "経歴",
    proj: "プロジェクト",
    skills: "スキル",
    edu: "学歴",
    cert: "資格・修了",
    contact: "連絡先 & リンク",
  },
};

interface Props {
  member: MemberWithResume;
  data?: ResumeData;
  lang: ResumeLang;
}

export function ResumeContent({ member, data, lang }: Props) {
  const t = LABEL[lang];

  if (!data) {
    return (
      <div className="px-8 py-10 text-sm text-slate-500">
        아직 이력 정보가 작성되지 않았습니다.
      </div>
    );
  }

  const titleCls =
    "mb-3 flex items-center gap-2 text-[13px] font-semibold text-slate-900";
  const dot = (
    <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
  );

  return (
    <div
      className="
        relative
        max-h-[64vh]
        overflow-y-auto
        px-8 pt-4 pb-8
        scrollbar-hide
      "
      style={{
        background:
          "linear-gradient(to bottom, rgba(245,250,255,0.98), rgba(255,255,255,0.98), rgba(214,252,232,0.9))",
      }}
    >
      <div
        className="
          relative
          space-y-8
          border-t border-slate-100
          pt-5
        "
      >
        {data.intro && (
          <section
            className="
              rounded-2xl bg-white/95
              border border-slate-100
              px-5 py-4
            "
          >
            <h3 className={titleCls}>
              {dot}
              <span>{t.intro}</span>
            </h3>
            <p className="text-[13px] text-slate-800 whitespace-pre-line leading-relaxed">
              {data.intro}
            </p>
          </section>
        )}

        {!!data.kpis?.length && (
          <section
            className="
              rounded-2xl bg-white/95
              border border-slate-100
              px-5 py-4
            "
          >
            <h3 className={titleCls}>
              {dot}
              <span>{t.kpi}</span>
            </h3>
            <div className="flex flex-wrap gap-6 text-[11px] text-slate-700">
              {data.kpis.map((k) => (
                <div key={k.label} className="flex flex-col gap-0.5">
                  <span className="text-slate-500">{k.label}</span>
                  <span className="font-semibold text-slate-900">
                    {k.value}
                  </span>
                </div>
              ))}
            </div>
          </section>
        )}

        {!!data.experiences?.length && (
          <section
            className="
              rounded-2xl bg-white/95
              border border-slate-100
              px-5 py-4
            "
          >
            <h3 className={titleCls}>
              {dot}
              <span>{t.exp}</span>
            </h3>
            <div className="space-y-3 text-[13px] text-slate-800">
              {data.experiences.map((exp, i) => (
                <div
                  key={i}
                  className="
                    rounded-xl bg-slate-50/90
                    border border-slate-100
                    px-4 py-3
                  "
                >
                  {exp.period && (
                    <p className="text-[9px] text-slate-500">{exp.period}</p>
                  )}
                  <p className="mt-0.5 font-semibold">{exp.title}</p>
                  {!!exp.details?.length && (
                    <ul className="mt-1.5 list-disc pl-4 space-y-0.5">
                      {exp.details.map((d, idx) => (
                        <li key={idx}>{d}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {!!data.projects?.length && (
          <section
            className="
              rounded-2xl bg-white/95
              border border-slate-100
              px-5 py-4
            "
          >
            <h3 className={titleCls}>
              {dot}
              <span>{t.proj}</span>
            </h3>
            <div className="space-y-3 text-[13px] text-slate-800">
              {data.projects.map((p, i) => (
                <div
                  key={i}
                  className="
                    rounded-xl bg-slate-50/90
                    border border-slate-100
                    px-4 py-3
                  "
                >
                  <div className="flex justify-between gap-3">
                    <p className="font-semibold">{p.name}</p>
                    {p.period && (
                      <p className="text-[9px] text-slate-500">{p.period}</p>
                    )}
                  </div>
                  {p.role && (
                    <p className="mt-0.5 text-[10px] text-slate-500">
                      역할: {p.role}
                    </p>
                  )}
                  {p.summary && (
                    <p className="mt-1.5 leading-relaxed">{p.summary}</p>
                  )}
                  {!!p.tech?.length && (
                    <div className="mt-1.5 flex flex-wrap gap-1.5">
                      {p.tech.map((tech) => (
                        <span
                          key={tech}
                          className="
                            rounded-full bg-white
                            border border-slate-100
                            px-2 py-0.5
                            text-[9px] text-slate-700
                          "
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                  {!!p.bullets?.length && (
                    <ul className="mt-1.5 list-disc pl-4 space-y-0.5">
                      {p.bullets.map((b, idx) => (
                        <li key={idx}>{b}</li>
                      ))}
                    </ul>
                  )}
                  {p.link && (
                    <div className="mt-2">
                      <IconButton
                        href={p.link.href}
                        label={p.link.label}
                        variant="link"
                      >
                        <ExternalLink size={14} />
                      </IconButton>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {!!data.skills?.length && (
          <section
            className="
              rounded-2xl bg-white/95
              border border-slate-100
              px-5 py-4
            "
          >
            <h3 className={titleCls}>
              {dot}
              <span>{t.skills}</span>
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {data.skills.map((s) => (
                <span
                  key={s}
                  className="
                    inline-flex items-center gap-1
                    rounded-full bg-slate-50
                    border border-slate-100
                    px-2.5 py-1
                    text-[9px] text-slate-800
                  "
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  {s}
                </span>
              ))}
            </div>
          </section>
        )}

        {!!data.education?.length && (
          <section
            className="
              rounded-2xl bg-white/95
              border border-slate-100
              px-5 py-4
            "
          >
            <h3 className={titleCls}>
              {dot}
              <span>{t.edu}</span>
            </h3>
            <ul className="space-y-1 text-[13px]">
              {data.education.map((e, i) => (
                <li key={i}>
                  <span className="font-semibold">{e.school}</span>
                  {e.degree && <> · {e.degree}</>}
                  {e.period && (
                    <span className="ml-2 text-[10px] text-slate-500">
                      {e.period}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </section>
        )}

        {!!data.certifications?.length && (
          <section
            className="
              rounded-2xl bg-white/95
              border border-slate-100
              px-5 py-4
            "
          >
            <h3 className={titleCls}>
              {dot}
              <span>{t.cert}</span>
            </h3>
            <ul className="space-y-1 text-[13px]">
              {data.certifications.map((c, i) => (
                <li key={i}>
                  {c.name}
                  {c.issuedBy && <> · {c.issuedBy}</>}
                  {c.date && (
                    <span className="ml-2 text-[10px] text-slate-500">
                      {c.date}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </section>
        )}

        <section
          className="
            rounded-2xl bg-white/98
            border border-slate-100
            px-5 py-4
          "
        >
          <h3 className={titleCls}>
            {dot}
            <span>{t.contact}</span>
          </h3>
          <div className="flex flex-wrap gap-2">
            {member.github && (
              <IconButton href={member.github} label="GitHub" variant="github">
                <Github size={14} />
              </IconButton>
            )}
            {member.linkedin && (
              <IconButton
                href={member.linkedin}
                label="LinkedIn"
                variant="linkedin"
              >
                <Linkedin size={14} />
              </IconButton>
            )}
            {member.email && (
              <IconButton
                href={`mailto:${member.email}`}
                label={member.email}
                variant="email"
              >
                <Mail size={14} />
              </IconButton>
            )}
            {data.links?.map((l) => (
              <IconButton
                key={l.href}
                href={l.href}
                label={l.label}
                variant="link"
              >
                <ExternalLink size={14} />
              </IconButton>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
