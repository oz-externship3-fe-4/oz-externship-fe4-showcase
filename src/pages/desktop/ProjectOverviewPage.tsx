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
  OverviewIntroSection,
  UserStudyManageSection,
  RecruitManageSection,
  UserStudyDetailSection,
  UserMyPageSection,
  AdminLoginSection,
  AdminUserManagementSection,
  AdminUserWithdrawalSection,
  AdminDashboardSection,
  AdminLectureManageSection,
  AdminStudyGroupManageSection,
  AdminReviewManageSection,
  ApplicationManageSection,
  RecruitAdminManageSection,
} from "../../components/projectOverview/sections";
import { HorizontalScrollGuide } from "../../components/Layout/HorizontalScrollGuide.tsx";
import { useOutletContext } from "react-router";
import type { LayoutContext } from "../../components/Layout/Layout.tsx";

const SECTIONS = [
  { id: "overview", label: "개요", Component: OverviewIntroSection },
  { id: "user-study", label: "사용자", Component: UserStudyManageSection },
  { id: "detail", label: "디테일", Component: UserStudyDetailSection },
  { id: "recruit", label: "모집", Component: RecruitManageSection },
  { id: "mypage", label: "마이페이지", Component: UserMyPageSection },
  { id: "login", label: "로그인", Component: AdminLoginSection },
  { id: "user", label: "유저관리", Component: AdminUserManagementSection },
  {
    id: "withdrawal",
    label: "탈퇴관리",
    Component: AdminUserWithdrawalSection,
  },
  { id: "dashboard", label: "대시보드", Component: AdminDashboardSection },
  { id: "lecture", label: "강의관리", Component: AdminLectureManageSection },
  {
    id: "study",
    label: "스터디그룹",
    Component: AdminStudyGroupManageSection,
  },
  { id: "review", label: "리뷰", Component: AdminReviewManageSection },
  { id: "app", label: "지원관리", Component: ApplicationManageSection },
  {
    id: "recruitmanagement",
    label: "구인공고",
    Component: RecruitAdminManageSection,
  },
];

export default function ProjectOverviewPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const wheelLockRef = useRef(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { lang } = useOutletContext<LayoutContext>();

  const clampIndex = useCallback((next: number) => {
    if (next < 0) return 0;
    if (next >= SECTIONS.length) return SECTIONS.length - 1;
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
      <HorizontalScrollGuide pageLabel="PROJECT OVERVIEW" lang={lang} />
    </div>
  );
}
