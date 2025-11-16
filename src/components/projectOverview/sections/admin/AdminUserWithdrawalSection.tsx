import type { ReactNode } from "react";
import { useOutletContext } from "react-router";
import type { LayoutContext } from "../../../Layout/Layout";
import type { RetrospectiveLang } from "../../../../types/retrospective";
import { ProjectOverviewSectionLayout } from "../../ProjectOverviewSectionLayout";

const LABEL_BY_LANG: Record<RetrospectiveLang, string> = {
  ko: "기능 07",
  en: "Feature 07",
  jp: "機能 07",
};

const TITLE_BY_LANG: Record<RetrospectiveLang, string> = {
  ko: "탈퇴 관리 페이지",
  en: "Withdrawn User Management Page",
  jp: "退会管理ページ",
};

const DESCRIPTION_BY_LANG: Record<RetrospectiveLang, ReactNode> = {
  ko: (
    <div className="space-y-2">
      <p>
        탈퇴한 사용자의 목록을 조회하고 관리할 수 있는{" "}
        <span className="font-semibold">운영자용 페이지</span>입니다.
      </p>

      <p>
        탈퇴한 유저의 기본 정보와 함께,{" "}
        <span className="font-semibold">탈퇴 사유</span>도 확인할 수 있으며
        <br />
        실수로 계정을 삭제했거나, 다시 복귀하고자 하는 사용자는{" "}
        <span className="font-semibold">복구 기능</span>을 통해 간단히 되돌릴 수
        있습니다.
      </p>

      <p>
        이 페이지는 운영자가{" "}
        <span className="font-semibold">유저 흐름을 정확히 이해</span>하고, 필요
        시 계정을 안전하게 복구할 수 있도록 설계되었습니다.
      </p>
    </div>
  ),

  en: (
    <div className="space-y-2">
      <p>
        An admin page for managing{" "}
        <span className="font-semibold">users who have withdrawn.</span>.
      </p>

      <p>
        It displays each user’s basic information and{" "}
        <span className="font-semibold"> reason for withdrawal</span>.
        <br />
        Users who accidentally left or wish to return can be easily restored via
        the <span className="font-semibold">recovery feature</span>
      </p>

      <p>
        This page helps admins{" "}
        <span className="font-semibold">understand user flow</span>
        and safely restore accounts when necessary.
      </p>
    </div>
  ),

  jp: (
    <div className="space-y-2">
      <p>退会したユーザーのリストを確認して管理できるページです。</p>

      <p>
        退会したユーザーの情報を照会し、{" "}
        <span className="font-semibold">退会理由</span>を確認することもでき
        <br />
        誤って退会したり、再度復帰しようとするユーザーを{" "}
        <span className="font-semibold">簡単に戻すことができる復旧機能</span>
        も実装しました。
      </p>

      <p>
        このページは、
        <span className="font-semibold">
          オペレーターがユーザーの流れを正確に理解
        </span>
        し、必要に応じてアカウントを復旧できるように設計されています。
      </p>
    </div>
  ),
};

export function AdminUserWithdrawalSection() {
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
          relative -ml-20
          w-[700px] h-[500px]
          rounded-xl bg-white
          border border-white/90
          shadow-[0_5px_5px_rgba(15,23,42,0.25)]
          overflow-hidden
        "
      >
        <img
          src="/images/pages/overview/withdrawal.JPG"
          alt={
            lang === "jp"
              ? "退会管理ページ画面"
              : lang === "en"
              ? "User withdrawal management page screen"
              : "탈퇴 관리 페이지 화면"
          }
          className="w-full h-full object-contain"
        />
      </div>
    </ProjectOverviewSectionLayout>
  );
}
