function StatsCard({ title, value, icon, color, change }) {
  const isPositive = change >= 0

  return (
    <div className={`bg-white rounded-xl p-5 shadow-sm flex-1 min-w-[150px] border-t-4`}
      style={{ borderColor: color }}>
      <div className="flex justify-between items-start">
        <div>
          <p className="text-slate-500 text-sm mb-1">{title}</p>
          <h3 className="text-2xl font-bold text-slate-800">{value}</h3>
          <p className={`text-xs mt-1 ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
            {isPositive ? '▲' : '▼'} {Math.abs(change)}% من الشهر اللي فات
          </p>
        </div>
        <span className="text-3xl">{icon}</span>
      </div>
    </div>
  )
}

export default StatsCard