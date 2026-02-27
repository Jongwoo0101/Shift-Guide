import { useState } from 'react'
import { useAuth }  from './hooks/useAuth.js'
import Login     from './pages/Login.jsx'
import Home      from './pages/Home.jsx'
import DrinkPage from './pages/DrinkPage.jsx'
import WorkPage  from './pages/WorkPage.jsx'
import menuData  from './data/menu.json'

export default function App() {
  const { authed, login, logout, error } = useAuth()
  const [page, setPage] = useState('home')

  // 로그인 안 됐으면 로그인 페이지만 보여줌
  if (!authed) {
    return <Login onLogin={login} error={error} />
  }

  if (page === 'home') {
    return (
      <Home
        categories={menuData.categories}
        onNavigate={setPage}
        onLogout={logout}
      />
    )
  }

  if (page === 'work') {
    return <WorkPage onBack={() => setPage('home')} />
  }

  const category = menuData.categories.find(c => c.id === page)
  if (category) {
    return (
      <DrinkPage
        category={category}
        drinks={menuData.drinks[page] ?? []}
        onBack={() => setPage('home')}
      />
    )
  }

  return null
}
