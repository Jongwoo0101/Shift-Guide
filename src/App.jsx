import { useState } from 'react'
import Home      from './pages/Home.jsx'
import DrinkPage from './pages/DrinkPage.jsx'
import WorkPage  from './pages/WorkPage.jsx'
import menuData  from './data/menu.json'

export default function App() {
  const [page, setPage] = useState('home')

  if (page === 'home') {
    return (
      <Home
        categories={menuData.categories}
        onNavigate={setPage}
      />
    )
  }

  if (page === 'work') {
    return <WorkPage onBack={() => setPage('home')} />
  }

  // 나머지는 모두 음료 카테고리 페이지
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
