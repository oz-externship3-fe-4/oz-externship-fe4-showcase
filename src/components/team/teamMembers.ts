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
    github: "https://github.com/Justin-SJ-Hong",
    email: "madwolves98@gmail.com",
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
    imageScale: 1.7,
    imageOffsetY: 20,
    resume: {
      ko: {
        card: {
          characterImg: "/images/pokemon/pikachu.png",
          tagline: `공통 컴포넌트 · 탈퇴 관리 페이지`,
        },
        intro: `모두가 사용하기 편한 공통 컴포넌트 설계 및 탈퇴 관리 페이지에 집중했습니다. 
공통 컴포넌트의 경우 버튼, 탭, 브래드크럼, 페이지네이션, 공고 첨부 파일, 지원 내역 컴포넌트를 개발하여
다른 개발자들의 개발 효율을 향상시켰습니다. `,
        kpis: [
          { label: "공통 컴포넌트 개발", value: "완성도 90%" },
          { label: "탈퇴 관리 페이지 개발", value: "완성도 90%" },
        ],
        experiences: [
          {
            period: "2025.10- 2025.11",
            title: "OZ Externship FE3 - Frontend Developer",
            details: ["공통 컴포넌트 개발", "탈퇴 관리 페이지 개발"],
          },
        ],
        projects: [
          {
            name: "공통 컴포넌트 개발",
            role: "프론트엔드 개발자",
            summary: `버튼, 탭, 브래드크럼, 페이지네이션, 공고 첨부 파일, 지원 내역 컴포넌트를 개발하여 
              UI 개발 효율을 향상시켰습니다.`,
            tech: ["React", "TypeScript", "TailwindCSS"],
            bullets: [
              "공통 컴포넌트 개발을 통해 다른 개발자들의 개발 효율 향상",
              "재사용성 및 유지보수성 강화",
            ],
          },
          {
            name: "탈퇴 관리 페이지 개발",
            role: "프론트엔드 개발자",
            summary: `탈퇴 관리 페이지를 만들어 탈퇴 회원을 효율적으로 관리하였습니다.`,
            tech: ["React", "TypeScript", "TailwindCSS", "TanStack Query"],
            bullets: [
              "공통 컴포넌트 개발을 통해 다른 개발자들의 개발 효율 향상",
              "재사용성 및 유지보수성 강화",
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
          {
            href: "https://oz-react-mini-12-three.vercel.app/",
            label: "OZ 무비",
          },
        ],
      },
      en: {
        card: {
          characterImg: "/images/pokemon/pikachu.png",
          tagline: "Shared UI Components · Withdrawal Management Page",
        },
        intro: `Focused on designing universally usable shared components and 
          developing the Withdrawal Management Page. 
          I built core UI components—such as buttons, tabs, breadcrumbs, 
          pagination, file attachments for job posts, and application history—
          to improve development efficiency for the entire team.`,
        kpis: [
          { label: "Shared Component Development", value: "Completion 90%" },
          { label: "Withdrawal Management Page", value: "Completion 90%" },
        ],
        experiences: [
          {
            period: "Oct 2025 – Nov 2025",
            title: "OZ Externship FE3 - Frontend Developer",
            details: [
              "Developed reusable shared UI components",
              "Implemented the Withdrawal Management Page for efficient user account administration",
            ],
          },
        ],
        projects: [
          {
            name: "Shared Component Development",
            role: "Frontend Developer",
            summary: `Developed buttons, tabs, breadcrumbs, pagination, job post attachment, 
              and application history components to enhance UI consistency and efficiency.`,
            tech: ["React", "TypeScript", "TailwindCSS"],
            bullets: [
              "Improved team-wide development efficiency through shared UI components",
              "Enhanced reusability and maintainability across the project",
            ],
          },
          {
            name: "Withdrawal Management Page",
            role: "Frontend Developer",
            summary: `Built a management page for efficiently handling user withdrawal records 
              and account restoration.`,
            tech: ["React", "TypeScript", "TailwindCSS", "TanStack Query"],
            bullets: [
              "Implemented withdrawal list, detail view, and restoration flow",
              "Applied reusable shared components to ensure UI and code consistency",
            ],
          },
        ],
        skills: ["React", "TypeScript", "TailwindCSS", "Vite"],
        education: [
          {
            school: "OZ Coding School",
            degree: "Frontend Bootcamp",
            period: "May 2025 - Nov 2025",
          },
        ],
        certifications: [
          {
            name: "OZ FE Certification",
            issuedBy: "OZ Coding School",
            date: "Nov 2025",
          },
        ],
        links: [
          {
            href: "https://oz-react-mini-12-three.vercel.app/",
            label: "OZ Movie",
          },
        ],
      },
    },
  },
  {
    id: "yveltal",
    name: {
      ko: "김현진",
      en: "Kim hyeon jin",
      jp: "キム・ヒョンジン",
    },
    role: {
      ko: "FRONTEND",
      en: "FRONTEND",
      jp: "フロントエンド·デベロッパー",
    },
    github: "https://github.com/djskyt",
    email: "jjsk953563@gmail.com",
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

    imageScale: 1.7,
    imageOffsetY: 30,
    resume: {
      ko: {
        card: {
          characterImg: "/images/pokemon/pikachu.png",
          tagline: `공통 컴포넌트 · 차트 · 태그필터 UI`,
        },
        intro: `이번프 로젝트에서 모달 버튼, 툴팁, 팝오버 등 공통 컴포넌트를 제작하고, 
        회원가입 추세·회원탈퇴 추세·탈퇴 사유 분포·탈퇴 사유별 월별 추세 차트 등 주요 지표 시각화 페이지를 구현했습니다.
또한 MSW를 활용한 API 연동 테스트 및 실제 API 연결 작업을 수행하며, 전반적인 UI의 일관성과 안정성을 확보했습니다.`,
        kpis: [
          { label: "유저 관리 페이지", value: "완성도 95%" },
          { label: "PR 참여", value: "8회" },
        ],
        experiences: [
          {
            period: "2025.09 - 2025.10",
            title: "OZ Externship FE3 - Frontend Developer",
            details: [
              "Recharts 라이브러리를 활용해 회원가입 및 회원탈퇴 추세를 월별·연별 차트로 시각화",
              "API로 전달받은 탈퇴 사유 데이터를 기반으로 도넛 차트 형태의 탈퇴 사유 분포 시각화",
              "탈퇴 사유별 월별 추세를 각각의 사유 기준으로 세분화해 차트로 구현",
              "차트 전반의 UI 및 데이터 연동 로직 개선으로 가독성과 유지보수성 강화",
              "태그 필터 UI 제작으로 조건별 데이터 조회 기능 제공",
            ],
          },
        ],
        projects: [
          {
            name: "회원가입 추세 차트",
            role: "메인 프론트엔드",
            summary:
              "회원가입 데이터를 월별·연별 기준으로 시각화하여 가입 추세를 한눈에 파악할 수 있는 차트를 구현했습니다.",
            tech: [
              "React",
              "TypeScript",
              "TailwindCSS",
              "Recharts",
              "TanStack Query",
            ],
            bullets: [
              "회원가입 데이터를 API로 연동하여 월별·연별 스틱 차트 구성",
              "데이터 필터링 및 기간별 비교 기능 제공",
              "반응형 UI로 다양한 해상도에서 시각화 유지",
            ],
          },
          {
            name: "회원탈퇴 추세 차트",
            role: "메인 프론트엔드",
            summary:
              "회원탈퇴 데이터를 기반으로 월별·연별 추세를 시각화하여 사용자 이탈 흐름을 파악할 수 있는 차트를 제작했습니다.",
            tech: [
              "React",
              "TypeScript",
              "TailwindCSS",
              "Recharts",
              "TanStack Query",
            ],
            bullets: [
              "탈퇴 데이터를 월별·연별 기준으로 스틱 차트 구현",
              "데이터 로딩 상태 및 에러 핸들링 처리",
              "공통 차트 컴포넌트 구조화로 유지보수성 향상",
            ],
          },
          {
            name: "탈퇴 사유 분포 차트",
            role: "메인 프론트엔드",
            summary:
              "API로부터 받은 탈퇴 사유 데이터를 도넛 차트로 시각화하여 주요 이탈 요인을 한눈에 확인할 수 있도록 제작했습니다",
            tech: [
              "React",
              "TypeScript",
              "TailwindCSS",
              "Recharts",
              "TanStack Query",
            ],
            bullets: [
              "API에서 탈퇴 사유(reason) 데이터 연동",
              "도넛 차트로 비율 시각화 및 색상 구분 적용",
              "툴팁 및 범례 기능으로 데이터 가독성 강화",
            ],
          },
          {
            name: "탈퇴 사유별 월별 추세 차트",
            role: "메인 프론트엔드",
            summary:
              "탈퇴 사유별 데이터를 월별로 시각화하여 특정 이유의 추세 변화를 분석할 수 있는 차트를 구현했습니다.",
            tech: [
              "React",
              "TypeScript",
              "TailwindCSS",
              "Recharts",
              "TanStack Query",
            ],
            bullets: [
              "사유별 데이터를 월별 기준으로 그룹화 후 시각화",
              "다중 차트 구조로 사유 간 비교 가능",
              "데이터 필터링 및 범례 기반 가시성 조절 기능 추가",
            ],
          },
          {
            name: "태그 필터 UI",
            role: "메인 프론트엔드",
            summary:
              "차트 데이터 조건을 손쉽게 조절할 수 있는 태그 기반 필터 UI를 제작하여 데이터 분석 효율을 높였습니다.",
            tech: ["React", "TypeScript", "TailwindCSS"],
            bullets: [
              "사용자 선택에 따라 조건별 데이터 필터링 가능",
              "활성·비활성 상태를 직관적으로 구분할 수 있는 UI 구성",
              "공통 필터 컴포넌트화로 다른 차트에도 재사용 가능",
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
          tagline: "Shared UI Components · Charts · Tag Filter UI",
        },
        intro: `In this project, I developed shared components such as modal buttons, 
          tooltips, and popovers, and built data visualization pages 
          including user registration trends, account withdrawal trends, 
          withdrawal reason distribution, and monthly trends by withdrawal reason. 
          I also conducted API integration testing using MSW and connected production APIs 
          to ensure UI consistency and reliability across the system.`,
        kpis: [
          { label: "User Management Page", value: "95% Complete" },
          { label: "PR Reviews", value: "8+" },
        ],
        experiences: [
          {
            period: "Sep 2025 – Oct 2025",
            title: "OZ Externship FE3 - Frontend Developer",
            details: [
              "Visualized user registration and withdrawal trends by month and year using the Recharts library.",
              "Developed reusable table and KPI card components.",
              "Implemented detailed monthly trend charts segmented by withdrawal reason",
              "Improved chart readability and maintainability through UI and data-binding optimizations",
              "Developed tag-based filter UI for dynamic, condition-based data visualization",
            ],
          },
        ],
        projects: [
          {
            name: "User Registration Trend Chart",
            role: "Lead Frontend Developer",
            summary: `Visualized user registration data on a monthly and yearly basis, 
              allowing administrators to identify registration trends at a glance.`,
            tech: [
              "React",
              "TypeScript",
              "TailwindCSS",
              "Recharts",
              "TanStack Query",
            ],
            bullets: [
              "Integrated registration data via API and implemented monthly/yearly bar charts",
              "Enabled data filtering and time period comparison",
              "Built responsive UI for consistent visualization across screen sizes",
            ],
          },
          {
            name: "User Withdrawal Trend Chart",
            role: "Lead Frontend Developer",
            summary: `Developed visualizations of user withdrawal data to analyze monthly and 
               yearly patterns in user churn.`,
            tech: [
              "React",
              "TypeScript",
              "TailwindCSS",
              "Recharts",
              "TanStack Query",
            ],
            bullets: [
              "Implemented bar charts for withdrawal data by month and year",
              "Handled loading and error states for improved stability",
              "Modularized chart components for reusability and easier maintenance",
            ],
          },
          {
            name: "Withdrawal Reason Distribution Chart",
            role: "Lead Frontend Developer",
            summary: `Created a donut chart visualizing withdrawal reasons from API data 
              to help identify key churn factors.`,
            tech: [
              "React",
              "TypeScript",
              "TailwindCSS",
              "Recharts",
              "TanStack Query",
            ],
            bullets: [
              "Integrated API data for withdrawal reasons (reason field)",
              "Visualized proportional data using a donut chart with color distinction",
              "Enhanced readability with tooltip and legend functionality",
            ],
          },
          {
            name: "Monthly Trend Chart by Withdrawal Reason",
            role: "Lead Frontend Developer",
            summary: `Developed charts visualizing withdrawal trends per reason 
              by month to analyze changes and identify emerging issues.`,
            tech: [
              "React",
              "TypeScript",
              "TailwindCSS",
              "Recharts",
              "TanStack Query",
            ],
            bullets: [
              "Grouped and visualized withdrawal data by reason and month",
              "Enabled comparison across multiple charts for different reasons",
              "Added filtering and legend-based visibility control features",
            ],
          },
          {
            name: "Tag Filter UI",
            role: "Lead Frontend Developer",
            summary: `Built a tag-based filter UI to help users dynamically filter chart data 
              and enhance data analysis efficiency.`,
            tech: ["React", "TypeScript", "TailwindCSS"],
            bullets: [
              "Implemented conditional data filtering based on user selections",
              "Designed intuitive UI distinguishing active and inactive states",
              "Modularized filter component for reuse across multiple chart pages",
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
            date: "Oct 2025",
          },
        ],
        links: [{ href: "https://ozflix.vercel.app", label: "OZ Flix Demo" }],
      },
      jp: {
        card: {
          characterImg: "/images/pokemon/pikachu.png",
          tagline: "共通コンポーネント·チャート·タグフィルターUI",
        },
        intro: `今回のプロジェクトでモーダルボタン、
          ツールチップ、ポップオーバーなど共通コンポーネントを製作し、 
        会員加入傾向·会員脱退傾向·脱退理由分布·脱退理由別月別傾向チャートなど主要指標視覚化ページを具現しました。
また、MSWを活用したAPI連動テストおよび実際のAPI接続作業を行い、全般的なUIの一貫性と安定性を確保しました。`,
        kpis: [
          { label: "ユーザー管理ページ", value: "完成度95%" },
          { label: "PR参加", value: "8回以上" },
        ],
        experiences: [
          {
            period: "2025年9月 - 2025年10月",
            title: "フロントエンド·デベロッパー - OZ Externship FE3",
            details: [
              "Rechartsライブラリーを活用して会員登録及び会員脱退の傾向を月別·年別チャートで視覚化",
              "APIで伝達された脱退事由データを基にドーナツチャート形態の脱退事由分布の視覚化",
              "脱退事由別の月別傾向をそれぞれの事由を基準に細分化し、チャートで実現",
              "チャート全般のUIおよびデータ連動ロジックの改善により可読性とメンテナンス性を強化",
              "タグフィルターUI製作で条件別データ照会機能を提供",
            ],
          },
        ],
        projects: [
          {
            name: "会員登録傾向チャート",
            role: "メイン フロントエンド",
            summary:
              "会員登録データを月別·年別基準で視覚化し、加入傾向を一目で把握できるチャートを具現しました。",
            tech: [
              "React",
              "TypeScript",
              "TailwindCSS",
              "Recharts",
              "TanStack Query",
            ],
            bullets: [
              "会員登録データをAPIで連動させ、月別·年別スティックチャート構成",
              "データフィルタリングおよび期間別比較機能提",
              "反応型UIで様々な解像度で視覚化を維持",
            ],
          },
          {
            name: "会員退会傾向チャート",
            role: "メイン フロントエンド",
            summary:
              "会員退会データを基に月別·年別の傾向を視覚化し、ユーザーの離脱の流れを把握できるチャートを制作しました。」、",
            tech: [
              "React",
              "TypeScript",
              "TailwindCSS",
              "Recharts",
              "TanStack Query",
            ],
            bullets: [
              "脱退データを月別·年別基準でスティックチャートを実現",
              "データローディング状態及びエラーハンドリング処理",
              "共通チャートコンポーネントの構造化による保守性の向上",
            ],
          },
          {
            name: "脱退事由分布チャート",
            role: "メイン フロントエンド",
            summary:
              "APIから受け取った脱退理由データをドーナツチャートで視覚化し、主な離脱要因を一目で確認できるように製作しました",
            tech: [
              "React",
              "TypeScript",
              "TailwindCSS",
              "Recharts",
              "TanStack Query",
            ],
            bullets: [
              "APIから脱退事由(reason)データ連動",
              "ドーナツチャートで比率の視覚化と色分けを適用",
              "ツールチップ及び凡例機能でデータ可読性を強化",
            ],
          },
          {
            name: "脱退事由別月別傾向チャート",
            role: "メイン フロントエンド",
            summary:
              "脱退事由別データを月別に視覚化し、特定理由の傾向変化を分析できるチャートを具現しました。",
            tech: [
              "React",
              "TypeScript",
              "TailwindCSS",
              "Recharts",
              "TanStack Query",
            ],
            bullets: [
              "事由別データを月別基準でグループ化後の視覚化",
              "複数のチャート構造で事由間比較可能",
              "データフィルタリングおよび凡例ベースの可視性調節機能を追加",
            ],
          },
          {
            name: "タグフィルターUI",
            role: "メイン フロントエンド",
            summary:
              "チャートデータ条件を簡単に調節できるタグベースのフィルターUIを製作し、データ分析効率を高めました。",
            tech: ["React", "TypeScript", "TailwindCSS"],
            bullets: [
              "ユーザーの選択によって条件別データフィルタリングが可能",
              "活性·非活性状態を直観的に区分できるUI構成",
              "共通フィルターコンポーネント化で他のチャートにも再利用可能",
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
    id: "bulbasaur",
    name: {
      ko: "윤경복",
      en: "Y. KYUNG BOK",
      jp: "イ・ウォニ",
    },
    role: {
      ko: "FRONTEND",
      en: "FRONTEND",
      jp: "フロントエンド開発者",
    },
    github: "https://github.com/KYUNG-BOK",
    email: "kyeongbok_0627@kakao.com",
    badge: "TEAM LEADER",
    characterImg: "/images/pokemon/bulbasaur.png",
    description: {
      ko: `공통 컴포넌트: 폼, 페이지 헤더 제작

로그인 / 리뷰 / 지원관리 / 
구인공고 관리 UI 구현
상세 조회 모달 제작

js-cookie 기반 API 
인터셉터 및 프로텍트 라우팅 구현`,
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
          characterImg: "/images/pokemon/bulbasaur.png",
          tagline: `공통 컴포넌트 · 폼/페이지 헤더 · 팀 리드`,
        },
        intro: `프로젝트 전반의 UI 완성도를 높이기 위해 
리뷰·지원관리·구인공고 관리 페이지의 개발과 유지보수를 담당했습니다.
팀 리더로서 팀원들의 개발 진행을 지원하고, 코드 리뷰 및 기능 디버깅을 통해 품질 향상에 기여했습니다.
또한, 공통 컴포넌트와 페이지 간 일관성을 유지하며 전체 UI 흐름을 총괄했습니다.`,
        kpis: [
          { label: "구인공고/지원내역,리뷰 관리 페이지", value: "완성도 95%" },
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
          characterImg: "/images/pokemon/bulbasaur.png",
          tagline: "Shared UI Components · Form/Page Header · Team Lead",
        },
        intro: `Focused on improving overall UI quality by 
      taking ownership of development and maintenance for the Review, 
      Application Management, and Recruitment Management pages. 
      As the team leader, supported team members throughout development, 
      contributed to code quality through reviews and debugging, 
      and ensured UI consistency across shared components and page flows.`,

        kpis: [
          { label: "User Management Page", value: "95% Completion" },
          { label: "PR Participation", value: "Led" },
        ],
        experiences: [
          {
            period: "Oct 2025 – Nov 2025",
            title: "OZ Externship FE3 - Frontend Team Leader",
            details: [
              "Managed PR quality through code reviews and ensured codebase consistency",
              "Supported debugging of functional and logical issues during development",
              "Coordinated project schedules and facilitated cross-team communication",
              "Proposed refactoring and feature improvements to enhance maintainability",
            ],
          },
        ],
        projects: [
          {
            name: "Sign-in Page",
            role: "Lead Frontend Developer",
            summary: `Implemented secure authentication with js-cookie to manage login state 
             and maintain session persistence.`,
            tech: ["React", "TypeScript", "js-cookie", "Vite"],
            bullets: [
              "Implemented AccessToken/RefreshToken authentication flow",
              "Implemented protected routing to block unauthorized access",
            ],
          },
          {
            name: "Recruitment Management Page",
            role: "Lead Frontend Developer",
            summary: `Developed admin interfaces for managing recruitment posts, 
            including listing, detail view, and deletion for efficient content control.`,
            tech: ["React", "TypeScript", "TailwindCSS", "TanStack Query"],
            bullets: [
              "Implemented post status filtering and pagination",
              "Connected delete API and added user-confirmation modal",
              "Maintained UI consistency via shared modal and table components",
            ],
          },
          {
            name: "Application Management Page",
            role: "Lead Frontend Developer",
            summary: `Built an admin dashboard to view and filter candidate applications 
            by application status.`,
            tech: ["React", "TypeScript", "TailwindCSS", "TanStack Query"],
            bullets: [
              "Implemented status-based filtering via GET queries",
              "Integrated MSW for API mocking to accelerate development",
            ],
          },
          {
            name: "Review Management Page",
            role: "Lead Frontend Developer",
            summary: `Created an interface to browse and filter study reviews 
            by rating and keyword.`,
            tech: ["React", "TypeScript", "TailwindCSS", "TanStack Query"],
            bullets: [
              "Implemented GET-based review listing with search and sorting",
              "Ensured UI consistency through reusable table components",
            ],
          },
        ],
        skills: ["React", "TypeScript", "TailwindCSS", "Vite"],
        education: [
          {
            school: "OZ Coding School",
            degree: "Frontend Bootcamp",
            period: "May 2025 – Nov 2025",
          },
        ],
        certifications: [
          {
            name: "OZ FE Certification",
            issuedBy: "OZ Coding School",
            date: "Nov 2025",
          },
        ],
        links: [{ href: "https://febok.vercel.app", label: "Portfolio Page" }],
      },
      jp: {
        card: {
          characterImg: "/images/pokemon/bulbasaur.png",
          tagline: "共通コンポーネント·フォーム/ページヘッダー·チームリード",
        },
        intro: `プロジェクト全般のUI完成度を高めるために 
      レビュー·支援管理·求人公告管理ページの開発とメンテナンスを担当しました。
      チームリーダーとしてチームメンバーの開発進行を支援し、
      コードレビューおよび機能デバッグを通じて品質向上に貢献しました。
      また、共通コンポーネントとページ間の一貫性を維持し、全体のUIフローを総括しました。`,

        kpis: [
          { label: "ユーザー管理ページ", value: "完成度95%" },
          { label: "PR参加", value: "主導" },
        ],
        experiences: [
          {
            period: "2025年9月 - 2025年10月",
            title: "フロントエンド·デベロッパー - OZ Externship FE3",
            details: [
              "チーム メンバー コードレビューとPR品質管理、コード一貫性の維持",
              "開発中に発生した機能エラー及びロジック問題解決支援",
              "プロジェクトスケジュール管理及び協業コミュニケーション調整",
              "リファクタリング及び機能改善の方向性の提案によりコードメンテナンス性の向上",
            ],
          },
        ],
        projects: [
          {
            name: "ログインページ",
            role: "メインフロントエンド",
            summary: `js-cookieベースの認証ロジックを実装し、ログイン状態を安全に管理し、
            セッションを維持しました`,
            tech: ["React", "TypeScript", "js-cookie", "Vite"],
            bullets: [
              "AccessToken / RefreshTokenベースの認証構造の実装",
              "Protected Routeの適用により、非認可ユーザーへのアクセスを遮断",
            ],
          },
          {
            name: "求人広告管理ページ",
            role: "メインフロントエンド",
            summary: `求人公告リスト及び詳細照会、削除機能を実装し、
            管理者が効率的に公告を管理できるように開発しました。`,
            tech: ["React", "TypeScript", "TailwindCSS", "TanStack Query"],
            bullets: [
              "公告状態別フィルタリングおよびページネーション機能の実装",
              "削除API連動及びユーザー確認モーダル処理追加",
              "共通モーダル·テーブルコンポーネントの再使用でUIの一貫性を維持",
            ],
          },
          {
            name: "サポート履歴管理ページ",
            role: "メイン フロントエンド",
            summary:
              "志願者の申請履歴を確認し、状態別にフィルタリングできる管理者専用照会ページを開発しました",
            tech: ["React", "TypeScript", "TailwindCSS", "TanStack Query"],
            bullets: [
              "サポート状態(GET)ベースの照会およびフィルター機能の実装",
              "MSWでAPI Mocking環境を構成し、開発速度を向上",
            ],
          },
          {
            name: "レビュー管理ページ",
            role: "メインフロントエンド",
            summary: `スタディレビューデータをリスト形式で照会し、
            星評価およびキーワード基準でフィルタリング可能なUIを製作しました。、
            セッションを維持しました`,
            tech: ["React", "TypeScript", "TailwindCSS", "TanStack Query"],
            bullets: [
              "レビューリスト(GET)照会および検索/並び替え機能の実装",
              "共通テーブルコンポーネントの再使用でUIの一貫性を維持",
            ],
          },
        ],
        skills: ["React", "TypeScript", "TailwindCSS", "Vite"],
        education: [
          {
            school: "OZコーディングスクール",
            degree: "フロントエンド・ブートキャンプ",
            period: "2025",
          },
        ],
        certifications: [
          {
            name: "OZ FE認証",
            issuedBy: "OZコーディングスクール",
            date: "2025-11",
          },
        ],
        links: [{ href: "https://febok.vercel.app/", label: "OZ Flix デモ" }],
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
          { label: "유저 관리 페이지", value: "완성도 99%" },
          { label: "공통 컴포넌트", value: "완성도 98%" },
          { label: "PR 참여", value: "20회" },
        ],
        experiences: [
          {
            period: "2025.09 - 2025.10",
            title: "OZ Externship FE3 - Frontend Developer",
            details: [
              "유저 관리/정보 조회/권한 변경 플로우 설계 및 구현",
              "공통 KPI 카드, 리스트, 테이블 컴포넌트 개발",
            ],
          },
        ],
        projects: [
          {
            name: "공통 컴포넌트",
            role: "메인 프론트엔드",
            summary: "테이블, KPI 카드, 리스트 공통 컴포넌트를 개발했습니다.",
            tech: ["React", "TypeScript", "TailwindCSS"],
            bullets: [
              "규칙에 맞는 공통 컴포넌트 제작을 통해 재사용성 향상",
              "제작된 공통 컴포넌트를 어떤 식으로 사용해야하는 지에 대한 아이디어 제공",
            ],
          },
          {
            name: "유저 관리 페이지",
            role: "메인 프론트엔드",
            summary:
              "회원 목록, 상세조회, 권한변경 및 탈퇴 처리 페이지를 개발했습니다.",
            tech: ["React", "TypeScript", "TailwindCSS, tanstack-query"],
            bullets: [
              "공통 테이블 컴포넌트 재사용으로 코드 중복 최소화",
              "react query 훅을 사용한 코드 가독성 증가",
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
          tagline:
            "Shared UI Components · KPI Card · User Management / Roles / Deletion",
        },
        intro: `I was responsible for shared UI components and the user management section. 
          I focused on designing reusable components such as tables, lists, and KPI cards, 
          and organized the API integration structure with long-term maintainability in mind.`,
        kpis: [
          { label: "User Management Page", value: "Completion 99%" },
          { label: "Shared Components", value: "Completion 98%" },
          { label: "PR Contributions", value: "20+" },
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
            name: "Shared Components",
            role: "Lead Frontend Developer",
            summary: `Developed shared table, KPI card, and list components to improve consistency 
              and reusability across the project.`,
            tech: ["React", "TypeScript", "TailwindCSS"],
            bullets: [
              "Enhanced component reusability by following consistent design rules",
              "Proposed best practices for effectively utilizing shared components",
            ],
          },
          {
            name: "User Management Page",
            role: "Lead Frontend Developer",
            summary: `Built user management pages for viewing user lists, checking details, 
              updating roles, and handling account deletion.`,
            tech: ["React", "TypeScript", "TailwindCSS", "TanStack Query"],
            bullets: [
              "Minimized code duplication by reusing shared table components",
              "Improved readability with React Query hooks for API integration",
              "Enhanced UX with loading states and double-click prevention logic",
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
            date: "Oct 20",
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
