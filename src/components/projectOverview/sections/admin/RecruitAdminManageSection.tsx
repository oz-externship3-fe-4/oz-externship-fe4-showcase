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
  en: "Recruitment Management Page",
  jp: "求人公告管理ページ",
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
        <span className="font-semibold">study recruitment posts</span> shown to
        users.
      </p>

      <p>
        Admins can check each post’s title, tech stack, deadline, view count,
        and more, <br />
        and use <span className="font-semibold">search and filter</span> options
        to quickly find specific postings.
      </p>

      <p>
        <span className="font-semibold">Inappropriate or outdated posts</span>{" "}
        that no longer meet the service policy can be deleted by admins,
        <br />
        helping maintain the{" "}
        <span className="font-semibold">
          overall quality and reliability
        </span>{" "}
        of the recruitment board.
      </p>
    </div>
  ),
  jp: (
    <div className="space-y-2">
      <p>
        ユーザーに表示される{" "}
        <span className="font-semibold">スタディ募集公告</span>
        を管理するページです。
      </p>

      <p>
        公告タイトル、技術スタック、締切日、閲覧数などを一目で確認でき、 <br />
        <span className="font-semibold">検索・フィルタリング機能</span>
        を使って、目的の公告を素早く探すことができます。
      </p>

      <p>
        サービス運営ポリシーに合わない不適切な公告や、
        すでに募集が終了しているのに残っている
        <span className="font-semibold">古い公告を管理者権限で削除</span>
        できるようにし、 <br />
        求人掲示板全体の
        <span className="font-semibold">品質と信頼性</span>
        を維持できるよう設計しました。
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
