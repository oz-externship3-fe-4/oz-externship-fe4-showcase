import type { TroubleItem } from "../../types/troubleshooting";
// 영상 잇을 경우 이거 중간에 추가하믄됨
// video: {
//   basePath: "/videos/troubleshooting/vercel-org-permission-cli-deploy",
//   label: {
//     ko: "Vercel CLI로 우회 배포한 과정 데모",
//     en: "Demo: deploying via Vercel CLI to bypass Org permission issue",
//     jp: "Vercel CLIで組織権限問題を回避してデプロイしたデモ",
//   },
// },
export const TROUBLES: TroubleItem[] = [
  {
    id: "recruit-detail-modal-missing",
    icon: "Hammer",
    title: {
      ko: "모달 내 상세내용이 렌더링 안되는 문제",
      en: "Recruitment detail modal not rendering",
      jp: "テーマ:求人広告の詳細を見る モーダル内の一部フィールドレンダリングされない問題が発生",
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
            "管理者公告リストで行をクリックすると詳細モーダルがレンダリングされたが、一部フィールドの内容がレンダリングされない問題が発生する",
            "リストAPI応答および詳細API応答もネットワークタブで確認されていました。",
            "しかし、画面にはディテール情報(内容、コンテンツ、講義リスト、志願者リスト)がレンダリングされていませんでした。",
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
            "コードでは、'RecruitmentDetailDTO'に'study_lectures'フィールドが常にあると仮定してすぐに'。map()`を呼び出す。",
            "しかし、実際のサーバー応答には「study_lectures」がないため、「undefined.map(...)」が実行され、ランタイムエラーが発生。",
            "このエラーのため、「mapRecruitmentDetailDTO」全体が失敗し、モーダルレンダリングも同時に壊れて画面上のディテールが表示されないように見えました。",
          ].join("\n"),
        },
      },
      {
        heading: {
          ko: "처리 단계1) DTO에서 study_lectures를 옵셔널로 지정하였습니다.",
          en: "Fix 1) Make study_lectures optional in DTO",
          jp: "処理段階 1) DTOでstudy_lecturesをオプショナルに指定しました。",
        },
        body: {
          ko: "실제 응답에서 항상 내려오지 않는 필드는 DTO에서 옵셔널(?)로 정의해 방어적으로 처리하였습니다.",
          en: "If a field is not always present in the real response, mark it as optional (`?`) in the DTO.",
          jp: "実際の応答から常に降りてこないフィールドは、DTOでオプショナル(`?`)と定義し、防御的に処理しました。",
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
          jp: "処理段階 2) マップから安全にマップを呼び出しました。",
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
            "`study_lectures`がないかもしれない状況があるから`?? []`で基本値を与えて。`map()`を呼び出し",
            "この過程で、他の配列フィールド`(applications`など)`も同じパターンで防御できるという ことに気づきました。",
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
      jp: "テーマ:VERCEL配布時、GitHubと連動しない問題が発生",
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
            "Vercelでプロジェクトを配布しようとした時、GitHub Organizationの権限問題で接続/配布が滞る問題が発生しました。",
            "GitHubレポジトリは存在しますが, Vercelプロジェクトの作成および接続段階でエラーが発生し, 自動的に配布されませんでした。",
            "ルーティング設定がされておらず, 更新時に404が表示される問題も発生しました。",
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
            "VercelでGitHub Organizationにアクセスする権限が十分に与えられていなかったため、 レポジット連動ができなくなったことが確認されました",
            "また、ViteベースのSPAをVercelにアップロードする際, 別途の'rewrites'/'base'設定がない場合、更新時に404が発生していました。",
          ].join("\n"),
        },
      },
      {
        heading: {
          ko: "처리 단계 1) vercel.json으로 SPA 라우팅 처리",
          en: "Step 1) Handle SPA routing via vercel.json",
          jp: "処理段階 1) vercel.jsonでSPAルーティング処理",
        },
        body: {
          ko: "Vercel에서 새로고침 시에도 항상 `index.html`로 라우팅되도록 `vercel.json`을 추가했습니다.",
          en: "Added `vercel.json` so that all routes rewrite to `index.html` for SPA behavior.",
          jp: "`Vercel`で更新時にも常に`「index.html」`にルーティングされるように`「vercel.json」`を追加しました。",
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
          jp: "処理段階2) vite.config.tsでbase設定",
        },
        body: {
          ko: "배포 경로 기준을 명확히 하기 위해 Vite 설정에 `base: '/'`를 추가했습니다.",
          en: "To clarify the deployment base path, added `base: '/'` to Vite config.",
          jp: "配布経路の基準を明確にするために、Vie設定に`「base:'/'」`を追加しました。",
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
          jp: "処理段階 3) Vercel CLIで直接配布",
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
            "VercelウェブでOrganization権限の問題で行き詰まる場合、CLIを通じて直接配布を進める方法があるして進めました。",
            "最初に`npx vercel --prod`を実行し、ログイン·プロジェクト作成·GitHubレポ接続過程を順番に進めました。",
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
      jp: "テーマ: リフレッシュトークンの発行に失敗した場合、無限要請ループが発生",
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
          en: [
            "`originalConfig._retry` 플래그가 적절히 설정되지 않아,",
            "Refresh 요청이 실패했음에도 같은 인터셉터 로직이 다시 실행되어 동일 요청이 계속 재시도되고 있었습니다.",
            "또한 catch 블록에서 리프레시 실패 상황을 명확하게 분기하지 않아, 재시도를 멈추지 못하고 무한 루프가 발생했습니다.",
          ].join("\n"),
          jp: [
            "`Access Token`が満了すると自動的に`Refresh Token`要請を送るように具現しておいたが、",
            "Refresh要請自体が401を返還する状況で、同一要請が無限に繰り返される問題が発生しました。",
            "ログインページに正常に移動せず、ネットワークタブには同じAPIが絶えず繰り返し呼び出されていました。",
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
          en: [
            "`originalConfig._retry` 플래그가 적절히 설정되지 않아,",
            "Refresh 요청이 실패했음에도 같은 인터셉터 로직이 다시 실행되어 동일 요청이 계속 재시도되고 있었습니다.",
            "또한 catch 블록에서 리프레시 실패 상황을 명확하게 분기하지 않아, 재시도를 멈추지 못하고 무한 루프가 발생했습니다.",
          ].join("\n"),
          jp: [
            "`original Config._retry` フラグが適切に設定されていないため、",
            "Refreshトークンの発行要請が失敗したにもかかわらず、同じインターセプターロジックが再び実行され、同じ要請が再試行されていました。",
            "また、キャッチブロックでリフレッシュ失敗相互亜を明確に分岐せず、再試行を止められず、無限ループが発生していたことが確認できました。",
          ].join("\n"),
        },
      },
      {
        heading: {
          ko: "처리 단계 1) _retry 플래그로 무한 재요청 방지",
          en: "Fix 1) Use originalConfig._retry to prevent infinite retry",
          jp: "処理段階 1) _retry フラッグで無限再要請を防止",
        },
        body: {
          ko: "`_retry` 값을 가장 먼저 설정해 동일 요청이 반복되지 않도록 막았습니다.",
          en: "",
          jp: "`_retry`値を一番先に設定して同一要請が繰り返されないように防ぎました。",
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
          jp: "処理段階 2) リフレッシュ失敗時にすぐログアウト処理",
        },
        body: {
          ko: "`Refresh Token` 요청이 실패한 경우, 토큰을 즉시 삭제하고 로그인 페이지로 이동하도록 명확하게 분기 처리했습니다.",
          en: "",
          jp: "リフレッシュトークンのリクエストが失敗した場合、トークンをすぐに削除してログインページに移動するように明確に分岐しました。",
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
          jp: "処理段階3) ログアウトロジックを共通関数に分離",
        },
        body: {
          ko: "로그아웃 동작을 여러 곳에서 재사용할 수 있도록 `logout` 함수를 별도로 분리했습니다.",
          en: "",
          jp: "ログアウト動作を複数の場所で再利用できるように、`logout` 関数を分離しました。",
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
    id: "charts-query",
    icon: "PieChart",
    title: {
      ko: "React Query 캐싱으로 인한 차트 데이터 미갱신 문제",
      en: "Infinite redirect on token expire",
      jp: "トークン失効で無限リダイレクト",
    },
    page: { ko: "대시보드", en: "DashBoard", jp: "ユーザー管理" },
    owner: { ko: "김현진", en: "Kim Hyun Jin", jp: "ホンヨル" },
    tags: ["charts", "TanStack Query"],
    sections: [
      {
        heading: { ko: "문제 상황", en: "Symptom", jp: "症状" },
        body: {
          ko: [
            "탈퇴 사유별 월별 추세 차트에서 드롭다운으로 사유를 변경해도 차트가 업데이트되지 않는 문제가 발생했습니다.",
            "초기 렌더링 시에는 데이터가 정상적으로 표시되나, 사유 변경 시 이전 데이터가 그대로 유지되었습니다.",
          ].join("\n"),
          en: [
            "When trying to deploy to Vercel, deployment is blocked due to GitHub Organization permission issues.",
            "The GitHub repository exists, but Vercel fails to link or create the project properly, so auto-deploy cannot be set up.",
          ].join("\n"),
          jp: [
            "Vercelでプロジェクトをデプロイしようとすると、GitHub組織の権限問題でブロックされる。",
            "GitHubリポジトリ自体は存在するが、Vercel側でのプロジェクト作成・リンク時にエラーとなり、自動デプロイが設定できない。",
          ].join("\n"),
        },
        codeLang: "ts",
        code: `const reasonCode = REASON_LABEL_TO_CODE[selectedReason] || 'OTHER';
const { data: responseData } = useWithdrawalReasonTrend(reasonCode);`,
      },
      {
        heading: { ko: "원인", en: "Cause", jp: "原因" },
        body: {
          ko: [
            "`React Query`의 `queryKey`에 `reasonCode`가 포함되어 있지만, 컴포넌트가 리렌더링될 때 이전 캐시된 데이터를 사용하고 있었습니다..",
            "`enabled` 옵션이 있어도 쿼리 키가 변경될 때 자동으로 새 데이터를 페칭하지 않는 경우가 있었습니다.",
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
          ko: "시도한 해결방법 1. refetch() 함수를 호출하여 수동으로 데이터 갱신 시도",
          en: "Step 1) Handle SPA routing via vercel.json",
          jp: "手順1) vercel.jsonでSPAルーティングを設定",
        },
        body: {
          ko: "코드 복잡도가 증가",
          en: "Added `vercel.json` so that all routes rewrite to `index.html` for SPA behavior.",
          jp: "`vercel.json` を追加し、リロード時も常に `index.html` にリライトされるようにした。",
        },
      },
      {
        heading: {
          ko: "시도한 해결 방법 2. staleTime을 0으로 설정",
          en: "Step 2) Set base in vite.config.ts",
          jp: "手順2) vite.config.tsでbaseを設定",
        },
        body: {
          ko: "불필요한 API 호출 증가",
          en: "To clarify the deployment base path, added `base: '/'` to Vite config.",
          jp: "デプロイ時のパス基準を明確にするため、Vite設定に `base: '/'` を追加した。",
        },
      },
      {
        heading: {
          ko: "시도한 해결 방법 3. qurey Key에 추가 dependency 추가",
          en: "Step 3) Deploy via Vercel CLI",
          jp: "手順3) Vercel CLIで直接デプロイ",
        },
        body: {
          ko: ["근본적인 해결 불가"].join("\n"),
          en: [
            "When blocked by Organization permission issues in the web dashboard, deployment was done directly via CLI.",
          ].join("\n"),
          jp: [
            "ダッシュボード側で組織権限の問題によりブロックされたため、CLIから直接デプロイを行った。",
          ].join("\n"),
        },
      },
      {
        heading: { ko: "최종 해결 방법", en: "Symptom", jp: "症状" },
        body: {
          ko: [
            "`queryKey`에 `reasonCode`를 명확히 포함시키고, `enabled` 옵션으로 유효한 값일 때만 쿼리가 실행되도록 설정했습니다.",
            "초기 렌더링 시에는 데이터가 정상적으로 표시되나, 사유 변경 시 이전 데이터가 그대로 유지되었습니다.",
          ].join("\n"),
          en: [
            "When trying to deploy to Vercel, deployment is blocked due to GitHub Organization permission issues.",
            "The GitHub repository exists, but Vercel fails to link or create the project properly, so auto-deploy cannot be set up.",
          ].join("\n"),
          jp: [
            "Vercelでプロジェクトをデプロイしようとすると、GitHub組織の権限問題でブロックされる。",
            "GitHubリポジトリ自体は存在するが、Vercel側でのプロジェクト作成・リンク時にエラーとなり、自動デプロイが設定できない。",
          ].join("\n"),
        },
        codeLang: "ts",
        code: `
        export const useWithdrawalReasonTrend = (reasonCode: string) => {
          return useQuery({
            queryKey: ['withdrawalReasonTrend', reasonCode],
            queryFn: () => fetchWithdrawalReasonTrend(reasonCode),
            staleTime: 5 * 60 * 1000,
            gcTime: 10 * 60 * 1000,
            enabled: !!reasonCode, // reasonCode가 있을 때만 쿼리 실행
          });
        };`,
      },
    ],
  },
  {
    id: "charts",
    icon: "PieChart",
    title: {
      ko: "Recharts PieChart의 activeIndex 상태 동기화 문제",
      en: "Infinite redirect on token expire",
      jp: "トークン失効で無限リダイレクト",
    },
    page: { ko: "대시보드", en: "DashBoard", jp: "ユーザー管理" },
    owner: { ko: "김현진", en: "Kim Hyun Jin", jp: "ホンヨル" },
    tags: ["charts", "Recharts"],
    sections: [
      {
        heading: { ko: "문제 상황", en: "Symptom", jp: "症状" },
        body: {
          ko: [
            "도넛 차트와 범례에 모두 `onMouseEnter/onMouseLeave` 이벤트를 설정했지만,마우스를 빠르게 이동하면 `activeIndex` 상태가 꼬이는 문제가 발생했습니다.",
            "차트에서 마우스를 떼어도 여전히 활성화된 상태로 표시되거나, 범례와 차트의 활성화 상태가 일치하지 않았습니다..",
          ].join("\n"),
          en: [
            "When trying to deploy to Vercel, deployment is blocked due to GitHub Organization permission issues.",
            "The GitHub repository exists, but Vercel fails to link or create the project properly, so auto-deploy cannot be set up.",
          ].join("\n"),
          jp: [
            "Vercelでプロジェクトをデプロイしようとすると、GitHub組織の権限問題でブロックされる。",
            "GitHubリポジトリ自体は存在するが、Vercel側でのプロジェクト作成・リンク時にエラーとなり、自動デプロイが設定できない。",
          ].join("\n"),
        },
        codeLang: "ts",
        code: `<Pie
  onMouseEnter={(_, index) => setActiveIndex(index)}
  onMouseLeave={() => setActiveIndex(null)}
/>
{data.map((item, index) => (
  <div
    onMouseEnter={() => setActiveIndex(index)}
    onMouseLeave={() => setActiveIndex(null)}
  />
))}`,
      },
      {
        heading: { ko: "원인", en: "Cause", jp: "原因" },
        body: {
          ko: [
            "차트 영역과 범례 영역 사이에 마우스가 이동할 때 `onMouseLeave`와 `onMouseEnter`가 거의 동시에 발생하여 상태 업데이트 순서가 보장되지 않았습니다.",
            "`React`의 비동기 상태 업데이트 특성상 마지막 상태가 예측 불가능하게 되었습니다.",
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
          ko: "시도한 해결방법 1. setTimeout으로 setActiveIndex(null) 지연 실행",
          en: "Step 1) Handle SPA routing via vercel.json",
          jp: "手順1) vercel.jsonでSPAルーティングを設定",
        },
        body: {
          ko: "`UX`가 부자연스러워짐",
          en: "Added `vercel.json` so that all routes rewrite to `index.html` for SPA behavior.",
          jp: "`vercel.json` を追加し、リロード時も常に `index.html` にリライトされるようにした。",
        },
      },
      {
        heading: {
          ko: "시도한 해결 방법 2. 별도의 ref를 사용한 debounce 구현",
          en: "Step 2) Set base in vite.config.ts",
          jp: "手順2) vite.config.tsでbaseを設定",
        },
        body: {
          ko: "코드 복잡도 과다 증가",
          en: "To clarify the deployment base path, added `base: '/'` to Vite config.",
          jp: "デプロイ時のパス基準を明確にするため、Vite設定に `base: '/'` を追加した。",
        },
      },
      {
        heading: {
          ko: "시도한 해결 방법 3. 차트와 범례 중 하나에만 이벤트 적용",
          en: "Step 3) Deploy via Vercel CLI",
          jp: "手順3) Vercel CLIで直接デプロイ",
        },
        body: {
          ko: ["사용자 경험 저하"].join("\n"),
          en: [
            "When blocked by Organization permission issues in the web dashboard, deployment was done directly via CLI.",
          ].join("\n"),
          jp: [
            "ダッシュボード側で組織権限の問題によりブロックされたため、CLIから直接デプロイを行った。",
          ].join("\n"),
        },
      },
      {
        heading: { ko: "최종 해결 방법", en: "Symptom", jp: "症状" },
        body: {
          ko: [
            "이벤트 핸들러를 함수로 분리하여 동일한 로직을 적용했습니다.",
            "`activeIndex`를 `Pie` 컴포넌트의 `prop`으로 명시적으로 전달하여 상태와 UI 동기화를 보장했습니다.",
          ].join("\n"),
          en: [
            "When trying to deploy to Vercel, deployment is blocked due to GitHub Organization permission issues.",
            "The GitHub repository exists, but Vercel fails to link or create the project properly, so auto-deploy cannot be set up.",
          ].join("\n"),
          jp: [
            "Vercelでプロジェクトをデプロイしようとすると、GitHub組織の権限問題でブロックされる。",
            "GitHubリポジトリ自体は存在するが、Vercel側でのプロジェクト作成・リンク時にエラーとなり、自動デプロイが設定できない。",
          ].join("\n"),
        },
        codeLang: "ts",
        code: `const [activeIndex, setActiveIndex] = useState<number | null>(null);

// 차트와 범례 모두에 동일한 이벤트 핸들러 사용
const handleMouseEnter = (index: number) => {
  setActiveIndex(index);
};

const handleMouseLeave = () => {
  setActiveIndex(null);
};

return (
  <>
    <Pie
      activeIndex={activeIndex ?? undefined}
      onMouseEnter={(_, index) => handleMouseEnter(index)}
      onMouseLeave={handleMouseLeave}
    />

    {data.map((item, index) => (
      <div
        key={index}
        onMouseEnter={() => handleMouseEnter(index)}
        onMouseLeave={handleMouseLeave}
      >
        {/* 범례 내용 */}
      </div>
    ))}
  </>
);
`,
      },
    ],
  },
  {
    id: "charts-type",
    icon: "Code",
    title: {
      ko: "TypeScript 타입 안정성 문제 - DTO와 Chart Data 매핑 오류",
      en: "Infinite redirect on token expire",
      jp: "トークン失効で無限リダイレクト",
    },
    page: { ko: "대시보드", en: "DashBoard", jp: "ユーザー管理" },
    owner: { ko: "김현진", en: "Kim Hyun Jin", jp: "ホンヨル" },
    tags: ["TypeScript", "Mapping"],
    sections: [
      {
        heading: { ko: "문제 상황", en: "Symptom", jp: "症状" },
        body: {
          ko: [
            "`API`에서 받아온 데이터를 차트 형식으로 변환하는 과정에서 런타임 에러가 발생했습니다.",
            "`items` 배열이 `undefined`일 때 `.map()`을 호출하여 애플리케이션이 크래시되었습니다.",
          ].join("\n"),
          en: [
            "When trying to deploy to Vercel, deployment is blocked due to GitHub Organization permission issues.",
            "The GitHub repository exists, but Vercel fails to link or create the project properly, so auto-deploy cannot be set up.",
          ].join("\n"),
          jp: [
            "Vercelでプロジェクトをデプロイしようとすると、GitHub組織の権限問題でブロックされる。",
            "GitHubリポジトリ自体は存在するが、Vercel側でのプロジェクト作成・リンク時にエラーとなり、自動デプロイが設定できない。",
          ].join("\n"),
        },
        codeLang: "ts",
        code: `export const mapDtoToWithdrawalReasonDistribution = (
  dto: WithdrawalReasonDistributionDTO
): WithdrawalReasonDistribution => ({
  chartData: dto.data.items.map((item) => ({
    reason: item.reason_label,
    count: item.count,
    percentage: item.percentage,
  })),
});`,
      },
      {
        heading: { ko: "원인", en: "Cause", jp: "原因" },
        body: {
          ko: [
            "백엔드 `API`에서 데이터가 없는 경우 `items`를 빈 배열 대신 `undefined`로 반환하고 있었습니다.",
            "`TypeScript` 타입 정의는 `items: WithdrawalReasondoughnutItemDTO[]`로 되어 있지만, 실제 런타임에서는 옵셔널한 값이 올 수 있었습니다.",
            "타입 정의와 실제 `API` 응답 스펙의 불일치가 문제였습니다.",
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
          ko: "시도한 해결방법 1. 컴포넌트 레벨에서 if (!data?.items) 체크 ",
          en: "Step 1) Handle SPA routing via vercel.json",
          jp: "手順1) vercel.jsonでSPAルーティングを設定",
        },
        body: {
          ko: "모든 컴포넌트에 중복 발생",
          en: "Added `vercel.json` so that all routes rewrite to `index.html` for SPA behavior.",
          jp: "`vercel.json` を追加し、リロード時も常に `index.html` にリライトされるようにした。",
        },
      },
      {
        heading: {
          ko: "시도한 해결 방법 2. API 응답을 받은 직후 필터링 ",
          en: "Step 2) Set base in vite.config.ts",
          jp: "手順2) vite.config.tsでbaseを設定",
        },
        body: {
          ko: "타입 안전성 여전히 보장 안 됨",
          en: "To clarify the deployment base path, added `base: '/'` to Vite config.",
          jp: "デプロイ時のパス基準を明確にするため、Vite設定に `base: '/'` を追加した。",
        },
      },
      {
        heading: {
          ko: "시도한 해결 방법 3. DTO 타입을 옵셔널로 변경 → 기존 코드 대량 수정 필요",
          en: "Step 3) Deploy via Vercel CLI",
          jp: "手順3) Vercel CLIで直接デプロイ",
        },
        body: {
          ko: ["기존 코드 대량 수정 필요"].join("\n"),
          en: [
            "When blocked by Organization permission issues in the web dashboard, deployment was done directly via CLI.",
          ].join("\n"),
          jp: [
            "ダッシュボード側で組織権限の問題によりブロックされたため、CLIから直接デプロイを行った。",
          ].join("\n"),
        },
      },
      {
        heading: { ko: "최종 해결 방법", en: "Symptom", jp: "症状" },
        body: {
          ko: [
            "매핑 함수에서 `Optional chaining (?.)`과 `nullish coalescing (|| [])`을 사용하여 안전한 변환을 보장했습니다.",
            "컴포넌트에서 빈 배열 케이스를 명시적으로 처리하여 사용자에게 적절한 메시지를 표시했습니다.",
            "타입 안정성과 런타임 안정성을 모두 확보했습니다.",
          ].join("\n"),
          en: [
            "When trying to deploy to Vercel, deployment is blocked due to GitHub Organization permission issues.",
            "The GitHub repository exists, but Vercel fails to link or create the project properly, so auto-deploy cannot be set up.",
          ].join("\n"),
          jp: [
            "Vercelでプロジェクトをデプロイしようとすると、GitHub組織の権限問題でブロックされる。",
            "GitHubリポジトリ自体は存在するが、Vercel側でのプロジェクト作成・リンク時にエラーとなり、自動デプロイが設定できない。",
          ].join("\n"),
        },
        codeLang: "ts",
        code: `export const mapDtoToWithdrawalReasonDistribution = (
  dto: WithdrawalReasonDistributionDTO
): WithdrawalReasonDistribution => ({
  interval: dto.data.interval,
  fromDate: dto.data.from_date,
  toDate: dto.data.to_date,
  totalWithdrawals: dto.data.total_withdrawals,
  chartData:
    dto.data.items?.map((item) => ({
      reason: item.reason_label,
      count: item.count,
      percentage: item.percentage,
    })) || [], // Optional chaining과 fallback 배열 사용
});

if (!statistics.chartData || statistics.chartData.length === 0) {
  return (
    <div
      className="flex items-center justify-center"
      style={{ height: "500px" }}
    >
      <p className="text-gray-500">탈퇴 사유 데이터가 없습니다.</p>
    </div>
  );
}
`,
      },
    ],
  },
  {
    id: "toast",
    icon: "Code", // icon 수정해야될듯
    title: {
      ko: "동일 메시지 토스트가 중복으로 누적되는 문제",
      en: "Infinite redirect on token expire",
      jp: "トークン失効で無限リダイレクト",
    },
    page: {
      ko: "Shared Components",
      en: "Shared Components",
      jp: "ユーザー管理",
    },
    owner: { ko: "서단비", en: "Seo Dan-bi", jp: "ホンヨル" },
    tags: ["TypeScript", "Toast"],
    sections: [
      {
        heading: { ko: "문제 상황", en: "Symptom", jp: "症状" },
        body: {
          ko: [
            "토스트 알림창 컴포넌트를 제작하던 중, 동일한 내용의 토스트가 연속으로 여러 번 발생시킬 때 ",
            "이전 토스트가 사라지지 않고 중복으로 쌓이는 문제가 발생했습니다.",
          ].join("\n"),
          en: [
            "When trying to deploy to Vercel, deployment is blocked due to GitHub Organization permission issues.",
            "The GitHub repository exists, but Vercel fails to link or create the project properly, so auto-deploy cannot be set up.",
          ].join("\n"),
          jp: [
            "Vercelでプロジェクトをデプロイしようとすると、GitHub組織の権限問題でブロックされる。",
            "GitHubリポジトリ自体は存在するが、Vercel側でのプロジェクト作成・リンク時にエラーとなり、自動デプロイが設定できない。",
          ].join("\n"),
        },
        codeLang: "ts",
        code: `const handleSave = async () => {
  await saveData();
  showSuccess("저장 완료", "데이터가 성공적으로 저장되었습니다.");
};`,
      },
      {
        heading: { ko: "원인", en: "Cause", jp: "原因" },
        body: {
          ko: [
            `React는 key가 같으면 같은 컴포넌트로 인식하여 리렌더링만 수행되어 실제로는 새로운 토스트가 추가되어야 하는데 기존 토스트가 업데이트되는 것처럼 동작하게 되는 원인이였습니다. 그래서 여러 개의 동일한 토스트가 있을 때 어떤 것을 삭제해야 할지 명확하지 않는 문제 해결이 필요했습니다.`,
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
          ko: "시도한 해결방법 1. 고유 key 생성 ",
          en: "Step 1) Handle SPA routing via vercel.json",
          jp: "手順1) vercel.jsonでSPAルーティングを設定",
        },
        body: {
          ko: "`title`, `message`, `variant` 조합으로 충분히 고유한 `key` 생성했습니다.",
          en: "Added `vercel.json` so that all routes rewrite to `index.html` for SPA behavior.",
          jp: "`vercel.json` を追加し、リロード時も常に `index.html` にリライトされるようにした。",
        },
        codeLang: "ts",
        code: `export const ToastContainer = () => {
  const toasts = useToastStore((state) => state.toasts);
  const removeToast = useToastStore((state) => state.removeToast);

  return (
    <div className="pointer-events-none fixed top-4 right-1 z-50 flex justify-end pr-4">
      <div className="pointer-events-none flex h-auto w-[320px] flex-col gap-2">
        {toasts.map((toast) => (
          <Toast
            key={\`\${toast.title}-\${toast.message}-\${toast.variant}\`}
            {...toast}
            onClose={removeToast}
          />
        ))}
      </div>
    </div>
  );
};`,
      },
      {
        heading: {
          ko: "시도한 해결 방법 2. 토스트삭제 함수 제작 ",
          en: "Step 2) Set base in vite.config.ts",
          jp: "手順2) vite.config.tsでbaseを設定",
        },
        body: {
          ko: "특정 토스트 객체를 정확히 제거하기 위한 토스트삭제 함수를 만들었습니다.",
          en: "To clarify the deployment base path, added `base: '/'` to Vite config.",
          jp: "デプロイ時のパス基準を明確にするため、Vite設定に `base: '/'` を追加した。",
        },
        codeLang: "ts",
        code: `removeToast: (toast) =>
  set((state) => ({
    toasts: state.toasts.filter((t) => t !== toast),
  })),`,
      },
    ],
  },
  {
    id: "danbi-filter",
    icon: "Code", // icon 수정해야될듯
    title: {
      ko: "검색 필터와 페이지네이션 상태가 섞여 예상치 못한 고정 페이지 현상 발생",
      en: "Infinite redirect on token expire",
      jp: "トークン失効で無限リダイレクト",
    },
    page: {
      ko: "Lecture Management Page",
      en: "Lecture Management Page",
      jp: "ユーザー管理",
    },
    owner: { ko: "서단비", en: "Seo Dan-bi", jp: "ホンヨル" },
    tags: ["TypeScript", "State", "debounce"],
    sections: [
      {
        heading: { ko: "문제 상황", en: "Symptom", jp: "症状" },
        body: {
          ko: [
            `검색어 입력 시 기존 페이지 상태가 유지되어, 검색 후에도 페이지네이션이 첫 페이지로 리셋되지 않는 문제가 발생했습니다. 이를 해결하기 위해 resetToFirstPage()함수를 추가해 검색 시 1페이지로 초기화되도록 처리했지만, 이후에는 페이지네이션이 아예 작동하지 않고 항상 1페이지만 표시되는 새로운 이슈가 발생했습니다.`,
          ].join("\n"),
          en: [
            "When trying to deploy to Vercel, deployment is blocked due to GitHub Organization permission issues.",
            "The GitHub repository exists, but Vercel fails to link or create the project properly, so auto-deploy cannot be set up.",
          ].join("\n"),
          jp: [
            "Vercelでプロジェクトをデプロイしようとすると、GitHub組織の権限問題でブロックされる。",
            "GitHubリポジトリ自体は存在するが、Vercel側でのプロジェクト作成・リンク時にエラーとなり、自動デプロイが設定できない。",
          ].join("\n"),
        },
      },
      {
        heading: { ko: "원인", en: "Cause", jp: "原因" },
        body: {
          ko: [
            "검색 핸들러(`handleSearch`)에서 페이지 초기화 로직이 누락되어 검색 시 페이지 이동이 제대로 반영되지 않는 것을 확인했습니다.",
          ].join("\n"),
          en: [
            "Vercel does not have sufficient permission to access the GitHub Organization, so repository linking and auto-deploy setup are blocked.",
          ].join("\n"),
          jp: [
            "VercelにGitHub組織への十分な権限が付与されておらず、リポジトリ連携や自動デプロイ設定がブロックされていた。",
          ].join("\n"),
        },
        codeLang: "ts",
        code: `export const useLectureManagement = () => {
  const { searchKeyword, debouncedSearch, handleSearchChange } = useLectureSearch();
  const { currentPage, handlePageChange } = useLecturePagination({ pageSize: PAGE_SIZE });
  
  const handleSearch = (keyword: string) => {
    handleSearchChange(keyword);
  };

  return {
    searchKeyword,
    handleSearch,
    currentPage,
    // ...
  };
};`,
      },
      {
        heading: { ko: "분석", en: "Cause", jp: "原因" },
        body: {
          ko: [
            "아래와 같이 `resetToFirstPage` 로 별도로 만들어 아래와 같이 페이지를 강제로 1페이지로 초기화했지만, `handleSearch` 와의 호출 타이밍이 분리되어 있어 페이지 상태가 지속적으로 1로 고정되는 문제가 발생했습니다.",
          ].join("\n"),
          en: [
            "Vercel does not have sufficient permission to access the GitHub Organization, so repository linking and auto-deploy setup are blocked.",
          ].join("\n"),
          jp: [
            "VercelにGitHub組織への十分な権限が付与されておらず、リポジトリ連携や自動デプロイ設定がブロックされていた。",
          ].join("\n"),
        },
        codeLang: "ts",
        code: `  const handleSearch = (keyword: string) => {
    handleSearchChange(keyword)
    resetToFirstPage()
  }`,
      },
      {
        heading: {
          ko: "해결방법. 검색이벤트가 발생할 때만 함수가 실행되도록 설정 ",
          en: "Step 1) Handle SPA routing via vercel.json",
          jp: "手順1) vercel.jsonでSPAルーティングを設定",
        },
        body: {
          ko: [
            "검색 이벤트가 발생할 때만 페이지를 초기화하도록handleSearch 내부에 resetToFirstPage()를 넣어서 검색을 감지할때만 페이지를 바뀌게 수정했습니다.",
            "이렇게 하면 검색어 변경 시에만 첫 페이지로 이동하고, 페이지네이션은 정상적으로 작동하여 이후 페이지 이동 시에도 상태가 유지됩니다.",
          ].join("\n"),
          en: "Added `vercel.json` so that all routes rewrite to `index.html` for SPA behavior.",
          jp: "`vercel.json` を追加し、リロード時も常に `index.html` にリライトされるようにした。",
        },
        codeLang: "ts",
        code: `  const handleSearch = (keyword: string) => {
    handleSearchChange(keyword)
    resetToFirstPage()
  }`,
      },
      {
        heading: {
          ko: "시도한 해결 방법 2. 토스트삭제 함수 제작 ",
          en: "Step 2) Set base in vite.config.ts",
          jp: "手順2) vite.config.tsでbaseを設定",
        },
        body: {
          ko: "특정 토스트 객체를 정확히 제거하기 위한 토스트삭제 함수를 만들었습니다.",
          en: "To clarify the deployment base path, added `base: '/'` to Vite config.",
          jp: "デプロイ時のパス基準を明確にするため、Vite設定に `base: '/'` を追加した。",
        },
        codeLang: "ts",
        code: `removeToast: (toast) =>
  set((state) => ({
    toasts: state.toasts.filter((t) => t !== toast),
  })),`,
      },
    ],
  },
  {
    id: "yeop-modal",
    icon: "Code", // icon 수정해야될듯
    title: {
      ko: "복구 완료 후 모달 상태 업데이트 이슈",
      en: "Infinite redirect on token expire",
      jp: "トークン失効で無限リダイレクト",
    },
    page: {
      ko: "UserWithdrawal Management Page",
      en: "UserWithdrawal Management Page",
      jp: "ユーザー管理",
    },
    owner: { ko: "홍엽", en: "Hong Yeop", jp: "ホンヨル" },
    tags: ["TypeScript", "Modal", "Restore"],
    sections: [
      {
        heading: { ko: "문제 상황", en: "Symptom", jp: "症状" },
        body: {
          ko: [
            "회원 복구 성공 후 토스트가 표시되지 않는 이슈가 있었고, 복구 시, 회원 복구하기 버튼이 사라지지 않고 상태가 활성 으로 변경되지 않는 이슈가 있었습니다.",
          ].join("\n"),
          en: [
            "When trying to deploy to Vercel, deployment is blocked due to GitHub Organization permission issues.",
            "The GitHub repository exists, but Vercel fails to link or create the project properly, so auto-deploy cannot be set up.",
          ].join("\n"),
          jp: [
            "Vercelでプロジェクトをデプロイしようとすると、GitHub組織の権限問題でブロックされる。",
            "GitHubリポジトリ自体は存在するが、Vercel側でのプロジェクト作成・リンク時にエラーとなり、自動デプロイが設定できない。",
          ].join("\n"),
        },
      },
      {
        heading: { ko: "원인", en: "Cause", jp: "原因" },
        body: {
          ko: [
            "`WithdrawalManagementPage.tsx` 에서 문제 코드가 있었습니다.",
            "`mutateAsync()`는 `Promise`를 반환하지만, 이를 기다리지 않고 즉시 `setIsRestored(true)` 실행되었습니다.",
            "이로 인해 API 응답이 성공/실패 여부와 관계없이 상태가 변경되었습니다.",
          ].join("\n"),
          en: [
            "Vercel does not have sufficient permission to access the GitHub Organization, so repository linking and auto-deploy setup are blocked.",
          ].join("\n"),
          jp: [
            "VercelにGitHub組織への十分な権限が付与されておらず、リポジトリ連携や自動デプロイ設定がブロックされていた。",
          ].join("\n"),
        },
        codeLang: "ts",
        code: `// WithdrawalManagementPage.tsx
const handleRestore = () => {
  restoreMutation.mutateAsync(selectedUserId)
  setIsRestored(true) // ⚠️ API 호출과 동시에 실행됨!
}`,
      },
      {
        heading: {
          ko: "해결방법. mutateAsync()의 Promise가 완료된 이후에 setIsRestored가 실행되게 수정 ",
          en: "Step 1) Handle SPA routing via vercel.json",
          jp: "手順1) vercel.jsonでSPAルーティングを設定",
        },
        body: {
          ko: [
            "`mutateAsync()`의 `Promise`가 완료된 이후에 `setIsRestored`가 실행되게 수정하였습니다.",
            "그리고 `isRestored` 상태를 하위 컴포넌트에 전달하고, 조건부 렌더링으로 버튼 숨김 및 상태 변경했습니다. ",
            "(`WithdrawalManagementPage → WithdrawalModalOutlet → WithdrawalModalFooter`)",
          ].join("\n"),
          en: "Added `vercel.json` so that all routes rewrite to `index.html` for SPA behavior.",
          jp: "`vercel.json` を追加し、リロード時も常に `index.html` にリライトされるようにした。",
        },
        codeLang: "ts",
        code: `// WithdrawalManagementPage.tsx
const handleRestore = async () => {
  return restoreMutation.mutateAsync(userId).then(() => {
    setIsRestored(true) // Promise 완료 후 실행
  })
}

// WithdrawalModalOutlet.tsx
const statusLabel = isRestored ? '활성' : user.status // 조건부 상태 표시

// WithdrawalModalFooter.tsx
{!isRestored && <Button>회원 복구하기</Button>} // 조건부 렌더링`,
      },
    ],
  },
  {
    id: "yeop-accordion",
    icon: "Code", // icon 수정해야될듯
    title: {
      ko: "아코디언 동시 열림 이슈",
      en: "Infinite redirect on token expire",
      jp: "トークン失効で無限リダイレクト",
    },
    page: {
      ko: "UserWithdrawal Management Page",
      en: "UserWithdrawal Management Page",
      jp: "ユーザー管理",
    },
    owner: { ko: "홍엽", en: "Hong Yeop", jp: "ホンヨル" },
    tags: ["TypeScript", "UI/UX", "Accrodion"],
    sections: [
      {
        heading: { ko: "문제 상황", en: "Symptom", jp: "症状" },
        body: {
          ko: [
            "탈퇴 사유 아코디언을 클릭한 수 권한 아코디언을 클릭할 경우 둘 다 동시에 열리는 이슈가 있었습니다.",
            "이로 인해 `UI`가 복잡해지고 사용자 경험이 저하되는 문제점이 있었습니다.",
          ].join("\n"),
          en: [
            "When trying to deploy to Vercel, deployment is blocked due to GitHub Organization permission issues.",
            "The GitHub repository exists, but Vercel fails to link or create the project properly, so auto-deploy cannot be set up.",
          ].join("\n"),
          jp: [
            "Vercelでプロジェクトをデプロイしようとすると、GitHub組織の権限問題でブロックされる。",
            "GitHubリポジトリ自体は存在するが、Vercel側でのプロジェクト作成・リンク時にエラーとなり、自動デプロイが設定できない。",
          ].join("\n"),
        },
      },
      {
        heading: { ko: "원인", en: "Cause", jp: "原因" },
        body: {
          ko: [
            "각 아코디언의 상태(`reasonAccordion, roleAccordion`)가 독립적으로 관리되고 있었습니다.",
            "이로 인해 한 아코디언이 열려도 다른 아코디언의 상태에 영향을 주지 못하는 이슈가 있었고 결과적으로 사용자가 여러 아코디언을 동시에 열 수 있어 화면이 복잡해졌습니다.",
          ].join("\n"),
          en: [
            "Vercel does not have sufficient permission to access the GitHub Organization, so repository linking and auto-deploy setup are blocked.",
          ].join("\n"),
          jp: [
            "VercelにGitHub組織への十分な権限が付与されておらず、リポジトリ連携や自動デプロイ設定がブロックされていた。",
          ].join("\n"),
        },
      },
      {
        heading: {
          ko: "해결방법. 아코디언의 onValueChange 핸들러에서 상대 아코디언 닫기 로직을 추가 ",
          en: "Step 1) Handle SPA routing via vercel.json",
          jp: "手順1) vercel.jsonでSPAルーティングを設定",
        },
        body: {
          ko: [
            "각 아코디언의`onValueChange`핸들러에서 상대 아코디언 닫기 로직을 추가하여 하나의 아코디언 클릭후 다른 아코디언 클릭시 아코디언이 닫히게 했습니다.",
            "그리고 `isRestored` 상태를 하위 컴포넌트에 전달하고, 조건부 렌더링으로 버튼 숨김 및 상태 변경했습니다. ",
            "(`WithdrawalManagementPage → WithdrawalModalOutlet → WithdrawalModalFooter`)",
          ].join("\n"),
          en: "Added `vercel.json` so that all routes rewrite to `index.html` for SPA behavior.",
          jp: "`vercel.json` を追加し、リロード時も常に `index.html` にリライトされるようにした。",
        },
        codeLang: "ts",
        code: `// WithdrawalSearchAndFilterSection.tsx
// ✅ 탈퇴 사유 아코디언 변경 핸들러 - 열릴 때 권한 아코디언 닫기
  const handleReasonAccordionChange = (value: string) => {
    setReasonAccordion(value)
    if (value === '0') {
      setRoleAccordion('') // 권한 아코디언 닫기
    }
  }

  // ✅ 권한 아코디언 변경 핸들러 - 열릴 때 탈퇴 사유 아코디언 닫기
  const handleRoleAccordionChange = (value: string) => {
    setRoleAccordion(value)
    if (value === '0') {
      setReasonAccordion('') // 탈퇴 사유 아코디언 닫기
    }
  }
  
  <Accordion
	  value={reasonAccordion}
	  onValueChange={handleReasonAccordionChange}
    selectedLabels={{ '0': withdrawReasonFilter || '전체 탈퇴 사유' }}
  >
  </Accordion>
  
  <Accordion
	  value={roleAccordion}
	  onValueChange={handleRoleAccordionChange}
    selectedLabels={{ '0': withdrawRoleFilter || '전체 권한' }}
  >
  </Accordion>`,
      },
    ],
  },
  {
    id: "yeop-mapping",
    icon: "Code", // icon 수정해야될듯
    title: {
      ko: "코드 값의 한글 매핑 처리",
      en: "Infinite redirect on token expire",
      jp: "トークン失効で無限リダイレクト",
    },
    page: {
      ko: "UserWithdrawal Management Page",
      en: "UserWithdrawal Management Page",
      jp: "ユーザー管理",
    },
    owner: { ko: "홍엽", en: "Hong Yeop", jp: "ホンヨル" },
    tags: ["TypeScript", "Mapping"],
    sections: [
      {
        heading: { ko: "문제 상황", en: "Symptom", jp: "症状" },
        body: {
          ko: [
            "API에서 코드 형태로 반환(`NO_LONGER_NEEDED,M,admin`) 되는 내용을 UI에서 한글로 바꿔서 표기해야 했습니다.",
          ].join("\n"),
          en: [
            "When trying to deploy to Vercel, deployment is blocked due to GitHub Organization permission issues.",
            "The GitHub repository exists, but Vercel fails to link or create the project properly, so auto-deploy cannot be set up.",
          ].join("\n"),
          jp: [
            "Vercelでプロジェクトをデプロイしようとすると、GitHub組織の権限問題でブロックされる。",
            "GitHubリポジトリ自体は存在するが、Vercel側でのプロジェクト作成・リンク時にエラーとなり、自動デプロイが設定できない。",
          ].join("\n"),
        },
      },
      {
        heading: { ko: "원인", en: "Cause", jp: "原因" },
        body: {
          ko: [
            "백엔드의 경우 데이터를 짧은 코드로 값을 저장하여 공간을 절약해야 했으며, 언어에 독립적인 키 값으로 관리하여 국제화에 대비해야합니다.",
            "하지만 프론트엔드의 경우 간결화된 코드를 사용자가 이해하기 쉽게 변환해주어야 합니다.",
            "하지만 API에서 코드 형태로 반환되는 내용을 한글로 바꿔서 표기하는 로직이 코드에 없었습니다.",
          ].join("\n"),
          en: [
            "Vercel does not have sufficient permission to access the GitHub Organization, so repository linking and auto-deploy setup are blocked.",
          ].join("\n"),
          jp: [
            "VercelにGitHub組織への十分な権限が付与されておらず、リポジトリ連携や自動デプロイ設定がブロックされていた。",
          ].join("\n"),
        },
      },
      {
        heading: {
          ko: "해결방법. Constants 매핑 테이블과 조건문을 활용한 코드-한글 변환 처리 ",
          en: "Step 1) Handle SPA routing via vercel.json",
          jp: "手順1) vercel.jsonでSPAルーティングを設定",
        },
        body: {
          ko: [
            "Constants 매핑 테이블과 조건문을 활용한 코드-한글로 변환하도록 처리하였습니다.",
          ].join("\n"),
          en: "Added `vercel.json` so that all routes rewrite to `index.html` for SPA behavior.",
          jp: "`vercel.json` を追加し、リロード時も常に `index.html` にリライトされるようにした。",
        },
        codeLang: "ts",
        code: `// ✅ src/constants/withdrawal.ts
// 권한 매핑
export const ROLE_CODE_TO_LABEL = {
  admin: '관리자',
  staff: '스태프',
  user: '일반회원',
} as const

// 상태 매핑
export const STATUS_CODE_TO_LABEL: Record<string, string> = {
  active: '활성',
  inactive: '비활성',
  withdrawn: '탈퇴',
  withdrawal_pending: '탈퇴요청',
}

// 탈퇴 사유 매핑
export const WITHDRAW_REASON_CODE_TO_LABEL: Record<string, string> = {
  NO_LONGER_NEEDED: '서비스 이용할 시간이 없음',
  LACK_OF_INTEREST: '관심이 사라짐',
  TOO_DIFFICULT: '서비스를 이용하기가 너무 어려움',
  FOUND_BETTER_SERVICE: '더 좋은 대안을 찾음',
  PRIVACY_CONCERNS: '개인정보/보안 우려',
  POOR_SERVICE_QUALITY: '서비스 품질 불만',
  TECHNICAL_ISSUES: '기술적 문제(버그 등)',
  LACK_OF_CONTENT: '원하는 콘텐츠나 기능의 부족',
  OTHER: '기타',
}

// ✅ WithdrawalModalOutlet.tsx
const user = detail.user

  // ✅ 성별 - 간단한 조건문으로 처리 (Constants 불필요)
  const genderLabel = 
    user.gender === 'M' 
      ? '남성' 
      : user.gender === 'F' 
        ? '여성' 
        : '-' // null, undefined, 기타 → '-'`,
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
    owner: { ko: "홍엽", en: "HongYeop", jp: "ホンヨル" },
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
