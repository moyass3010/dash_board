import { useState } from 'react'

function Settings() {
  const [activeTab, setActiveTab] = useState('store')
  const [saved, setSaved] = useState(false)

  const [storeSettings, setStoreSettings] = useState({
    storeName: 'متجر النور الإلكتروني',
    email: 'info@alnour-store.com',
    phone: '0501234567',
    city: 'القاهرة',
    currency: 'جنيه مصري',
    language: 'العربية',
  })

  const [notifications, setNotifications] = useState({
    newOrder: true,
    lowStock: true,
    newCustomer: false,
    dailyReport: true,
    weeklyReport: false,
    promotions: true,
  })

  const [appearance, setAppearance] = useState({
    theme: 'light',
    primaryColor: '#3b82f6',
    sidebarCompact: false,
    showAnimations: true,
  })

  const handleSave = () => {
    setSaved(true)
    setTimeout(() => setSaved(false), 2500)
  }

  const tabs = [
    { id: 'store',         label: '🏪 المتجر' },
    { id: 'notifications', label: '🔔 الإشعارات' },
    { id: 'appearance',    label: '🎨 المظهر' },
    { id: 'account',       label: '👤 الحساب' },
  ]

  return (
    <div>
      <div style={{ marginBottom: '20px' }}>
        <h2 style={{ fontSize: '18px', fontWeight: 'bold', color: '#1e293b', marginBottom: '4px' }}>⚙️ الإعدادات</h2>
        <p style={{ fontSize: '13px', color: '#64748b' }}>إدارة إعدادات المتجر والحساب</p>
      </div>

      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        {/* Sidebar Tabs */}
        <div style={{ width: '180px', flexShrink: 0 }}>
          <div style={{ background: 'white', borderRadius: '12px', padding: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.08)' }}>
            {tabs.map(tab => (
              <button key={tab.id} onClick={() => setActiveTab(tab.id)} style={{
                width: '100%', padding: '10px 14px', borderRadius: '8px', border: 'none',
                cursor: 'pointer', fontSize: '13px', textAlign: 'right', transition: 'all 0.2s',
                background: activeTab === tab.id ? '#eff6ff' : 'transparent',
                color: activeTab === tab.id ? '#3b82f6' : '#64748b',
                fontWeight: activeTab === tab.id ? '600' : '400',
                marginBottom: '2px', display: 'block',
              }}>{tab.label}</button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div style={{ flex: 1, minWidth: '280px' }}>
          <div style={{ background: 'white', borderRadius: '12px', padding: '24px', boxShadow: '0 1px 3px rgba(0,0,0,0.08)' }}>

            {/* Store Settings */}
            {activeTab === 'store' && (
              <div>
                <h3 style={{ fontSize: '15px', fontWeight: '600', color: '#1e293b', marginBottom: '20px' }}>🏪 إعدادات المتجر</h3>
                <div style={{ display: 'grid', gap: '16px' }}>
                  {[
                    { label: 'اسم المتجر',    key: 'storeName', type: 'text' },
                    { label: 'البريد الإلكتروني', key: 'email', type: 'email' },
                    { label: 'رقم الهاتف',    key: 'phone',     type: 'tel' },
                    { label: 'المدينة',        key: 'city',      type: 'text' },
                  ].map(field => (
                    <div key={field.key}>
                      <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', color: '#475569', marginBottom: '6px' }}>{field.label}</label>
                      <input
                        type={field.type}
                        value={storeSettings[field.key]}
                        onChange={e => setStoreSettings(s => ({ ...s, [field.key]: e.target.value }))}
                        style={{ width: '100%', padding: '9px 12px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '13px', outline: 'none', boxSizing: 'border-box', transition: 'border 0.2s' }}
                        onFocus={e => e.target.style.borderColor = '#3b82f6'}
                        onBlur={e => e.target.style.borderColor = '#e2e8f0'}
                      />
                    </div>
                  ))}
                  <div>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', color: '#475569', marginBottom: '6px' }}>العملة</label>
                    <select value={storeSettings.currency} onChange={e => setStoreSettings(s => ({ ...s, currency: e.target.value }))}
                      style={{ width: '100%', padding: '9px 12px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '13px', outline: 'none', background: 'white' }}>
                      <option>جنيه مصري</option>
                      <option>ريال سعودي</option>
                      <option>درهم إماراتي</option>
                      <option>دولار أمريكي</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Notifications */}
            {activeTab === 'notifications' && (
              <div>
                <h3 style={{ fontSize: '15px', fontWeight: '600', color: '#1e293b', marginBottom: '20px' }}>🔔 إعدادات الإشعارات</h3>
                {[
                  { key: 'newOrder',     label: 'طلب جديد',           desc: 'إشعار عند وصول طلب جديد' },
                  { key: 'lowStock',     label: 'مخزون منخفض',        desc: 'تنبيه عند انخفاض المخزون' },
                  { key: 'newCustomer',  label: 'عميل جديد',           desc: 'إشعار عند تسجيل عميل جديد' },
                  { key: 'dailyReport',  label: 'تقرير يومي',          desc: 'ملخص يومي على إيميلك' },
                  { key: 'weeklyReport', label: 'تقرير أسبوعي',        desc: 'تقرير أسبوعي شامل' },
                  { key: 'promotions',   label: 'العروض والتخفيضات',   desc: 'تذكير بالعروض المنتهية' },
                ].map(item => (
                  <div key={item.key} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 0', borderBottom: '1px solid #f1f5f9' }}>
                    <div>
                      <p style={{ fontSize: '13px', fontWeight: '600', color: '#1e293b' }}>{item.label}</p>
                      <p style={{ fontSize: '11px', color: '#94a3b8', marginTop: '2px' }}>{item.desc}</p>
                    </div>
                    <div
                      onClick={() => setNotifications(n => ({ ...n, [item.key]: !n[item.key] }))}
                      style={{
                        width: '44px', height: '24px', borderRadius: '99px', cursor: 'pointer',
                        background: notifications[item.key] ? '#3b82f6' : '#e2e8f0',
                        position: 'relative', transition: 'background 0.2s', flexShrink: 0,
                      }}
                    >
                      <div style={{
                        width: '18px', height: '18px', background: 'white', borderRadius: '50%',
                        position: 'absolute', top: '3px', transition: 'right 0.2s',
                        right: notifications[item.key] ? '3px' : '23px',
                        boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
                      }} />
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Appearance */}
            {activeTab === 'appearance' && (
              <div>
                <h3 style={{ fontSize: '15px', fontWeight: '600', color: '#1e293b', marginBottom: '20px' }}>🎨 إعدادات المظهر</h3>
                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', color: '#475569', marginBottom: '10px' }}>الثيم</label>
                  <div style={{ display: 'flex', gap: '10px' }}>
                    {[['light','☀️ فاتح'],['dark','🌙 داكن']].map(([val, label]) => (
                      <button key={val} onClick={() => setAppearance(a => ({ ...a, theme: val }))} style={{
                        padding: '10px 20px', borderRadius: '8px', border: '2px solid',
                        borderColor: appearance.theme === val ? '#3b82f6' : '#e2e8f0',
                        background: appearance.theme === val ? '#eff6ff' : 'white',
                        color: appearance.theme === val ? '#3b82f6' : '#64748b',
                        cursor: 'pointer', fontSize: '13px', fontWeight: '500',
                      }}>{label}</button>
                    ))}
                  </div>
                </div>
                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', color: '#475569', marginBottom: '10px' }}>اللون الأساسي</label>
                  <div style={{ display: 'flex', gap: '10px' }}>
                    {['#3b82f6','#8b5cf6','#22c55e','#f59e0b','#ef4444','#06b6d4'].map(color => (
                      <div key={color} onClick={() => setAppearance(a => ({ ...a, primaryColor: color }))} style={{
                        width: '32px', height: '32px', borderRadius: '50%', background: color,
                        cursor: 'pointer', border: appearance.primaryColor === color ? '3px solid #1e293b' : '3px solid transparent',
                        transition: 'border 0.2s',
                      }} />
                    ))}
                  </div>
                </div>
                {[
                  { key: 'sidebarCompact', label: 'Sidebar مضغوط', desc: 'إخفاء النصوص وعرض الأيقونات فقط' },
                  { key: 'showAnimations', label: 'تفعيل الحركات', desc: 'إظهار الانتقالات والتأثيرات' },
                ].map(item => (
                  <div key={item.key} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 0', borderBottom: '1px solid #f1f5f9' }}>
                    <div>
                      <p style={{ fontSize: '13px', fontWeight: '600', color: '#1e293b' }}>{item.label}</p>
                      <p style={{ fontSize: '11px', color: '#94a3b8', marginTop: '2px' }}>{item.desc}</p>
                    </div>
                    <div onClick={() => setAppearance(a => ({ ...a, [item.key]: !a[item.key] }))} style={{ width: '44px', height: '24px', borderRadius: '99px', cursor: 'pointer', background: appearance[item.key] ? '#3b82f6' : '#e2e8f0', position: 'relative', transition: 'background 0.2s', flexShrink: 0 }}>
                      <div style={{ width: '18px', height: '18px', background: 'white', borderRadius: '50%', position: 'absolute', top: '3px', transition: 'right 0.2s', right: appearance[item.key] ? '3px' : '23px', boxShadow: '0 1px 3px rgba(0,0,0,0.2)' }} />
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Account */}
            {activeTab === 'account' && (
              <div>
                <h3 style={{ fontSize: '15px', fontWeight: '600', color: '#1e293b', marginBottom: '20px' }}>👤 إعدادات الحساب</h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px', padding: '16px', background: '#f8fafc', borderRadius: '10px' }}>
                  <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: '#3b82f6', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold', fontSize: '20px' }}>م</div>
                  <div>
                    <p style={{ fontWeight: '600', color: '#1e293b', marginBottom: '4px' }}>محمد أحمد</p>
                    <p style={{ fontSize: '12px', color: '#64748b' }}>مدير المتجر</p>
                    <p style={{ fontSize: '12px', color: '#3b82f6', marginTop: '2px' }}>admin@store.com</p>
                  </div>
                </div>
                <div style={{ display: 'grid', gap: '14px' }}>
                  {[
                    { label: 'الاسم الكامل', value: 'محمد أحمد', type: 'text' },
                    { label: 'البريد الإلكتروني', value: 'admin@store.com', type: 'email' },
                  ].map(field => (
                    <div key={field.label}>
                      <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', color: '#475569', marginBottom: '6px' }}>{field.label}</label>
                      <input defaultValue={field.value} type={field.type}
                        style={{ width: '100%', padding: '9px 12px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '13px', outline: 'none', boxSizing: 'border-box' }}
                        onFocus={e => e.target.style.borderColor = '#3b82f6'}
                        onBlur={e => e.target.style.borderColor = '#e2e8f0'}
                      />
                    </div>
                  ))}
                  <div>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', color: '#475569', marginBottom: '6px' }}>كلمة المرور الجديدة</label>
                    <input type="password" placeholder="اتركها فاضية لو مش عايز تغيرها"
                      style={{ width: '100%', padding: '9px 12px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '13px', outline: 'none', boxSizing: 'border-box' }}
                      onFocus={e => e.target.style.borderColor = '#3b82f6'}
                      onBlur={e => e.target.style.borderColor = '#e2e8f0'}
                    />
                  </div>
                </div>
                <div style={{ marginTop: '20px', padding: '14px', background: '#fff7ed', borderRadius: '8px', border: '1px solid #fed7aa' }}>
                  <p style={{ fontSize: '12px', color: '#c2410c', fontWeight: '600' }}>⚠️ منطقة الخطر</p>
                  <p style={{ fontSize: '11px', color: '#9a3412', marginTop: '4px', marginBottom: '10px' }}>حذف الحساب لا يمكن التراجع عنه</p>
                  <button style={{ padding: '7px 14px', background: '#ef4444', color: 'white', border: 'none', borderRadius: '6px', fontSize: '12px', cursor: 'pointer' }}>حذف الحساب</button>
                </div>
              </div>
            )}

            {/* Save Button */}
            <div style={{ marginTop: '24px', display: 'flex', gap: '10px', alignItems: 'center' }}>
              <button onClick={handleSave} style={{
                padding: '10px 24px', background: '#3b82f6', color: 'white',
                border: 'none', borderRadius: '8px', cursor: 'pointer',
                fontSize: '13px', fontWeight: '600', transition: 'background 0.2s',
              }}
                onMouseEnter={e => e.target.style.background = '#2563eb'}
                onMouseLeave={e => e.target.style.background = '#3b82f6'}
              >
                حفظ التغييرات
              </button>
              {saved && (
                <span style={{ fontSize: '13px', color: '#22c55e', fontWeight: '500', animation: 'fadeIn 0.3s ease' }}>
                  ✅ تم الحفظ بنجاح!
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Settings
