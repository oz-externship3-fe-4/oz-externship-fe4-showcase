import type { ReactNode } from "react";
import { useOutletContext } from "react-router";
import type { LayoutContext } from "../../Layout/Layout";
import type { RetrospectiveLang } from "../../../types/retrospective";
import { ProjectOverviewSectionLayout } from "../ProjectOverviewSectionLayout";

const LABEL_BY_LANG: Record<RetrospectiveLang, string> = {
  ko: "기능 01",
  en: "Feature 01",
  jp: "機能 01",
};

const TITLE_BY_LANG: Record<RetrospectiveLang, string> = {
  ko: "사용자 · 스터디 그룹 관리 페이지",
  en: "User · Study Group Management Page",
  jp: "ユーザー·スタディグループ管理ページ",
};

const DESC_BY_LANG: Record<RetrospectiveLang, ReactNode> = {
  ko: (
    <div className="space-y-2">
      <p className="text-lg">
        사용자가 참여할 수 있는 모든 스터디 그룹을 한눈에
        <br /> 볼 수 있는
        <span className="font-semibold"> 메인 화면</span>입니다.
      </p>
      <p>
        진행 중 스터디와 완료된 스터디로 구분되어 있으며, <br />각 카드에는{" "}
        <span className="font-semibold">스터디명, 기간, 인원, 목표</span>
        등이 표시됩니다.
      </p>
      <p>
        상단 검색창을 통해 스터디 이름이나 주제를 빠르게 검색할 수 있으며,
        <br />
        <span className="font-semibold"> ‘+ 새 스터디 만들기’ 버튼</span>
        으로 사용자는 직접 스터디를 개설할 수 있습니다.
      </p>
    </div>
  ),
  en: (
    <div className="space-y-2">
      <p className="text-lg">
        This is the <span className="font-semibold">main screen</span> where
        users can
        <br />
        see all study groups they can join at a glance.
      </p>
      <p>
        Studies are separated into ongoing and completed,
        <br />
        and each card shows{" "}
        <span className="font-semibold">
          study title, period, members, and goals
        </span>
        .
      </p>
      <p>
        Users can quickly search by study name or topic using the top search
        bar,
        <br />
        and create their own study with the{" "}
        <span className="font-semibold">“+ Create new study”</span> button.
      </p>
    </div>
  ),
  jp: (
    <div className="space-y-2">
      <p className="text-lg">
        ユーザーが参加できるすべての勉強会を一目で
        <br />
        見られる<span className="font-semibold">メイン画面</span>です。
      </p>
      <p>
        進行中のスタディと完了したスタディに区分されており、
        <br />
        各カードには
        <span className="font-semibold">スタディ名、期間、人数、目標</span>
        などが表示されます。
      </p>
      <p>
        上段の検索窓からスタディ名やテーマを素早く検索でき、
        <br />
        <span className="font-semibold">
          「+ 新しいスタディを作成する」ボタン
        </span>
        で、ユーザーは自分でスタディを開設できます。
      </p>
    </div>
  ),
};

export function UserStudyManageSection() {
  const { lang } = useOutletContext<LayoutContext>();

  return (
    <ProjectOverviewSectionLayout
      label={LABEL_BY_LANG[lang]}
      title={TITLE_BY_LANG[lang]}
      description={DESC_BY_LANG[lang]}
    >
      <div
        className="
          relative
          w-[520px] h-[720px]
          rounded-xl
          bg-white
          border border-white/90 mr-10
          shadow-[0_22px_30px_rgba(15,23,42,0.20)]
          overflow-hidden
        "
      >
        <img
          src="/images/pages/overview/user-study.png"
          alt="사용자 스터디 그룹 메인 페이지 화면"
          className="w-full h-full object-cover"
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-linear-to-t from-white/85 to-transparent" />
      </div>
    </ProjectOverviewSectionLayout>
  );
}
