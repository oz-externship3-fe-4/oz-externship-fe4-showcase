import type { TroubleItem } from "../../types/troubleshooting";

export const TROUBLES: TroubleItem[] = [
  {
    id: "recruit-detail-modal-missing",
    icon: "Hammer",
    title: {
      ko: "모달 내 상세내용이 렌더링 안되는 문제",
      en: "Recruitment detail modal not rendering",
      jp: "募集詳細モーダルが表示されない",
    },
    page: {
      ko: "구인 공고 관리 페이지",
      en: "Recruitment admin page",
      jp: "募集管理ページ",
    },
    owner: { ko: "윤경복", en: "Kyungbok", jp: "キョンボク" },
    tags: ["dto", "runtime-error", "modal", "mapper"],
    sections: [
      {
        heading: { ko: "증상", en: "Symptom", jp: "症状" },
        body: {
          ko: [
            "관리자 공고 목록에서 행 클릭 시 상세 모달이 렌더링 되었으나, 일부 필드의 내용들이 렌더링 되지 않는 문제가 발생함",
            "리스트 API 응답 및, 상세 API 응답도 네트워크 탭에서 확인이 되고 있엇습니다.",
            "하지만 화면에는 디테일 정보(내용, 컨텐츠, 강의 목록, 지원자 목록)가 렌더링 되지 않고 있었습니다.",
          ].join("\n"),
          en: [
            "When clicking a recruitment row, the detail modal opens but some sections look empty or do not render.",
            "List API response is fine and detail API response exists in the Network tab.",
            "However, detail sections (content, lectures, applicants, etc.) are not visible on the UI.",
          ].join("\n"),
          jp: [
            "管理者募集一覧で行をクリックすると詳細モーダルが開くはずだが、中身が空に見える、または一部セクションが表示されない。",
            "一覧APIレスポンスは正常で、詳細APIレスポンスもNetworkタブで確認できる。",
            "しかしUI上では詳細情報（内容、講義一覧、応募者一覧など）が表示されない。",
          ].join("\n"),
        },
      },
      {
        heading: { ko: "원인", en: "Cause", jp: "原因" },
        body: {
          ko: [
            "코드에서는 `RecruitmentDetailDTO`에 `study_lectures` 필드가 항상 있다고 가정하고 바로 .map()을 호출함.",
            "하지만 실제 서버 응답에는 `study_lectures`가 없어서 `undefined.map(...)`가 실행되며 런타임 에러 발생.",
            "이 에러 때문에 `mapRecruitmentDetailDTO` 전체가 실패하고, 모달 렌더링도 함께 깨져서 화면상 디테일이 안 뜨는 것처럼 보였습니다.",
          ].join("\n"),
          en: [
            "Code assumed `study_lectures` always exists on `RecruitmentDetailDTO` and called `.map()` directly.",
            "But the real server response does not include `study_lectures`, so `undefined.map(...)` throws at runtime.",
            'This breaks `mapRecruitmentDetailDTO` and prevents the modal from rendering, making it look like "no detail data".',
          ].join("\n"),
          jp: [
            "コード側では `RecruitmentDetailDTO` に `study_lectures` が必ずある前提で `.map()` を呼び出していた。",
            "しかし実際のサーバーレスポンスには `study_lectures` が存在せず、`undefined.map(...)` でランタイムエラー。",
            "その結果 `mapRecruitmentDetailDTO` 全体が失敗し、モーダルレンダリングも巻き添えになって詳細が表示されないように見える。",
          ].join("\n"),
        },
      },
      {
        heading: {
          ko: "처리 단계1) DTO에서 study_lectures를 옵셔널로 지정하였습니다.",
          en: "Fix 1) Make study_lectures optional in DTO",
          jp: "解決1) DTOで study_lectures をオプションにする",
        },
        body: {
          ko: "실제 응답에서 항상 내려오지 않는 필드는 DTO에서 옵셔널(?)로 정의해 방어적으로 처리하였습니다.",
          en: "If a field is not always present in the real response, mark it as optional (`?`) in the DTO.",
          jp: "レスポンスに必ず含まれないフィールドは、DTO側でオプション(`?`)として定義し、防御的に扱います。",
        },
        codeLang: "tsx",
        code: `
export interface RecruitmentDetailDTO extends Omit<RecruitmentDTO, "tags"> {
  uuid: string;
  content: string;
  attachments: RecruitmentAttachmentDTO[];
  expected_headcount: number;
  estimated_fee: number;
  study_lectures?: RecruitmentLectureDTO[]; // optional
  tags: RecruitmentTagDTO[];
  is_closed: boolean;
  applications: ApplicationApi[];
  study_group?: StudyGroupDTO | null;
}
      `.trim(),
      },
      {
        heading: {
          ko: "처리 단계 2) 매퍼에서 안전하게 map을 호출하였습니다.",
          en: "Fix 2) Safely call map in the mapper",
          jp: "解決2) マッパーで安全に map を呼ぶ",
        },
        body: {
          ko: [
            "`ststudy_lectures`가 없을 수 있는 상황이 있기에  `?? []`로 기본값을 주고 `.map()`을 호출하였습니다.",
            "이 과정에서 다른 배열 필드(`applications` 등)도 동일한 패턴으로 방어할 수 있다는 것을 깨닫게 되었습니다.",
          ].join("\n"),
          en: [
            "Since `study_lectures` may be missing, use `?? []` before calling `.map()`.",
            "You can apply the same pattern to other array fields like `attachments`, `applications`, etc.",
          ].join("\n"),
          jp: [
            "`study_lectures` が存在しない場合もあるため、`.map()` の前に `?? []` でデフォルト値を与えます。",
            "`attachments` や `applications` など他の配列フィールドにも同じパターンを適用できます。",
          ].join("\n"),
        },
        codeLang: "tsx",
        code: `
export const mapRecruitmentDetailDTO = (
  detailDto: RecruitmentDetailDTO
): RecruitmentDetail => {
  const baseUi: Recruitment = mapRecruitmentDTO({
    ...detailDto,
    tags: detailDto.tags.map((tag) => tag.name),
  });

  const attachments = (detailDto.attachments ?? []).map((attachment) => ({
    fileName: attachment.file_name,
    fileUrl: attachment.file_url,
  }));

  const lectures = (detailDto.study_lectures ?? []).map((lecture) => ({
    thumbnail: lecture.thumbnail_img_url ?? "",
    title: lecture.title,
    instructor: lecture.instructor,
    link: lecture.url_link,
  }));

  const applicationsUi = (detailDto.applications ?? []).map((applicationApi) =>
    mapApplicationApiToUi(applicationApi)
  );

  const studyGroupUi =
    detailDto.study_group != null
      ? mapStudyGroupDTO(detailDto.study_group)
      : null;

  return {
    ...baseUi,
    uuid: detailDto.uuid,
    content: detailDto.content,
    attachments,
    expectedHeadcount: detailDto.expected_headcount,
    estimatedFee: detailDto.estimated_fee,
    lectures,
    isClosed: detailDto.is_closed,
    applications: applicationsUi,
    studyGroup: studyGroupUi,
  };
};
      `.trim(),
      },
    ],
  },
  {
    id: "vercel-org-permission-cli-deploy",
    icon: "Network",
    title: {
      ko: "Vercel 배포 시 GitHub Organization 권한 문제",
      en: "Vercel deploy blocked by GitHub Organization permissions",
      jp: "VercelデプロイがGitHub組織の権限でブロックされる",
    },
    page: {
      ko: "배포 · 인프라",
      en: "Deployment / Infra",
      jp: "デプロイ・インフラ",
    },
    owner: { ko: "윤경복", en: "Kyungbok", jp: "キョンボク" },
    tags: ["vercel", "github", "deployment", "cli", "routing"],
    sections: [
      {
        heading: { ko: "증상", en: "Symptom", jp: "症状" },
        body: {
          ko: [
            "Vercel에서 프로젝트를 배포하려고 할 때 GitHub Organization 권한 문제로 연결/배포가 막힘.",
            "GitHub 리포지토리는 존재하지만, Vercel 프로젝트 생성 또는 연결 단계에서 에러가 발생해 자동 배포 구성이 되지 않음.",
            "라우팅 설정이 없어 새로고침 시 404가 뜨는 등 SPA 라우팅 문제도 함께 발생할 수 있음.",
          ].join("\n"),
          en: [
            "When trying to deploy to Vercel, deployment is blocked due to GitHub Organization permission issues.",
            "The GitHub repository exists, but Vercel fails to link or create the project properly, so auto-deploy cannot be set up.",
            "Without proper routing config, refreshing on nested routes causes 404 errors (SPA routing issue).",
          ].join("\n"),
          jp: [
            "Vercelでプロジェクトをデプロイしようとすると、GitHub組織の権限問題でブロックされる。",
            "GitHubリポジトリ自体は存在するが、Vercel側でのプロジェクト作成・リンク時にエラーとなり、自動デプロイが設定できない。",
            "ルーティング設定がない場合、SPAでリロードすると404が発生する問題もあった。",
          ].join("\n"),
        },
      },
      {
        heading: { ko: "원인", en: "Cause", jp: "原因" },
        body: {
          ko: [
            "Vercel에서 GitHub Organization에 접근할 권한이 충분히 부여되지 않아, 레포지토리 연동 및 자동 배포 구성이 막힘.",
            "또한 Vite 기반 SPA를 Vercel에 올릴 때, 별도의 `rewrites`/`base` 설정이 없으면 새로고침 시 404가 발생할 수 있음.",
          ].join("\n"),
          en: [
            "Vercel does not have sufficient permission to access the GitHub Organization, so repository linking and auto-deploy setup are blocked.",
            "For a Vite-based SPA, missing `rewrites`/`base` config can also cause 404 errors on refresh.",
          ].join("\n"),
          jp: [
            "VercelにGitHub組織への十分な権限が付与されておらず、リポジトリ連携や自動デプロイ設定がブロックされていた。",
            "また、ViteベースのSPAでは、`rewrites` や `base` 設定がないとリロード時に404が発生することがある。",
          ].join("\n"),
        },
      },
      {
        heading: {
          ko: "처리 단계 1) vercel.json으로 SPA 라우팅 처리",
          en: "Step 1) Handle SPA routing via vercel.json",
          jp: "手順1) vercel.jsonでSPAルーティングを設定",
        },
        body: {
          ko: "Vercel에서 새로고침 시에도 항상 `index.html`로 라우팅되도록 `vercel.json`을 추가했습니다.",
          en: "Added `vercel.json` so that all routes rewrite to `index.html` for SPA behavior.",
          jp: "`vercel.json` を追加し、リロード時も常に `index.html` にリライトされるようにした。",
        },
        codeLang: "json",
        code: `{
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}
      `.trim(),
      },
      {
        heading: {
          ko: "처리 단계 2) vite.config.ts에서 base 설정",
          en: "Step 2) Set base in vite.config.ts",
          jp: "手順2) vite.config.tsでbaseを設定",
        },
        body: {
          ko: "배포 경로 기준을 명확히 하기 위해 Vite 설정에 `base: '/'`를 추가했습니다.",
          en: "To clarify the deployment base path, added `base: '/'` to Vite config.",
          jp: "デプロイ時のパス基準を明確にするため、Vite設定に `base: '/'` を追加した。",
        },
        codeLang: "ts",
        code: `
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/", // Vercel 배포 기준 경로
  plugins: [react(), tailwindcss()],
});
      `.trim(),
      },
      {
        heading: {
          ko: "처리 단계 3) Vercel CLI로 직접 배포",
          en: "Step 3) Deploy via Vercel CLI",
          jp: "手順3) Vercel CLIで直接デプロイ",
        },
        body: {
          ko: [
            "웹 대시보드에서 Organization 권한 문제로 막히는 경우, CLI를 통해 직접 배포를 진행했습니다.",
            "처음 `npx vercel --prod`를 실행하며, 로그인 · 프로젝트 생성 · GitHub 레포 연결 과정을 순서대로 진행하여 문제를 우회했습니다.",
          ].join("\n"),
          en: [
            "When blocked by Organization permission issues in the web dashboard, deployment was done directly via CLI.",
            "On the first `npx vercel --prod` run, went through login, project setup, and GitHub linking to bypass the restriction.",
          ].join("\n"),
          jp: [
            "ダッシュボード側で組織権限の問題によりブロックされたため、CLIから直接デプロイを行った。",
            "最初の `npx vercel --prod` 実行時に、ログイン→プロジェクト作成→GitHub連携の流れで設定を完了し、問題を回避した。",
          ].join("\n"),
        },
        codeLang: "bash",
        code: `
# 1) Vercel CLI 설치
npm install -g vercel

# 2) 프로덕션 배포 시작
npx vercel --prod
      `.trim(),
      },
    ],
  },

  {
    id: "auth-refresh-infinite-loop",
    icon: "ServerCrash",
    title: {
      ko: "리프레시 토큰 실패 시 무한 요청 루프 발생",
      en: "Infinite request loop caused by failed token refresh",
      jp: "リフレッシュ失敗による無限リクエストループ",
    },
    page: {
      ko: "인증 · 로그인",
      en: "Auth / Login",
      jp: "認証・ログイン",
    },
    owner: { ko: "윤경복", en: "Kyungbok", jp: "キョンボク" },
    tags: ["axios", "token", "refresh", "auth", "401-loop"],
    sections: [
      {
        heading: { ko: "증상", en: "Symptom", jp: "症状" },
        body: {
          ko: [
            "Access Token이 만료되면 자동으로 Refresh Token 요청을 보내도록 구현해두었으나,",
            "Refresh 요청 자체가 401을 반환하는 상황에서 동일 요청이 무한히 반복되는 문제가 발생했습니다.",
            "로그인 페이지로 정상적으로 이동하지 못하고, 네트워크 탭에는 동일한 API가 끝없이 반복 호출되었습니다.",
          ].join("\n"),
        },
      },
      {
        heading: { ko: "원인", en: "Cause", jp: "原因" },
        body: {
          ko: [
            "`originalConfig._retry` 플래그가 적절히 설정되지 않아,",
            "Refresh 요청이 실패했음에도 같은 인터셉터 로직이 다시 실행되어 동일 요청이 계속 재시도되고 있었습니다.",
            "또한 catch 블록에서 리프레시 실패 상황을 명확하게 분기하지 않아, 재시도를 멈추지 못하고 무한 루프가 발생했습니다.",
          ].join("\n"),
        },
      },
      {
        heading: {
          ko: "처리 단계 1) _retry 플래그로 무한 재요청 방지",
          en: "Fix 1) Use originalConfig._retry to prevent infinite retry",
          jp: "解決1) originalConfig._retryで無限リトライ防止",
        },
        body: {
          ko: "`_retry` 값을 가장 먼저 설정해 동일 요청이 반복되지 않도록 막았습니다.",
        },
        codeLang: "tsx",
        code: `
const originalConfig = err.config as
  | (typeof err.config & { _retry?: boolean })
  | undefined;

if (!originalConfig || originalConfig._retry) {
  return Promise.reject(err);
}

originalConfig._retry = true;
      `.trim(),
      },
      {
        heading: {
          ko: "처리 단계 2) 리프레시 실패 시 즉시 로그아웃 처리",
          en: "Fix 2) Logout immediately on refresh failure",
          jp: "解決2) リフレッシュ失敗時は即ログアウト",
        },
        body: {
          ko: "`Refresh Token` 요청이 실패한 경우, 토큰을 즉시 삭제하고 로그인 페이지로 이동하도록 명확하게 분기 처리했습니다.",
        },
        codeLang: "tsx",
        code: `
catch (refreshError) {
  console.error("리프레시 토큰 불러오기 실패", refreshError);
  removeAccessToken();
  window.location.replace("/login");
  return Promise.reject(refreshError);
}
      `.trim(),
      },
      {
        heading: {
          ko: "처리 단계 3) 로그아웃 로직을 공통 함수로 분리",
          en: "Fix 3) Extract logout logic into standalone function",
          jp: "解決3) ログアウト処理を関数に分離",
        },
        body: {
          ko: "로그아웃 동작을 여러 곳에서 재사용할 수 있도록 `logout` 함수를 별도로 분리했습니다.",
        },
        codeLang: "ts",
        code: `
export const logout = () => {
  removeAccessToken();
  window.location.replace("/login");
};
      `.trim(),
      },
    ],
  },
  {
    id: "auth-expire",
    icon: "Shield",
    title: {
      ko: "토큰 만료 시 무한 리다이렉트",
      en: "Infinite redirect on token expire",
      jp: "トークン失効で無限リダイレクト",
    },
    page: { ko: "유저 관리", en: "User admin", jp: "ユーザー管理" },
    owner: { ko: "홍열", en: "Hongyeol", jp: "ホンヨル" },
    tags: ["auth", "axios-interceptor"],
    sections: [
      {
        heading: { ko: "해결", en: "Fix", jp: "解決" },
        body: {
          ko: "401에서 refresh→실패 시 once 플래그로 추가 시도 차단, navigate 전 글로벌 가드.",
          en: "On 401 try refresh; if fails, block further tries with a flag, guard navigate.",
          jp: "401でrefresh、失敗時はフラグで再試行ブロック。",
        },
      },
    ],
  },
  {
    id: "list-scroll-restore",
    icon: "ListChecks",
    title: {
      ko: "목록 스크롤 위치 초기화",
      en: "List scroll resets",
      jp: "リストのスクロール位置が初期化",
    },
    page: { ko: "구인 공고 관리", en: "Recruit admin", jp: "募集管理" },
    owner: { ko: "서단비", en: "Seodanbi", jp: "ソダンビ" },
    tags: ["ux", "router"],
    sections: [
      {
        heading: { ko: "해결", en: "Fix", jp: "解決" },
        body: {
          ko: "라우터 state에 scrollTop 보관/복구, 가상화 라이브러리 사용 고려.",
          en: "Keep/restore scrollTop in router state; consider virtualization.",
          jp: "router stateにscrollTop保存・復元、仮想化も検討。",
        },
      },
    ],
  },
  {
    id: "img-lcp",
    icon: "Eye",
    title: {
      ko: "LCP 이미지 최적화",
      en: "Optimize LCP image",
      jp: "LCP画像最適化",
    },
    page: { ko: "메인", en: "Home", jp: "ホーム" },
    owner: { ko: "김현진", en: "Kim HJ", jp: "キムHJ" },
    tags: ["web-vitals", "perf"],
    sections: [
      {
        heading: { ko: "해결", en: "Fix", jp: "解決" },
        body: {
          ko: "width/height 고정, preload/prefetch, modern format(webp/avif).",
          en: "Set width/height, preload/prefetch, webp/avif.",
          jp: "幅/高さ指定、preload、webp/avif。",
        },
      },
    ],
  },
  {
    id: "server-5xx",
    icon: "ServerCrash",
    title: {
      ko: "서버 5xx 핸들링",
      en: "Handle server 5xx",
      jp: "サーバー5xx対応",
    },
    page: { ko: "공통", en: "Common", jp: "共通" },
    owner: { ko: "이원희", en: "Lee WH", jp: "イ・ウォニ" },
    tags: ["error-boundary", "toast"],
    sections: [
      {
        heading: { ko: "해결", en: "Fix", jp: "解決" },
        body: {
          ko: "에러 바운더리+토스트/재시도 버튼, 사용자 친화 문구로 치유.",
          en: "Error boundary + toast/retry; user-friendly copy.",
          jp: "エラーバウンダリ＋トースト/再試行。",
        },
      },
    ],
  },
  {
    id: "form-validate",
    icon: "AlertCircle",
    title: {
      ko: "폼 검증 타이밍 문제",
      en: "Form validation timing",
      jp: "フォーム検証タイミング",
    },
    page: { ko: "지원 관리", en: "Application admin", jp: "応募管理" },
    owner: { ko: "이원희", en: "Lee WH", jp: "イ・ウォニ" },
    tags: ["react-hook-form", "zod"],
    sections: [
      {
        heading: { ko: "해결", en: "Fix", jp: "解決" },
        body: {
          ko: "onBlur/onSubmit 전략 분리, resolver에서 debounce.",
          en: "Split onBlur/onSubmit; debounce in resolver.",
          jp: "onBlur/onSubmit分離、resolverでdebounce。",
        },
      },
    ],
  },
  {
    id: "debounce",
    icon: "FileClock",
    title: {
      ko: "검색 디바운스 미작동",
      en: "Debounce not working",
      jp: "デバウンスが効かない",
    },
    page: { ko: "리뷰 관리", en: "Review admin", jp: "レビュー管理" },
    owner: { ko: "홍열", en: "Hongyeol", jp: "ホンヨル" },
    tags: ["useCallback", "stale-closure"],
    sections: [
      {
        heading: { ko: "해결", en: "Fix", jp: "解決" },
        body: {
          ko: "useMemo로 debouncedFn 생성, 의존성 최소화.",
          en: "Create debouncedFn with useMemo; minimize deps.",
          jp: "useMemoでdebouncedFn生成、依存最小化。",
        },
      },
    ],
  },
  {
    id: "comment-ui",
    icon: "MessageCircle",
    title: {
      ko: "코멘트 입력 UX",
      en: "Comment input UX",
      jp: "コメント入力UX",
    },
    page: { ko: "리뷰 관리", en: "Review admin", jp: "レビュー管理" },
    owner: { ko: "서단비", en: "Seodanbi", jp: "ソダンビ" },
    tags: ["textarea", "autosize"],
    sections: [
      {
        heading: { ko: "해결", en: "Fix", jp: "解決" },
        body: {
          ko: "textarea 자동높이, 입력 중 Ctrl+Enter 제출, ESC 취소.",
          en: "Auto-resize, Ctrl+Enter submit, ESC cancel.",
          jp: "自動高さ、Ctrl+Enterで送信、ESCでキャンセル。",
        },
      },
    ],
  },
  {
    id: "comment-ui",
    icon: "MessageCircle",
    title: {
      ko: "코멘트 입력 UX",
      en: "Comment input UX",
      jp: "コメント入力UX",
    },
    page: { ko: "리뷰 관리", en: "Review admin", jp: "レビュー管理" },
    owner: { ko: "서단비", en: "Seodanbi", jp: "ソダンビ" },
    tags: ["textarea", "autosize"],
    sections: [
      {
        heading: { ko: "해결", en: "Fix", jp: "解決" },
        body: {
          ko: "textarea 자동높이, 입력 중 Ctrl+Enter 제출, ESC 취소.",
          en: "Auto-resize, Ctrl+Enter submit, ESC cancel.",
          jp: "自動高さ、Ctrl+Enterで送信、ESCでキャンセル。",
        },
      },
    ],
  },
  {
    id: "comment-ui",
    icon: "MessageCircle",
    title: {
      ko: "코멘트 입력 UX",
      en: "Comment input UX",
      jp: "コメント入力UX",
    },
    page: { ko: "리뷰 관리", en: "Review admin", jp: "レビュー管理" },
    owner: { ko: "서단비", en: "Seodanbi", jp: "ソダンビ" },
    tags: ["textarea", "autosize"],
    sections: [
      {
        heading: { ko: "해결", en: "Fix", jp: "解決" },
        body: {
          ko: "textarea 자동높이, 입력 중 Ctrl+Enter 제출, ESC 취소.",
          en: "Auto-resize, Ctrl+Enter submit, ESC cancel.",
          jp: "自動高さ、Ctrl+Enterで送信、ESCでキャンセル。",
        },
      },
    ],
  },
  {
    id: "comment-ui",
    icon: "MessageCircle",
    title: {
      ko: "코멘트 입력 UX",
      en: "Comment input UX",
      jp: "コメント入力UX",
    },
    page: { ko: "리뷰 관리", en: "Review admin", jp: "レビュー管理" },
    owner: { ko: "서단비", en: "Seodanbi", jp: "ソダンビ" },
    tags: ["textarea", "autosize"],
    sections: [
      {
        heading: { ko: "해결", en: "Fix", jp: "解決" },
        body: {
          ko: "textarea 자동높이, 입력 중 Ctrl+Enter 제출, ESC 취소.",
          en: "Auto-resize, Ctrl+Enter submit, ESC cancel.",
          jp: "自動高さ、Ctrl+Enterで送信、ESCでキャンセル。",
        },
      },
    ],
  },
];
