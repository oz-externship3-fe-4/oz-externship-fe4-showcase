import type { ReactNode } from "react";
import { useOutletContext } from "react-router";
import type { LayoutContext } from "../../Layout/Layout";
import type { RetrospectiveLang } from "../../../types/retrospective";
import { ProjectOverviewSectionLayout } from "../ProjectOverviewSectionLayout";

const LABEL_BY_LANG: Record<RetrospectiveLang, string> = {
  ko: "기능 03",
  en: "Feature 03",
  jp: "機能 03",
};

const TITLE_BY_LANG: Record<RetrospectiveLang, string> = {
  ko: "사용자 스터디 구인 공고 페이지",
  en: "User Study Recruitment Board",
  jp: "ユーザースタディ求人公告ページ",
};

const DESCRIPTION_BY_LANG: Record<RetrospectiveLang, ReactNode> = {
  ko: (
    <div className="space-y-2">
      <p>
        새로운 스터디 멤버를 찾거나,
        <br />
        관심 있는 스터디에 참여할 수 있는{" "}
        <span className="font-semibold">구인 게시판</span>
        입니다.
      </p>

      <p>
        <span className="font-semibold text-amber-600">스터디 맞춤 기능</span>
        <br />
        사용자는 자신의 관심 분야를 설정해{" "}
        <span className="font-semibold">맞춤형 스터디 추천</span>을 받을 수
        있습니다.
      </p>

      <p>
        <span className="font-semibold text-amber-600">
          스터디 구인 공고 기능
        </span>
        <br />
        태그 및 정렬 필터를 통해 원하는 공고를 빠르게 찾을 수 있으며, 각
        공고에는{" "}
        <span className="font-semibold">
          모집 분야, 기술 스택, 모집 마감일, 조회수·댓글 수
        </span>
        가 표시됩니다.
      </p>
    </div>
  ),
  en: (
    <div className="space-y-2">
      <p>
        A{" "}
        <span className="font-semibold">
          recruitment board for study groups
        </span>{" "}
        where users can
        <br />
        find new members or join a study they are interested in.
      </p>

      <p>
        <span className="font-semibold text-amber-600">
          Personalized study matching
        </span>
        <br />
        Users can set their interests and receive{" "}
        <span className="font-semibold">tailored study recommendations</span>.
      </p>

      <p>
        <span className="font-semibold text-amber-600">
          Study recruitment features
        </span>
        <br />
        With tag and sort filters, users can quickly find the posts they want.
        <br />
        Each post shows{" "}
        <span className="font-semibold">
          position, tech stack, deadline, views, and comments
        </span>
        .
      </p>
    </div>
  ),
  jp: (
    <div className="space-y-2">
      <p>
        新しいスタディーのメンバーを探したり、
        <br />
        興味のあるスタディに参加できる{" "}
        <span className="font-semibold">求人掲示板</span>
        です。
      </p>

      <p>
        <span className="font-semibold text-amber-600">
          スタディーカスタム機能
        </span>
        <br />
        ユーザーは自分の関心分野を設定し、
        <span className="font-semibold">カスタマイズ型スタディ</span>
        の推薦を受けることができます。
      </p>

      <p>
        <span className="font-semibold text-amber-600">
          スタディ求人広告機能
        </span>
        <br />
        タグおよびソートフィルターを使用して希望する公告をすばやく見つけることができ、各公告には{" "}
        <span className="font-semibold">
          募集分野、技術スタック、募集締切日、閲覧数・コメント数
        </span>
        が表示されます。
      </p>
    </div>
  ),
};

export function RecruitManageSection() {
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
          src="/images/pages/overview/recruit.png"
          alt={
            lang === "jp"
              ? "ユーザースタディ求人公告ページ画面"
              : lang === "en"
              ? "User study recruitment board screen"
              : "사용자 스터디 구인 공고 페이지 화면"
          }
          className="w-full h-full object-cover"
        />

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-linear-to-t from-white/85 to-transparent" />
      </div>
    </ProjectOverviewSectionLayout>
  );
}
