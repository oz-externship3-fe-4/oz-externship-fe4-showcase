import { ArrowRight } from "lucide-react";
import MascotsWithTiny from "../../components/main/mascots/MainMascots";
import CountdownTicker from "../../components/main/countdown/CountdownTicker";
import { countdownInlineTheme } from "../../theme/tokens";
import { useRef } from "react";
import { useHoverGsap } from "../../hooks/animations/useHoverGsap";
import { useNavigate } from "react-router";

const TARGET_DATE = "2025-11-17T00:00:00+09:00";

const softPaintBg = `
  radial-gradient(circle at 0% 0%,
    rgba(193,224,255,0.25),
    rgba(193,224,255,0) 55%),
  radial-gradient(circle at 20% 90%,
    rgba(255,220,230,0.22),
    rgba(255,220,230,0) 55%),
  radial-gradient(circle at 85% 35%,
    rgba(210,246,230,0.18),
    rgba(210,246,230,0) 55%),
  #FFFFFF
`;
export default function DesktopHome() {
  const arrowWrapperRef = useRef<HTMLDivElement | null>(null);
  const arrowCircleRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();

  useHoverGsap(arrowWrapperRef, arrowCircleRef, {
    scale: 1.12,
    translateY: 0,
    rotate: 0,
    iconTranslateX: 0,
    shadowStart: "0 14px 40px rgba(0,0,0,0.22)",
    shadowEnd: "0 18px 48px rgba(0,0,0,0.28)",
  });

  return (
    <div
      className="
        relative min-h-screen w-full overflow-hidden
        flex items-center justify-center
        bg-[#ECEFF3]
      "
    >
      <div
        className="
          relative flex
          w-[98vw] max-w-[1800px]
          min-h-[95vh]
          rounded-[60px]
          bg-white
          shadow-[0_18px_70px_rgba(15,23,42,0.10)]
          overflow-hidden
        "
      >
        <section
          className="
            relative flex-[1.05]
            px-16 pt-20 pb-20
            flex flex-col justify-between
            overflow-hidden
          "
          style={{ background: softPaintBg }}
        >
          <div>
            <div className="text-[14px] font-semibold tracking-[0.16em] text-[#F6A623] uppercase select-none">
              OZCODINGSCHOOL
              <h1 className="text-[44px] sm:text-[56px] font-extrabold tracking-tight text-slate-900 select-none">
                Externship 3기 FE 4팀
              </h1>
            </div>
          </div>

          <div className="relative flex justify-center mt-6">
            <MascotsWithTiny />
          </div>
        </section>

        <div
          ref={arrowWrapperRef}
          className="relative flex items-center justify-center z-20"
        >
          <div
            ref={arrowCircleRef}
            onClick={() => navigate("/home")}
            className="
              flex h-20 w-20 md:h-24 md:w-24
              items-center justify-center
              rounded-full
              bg-[#FFC94A]
              shadow-[0_14px_40px_rgba(0,0,0,0.22)]
              border-8 border-white cursor-pointer
              -ml-10 -mr-10
            "
          >
            <ArrowRight className="h-10 w-10 md:h-12 md:w-12 text-white" />
          </div>
        </div>

        <section
          className="
            relative flex flex-[0.95] items-center justify-center
            px-20 py-16
            overflow-hidden
            border-x border-white/40
          "
          style={{ background: softPaintBg }}
        >
          <div
            className="pointer-events-none absolute left-0 top-10 bottom-10 w-px"
            style={{
              background:
                "linear-gradient(to bottom, rgba(255,255,255,0.0), rgba(255,255,255,0.7), rgba(255,255,255,0.0))",
            }}
          />

          <CountdownTicker
            target={TARGET_DATE}
            variant="inline"
            theme={countdownInlineTheme}
          />
        </section>
      </div>
    </div>
  );
}
