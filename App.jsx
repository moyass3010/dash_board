import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import useAuthStore from './useAuthStore'
import ProtectedRoute from './components/ProtectedRoute'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Login from './Pages/Login'
import Home from './Pages/Home'
import Reports from './Pages/Reports'
import Users from './Pages/Users'
import Settings from './Pages/Settings'

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
