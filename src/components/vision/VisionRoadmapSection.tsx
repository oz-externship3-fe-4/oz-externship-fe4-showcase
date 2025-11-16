type Step = {
  label: string;
  title: string;
  body: string;
  chips: string[];
};

const STEPS: Step[] = [
  {
    label: "현재단계",
    title: "프론트엔드 기초 완성",
    body:
      "React, TypeScript, TanStack Query를 활용한 실무 프로젝트 경험을 쌓고 있습니다.\n" +
      "재사용 가능한 컴포넌트 설계와 효율적인 상태 관리를 정교하게 다듬고,\n" +
      "코드 리뷰를 통해 코드 품질을 지속적으로 개선하고 있습니다.",
    chips: ["React", "TypeScript", "TanStack Query", "상태관리", "코드리뷰"],
  },
  {
    label: "다음단계",
    title: "성능 최적화 & 테스트 전문성",
    body:
      "웹 성능 최적화 기법을 깊이 있게 학습하고, Jest와 React Testing Library를 활용한 테스트 코드 작성 능력을 키우고자 합니다.\n" +
      "사용자 경험을 정량적으로 측정하고 개선하는 역할을 강화할 계획입니다.",
    chips: ["성능최적화", "Jest", "Testing Library", "Lighthouse"],
  },
  {
    label: "장기목표",
    title: "풀스택 개발 역량 확장",
    body:
      "프론트엔드를 넘어 백엔드 기술을 학습하여 풀스택 개발자로 성장하고자 합니다.\n" +
      "Node.js, NestJS를 활용한 API 개발과 데이터베이스 설계 경험을 쌓아\n" +
      "서비스 전체를 이해하고 구현할 수 있는 개발자가 되는 것이 목표입니다.",
    chips: ["Node.js", "NestJS", "REST API", "DB 설계"],
  },
];

export default function VisionRoadmapSection() {
  return (
    <div className="flex h-full w-full items-center justify-center px-14 py-12">
      <div className="flex w-full max-w-[1320px] items-stretch gap-10">
        <div className="relative flex w-28 justify-center">
          <div
            className="
              absolute left-1/2 top-6 bottom-6
              w-[5px] -translate-x-1/2
              rounded-full
              bg-black
            "
          />
          <div className="flex flex-col justify-between py-6 gap-10">
            {STEPS.map((_, idx) => (
              <div
                key={idx}
                className="relative flex h-10 items-center justify-center"
              >
                <div className="h-5 w-5 rounded-full bg-emerald-50 shadow-[0_0_0_4px_rgba(16,185,129,0.35)]" />
                <div className="absolute h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 space-y-6">
          <div className="mb-1">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-500">
              Growth roadmap
            </p>
            <h2 className="text-xl font-bold text-slate-800">
              단계별 성장 계획
            </h2>
          </div>

          {STEPS.map((step) => (
            <article
              key={step.title}
              className="
                group relative
                rounded-3xl border border-emerald-50
                bg-white/95
                px-8 py-5
                shadow-[0_18px_45px_rgba(15,23,42,0.08)]
                backdrop-blur-sm
                transition-shadow duration-300
                hover:-translate-y-1 hover:shadow-[0_24px_65px_rgba(15,23,42,0.16)]
              "
            >
              <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-linear-to-r from-emerald-200/0 via-emerald-200/80 to-emerald-200/0" />

              <header className="mb-1">
                <div className="inline-flex items-center rounded-full bg-emerald-100 px-3 py-2 text-[14px] font-semibold text-emerald-700 mb-1">
                  {step.label}
                </div>
                <h3 className="text-lg font-semibold text-slate-900">
                  {step.title}
                </h3>
              </header>

              <p className="mb-4 text-sm leading-relaxed text-slate-700 whitespace-pre-line">
                {step.body}
              </p>

              <div className="flex flex-wrap gap-2">
                {step.chips.map((chip) => (
                  <span
                    key={chip}
                    className="
                      rounded-full border border-black
                      px-3 py-1
                      text-[11px] font-medium text-black
                    "
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
