import { useState } from 'react'
import styles from './WorkSection.module.css'

export default function WorkSection({ title, icon, children }) {
  const [open, setOpen] = useState(true)

  return (
    <div className={styles.section}>
      <div className={styles.header} onClick={() => setOpen(o => !o)}>
        <span className={styles.icon}>{icon}</span>
        <span className={styles.dayTitle}>{title}</span>
        <span className={styles.arrow}>{open ? '▲' : '▼'}</span>
      </div>
      {open && (
        <div className={styles.body}>
          <div className={styles.timeline}>{children}</div>
        </div>
      )}
    </div>
  )
}

/* ── Sub-components for timeline items ── */

export function WorkItem({ dot, children }) {
  return (
    <div className={styles.item}>
      <div className={styles.dot}>{dot}</div>
      <div className={styles.text}>{children}</div>
    </div>
  )
}

export function SubSteps({ items }) {
  return (
    <div className={styles.subSteps}>
      {items.map((item, i) => (
        <span key={i} className={styles.subStep}>{item}</span>
      ))}
    </div>
  )
}

export function TimeDivider({ label }) {
  return (
    <div className={styles.divider}>
      <span className={styles.dividerLabel}>{label}</span>
      <div className={styles.dividerLine} />
    </div>
  )
}

export function WorkNote({ children }) {
  return <p className={styles.note}>{children}</p>
}

export function WorkArrow() {
  return <div className={styles.arrow2}>⬇️</div>
}
