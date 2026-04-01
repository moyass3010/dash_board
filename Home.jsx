import StatsCard from './StatsCard'
import SalesChart from './SalesChart'
import OrdersTable from './OrdersTable'

const stats = [
  { title: 'إجمالي المبيعات', value: '24,500 ج', icon: '💰', color: '#3b82f6', change: 12 },
  { title: 'المستخدمين', value: '1,240', icon: '👥', color: '#8b5cf6', change: 8 },
  { title: 'الطلبات', value: '380', icon: '📦', color: '#f59e0b', change: -3 },
  { title: 'معدل الرضا', value: '94%', icon: '⭐', color: '#22c55e', change: 5 },
]

function Home() {
  return (
    <div>
      <p style={{ color: '#64748b', fontSize: '13px', marginBottom: '4px' }}>أهلاً، محمد 👋</p>
      <h2 style={{ fontSize: '18px', fontWeight: 'bold', color: '#1e293b', marginBottom: '20px' }}>
        إليك ملخص اليوم
      </h2>
      <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
        {stats.map(stat => (
          <StatsCard key={stat.title} {...stat} />
        ))}
      </div>
      <SalesChart />
      <OrdersTable />
    </div>
  )
}

export default Home
