import { useState, useCallback } from 'react'


export function useQuiz() {
  const [active, setActive]   = useState(false)
  const [revealed, setRevealed] = useState(new Set())

  const toggle = useCallback(() => {
    setActive(prev => !prev)
    setRevealed(new Set()) 
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
