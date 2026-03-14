import { useEffect, useState } from 'react'
import './TopBar.css'

interface TopBarProps {
  dark: boolean
  onThemeToggle: () => void
}

export default function TopBar({ dark, onThemeToggle }: TopBarProps) {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(id)
  }, [])

  const formatted = time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })
  const dateFormatted = time.toLocaleDateString([], { weekday: 'short', month: 'short', day: 'numeric' })

  return (
    <header className="topbar">
      <div className="topbar-left">
        <span className="topbar-brand">Cerberus</span>
      </div>
      <div className="topbar-right">
        <button className="theme-toggle" onClick={onThemeToggle} title="Toggle theme">
          {dark ? '☀' : '☾'}
        </button>
        <div className="topbar-clock">
          <span className="clock-time">{formatted}</span>
          <span className="clock-date">{dateFormatted}</span>
        </div>
      </div>
    </header>
  )
}
