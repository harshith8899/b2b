import { useState } from 'react'
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider, useAuth } from './context/AuthContext'
import TopBar from './components/TopBar'
import NavDrawer from './components/NavDrawer'
import Layout from './components/Layout'
import Login from './pages/Login'
import Register from './pages/Register'
import Browse from './pages/Browse'
import Post from './pages/Post'
import Dashboard from './pages/Dashboard'
import Messages from './pages/Messages'
import Profile from './pages/Profile'
import Admin from './pages/Admin'
import ListingDetail from './pages/ListingDetail'
import './App.css'
import Hero from './components/hero'

function PrivateRoute({ children }) {
  const { user } = useAuth()
  return user ? children : <Navigate to="/login" />
}

function AdminRoute({ children }) {
  const { user } = useAuth()
  return user?.role === 'admin' ? children : <Navigate to="/dashboard" />
}

function AppRoutes() {
  const { user } = useAuth()
  const [drawerOpen, setDrawerOpen] = useState(false)

  return (
    <HashRouter>
      {/* Horizontal navbar — shown on every page, public or private */}
      <TopBar user={user} onProfileClick={() => setDrawerOpen(true)} />

      <div className="app-main">
        <Routes>
          {/* Public routes */}
          <Route path="/" element={user ? <Navigate to="/browse" /> : <Hero />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Public: anyone can browse listings without an account */}
          <Route element={<Layout />}>
            <Route path="/browse" element={<Browse />} />
            <Route path="/listing/:id" element={<ListingDetail />} />
          </Route>

          {/* Private: posting, managing, and messaging require login */}
          <Route element={<PrivateRoute><Layout /></PrivateRoute>}>
            <Route path="/post" element={<Post />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/messages/:id" element={<Messages />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/admin" element={<AdminRoute><Admin /></AdminRoute>} />
          </Route>
        </Routes>
      </div>

      {/* Vertical nav — slides in from the right when the profile icon is clicked */}
      {user && <NavDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />}
    </HashRouter>
  )
}

function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  )
}

export default App