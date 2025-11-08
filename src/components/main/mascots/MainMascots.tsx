import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

import MascotLarge from "./cha1-all-12.svg?react";
import MascotTiny from "./cha1-2-all.svg?react";

export default function MainMascots() {
  const largeSvgRef = useRef<SVGSVGElement>(null);
  const tinySvgRef = useRef<SVGSVGElement>(null);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const svgElement = largeSvgRef.current;
      if (!svgElement) return;
      let pupilElements: Array<SVGCircleElement | SVGEllipseElement> =
        Array.from(
          svgElement.querySelectorAll<SVGCircleElement | SVGEllipseElement>(
            "#pupil-left, #pupil-right"
          )
        );
      if (pupilElements.length === 0) {
        const headGroup = svgElement.querySelector<SVGGElement>("#head");
        if (headGroup) {
          const candidates = Array.from(
            headGroup.querySelectorAll<SVGCircleElement | SVGEllipseElement>(
              "circle, ellipse"
            )
          );
          const isWhiteLike = (fill: string) => {
            const f = (fill || "").toLowerCase().replace(/\s+/g, "");
            return (
              f === "#fff" ||
              f === "#ffffff" ||
              f.startsWith("rgb(255,255,255)") ||
              f.startsWith("rgba(255,255,255")
            );
          };
          pupilElements = candidates.filter((el) => {
            const attrFill = el.getAttribute("fill") || "";
            const styleFill =
              getComputedStyle(el as unknown as Element).fill || "";
            const fill = attrFill || styleFill || "";
            return fill && !isWhiteLike(fill);
          });
        }
      }
      if (pupilElements.length > 0) {
        const blinkDelay = 1.2 + Math.random() * 1.2;
        gsap.to(pupilElements, {
          keyframes: [
            { scaleY: 0.12, duration: 0.08, ease: "power2.in" },
            { scaleY: 0.12, duration: 0.03 },
            { scaleY: 1.0, duration: 0.12, ease: "power2.out" },
          ],
          repeat: -1,
          repeatDelay: blinkDelay,
          transformOrigin: "50% 50%",
        });
      }

      const leftArmGroup =
        svgElement.querySelector<SVGGElement>("#arm-left") ||
        svgElement.querySelector<SVGGElement>('[data-name="arm-left"]');

      if (leftArmGroup) {
        const box = leftArmGroup.getBBox();
        const pivotX = box.x + box.width * 0.88;
        const pivotY = box.y + box.height * 0.42;

        gsap.set(leftArmGroup, {
          svgOrigin: `${pivotX} ${pivotY}`,
          rotate: -4,
        });

        gsap.to(leftArmGroup, {
          rotate: 8,
          duration: 0.25,
          yoyo: true,
          yoyoEase: "sine.inOut",
          repeat: -1,
          ease: "sine.inOut",
        });
      }
    }, largeSvgRef);

    return () => context.revert();
  }, []);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const svgElement = tinySvgRef.current;
      if (!svgElement) return;

      gsap.set(svgElement, {
        y: 0,
        transformOrigin: "50% 50%",
        transformPerspective: 600,
        force3D: true,
      });

      gsap.to(svgElement, {
        y: 10,
        duration: 0.55,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });

      const flipLoop = () => {
        const wait = 2 + Math.random() * 3;
        gsap.delayedCall(wait, () => {
          gsap.to(svgElement, {
            rotateY: 180,
            duration: 0.6,
            ease: "power2.inOut",
            yoyo: true,
            repeat: 1,
            onComplete: flipLoop,
          });
        });
      };

      flipLoop();
    }, tinySvgRef);

    return () => context.revert();
  }, []);

  return (
    <div className="relative w-full h-full overflow-visible">
      <MascotTiny
        ref={tinySvgRef}
        className="absolute top-6 left-6 w-[50px] h-auto select-none pointer-events-none z-20"
      />
      <MascotLarge
        ref={largeSvgRef}
        className="w-[454px] h-[368px] select-none mt-20 ml-20 overflow-visible"
      />
    </div>
  );
}
