import {
  Sparkles,
  Bug,
  Recycle,
  ClipboardList,
  FileText,
  Settings2,
  Flame,
} from "lucide-react";
import { CommitTypeCard } from "../../components/convention/Card";

const COMMIT_TYPES = [
  {
    id: "feat",
    icon: Sparkles,
    label: ": feat",
    desc: "새로운 기능 추가",
  },
  {
    id: "fix",
    icon: Bug,
    label: ": fix",
    desc: "버그 · 오작동 수정",
  },
  {
    id: "refactor",
    icon: Recycle,
    label: ": refactor",
    desc: "코드 구조 개선 (기능 동일)",
  },
  {
    id: "chore",
    icon: ClipboardList,
    label: ": chore",
    desc: "오타 · 주석 · 단순 코드 정리",
  },
  {
    id: "docs",
    icon: FileText,
    label: ": docs",
    desc: "문서 수정",
  },
  {
    id: "build",
    icon: Settings2,
    label: ": build",
    desc: "빌드 / 환경 / 의존성 변경",
  },
  {
    id: "hotfix",
    icon: Flame,
    label: ": hotfix",
    desc: "긴급 수정 (장애 대응)",
  },
] as const;

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
                flex-1 min-h-[180px]
                rounded-[30px]
                bg-[#eef0f4]
                border border-slate-100
                px-6 py-5
              "
            >
              {/* <h2 className="text-sm md:text-base font-semibold text-slate-800">
                1. 주절주절
              </h2>
              <p className="mt-2 text-[11px] md:text-xs text-slate-500">
                여긴 뭘 넣을까?
              </p> */}
            </section>

            <section
              className="
                flex-1 min-h-[180px]
                rounded-[30px]
                bg-[#eef0f4]
                border border-slate-100
                px-6 py-5
              "
            >
              {/* <h2 className="text-sm md:text-base font-semibold text-slate-800">
                2. 주절
              </h2>
              <p className="mt-2 text-[11px] md:text-xs text-slate-500">
                여긴 어떤거?
              </p> */}
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
