import type { ReactNode } from "react";
import { useOutletContext } from "react-router";
import type { LayoutContext } from "../../Layout/Layout";
import type { RetrospectiveLang } from "../../../types/retrospective";
import { ProjectOverviewSectionLayout } from "../ProjectOverviewSectionLayout";

const LABEL_BY_LANG: Record<RetrospectiveLang, string> = {
  ko: "기능 04",
  en: "Feature 04",
  jp: "機能 04",
};

const TITLE_BY_LANG: Record<RetrospectiveLang, string> = {
  ko: "사용자 마이페이지",
  en: "User My Page",
  jp: "ユーザーマイページ",
};

const DESCRIPTION_BY_LANG: Record<RetrospectiveLang, ReactNode> = {
  ko: (
    <div className="space-y-2">
      <p>
        사용자의 프로필, 지원 내역, 완료된 스터디 기록을 <br />
        <span className="font-extrabold">한눈에 확인</span>할 수 있는
        <span className="font-extrabold"> 마이페이지</span>
        입니다.
      </p>

      <p>
        <span className="font-extrabold text-amber-600">리뷰 작성 기능</span>
        <br />
        완료된 스터디 목록에서{" "}
        <span className="font-semibold">별점과 코멘트</span>로 리뷰를 작성할 수
        있습니다.
      </p>

      <p>
        <span className="font-extrabold text-amber-600">
          완료된 스터디 기록
        </span>
        <br />
        참여 기간, 인원, 역할, 리더 여부 등{" "}
        <span className="font-semibold">상세 정보를 확인</span>할 수 있습니다.
      </p>
    </div>
  ),
  en: (
    <div className="space-y-2">
      <p>
        A <span className="font-extrabold">My Page</span> where users can view
        their profile, applications, <br />
        and completed study records{" "}
        <span className="font-extrabold">at a glance</span>.
      </p>

      <p>
        <span className="font-extrabold text-amber-600">
          Review writing feature
        </span>
        <br />
        Users can leave{" "}
        <span className="font-semibold">ratings and comments</span> for their
        completed studies.
      </p>

      <p>
        <span className="font-extrabold text-amber-600">
          Completed study history
        </span>
        <br />
        Users can check{" "}
        <span className="font-semibold">
          duration, headcount, role, and leader status
        </span>{" "}
        for each study.
      </p>
    </div>
  ),
  jp: (
    <div className="space-y-2">
      <p>
        ユーザーのプロフィール、サポート履歴、完了したスタディ記録を
        <br />
        <span className="font-extrabold">一目で確認</span>できる
        <span className="font-extrabold">マイページ</span>です。
      </p>

      <p>
        <span className="font-extrabold text-amber-600">レビュー作成機能</span>
        <br />
        完了したスタディリストから
        <span className="font-semibold">評価とコメント</span>
        でレビューを作成できます。
      </p>

      <p>
        <span className="font-extrabold text-amber-600">
          完了したスタディー記録
        </span>
        <br />
        参加期間、人数、役割、リーダーかどうかなど
        <span className="font-semibold">詳細情報を確認</span>
        することができます。
      </p>
    </div>
  ),
};

export function UserMyPageSection() {
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
          w-[600px] h-[730px]
          rounded-xl bg-white
          border border-white/90 -ml-10
          shadow-[0_10px_10px_rgba(15,23,42,0.20)]
          overflow-hidden
        "
      >
        <img
          src="/images/pages/overview/mypage.png"
          alt={
            lang === "jp"
              ? "ユーザーマイページ画面"
              : lang === "en"
              ? "User my page screen"
              : "사용자 마이페이지 화면"
          }
          className="w-full h-full object-cover"
        />
      </div>
    </ProjectOverviewSectionLayout>
  );
}
