import type { ReactNode } from "react";
import { useOutletContext } from "react-router";
import type { LayoutContext } from "../../../Layout/Layout";
import type { RetrospectiveLang } from "../../../../types/retrospective";
import { ProjectOverviewSectionLayout } from "../../ProjectOverviewSectionLayout";

const LABEL_BY_LANG: Record<RetrospectiveLang, string> = {
  ko: "기능 12",
  en: "Feature 12",
  jp: "機能 12",
};

const TITLE_BY_LANG: Record<RetrospectiveLang, string> = {
  ko: "지원 내역 관리 페이지",
  en: "Application Management Page",
  jp: "応募履歴管理ページ",
};

const DESCRIPTION_BY_LANG: Record<RetrospectiveLang, ReactNode> = {
  ko: (
    <div className="space-y-2">
      <p>
        스터디 구인 공고에 대해 사용자가 제출한{" "}
        <span className="font-semibold">지원 정보를 조회</span>
        <br />할 수 있는 페이지입니다.
      </p>

      <p>
        지원자 정보뿐만 아니라 지원한 공고 정보, 지원 상태, <br />
        작성된 자기소개 및 지원 동기까지{" "}
        <span className="font-semibold">상세 모달을 통해 한 화면에서</span>{" "}
        <br />
        확인할 수 있습니다.
      </p>

      <p>
        이 페이지는 <span className="font-semibold">조회 전용</span>으로
        설계되었으며, 운영자가 사용자가 제출한 지원 데이터를 안정적으로 관리할
        수 있도록 구현하였습니다.
      </p>
    </div>
  ),
  en: (
    <div className="space-y-2">
      <p>
        A page where administrators can{" "}
        <span className="font-semibold">view application information</span>{" "}
        submitted by users for study recruitment posts.
      </p>

      <p>
        Not only applicant details but also the recruitment post information,
        application status, and the written{" "}
        <span className="font-semibold">self-introduction and motivation</span>{" "}
        can all be viewed in a detailed modal.
      </p>

      <p>
        This page is designed as{" "}
        <span className="font-semibold">view-only</span>, allowing
        administrators to safely and reliably manage user-submitted application
        data.
      </p>
    </div>
  ),
  jp: (
    <div className="space-y-2">
      <p>
        ユーザーがスタディ募集公告に提出した{" "}
        <span className="font-semibold">応募情報を確認</span>できるページです。
      </p>

      <p>
        応募者の情報だけでなく、応募した公告の詳細、応募ステータス、 記入された{" "}
        <span className="font-semibold">自己紹介・志望動機</span>
        まで、すべて詳細モーダルで一画面に表示できます。
      </p>

      <p>
        このページは <span className="font-semibold">閲覧専用</span>{" "}
        として設計されており、
        運営者が提出された応募データを安全に管理できるように実装しています。
      </p>
    </div>
  ),
};

export function ApplicationManageSection() {
  const { lang } = useOutletContext<LayoutContext>();

  return (
    <ProjectOverviewSectionLayout
      label={LABEL_BY_LANG[lang]}
      title={TITLE_BY_LANG[lang]}
      imagePosition="left"
      description={DESCRIPTION_BY_LANG[lang]}
    >
      <div
        className="
          relative
          w-[560px] h-[720px]
          rounded-xl bg-white
          border border-white/90
          shadow-[0_22px_30px_rgba(15,23,42,0.20)]
          overflow-hidden
        "
      >
        <img
          src="/images/pages/overview/application.png"
          alt={
            lang === "jp"
              ? "応募履歴管理ページ画面"
              : lang === "en"
              ? "Application management page screen"
              : "지원 내역 관리 페이지 화면"
          }
          className="w-full h-full object-cover"
        />
      </div>
    </ProjectOverviewSectionLayout>
  );
}
