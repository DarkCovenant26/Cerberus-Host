import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import TopBar from './components/TopBar'
import Sidebar from './components/Sidebar'
import './App.css'

function App() {
  const [collapsed, setCollapsed] = useState(false)
  const [dark, setDark] = useState(() => window.matchMedia('(prefers-color-scheme: dark)').matches)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
  }, [dark])

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/*" element={
        <div className="app-shell">
          <TopBar dark={dark} onThemeToggle={() => setDark((d) => !d)} />
          <Sidebar collapsed={collapsed} onToggle={() => setCollapsed((c) => !c)} />
          <main className={`app-main${collapsed ? ' app-main--collapsed' : ''}`} />
        </div>
      } />
    </Routes>
  )
}

export default App
