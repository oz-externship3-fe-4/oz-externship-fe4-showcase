import type { FC } from "react";
import { cn } from "../../utils/cn";

interface DevProcessPaperCardProps {
  className?: string;
}

const DevProcessPaperCard: FC<DevProcessPaperCardProps> = ({ className }) => {
  return (
    <div
      className={cn(
        "relative w-full max-w-[750px] min-h-[700px] rounded-4xl border border-slate-200 bg-white/95 px-8 pb-10 pt-10 shadow-[0_10px_10px_rgba(15,23,42,0.08)]",
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

      <header className="mb-8 text-center">
        <h2 className="text-2xl font-extrabold tracking-tight text-slate-900">
          개발 프로세스
        </h2>
        <p className="mt-2 text-xs text-slate-500">
          문서화 → 설계 → 디자인 → 개발 → 협업
        </p>
      </header>

      <div className="grid gap-5 md:grid-cols-3">
        <section className="flex flex-col gap-3 rounded-3xl border border-slate-100 bg-slate-50/70 px-4 py-5">
          <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-[11px] font-semibold text-slate-700 shadow-sm">
            <span>📄</span>
            <span>문서화 및 설계</span>
          </div>

          <div className="mt-1 space-y-4 text-xs text-slate-600">
            <div>
              <p className="text-[20px] font-semibold text-slate-900">
                요구사항 정의서
              </p>
              <p className="text-[15px] text-slate-400">(Google Docs)</p>
              <p className="mt-1 text-[12px] leading-snug text-slate-500">
                서비스 목적, 사용자 요구, 핵심 기능을 정리한 문서입니다.
                <br />
                기획·디자인·개발이 동일한 목표를 공유하도록 기준을 세웁니다.
              </p>
            </div>

            <div>
              <p className="text-[20px] font-semibold text-slate-900">
                테이블 명세서
              </p>
              <p className="text-[15px] text-slate-400">(Google Docs)</p>
              <p className="mt-1 text-[11px] leading-snug text-slate-500">
                핵심 도메인과 컬럼들을 정의해
                <br />
                프론트 · 백엔드가 같은 데이터 모델을 공유합니다.
              </p>
            </div>
          </div>
        </section>

        <section className="flex flex-col gap-3 rounded-3xl border border-slate-100 bg-rose-50/70 px-4 py-5">
          <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-[11px] font-semibold text-slate-700 shadow-sm">
            <span>🎨</span>
            <span>디자인</span>
          </div>

          <div className="mt-1 space-y-4 text-xs text-slate-600">
            <div>
              <p className="text-[20px] font-semibold text-slate-900">
                와이어프레임
              </p>
              <p className="text-[15px] text-slate-400">(Figma)</p>
              <p className="mt-1 text-[11px] leading-snug text-slate-500">
                화면 구조와 주요 플로우를 정의해
                <br />
                전체 UX 흐름을 먼저 검증합니다.
              </p>
            </div>

            <div>
              <p className="text-[20px] font-semibold text-slate-900">
                화면정의서
              </p>
              <p className="text-[15px] text-slate-400">(Figma)</p>
              <p className="mt-1 text-[11px] leading-snug text-slate-500">
                화면별 요소와 상태를 정리해
                <br />
                컴포넌트 설계와 구현 기준으로 활용합니다.
              </p>
            </div>

            <div>
              <p className="text-[20px] font-semibold text-slate-900">
                플로우차트
              </p>
              <p className="text-[15px] text-slate-400">(Figma)</p>
              <p className="mt-1 text-[11px] leading-snug text-slate-500">
                사용자 액션과 시스템 응답을 흐름도로 표현해
                <br />
                예외 케이스까지 빠짐없이 확인합니다.
              </p>
            </div>
          </div>
        </section>

        <section className="flex flex-col gap-3 rounded-3xl border border-slate-100 bg-sky-50/70 px-4 py-5">
          <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-[11px] font-semibold text-slate-900 shadow-sm">
            <span>💻</span>
            <span>개발 및 협업</span>
          </div>

          <div className="mt-1 space-y-4 text-xs text-slate-600">
            <div>
              <p className="text-[20px] font-semibold text-slate-900">
                API 명세서
              </p>
              <p className="text-[15px] text-slate-400">(Notion · 문서)</p>
              <p className="mt-1 text-[11px] leading-snug text-slate-500">
                요청/응답 필드를 명확히 정의해
                <br />
                목업과 실제 서버를 오가며 연동합니다.
              </p>
            </div>

            <div>
              <p className="text-[20px] font-semibold text-slate-900">
                Swagger
              </p>
              <p className="text-[15px] text-slate-400">(Swagger UI)</p>
              <p className="mt-1 text-[11px] leading-snug text-slate-500">
                실시간 API 스펙과 예시를 확인하며
                <br />
                프론트·백엔드 간 동작을 점검합니다.
              </p>
            </div>

            <div>
              <p className="text-[20px] font-semibold text-slate-900">
                UI 구현 &amp; API 연동
              </p>
              <p className="text-[15px] text-slate-400">(GitHub · VSCode)</p>
              <p className="mt-1 text-[11px] leading-snug text-slate-500">
                공통 컴포넌트, 상태 관리, PR 규칙을 기반으로
                <br />
                안정적인 협업 환경을 유지합니다.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DevProcessPaperCard;
