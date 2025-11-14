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
        A visualization-based{" "}
        <span className="font-extrabold">admin dashboard</span> that allows
        operators to monitor the service status in real time.
      </p>

      <p>
        <span className="font-semibold text-amber-600">
          Signup & Withdrawal Trends
        </span>
        <br />
        Admins can analyze user growth by comparing new signups and withdrawals
        over time.
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
        運営者がサービス状況をリアルタイムで把握できる
        <span className="font-extrabold">可視化ダッシュボード</span>です。
      </p>

      <p>
        <span className="font-semibold text-amber-600">
          会員登録・退会の推移
        </span>
        <br />
        時間の経過に伴う新規登録者数と退会者数を比較・分析し、
        サービスの成長傾向を直感的に確認できます。
      </p>

      <p>
        <span className="font-semibold text-amber-600">
          退会理由の分布および理由追跡
        </span>
        <br />
        ユーザーが離脱した理由をグラフで可視化し、
        詳細データに基づいてサービス改善の方向性を導き出すことができます。
      </p>

      <p>
        すべてのデータは
        <span className="font-semibold">読み取り専用API</span>
        によって安全に提供され、
        運営者がサービスの流れを正確に把握できるよう設計されています。
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
