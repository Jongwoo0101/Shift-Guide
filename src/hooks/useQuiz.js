import { useState, useCallback } from 'react'

/**
 * Manages quiz mode for one drink page.
 * Tracks which individual cells have been revealed.
 */
export function useQuiz() {
  const [active, setActive]   = useState(false)
  // Set of unique cell keys that have been revealed
  const [revealed, setRevealed] = useState(new Set())

  const toggle = useCallback(() => {
    setActive(prev => !prev)
    setRevealed(new Set())   // reset reveals on every toggle
  }, [])

  const reveal = useCallback((key) => {
    setRevealed(prev => {
      const next = new Set(prev)
      next.add(key)
      return next
    })
  }, [])

  const isRevealed = useCallback(
    (key) => revealed.has(key),
    [revealed]
  )

  return { active, toggle, reveal, isRevealed }
}
