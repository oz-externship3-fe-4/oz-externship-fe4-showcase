import type { MemberWithResume } from "../../types/resume";

export const TEAM_MEMBERS = [
  {
    id: "squirtle",
    name: {
      ko: "홍엽",
      en: "Hongyeop",
      jp: "ホンヨプ",
    },
    role: {
      ko: "FRONTEND",
      en: "FRONTEND",
      jp: "フロントエンド",
    },
    characterImg: "/images/pokemon/squirtle.png",
    description: {
      ko: `공통 컴포넌트 
버튼, 네비게이션, 첨부파일, 지원내역

회원 탈퇴 관리 페이지 제작 / API 연동
유저 탈퇴 목록 및 상세 조회
유저 탈퇴 복구 기능 구현`,
      en: `Shared UI Components: BUTTON, NAVIGATION,application history modules
      Page UI: Built withdrawal management features including 
      withdrawal list view, withdrawal detail view (modal), 
      and withdrawal restoration (modal)
      API Integration: Integrated backend APIs for withdrawal 
      list retrieval, detail lookup, and account restoration actions`,
      jp: `共通コンポーネント部分:ボタン、タブ、ブラッドクラム、
            ページネーション、公告添付ファイル、サポート履歴
            ページUI部分:退会管理リスト照会、退会詳細照会(モーダル)、
            退会復旧(モーダル)
            API連動:退会管理リスト照会、退会詳細照会、退会復旧`,
    },
    imageScale: 1.6,
    imageOffsetY: 20,
  },
  {
    id: "yveltal",
    name: {
      ko: "김현진",
      en: "Kim Hyunjin",
      jp: "キム・ヒョンジン",
    },
    role: {
      ko: "FRONTEND",
      en: "FRONTEND",
      jp: "フロントエンド開発者",
    },
    characterImg: "/images/pokemon/3287f802e7f5855a.png",
    description: {
      ko: `공통 컴포넌트
          모달 버튼,툴팁,팝오버 제작
          페이지UI : 대시보드(회원가입,탈퇴,탈퇴사유분포,사유별추세) 차트 제작
          msw 및 api연동 진행`,
      en: `Shared UI Components: Developed modal buttons, 
      tooltips, and popovers.
Page UI: Built UI sections for User registration trend chart (bar), 
Account deletion trend chart (bar), 
Account deletion reason distribution chart (donut), 
Monthly trend chart by deletion reason (bar)
MSW & API Integration`,
      jp: `共通コンポーネント部分:モーダルボタン、
      ツールチップ、ポップオーバー制作
ページUI部分:会員登録傾向チャート(スティック)、
会員脱退傾向チャート(スティック)、
脱退理由分布チャート(ドーナツ)、
脱退理由別月別傾向(スティック)製作
msw連動及びapi連動`,
    },
    imageScale: 1.5,
    imageOffsetY: 30,
  },
  {
    id: "bulbasaur",
    name: {
      ko: "윤경복",
      en: "YOON KYUNG BOK",
      jp: "イ・ウォニ",
    },
    role: {
      ko: "FRONTEND",
      en: "FRONTEND",
      jp: "フロントエンド開発者",
    },
    github: "https://github.com/KYUNG-BOK",
    email: "kyeongbok_0627@kakao.com",
    badge: "팀리더",
    characterImg: "/images/pokemon/bulbasaur.png",
    description: {
      ko: `공통 컴포넌트: 폼, 페이지 헤더 제작

로그인 / 리뷰 / 지원관리 / 구인공고 관리 UI 구현
상세 조회 모달 제작

js-cookie 기반 API 인터셉터 및 프로텍트 라우팅 구현`,
      en: `Developed shared form and page header components.
Implemented login, review, application, and job posting management UIs
with detail modals.

Implemented js-cookie based API interceptor and protected routing.`,
      jp: `共通コンポーネント:共通フォーム、ページヘッダー制作
ログイン/レビュー/サポート管理/求人広告管理ページUIの実装
詳細照会 モダル 製作

js-cookieベースのAPIインターセプターおよびプロテクトルーティングの実装`,
    },
    imageScale: 1.2,
    resume: {
      ko: {
        card: {
          characterImg: "/images/pokemon/pikachu.png",
          tagline: `공통 컴포넌트 · 폼/페이지 헤더 · 팀 리드`,
        },
        intro: `프로젝트 전반의 UI 완성도를 높이기 위해 
리뷰·지원관리·구인공고 관리 페이지의 개발과 유지보수를 담당했습니다.
팀 리더로서 팀원들의 개발 진행을 지원하고, 코드 리뷰 및 기능 디버깅을 통해 품질 향상에 기여했습니다.
또한, 공통 컴포넌트와 페이지 간 일관성을 유지하며 전체 UI 흐름을 총괄했습니다.`,
        kpis: [
          { label: "유저 관리 페이지", value: "완성도 95%" },
          { label: "PR 참여", value: "주도" },
        ],
        experiences: [
          {
            period: "2025.10 - 2025.11",
            title: "OZ Externship FE3 - Frontend Team Leader",
            details: [
              "팀원 코드 리뷰 및 PR 품질 관리, 코드 일관성 유지",
              "개발 중 발생한 기능 오류 및 로직 문제 해결 지원",
              "프로젝트 일정 관리 및 협업 커뮤니케이션 조율",
              "리팩토링 및 기능 개선 방향 제안으로 코드 유지보수성 향상",
            ],
          },
        ],
        projects: [
          {
            name: "로그인 페이지",
            role: "메인 프론트엔드",
            summary:
              "js-cookie 기반의 인증 로직을 구현하여, 로그인 상태를 안전하게 관리하고 세션을 유지했습니다.",
            tech: ["React", "TypeScript", "js-cookie", "Vite"],
            bullets: [
              "AccessToken / RefreshToken 기반 인증 구조 구현",
              "Protected Route 적용으로 비인가 사용자 접근 차단",
            ],
          },
          {
            name: "구인 공고 관리 페이지",
            role: "메인 프론트엔드",
            summary:
              "구인 공고 목록 및 상세조회, 삭제 기능을 구현하여 관리자가 효율적으로 공고를 관리할 수 있도록 개발했습니다.",
            tech: ["React", "TypeScript", "TailwindCSS", "TanStack Query"],
            bullets: [
              "공고 상태별 필터링 및 페이지네이션 기능 구현",
              "삭제 API 연동 및 사용자 확인 모달 처리 추가",
              "공통 모달·테이블 컴포넌트 재사용으로 UI 일관성 유지",
            ],
          },
          {
            name: "지원 내역 관리 페이지",
            role: "메인 프론트엔드",
            summary:
              "지원자들의 신청 내역을 확인하고, 상태별로 필터링할 수 있는 관리자 전용 조회 페이지를 개발했습니다.",
            tech: ["React", "TypeScript", "TailwindCSS", "TanStack Query"],
            bullets: [
              "지원 상태(GET) 기반 조회 및 필터 기능 구현",
              "MSW로 API Mocking 환경 구성하여 개발 속도 향상",
            ],
          },
          {
            name: "리뷰 관리 페이지",
            role: "메인 프론트엔드",
            summary:
              "스터디 후기 데이터를 목록 형태로 조회하고, 별점 및 키워드 기준으로 필터링 가능한 UI를 제작했습니다.",
            tech: ["React", "TypeScript", "TailwindCSS", "TanStack Query"],
            bullets: [
              "리뷰 목록(GET) 조회 및 검색/정렬 기능 구현",
              "공통 테이블 컴포넌트 재사용으로 UI 일관성 유지",
            ],
          },
        ],
        skills: ["React", "TypeScript", "TailwindCSS", "Vite"],
        education: [
          {
            school: "OZ Coding School",
            degree: "Frontend BootCamp",
            period: "2025.05~2025.11",
          },
        ],
        certifications: [
          {
            name: "OZ FE Certification",
            issuedBy: "OZ Coding School",
            date: "2025.11",
          },
        ],
        links: [
          { href: "https://febok.vercel.app", label: "포트폴리오페이지" },
        ],
      },
      en: {
        card: {
          characterImg: "/images/pokemon/pikachu.png",
          tagline: "Common UI · User Management · Permission Control",
        },
        intro:
          "Implemented reusable UI components and developed the user management dashboard with focus on maintainability and UX.",
        kpis: [
          { label: "User Management Page", value: "95% Complete" },
          { label: "PR Reviews", value: "8+" },
        ],
        experiences: [
          {
            period: "Sep 2025 – Oct 2025",
            title: "Frontend Developer - OZ Externship FE3",
            details: [
              "Built user permission change and deletion workflows.",
              "Developed reusable table and KPI card components.",
            ],
          },
        ],
        projects: [
          {
            name: "User Management Page",
            role: "Main Frontend Developer",
            summary:
              "Implemented user listing, search, permission update, and deletion features.",
            tech: ["React", "TypeScript", "TailwindCSS"],
            bullets: [
              "Minimized duplication via common component design.",
              "Improved UX with async loading and debouncing.",
            ],
          },
        ],
        skills: ["React", "TypeScript", "TailwindCSS", "Vite"],
        education: [
          {
            school: "OZ Coding School",
            degree: "Frontend Externship",
            period: "2025",
          },
        ],
        certifications: [
          {
            name: "OZ FE Certification",
            issuedBy: "OZ Coding School",
            date: "2025-10",
          },
        ],
        links: [{ href: "https://ozflix.vercel.app", label: "OZ Flix Demo" }],
      },
      jp: {
        card: {
          characterImg: "/images/pokemon/pikachu.png",
          tagline: "共通コンポーネント・ユーザー管理・権限制御",
        },
        intro:
          "再利用可能なUIコンポーネントを実装し、ユーザー管理ダッシュボードを開発しました。保守性とUXの改善に注力しました。",
        kpis: [
          { label: "ユーザー管理ページ", value: "完成度95%" },
          { label: "PRレビュー", value: "8回以上" },
        ],
        experiences: [
          {
            period: "2025年9月 - 2025年10月",
            title: "フロントエンド開発者 - OZ Externship FE3",
            details: [
              "ユーザー権限変更・削除フローを実装",
              "共通テーブル・KPIカードコンポーネントを開発",
            ],
          },
        ],
        projects: [
          {
            name: "ユーザー管理ページ",
            role: "メインフロントエンド",
            summary: "ユーザー一覧、検索、権限変更、削除機能を実装しました。",
            tech: ["React", "TypeScript", "TailwindCSS"],
            bullets: [
              "共通コンポーネント設計により重複コードを削減",
              "UX改善のため非同期ローディングとデバウンス処理を追加",
            ],
          },
        ],
        skills: ["React", "TypeScript", "TailwindCSS", "Vite"],
        education: [
          {
            school: "OZコーディングスクール",
            degree: "フロントエンド外部研修",
            period: "2025",
          },
        ],
        certifications: [
          {
            name: "OZ FE修了証",
            issuedBy: "OZコーディングスクール",
            date: "2025-10",
          },
        ],
        links: [{ href: "https://ozflix.vercel.app", label: "OZ Flix デモ" }],
      },
    },
  },
  {
    id: "pikachu",
    name: {
      ko: "이원희",
      en: "Lee Wonhee",
      jp: "イ・ウォニ",
    },
    role: {
      ko: "FRONTEND",
      en: "FRONTEND",
      jp: "フロントエンド開発者",
    },
    github: "https://github.com/ozwonhee",
    email: "wonhee@example.com",
    characterImg: "/images/pokemon/pikachu.png",
    description: {
      ko: `공통 컴포넌트
KPI 카드, 테이블, 리스트 제작

유저 관리 페이지 제작 / API 연동
유저 목록 조회
유저 상세정보 조회 및 수정
유저 권한 변경 및 회원 삭제

일부 PR 코드 리뷰 참여`,
      en: `Developed shared KPI card, table, and list components.
Implemented user management page with API integration:
user list, detail view & edit, role change, and deletion.
Participated in PR code reviews.`,
      jp: `共通コンポーネント部分:データ表記部分のカード、テーブル、リスト制作
ページUI部分:ユーザー管理リスト照会、
ユーザー権限変更(モーダル)、
ユーザー詳細情報修正(モーダル)、
ユーザー会員削除

API連動部分:ページUIを任された部分をそのまま連動
コードレビュー: 一部PRレビュー

一部PRのコードレビューにも参加。`,
    },
    imageScale: 1.2,
    resume: {
      ko: {
        card: {
          characterImg: "/images/pokemon/pikachu.png",
          tagline: `공통 컴포넌트 · KPI 카드 · 유저 관리/권한/삭제`,
        },
        intro: `공통 UI 컴포넌트와 유저 관리 영역을 담당했습니다.
테이블/리스트/KPI 카드 등 재사용 가능한 컴포넌트 설계에 집중했고,
실제 운영 시 유지보수를 고려해 API 연동 구조를 정리했습니다.`,
        kpis: [
          { label: "유저 관리 페이지", value: "완성도 95%" },
          { label: "PR 참여", value: "8회" },
        ],
        experiences: [
          {
            period: "2025.09 - 2025.10",
            title: "OZ Externship FE3 - Frontend Developer",
            details: [
              "유저 관리/권한 변경 플로우 설계 및 구현",
              "공통 KPI 카드, 리스트 컴포넌트 개발",
            ],
          },
        ],
        projects: [
          {
            name: "유저 관리 페이지",
            role: "메인 프론트엔드",
            summary:
              "회원 목록, 상세조회, 권한변경 및 탈퇴 처리 페이지를 개발했습니다.",
            tech: ["React", "TypeScript", "TailwindCSS"],
            bullets: [
              "공통 테이블 컴포넌트 재사용으로 코드 중복 최소화",
              "UX 개선을 위해 로딩/중복 클릭 방지 로직 추가",
            ],
          },
        ],
        skills: ["React", "TypeScript", "TailwindCSS", "Vite"],
        education: [
          {
            school: "OZ Coding School",
            degree: "Frontend Externship",
            period: "2025",
          },
        ],
        certifications: [
          {
            name: "OZ FE Certification",
            issuedBy: "OZ Coding School",
            date: "2025-10",
          },
        ],
        links: [{ href: "https://ozflix.vercel.app", label: "OZ Flix Demo" }],
      },
      en: {
        card: {
          characterImg: "/images/pokemon/pikachu.png",
          tagline: "Common UI · User Management · Permission Control",
        },
        intro:
          "Implemented reusable UI components and developed the user management dashboard with focus on maintainability and UX.",
        kpis: [
          { label: "User Management Page", value: "95% Complete" },
          { label: "PR Reviews", value: "8+" },
        ],
        experiences: [
          {
            period: "Sep 2025 – Oct 2025",
            title: "Frontend Developer - OZ Externship FE3",
            details: [
              "Built user permission change and deletion workflows.",
              "Developed reusable table and KPI card components.",
            ],
          },
        ],
        projects: [
          {
            name: "User Management Page",
            role: "Main Frontend Developer",
            summary:
              "Implemented user listing, search, permission update, and deletion features.",
            tech: ["React", "TypeScript", "TailwindCSS"],
            bullets: [
              "Minimized duplication via common component design.",
              "Improved UX with async loading and debouncing.",
            ],
          },
        ],
        skills: ["React", "TypeScript", "TailwindCSS", "Vite"],
        education: [
          {
            school: "OZ Coding School",
            degree: "Frontend Externship",
            period: "2025",
          },
        ],
        certifications: [
          {
            name: "OZ FE Certification",
            issuedBy: "OZ Coding School",
            date: "2025-10",
          },
        ],
        links: [{ href: "https://ozflix.vercel.app", label: "OZ Flix Demo" }],
      },
      jp: {
        card: {
          characterImg: "/images/pokemon/pikachu.png",
          tagline: "共通コンポーネント・ユーザー管理・権限制御",
        },
        intro:
          "再利用可能なUIコンポーネントを実装し、ユーザー管理ダッシュボードを開発しました。保守性とUXの改善に注力しました。",
        kpis: [
          { label: "ユーザー管理ページ", value: "完成度95%" },
          { label: "PRレビュー", value: "8回以上" },
        ],
        experiences: [
          {
            period: "2025年9月 - 2025年10月",
            title: "フロントエンド開発者 - OZ Externship FE3",
            details: [
              "ユーザー権限変更・削除フローを実装",
              "共通テーブル・KPIカードコンポーネントを開発",
            ],
          },
        ],
        projects: [
          {
            name: "ユーザー管理ページ",
            role: "メインフロントエンド",
            summary: "ユーザー一覧、検索、権限変更、削除機能を実装しました。",
            tech: ["React", "TypeScript", "TailwindCSS"],
            bullets: [
              "共通コンポーネント設計により重複コードを削減",
              "UX改善のため非同期ローディングとデバウンス処理を追加",
            ],
          },
        ],
        skills: ["React", "TypeScript", "TailwindCSS", "Vite"],
        education: [
          {
            school: "OZコーディングスクール",
            degree: "フロントエンド外部研修",
            period: "2025",
          },
        ],
        certifications: [
          {
            name: "OZ FE修了証",
            issuedBy: "OZコーディングスクール",
            date: "2025-10",
          },
        ],
        links: [{ href: "https://ozflix.vercel.app", label: "OZ Flix デモ" }],
      },
    },
  },
  {
    id: "eevee",
    name: {
      ko: "서단비",
      en: "Seo Danbi",
      jp: "ソ・ダンビ",
    },
    role: {
      ko: "FRONTEND",
      en: "FRONTEND",
      jp: "フロントエンド開発者",
    },
    characterImg: "/images/pokemon/eevee.png",
    imageOffsetY: 20,
    description: {
      ko: `공통 컴포넌트 : 토스트 알림창 , 뱃지 , 
      진행률 표시 바 , 아코디언 목록
페이지 제작 : 강의 관리 페이지 , 
스터디 그룹 페이지
모달창 제작 : 강의 관리 페이지 상세 모달창 , 스터디 그룹 페이지 상세 모달창 
API 연동 : TanStackQuery로 연결
코드 PR 리뷰`,
      en: `Shared UI Components: Developed toast notifications, 
      badges, progress bars, and accordion components
Page development : Built lecture management 
and study group management pages
Modal development : 
Implemented detail modals for lecture and study group content
API Integration : Integrated backend APIs using Tanstack Query
Performed code reviews`,
      jp: `共通コンポーネント：トースト通知、バッジ、進行率バー、
      アコーディオンリスト
ページ制作：講義管理ページ、スタディグループページ
モーダル制作：講義管理ページ 詳細モーダル、
スタディグループページ 詳細モーダル
API連動：Tanstack Queryで接続
コードPRレビュー`,
    },
    imageScale: 1.5,
  },
] as const satisfies readonly MemberWithResume[];
