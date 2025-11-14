import type { ReactNode } from "react";
import { useOutletContext } from "react-router";
import type { LayoutContext } from "../../../Layout/Layout";
import type { RetrospectiveLang } from "../../../../types/retrospective";
import { ProjectOverviewSectionLayout } from "../../ProjectOverviewSectionLayout";

const LABEL_BY_LANG: Record<RetrospectiveLang, string> = {
  ko: "기능 10",
  en: "Feature 10",
  jp: "機能 10",
};

const TITLE_BY_LANG: Record<RetrospectiveLang, string> = {
  ko: "스터디 그룹 관리 페이지",
  en: "Study Group Management Page",
  jp: "スタディグループ管理ページ",
};

const DESCRIPTION_BY_LANG: Record<RetrospectiveLang, ReactNode> = {
  ko: (
    <div className="space-y-2">
      <p>
        사용자가 생성하거나 참여 중인 모든{" "}
        <span className="font-extrabold">스터디 그룹 현황</span>을 한눈에 확인할
        수 있는 페이지입니다.
      </p>

      <p>
        <span className="font-semibold text-amber-600">
          스터디 그룹 리스트 조회
        </span>
        <br />
        스터디명, 상태, 리더, 인원수 등 핵심 정보를 테이블 형태로 확인할 수
        있도록 구성했습니다.
      </p>

      <p>
        <span className="font-semibold text-amber-600">
          검색 및 상태 필터링
        </span>
        <br />
        스터디 그룹명을 기준으로 검색할 수 있으며,
        <br className="hidden md:block" />
        진행 중 / 모집 중 / 종료 등{" "}
        <span className="font-semibold">상태별 필터링</span>도 지원합니다.
      </p>

      <p>
        각 스터디 그룹의 상세 정보는 모달로 확인할 수 있으며,{" "}
        <span className="font-semibold">
          운영자는 조회 기반으로 전체 스터디 운영 현황을 파악
        </span>
        할 수 있도록 설계했습니다.
      </p>

      <p className="text-[13px] text-slate-500">
        ※ API 정책 상 이 페이지는 조회 전용으로 동작하며, 스터디 그룹 데이터는
        수정하지 않습니다.
      </p>
    </div>
  ),

  en: (
    <div className="space-y-2">
      <p>
        A page where admins can see{" "}
        <span className="font-extrabold">all study groups</span> created or
        joined by users at a glance.
      </p>

      <p>
        <span className="font-semibold text-amber-600">
          Study group list overview
        </span>
        <br />
        Key information such as study name, status, leader, and headcount
        <br className="hidden md:block" />
        is displayed in a structured table.
      </p>

      <p>
        <span className="font-semibold text-amber-600">
          Search & status filtering
        </span>
        <br />
        Admins can search by study group name and filter by{" "}
        <span className="font-semibold">
          status (in progress, recruiting, closed, etc.)
        </span>
        .
      </p>

      <p>
        Detailed information for each group is available via a modal, allowing
        admins to{" "}
        <span className="font-semibold">
          monitor the overall study operation in a read-only manner
        </span>
        .
      </p>

      <p className="text-[13px] text-slate-500">
        ※ Due to API policy, this page works as read-only and does not modify
        study group data.
      </p>
    </div>
  ),

  jp: (
    <div className="space-y-2">
      <p>
        ユーザーが作成または参加している
        <span className="font-extrabold">全てのスタディグループ状況</span>
        を一目で確認できるページです。
      </p>

      <p>
        <span className="font-semibold text-amber-600">
          スタディグループ一覧の確認
        </span>
        <br />
        スタディ名、状態、リーダー、人数などの主要情報を
        <br className="hidden md:block" />
        テーブル形式で確認できるように構成しました。
      </p>

      <p>
        <span className="font-semibold text-amber-600">
          検索と状態フィルタリング
        </span>
        <br />
        グループ名で検索できるほか、
        <span className="font-semibold">進行中・募集中・終了</span>
        などの状態別フィルタリングにも対応しています。
      </p>

      <p>
        各スタディグループの詳細情報はモーダルで確認でき、
        <span className="font-semibold">
          管理者は閲覧ベースで全体のスタディ運営状況を把握
        </span>
        できるように設計しました。
      </p>

      <p className="text-[13px] text-slate-500">
        ※ APIポリシー上、このページは閲覧専用として動作し、スタディ
        グループデータは変更しません。
      </p>
    </div>
  ),
};

export function AdminStudyGroupManageSection() {
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
          w-[600px] h-[750px]
          rounded-xl bg-white
          border border-white/90 -ml-10
          shadow-[0_18px_35px_rgba(15,23,42,0.24)]
          overflow-hidden
        "
      >
        <img
          src="/images/pages/admin/study-group.png"
          alt={
            lang === "jp"
              ? "スタディグループ管理ページ画面"
              : lang === "en"
              ? "Study group management page screen"
              : "스터디 그룹 관리 페이지 화면"
          }
          className="w-full h-full object-contain"
        />
      </div>
    </ProjectOverviewSectionLayout>
  );
}
