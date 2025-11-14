import type { ReactNode } from "react";
import { useOutletContext } from "react-router";
import type { LayoutContext } from "../../../Layout/Layout";
import type { RetrospectiveLang } from "../../../../types/retrospective";
import { ProjectOverviewSectionLayout } from "../../ProjectOverviewSectionLayout";

const LABEL: Record<RetrospectiveLang, string> = {
  ko: "기능 05",
  en: "Feature 05",
  jp: "機能 05",
};

const TITLE: Record<RetrospectiveLang, string> = {
  ko: "관리자 로그인 페이지",
  en: "Admin Login Page",
  jp: "管理者ログインページ",
};

const DESC: Record<RetrospectiveLang, ReactNode> = {
  ko: (
    <div className="space-y-2">
      <p className="text-lg">
        관리자(Admin) 전용 로그인 페이지로,
        <br />
        운영 권한이 없는 사용자의 접근을 차단하여
        <span className="font-semibold"> 보안성과 데이터 무결성</span>을
        확보했습니다.
      </p>

      <p className="text-lg">
        <span className="font-semibold text-amber-600">
          AccessToken / RefreshToken 기반 인증 구조
        </span>
        를 구현하여 로그인 상태를 안정적으로 유지하며,
        <br /> 권한이 없는 사용자는 관리자 메뉴에 접근할 수 없습니다.
      </p>
    </div>
  ),
  en: (
    <div className="space-y-2">
      <p>
        An Admin-only login page designed to block unauthorized access and
        ensure
        <span className="font-semibold"> security and data integrity</span>.
      </p>

      <p>
        Using a{" "}
        <span className="font-semibold text-amber-600">
          AccessToken / RefreshToken
        </span>{" "}
        authentication flow,
        <br />
        admin sessions remain stable, and users without permissions cannot
        access any admin menus.
      </p>
    </div>
  ),
  jp: (
    <div className="space-y-2">
      <p>
        管理者専用のログインページで、
        <br />
        権限のないユーザーのアクセスを遮断し、
        <span className="font-semibold"> セキュリティとデータ整合性</span>
        を確保しています。
      </p>

      <p>
        <span className="font-semibold text-amber-600">
          AccessToken / RefreshToken 認証構造
        </span>
        によりログイン状態を安定的に維持し、
        <br />
        権限のないユーザーは管理者メニューにアクセスできません。
      </p>
    </div>
  ),
};

export function AdminLoginSection() {
  const { lang } = useOutletContext<LayoutContext>();

  return (
    <ProjectOverviewSectionLayout
      label={LABEL[lang]}
      title={TITLE[lang]}
      imagePosition="right"
      description={DESC[lang]}
    >
      <div
        className="
          relative
          w-[620px] h-[520px]
          rounded-xl
          bg-white
          border border-white/90
          shadow-[0_22px_30px_rgba(15,23,42,0.20)]
          overflow-hidden
        "
      >
        <img
          src="/images/pages/overview/loginpage.JPG"
          alt="Admin Login"
          className="w-full h-full object-cover"
        />
      </div>
    </ProjectOverviewSectionLayout>
  );
}
