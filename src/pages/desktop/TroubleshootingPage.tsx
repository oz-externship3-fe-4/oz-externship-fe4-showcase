import { useState, useEffect, useRef } from "react";
import { TROUBLES } from "../../components/troubleshooting/troubleshooting";
import { TroubleCard } from "../../components/troubleshooting/TroubleCard";
import { TroubleModal } from "../../components/troubleshooting/TroubleModal";
import type { TroubleItem } from "../../types/troubleshooting";
import type { TS_Lang } from "../../types/troubleshooting";
import type { LayoutContext } from "../../components/Layout/Layout";
import { useOutletContext } from "react-router";
import Lenis from "@studio-freight/lenis";

export default function TroubleshootingPage() {
  const { lang } = useOutletContext<LayoutContext>();
  const [selected, setSelected] = useState<TroubleItem | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  // Lenis사용하여 스크롤 부드럽게 적용하기.
  useEffect(() => {
    if (!scrollRef.current) return;

    const lenis = new Lenis({
      wrapper: scrollRef.current,
      content: scrollRef.current,
      smoothWheel: true,
      wheelMultiplier: 0.8,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <div className="h-full px-10 pb-10 flex flex-col overflow-hidden">
      <div
        ref={scrollRef}
        className="flex-1 min-h-0 overflow-y-auto scrollbar-hide"
      >
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {TROUBLES.map((t) => (
            <TroubleCard
              key={t.id}
              item={t}
              lang={lang as TS_Lang}
              onClick={() => setSelected(t)}
            />
          ))}
        </section>
      </div>

      <TroubleModal
        open={!!selected}
        item={selected}
        lang={lang as TS_Lang}
        onClose={() => setSelected(null)}
      />
    </div>
  );
}
