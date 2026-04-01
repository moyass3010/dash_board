import { NavLink } from 'react-router-dom'

const navItems = [
  { label: 'الرئيسية',    path: '/',           icon: '🏠' },
  { label: 'التقارير',    path: '/reports',    icon: '📊' },
  { label: 'المستخدمين', path: '/users',      icon: '👥' },
  { label: 'الإعدادات',  path: '/settings',   icon: '⚙️' },
]

function Sidebar() {
  return (
    <aside style={{
      width: '240px',
      background: '#1e293b',
      color: 'white',
      padding: '24px 16px',
      minHeight: '100vh'
    }}>
      <h1 style={{ fontSize: '20px', marginBottom: '32px', paddingRight: '12px' }}> لوحتي</h1>
      <nav style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
        {navItems.map(item => (
          <NavLink
            key={item.path}
            to={item.path}
            end
            style={({ isActive }) => ({
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '12px 16px',
              borderRadius: '8px',
              cursor: 'pointer',
              textDecoration: 'none',
              color: 'white',
              fontSize: '14px',
              background: isActive ? '#3b82f6' : 'transparent',
              transition: 'background 0.2s',
            })}
          >
            <span>{item.icon}</span>
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}

export default Sidebar