import { NavLink } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import './NavDrawer.css'

function NavDrawer({ open, onClose }) {
  const { user, logout } = useAuth()

  const handleLogout = () => {
    logout()
    onClose()
  }

  return (
    <>
      <div
        className={`navdrawer-overlay ${open ? 'is-open' : ''}`}
        onClick={onClose}
        aria-hidden="true"
      />

      <aside className={`navdrawer ${open ? 'is-open' : ''}`}>
        <div className="navdrawer__header">
          <div className="navdrawer__user">
            <div className="navdrawer__avatar">
              {user?.name?.charAt(0).toUpperCase()}
            </div>
            <div>
              <div className="navdrawer__name">{user?.name}</div>
              <div className="navdrawer__email">{user?.email}</div>
            </div>
          </div>
          <button className="navdrawer__close" onClick={onClose} aria-label="Close menu">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <nav className="navdrawer__nav">
          <NavLink to="/browse" className="navdrawer__item" onClick={onClose}>
            <svg className="navdrawer__icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="7" height="7" />
              <rect x="14" y="3" width="7" height="7" />
              <rect x="14" y="14" width="7" height="7" />
              <rect x="3" y="14" width="7" height="7" />
            </svg>
            <span>Browse</span>
          </NavLink>

          <NavLink to="/post" className="navdrawer__item" onClick={onClose}>
            <svg className="navdrawer__icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
            <span>Post Listing</span>
          </NavLink>

          <NavLink to="/dashboard" className="navdrawer__item" onClick={onClose}>
            <svg className="navdrawer__icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
              <line x1="3" y1="9" x2="21" y2="9" />
              <line x1="9" y1="21" x2="9" y2="9" />
            </svg>
            <span>Dashboard</span>
          </NavLink>

          <NavLink to="/messages" className="navdrawer__item" onClick={onClose}>
            <svg className="navdrawer__icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            <span>Messages</span>
          </NavLink>

          <NavLink to="/profile" className="navdrawer__item" onClick={onClose}>
            <svg className="navdrawer__icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            <span>Profile</span>
          </NavLink>

          {user?.role === 'admin' && (
            <NavLink to="/admin" className="navdrawer__item" onClick={onClose}>
              <svg className="navdrawer__icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              <span>Admin</span>
            </NavLink>
          )}
        </nav>

        <button className="navdrawer__logout" onClick={handleLogout}>
          Log out
        </button>
      </aside>
    </>
  )
}

export default NavDrawer