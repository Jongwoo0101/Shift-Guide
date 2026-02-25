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
    │   └── menu.json       # 🔒 레시피 데이터
    ├── hooks/
    │   └── useQuiz.js      # 퀴즈 모드 커스텀 훅
    ├── pages/
    │   ├── Home.jsx / .module.css
    │   ├── DrinkPage.jsx / .module.css   # Hot·Ice 공용
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

## 메뉴 수정 (`src/data/menu.json`)

```json
{
  "hot": [
    {
      "name": "음료명",
      "rows": [
        { "label": "재료명", "s": "S양", "r": "R양", "l": "L양" },
        { "label": "신규재료", "s": "...", "r": "...", "l": "...", "highlight": true }
      ]
    }
  ],
  "ice": [ ... ]
}
```

- `highlight: true` → 🆕 주황색 강조
- `"—"` → 해당 사이즈 없음

## ✨ 기능

| 기능 | 구현 위치 |
|------|-----------|
| 실시간 검색 | `DrinkPage.jsx` — `useMemo` 필터 |
| 퀴즈 모드 | `useQuiz.js` 커스텀 훅 |
| 음료 아코디언 | `DrinkCard.jsx` |
| 업무순서 타임라인 | `WorkSection.jsx` |
| CSS Modules | 컴포넌트별 스코프 스타일 |
