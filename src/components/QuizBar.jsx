import styles from './QuizBar.module.css'

export default function QuizBar({ active, onToggle }) {
  return (
    <div className={styles.bar}>
      <label className={styles.toggle} onClick={onToggle}>
        <div className={`${styles.switch} ${active ? styles.on : ''}`} />
        퀴즈 모드
      </label>
      <span className={styles.hint}>셀 탭하면 정답 공개</span>
    </div>
  )
}
