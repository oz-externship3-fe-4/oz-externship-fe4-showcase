import type { ReactNode } from "react";
import { useOutletContext } from "react-router";
import type { LayoutContext } from "../../../Layout/Layout";
import type { RetrospectiveLang } from "../../../../types/retrospective";
import { ProjectOverviewSectionLayout } from "../../ProjectOverviewSectionLayout";

const LABEL_BY_LANG: Record<RetrospectiveLang, string> = {
  ko: "기능 09",
  en: "Feature 09",
  jp: "機能 09",
};

const TITLE_BY_LANG: Record<RetrospectiveLang, string> = {
  ko: "강의 관리 페이지",
  en: "Lecture Management Page",
  jp: "講義管理ページ",
};

const DESCRIPTION_BY_LANG: Record<RetrospectiveLang, ReactNode> = {
  ko: (
    <div className="space-y-2">
      <p>
        스터디 운영에 필요한 강의 데이터를 조회하는{" "}
        <span className="font-extrabold">강의 관리 페이지</span>
        입니다.
      </p>

      <p>
        <span className="font-semibold text-amber-600">강의 정보 조회</span>
        <br />
        강의명, 강사명, 썸네일을 포함한 핵심 강의 정보를 한 화면에서 확인할 수
        있습니다.
      </p>

      <p>
        <span className="font-semibold text-amber-600">검색 및 필터링</span>
        <br />
        강의명 또는 키워드 기반 검색이 가능하며, 페이지네이션을 통해 많은 강의
        목록도 효율적으로 탐색할 수 있도록 구성했습니다.
      </p>

      <p>
        API 정책 상 조회 전용으로 동작하며, 운영자는 안전하게 강의 데이터를
        확인할 수 있습니다.
      </p>
    </div>
  ),

  en: (
    <div className="space-y-2">
      <p>
        A <span className="font-extrabold">Lecture Management Page</span> where
        admins can view lecture data linked to study groups.
      </p>

      <p>
        <span className="font-semibold text-amber-600">
          Lecture Information
        </span>
        <br />
        Admins can check key details such as lecture title, instructor, and
        thumbnail image.
      </p>

      <p>
        <span className="font-semibold text-amber-600">Search & Filtering</span>
        <br />
        Keyword and title-based search is supported, and pagination enables
        efficient navigation of large lecture lists.
      </p>

      <p>
        This page operates as <span className="font-semibold">read-only</span>{" "}
        based on API policy, ensuring safe access to lecture data.
      </p>
    </div>
  ),

  jp: (
    <div className="space-y-2">
      <p>
        スタディ運営に必要な講義データを閲覧できる
        <span className="font-extrabold">講義管理ページ</span>
        です。
      </p>

      <p>
        <span className="font-semibold text-amber-600">講義情報の確認</span>
        <br />
        講義名、講師名、サムネイルなどの主要情報を 一画面で確認できます。
      </p>

      <p>
        <span className="font-semibold text-amber-600">
          検索とフィルタリング
        </span>
        <br />
        講義名またはキーワード検索に対応しており、
        ページネーションで多くの講義データを効率的に探せます。
      </p>

      <p>
        APIポリシー上、このページは
        <span className="font-semibold">閲覧専用</span>
        として動作し、安全に講義データを確認できます。
      </p>
    </div>
  ),
};

export function AdminLectureManageSection() {
  const { lang } = useOutletContext<LayoutContext>();

  return (
    <ProjectOverviewSectionLayout
      label={LABEL_BY_LANG[lang]}
      title={TITLE_BY_LANG[lang]}
      imagePosition="right"
      description={DESCRIPTION_BY_LANG[lang]}
    >
      <div
        className="
          relative
          w-[600px] h-[750px]
          rounded-xl bg-white
          border border-white/90
          shadow-[0_18px_35px_rgba(15,23,42,0.25)]
          overflow-hidden
        "
      >
        <img
          src="/images/pages/admin/lecture.png"
          alt={
            lang === "jp"
              ? "講義管理ページ画面"
              : lang === "en"
              ? "Lecture management page screen"
              : "강의 관리 페이지 화면"
          }
          className="w-full h-full object-contain"
        />
      </div>
    </ProjectOverviewSectionLayout>
  );
}
