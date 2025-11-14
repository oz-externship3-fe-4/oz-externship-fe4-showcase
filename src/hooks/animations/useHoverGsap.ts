import { useLayoutEffect, type RefObject } from "react";
import gsap from "gsap";

export function useHoverGsap<
  THover extends HTMLElement = HTMLElement,
  TTarget extends HTMLElement = HTMLElement
>(
  hoverAreaRef: RefObject<THover | null>,
  animatedTargetRef: RefObject<TTarget | null>,
  options?: {
    scale?: number;
    translateY?: number;
    rotate?: number;
    iconTranslateX?: number;
    shadowStart?: string;
    shadowEnd?: string;
    duration?: number;
  }
) {
  useLayoutEffect(() => {
    const hoverArea = hoverAreaRef.current;
    const animatedTarget = animatedTargetRef.current;

    if (!hoverArea || !animatedTarget) return;

    const iconElement = animatedTarget.querySelector("svg");

    const {
      scale = 1.12,
      translateY = -4,
      rotate = 8,
      iconTranslateX = 4,
      duration = 0.25,
    } = options || {};

    gsap.set(animatedTarget, {
      scale: 1,
      y: 0,
    });

    if (iconElement) {
      gsap.set(iconElement, { rotate: 0, x: 0 });
    }

    const hoverTimeline = gsap.timeline({ paused: true });

    hoverTimeline.to(animatedTarget, {
      scale,
      y: translateY,
      duration,
      ease: "power3.out",
    });

    if (iconElement) {
      hoverTimeline.to(
        iconElement,
        {
          x: iconTranslateX,
          rotate,
          duration,
          ease: "power3.out",
        },
        "<"
      );
    }

    const handleMouseEnter = () => hoverTimeline.play();
    const handleMouseLeave = () => hoverTimeline.reverse();

    hoverArea.addEventListener("mouseenter", handleMouseEnter);
    hoverArea.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      hoverArea.removeEventListener("mouseenter", handleMouseEnter);
      hoverArea.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [hoverAreaRef, animatedTargetRef, options]);
}
