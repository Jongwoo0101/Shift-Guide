import styles from './PageNav.module.css'

const BADGE = {
  hot:  { cls: styles.badgeHot,  label: 'HOT'  },
  ice:  { cls: styles.badgeIce,  label: 'ICED' },
  work: { cls: styles.badgeWork, label: 'WORK' },
}

const TITLE = {
  hot:  '🔥 Hot',
  ice:  '🧊 Iced',
  work: '📋 업무순서',
}

export default function PageNav({ type, onBack }) {
  const badge = BADGE[type]
  return (
    <nav className={styles.nav}>
      <button className={styles.backBtn} onClick={onBack}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M19 12H5M5 12l7-7M5 12l7 7" />
        </svg>
        홈
      </button>
      <span className={styles.title}>{TITLE[type]}</span>
      <span className={`${styles.badge} ${badge.cls}`}>{badge.label}</span>
    </nav>
  )
}
