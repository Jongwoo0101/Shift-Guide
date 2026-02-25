import { useState } from 'react'
import styles from './DrinkCard.module.css'

const SIZE_CHIPS = {
  s: styles.chipS,
  r: styles.chipR,
  l: styles.chipL,
}

function SizeCell({ value, cellKey, quizActive, isRevealed, onReveal }) {
  const hidden = quizActive && !isRevealed

  return (
    <td
      className={`${styles.sizeCell} ${hidden ? styles.quizHidden : ''} ${
        quizActive && isRevealed ? styles.quizRevealed : ''
      }`}
      onClick={hidden ? () => onReveal(cellKey) : undefined}
    >
      {value}
    </td>
  )
}

export default function DrinkCard({ drink, index, quizActive, isRevealed, onReveal }) {
  const [open, setOpen] = useState(false)

  return (
    <div
      className={`${styles.card} ${open ? styles.open : ''}`}
      style={{ animationDelay: `${index * 0.04}s` }}
    >
      <div className={styles.header} onClick={() => setOpen(o => !o)}>
        <span className={styles.name}>{drink.name}</span>
        <div className={styles.toggle}>▼</div>
      </div>

      {open && (
        <div className={styles.body}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th className={styles.thLeft}>재료</th>
                {['s', 'r', 'l'].map(size => (
                  <th key={size}>
                    <span className={`${styles.chip} ${SIZE_CHIPS[size]}`}>
                      {size.toUpperCase()}
                    </span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {drink.rows.map((row, ri) => (
                <tr key={ri}>
                  <td className={row.highlight ? styles.newLabel : styles.ingredientLabel}>
                    {row.label}{row.highlight ? ' 🆕' : ''}
                  </td>
                  {['s', 'r', 'l'].map(size => {
                    const key = `${drink.name}-${ri}-${size}`
                    return (
                      <SizeCell
                        key={size}
                        value={row[size]}
                        cellKey={key}
                        quizActive={quizActive}
                        isRevealed={isRevealed(key)}
                        onReveal={onReveal}
                      />
                    )
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
