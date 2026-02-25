import styles from './Home.module.css'

const fadeUp = (delay) => ({
  opacity: 0,
  animation: `fadeUp 0.6s ${delay}s forwards`,
})

export default function Home({ onNavigate }) {
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
        원종우 님의 레시피와 업무 순서를 한눈에 확인하세요
      </p>

      <div className={styles.btnRow} style={fadeUp(0.55)}>
        <button className={`${styles.btn} ${styles.btnHot}`} onClick={() => onNavigate('hot')}>
          <span className={styles.btnIcon}>🔥</span> Hot
        </button>
        <button className={`${styles.btn} ${styles.btnIce}`} onClick={() => onNavigate('ice')}>
          <span className={styles.btnIcon}>🧊</span> Iced
        </button>
        <button className={`${styles.btn} ${styles.btnWork}`} onClick={() => onNavigate('work')}>
          <span className={styles.btnIcon}>📋</span> 업무순서
        </button>
      </div>
    </div>
  )
}
