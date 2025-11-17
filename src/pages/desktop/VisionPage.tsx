import {
  useState,
  useRef,
  useEffect,
  useCallback,
  type WheelEvent,
} from "react";
import { motion } from "framer-motion";
import { softPaintBg } from "../../components/Layout/layoutConfig";
import {
  VisionGrowthSection,
  FutureVisionSection,
  VisionRoadmapSection,
} from "../../components/vision";
import { HorizontalScrollGuide } from "../../components/Layout/HorizontalScrollGuide.tsx";
import { useOutletContext } from "react-router";
import type { LayoutContext } from "../../components/Layout/Layout.tsx";

const VISION_SECTIONS = [
  { id: "growth", label: "성장", Component: VisionGrowthSection },
  { id: "roadmap", label: "로드맵", Component: VisionRoadmapSection },
  { id: "future", label: "비전", Component: FutureVisionSection },
];

export default function VisionPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const wheelLockRef = useRef(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { lang } = useOutletContext<LayoutContext>();

  const clampIndex = useCallback((next: number) => {
    if (next < 0) return 0;
    if (next >= VISION_SECTIONS.length) return VISION_SECTIONS.length - 1;
    return next;
  }, []);

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
      className="relative h-full overflow-hidden pt-6 pb-10"
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
        {VISION_SECTIONS.map(({ id, Component }) => (
          <div
            key={id}
            className="h-full w-screen shrink-0"
            style={{ width: containerWidth || "100%" }}
          >
            <Component />
          </div>
        ))}
      </motion.div>
      <HorizontalScrollGuide pageLabel="VISION" lang={lang} />
    </div>
  );
}
