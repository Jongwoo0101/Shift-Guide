import styles from './Home.module.css'

const fadeUp = (delay) => ({
  opacity: 0,
  animation: `fadeUp 0.6s ${delay}s forwards`,
})

export default function Home({ categories, onNavigate }) {
  return (
    <div className={styles.home}>
      <span className={`${styles.deco} ${styles.deco1}`}>☕</span>
      <span className={`${styles.deco} ${styles.deco2}`}>☕</span>

      <p className={styles.badge} style={fadeUp(0.1)}>
        Coffee Bean &amp; Tea Leaf — SOP
      </p>

      <h1 className={styles.title} style={fadeUp(0.25)}>
        Today's<br /><em>Shift</em> Guide
      </h1>

      <p className={styles.subtitle} style={fadeUp(0.4)}>
        원종우 님의 업무 순서와 레시피를 한눈에 확인하세요
      </p>

      <div className={styles.btnRow} style={fadeUp(0.55)}>
        {/* 음료 카테고리 — menu.json의 categories 배열에서 동적으로 생성 */}
        {categories.map((cat, i) => (
          <button
            key={cat.id}
            className={styles.btn}
            data-theme={cat.theme}
            style={{
              background: `linear-gradient(135deg, var(--cat-from), var(--cat-to))`,
              boxShadow: `0 8px 32px var(--cat-shadow)`,
              filter: 'brightness(1.15)',
              animationDelay: `${0.55 + i * 0.08}s`,
            }}
            onClick={() => onNavigate(cat.id)}
          >
            <span className={styles.btnIcon}>{cat.icon}</span>
            {cat.label}
          </button>
        ))}

        {/* 업무순서는 항상 고정 */}
        <button
          className={`${styles.btn} ${styles.btnWork}`}
          style={fadeUp(0.55 + categories.length * 0.08)}
          onClick={() => onNavigate('work')}
        >
          <span className={styles.btnIcon}>📋</span> 업무순서
        </button>
      </div>
    </div>
  )
}
