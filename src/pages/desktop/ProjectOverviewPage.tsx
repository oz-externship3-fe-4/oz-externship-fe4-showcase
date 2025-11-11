import {
  useState,
  useRef,
  useEffect,
  useCallback,
  type WheelEvent,
} from "react";
import { motion } from "framer-motion";
import { softPaintBg } from "../../components/Layout/layoutConfig";

import { OverviewIntroSection } from "../../components/projectOverview/sections/OverviewIntroSection";
import { UserStudyManageSection } from "../../components/projectOverview/sections/UserStudyManageSection";
import { RecruitManageSection } from "../../components/projectOverview/sections/RecruitManageSection";
// import { DashboardSection } from "../../components/projectOverview/sections/DashboardSection";
import { UserStudyDetailSection } from "../../components/projectOverview/sections/UserStudyDetailSection";
import { UserMyPageSection } from "../../components/projectOverview/sections/UserMyPageSection";

const SECTIONS = [
  { id: "overview", label: "개요", Component: OverviewIntroSection },
  { id: "user-study", label: "사용자", Component: UserStudyManageSection },
  { id: "detail", label: "디테일", Component: UserStudyDetailSection },
  { id: "recruit", label: "모집", Component: RecruitManageSection },
  // { id: "dashboard", label: "대시보드", Component: DashboardSection },
  { id: "mypage", label: "마이페이지", Component: UserMyPageSection },
];

export default function ProjectOverviewPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const wheelLockRef = useRef(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const clampIndex = useCallback((next: number) => {
    if (next < 0) return 0;
    if (next >= SECTIONS.length) return SECTIONS.length - 1;
    return next;
  }, []);

  const goTo = (next: number) => {
    setActiveIndex((prev) =>
      clampIndex(typeof next === "number" ? next : prev)
    );
  };

  useEffect(() => {
    const measure = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setContainerWidth(rect.width);
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const handleWheel = (event: WheelEvent<HTMLDivElement>) => {
    if (wheelLockRef.current || containerWidth === 0) {
      event.preventDefault();
      return;
    }

    const { deltaY, deltaX } = event;
    const amount = Math.abs(deltaY) > Math.abs(deltaX) ? deltaY : deltaX;
    if (Math.abs(amount) < 16) return;

    event.preventDefault();

    setActiveIndex((prev) => clampIndex(prev + (amount > 0 ? 1 : -1)));

    wheelLockRef.current = true;
    setTimeout(() => {
      wheelLockRef.current = false;
    }, 520);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "PageDown") {
        setActiveIndex((prev) => clampIndex(prev + 1));
      }
      if (e.key === "ArrowLeft" || e.key === "PageUp") {
        setActiveIndex((prev) => clampIndex(prev - 1));
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [clampIndex]);

  return (
    <div
      ref={containerRef}
      className="
        relative
        h-full
        overflow-hidden
        px-10 pt-6 pb-8
      "
      style={{ background: softPaintBg }}
      onWheel={handleWheel}
    >
      <motion.div
        className="flex h-full"
        animate={{
          x: -activeIndex * (containerWidth || 0),
        }}
        transition={{ type: "spring", stiffness: 90, damping: 20 }}
      >
        {SECTIONS.map(({ id, Component }) => (
          <div
            key={id}
            className="h-full w-screen shrink-0"
            style={{
              width: containerWidth || "100%",
            }}
          >
            <Component />
          </div>
        ))}
      </motion.div>

      <div
        className="
          absolute right-6 top-1/2 -translate-y-1/2
          flex flex-col gap-2
        "
      >
        {SECTIONS.map(({ id, label }, idx) => {
          const isActive = idx === activeIndex;
          return (
            <button
              key={id}
              onClick={() => goTo(idx)}
              className={`
                w-10 h-12
                rounded-l-full
                flex flex-col items-center justify-center
                text-[10px]
                transition-all
                cursor-pointer
                ${
                  isActive
                    ? "bg-amber-400 text-white shadow-[0_10px_25px_rgba(253,224,71,0.5)]"
                    : "bg-white/80 text-slate-500 hover:bg-amber-50 hover:text-black"
                }
              `}
            >
              <span className="font-bold leading-none">
                {String(idx + 1).padStart(2, "0")}
              </span>
              <span className="text-[8px] leading-none mt-0.5">{label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
