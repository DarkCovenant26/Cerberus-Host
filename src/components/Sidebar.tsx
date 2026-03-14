import './Sidebar.css'

const navItems = [
  { label: 'Dashboard', icon: '⊞' },
  { label: 'Servers', icon: '🖥' },
  { label: 'Users', icon: '👤' },
  { label: 'Settings', icon: '⚙' },
]

interface SidebarProps {
  collapsed: boolean
  onToggle: () => void
}

export default function Sidebar({ collapsed, onToggle }: SidebarProps) {
  return (
    <nav className={`sidebar${collapsed ? ' sidebar--collapsed' : ''}`}>
      <button className="sidebar-toggle" onClick={onToggle} title={collapsed ? 'Expand' : 'Collapse'}>
        <span className="sidebar-toggle-icon">{collapsed ? '›' : '‹'}</span>
      </button>
      <ul className="sidebar-nav">
        {navItems.map((item) => (
          <li key={item.label} className="sidebar-item">
            <button className="sidebar-btn" title={collapsed ? item.label : undefined}>
              <span className="sidebar-icon">{item.icon}</span>
              {!collapsed && <span className="sidebar-label">{item.label}</span>}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
