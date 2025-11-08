import { ArrowDown, ArrowRight } from "lucide-react";
import MascotsWithTiny from "./MascotsWithTiny";
import CountdownTicker from "./CountdownTicker";
import { COLORS } from "../../theme/tokens";

const TARGET_DATE = "2025-10-13T00:00:00+09:00"; // 데모데이 디데이 넣어주세요
const START_DATE = "2025-05-01T00:00:00+09:00"; // 프로젝트 시작일 (선택)

export default function ExternshipHero() {
  return (
    <div
      className="
        relative min-h-screen w-full overflow-hidden
        bg-gradient-to-br from-[#FFF7ED] via-[#FFFFFF] to-[#FEFCE8]
        text-slate-900
      "
    >
      {/* 배경 라이트 그라데이션 (왼쪽 아래) */}
      <div
        className="pointer-events-none absolute -left-32 bottom-[-80px] h-[320px] w-[320px] rounded-full blur-3xl opacity-70"
        style={{
          background:
            "radial-gradient(circle at center, rgba(255,214,150,0.9), rgba(255,247,237,0))",
        }}
      />

      {/* 배경 라이트 그라데이션 (오른쪽 위) */}
      <div
        className="pointer-events-none absolute right-[-80px] top-[-80px] h-[260px] w-[260px] rounded-full blur-3xl opacity-60"
        style={{
          background:
            "radial-gradient(circle at center, rgba(226,232,255,0.8), rgba(255,255,255,0))",
        }}
      />

      {/* 상단 로고/타이틀 */}
      <header className="relative z-10 mx-auto flex w-full max-w-6xl items-center justify-between px-8 pt-8">
        <div>
          <div className="text-xs font-semibold tracking-[0.16em] text-amber-500 uppercase">
            OZCODINGSCHOOL
          </div>
          <h1 className="mt-1 text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
            Externship 3기 FE 4팀
          </h1>
        </div>
        <div className="hidden sm:flex flex-col items-end text-[10px] text-slate-500 leading-tight">
          <span>Front-End Externship Project</span>
          <span>StudyHub · Admin · Public · Demo Day</span>
        </div>
      </header>

      {/* 메인 컨텐츠 */}
      <main className="relative z-10 mx-auto mt-6 flex w-full max-w-6xl flex-col gap-8 px-8 pb-16 lg:mt-10 lg:flex-row lg:items-center">
        {/* 왼쪽: 마스코트 + 카피 */}
        <section className="relative flex-1">
          {/* 캐릭터 아래 살짝 그림자/플로팅 느낌 */}
          <div
            className="pointer-events-none absolute left-16 top-[260px] h-8 w-40 rounded-full blur-2xl opacity-70"
            style={{
              background:
                "radial-gradient(circle, rgba(0,0,0,0.13), rgba(0,0,0,0))",
            }}
          />
          <MascotsWithTiny />

          {/* 카피 문구 */}
          <div className="mt-4 ml-6 space-y-1">
            <p className="text-sm font-medium text-amber-600">
              FE 4팀 · 준비 끝난 팀의 디데이
            </p>
            <p className="text-sm text-slate-600 max-w-xs">
              우리만의 StudyHub & Admin 시스템으로
              <br />
              Demo Day까지 풀스택에 근접한 프론트 실력을 증명합니다.
            </p>
          </div>
        </section>

        {/* 가운데: 동그란 화살표 (시각 연결용) */}
        <div className="hidden lg:flex items-center justify-center px-4">
          <div
            className="
              flex h-16 w-16 items-center justify-center rounded-full
              bg-white/90 shadow-md border border-amber-100
            "
          >
            <ArrowRight className="h-7 w-7 text-amber-500" />
          </div>
        </div>

        {/* 오른쪽: 카운트다운 */}
        <section className="flex-1 flex items-center justify-center">
          <CountdownTicker
            target={TARGET_DATE}
            start={START_DATE}
            size="lg"
            theme={externshipTheme}
            className="
              backdrop-blur-xl
              bg-white/70
            "
          />
        </section>
      </main>

      {/* Scroll 인디케이터 */}
      <div className="pointer-events-none absolute bottom-6 left-1/2 z-10 -translate-x-1/2 flex flex-col items-center text-[10px] text-slate-500 gap-1">
        <span>Scroll</span>
        <ArrowDown className="h-4 w-4 animate-bounce" />
      </div>
    </div>
  );
}
