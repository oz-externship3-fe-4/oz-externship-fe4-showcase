import type { ReactNode } from "react";
import { useOutletContext } from "react-router";
import type { LayoutContext } from "../../../Layout/Layout";
import type { RetrospectiveLang } from "../../../../types/retrospective";
import { ProjectOverviewSectionLayout } from "../../ProjectOverviewSectionLayout";

const LABEL_BY_LANG: Record<RetrospectiveLang, string> = {
  ko: "기능 06",
  en: "Feature 06",
  jp: "機能 06",
};

const TITLE_BY_LANG: Record<RetrospectiveLang, string> = {
  ko: "유저 관리 페이지",
  en: "User Management Page",
  jp: "ユーザー管理ページ",
};

const DESCRIPTION_BY_LANG: Record<RetrospectiveLang, ReactNode> = {
  ko: (
    <div className="space-y-2">
      <p>
        서비스에 가입한 모든 사용자의 정보를{" "}
        <span className="font-semibold">한눈에 확인하고 관리</span>할 수 있는
        페이지입니다.
      </p>

      <p>
        이메일, 닉네임, 이름, 생년월일 등 기본 정보와{" "}
        <span className="font-semibold">가입일자, 상태</span>를 조회할 수
        있습니다.
      </p>

      <p>
        <span className="font-semibold text-amber-600">
          유저 권한 및 상태 변경
        </span>
        이 가능하며,
        <br />
        운영 정책에 맞지 않는 계정은{" "}
        <span className="font-semibold">유저 삭제 기능</span>을 통해 정리할 수
        있도록 구현했습니다.
      </p>
    </div>
  ),
  en: (
    <div className="space-y-2">
      <p>
        A page where admins can{" "}
        <span className="font-semibold">
          view and manage all registered users at a glance
        </span>
        .
      </p>

      <p>
        Admins can check basic information such as{" "}
        <span className="font-semibold">
          email, nickname, name, date of birth, join date, and status
        </span>
        .
      </p>

      <p>
        <span className="font-semibold text-amber-600">
          User role and status can be updated
        </span>
        ,
        <br />
        and accounts that do not comply with the service policy can be cleaned
        up using the{" "}
        <span className="font-semibold">user deletion feature</span>.
      </p>
    </div>
  ),
  jp: (
    <div className="space-y-2">
      <p>
        サービスに登録したすべてのユーザー情報を{" "}
        <span className="font-semibold">一目で確認・管理</span>
        できるページです。
      </p>

      <p>
        メールアドレス、ニックネーム、氏名、生年月日などの基本情報に加え、
        <span className="font-semibold">登録日やステータス</span>
        も確認できます。
      </p>

      <p>
        <span className="font-semibold text-amber-600">
          ユーザーの権限およびステータス変更
        </span>
        が可能で、
        <br />
        運営ポリシーに合わないアカウントは{" "}
        <span className="font-semibold">削除機能</span>
        を通じて整理できるように実装しました。
      </p>
    </div>
  ),
};

export function AdminUserManagementSection() {
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
          w-[540px] h-[720px]
          rounded-xl bg-white
          border border-white/90
          shadow-[0_18px_45px_rgba(15,23,42,0.20)]
          overflow-hidden
        "
      >
        <img
          src="/images/pages/admin/user-management.png"
          alt={
            lang === "jp"
              ? "ユーザー管理ページ画面"
              : lang === "en"
              ? "User management page screen"
              : "유저 관리 페이지 화면"
          }
          className="w-full h-full object-cover"
        />
      </div>
    </ProjectOverviewSectionLayout>
  );
}
