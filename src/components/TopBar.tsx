import { useEffect, useState } from 'react'
import './TopBar.css'

interface TopBarProps {
  dark: boolean
  onThemeToggle: () => void
}

export default function TopBar({ dark, onThemeToggle }: TopBarProps) {
  const [time, setTime] = useState(new Date())

  const utcTime = time.toLocaleTimeString('en-GB',{
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZone: 'UTC'
  })

  const gmt8Time = time.toLocaleTimeString('en-GB',{
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZone: 'Asia/Singapore'
  })


  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(id)
  }, [])

return (
    <header className="topbar">
      <div className="topbar-left">
        <span className="topbar-brand">Cerberus</span>
      </div>
      <div className="topbar-right">
        <button className="theme-toggle" onClick={onThemeToggle} title="Toggle theme">
          {dark ? '☀' : '☾'}
        </button>
        <div className="topbar-clocks">
          <span className="topbar-clock-inline">{utcTime} <span className="clock-label">(UTC)</span></span>
          <span className="topbar-clock-divider" />
          <span className="topbar-clock-inline">{gmt8Time} <span className="clock-label">(GMT+8)</span></span>
        </div>
      </div>
    </header>
  )
}
