const orders = [
    { id: '#1001', customer: 'أحمد محمد', product: 'لابتوب', amount: '5,200 ج', status: 'مكتمل' },
    { id: '#1002', customer: 'سارة علي', product: 'موبايل', amount: '3,100 ج', status: 'قيد التنفيذ' },
    { id: '#1003', customer: 'محمود حسن', product: 'سماعات', amount: '850 ج', status: 'مكتمل' },
    { id: '#1004', customer: 'نور أحمد', product: 'شاشة', amount: '2,400 ج', status: 'ملغي' },
    { id: '#1005', customer: 'عمر خالد', product: 'كيبورد', amount: '420 ج', status: 'قيد التنفيذ' },
    { id: '#1006', customer: 'كريم ياسر', product: 'سماعه', amount: '1200 ج', status: 'قيد التنفيذ' },
  ]
  
  const statusColors = {
    'مكتمل':       { bg: '#dcfce7', color: '#16a34a' },
    'قيد التنفيذ': { bg: '#fef9c3', color: '#ca8a04' },
    'ملغي':        { bg: '#fee2e2', color: '#dc2626' },
  }
  
  function OrdersTable() {
    return (
      <div style={{
        background: 'white',
        borderRadius: '12px',
        padding: '24px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        marginTop: '24px',
        overflowX: 'auto'
      }}>
        <h3 style={{ marginBottom: '20px', color: '#1e293b' }}>🧾 آخر الطلبات</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid #f1f5f9' }}>
              {['رقم الطلب', 'العميل', 'المنتج', 'المبلغ', 'الحالة'].map(col => (
                <th key={col} style={{
                  padding: '10px 14px',
                  textAlign: 'right',
                  color: '#64748b',
                  fontSize: '13px',
                  fontWeight: '600'
                }}>{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {orders.map((order, i) => (
              <tr key={order.id} style={{
                borderBottom: '1px solid #f1f5f9',
                background: i % 2 === 0 ? 'white' : '#fafafa'
              }}>
                <td style={{ padding: '12px 14px', fontSize: '14px', color: '#3b82f6', fontWeight: '500' }}>{order.id}</td>
                <td style={{ padding: '12px 14px', fontSize: '14px', color: '#1e293b' }}>{order.customer}</td>
                <td style={{ padding: '12px 14px', fontSize: '14px', color: '#475569' }}>{order.product}</td>
                <td style={{ padding: '12px 14px', fontSize: '14px', color: '#1e293b', fontWeight: '500' }}>{order.amount}</td>
                <td style={{ padding: '12px 14px' }}>
                  <span style={{
                    padding: '4px 10px',
                    borderRadius: '20px',
                    fontSize: '12px',
                    fontWeight: '500',
                    background: statusColors[order.status].bg,
                    color: statusColors[order.status].color,
                  }}>{order.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
  
  export default OrdersTable