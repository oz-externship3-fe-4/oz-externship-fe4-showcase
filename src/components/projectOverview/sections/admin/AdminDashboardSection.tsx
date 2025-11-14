import type { ReactNode } from "react";
import { useOutletContext } from "react-router";
import type { LayoutContext } from "../../../Layout/Layout";
import type { RetrospectiveLang } from "../../../../types/retrospective";
import { ProjectOverviewSectionLayout } from "../../ProjectOverviewSectionLayout";

const LABEL_BY_LANG: Record<RetrospectiveLang, string> = {
  ko: "기능 08",
  en: "Feature 08",
  jp: "機能 08",
};

const TITLE_BY_LANG: Record<RetrospectiveLang, string> = {
  ko: "관리자 대시보드",
  en: "Admin Dashboard",
  jp: "管理者ダッシュボード",
};

const DESCRIPTION_BY_LANG: Record<RetrospectiveLang, ReactNode> = {
  ko: (
    <div className="space-y-2">
      <p>
        운영자가 서비스 현황을 실시간으로 파악할 수 있도록 구성한{" "}
        <span className="font-extrabold">시각화 대시보드</span>
        입니다.
      </p>

      <p>
        <span className="font-semibold text-amber-600">
          회원가입 및 탈퇴 추세
        </span>
        <br />
        시간 흐름에 따른 신규 가입자 수와 탈퇴자 수를 비교·분석할 수 있어 서비스
        성장 흐름을 직관적으로 확인할 수 있습니다.
      </p>

      <p>
        <span className="font-semibold text-amber-600">
          탈퇴 사유 분포 및 사유 추적
        </span>
        <br />
        어떤 이유로 유저가 이탈했는지 그래프로 시각화하였으며, 세부 사유에 대한
        추적 데이터를 기반으로 서비스 개선 방향을 도출할 수 있습니다.
      </p>

      <p>
        모든 데이터는{" "}
        <span className="font-semibold">안전한 조회 전용 API 기반</span>
        으로 구성되어 운영자가 서비스 흐름을 명확하게 이해할 수 있도록
        설계되었습니다.
      </p>
    </div>
  ),

  en: (
    <div className="space-y-2">
      <p>
        A visualization <span className="font-extrabold">dashboard</span> that
        allows administrators <br />
        to grasp the overall service status at a glance.
      </p>

      <p>
        It provides insights into{" "}
        <span className="font-semibold text-amber-600">
          signup and withdrawal trends
        </span>
        <br />, as well as{" "}
        <span className="font-semibold">
          withdrawal reason distribution and tracking
        </span>
        , visualizing the reasons for user churn through intuitive,
        <br />
        graph-based analytics.
      </p>

      <p>
        <span className="font-semibold text-amber-600">
          Withdrawal Reason Distribution & Tracking
        </span>
        <br />
        Visualization charts show why users leave the service, and detailed
        tracking helps identify improvement opportunities.
      </p>

      <p>
        All data is provided through{" "}
        <span className="font-semibold">safe read-only APIs</span>, ensuring
        clear insight into overall service flow.
      </p>
    </div>
  ),

  jp: (
    <div className="space-y-2">
      <p>
        オペレーターがサービスの現状を一目で把握できるように構成した視覚化ページです。
      </p>

      <p>
        会員登録及び退会傾向の確認が可能で、退会理由の分布及び追跡も可能なので、
        <br />
        どのような理由でユーザーが離脱したかについて
        グラフベースで視覚化し、一目で把握できるように実装しました。
      </p>
    </div>
  ),
};

export function AdminDashboardSection() {
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
          border border-white/90
          shadow-[0_18px_35px_rgba(15,23,42,0.25)]
          overflow-hidden
        "
      >
        <img
          src="/images/pages/admin/dashboard.png"
          alt={
            lang === "jp"
              ? "管理者ダッシュボード画面"
              : lang === "en"
              ? "Admin dashboard screen"
              : "관리자 대시보드 화면"
          }
          className="w-full h-full object-contain"
        />
      </div>
    </ProjectOverviewSectionLayout>
  );
}
