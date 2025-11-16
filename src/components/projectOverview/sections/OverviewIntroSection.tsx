import type { ReactNode } from "react";
import { useOutletContext } from "react-router";
import type { LayoutContext } from "../../Layout/Layout";
import type { RetrospectiveLang } from "../../../types/retrospective";
import { ProjectOverviewSectionLayout } from "../ProjectOverviewSectionLayout";

const LABEL_BY_LANG: Record<RetrospectiveLang, string> = {
  ko: "PROJECT OVERVIEW",
  en: "PROJECT OVERVIEW",
  jp: "PROJECT OVERVIEW",
};

const TITLE_BY_LANG: Record<RetrospectiveLang, string> = {
  ko: "StudyHub Admin 스터디 관리 플랫폼",
  en: "StudyHub Admin Study Management Platform",
  jp: "StudyHub Adminスタディ管理プラットフォーム",
};

const DESCRIPTION_BY_LANG: Record<RetrospectiveLang, ReactNode> = {
  ko: (
    <div className="space-y-1">
      <p className="text-[22px] font-extrabold text-center md:text-left leading-snug">
        <span className="text-[#F4B000]">StudyHub</span>
        <span className="text-slate-800">는</span>
      </p>

      <p className="text-[22px] font-extrabold text-slate-800 text-center md:text-left leading-snug">
        개발자, 디자이너, 데이터 분석가 등 다양한 분야의 학습자들이
      </p>
      <p className="text-[22px] font-extrabold text-slate-800 text-center md:text-left leading-snug">
        함께 성장할 수 있도록 돕는{" "}
        <span className="text-slate-900">스터디 관리 플랫폼</span>
        입니다.
      </p>

      <p className="pt-3 text-[16px] leading-relaxed text-slate-700 text-center md:text-left">
        본 프로젝트에서 저희 팀은 실제 운영 환경을 가정하여{" "}
        <span className="font-semibold text-slate-900">Admin 관리 기능</span>을
        모두 구현했습니다.
      </p>
    </div>
  ),
  en: (
    <div className="space-y-1">
      <p className="text-[22px] font-extrabold text-center md:text-left leading-snug">
        <span className="text-[#F4B000]">StudyHub</span>
        <span className="text-slate-800"> is</span>
      </p>

      <p className="text-[22px] font-extrabold text-slate-800 text-center md:text-left leading-snug">
        a study management platform where developers, designers,
        <br className="hidden md:block" />
        and data analysts can grow together.
      </p>

      <p className="pt-3 text-[16px] leading-relaxed text-slate-700 text-center md:text-left">
        In this project, our team implemented{" "}
        <span className="font-semibold text-slate-900">
          the full Admin management features
        </span>{" "}
        assuming a real operating environment.
      </p>
    </div>
  ),
  jp: (
    <div className="space-y-1">
      <p className="text-[22px] font-extrabold text-center md:text-left leading-snug">
        <span className="text-[#F4B000]">StudyHub</span>
        <span className="text-slate-800">は</span>
      </p>

      <p className="text-[22px] font-extrabold text-slate-800 text-center md:text-left leading-snug">
        開発者、デザイナー、データアナリストなど様々な分野の学習者が
      </p>
      <p className="text-[22px] font-extrabold text-slate-800 text-center md:text-left leading-snug">
        一緒に成長できるようにサポートする
        <span className="text-slate-900">スタディ管理プラットフォーム</span>
        です。
      </p>

      <p className="pt-3 text-[16px] leading-relaxed text-slate-700 text-center md:text-left">
        本プロジェクトで、私たちのチームは実際の運営環境を仮定して{" "}
        <span className="font-semibold text-slate-900">Admin管理機能</span>
        をすべて実装しました。
      </p>
    </div>
  ),
};

export function OverviewIntroSection() {
  const { lang } = useOutletContext<LayoutContext>();

  return (
    <div className="relative">
      <ProjectOverviewSectionLayout
        label={LABEL_BY_LANG[lang]}
        title={TITLE_BY_LANG[lang]}
        hideImageArea
        description={DESCRIPTION_BY_LANG[lang]}
      />

      <div
        className="
          pointer-events-none select-none
          hidden lg:block
          absolute
          right-12
          opacity-80
        "
      >
        <img
          src="/images/pages/overview/overview.png"
          alt=""
          className="w-[700px] h-auto object-contain"
        />
      </div>
    </div>
  );
}
