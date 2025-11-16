export type DemoLang = "ko" | "en" | "jp";

export type LocalizedText = Record<DemoLang, string>;
export type LocalizedTagList = Record<DemoLang, readonly string[]>;

export interface DemoCardItem {
  id: string;
  name: LocalizedText;
  tag: LocalizedText;
  tags: LocalizedTagList;
  videos: number;
  desc: LocalizedText;
}

export const DEMO_CARDS: readonly DemoCardItem[] = [
  {
    id: "bok-components",
    name: {
      ko: "공통 컴포넌트 | 경복",
      en: "Shared UI Components | KyungBok",
      jp: "共通コンポーネント | キョンボク",
    },
    tag: {
      ko: "공통 컴포넌트 | 경복",
      en: "Shared UI Components | KyungBok",
      jp: "共通コンポーネント | キョンボク",
    },
    tags: {
      ko: ["공통 검색창", "공통 폼"],
      en: ["Shared Search Bar", "Shared Form"],
      jp: ["共通検索窓」、「共通フォーム"],
    },
    videos: 1,
    desc: {
      ko: "여러 페이지에서 재사용되는 검색창과 입력 폼을 공통 컴포넌트로 설계해, 유지보수성과 일관성을 높였습니다.",
      en: "Developed shared UI components commonly used on the page.",
      jp: "ページで共通して使用する要素を制作しました。",
    },
  },
  {
    id: "wonhee-components",
    name: {
      ko: "공통 컴포넌트 | 원희",
      en: "Shared UI Components | WonHee",
      jp: "共通コンポーネント | ウォニ",
    },
    tag: {
      ko: "공통 컴포넌트 | 원희",
      en: "Shared UI Components | WonHee",
      jp: "共通コンポーネント | ウォニ",
    },
    tags: {
      ko: ["모달", "테이블", "KPI카드"],
      en: ["Modal", "Table", "KPI Card"],
      jp: ["モーダル", "テーブル", "KPIカード"],
    },
    videos: 1,
    desc: {
      ko: "모달, 테이블, KPI 카드 등을 공통 컴포넌트로 제작해, 관리자 페이지 전반에서 일관된 UI를 제공합니다.",
      en: "Developed shared UI components commonly used on the page.",
      jp: "ページで共通して使用する要素を制作しました。",
    },
  },
  {
    id: "hy-components",
    name: {
      ko: "공통 컴포넌트 | 홍엽",
      en: "Shared UI Components | Hong Yeop",
      jp: "通コンポーネント | ホンヨプ",
    },
    tag: {
      ko: "공통 컴포넌트 | 홍엽",
      en: "Shared UI Components | Hong Yeop",
      jp: "通コンポーネント | ホンヨプ",
    },
    tags: {
      ko: ["NAVIGATION", "지원관리", "첨부파일"],
      en: ["NAVIGATION", "Application Management", "Attached File"],
      jp: ["NAVIGATION", "サポート管理", "添付ファイル"],
    },
    videos: 1,
    desc: {
      ko: "네비게이션, 지원 관리, 첨부파일 영역에서 공통으로 사용하는 UI를 정리해 사용자 흐름을 더 명확하게 구성했습니다.",
      en: "Developed shared UI components commonly used on the page.",
      jp: "ページで共通して使用する要素を制作しました。",
    },
  },
  {
    id: "danbi-components",
    name: {
      ko: "공통 컴포넌트 | 단비",
      en: "Shared UI Components | Danbi",
      jp: "共通コンポーネント | ダンビ",
    },
    tag: {
      ko: "공통 컴포넌트 | 단비",
      en: "Shared UI Components | Danbi",
      jp: "共通コンポーネント | ダンビ",
    },
    tags: {
      ko: ["토스트알림", "아코디언", "배지", "ProgressBar"],
      en: ["Toast Notification", "Accordion", "Badge", "ProgressBar"],
      jp: ["トースト通知", "アコーディオン", "バッジ", "ProgressBar"],
    },
    videos: 1,
    desc: {
      ko: "토스트 알림, 아코디언, 배지, 진행률 표시 바를 공통 컴포넌트로 구현해 여러 페이지에서 재사용할 수 있도록 설계했습니다.",
      en: "Developed shared UI components commonly used on the page.",
      jp: "ページで共通して使用する要素を制作しました。",
    },
  },
  {
    id: "hyunjin-components",
    name: {
      ko: "공통 컴포넌트 | 현진",
      en: "Shared UI Components | HyeonJin",
      jp: "共通コンポーネント | ヒョンジン",
    },
    tag: {
      ko: "공통 컴포넌트 | 현진",
      en: "Shared UI Components | HyeonJin",
      jp: "共通コンポーネント | ヒョンジン",
    },
    tags: {
      ko: ["툴팁", "모달", "팝오버"],
      en: ["Tooltip", "Modal", "Popover"],
      jp: ["ツールチップ」、「モーダル」、「ポップオーバー"],
    },
    videos: 1,
    desc: {
      ko: "툴팁, 모달, 팝오버 컴포넌트를 제작하여 사용자 인터랙션에 맞는 보조 정보를 자연스럽게 제공할 수 있도록 했습니다.",
      en: "Developed shared UI components commonly used on the page.",
      jp: "ページで共通して使用する要素を制作しました。",
    },
  },
  {
    id: "login",
    name: {
      ko: "로그인 페이지 | 경복",
      en: "Admin Login Page | Kyungbok",
      jp: "ログインページ | キョンボク",
    },
    tag: {
      ko: "로그인 페이지 | 경복",
      en: "Admin Login Page | Kyungbok",
      jp: "ログインページ | キョンボク",
    },
    tags: {
      ko: ["관리자 로그인", "프로텍트 라우터"],
      en: ["Admin Login", "Protected Route"],
      jp: ["管理者ログイン", "プロテクトルータ"],
    },
    videos: 1,
    desc: {
      ko: "관리자 권한을 인증한 사용자만 페이지에 접근할 수 있도록 프로텍트 라우터를 적용하여 보안성을 강화했습니다.",
      en: "Enhanced security by applying protected routing to allow access only for authenticated admins.",
      jp: "管理者権限を認証したユーザーだけがページにアクセスできるようにプロテクトルータを適用し、セキュリティを強化しました",
    },
  },
  {
    id: "users",
    name: {
      ko: "유저관리 페이지 | 원희",
      en: "User Management Page | WonHee",
      jp: "ユーザー管理ページ | ウォニ",
    },
    tag: {
      ko: "유저관리 페이지 | 원희",
      en: "User Management Page | WonHee",
      jp: "ユーザー管理ページ | ウォニ",
    },
    tags: {
      ko: ["유저정보", "유저 정보수정", "유저권한수정", "유저삭제"],
      en: ["User Info", "Edit Info", "Edit Permission", "Delete User"],
      jp: ["共通検索フォーム", "共通フォーム"],
    },
    videos: 1,
    desc: {
      ko: "회원 정보를 확인하고, 상태나 권한을 수정하거나 필요에 따라 계정을 삭제할 수 있는 페이지입니다.",
      en: "A page for viewing, editing, and managing user information, roles, and account status.",
      jp: "会員情報を確認し、状態や権限を変更したり、必要に応じてアカウントを削除できるページです。",
    },
  },
  {
    id: "withdrawal",
    name: {
      ko: "탈퇴관리 페이지 | 홍엽",
      en: "Withdrawal Management Page | Hong Yeop",
      jp: "退会管理ページ | ホンヨプ",
    },
    tag: {
      ko: "탈퇴관리 페이지 | 홍엽",
      en: "Withdrawal Management Page | Hong Yeop",
      jp: "退会管理ページ | ホンヨプ",
    },
    tags: {
      ko: ["탈퇴관리", "탈퇴유저 복구"],
      en: ["Withdrawal Management", "User Recovery"],
      jp: ["共通検索フォーム", "共通フォーム"],
    },
    videos: 1,
    desc: {
      ko: "탈퇴한 회원 목록을 조회하고, 요청 시 계정을 복구해 다시 활성화할 수 있는 페이지입니다.",
      en: "A page to view and manage withdrawn users and restore accounts when needed.",
      jp: "退会したユーザーの一覧を確認し、復帰を希望するユーザーのアカウントを復元できるページです。",
    },
  },
  {
    id: "dashboard",
    name: {
      ko: "대시보드 페이지 | 현진",
      en: "Dashboard Page | Hyunjin",
      jp: "ダッシュボードページ | ヒョンジン",
    },
    tag: {
      ko: "대시보드 페이지 | 현진",
      en: "Dashboard Page | Hyunjin",
      jp: "ダッシュボードページ | ヒョンジン",
    },
    tags: {
      ko: ["데이터 시각화", "회원가입/탈퇴 추세"],
      en: ["Data Visualization", "Signup/Withdrawal Trends"],
      jp: ["共通検索フォーム", "共通フォーム"],
    },
    videos: 1,
    desc: {
      ko: "회원가입·탈퇴 추세와 주요 지표들을 시각화하여 서비스 운영 현황을 한눈에 파악할 수 있는 대시보드입니다.",
      en: "A dashboard visualizing signup and withdrawal trends to help admins understand service performance at a glance.",
      jp: "会員登録・退会の推移や主要指標を可視化し、サービス運営状況を一目で把握できるダッシュボードです。",
    },
  },
  {
    id: "lecture",
    name: {
      ko: "강의관리 페이지 | 단비",
      en: "Lecture Management Page | Danbi",
      jp: "講義管理ページ | ダンビ",
    },
    tag: {
      ko: "강의관리 페이지 | 단비",
      en: "Lecture Management Page | Danbi",
      jp: "講義管理ページ | ダンビ",
    },
    tags: {
      ko: ["강의 관리", "강의 상세정보"],
      en: ["Lecture Management", "Lecture Details"],
      jp: ["共通検索フォーム", "共通フォーム"],
    },
    videos: 1,
    desc: {
      ko: "등록된 강의를 확인하고 각 강의의 상세 정보와 상태를 조회할 수 있는 강의 관리 페이지입니다.",
      en: "A page for viewing lecture data, including status and detailed lecture information.",
      jp: "登録された講義を確認し、各講義の詳細情報や状態を閲覧できる講義管理ページです。",
    },
  },
  {
    id: "studygroup",
    name: {
      ko: "스터디그룹관리 페이지 | 단비",
      en: "Study Group Management Page | Danbi",
      jp: "スタディグループ管理ページ | ダンビ",
    },
    tag: {
      ko: "스터디그룹관리 페이지 | 단비",
      en: "Study Group Management Page | Danbi",
      jp: "スタディグループ管理ページ | ダンビ",
    },
    tags: {
      ko: ["스터디 그룹관리", "스터디 그룹상태 확인"],
      en: ["Study Group Management", "Status Monitoring"],
      jp: ["共通検索フォーム", "共通フォーム"],
    },
    videos: 1,
    desc: {
      ko: "운영 중인 스터디 그룹들의 상태와 구성원을 확인하고 진행 상황을 파악할 수 있는 관리 페이지입니다.",
      en: "A page for monitoring study group members, progress, and overall group activity.",
      jp: "運営中のスタディグループの状態やメンバーを確認し、進行状況を把握できる管理ページです。",
    },
  },
  {
    id: "studyreview",
    name: {
      ko: "스터디리뷰관리 페이지 | 경복",
      en: "Study Review Management Page | Kyungbok",
      jp: "スタディレビュー管理ページ | キョンボク",
    },
    tag: {
      ko: "스터디리뷰관리 페이지 | 경복",
      en: "Study Review Management Page | Kyungbok",
      jp: "スタディレビュー管理ページ | キョンボク",
    },
    tags: {
      ko: ["리뷰확인"],
      en: ["Review Monitoring"],
      jp: ["共通検索フォーム", "共通フォーム"],
    },
    videos: 1,
    desc: {
      ko: "사용자들이 남긴 스터디 리뷰를 확인하고 검토할 수 있는 페이지입니다.",
      en: "A page for viewing and reviewing user-submitted study feedback.",
      jp: "ユーザーが残したスタディレビューを閲覧・確認できるページです。",
    },
  },
  {
    id: "applications",
    name: {
      ko: "지원내역관리 페이지 | 경복",
      en: "Application Management Page | Kyungbok",
      jp: "応募履歴管理ページ | キョンボク",
    },
    tag: {
      ko: "지원내역관리 페이지 | 경복",
      en: "Application Management Page | Kyungbok",
      jp: "応募履歴管理ページ | キョンボク",
    },
    tags: {
      ko: ["지원내역관리"],
      en: ["Application Management"],
      jp: ["共通検索フォーム", "共通フォーム"],
    },
    videos: 1,
    desc: {
      ko: "각 공고에 지원된 내역을 확인하고 지원자의 상세 정보를 살펴볼 수 있는 관리 페이지입니다.",
      en: "A page for reviewing user applications and applicant details for each recruitment post.",
      jp: "各募集公告に対して応募された履歴を確認し、応募者の詳細情報も閲覧できる管理ページです。",
    },
  },
  {
    id: "recruitment",
    name: {
      ko: "구인공고관리 페이지 | 현진, 경복",
      en: "Recruitment Management Page | Hyunjin, Kyungbok",
      jp: "求人公告管理ページ | ヒョンジン・キョンボク",
    },
    tag: {
      ko: "구인공고관리 페이지 | 현진, 경복",
      en: "Recruitment Management Page | Hyunjin, Kyungbok",
      jp: "求人公告管理ページ | ヒョンジン・キョンボク",
    },
    tags: {
      ko: ["태그필터", "구인공고확인", "공고 삭제"],
      en: ["Tag Filter", "Post Review", "Post Deletion"],
      jp: ["共通検索フォーム", "共通フォーム"],
    },
    videos: 1,
    desc: {
      ko: "등록된 구인 공고를 확인하고, 태그를 이용해 원하는 공고를 빠르게 찾을 수 있으며 운영 기준에 맞지 않는 공고나 이미 종료된 공고는 삭제할 수 있는 관리 페이지입니다.",
      en: "A page for managing recruitment posts, featuring tag-based filtering and post deletion to maintain board quality.",
      jp: "登録されたスタディ募集公告を管理し、タグフィルタで目的の公告を素早く探せるほか、ポリシーに合わない公告や終了済みの公告を削除できる管理ページです。",
    },
  },
] as const;

export type DemoId = (typeof DEMO_CARDS)[number]["id"];
