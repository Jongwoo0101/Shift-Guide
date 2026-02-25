import { useState } from 'react'
import Home      from './pages/Home.jsx'
import DrinkPage from './pages/DrinkPage.jsx'
import WorkPage  from './pages/WorkPage.jsx'
import menuData  from './data/menu.json'


export default function App() {
  const [page, setPage] = useState('home')

  if (page === 'home') {
    return <Home onNavigate={setPage} />
  }

  if (page === 'hot' || page === 'ice') {
    return (
      <DrinkPage
        type={page}
        drinks={menuData[page]}
        onBack={() => setPage('home')}
      />
    )
  }

  if (page === 'work') {
    return <WorkPage onBack={() => setPage('home')} />
  }

  return null
}
