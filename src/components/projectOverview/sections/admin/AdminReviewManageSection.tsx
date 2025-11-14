import type { ReactNode } from "react";
import { useOutletContext } from "react-router";
import type { LayoutContext } from "../../../Layout/Layout";
import type { RetrospectiveLang } from "../../../../types/retrospective";
import { ProjectOverviewSectionLayout } from "../../ProjectOverviewSectionLayout";

const LABEL_BY_LANG: Record<RetrospectiveLang, string> = {
  ko: "기능 11",
  en: "Feature 11",
  jp: "機能 11",
};

const TITLE_BY_LANG: Record<RetrospectiveLang, string> = {
  ko: "리뷰 관리 페이지",
  en: "Review Management Page",
  jp: "レビュー管理ページ",
};

const DESCRIPTION_BY_LANG: Record<RetrospectiveLang, ReactNode> = {
  ko: (
    <div className="space-y-2">
      <p>
        사용자들이 남긴{" "}
        <span className="font-extrabold">스터디 리뷰를 조회</span>할 수 있는
        페이지입니다.
      </p>

      <p>
        리뷰 내용, 평점, 작성자, 작성일 등{" "}
        <span className="font-semibold">핵심 정보를 한눈에 확인</span>
        <br />할 수 있도록 구성했습니다.
      </p>

      <p>
        <span className="font-semibold text-amber-600">
          키워드 기반 검색 기능
        </span>
        <br />
        리뷰 내용을 기준으로 검색이 가능하며,
        <br className="hidden md:block" />
        특정 스터디나 특정 작성자 리뷰만 모아서 볼 수 있습니다.
      </p>

      <p className="text-[13px] text-slate-500">
        ※ API 정책 상 리뷰 수정/삭제 기능은 제공되지 않으며,
        <br />
        운영자는 리뷰를 조회하고 모니터링하는 용도로 활용합니다.
      </p>
    </div>
  ),

  en: (
    <div className="space-y-2">
      <p>An admin space for managing user-submitted study reviews.</p>

      <p>
        Admins can view key information such as{" "}
        <span className="font-semibold">
          review content, rating, author, and creation date
        </span>
        , and utilize{" "}
        <span className="font-semibold">keyword-based search</span> to find
        specific reviews efficiently.
      </p>

      <p className="text-[13px] text-slate-500">
        Editing or deleting reviews is not supported due to API policy; admins
        can monitor reviews in a{" "}
        <span className="font-semibold">read-only</span> capacity.
      </p>
    </div>
  ),

  jp: (
    <div className="space-y-2">
      <p>ユーザーが残したスタディレビューを管理できる空間です。</p>

      <p>
        <span className="font-semibold">
          レビュー内容や評点、作成者、作成日
        </span>
        を照会することができ、
        <span className="font-semibold">キーワードベースの検索機能</span>
        も提供しています。
      </p>

      <p className="text-[13px] text-slate-500">
        レビューの修正・削除はAPIポリシー上提供されておらず、
        運営者は照会ベースでモニタリングできます。
      </p>
    </div>
  ),
};

export function AdminReviewManageSection() {
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
          w-[580px] h-[720px]
          rounded-xl
          bg-white
          border border-white/90
          shadow-[0_20px_35px_rgba(15,23,42,0.22)]
          overflow-hidden
        "
      >
        <img
          src="/images/pages/admin/review.png"
          alt={
            lang === "jp"
              ? "スタディレビュー管理ページ画面"
              : lang === "en"
              ? "Study review management page screen"
              : "리뷰 관리 페이지 화면"
          }
          className="w-full h-full object-cover"
        />
      </div>
    </ProjectOverviewSectionLayout>
  );
}
