import type { ReactNode } from "react";
import { useOutletContext } from "react-router";
import type { LayoutContext } from "../../../Layout/Layout";
import type { RetrospectiveLang } from "../../../../types/retrospective";
import { ProjectOverviewSectionLayout } from "../../ProjectOverviewSectionLayout";

const LABEL_BY_LANG: Record<RetrospectiveLang, string> = {
  ko: "기능 13",
  en: "Feature 13",
  jp: "機能 13",
};

const TITLE_BY_LANG: Record<RetrospectiveLang, string> = {
  ko: "구인 공고 관리 페이지",
  en: "Recruitment Post Management Page",
  jp: "求人広告管理ページ",
};

const DESCRIPTION_BY_LANG: Record<RetrospectiveLang, ReactNode> = {
  ko: (
    <div className="space-y-2">
      <p>
        사용자에게 노출되는{" "}
        <span className="font-semibold">스터디 모집 공고</span>를 관리하는
        페이지입니다.
      </p>

      <p>
        공고 제목, 기술 스택, 마감일, 조회수 등을 한눈에 확인할 수 있으며,
        <br />
        <span className="font-semibold">검색 · 필터링 기능</span>으로 원하는
        공고를 빠르게 찾아볼 수 있습니다.
      </p>

      <p>
        운영 정책에 맞지 않는 부적절한 공고나, 이미 모집이 종료되었지만
        <br /> 남아 있는{" "}
        <span className="font-semibold">
          오래된 공고를 관리자 권한으로 삭제
        </span>
        할 수 있도록 구현하여,
        <br />
        전체 구인 게시판의 <span className="font-semibold">품질과 신뢰도</span>
        를 유지할 수 있도록 했습니다.
      </p>
    </div>
  ),
  en: (
    <div className="space-y-2">
      <p>
        A page for managing{" "}
        <span className="font-semibold">study recruitment posts</span> visible
        to users.
      </p>

      <p>
        Admins can view{" "}
        <span className="font-semibold">
          post title, tech stack, deadline, and view count
        </span>
        , and use{" "}
        <span className="font-semibold">search and filter features</span> to
        quickly find posts.
      </p>

      <p>
        Outdated or inappropriate posts that violate policy can be{" "}
        <span className="font-semibold">
          cleaned up through admin privileges
        </span>
        , helping maintain the overall{" "}
        <span className="font-semibold">quality and credibility</span> of the
        recruitment board.
      </p>
    </div>
  ),
  jp: (
    <div className="space-y-2">
      <p>
        ユーザーに露出される
        <span className="font-semibold">スタディ募集公告</span>
        を管理するページです。
      </p>

      <p>
        公告のタイトル、技術スタック、締め切り日、再生回数などを確認でき、
        <span className="font-semibold">検索・フィルタリング機能</span>
        で希望する公告を素早く見つけることができます。
      </p>

      <p>
        運営方針に合わない不適切な公告や既に募集が終了したものの、残っている
        <span className="font-semibold">古い公告を管理者権限で整理</span>
        することで、
        <span className="font-semibold">全求人掲示板の品質と信頼性</span>
        を維持するように実装しました。
      </p>
    </div>
  ),
};

export function RecruitAdminManageSection() {
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
          w-[520px] h-[700px]
          rounded-xl
          bg-white
          border border-white/90
          shadow-[0_22px_30px_rgba(15,23,42,0.20)]
          overflow-hidden
        "
      >
        <img
          src="/images/pages/overview/admin-recruit.png"
          alt={
            lang === "jp"
              ? "求人公告管理ページ画面"
              : lang === "en"
              ? "Recruitment management page screen"
              : "구인 공고 관리 페이지 화면"
          }
          className="w-full h-full object-cover"
        />

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-linear-to-t from-white/85 to-transparent" />
      </div>
    </ProjectOverviewSectionLayout>
  );
}
