import type { FC } from "react";
import { cn } from "../../utils/cn";

interface DevProcessPaperCardProps {
  className?: string;
}

const DevProcessPaperCard: FC<DevProcessPaperCardProps> = ({ className }) => {
  return (
    <div
      className={cn(
        "relative w-full max-w-[750px] min-h-[700px] rounded-4xl border border-slate-200 bg-white/95 px-8 pb-8 pt-10 shadow-[0_10px_10px_rgba(15,23,42,0.08)]",
        className
      )}
    >
      <div className="pointer-events-none absolute -right-0.5 -top-0.5 h-10 w-10 overflow-hidden rounded-tr-[30px]">
        <div
          className="
            absolute right-0 top-0 h-8 w-8
            translate-x-2 -translate-y-2
            rotate-45
            bg-[radial-gradient(circle_at_0%_0%,#F5F7FF,#FFFFFF)]
            border border-slate-200
            border-t-transparent border-r-transparent
            shadow-[0_4px_4px_rgba(15,23,42,0.08)]
          "
        />
      </div>

      <header className="mb-6 text-center">
        <h2 className="text-xl font-extrabold tracking-tight text-slate-900">
          개발 프로세스
        </h2>
        <p className="mt-1 text-xs text-slate-500">
          문서화 &rarr; 설계 &rarr; 디자인 &rarr; 개발 &rarr; 협업
        </p>
      </header>

      <div className="grid gap-4 md:grid-cols-3">
        <section className="flex flex-col gap-3 rounded-2xl border border-slate-100 bg-slate-50/60 px-4 py-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700">
            <span className="h-2 w-2 rounded-full bg-amber-400" />
            문서화 및 설계
          </div>
          <div className="space-y-2 text-xs text-slate-600">
            <div>
              <p className="font-semibold text-slate-800">요구사항 정의서</p>
              <p className="mt-0.5 text-[11px] leading-snug text-slate-500">
                서비스 목표, 주요 기능, 비즈니스 규칙을 정리하고
                <br />
                공통된 기준으로 개발 범위를 맞춥니다.
              </p>
            </div>
            <div>
              <p className="font-semibold text-slate-800">테이블 명세서</p>
              <p className="mt-0.5 text-[11px] leading-snug text-slate-500">
                핵심 도메인과 컬럼 정의를 정리해
                <br />
                프론트·백엔드가 동일한 데이터 모델을 공유합니다.
              </p>
            </div>
          </div>
        </section>

        <section className="flex flex-col gap-3 rounded-2xl border border-slate-100 bg-rose-50/50 px-4 py-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-rose-50 px-3 py-1 text-xs font-semibold text-rose-700">
            <span className="h-2 w-2 rounded-full bg-rose-400" />
            디자인
          </div>
          <div className="space-y-2 text-xs text-slate-600">
            <div>
              <p className="font-semibold text-slate-800">와이어프레임</p>
              <p className="mt-0.5 text-[11px] leading-snug text-slate-500">
                화면 정보 구조와 주요 동선을 설계해
                <br />
                페이지 구조를 빠르게 검증합니다.
              </p>
            </div>
            <div>
              <p className="font-semibold text-slate-800">화면정의서</p>
              <p className="mt-0.5 text-[11px] leading-snug text-slate-500">
                각 화면의 요소와 상태를 정의해
                <br />
                컴포넌트 설계와 구현 가이드로 활용합니다.
              </p>
            </div>
          </div>
        </section>

        <section className="flex flex-col gap-3 rounded-2xl border border-slate-100 bg-sky-50/60 px-4 py-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-slate-900 text-xs font-semibold text-slate-50 px-3 py-1">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            개발 &amp; 협업
          </div>
          <div className="space-y-2 text-xs text-slate-600">
            <div>
              <p className="font-semibold text-slate-800">
                API 명세서 · Swagger
              </p>
              <p className="mt-0.5 text-[11px] leading-snug text-slate-500">
                요청/응답 스펙을 명확히 정의해
                <br />
                목업·실서버를 오가며 안정적으로 연동합니다.
              </p>
            </div>
            <div>
              <p className="font-semibold text-slate-800">
                UI 구현 &amp; API 연동
              </p>
              <p className="mt-0.5 text-[11px] leading-snug text-slate-500">
                공통 컴포넌트와 상태 관리 패턴을 통일하고
                <br />
                PR 규칙을 바탕으로 협업합니다.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DevProcessPaperCard;
