import styles from './PageNav.module.css'

export default function PageNav({ category, onBack }) {
  return (
    <nav className={styles.nav}>
      <button className={styles.backBtn} onClick={onBack}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M19 12H5M5 12l7-7M5 12l7 7" />
        </svg>
        홈
      </button>

      <span className={styles.title}>
        {category.icon} {category.label}
      </span>

      {/* 배지 색상도 data-theme 토큰으로 자동 적용 */}
      <span className={styles.badge} data-theme={category.theme}>
        {category.label.toUpperCase()}
      </span>
    </nav>
  )
}
