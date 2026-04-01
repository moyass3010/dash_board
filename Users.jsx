import { useState } from 'react'

const initialCustomers = [
  { id: 1, name: 'أحمد محمد علي',  email: 'ahmed@email.com',   phone: '0501234567', city: 'القاهرة',    orders: 12, spent: '18,400 ج', status: 'نشط',     joined: 'يناير 2024',  avatar: 'أ' },
  { id: 2, name: 'سارة خالد',      email: 'sara@email.com',    phone: '0559876543', city: 'الإسكندرية', orders: 8,  spent: '12,200 ج', status: 'نشط',     joined: 'مارس 2024',   avatar: 'س' },
  { id: 3, name: 'محمود حسن',      email: 'mahmoud@email.com', phone: '0523456789', city: 'الجيزة',     orders: 3,  spent: '4,100 ج',  status: 'غير نشط', joined: 'فبراير 2024', avatar: 'م' },
  { id: 4, name: 'نور أحمد',       email: 'nour@email.com',    phone: '0567891234', city: 'القاهرة',    orders: 20, spent: '31,500 ج', status: 'نشط',     joined: 'أكتوبر 2023', avatar: 'ن' },
  { id: 5, name: 'عمر خالد',       email: 'omar@email.com',    phone: '0512345678', city: 'المنصورة',   orders: 5,  spent: '7,800 ج',  status: 'نشط',     joined: 'أبريل 2024',  avatar: 'ع' },
  { id: 6, name: 'فاطمة إبراهيم',  email: 'fatma@email.com',   phone: '0598765432', city: 'أسيوط',      orders: 1,  spent: '950 ج',    status: 'جديد',    joined: 'يونيو 2024',  avatar: 'ف' },
  { id: 7, name: 'يوسف عبدالله',   email: 'yousef@email.com',  phone: '0534567890', city: 'طنطا',       orders: 9,  spent: '14,200 ج', status: 'نشط',     joined: 'ديسمبر 2023', avatar: 'ي' },
  { id: 8, name: 'منى سعيد',       email: 'mona@email.com',    phone: '0576543210', city: 'القاهرة',    orders: 0,  spent: '0 ج',      status: 'غير نشط', joined: 'مايو 2024',   avatar: 'م' },
]

const statusStyle = {
  'نشط':     { bg: '#dcfce7', color: '#16a34a' },
  'غير نشط': { bg: '#fee2e2', color: '#dc2626' },
  'جديد':    { bg: '#dbeafe', color: '#2563eb' },
}

const avatarColors = ['#3b82f6','#8b5cf6','#f59e0b','#22c55e','#ef4444','#06b6d4','#ec4899','#64748b']

