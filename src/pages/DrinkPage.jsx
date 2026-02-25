import { useState, useMemo } from 'react'
import PageNav  from '../components/PageNav.jsx'
import QuizBar  from '../components/QuizBar.jsx'
import DrinkCard from '../components/DrinkCard.jsx'
import { useQuiz } from '../hooks/useQuiz.js'
import styles from './DrinkPage.module.css'

export default function DrinkPage({ type, drinks, onBack }) {
  const [query, setQuery] = useState('')
  const { active, toggle, reveal, isRevealed } = useQuiz()

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return q ? drinks.filter(d => d.name.toLowerCase().includes(q)) : drinks
  }, [query, drinks])

  return (
    <div className={styles.page}>
      <PageNav type={type} onBack={onBack} />

      <div className={styles.searchWrap}>
        <input
          className={styles.searchBox}
          type="text"
          placeholder="음료 검색..."
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
      </div>

      <QuizBar active={active} onToggle={toggle} />

      <div className={styles.list}>
        {filtered.length === 0 ? (
          <div className={styles.noResults}>
            <div className={styles.noResultsIcon}>🔍</div>
            검색 결과가 없습니다
          </div>
        ) : (
          filtered.map((drink, idx) => (
            <DrinkCard
              key={drink.name}
              drink={drink}
              index={idx}
              quizActive={active}
              isRevealed={isRevealed}
              onReveal={reveal}
            />
          ))
        )}
      </div>
    </div>
  )
}
