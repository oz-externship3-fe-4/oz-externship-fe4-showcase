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
  jp: "ユーザ管理ページ",
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
        A centralized page for{" "}
        <span className="font-semibold">
          viewing and managing all registered users
        </span>
        .
      </p>

      <p>
        Admins can review user details such as{" "}
        <span className="font-semibold">
          email, nickname, name, date of birth, join date, and account status
        </span>
        .
      </p>

      <p>
        <span className="font-semibold text-amber-600">
          They can also update
        </span>
        ,
        <br />
        user roles and statuses, and delete accounts that violate{" "}
        <span className="font-semibold">service policies.</span>.
      </p>
    </div>
  ),
  jp: (
    <div className="space-y-2">
      <p>
        サービスに加入したすべてのユーザーの情報を{" "}
        <span className="font-semibold">一目で確認して管理</span>
        できるページです。
      </p>

      <p>
        Eメール、ニックネーム、名前、生年月日など基本情報の照会が可能で、
        <span className="font-semibold"> 加入日の状態確認</span>
        が可能です。
      </p>

      <p>
        <span className="font-semibold text-amber-600">
          ユーザーの権限及び状態変更
        </span>
        が可能であり、
        <br />
        ユーザー削除機能を通じて運営ポリシーに合わないアカウントを{" "}
        <span className="font-semibold"> 整理</span>
        できるように実装しました。
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
          relative -ml-30
          w-[700px] h-[680px]
          rounded-xl bg-white
          border border-white/90
          shadow-[0_5px_5px_rgba(15,23,42,0.25)]
          overflow-hidden
        "
      >
        <img
          src="/images/pages/overview/users.JPG"
          alt={
            lang === "jp"
              ? "ユーザー管理ページ画面"
              : lang === "en"
              ? "User management page screen"
              : "유저 관리 페이지 화면"
          }
          className="w-full h-full object-contain"
        />
      </div>
    </ProjectOverviewSectionLayout>
  );
}