function Users() {
  const [customersList, setCustomersList] = useState(initialCustomers)
  const [search, setSearch]               = useState('')
  const [filter, setFilter]               = useState('الكل')
  const [view, setView]                   = useState('table')
  const [selected, setSelected]           = useState(null)
  const [showAddModal, setShowAddModal]   = useState(false)
  const [newCustomer, setNewCustomer]     = useState({
    name: '', email: '', phone: '', city: '', status: 'جديد'
  })

  const filtered = customersList.filter(c => {
    const matchSearch = c.name.includes(search) || c.email.includes(search) || c.city.includes(search)
    const matchFilter = filter === 'الكل' || c.status === filter
    return matchSearch && matchFilter
  })

  const handleAddCustomer = () => {
    if (!newCustomer.name || !newCustomer.email) {
      alert('الاسم والإيميل مطلوبين!')
      return
    }
    const added = {
      ...newCustomer,
      id: customersList.length + 1,
      orders: 0,
      spent: '0 ج',
      joined: new Date().toLocaleDateString('ar-EG', { month: 'long', year: 'numeric' }),
      avatar: newCustomer.name.charAt(0),
    }
    setCustomersList(prev => [...prev, added])
    setNewCustomer({ name: '', email: '', phone: '', city: '', status: 'جديد' })
    setShowAddModal(false)
  }

  return (
    <div>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px', flexWrap: 'wrap', gap: '12px' }}>
        <div>
          <h2 style={{ fontSize: '18px', fontWeight: 'bold', color: '#1e293b', marginBottom: '4px' }}>👥 العملاء</h2>
          <p style={{ fontSize: '13px', color: '#64748b' }}>{customersList.length} عميل مسجل</p>
        </div>
        <button onClick={() => setShowAddModal(true)} style={{
          background: '#3b82f6', color: 'white', border: 'none',
          padding: '10px 18px', borderRadius: '8px', cursor: 'pointer',
          fontSize: '13px', fontWeight: '500',
        }}>+ إضافة عميل</button>
      </div>

      {/* Summary Cards */}
      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '20px' }}>
        {[
          { label: 'إجمالي العملاء', value: customersList.length,                                     icon: '👥', color: '#3b82f6' },
          { label: 'عملاء نشطين',    value: customersList.filter(c => c.status === 'نشط').length,     icon: '✅', color: '#22c55e' },
          { label: 'عملاء جدد',      value: customersList.filter(c => c.status === 'جديد').length,    icon: '🆕', color: '#8b5cf6' },
          { label: 'غير نشطين',      value: customersList.filter(c => c.status === 'غير نشط').length, icon: '😴', color: '#f59e0b' },
        ].map(s => (
          <div key={s.label} style={{
            background: 'white', borderRadius: '10px', padding: '14px 18px',
            boxShadow: '0 1px 3px rgba(0,0,0,0.08)', flex: '1', minWidth: '120px',
            borderRight: `4px solid ${s.color}`,
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          }}>
            <div>
              <p style={{ fontSize: '11px', color: '#64748b', marginBottom: '4px' }}>{s.label}</p>
              <h3 style={{ fontSize: '22px', fontWeight: 'bold', color: '#1e293b' }}>{s.value}</h3>
            </div>
            <span style={{ fontSize: '22px' }}>{s.icon}</span>
          </div>
        ))}
      </div>

      {/* Search + Filter + View Toggle */}
      <div style={{ display: 'flex', gap: '10px', marginBottom: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
        <input
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="🔍 ابحث باسم أو إيميل أو مدينة..."
          style={{ flex: 1, minWidth: '200px', padding: '9px 14px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '13px', outline: 'none', background: 'white' }}
        />
        {['الكل', 'نشط', 'غير نشط', 'جديد'].map(f => (
          <button key={f} onClick={() => setFilter(f)} style={{
            padding: '8px 14px', borderRadius: '8px', border: 'none', cursor: 'pointer',
            fontSize: '12px', fontWeight: '500', transition: 'all 0.2s',
            background: filter === f ? '#1e293b' : 'white',
            color: filter === f ? 'white' : '#64748b',
            boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
          }}>{f}</button>
        ))}
        <div style={{ display: 'flex', background: 'white', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 1px 3px rgba(0,0,0,0.08)' }}>
          {[['table', '☰'], ['cards', '⊞']].map(([v, icon]) => (
            <button key={v} onClick={() => setView(v)} style={{
              padding: '8px 12px', border: 'none', cursor: 'pointer', fontSize: '14px',
              background: view === v ? '#3b82f6' : 'transparent',
              color: view === v ? 'white' : '#64748b',
            }}>{icon}</button>
          ))}
        </div>
      </div>

      {/* Table View */}
      {view === 'table' && (
        <div style={{ background: 'white', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 1px 3px rgba(0,0,0,0.08)' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ background: '#f8fafc', borderBottom: '2px solid #f1f5f9' }}>
                {['العميل', 'المدينة', 'الطلبات', 'المبلغ المنفق', 'الحالة', 'منضم في'].map(col => (
                  <th key={col} style={{ padding: '12px 16px', textAlign: 'right', color: '#64748b', fontSize: '12px', fontWeight: '600' }}>{col}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.map((c, i) => (
                <tr key={c.id}
                  onClick={() => setSelected(c)}
                  style={{ borderBottom: '1px solid #f1f5f9', background: i % 2 === 0 ? 'white' : '#fafafa', cursor: 'pointer', transition: 'background 0.15s' }}
                  onMouseEnter={e => e.currentTarget.style.background = '#f0f7ff'}
                  onMouseLeave={e => e.currentTarget.style.background = i % 2 === 0 ? 'white' : '#fafafa'}
                >
                  <td style={{ padding: '12px 16px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <div style={{ width: '34px', height: '34px', borderRadius: '50%', background: avatarColors[c.id % avatarColors.length], display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold', fontSize: '13px', flexShrink: 0 }}>{c.avatar}</div>
                      <div>
                        <p style={{ fontSize: '13px', fontWeight: '600', color: '#1e293b' }}>{c.name}</p>
                        <p style={{ fontSize: '11px', color: '#94a3b8' }}>{c.email}</p>
                      </div>
                    </div>
                  </td>
                  <td style={{ padding: '12px 16px', fontSize: '13px', color: '#475569' }}>📍 {c.city}</td>
                  <td style={{ padding: '12px 16px', fontSize: '13px', color: '#1e293b', fontWeight: '500', textAlign: 'center' }}>{c.orders}</td>
                  <td style={{ padding: '12px 16px', fontSize: '13px', color: '#1e293b', fontWeight: '600' }}>{c.spent}</td>
                  <td style={{ padding: '12px 16px' }}>
                    <span style={{ padding: '3px 10px', borderRadius: '20px', fontSize: '11px', fontWeight: '500', background: statusStyle[c.status].bg, color: statusStyle[c.status].color }}>{c.status}</span>
                  </td>
                  <td style={{ padding: '12px 16px', fontSize: '12px', color: '#94a3b8' }}>{c.joined}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {filtered.length === 0 && (
            <div style={{ padding: '40px', textAlign: 'center', color: '#94a3b8', fontSize: '14px' }}>لا توجد نتائج 😕</div>
          )}
        </div>
      )}

      {/* Cards View */}
      {view === 'cards' && (
        <div style={{ display: 'grid', gap: '14px', gridTemplateColumns: 'repeat(auto-fill, minmax(230px, 1fr))' }}>
          {filtered.map(c => (
            <div key={c.id} onClick={() => setSelected(c)}
              style={{ background: 'white', borderRadius: '12px', padding: '18px', boxShadow: '0 1px 3px rgba(0,0,0,0.08)', cursor: 'pointer', transition: 'box-shadow 0.2s', borderTop: `3px solid ${avatarColors[c.id % avatarColors.length]}` }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.12)'}
              onMouseLeave={e => e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.08)'}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: avatarColors[c.id % avatarColors.length], display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold', fontSize: '15px' }}>{c.avatar}</div>
                <div>
                  <p style={{ fontWeight: '600', color: '#1e293b', fontSize: '13px' }}>{c.name}</p>
                  <span style={{ padding: '2px 8px', borderRadius: '20px', fontSize: '10px', fontWeight: '500', background: statusStyle[c.status].bg, color: statusStyle[c.status].color }}>{c.status}</span>
                </div>
              </div>
              <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '10px', display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ textAlign: 'center' }}>
                  <p style={{ fontSize: '16px', fontWeight: 'bold', color: '#1e293b' }}>{c.orders}</p>
                  <p style={{ fontSize: '10px', color: '#94a3b8' }}>طلبات</p>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <p style={{ fontSize: '13px', fontWeight: 'bold', color: '#3b82f6' }}>{c.spent}</p>
                  <p style={{ fontSize: '10px', color: '#94a3b8' }}>منفق</p>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <p style={{ fontSize: '12px', color: '#475569' }}>📍 {c.city}</p>
                  <p style={{ fontSize: '10px', color: '#94a3b8' }}>{c.joined}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Customer Detail Modal */}
      {selected && (
        <div onClick={() => setSelected(null)} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 50 }}>
          <div onClick={e => e.stopPropagation()} style={{ background: 'white', borderRadius: '16px', padding: '28px', width: '360px', boxShadow: '0 20px 60px rgba(0,0,0,0.2)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
              <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: '#1e293b' }}>تفاصيل العميل</h3>
              <button onClick={() => setSelected(null)} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '18px', color: '#94a3b8' }}>✕</button>
            </div>
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
              <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: avatarColors[selected.id % avatarColors.length], display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold', fontSize: '22px', margin: '0 auto 10px' }}>{selected.avatar}</div>
              <h4 style={{ fontSize: '16px', fontWeight: 'bold', color: '#1e293b' }}>{selected.name}</h4>
              <span style={{ padding: '3px 10px', borderRadius: '20px', fontSize: '11px', fontWeight: '500', background: statusStyle[selected.status].bg, color: statusStyle[selected.status].color }}>{selected.status}</span>
            </div>
            {[
              ['📧 الإيميل', selected.email],
              ['📱 الهاتف', selected.phone],
              ['📍 المدينة', selected.city],
              ['📦 الطلبات', `${selected.orders} طلب`],
              ['💰 المنفق', selected.spent],
              ['📅 منضم في', selected.joined],
            ].map(([label, value]) => (
              <div key={label} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid #f1f5f9' }}>
                <span style={{ fontSize: '13px', color: '#64748b' }}>{label}</span>
                <span style={{ fontSize: '13px', color: '#1e293b', fontWeight: '500' }}>{value}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Add Customer Modal */}
      {showAddModal && (
        <div onClick={() => setShowAddModal(false)} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 50 }}>
          <div onClick={e => e.stopPropagation()} style={{ background: 'white', borderRadius: '16px', padding: '28px', width: '400px', boxShadow: '0 20px 60px rgba(0,0,0,0.2)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px' }}>
              <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: '#1e293b' }}>➕ إضافة عميل جديد</h3>
              <button onClick={() => setShowAddModal(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '18px', color: '#94a3b8' }}>✕</button>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {[
                { label: 'الاسم كامل *',        key: 'name',  type: 'text',  placeholder: 'محمد أحمد' },
                { label: 'البريد الإلكتروني *', key: 'email', type: 'email', placeholder: 'example@email.com' },
                { label: 'رقم الهاتف',          key: 'phone', type: 'tel',   placeholder: '05xxxxxxxx' },
                { label: 'المدينة',             key: 'city',  type: 'text',  placeholder: 'القاهرة' },
              ].map(field => (
                <div key={field.key}>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', color: '#475569', marginBottom: '6px' }}>{field.label}</label>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    value={newCustomer[field.key]}
                    onChange={e => setNewCustomer(prev => ({ ...prev, [field.key]: e.target.value }))}
                    style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1.5px solid #e2e8f0', fontSize: '13px', outline: 'none', boxSizing: 'border-box' }}
                    onFocus={e => e.target.style.borderColor = '#3b82f6'}
                    onBlur={e => e.target.style.borderColor = '#e2e8f0'}
                  />
                </div>
              ))}
              <div>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', color: '#475569', marginBottom: '6px' }}>الحالة</label>
                <select value={newCustomer.status} onChange={e => setNewCustomer(prev => ({ ...prev, status: e.target.value }))}
                  style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1.5px solid #e2e8f0', fontSize: '13px', outline: 'none', background: 'white' }}>
                  <option>جديد</option>
                  <option>نشط</option>
                  <option>غير نشط</option>
                </select>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '10px', marginTop: '24px' }}>
              <button onClick={handleAddCustomer} style={{ flex: 1, padding: '11px', background: '#3b82f6', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontSize: '13px', fontWeight: '600' }}>
                ✅ إضافة العميل
              </button>
              <button onClick={() => setShowAddModal(false)} style={{ padding: '11px 20px', background: '#f1f5f9', color: '#64748b', border: 'none', borderRadius: '8px', cursor: 'pointer', fontSize: '13px', fontWeight: '600' }}>
                إلغاء
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Users