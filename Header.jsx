import useAuthStore from './useAuthStore'
import { useNavigate } from 'react-router-dom'

function Header() {
  const user     = useAuthStore(state => state.user)
  const logout   = useAuthStore(state => state.logout)
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <header style={{
      background: 'white', padding: '14px 24px', borderBottom: '1px solid #e2e8f0',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    }}>
      <h2 style={{ fontSize: '16px', color: '#1e293b', fontWeight: '600' }}>
        مرحباً، {user?.name} 👋
      </h2>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div style={{
          // width: '34px', height: '34px', borderRadius: '50%', background: '#3b82f6',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: 'white', fontWeight: 'bold', fontSize: '14px',
        }}>
          {user?.name?.charAt(0)}
        </div>
        <button onClick={handleLogout} style={{
          padding: '7px 14px', background: '#fee2e2', color: '#dc2626',
          border: 'none', borderRadius: '8px', cursor: 'pointer',
          fontSize: '12px', fontWeight: '600', transition: 'background 0.2s',
        }}
          onMouseEnter={e => e.target.style.background = '#fecaca'}
          onMouseLeave={e => e.target.style.background = '#fee2e2'}
        >
          خروج 🚪
        </button>
      </div>
    </header>
  )
}

export default Header
