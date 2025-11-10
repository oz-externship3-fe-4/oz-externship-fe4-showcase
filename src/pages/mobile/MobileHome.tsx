import MascotsWithTiny from "../../components/main/mascots/MainMascots";
import CountdownTicker from "../../components/main/countdown/CountdownTicker";
import { countdownInlineTheme } from "../../theme/tokens";

const TARGET_DATE = "2025-11-17T00:00:00+09:00";

const softPaintBg = `
  radial-gradient(circle at 0% 0%,
    rgba(193,224,255,0.28),
    rgba(193,224,255,0) 55%),
  radial-gradient(circle at 20% 90%,
    rgba(255,220,230,0.25),
    rgba(255,220,230,0) 55%),
  radial-gradient(circle at 85% 35%,
    rgba(210,246,230,0.2),
    rgba(210,246,230,0) 55%),
  #FFFFFF
`;

export default function MobileHome() {
  return (
    <div
      className="
        min-h-screen w-full
        flex flex-col
        bg-[#ECEFF3]
        items-center justify-start
        pt-10 pb-12
      "
    >
      <div
        className="
          w-[94vw] max-w-[480px]
          rounded-4xl
          bg-white
          shadow-[0_14px_40px_rgba(15,23,42,0.12)]
          overflow-hidden
          flex flex-col items-stretch
        "
        style={{ background: softPaintBg }}
      >
        <header className="px-6 pt-6">
          <div className="text-[10px] font-semibold tracking-[0.16em] text-[#F6A623] uppercase">
            OZCODINGSCHOOL
          </div>
          <h1 className="mt-1 text-[22px] font-extrabold tracking-tight text-slate-900">
            Externship 3기 FE 4팀
          </h1>
        </header>

        <div className="mt-4 flex justify-center">
          <MascotsWithTiny />
        </div>

        <div className="mt-4 mb-6 px-4 flex justify-center">
          <CountdownTicker
            target={TARGET_DATE}
            variant="inline"
            theme={countdownInlineTheme}
          />
        </div>
      </div>
    </div>
  );
}
