import MascotsWithTiny from "../main/mascots/MainMascots";

const fallbackPaintBg = `
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

export function RouteFallback() {
  return (
    <div
      className="relative flex items-center justify-center min-h-screen w-full overflow-hidden"
      style={{ background: fallbackPaintBg }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 blur-3xl opacity-60"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(255,214,150,0.25), transparent 70%)",
        }}
      />

      <div className="relative flex flex-col items-center select-none">
        <MascotsWithTiny />

        <div className="mt-6 text-sm tracking-wide text-slate-700">
          잠시만 기다려주세요…
        </div>
      </div>
    </div>
  );
}
