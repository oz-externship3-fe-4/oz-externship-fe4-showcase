import { useOutletContext } from "react-router";
import type { LayoutContext } from "../Layout/Layout";
import { VisionCodeCard } from "./VisionCodeCard";

const VISION_COPY = {
  ko: {
    subtitle: `끊임없이 배우고 성장하는 개발자로서 더 나은 코드, 
    더 나은 사용자 경험을 만들어가고 있습니다.`,
    growthComment: "// 지속적인 성장",
  },
  en: {
    subtitle:
      "As a constantly learning developer, I strive to write better code and craft better user experiences.",
    growthComment: "// Continuous growth",
  },
  jp: {
    subtitle:
      "絶えず学び成長する開発者として、より良いコードとより良いユーザー体験を目指しています。",
    growthComment: "// 継続的な成長",
  },
} as const;

const CODE_1 = `const developer = {
  status: 'learning',
  passion: 'infinite',
}`;

const CODE_2_KO = `// 지속적인 성장
while (true) {
  learn()
  build()
  improve()
}`;

export default function VisionPage() {
  const { lang } = useOutletContext<LayoutContext>();
  const t = VISION_COPY[lang];

  return (
    <div className="flex h-full w-full items-center justify-center px-50 py-12">
      <div
        className="
          grid w-full max-w-[1320px]
          grid-cols-[minmax(0,1.1fr)_minmax(0,0.95fr)]
          gap-20 items-center
        "
      >
        <section className="space-y-2 space-x-6">
          <div className="space-y-3">
            <h1 className="leading-[0.9] tracking-tight text-slate-700 font-extrabold">
              <span className="block">
                <span className="text-[100px]">G</span>
                <span className="text-[72px]">rowth</span>
              </span>

              <span className="block">
                {" "}
                <span className="text-[100px]">J</span>
                <span className="text-[72px]">ourney</span>
              </span>
            </h1>
          </div>

          <p className="max-w-xl text-[20px] whitespace-pre-line leading-relaxed text-slate-700">
            {t.subtitle}
          </p>
        </section>

        <section className="flex flex-col gap-7 items-start">
          <VisionCodeCard code={CODE_1} />

          <VisionCodeCard
            code={
              lang === "ko"
                ? CODE_2_KO
                : lang === "en"
                ? `// Continuous growth
while (true) {
  learn()
  build()
  improve()
}`
                : `// 継続的な成長
while (true) {
  learn()
  build()
  improve()
}`
            }
          />
        </section>
      </div>
    </div>
  );
}
