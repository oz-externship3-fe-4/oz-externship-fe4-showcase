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
    icon: "Code",
    title: {
      ko: "모달 내 상세내용이 렌더링 안되는 문제",
      en: "Recruitment detail modal not rendering",
      jp: "Missing Field Rendering in Recruitment Detail Modal",
    },
    page: {
      ko: "구인 공고 관리 페이지",
      en: "Recruitment admin page",
      jp: "募集管理ページ",
    },
    owner: { ko: "윤경복", en: "Kyungbok", jp: "ユン·ギョンボク" },
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
            `When an admin clicked a row in the recruitment list, the detail modal opened,
but several fields (such as content, lectures, and applicant lists) were not rendered.
Both list and detail API responses appeared correctly in the Network tab,
but the modal displayed incomplete data.`,
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
            `The code assumed that the study_lectures field always existed in RecruitmentDetailDTO
and directly called .map() without checking for null values.
However, the API sometimes omitted this field, causing undefined.map(...)
and triggering a runtime error.
This crash stopped mapRecruitmentDetailDTO execution,
preventing the modal from rendering properly.`,
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
          en: "Fix 1) Made study_lectures optional in DTO.",
          jp: "処理段階 1) DTOでstudy_lecturesをオプショナルに指定しました。",
        },
        body: {
          ko: "실제 응답에서 항상 내려오지 않는 필드는 DTO에서 옵셔널(?)로 정의해 방어적으로 처리하였습니다.",
          en: "Defined optional fields (?) defensively for API responses that might not always return them.",
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
          en: "Fix 2) Added safe mapping logic.",
          jp: "処理段階 2) マップから安全にマップを呼び出しました。",
        },
        body: {
          ko: [
            "`ststudy_lectures`가 없을 수 있는 상황이 있기에  `?? []`로 기본값을 주고 `.map()`을 호출하였습니다.",
            "이 과정에서 다른 배열 필드(`applications` 등)도 동일한 패턴으로 방어할 수 있다는 것을 깨닫게 되었습니다.",
          ].join("\n"),
          en: [
            "`Used ?? []` as a fallback before `.map()` to avoid undefined errors.",
            "Applied the same pattern to other array fields (e.g., applications) to improve robustness across the codebase.",
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
    icon: "Code",
    title: {
      ko: "Vercel 배포 시 GitHub Organization 권한 문제",
      en: "GitHub Repository Not Linked to Vercel Deployment",
      jp: "テーマ:VERCEL配布時、GitHubと連動しない問題が発生",
    },
    page: {
      ko: "배포 · 인프라",
      en: "Deployment / Infra",
      jp: "デプロイ・インフラ",
    },
    owner: { ko: "윤경복", en: "Kyungbok", jp: "ユン·ギョンボク" },
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
            `While deploying the project to Vercel,
deployment failed due to insufficient GitHub Organization permissions.
The GitHub repository existed, but Vercel was unable to connect or auto-deploy.
Additionally, refreshing routes in the deployed SPA returned a 404 error.`,
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
            "Vercel did not have sufficient permission to access the GitHub Organization, blocking repository linking and automatic deployment.",
            "Furthermore, since the app was a Vite-based SPA, a lack of proper rewrites and base configuration caused 404 errors on refresh.",
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
          en: "Step 1) Added vercel.json for SPA routing.",
          jp: "処理段階 1) vercel.jsonでSPAルーティング処理",
        },
        body: {
          ko: "Vercel에서 새로고침 시에도 항상 `index.html`로 라우팅되도록 `vercel.json`을 추가했습니다.",
          en: "Configured rewrites so all routes redirect to index.html, preventing 404 errors on page reload.",
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
          en: "Step 2) Defined base: '/' in vite.config.ts.",
          jp: "処理段階2) vite.config.tsでbase設定",
        },
        body: {
          ko: "배포 경로 기준을 명확히 하기 위해 Vite 설정에 `base: '/'`를 추가했습니다.",
          en: "Clarified deployment base path to avoid asset loading issues.",
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
            "Bypassed organization permission issues by deploying manually.",
            "Used npx vercel --prod for login, project creation, and GitHub linking steps.",
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
    icon: "Code",
    title: {
      ko: "리프레시 토큰 실패 시 무한 요청 루프 발생",
      en: "Infinite Request Loop on Refresh Token Failure",
      jp: "テーマ: リフレッシュトークンの発行に失敗した場合、無限要請ループが発生",
    },
    page: {
      ko: "인증 · 로그인",
      en: "Auth / Login",
      jp: "認証・ログイン",
    },
    owner: { ko: "윤경복", en: "Kyungbok", jp: "ユン·ギョンボク" },
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
            `When the Access Token expired,
the interceptor correctly attempted a Refresh Token request.
However, when that request itself failed with a 401 error,
the same request retried infinitely without redirecting to the login page.
The Network tab showed an endless stream of identical API calls.`,
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
            "The `_retry` flag in the interceptor was not set properly.",
            "As a result, the interceptor retried the same failed request repeatedly.",
            "Additionally, the catch block did not clearly distinguish refresh token failures, so the loop never terminated.",
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
          en: "Fix 1) Used _retry flag to prevent repeated requests.",
          jp: "処理段階 1) _retry フラッグで無限再要請を防止",
        },
        body: {
          ko: "`_retry` 값을 가장 먼저 설정해 동일 요청이 반복되지 않도록 막았습니다.",
          en: "Set `_retry` early in the interceptor to stop recursive retries.",
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
          en: "Fix 2) Handled refresh failures explicitly.",
          jp: "処理段階 2) リフレッシュ失敗時にすぐログアウト処理",
        },
        body: {
          ko: "`Refresh Token` 요청이 실패한 경우, 토큰을 즉시 삭제하고 로그인 페이지로 이동하도록 명확하게 분기 처리했습니다.",
          en: "On refresh failure, tokens are immediately cleared and the user is redirected to the login page.",
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
          en: "Fix 3) Abstracted logout logic into a reusable function.",
          jp: "処理段階3) ログアウトロジックを共通関数に分離",
        },
        body: {
          ko: "로그아웃 동작을 여러 곳에서 재사용할 수 있도록 `logout` 함수를 별도로 분리했습니다.",
          en: "Created a shared logout() utility for consistent behavior across modules.",
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
    icon: "Code",
    title: {
      ko: "React Query 캐싱으로 인한 차트 데이터 미갱신 문제",
      en: "React Query キャッシングによるチャートデータの未更新問題",
      jp: "トークン失効で無限リダイレクト",
    },
    page: { ko: "대시보드", en: "DashBoard", jp: "ユーザー管理" },
    owner: { ko: "김현진", en: "Kim Hyun Jin", jp: "キム・ヒョンジン" },
    tags: ["charts", "TanStack Query"],
    sections: [
      {
        heading: { ko: "문제 상황", en: "Symptom", jp: "問題状況" },
        body: {
          ko: [
            "탈퇴 사유별 월별 추세 차트에서 드롭다운으로 사유를 변경해도 차트가 업데이트되지 않는 문제가 발생했습니다.",
            "초기 렌더링 시에는 데이터가 정상적으로 표시되나, 사유 변경 시 이전 데이터가 그대로 유지되었습니다.",
          ].join("\n"),
          en: [
            "In the “Withdrawal Reason Trend by Month” chart, changing the dropdown reason did not update the chart.",
            "Initial render displayed correctly, but after changing the reason, the previous data persisted.",
          ].join("\n"),
          jp: [
            "退会理由別の月別傾向チャートからドロップダウンに理由を変更してもチャートが更新されないという問題が発生しました。",
            "初期レンダリング時にはデータが正常に表示されますが、事由変更時に以前のデータがそのまま維持されました。",
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
            "Even though the `queryKey` included `reasonCode`, React Query continued using the previously cached data when the component re-rendered.",
            "Additionally, even with the enabled option, React Query did not always trigger a new fetch when the query key changed.",
          ].join("\n"),
          jp: [
            "`React Query`の`query Key`に`reasonCode`が含まれていますが、コンポーネントがリレンダリングされるときに以前キャッシュされたデータを使用していました。",
            "enabledオプションがあっても、クエリキーが変更されたときに自動的に新しいデータをフェッチングしない場合がありました。",
          ].join("\n"),
        },
      },
      {
        heading: {
          ko: "시도한 해결방법 1. refetch() 함수를 호출하여 수동으로 데이터 갱신 시도",
          en: "Step 1) Called refetch() manually",
          jp: "試みた解決方法 1) refetch()関数を呼び出して手動でデータ更新を試みる",
        },
        body: {
          ko: "코드 복잡도가 증가",
          en: "increased code complexity",
          jp: "コード複雑度の増加",
        },
      },
      {
        heading: {
          ko: "시도한 해결 방법 2. staleTime을 0으로 설정",
          en: "Step 2) Set staleTime to 0",
          jp: "試みた解決方法 2) staleTimeを0に設定 ",
        },
        body: {
          ko: "불필요한 API 호출 증가",
          en: "caused unnecessary API calls",
          jp: "不要なAPI呼び出しの増加",
        },
      },
      {
        heading: {
          ko: "시도한 해결 방법 3. qurey Key에 추가 dependency 추가",
          en: "Step 3) Deploy via Vercel CLI",
          jp: "試みた解決方法 3) qurey Keyに追加 dependency追加",
        },
        body: {
          ko: ["근본적인 해결 불가"].join("\n"),
          en: ["did not solve the underlying issue"].join("\n"),
          jp: ["根本的な解決ができない"].join("\n"),
        },
      },
      {
        heading: { ko: "최종 해결 방법", en: "Symptom", jp: "最終解決方法" },
        body: {
          ko: [
            "`queryKey`에 `reasonCode`를 명확히 포함시키고, `enabled` 옵션으로 유효한 값일 때만 쿼리가 실행되도록 설정했습니다.",
            "초기 렌더링 시에는 데이터가 정상적으로 표시되나, 사유 변경 시 이전 데이터가 그대로 유지되었습니다.",
          ].join("\n"),
          en: [
            "I explicitly included `reasonCode` in the `queryKey`. And used `enabled` to run the query only when reasonCode is valid.",
            "I allowed React Query to correctly detect reasonCode changes and trigger fresh fetches.",
          ].join("\n"),
          jp: [
            "`query Key`にreason Codeを明確に含み、`enabled`オプションで有効な値のときだけクエリが実行されるように設定しました。",
            "`React Query`が`reason Code`の変更を感知して、自動的に新しいクエリを実行するように構造を改善しました。",
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
    icon: "Code",
    title: {
      ko: "Recharts PieChart의 activeIndex 상태 동기화 문제",
      en: "Recharts PieChart activeIndex Desynchronization Issue",
      jp: "Recharts PieChartのactive Index状態同期化問題",
    },
    page: { ko: "대시보드", en: "DashBoard", jp: "ユーザー管理" },
    owner: { ko: "김현진", en: "Kim Hyun Jin", jp: "キム・ヒョンジン" },
    tags: ["charts", "Recharts"],
    sections: [
      {
        heading: { ko: "문제 상황", en: "Issue", jp: "問題状況" },
        body: {
          ko: [
            "도넛 차트와 범례에 모두 `onMouseEnter/onMouseLeave` 이벤트를 설정했지만,마우스를 빠르게 이동하면 `activeIndex` 상태가 꼬이는 문제가 발생했습니다.",
            "차트에서 마우스를 떼어도 여전히 활성화된 상태로 표시되거나, 범례와 차트의 활성화 상태가 일치하지 않았습니다..",
          ].join("\n"),
          en: [
            "Both the donut chart and legend had onMouseEnter/onMouseLeave events.",
            "However, when moving the mouse quickly, the activeIndex state became desynchronized.",
            "Active slice remained highlighted even after leaving the chart",
            "Legend and chart active states were mismatched",
          ].join("\n"),
          jp: [
            "ドーナツチャートと凡例の両方で`onMouse Enter/onMouse` Leaveイベントを設定しましたが、マウスを素早く移動すると`activeIndex`状態がねじれる問題が発生しました。",
            "チャートからマウスを離しても、依然としてアクティブな状態で表示されたり、凡例とチャートのアクティブ状態が一致しませんでした。",
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
            "When the mouse moved rapidly between the chart and the legend:`onMouseLeave` from the chart, and `onMouseEnter` from the legend were triggered almost simultaneously, causing racing conditions.",
            "Due to React’s asynchronous state updates, the final state became unpredictable.",
          ].join("\n"),
          jp: [
            "チャート領域と凡例領域の間でマウスが移動する時、「on Mouse Leaveとon Mouse Enter」がほぼ同時に発生し、状態アップデート順序が保障されませんでした。",
            "Reactの非同期状態アップデートの特性上、最後の状態が予測不可能になりました。",
          ].join("\n"),
        },
      },
      {
        heading: {
          ko: "시도한 해결방법 1. setTimeout으로 setActiveIndex(null) 지연 실행",
          en: "Step 1) Delayed setActiveIndex(null) with setTimeout",
          jp: "試みた解決方法 1) setTimeoutでsetActive Index(null)遅延実行",
        },
        body: {
          ko: "`UX`가 부자연스러워짐",
          en: "unnatural `UX`",
          jp: "`UX`が不自然になる",
        },
      },
      {
        heading: {
          ko: "시도한 해결 방법 2. 별도의 ref를 사용한 debounce 구현",
          en: "Step 2) Added debounce using ref",
          jp: "試みた解決方法 2) 別途の ref を使用した debounce 実装",
        },
        body: {
          ko: "코드 복잡도 과다 증가",
          en: "overcomplicated code",
          jp: "コード複雑度の過多増加",
        },
      },
      {
        heading: {
          ko: "시도한 해결 방법 3. 차트와 범례 중 하나에만 이벤트 적용",
          en: "Step 3) Applied events to either the chart or legend only",
          jp: "試みた解決方法 3) チャートと凡例のうち一つだけにイベント適用",
        },
        body: {
          ko: ["사용자 경험 저하"].join("\n"),
          en: ["degraded UX"].join("\n"),
          jp: ["ユーザー経験の低下"].join("\n"),
        },
      },
      {
        heading: { ko: "최종 해결 방법", en: "Symptom", jp: "最終解決方法" },
        body: {
          ko: [
            "이벤트 핸들러를 함수로 분리하여 동일한 로직을 적용했습니다.",
            "`activeIndex`를 `Pie` 컴포넌트의 `prop`으로 명시적으로 전달하여 상태와 UI 동기화를 보장했습니다.",
          ].join("\n"),
          en: [
            "Unified event handlers to ensure consistent state updates.",
            "Centralized event handlers to avoid race conditions",
            "Explicitly passed `activeIndex` to the `Pie` component for reliable UI sync",
          ].join("\n"),
          jp: [
            "イベント ハンドラーを関数として分離し、同じロジックを適用しました。",
            "`active Index`を「Pie」コンポーネントの`prop`と明示的に伝え、状態とUIの同期を保証しました。",
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
      en: "TypeScript Type Safety Issue – DTO and Chart Data Mapping Error ",
      jp: "TypeScriptタイプの安定性問題 - DTOとChart Dataマッピングエラー",
    },
    page: { ko: "대시보드", en: "DashBoard", jp: "ユーザー管理" },
    owner: { ko: "김현진", en: "Kim Hyun Jin", jp: "キム・ヒョンジン" },
    tags: ["TypeScript", "Mapping"],
    sections: [
      {
        heading: { ko: "문제 상황", en: "Issue", jp: "問題状況" },
        body: {
          ko: [
            "`API`에서 받아온 데이터를 차트 형식으로 변환하는 과정에서 런타임 에러가 발생했습니다.",
            "`items` 배열이 `undefined`일 때 `.map()`을 호출하여 애플리케이션이 크래시되었습니다.",
          ].join("\n"),
          en: [
            "While converting API response data into chart data, a runtime error occurred because `.map()` was called on an `undefined` items array.",
          ].join("\n"),
          jp: [
            "`API`から受け取ったデータをチャート形式に変換する過程でランタイムエラーが発生しました。",
            "アイテム配列が`undefined`のとき`.map()`を呼び出してアプリケーションがクラッシュされました。",
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
            "When the backend had no data, it returned items as undefined instead of an empty array",
            "TypeScript defined `items` as `WithdrawalReasondoughnutItemDTO[]`, but runtime data could be missing",
            "The mismatch between TypeScript types and actual API behavior caused runtime crashes",
          ].join("\n"),
          jp: [
            "バックエンド`API`でデータがない場合、`items`を空の配列の代わりにundefinedに戻していました。",
            "`TypeScript`タイプ定義は`items:WithdrawalReasondoughnutItemDTO[]`となっていますが、実際のランタイムではオプショナルな値が来ることがありました。",
            "タイプ定義と実際の`API`応答スペックの不一致が問題でした。",
          ].join("\n"),
        },
      },
      {
        heading: {
          ko: "시도한 해결방법 1. 컴포넌트 레벨에서 if (!data?.items) 체크 ",
          en: "Step 1) Checked if (!data?.items) in the component",
          jp: "試みた解決方法 1) コンポーネントレベルで if (!data?.items)`チェック",
        },
        body: {
          ko: "모든 컴포넌트에 중복 발생",
          en: "repetitive boilerplate",
          jp: "すべてのコンポーネントに重複コードが発生",
        },
      },
      {
        heading: {
          ko: "시도한 해결 방법 2. API 응답을 받은 직후 필터링 ",
          en: "Step 2) Filtered data right after API call",
          jp: "試みた解決方法 2) API応答を受けた直後にフィルタリング",
        },
        body: {
          ko: "타입 안전성 여전히 보장 안 됨",
          en: "still lacked type safety",
          jp: "タイプの安定性が依然として保証されない",
        },
      },
      {
        heading: {
          ko: "시도한 해결 방법 3. DTO 타입을 옵셔널로 변경 → 기존 코드 대량 수정 필요",
          en: "Step 3) Changed DTO type to optional",
          jp: "試みた解決方法 3) DTOタイプをオプショナルに変更",
        },
        body: {
          ko: ["기존 코드 대량 수정 필요"].join("\n"),
          en: ["required too many code modifications"].join("\n"),
          jp: ["既存コードの大量修正が必要"].join("\n"),
        },
      },
      {
        heading: { ko: "최종 해결 방법", en: "Symptom", jp: "最終解決方法" },
        body: {
          ko: [
            "매핑 함수에서 `Optional chaining (?.)`과 `nullish coalescing (|| [])`을 사용하여 안전한 변환을 보장했습니다.",
            "컴포넌트에서 빈 배열 케이스를 명시적으로 처리하여 사용자에게 적절한 메시지를 표시했습니다.",
            "타입 안정성과 런타임 안정성을 모두 확보했습니다.",
          ].join("\n"),
          en: [
            "Used optional chaining (`?.`) + fallback (`|| []`) for safe transformation",
            "Component handles empty array with a clear user message",
            "Ensured both runtime safety and TypeScript type safety",
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
      ko: "토스트 알림창 중복 오류",
      en: "Duplicate Toast Notifications Not Disappearing",
      jp: "トークン失効で無限リダイレクト",
    },
    page: {
      ko: "Shared Components",
      en: "Shared Components",
      jp: "ユーザー管理",
    },
    owner: { ko: "서단비", en: "Seo Dan-bi", jp: "ソ・ダンビ" },
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
            "While implementing a toast notification component, multiple identical toasts appeared stacked without",
            "the previous one disappearing when the same toast was triggered repeatedly.",
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
            "React identifies components by their key value.",
            "If identical toasts share the same key, React re-renders the existing one instead of creating a new toast instance.",
            "As a result, the UI could not clearly determine which specific toast should be removed, causing duplicated or stale items to remain.",
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
          en: "Step 1) Generated a fully unique key",
          jp: "手順1) vercel.jsonでSPAルーティングを設定",
        },
        body: {
          ko: "`title`, `message`, `variant` 조합으로 충분히 고유한 `key` 생성했습니다.",
          en: "Generated a fully unique key by combining title, message, and variant.",
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
          en: "Step 2) Implemented a precise removeToast",
          jp: "手順2) vite.config.tsでbaseを設定",
        },
        body: {
          ko: "특정 토스트 객체를 정확히 제거하기 위한 토스트삭제 함수를 만들었습니다.",
          en: "Implemented a precise `removeToast()` function that deletes the exact toast instance, ensuring proper cleanup and no duplicate residue.",
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
      en: "Pagination Reset Logic Causing Pagination to Freeze at Page 1",
      jp: "トークン失効で無限リダイレクト",
    },
    page: {
      ko: "Lecture Management Page",
      en: "Lecture Management Page",
      jp: "ユーザー管理",
    },
    owner: { ko: "서단비", en: "Seo Dan-bi", jp: "ソ・ダンビ" },
    tags: ["TypeScript", "State", "debounce"],
    sections: [
      {
        heading: { ko: "문제 상황", en: "Issue", jp: "症状" },
        body: {
          ko: [
            `검색어 입력 시 기존 페이지 상태가 유지되어, 검색 후에도 페이지네이션이 첫 페이지로 리셋되지 않는 문제가 발생했습니다. 이를 해결하기 위해 resetToFirstPage()함수를 추가해 검색 시 1페이지로 초기화되도록 처리했지만, 이후에는 페이지네이션이 아예 작동하지 않고 항상 1페이지만 표시되는 새로운 이슈가 발생했습니다.`,
          ].join("\n"),
          en: [
            "When entering a search keyword, the pagination stayed on the previous page instead of resetting to page 1.",
            "A `resetToFirstPage()` function was added to fix this—but afterward, the pagination stopped working entirely and always remained on page 1.",
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
            "Initially, the search handler (handleSearch) did not include any pagination reset logic, so page changes were not reflected correctly when a new search was performed.",
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
            "I then introduced a separate `resetToFirstPage` function like this to force the page back to 1.",
            "However, because it was invoked independently of `handleSearch`, the timing between the two became desynchronized, and the page state ended up being effectively locked to page 1.",
          ].join("\n"),
          jp: [
            "VercelにGitHub組織への十分な権限が付与されておらず、リポジトリ連携や自動デプロイ設定がブロックされていた。",
          ].join("\n"),
        },
        codeLang: "ts",
        code: `  const resetToFirstPage = useCallback(() => {
    handlePageChange(1)
  }, [handlePageChange])`,
      },
      {
        heading: {
          ko: "해결방법. 검색이벤트가 발생할 때만 함수가 실행되도록 설정 ",
          en: "Step 1) I moved the resetToFirstPage() call inside the handleSearch function.",
          jp: "手順1) vercel.jsonでSPAルーティングを設定",
        },
        body: {
          ko: [
            "검색 이벤트가 발생할 때만 페이지를 초기화하도록handleSearch 내부에 resetToFirstPage()를 넣어서 검색을 감지할때만 페이지를 바뀌게 수정했습니다.",
            "이렇게 하면 검색어 변경 시에만 첫 페이지로 이동하고, 페이지네이션은 정상적으로 작동하여 이후 페이지 이동 시에도 상태가 유지됩니다.",
          ].join("\n"),
          en: [
            "To ensure that the page resets only when a search event occurs, I moved the `resetToFirstPage()` call inside the `handleSearch` function.",
            "With this change, the pagination now returns to page 1 only when the search keyword changes, while normal pagination behavior remains intact — allowing users to navigate between pages without the page state being overwritten.",
            "",
          ].join("\n"),
          jp: "`vercel.json` を追加し、リロード時も常に `index.html` にリライトされるようにした。",
        },
        codeLang: "ts",
        code: `  const handleSearch = (keyword: string) => {
    handleSearchChange(keyword)
    resetToFirstPage()
  }`,
      },
    ],
  },
  {
    id: "danbi-group",
    icon: "Code", // icon 수정해야될듯
    title: {
      ko: "필터링 상태값 미적용 되는 오류",
      en: "Filter + Search Mismatch in Study Group Management Page",
      jp: "トークン失効で無限リダイレクト",
    },
    page: {
      ko: "Lecture Management Page",
      en: "Lecture Management Page",
      jp: "ユーザー管理",
    },
    owner: { ko: "서단비", en: "Seo Dan-bi", jp: "ソ・ダンビ" },
    tags: ["TypeScript", "Filter"],
    sections: [
      {
        heading: { ko: "문제 상황", en: "Issue", jp: "症状" },
        body: {
          ko: [
            "스터디 그룹 관리 페이지에서 상태 필터(대기중/진행중/완료)를 적용한 후 검색을 하면 필터가 제대로 적용되지 않아 의도하지 않은 결과가 표시되는 문제가 발생했습니다.",
            "UI에는 `진행중` 필터가 선택되어 있는데 실제로는 모든 상태의 스터디 그룹이 검색되어, 사용자가 필터가 적용되었다고 착각하는 상황이었습니다.",
          ].join("\n"),
          en: [
            "Applying a status filter (Pending / In Progress / Completed) and then performing a search resulted in the filter not being applied.",
            "The UI showed “In Progress,” but the API returned all study groups, misleading the user into thinking the filter was still active.",
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
            "초기 버전에서는 필터와 검색이 독립적으로 동작하도록 구현되어 있었습니다.",
            "필터 상태는 UI에서만 관리되고 있었고, API 요청 시 필터 값이 포함되지 않아 실제 데이터 조회에 반영되지 않았습니다",
          ].join("\n"),
          en: [
            "In the initial version, the filter and the search operated independently.",
            "The filter state was managed only at the UI level and was not included in the API request payload, which meant that the selected filter was not reflected in the actual data fetching.",
          ].join("\n"),
          jp: [
            "VercelにGitHub組織への十分な権限が付与されておらず、リポジトリ連携や自動デプロイ設定がブロックされていた。",
            "また、ViteベースのSPAでは、`rewrites` や `base` 設定がないとリロード時に404が発生することがある。",
          ].join("\n"),
        },
        codeLang: "ts",
        code: `const handleFilterChange = (status) => {
  setSelectedStatus(status)
}

const handleSearch = (keyword) => {
  setSearchKeyword(keyword)
}`,
      },
      {
        heading: {
          ko: "시도한 해결방법 1. UI와 API 간의 상태 값을 명확히 매핑하는 상수를 정의 ",
          en: "Step 1)  I defined mapping constants to clearly connect the UI labels with the API's expected status values.",
          jp: "手順1) vercel.jsonでSPAルーティングを設定",
        },
        body: {
          ko: "먼저 UI와 API 간의 상태 값을 명확히 매핑하는 상수를 정의했습니다.",
          en: " I defined mapping constants to clearly connect the UI labels with the API's expected status values.",
          jp: "`vercel.json` を追加し、リロード時も常に `index.html` にリライトされるようにした。",
        },
        codeLang: "ts",
        code: `STUDY_GROUP_STATUS_REVERSE_MAP
   { '대기중': 'PENDING', '진행중': 'ONGOING', '완료': 'ENDED' }
   
STUDY_GROUP_STATUS_MAP
   { PENDING: '대기중', ONGOING: '진행중', ENDED: '완료' }`,
      },
      {
        heading: {
          ko: "시도한 해결 방법 2. 필터 상태를 API 요청에 정확히 변환하는 로직을 추가 ",
          en: "Step 2) I updated the API request logic so the filter state would be properly translated and applied.",
          jp: "手順2) vite.config.tsでbaseを設定",
        },
        body: {
          ko: "그리고 필터 상태를 API 요청에 정확히 변환하는 로직을 추가했습니다.",
          en: "I updated the API request logic so the filter state would be properly translated and applied.",
          jp: "デプロイ時のパス基準を明確にするため、Vite設定に `base: '/'` を追加した。",
        },
        codeLang: "ts",
        code: `const { data } = useStudyGroups({
  searchText: searchKeyword,
  status:
    selectedStatus === 'ALL'
      ? undefined
      : STUDY_GROUP_STATUS_REVERSE_MAP[selectedStatus],  
  sortKey: sortKey,
  pageSize: PAGE_SIZE,
  pageNumber: currentPage,
})`,
      },
      {
        heading: {
          ko: "시도한 해결방법 3. 필터 로직을 useStudyGroupFilter로 분리 ",
          en: "Step 3) I separated the filter logic into a dedicated hook",
          jp: "手順1) vercel.jsonでSPAルーティングを設定",
        },
        body: {
          ko: [
            "필터 로직을 useStudyGroupFilter로 분리하고, useStudyGroupManagement에서 검색, 필터, 페이지네이션을 통합 관리하도록 리팩토링했습니다. ",
            "이를 통해 최상단 페이지 컴포넌트는 비즈니스 로직 없이 뷰 로직만 담당하게 되었습니다.",
            "이제 필터와 검색이 동시에 작동하며, UI 상태와 API 요청이 정확히 동기화됩니다.",
          ].join("\n"),
          en: [
            "I separated the filter logic into a dedicated hook (useStudyGroupFilter) and refactored the architecture so that useStudyGroupManagement could centrally manage search, filter, and pagination states together.",
            "This allowed the top-level page component to focus solely on UI rendering without holding business logic.",
          ].join("\n"),
          jp: "`vercel.json` を追加し、リロード時も常に `index.html` にリライトされるようにした。",
        },
        codeLang: "ts",
        code: `// 필터 전용 hook
useStudyGroupFilter()

// 검색 전용 hook
useStudyGroupSearch()

// 페이지네이션 전용 hook
useStudyGroupPagination()

// 통합 관리 hook
useStudyGroupManagement() {
  // 위의 hook들을 조합하여 전체 흐름 관리
}`,
      },
    ],
  },
  {
    id: "yeop-modal",
    icon: "Code", // icon 수정해야될듯
    title: {
      ko: "복구 완료 후 모달 상태 업데이트 이슈",
      en: " Modal State Not Updating After Successful Restore",
      jp: "トークン失効で無限リダイレクト",
    },
    page: {
      ko: "UserWithdrawal Management Page",
      en: "UserWithdrawal Management Page",
      jp: "ユーザー管理",
    },
    owner: { ko: "홍엽", en: "Hong Yeop", jp: "ホンヨプ" },
    tags: ["TypeScript", "Modal", "Restore"],
    sections: [
      {
        heading: { ko: "문제 상황", en: "Symptom", jp: "症状" },
        body: {
          ko: [
            "회원 복구 성공 후 토스트가 표시되지 않는 이슈가 있었고, 복구 시, 회원 복구하기 버튼이 사라지지 않고 상태가 활성 으로 변경되지 않는 이슈가 있었습니다.",
          ].join("\n"),
          en: [
            "After restoring a user account, a toast message did not appear, and the “Restore User” button did not disappear.",
            "Additionally, the user status did not update to active in the modal.",
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
            "There was an issue in `WithdrawalManagementPage.tsx`",
            "`mutateAsync()` returns a Promise, but ₩setIsRestored(true)` was executed immediately, without waiting for the Promise to complete.",
            "As a result, the UI state changed regardless of whether the API call succeeded or failed.",
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
          en: "Step 1) Updated the logic so that setIsRestored is executed only after mutateAsync() completes.",
          jp: "手順1) vercel.jsonでSPAルーティングを設定",
        },
        body: {
          ko: [
            "`mutateAsync()`의 `Promise`가 완료된 이후에 `setIsRestored`가 실행되게 수정하였습니다.",
            "그리고 `isRestored` 상태를 하위 컴포넌트에 전달하고, 조건부 렌더링으로 버튼 숨김 및 상태 변경했습니다. ",
            "(`WithdrawalManagementPage → WithdrawalModalOutlet → WithdrawalModalFooter`)",
          ].join("\n"),
          en: [
            "Updated the logic so that `setIsRestored` is executed only after `mutateAsync()` completes.",
            "Passed the isRestored state down to child components and applied conditional rendering to hide the button and update the status.",
            "(`WithdrawalManagementPage → WithdrawalModalOutlet → WithdrawalModalFooter`)",
          ].join("\n"),
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
      en: "Accordion Opening Simultaneously",
      jp: "トークン失効で無限リダイレクト",
    },
    page: {
      ko: "UserWithdrawal Management Page",
      en: "UserWithdrawal Management Page",
      jp: "ユーザー管理",
    },
    owner: { ko: "홍엽", en: "Hong Yeop", jp: "ホンヨプ" },
    tags: ["TypeScript", "UI/UX", "Accrodion"],
    sections: [
      {
        heading: { ko: "문제 상황", en: "Issue", jp: "症状" },
        body: {
          ko: [
            "탈퇴 사유 아코디언을 클릭한 수 권한 아코디언을 클릭할 경우 둘 다 동시에 열리는 이슈가 있었습니다.",
            "이로 인해 `UI`가 복잡해지고 사용자 경험이 저하되는 문제점이 있었습니다.",
          ].join("\n"),
          en: [
            "When the user clicked the “Withdrawal Reason” accordion and then clicked the “Role” accordion, both accordion sections remained open at the same time.",
            "This caused visual clutter and decreased usability.",
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
            "Each accordion state (`reasonAccordion` and `roleAccordion`) was being managed independently.",
            "Therefore, opening one accordion did not affect the other, allowing both to remain open simultaneously.",
          ].join("\n"),
          jp: [
            "VercelにGitHub組織への十分な権限が付与されておらず、リポジトリ連携や自動デプロイ設定がブロックされていた。",
          ].join("\n"),
        },
      },
      {
        heading: {
          ko: "해결방법. 아코디언의 onValueChange 핸들러에서 상대 아코디언 닫기 로직을 추가 ",
          en: "Step 1) Add logic to close the opposite accordion inside each onValueChange handler",
          jp: "手順1) vercel.jsonでSPAルーティングを設定",
        },
        body: {
          ko: [
            "각 아코디언의`onValueChange`핸들러에서 상대 아코디언 닫기 로직을 추가하여 하나의 아코디언 클릭후 다른 아코디언 클릭시 아코디언이 닫히게 했습니다.",
            "그리고 `isRestored` 상태를 하위 컴포넌트에 전달하고, 조건부 렌더링으로 버튼 숨김 및 상태 변경했습니다. ",
            "(`WithdrawalManagementPage → WithdrawalModalOutlet → WithdrawalModalFooter`)",
          ].join("\n"),
          en: "By adding logic to close the other accordion when one is opened, only one accordion can remain open at a time.",
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
      en: "Mapping Code Values to Korean Labels",
      jp: "トークン失効で無限リダイレクト",
    },
    page: {
      ko: "UserWithdrawal Management Page",
      en: "UserWithdrawal Management Page",
      jp: "ユーザー管理",
    },
    owner: { ko: "홍엽", en: "Hong Yeop", jp: "ホンヨプ" },
    tags: ["TypeScript", "Mapping"],
    sections: [
      {
        heading: { ko: "문제 상황", en: "Symptom", jp: "症状" },
        body: {
          ko: [
            "API에서 코드 형태로 반환(`NO_LONGER_NEEDED,M,admin`) 되는 내용을 UI에서 한글로 바꿔서 표기해야 했습니다.",
          ].join("\n"),
          en: [
            "The API returned information in short code formats (e.g., `NO_LONGER_NEEDED`, `M`, `admin`), but these needed to be converted to Korean labels for UI display.",
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
            "The backend uses short code values to reduce storage size and maintain language-independent keys for future internationalization.",
            "However, the frontend must convert these simplified codes into user-friendly labels.",
            "There was no existing logic to handle this mapping.",
          ].join("\n"),
          jp: [
            "VercelにGitHub組織への十分な権限が付与されておらず、リポジトリ連携や自動デプロイ設定がブロックされていた。",
          ].join("\n"),
        },
      },
      {
        heading: {
          ko: "해결방법. Constants 매핑 테이블과 조건문을 활용한 코드-한글 변환 처리 ",
          en: "Step 1) Created constant mapping tables and conditional logic to convert codes into Korean labels.",
          jp: "手順1) vercel.jsonでSPAルーティングを設定",
        },
        body: {
          ko: [
            "Constants 매핑 테이블과 조건문을 활용한 코드-한글로 변환하도록 처리하였습니다.",
          ].join("\n"),
          en: "Created constant mapping tables and conditional logic to convert codes into Korean labels.",
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
    id: "wonhee-fl",
    icon: "Code", // icon 수정해야될듯
    title: {
      ko: "회원 상세 정보 모달 플리커 현상",
      en: "Flickering Issue in the User Detail Modal",
      jp: "トークン失効で無限リダイレクト",
    },
    page: {
      ko: "User Management Page",
      en: "User Management Page",
      jp: "ユーザー管理",
    },
    owner: { ko: "이원희", en: "Lee Won Hee", jp: "イ・ウォニ" },
    tags: ["TypeScript", "State"],
    sections: [
      {
        heading: { ko: "문제 상황", en: "Issue", jp: "症状" },
        body: {
          ko: [
            "회원 상세 정보를 수정하기 위해 창을 열고 수정하기 버튼을 누른 뒤 수정을 위해 input 필드에 어떤 수정을 가할 시 모달 창이 다시 한번 랜더링 되는 문제",
            "네트워크 탭에서 2번의 렌더링 현상을 확인하였습니다.",
          ].join("\n"),
          en: [
            "When opening the user detail modal and clicking “Edit,” the modal flickered whenever the user typed into an input field.",
            "Network tab logs confirmed that the modal was being re-rendered twice.",
          ].join("\n"),
          jp: [
            "Vercelでプロジェクトをデプロイしようとすると、GitHub組織の権限問題でブロックされる。",
            "GitHubリポジトリ自体は存在するが、Vercel側でのプロジェクト作成・リンク時にエラーとなり、自動デプロイが設定できない。",
          ].join("\n"),
        },
        video: {
          basePath: "/videos/troubleshooting/wonhee-fl",
          label: {
            ko: "회원 상세 정보 모달 플리커 현상",
            en: "Flickering Issue in the User Detail Modal",
            jp: "Vercel CLIで組織権限問題を回避してデプロイしたデモ",
          },
        },
      },
      {
        heading: { ko: "원인", en: "Cause", jp: "原因" },
        body: {
          ko: [
            "기본 로직: `useUserDetail` 훅에서 서버 데이터를 가져옴 → `useEffect` 부분을 통해 `onUserChange(부모 컴포넌트)`와 동기화",
          ].join("\n"),
          en: [
            "The basic logic was as follows: The `useUserDetail` hook fetches data from the server → the `useEffect` synchronizes it with the parent component through onUserChange",
          ].join("\n"),
          jp: [
            "VercelにGitHub組織への十分な権限が付与されておらず、リポジトリ連携や自動デプロイ設定がブロックされていた。",
          ].join("\n"),
        },
      },
      {
        heading: { ko: "분석", en: "Cause", jp: "原因" },
        body: {
          ko: [
            "handlechange를 통해 입력 값이 바뀌면 로컬에 저장되어 있는 정보 변경 → 저장을 눌러서 서버와 동기화",
            "아래와 같은 로직으로 작성을 한 상황인데 ",
            "useEffect 코드에서 볼 때 isEditing(수정 중)일 때도 항상 LocalUser에 데이터를 덮어 씌우게 하고 있는 상황이다. ",
            "그래서 수정을 하려고 하면 로컬 값이랑 서버 값이 달라지면서 서버 값을 다시 로컬에 덮어 씌우며 재 랜더링 되는 문제가 생기는 것.",
          ].join("\n"),
          en: [
            "when `handleChange` updates the input field, the modified value is stored in local state → and finally, clicking “Save” syncs the changes back to the server.",
            "With this structure in place, the logic was written like this:",
            "Looking at this useEffect code, we can see that even when isEditing (editing mode) is true, the server value is always being written back into localUser.",
            "Because of this, when the user tries to make changes, the local state and the server response become different, and the server value overwrites the local value again — causing a re-render and resulting in the modal flickering issue.",
          ].join("\n"),
          jp: [
            "VercelにGitHub組織への十分な権限が付与されておらず、リポジトリ連携や自動デプロイ設定がブロックされていた。",
          ].join("\n"),
        },
        codeLang: "ts",
        code: `useEffect(() => {
  if (user) setLocalUser(user);
}, [user]);`,
      },
      {
        heading: {
          ko: "해결방법. 편집 상태 일 때는 데이터를 덮어 씌우지 못하게 예외 처리",
          en: "Step 1) By preventing the data from being overwritten while the user is in edit mode",
          jp: "手順1) vercel.jsonでSPAルーティングを設定",
        },
        body: {
          ko: [
            "편집 상태 일 때는 데이터를 덮어 씌우지 못하게 예외 처리를 함으로 다시 랜더링 되면서 깜빡이는 현상 해결",
            "또한 React.memo로 props가 바뀌지 않으면 해당 컴포넌트를 재 랜더링 하지 않는다는 안전 장치를 걸어둠.",
          ].join("\n"),
          en: [
            "By preventing the data from being overwritten while the user is in edit mode, the issue of the modal re-rendering and flickering was resolved.",
            "Additionally, React.memo was applied so that the component does not re-render unless its props actually change, providing an extra safety measure.",
          ].join("\n"),
          jp: "`vercel.json` を追加し、リロード時も常に `index.html` にリライトされるようにした。",
        },
        codeLang: "ts",
        code: `  useEffect(() => {
    if (user && !isEditing) {
      setLocalUser(user);
      onUserChange(user);
    }
  }, [user, isEditing, onUserChange]);
  
  export const UserModalOutlet = React.memo(UserModalOutletComponent);
  `,
      },
    ],
  },
  {
    id: "wonhee-profile",
    icon: "Code", // icon 수정해야될듯
    title: {
      ko: "프로필 이미지 변경 처리",
      en: "Profile Image Update Not Reflected on Server",
      jp: "トークン失効で無限リダイレクト",
    },
    page: {
      ko: "User Management Page",
      en: "User Management Page",
      jp: "ユーザー管理",
    },
    owner: { ko: "이원희", en: "Lee Won Hee", jp: "イ・ウォニ" },
    tags: ["TypeScript", "State", "debounce"],
    sections: [
      {
        heading: { ko: "문제 상황", en: "Issue", jp: "症状" },
        body: {
          ko: [
            `회원 상세 정보의 프로필 이미지를 수정하기 위해 이미지를 넣고 저장하기를 누르면 모달 창에서는 적용이 된 것 처럼 보이지만 서버 reponse에 URL이 들어가지 않았고 실제로도 모달 창을 닫았다가 다시 열면 변경된 이미지로 적용이 안되는 문제`,
          ].join("\n"),
          en: [
            `Updating a user’s profile image appeared to work inside the modal, but:
The server response contained no updated image URL
Closing and reopening the modal showed that the change was not applied`,
            "A `resetToFirstPage()` function was added to fix this—but afterward, the pagination stopped working entirely and always remained on page 1.",
          ].join("\n"),
          jp: [
            "Vercelでプロジェクトをデプロイしようとすると、GitHub組織の権限問題でブロックされる。",
            "GitHubリポジトリ自体は存在するが、Vercel側でのプロジェクト作成・リンク時にエラーとなり、自動デプロイが設定できない。",
          ].join("\n"),
        },
        video: {
          basePath: "/videos/troubleshooting/wonhee-images",
          label: {
            ko: "프로필 이미지 변경 처리",
            en: "Profile Image Update Not Reflected on Server",
            jp: "Profile Image Update Not Reflected on Server",
          },
        },
      },
      {
        heading: { ko: "원인", en: "Cause", jp: "原因" },
        body: {
          ko: [
            "In this code, when the user uploads an image, the updated data is passed both to the local state and to the parent.",
            "However, only the Base64 preview image was stored locally — the actual File object was not being sent to the server.",
          ].join("\n"),
          en: [
            "Initially, the search handler (handleSearch) did not include any pagination reset logic, so page changes were not reflected correctly when a new search was performed.",
          ].join("\n"),
          jp: [
            "VercelにGitHub組織への十分な権限が付与されておらず、リポジトリ連携や自動デプロイ設定がブロックされていた。",
          ].join("\n"),
        },
        codeLang: "ts",
        code: `const handleAvatarChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === "string") {
        setPreviewAvatar(reader.result);
        const updated = { ...localUser, avatar: reader.result };
        setLocalUser(updated);
        onUserChange(updated);
      }
    };
    reader.readAsDataURL(file);
  };`,
      },
      {
        heading: {
          ko: "해결방법 1. 실제 서버에 업로드 하는 코드를 추가 ",
          en: "Step 1) The code was modified so that the actual File object gets stored and passed to the server.",
          jp: "手順1) vercel.jsonでSPAルーティングを設定",
        },
        body: {
          ko: [
            "먼저 위 코드에서 실제 서버에 업로드 하는 코드를 추가했음. 이렇게 수정하고 다시 돌려보니 이번엔 기본 이미지만 적용되고 있음.",
          ].join("\n"),
          en: [
            "The code was modified so that the actual File object gets stored and passed to the server.",
            "But after this change, only the default avatar appeared instead of the updated one.",
          ].join("\n"),
          jp: "`vercel.json` を追加し、リロード時も常に `index.html` にリライトされるようにした。",
        },
        codeLang: "ts",
        code: `  const handleAvatarChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === "string") {
        setPreviewAvatar(reader.result);
      }
    };
    reader.readAsDataURL(file);

    // 실제 업로드용 File은 avatar에 저장
    const updated = { ...localUser, avatar: file };
    setLocalUser(updated);
    onUserChange(updated);
  };`,
      },
      {
        heading: {
          ko: "해결방법 2. types/user.ts, the avatar-related types were updated",
          en: "Step 1) I moved the resetToFirstPage() call inside the handleSearch function.",
          jp: "手順1) vercel.jsonでSPAルーティングを設定",
        },
        body: {
          ko: [
            "관리자 콘솔로 확인 해보니 아래 코드 부분이 계속 적용되지 않고 있는 걸 확인 tpyes/user.ts에 가서",
            "`avatar?: string |  null` 부분에 File을 추가 그리고 `profile_img_url?: string | null;` 부분을 string에서 File로 변경해서 해결",
          ].join("\n"),
          en: [
            "Upon checking the console, I found that the following rendering logic was not working correctly:",
            "In `types/user.ts`, the avatar-related types were updated:",
            "`avatar?: string | null` → allowed File as well",
            "`profile_img_url?: string | null` → changed from string-only to File-capable type",
          ].join("\n"),
          jp: "`vercel.json` を追加し、リロード時も常に `index.html` にリライトされるようにした。",
        },
        codeLang: "ts",
        code: `  const handleAvatarChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === "string") {
        setPreviewAvatar(reader.result);
      }
    };
    reader.readAsDataURL(file);

    // 실제 업로드용 File은 avatar에 저장
    const updated = { ...localUser, avatar: file };
    setLocalUser(updated);
    onUserChange(updated);
  };`,
      },
    ],
  },
  {
    id: "wonhee-detail",
    icon: "Code", // icon 수정해야될듯
    title: {
      ko: "상세 정보 휴대폰 하이픈(-) 표기 문제",
      en: "Hyphen Formatting Issue in Phone Numbers",
      jp: "トークン失効で無限リダイレクト",
    },
    page: {
      ko: "User Management Page",
      en: "User Management Page",
      jp: "ユーザー管理",
    },
    owner: { ko: "이원희", en: "Lee Won Hee", jp: "イ・ウォニ" },
    tags: ["TypeScript", "State"],
    sections: [
      {
        heading: { ko: "문제 상황", en: "Issue", jp: "症状" },
        body: {
          ko: [
            `서버에서 주는 전화번호의 응답 값이 ‘-’이 붙어서 오는 경우도 있고 빠져서 오는 경우도 있는 상황.`,
          ].join("\n"),
          en: [
            "The phone number values returned from the server were inconsistent — sometimes the number included hyphens (-), and sometimes it didn’t.",
          ].join("\n"),
          jp: [
            "Vercelでプロジェクトをデプロイしようとすると、GitHub組織の権限問題でブロックされる。",
            "GitHubリポジトリ自体は存在するが、Vercel側でのプロジェクト作成・リンク時にエラーとなり、自動デプロイが設定できない。",
          ].join("\n"),
        },
        codeLang: "ts",
        code: `export const formatPhone = (phone: string): string => {
  const digits = phone.replace(/\\D/g, "");
  if (digits.length === 11) {
    return \`\${digits.slice(0, 3)}-\${digits.slice(3, 7)}-\${digits.slice(7)}\`;
  } else if (digits.length === 10) {
    return \`\${digits.slice(0, 3)}-\${digits.slice(3, 6)}-\${digits.slice(6)}\`;
  }
  return phone;
};`,
      },
      {
        heading: {
          ko: "해결방법. Be 측과 협의 하여 서버 쪽 응답 값에서는 모두 ‘-’을 빼는 것으로 통일 ",
          en: "Step 1) Discussing with the backend team",
          jp: "手順1) vercel.jsonでSPAルーティングを設定",
        },
        body: {
          ko: [
            "Be 측과 협의 하여 서버 쪽 응답 값에서는 모두 ‘-’을 빼는 것으로 통일 ",
            "그리고 utils 안에 formatPhone 이라는 함수를 제작 표시되는 페이지에 import 해서 사용.",
          ].join("\n"),
          en: [
            "After discussing with the backend team, we agreed to standardize the server response so that all phone numbers are returned without hyphens.",
            "Then, on the frontend, we created a formatPhone utility function and applied it to every page where phone numbers are displayed.",
          ].join("\n"),
          jp: "`vercel.json` を追加し、リロード時も常に `index.html` にリライトされるようにした。",
        },
      },
    ],
  },
  {
    id: "danbi-filter",
    icon: "Code", // icon 수정해야될듯
    title: {
      ko: "공통 컴포넌트 모달의 크기 및 내부 내용 문제",
      en: "Modal Size and Content Overflow Issues in the Common Modal Component",
      jp: "トークン失効で無限リダイレクト",
    },
    page: {
      ko: "Modal Share Component",
      en: "Modal Share Component",
      jp: "ユーザー管理",
    },
    owner: { ko: "이원희", en: "Lee Won Hee", jp: "イ・ウォニ" },
    tags: ["TypeScript", "Modal", "debounce"],
    sections: [
      {
        heading: { ko: "문제 상황", en: "Issue", jp: "症状" },
        body: {
          ko: [
            `공통 컴포넌트 모달을 제작하고 난 뒤 팀원들이 공통 컴포넌트를 사용했을 시 크기 수정이 안되고, 그렇기에 내부 내용이 밖으로 나가거나 짤리는 문제 발생`,
          ].join("\n"),
          en: [
            "After building the common modal component, team members reported that they were unable to adjust the modal size when using it.",
            "As a result, content would either overflow outside the modal or get clipped.",
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
            "공통 컴포넌트를 제작할 때 컴포넌트 내부에 크기를 지정해버리는 코드를 추가했음. 그래서 사용하는 페이지에서 크기 조정이 불가능",
          ].join("\n"),
          en: [
            "When the common modal component was first implemented, size-related styles were hard-coded inside the component itself.",
            "Because of this, any page using the modal couldn’t override or customize the size, causing layout issues depending on the content.",
          ].join("\n"),
          jp: [
            "VercelにGitHub組織への十分な権限が付与されておらず、リポジトリ連携や自動デプロイ設定がブロックされていた。",
          ].join("\n"),
        },
      },
      {
        heading: {
          ko: "해결방법. 공통 모달컴포넌트를 한번 더 분리 ",
          en: "Solution ) We refactored the modal into smaller composable parts",
          jp: "手順1) vercel.jsonでSPAルーティングを設定",
        },
        body: {
          ko: [
            "공통 컴포넌트 모달 자체를 모달의 상단 부분을 제공하는 ModalHeader, 닫기 버튼만 제공하는 CloseModalFooter로 분리해서 배열로 인식하게 제작.",
            "그리고 각자 Outlet를 제작할 수 있도록 해서 각각의 내부 내용이 달라 크기를 수정해야 하는 문제 해결",
          ].join("\n"),
          en: [
            `We refactored the modal into smaller composable parts —
a ModalHeader that only handles the top section, and a CloseModalFooter that provides the close button.
By exposing these pieces as an array-based layout structure and allowing each page to build its own outlet component, every screen can now freely customize its internal content and modal size.`,
          ].join("\n"),
          jp: "`vercel.json` を追加し、リロード時も常に `index.html` にリライトされるようにした。",
        },
      },
    ],
  },
];
