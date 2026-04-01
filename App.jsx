import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import useAuthStore from './useAuthStore'
import ProtectedRoute from './ProtectedRoute'
import Sidebar from './Sidebar'
import Header from './Header'
import Login from './Login'
import Home from './Home'
import Reports from './Reports'
import Users from './Users'
import Settings from './Settings'

function DashboardLayout() {
  return (
    <div className="flex min-h-screen bg-slate-100" dir="rtl">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <div className="p-6">
          <Routes>
            <Route path="/"         element={<Home />} />
            <Route path="/reports"  element={<Reports />} />
            <Route path="/users"    element={<Users />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

function App() {
  const isAuthenticated = useAuthStore(state => state.isAuthenticated)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={
          isAuthenticated ? <Navigate to="/" replace /> : <Login />
        } />
        <Route path="/*" element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
