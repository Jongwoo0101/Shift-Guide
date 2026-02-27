# ☕ 커피빈 SOP — React + Vite

## 📁 프로젝트 구조

```
/
├── index.html
├── vite.config.js
├── package.json
└── src/
    ├── main.jsx            # 진입점
    ├── App.jsx             # 라우터 (page state)
    ├── index.css           # 전역 CSS 변수 & 키프레임
    ├── data/
    │   └── menu.json       # 🔒 레시피 데이터 (gitignore 처리)
    ├── hooks/
    │   └── useQuiz.js      # 퀴즈 모드 커스텀 훅
    ├── pages/
    │   ├── Home.jsx / .module.css
    │   ├── DrinkPage.jsx / .module.css   # 모든 음료 카테고리 공용
    │   └── WorkPage.jsx / .module.css
    └── components/
        ├── PageNav.jsx / .module.css     # 상단 내비게이션
        ├── DrinkCard.jsx / .module.css   # 음료 아코디언 카드
        ├── QuizBar.jsx / .module.css     # 퀴즈 모드 토글
        └── WorkSection.jsx / .module.css # 업무순서 타임라인
```

## 실행

```bash
# 1. 의존성 설치
npm install

# 2. 개발 서버 실행
npm run dev
# → http://localhost:5173

# 3. 프로덕션 빌드
npm run build
npm run preview
```

## 메뉴 수정 (`src/data/menu.json` 직접추가해야함(프렌차이즈 카페 보안상 레시피 공개 불가))

### 전체 구조

```json
{
  "categories": [ ... ],
  "drinks": { ... }
}
```

### 1. 새 카테고리 추가 (`categories`)

```json
"categories": [
  {
    "id": "blended",       // 고유 ID (drinks 키와 일치해야 함)
    "label": "Ice Blended", // 화면에 표시되는 이름
    "icon": "🥤",           // 버튼 아이콘
    "theme": "blended"     // index.css의 [data-theme] 색상과 연결
  }
]
```

### 2. 음료 추가 (`drinks`)

```json
"drinks": {
  "blended": [
    {
      "name": "음료명",
      "rows": [
        { "label": "재료명",  "s": "S양", "r": "R양", "l": "L양" },
        { "label": "신규재료", "s": "...", "r": "...", "l": "...", "highlight": true }
      ]
    }
  ]
}
```

### 옵션

| 값 | 의미 |
|----|------|
| `"—"` | 해당 사이즈 없음 |
| `"highlight": true` | 🆕 주황색 강조 표시 |

### 3. 새 카테고리 색상 지정 (`src/index.css`)

카테고리를 추가했다면 `index.css`에 색상 토큰도 추가해요.

```css
[data-theme="blended"] {
  --cat-from:        #3a1a4a;  /* 버튼 그라디언트 시작 */
  --cat-to:          #7b3fa0;  /* 버튼 그라디언트 끝   */
  --cat-shadow:      rgba(123,63,160,0.4);
  --cat-badge-bg:    rgba(123,63,160,0.25);
  --cat-badge-color: #c084e0;
}
```

## 기능

| 기능 | 구현 위치 |
|------|-----------| 
| 실시간 검색 | `DrinkPage.jsx` — `useMemo` 필터 |
| 퀴즈 모드 | `useQuiz.js` 커스텀 훅 |
| 음료 아코디언 | `DrinkCard.jsx` |
| 업무순서 타임라인 | `WorkSection.jsx` |
| CSS Modules | 컴포넌트별 스코프 스타일 |
| 카테고리 동적 확장 | `menu.json`만 수정하면 자동 반영 |
