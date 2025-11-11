import { ProjectOverviewSectionLayout } from "../ProjectOverviewSectionLayout";

export function DashboardSection() {
  return (
    <ProjectOverviewSectionLayout
      label="기능 03"
      title="운영 인사이트 대시보드"
      description={
        <>
          - 가입/이탈 추이, 활성 스터디 수, 지원/선발 현황을 한 화면에서 확인
          <br />
          - 인기 카테고리, 플랫폼별 트렌드 등을 시각화하여
          <br />
          &nbsp;&nbsp;운영자가 데이터 기반 의사결정을 할 수 있도록 설계했습니다.
        </>
      }
    />
  );
}
