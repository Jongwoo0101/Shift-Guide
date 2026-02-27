import { useState, useCallback } from 'react'

const CORRECT_ID = import.meta.env.VITE_APP_ID
const CORRECT_PW = import.meta.env.VITE_APP_PW
const SESSION_KEY = 'cb_authed'

export function useAuth() {
  const [authed, setAuthed] = useState(
    () => sessionStorage.getItem(SESSION_KEY) === 'true'
  )
  const [error, setError] = useState('')

  const login = useCallback((id, pw) => {
    if (id === CORRECT_ID && pw === CORRECT_PW) {
      sessionStorage.setItem(SESSION_KEY, 'true')
      setAuthed(true)
      setError('')
    } else {
      setError('아이디 또는 비밀번호가 틀렸어요.')
    }
  }, [])

  const logout = useCallback(() => {
    sessionStorage.removeItem(SESSION_KEY)
    setAuthed(false)
  }, [])

  return { authed, login, logout, error }
}