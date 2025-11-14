import type { ReactNode } from "react";
import { useOutletContext } from "react-router";
import type { LayoutContext } from "../../Layout/Layout";
import type { RetrospectiveLang } from "../../../types/retrospective";
import { ProjectOverviewSectionLayout } from "../ProjectOverviewSectionLayout";

const LABEL_BY_LANG: Record<RetrospectiveLang, string> = {
  ko: "기능 02",
  en: "Feature 02",
  jp: "機能 02",
};

const TITLE_BY_LANG: Record<RetrospectiveLang, string> = {
  ko: "사용자 스터디 상세 페이지",
  en: "User Study Detail Page",
  jp: "ユーザースタディの詳細ページ",
};

const DESCRIPTION_BY_LANG: Record<RetrospectiveLang, ReactNode> = {
  ko: (
    <div className="space-y-2">
      <p>
        스터디 그룹을 클릭하면 진입하는{" "}
        <span className="font-extrabold">상세 페이지</span>로, <br />
        프로젝트 일정·진행 상황·스터디 기록을 한 화면에서 관리할 수 있습니다.
      </p>

      <p>
        <span className="font-extrabold text-amber-600">스케줄 관리</span>
        <br />
        캘린더 형식으로 스터디 일정을 등록·확인하며, <br />
        주차별 학습 주제, 발표, 테스트 일정을 한눈에 볼 수 있습니다.
      </p>

      <p>
        <span className="font-extrabold text-amber-600">스터디 기록</span>
        <br />
        팀원이 학습 내용을 작성하고 공유하는 공간입니다.
      </p>

      <p>
        <span className="font-extrabold text-amber-600">스터디 강의/자료</span>
        <br />
        관련 강의와 참고 자료를 연결해 학습 효율을 높일 수 있습니다.
      </p>

      <p>
        <span className="font-semibold text-amber-600">멤버 목록</span>
        <br />
        참여 인원과 역할(리더, 팀원)을 확인할 수 있는 영역입니다.
      </p>
    </div>
  ),
  en: (
    <div className="space-y-2">
      <p>
        This is the <span className="font-extrabold">detail page</span> you
        enter
        <br />
        after clicking a study group card, where you can manage
        <br />
        the project schedule, progress, and study log in a single view.
      </p>

      <p>
        <span className="font-extrabold text-amber-600">
          Schedule management
        </span>
        <br />
        Register and review study sessions in a calendar view, <br />
        and see weekly topics, presentations, and test schedules at a glance.
      </p>

      <p>
        <span className="font-extrabold text-amber-600">Study log</span>
        <br />A space where team members can write and share what they learned.
      </p>

      <p>
        <span className="font-extrabold text-amber-600">
          Study lectures / resources
        </span>
        <br />
        Link related lectures and reference materials to improve learning
        efficiency.
      </p>

      <p>
        <span className="font-semibold text-amber-600">Member list</span>
        <br />
        An area where you can check participants and their roles (leader /
        member).
      </p>
    </div>
  ),
  jp: (
    <div className="space-y-2">
      <p>
        スタディグループをクリックすると入る
        <span className="font-extrabold">詳細ページ</span>で、 <br />
        プロジェクトスケジュール・進行状況・スタディー記録を
        1画面で管理できます。
      </p>

      <p>
        <span className="font-extrabold text-amber-600">スケジュール管理</span>
        <br />
        カレンダー形式でスタディ日程を登録・確認し、 <br />
        週ごとの学習テーマ、発表、テストスケジュールを一目で見ることができます。
      </p>

      <p>
        <span className="font-extrabold text-amber-600">スタディー記録</span>
        <br />
        チームメンバーが学習内容を作成して共有する空間です。
      </p>

      <p>
        <span className="font-extrabold text-amber-600">
          スタディ講義／資料
        </span>
        <br />
        関連講義と参考資料を連結して、学習効率を高めることができます。
      </p>

      <p>
        <span className="font-semibold text-amber-600">メンバーリスト</span>
        <br />
        参加人数と役割（リーダー、チームメンバー）を確認できる領域です。
      </p>
    </div>
  ),
};

export function UserStudyDetailSection() {
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
          w-[520px] h-[730px]
          rounded-xl bg-white
          border border-white/90 -ml-30
          shadow-[0_10px_10px_rgba(15,23,42,0.20)]
          overflow-hidden
        "
      >
        <img
          src="/images/pages/overview/detail.png"
          alt={
            lang === "jp"
              ? "ユーザースタディの詳細ページ画面"
              : lang === "en"
              ? "User study detail page screen"
              : "사용자 스터디 상세 페이지 화면"
          }
          className="w-full h-full object-cover"
        />
      </div>
    </ProjectOverviewSectionLayout>
  );
}
