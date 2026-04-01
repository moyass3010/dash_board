import { useState } from 'react'
import {
  BarChart, Bar, LineChart, Line, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend
} from 'recharts'

const monthlyData = [
  { month: 'يناير',  مبيعات: 12000, مصروفات: 7000,  أرباح: 5000 },
  { month: 'فبراير', مبيعات: 9500,  مصروفات: 6000,  أرباح: 3500 },
  { month: 'مارس',   مبيعات: 15000, مصروفات: 8000,  أرباح: 7000 },
  { month: 'أبريل',  مبيعات: 13000, مصروفات: 7500,  أرباح: 5500 },
  { month: 'مايو',   مبيعات: 17000, مصروفات: 9000,  أرباح: 8000 },
  { month: 'يونيو',  مبيعات: 20000, مصروفات: 10000, أرباح: 10000 },
]

const categoryData = [
  { name: 'إلكترونيات', value: 40 },
  { name: 'ملابس',      value: 25 },
  { name: 'أجهزة منزلية', value: 20 },
  { name: 'أخرى',       value: 15 },
]

const COLORS = ['#3b82f6', '#8b5cf6', '#f59e0b', '#22c55e']

const topProducts = [
  { name: 'لابتوب Dell XPS', sales: 142, revenue: '284,000 ج', growth: 18 },
  { name: 'iPhone 15',       sales: 98,  revenue: '196,000 ج', growth: 12 },
  { name: 'سماعات Sony',     sales: 210, revenue: '63,000 ج',  growth: -5 },
  { name: 'شاشة LG 27"',    sales: 76,  revenue: '114,000 ج', growth: 22 },
  { name: 'كيبورد Logitech', sales: 185, revenue: '37,000 ج',  growth: 8 },
]

