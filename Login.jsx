import { useState } from 'react'
import useAuthStore from '../useAuthStore'

// بيانات تجريبية
const USERS = [
  { email: 'admin@store.com', password: '123456', name: 'محمد أحمد',  role: 'Admin' },
  { email: 'manager@store.com', password: '123456', name: 'سارة خالد', role: 'Manager' },
]

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const login = useAuthStore(state => state.login)

  const handleLogin = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    // محاكاة API call
    await new Promise(resolve => setTimeout(resolve, 1000))

    const user = USERS.find(u => u.email === email && u.password === password)

    if (user) {
      login(user)
    } else {
      setError('الإيميل أو كلمة المرور غلط!')
      setLoading(false)
    }
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #1e293b 0%, #3b82f6 100%)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontFamily: "'Segoe UI', sans-serif", direction: 'rtl',
    }}>
      <div style={{
        background: 'white', borderRadius: '20px', padding: '40px',
        width: '100%', maxWidth: '400px', boxShadow: '0 25px 60px rgba(0,0,0,0.3)',
      }}>
        {/* Logo */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <div style={{
            width: '64px', height: '64px', background: '#3b82f6',
            borderRadius: '16px', display: 'flex', alignItems: 'center',
            justifyContent: 'center', fontSize: '28px', margin: '0 auto 16px',
          }}>⚡</div>
          <h1 style={{ fontSize: '22px', fontWeight: 'bold', color: '#1e293b' }}>لوحتي</h1>
          <p style={{ fontSize: '13px', color: '#94a3b8', marginTop: '4px' }}>سجّل دخولك للمتابعة</p>
        </div>

        {/* Form */}
        <form onSubmit={handleLogin}>
          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', color: '#475569', marginBottom: '6px' }}>
              البريد الإلكتروني
            </label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="admin@store.com"
              required
              style={{
                width: '100%', padding: '11px 14px', borderRadius: '10px',
                border: '1.5px solid #e2e8f0', fontSize: '13px', outline: 'none',
                boxSizing: 'border-box', transition: 'border 0.2s',
              }}
              onFocus={e => e.target.style.borderColor = '#3b82f6'}
              onBlur={e => e.target.style.borderColor = '#e2e8f0'}
            />
          </div>

          <div style={{ marginBottom: '24px' }}>
            <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', color: '#475569', marginBottom: '6px' }}>
              كلمة المرور
            </label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              style={{
                width: '100%', padding: '11px 14px', borderRadius: '10px',
                border: '1.5px solid #e2e8f0', fontSize: '13px', outline: 'none',
                boxSizing: 'border-box', transition: 'border 0.2s',
              }}
              onFocus={e => e.target.style.borderColor = '#3b82f6'}
              onBlur={e => e.target.style.borderColor = '#e2e8f0'}
            />
          </div>

          {/* Error */}
          {error && (
            <div style={{
              background: '#fee2e2', color: '#dc2626', padding: '10px 14px',
              borderRadius: '8px', fontSize: '12px', marginBottom: '16px',
              border: '1px solid #fecaca',
            }}>
              ❌ {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            style={{
              width: '100%', padding: '12px', background: loading ? '#93c5fd' : '#3b82f6',
              color: 'white', border: 'none', borderRadius: '10px',
              fontSize: '14px', fontWeight: '600', cursor: loading ? 'not-allowed' : 'pointer',
              transition: 'background 0.2s',
            }}
          >
            {loading ? '⏳ جاري الدخول...' : 'تسجيل الدخول →'}
          </button>
        </form>

        {/* Hint */}
        <div style={{
          marginTop: '20px', padding: '12px', background: '#f8fafc',
          borderRadius: '8px', fontSize: '11px', color: '#94a3b8', textAlign: 'center',
        }}>
          💡 للتجربة: admin@store.com / 123456
        </div>
      </div>
    </div>
  )
}

export default Login
