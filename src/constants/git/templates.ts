export const ISSUE_TEMPLATE_TEXT = `
name: ✨ Feat Request

about: 새로운 기능 / 개선 요청을 제안할 때 사용하는 템플릿
title: "[Feat]: "

## 💡 문제 상황
이 기능이 왜 필요한지 설명해주세요.  
(예: 검색 시 필터 기능이 없어서 불편합니다.)

## 🚀 제안하는 해결책
어떤 기능이 추가되면 좋을지 작성해주세요.  
(예: 검색창 옆에 카테고리 필터 드롭다운 추가)

## 📎 추가 맥락
참고할 자료(이미지, 링크 등)를 첨부해주세요.
`.trim();

export const PR_TEMPLATE_TEXT = `
## PR 제목
- [Feat 제목]

## 작업 내용
-

## 체크리스트
- [ ] 코드에 불필요한 console.log 제거
- [ ] 로컬에서 정상 동작 확인
- [ ] 테스트 코드 통과
- [ ] PR 제목이 규칙에 맞게 작성됨 (예: [Fix]/[Feat]/[Docs])

## 관련 이슈
Closes #

## 스크린샷 (선택)
`.trim();
