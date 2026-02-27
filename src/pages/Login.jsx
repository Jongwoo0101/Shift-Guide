import { useState } from 'react'
import styles from './Login.module.css'

export default function Login({ onLogin, error }) {
  const [id, setId] = useState('')
  const [pw, setPw] = useState('')
  const [showPw, setShowPw] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    onLogin(id, pw)
  }

  return (
    <div className={styles.wrap}>
      <div className={styles.deco}>☕</div>

      <div className={styles.card}>
        <p className={styles.badge}>Coffee Bean &amp; Tea Leaf</p>
        <h1 className={styles.title}>Welcome<br /><em>Back</em></h1>
        <p className={styles.subtitle}>나만의 SOP 가이드</p>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.field}>
            <label className={styles.label}>아이디</label>
            <input
              className={styles.input}
              type="text"
              placeholder="아이디를 입력하세요"
              value={id}
              onChange={e => setId(e.target.value)}
              autoComplete="username"
              autoFocus
            />
          </div>

          <div className={styles.field}>
            <label className={styles.label}>비밀번호</label>
            <div className={styles.pwWrap}>
              <input
                className={styles.input}
                type={showPw ? 'text' : 'password'}
                placeholder="비밀번호를 입력하세요"
                value={pw}
                onChange={e => setPw(e.target.value)}
                autoComplete="current-password"
              />
              <button
                type="button"
                className={styles.eyeBtn}
                onClick={() => setShowPw(v => !v)}
                tabIndex={-1}
              >
                {showPw ? '🙈' : '👁️'}
              </button>
            </div>
          </div>

          {error && (
            <p className={styles.error}>⚠️ {error}</p>
          )}

          <button className={styles.submit} type="submit">
            로그인
          </button>
        </form>
      </div>
    </div>
  )
}
