import type { ReactNode } from "react";
import { useOutletContext } from "react-router";
import type { LayoutContext } from "../../../Layout/Layout";
import type { RetrospectiveLang } from "../../../../types/retrospective";
import { ProjectOverviewSectionLayout } from "../../ProjectOverviewSectionLayout";

const LABEL_BY_LANG: Record<RetrospectiveLang, string> = {
  ko: "기능 09",
  en: "Feature 09",
  jp: "機能 09",
};

const TITLE_BY_LANG: Record<RetrospectiveLang, string> = {
  ko: "강의 관리 페이지",
  en: "Lecture Management Page",
  jp: "講義管理ページ",
};

const DESCRIPTION_BY_LANG: Record<RetrospectiveLang, ReactNode> = {
  ko: (
    <div className="space-y-2">
      <p>
        스터디 운영에 필요한 강의 데이터를 조회하는{" "}
        <span className="font-extrabold">강의 관리 페이지</span>
        입니다.
      </p>

      <p>
        <span className="font-semibold text-amber-600">강의 정보 조회</span>
        <br />
        강의명, 강사명, 썸네일을 포함한 핵심 강의 정보를 한 화면에서 확인할 수
        있습니다.
      </p>

      <p>
        <span className="font-semibold text-amber-600">검색 및 필터링</span>
        <br />
        강의명 또는 키워드 기반 검색이 가능하며, 페이지네이션을 통해 많은 강의
        목록도 효율적으로 탐색할 수 있도록 구성했습니다.
      </p>

      <p>
        API 정책 상 조회 전용으로 동작하며, 운영자는 안전하게 강의 데이터를
        확인할 수 있습니다.
      </p>
    </div>
  ),

  en: (
    <div className="space-y-2">
      <p>
        A page for viewing <span className="font-extrabold">lecture data</span>{" "}
        linked to study groups.
      </p>

      <p>
        Admins can check key information such as{" "}
        <span className="font-semibold text-amber-600">
          lecture title, instructor, and thumbnail,
        </span>
        <br />
        <span className="font-semibold">pagination</span>.
      </p>

      <p>
        Search functionality allows <br />
        <span className="font-semibold">
          keyword or title-based lookups
        </span>{" "}
        for easy access to desired lectures.
      </p>
    </div>
  ),

  jp: (
    <div className="space-y-2">
      <p>スタディに関連する講義データを照会するページです。</p>

      <p>
        <span className="font-semibold text-amber-600">
          講義名、講師名、サムネイル
        </span>
        <br />
        など核心情報の照会が可能で、
        <br />
        <span className="font-semibold">ページネーション</span>
        ベースのリスト探索が可能です。
      </p>

      <p>
        検索を通じて講義名またはキーワード検索もサポートできるように実装しました。
      </p>
    </div>
  ),
};

export function AdminLectureManageSection() {
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
          w-[700px] h-[700px]
          rounded-xl bg-white
          border border-white/90
          shadow-[0_5px_5px_rgba(15,23,42,0.25)]
          overflow-hidden
        "
      >
        <img
          src="/images/pages/overview/lectures.JPG"
          alt={
            lang === "jp"
              ? "講義管理ページ画面"
              : lang === "en"
              ? "Lecture management page screen"
              : "강의 관리 페이지 화면"
          }
          className="w-full h-full object-contain"
        />
      </div>
    </ProjectOverviewSectionLayout>
  );
}