function Reports() {
  const [activeTab, setActiveTab] = useState('overview')

  const tabs = [
    { id: 'overview',  label: 'نظرة عامة' },
    { id: 'products',  label: 'المنتجات' },
    { id: 'categories', label: 'الفئات' },
  ]

  return (
    <div>
      <div style={{ marginBottom: '20px' }}>
        <h2 style={{ fontSize: '19px', fontWeight: 'bold', color: '#1e293b', marginBottom: '4px' }}>📊 التقارير</h2>
        <p style={{ fontSize: '15px', color: '#64748b' }}>تقارير المبيعات والأرباح لعام 2026</p>
      </div>

      {/* Tabs */}
      <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
        {tabs.map(tab => (
          <button key={tab.id} onClick={() => setActiveTab(tab.id)} style={{
            padding: '8px 18px', borderRadius: '8px', border: 'none',
            cursor: 'pointer', fontSize: '13px', fontWeight: '500',
            background: activeTab === tab.id ? '#3b82f6' : 'white',
            color: activeTab === tab.id ? 'white' : '#64748b',
            boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
            transition: 'all 0.2s',
          }}>{tab.label}</button>
        ))}
      </div>

      {/* Overview Tab */}
      {activeTab === 'overview' && (
        <div>
          {/* Summary Cards */}
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginBottom: '20px' }}>
            {[
              { label: 'إجمالي المبيعات', value: '86,500 ج', icon: '💰', color: '#3b82f6', sub: '+15% عن العام الماضي' },
              { label: 'إجمالي الأرباح',  value: '39,000 ج', icon: '📈', color: '#22c55e', sub: '+22% عن العام الماضي' },
              { label: 'إجمالي المصروفات', value: '47,500 ج', icon: '💸', color: '#f59e0b', sub: '+8% عن العام الماضي' },
              { label: 'متوسط الطلب',     value: '1,240 ج',  icon: '🛒', color: '#8b5cf6', sub: '69 طلب هذا الشهر' },
            ].map(card => (
              <div key={card.label} style={{
                background: 'white', borderRadius: '12px', padding: '18px',
                boxShadow: '0 1px 3px rgba(0,0,0,0.08)', flex: '1', minWidth: '150px',
                borderTop: `4px solid ${card.color}`,
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <div>
                    <p style={{ fontSize: '12px', color: '#64748b', marginBottom: '6px' }}>{card.label}</p>
                    <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#1e293b' }}>{card.value}</h3>
                    <p style={{ fontSize: '11px', color: '#94a3b8', marginTop: '4px' }}>{card.sub}</p>
                  </div>
                  <span style={{ fontSize: '24px' }}>{card.icon}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Bar Chart */}
          <div style={{ background: 'white', borderRadius: '12px', padding: '20px', boxShadow: '0 1px 3px rgba(0,0,0,0.08)' }}>
            <h3 style={{ fontSize: '14px', fontWeight: '600', color: '#1e293b', marginBottom: '16px' }}>مبيعات ومصروفات وأرباح شهرياً</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 11 }} />
                <Tooltip />
                <Legend />
                <Bar dataKey="مبيعات"   fill="#3b82f6" radius={[4,4,0,0]} />
                <Bar dataKey="مصروفات" fill="#f59e0b" radius={[4,4,0,0]} />
                <Bar dataKey="أرباح"   fill="#22c55e" radius={[4,4,0,0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}

      {/* Products Tab */}
      {activeTab === 'products' && (
        <div style={{ background: 'white', borderRadius: '12px', padding: '20px', boxShadow: '0 1px 3px rgba(0,0,0,0.08)' }}>
          <h3 style={{ fontSize: '14px', fontWeight: '600', color: '#1e293b', marginBottom: '16px' }}>🏆 أفضل المنتجات مبيعاً</h3>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #f1f5f9' }}>
                {['المنتج', 'المبيعات', 'الإيراد', 'النمو'].map(col => (
                  <th key={col} style={{ padding: '10px 14px', textAlign: 'right', color: '#64748b', fontSize: '12px', fontWeight: '600' }}>{col}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {topProducts.map((p, i) => (
                <tr key={p.name} style={{ borderBottom: '1px solid #f1f5f9', background: i % 2 === 0 ? 'white' : '#fafafa' }}>
                  <td style={{ padding: '12px 14px', fontSize: '13px', color: '#1e293b', fontWeight: '500' }}>
                    <span style={{ marginLeft: '8px', color: '#94a3b8', fontSize: '12px' }}>#{i + 1}</span>
                    {p.name}
                  </td>
                  <td style={{ padding: '12px 14px', fontSize: '13px', color: '#475569' }}>{p.sales} قطعة</td>
                  <td style={{ padding: '12px 14px', fontSize: '13px', color: '#1e293b', fontWeight: '500' }}>{p.revenue}</td>
                  <td style={{ padding: '12px 14px' }}>
                    <span style={{
                      padding: '3px 8px', borderRadius: '20px', fontSize: '11px', fontWeight: '600',
                      background: p.growth >= 0 ? '#dcfce7' : '#fee2e2',
                      color: p.growth >= 0 ? '#16a34a' : '#dc2626',
                    }}>
                      {p.growth >= 0 ? '▲' : '▼'} {Math.abs(p.growth)}%
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Categories Tab */}
      {activeTab === 'categories' && (
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <div style={{ background: 'white', borderRadius: '12px', padding: '20px', boxShadow: '0 1px 3px rgba(0,0,0,0.08)', flex: '1', minWidth: '280px' }}>
            <h3 style={{ fontSize: '14px', fontWeight: '600', color: '#1e293b', marginBottom: '16px' }}>توزيع المبيعات بالفئات</h3>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie data={categoryData} cx="50%" cy="50%" outerRadius={90} dataKey="value" label={({ name, value }) => `${name} ${value}%`}>
                  {categoryData.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div style={{ background: 'white', borderRadius: '12px', padding: '20px', boxShadow: '0 1px 3px rgba(0,0,0,0.08)', flex: '1', minWidth: '240px' }}>
            <h3 style={{ fontSize: '14px', fontWeight: '600', color: '#1e293b', marginBottom: '16px' }}>تفاصيل الفئات</h3>
            {categoryData.map((cat, i) => (
              <div key={cat.name} style={{ marginBottom: '16px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                  <span style={{ fontSize: '13px', color: '#1e293b' }}>{cat.name}</span>
                  <span style={{ fontSize: '13px', fontWeight: '600', color: COLORS[i] }}>{cat.value}%</span>
                </div>
                <div style={{ background: '#f1f5f9', borderRadius: '99px', height: '8px' }}>
                  <div style={{ width: `${cat.value}%`, background: COLORS[i], borderRadius: '99px', height: '100%', transition: 'width 0.5s ease' }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Reports
