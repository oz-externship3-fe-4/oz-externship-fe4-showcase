import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import type { Skill } from "./techStackConfig";

interface SkillIconCardProps {
  skill: Skill;
  index: number;
}

export function SkillIconCard({ skill, index }: SkillIconCardProps) {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const iconCardElementRef = useRef<HTMLDivElement | null>(null);
  const reflectionImageElementRef = useRef<HTMLImageElement | null>(null);

  useLayoutEffect(() => {
    const iconElement = iconCardElementRef.current;
    const reflectionElement = reflectionImageElementRef.current;

    if (!iconElement) return;

    const delay = 0.08 + index * 0.035;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        iconElement,
        {
          y: 18,
          opacity: 0,
          scale: 0.86,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.55,
          delay,
          ease: "power3.out",
          clearProps: "transform,opacity",
        }
      );

      if (reflectionElement) {
        gsap.fromTo(
          reflectionElement,
          {
            opacity: 0,
            filter: "blur(4px)",
          },
          {
            opacity: 0.8,
            filter: "blur(1px)",
            duration: 0.5,
            delay: delay + 0.03,
            ease: "power2.out",
            clearProps: "opacity,filter",
          }
        );
      }
    });

    return () => ctx.revert();
  }, [index]);
  const handleMouseEnter = () => {
    if (iconCardElementRef.current) {
      gsap.to(iconCardElementRef.current, {
        y: -4,
        scale: 1.08,
        boxShadow: "0 18px 40px rgba(15,23,42,0.18)",
        duration: 0.25,
        ease: "power2.out",
      });
    }

    if (reflectionImageElementRef.current) {
      gsap.to(reflectionImageElementRef.current, {
        opacity: 0.9,
        filter: "blur(3px)",
        duration: 0.25,
        ease: "power2.out",
      });
    }
  };

  const handleMouseLeave = () => {
    if (iconCardElementRef.current) {
      gsap.to(iconCardElementRef.current, {
        y: 0,
        scale: 1,
        boxShadow: "0 10px 26px rgba(15,23,42,0.12)",
        duration: 0.25,
        ease: "power2.out",
      });
    }

    if (reflectionImageElementRef.current) {
      gsap.to(reflectionImageElementRef.current, {
        opacity: 0.8,
        filter: "blur(1px)",
        duration: 0.25,
        ease: "power2.out",
      });
    }
  };

  return (
    <div
      ref={wrapperRef}
      className="flex flex-col items-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={iconCardElementRef}
        className="
          relative flex h-19 w-19 items-center justify-center
          rounded-3xl bg-white
          border border-white/80
          shadow-[0_10px_26px_rgba(15,23,42,0.12)]
          transition-colors duration-300
        "
      >
        <img
          src={skill.src}
          alt={skill.name}
          className="h-17 w-17 object-contain"
          loading="lazy"
        />
      </div>

      <div className="mt-2 h-16 w-16 overflow-hidden">
        <img
          ref={reflectionImageElementRef}
          src={skill.src}
          alt=""
          aria-hidden="true"
          className="
            mx-auto h-16 w-16 object-contain
            opacity-80
            scale-y-[-1]
          "
          style={{
            WebkitMaskImage:
              "linear-gradient(to bottom, rgba(0,0,0,0.4), transparent)",
            maskImage:
              "linear-gradient(to bottom, rgba(0,0,0,0.4), transparent)",
            filter: "blur(1px)",
          }}
        />
      </div>
    </div>
  );
}
