import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const data = [
  { month: 'يناير', مبيعات: 4000 },
  { month: 'فبراير', مبيعات: 3000 },
  { month: 'مارس', مبيعات: 5000 },
  { month: 'أبريل', مبيعات: 4500 },
  { month: 'مايو', مبيعات: 6000 },
  { month: 'يونيو', مبيعات: 5500 },
]

function SalesChart() {
  return (
    <div style={{
      background: 'white',
      borderRadius: '12px',
      padding: '24px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
      marginTop: '24px'
    }}>
      <h3 style={{ marginBottom: '20px', color: '#1e293b' }}>📈 المبيعات الشهرية</h3>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis dataKey="month" tick={{ fontSize: 12 }} />
          <YAxis tick={{ fontSize: 12 }} />
          <Tooltip />
          <Line 
            type="monotone" 
            dataKey="مبيعات" 
            stroke="#3b82f6" 
            strokeWidth={2}
            dot={{ fill: '#3b82f6' }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default SalesChart