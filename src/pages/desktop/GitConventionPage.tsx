import { CommitTypeCard } from "../../components/convention/Card";
import { TemplateCard } from "../../components/convention/TemplateCard";
import { COMMIT_TYPES } from "../../constants/git/commitTypes";
import { GIT_RULE_CARDS } from "../../constants/git/gitRules";
import {
  ISSUE_TEMPLATE_TEXT,
  PR_TEMPLATE_TEXT,
} from "../../constants/git/templates";

export default function GitConventionPage() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div
        className="
          flex w-full max-w-[1600px]
          h-[80vh]
          rounded-3xl
          bg-white
          px-4 py-4
        "
      >
        <div className="flex h-full w-full flex-col gap-6 lg:flex-row">
          <div className="flex h-full w-full max-w-xs flex-col gap-3">
            {COMMIT_TYPES.map((type) => (
              <CommitTypeCard key={type.id} type={type} />
            ))}
          </div>

          <div className="flex h-full flex-1 flex-col gap-6">
            <section
              className="
                flex-none
                rounded-[30px]
              bg-[#eef0f4]
              border border-slate-100
              px-6 py-2
              "
            >
              <div className="mt-3 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
                {GIT_RULE_CARDS.map((rule) => {
                  const Icon = rule.icon;
                  return (
                    <div key={rule.id} className="flex flex-col items-center">
                      <div
                        className="
                          flex h-[150px] w-full max-w-[190px]
                          items-center justify-center
                          rounded-[28px]
                          bg-[radial-gradient(circle_at_0%_0%,#f4f8ff,#ffffff)]
                          shadow-[0_16px_40px_rgba(15,23,42,0.08)]
                        "
                      >
                        <Icon className="h-24 w-24 text-slate-800" />
                      </div>

                      <p
                        className="
                          mt-3
                          text-center text-[15px] leading-snug font-semibold
                        text-slate-800 whitespace-pre-line
                      "
                      >
                        {rule.label}
                      </p>
                    </div>
                  );
                })}
              </div>
            </section>

            <section
              className="
                flex-1
                rounded-[30px]
              bg-[#EEF2F7]
                border border-slate-100
                px-6 py-5
                flex flex-col
              "
            >
              <div className="mt-2 grid flex-1 grid-cols-1 gap-4 md:grid-cols-2">
                <TemplateCard
                  title="ISSUE_TEMPLATE.md"
                  body={ISSUE_TEMPLATE_TEXT}
                />
                <TemplateCard
                  title="PULL_REQUEST_TEMPLATE.md"
                  body={PR_TEMPLATE_TEXT}
                />
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
