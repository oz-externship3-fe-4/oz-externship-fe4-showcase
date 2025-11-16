import { useLayoutEffect } from "react";
import gsap from "gsap";

export function useTeamCardsFocus(
  cardWrappers: (HTMLDivElement | null)[],
  activeIndex: number
) {
  useLayoutEffect(() => {
    const elements = cardWrappers.filter(
      (node): node is HTMLDivElement => node !== null
    );
    if (!elements.length) return;

    const ctx = gsap.context(() => {
      const STEP_X = 230;
      const total = elements.length;
      const visibleCount = 5;

      elements.forEach((element, index) => {
        let offset = (index - activeIndex + total) % total;
        if (offset > visibleCount / 2) offset -= total;
        if (Math.abs(offset) > visibleCount / 2) {
          gsap.set(element, { opacity: 0, pointerEvents: "none" });
          return;
        }
        const depth = Math.abs(offset);
        const x = offset * STEP_X;
        let y = 0;
        let scale = 1;

        if (depth === 0) {
          y = -28;
          scale = 1.14;
        } else if (depth === 1) {
          y = -8;
          scale = 1.02;
        } else {
          y = 6;
          scale = 0.94;
        }

        const zIndex = 40 - depth;

        gsap.to(element, {
          opacity: 1,
          x,
          xPercent: -50,
          y,
          scale,
          zIndex,
          duration: 0.55,
          ease: "power3.out",
          overwrite: "auto",
          force3D: true,
          transformOrigin: "center bottom",
          pointerEvents: "auto",
        });
      });
    }, elements);

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex]);
}
