import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import './Login.css'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    if (!email || !password) {
      setError('Please fill in your email and password.')
      return
    }

    try {
      await login(email, password)
      navigate('/browse')
    } catch (err) {
      setError('Incorrect email or password. Try again.')
    }
  }

  return (
    <div className="il-login">

      {/* ── Left panel ── */}
      <div className="il-login__panel">
        <div className="il-login__panel-inner">

          {/* Logo */}
          <a href="/" className="il-logo">
            <div className="il-logo__sq">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                  stroke="#0D1B2A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            Industry<span>Link</span>
          </a>

          {/* Headline */}
          <div className="il-login__panel-copy">
            <h2 className="il-login__panel-title">
              India's industrial<br />marketplace.
            </h2>
            <p className="il-login__panel-sub">
              Buy, sell, hire, and rent — machines, operators, scrap, and more. All verified.
            </p>
          </div>

          {/* Stats */}
          <div className="il-login__stats">
            <div className="il-login__stat">
              <span className="il-login__stat-num">18,400+</span>
              <span className="il-login__stat-label">Active Listings</span>
            </div>
            <div className="il-login__stat">
              <span className="il-login__stat-num">5,200+</span>
              <span className="il-login__stat-label">Verified Operators</span>
            </div>
            <div className="il-login__stat">
              <span className="il-login__stat-num">34</span>
              <span className="il-login__stat-label">Cities</span>
            </div>
          </div>

          {/* Trust badges */}
          <div className="il-login__trust">
            <div className="il-login__trust-item">
              <svg viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 1l2.39 4.843 5.341.776-3.865 3.765.912 5.316L10 13.347l-4.778 2.353.912-5.316L2.27 6.619l5.341-.776L10 1z" clipRule="evenodd"/></svg>
              GST Verified Sellers
            </div>
            <div className="il-login__trust-item">
              <svg viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
              ITI / NCVT Certified
            </div>
            <div className="il-login__trust-item">
              <svg viewBox="0 0 20 20" fill="currentColor"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/></svg>
              Zero Commission
            </div>
          </div>
        </div>
      </div>

      {/* ── Right panel (form) ── */}
      <div className="il-login__form-side">
        <div className="il-login__form-wrap">

          <div className="il-login__form-header">
            <h1 className="il-login__form-title">Sign in</h1>
            <p className="il-login__form-sub">Welcome back to IndustryLink</p>
          </div>

          <form onSubmit={handleSubmit} className="il-login__form" noValidate>

            {error && (
              <div className="il-login__error" role="alert">
                <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
                </svg>
                {error}
              </div>
            )}

            <div className="il-login__field">
              <label htmlFor="il-email" className="il-login__label">Email address</label>
              <input
                id="il-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="il-login__input"
                placeholder="you@company.com"
                autoComplete="email"
              />
            </div>

            <div className="il-login__field">
              <div className="il-login__label-row">
                <label htmlFor="il-password" className="il-login__label">Password</label>
                <button type="button" className="il-login__forgot">Forgot password?</button>
              </div>
              <input
                id="il-password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="il-login__input"
                placeholder="••••••••"
                autoComplete="current-password"
              />
            </div>

            <button type="submit" className="il-login__submit">
              Sign In
            </button>

            <div className="il-login__divider"><span>or</span></div>

            <button
              type="button"
              className="il-login__google"
              onClick={() => {}}
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Continue with Google
            </button>

            <p className="il-login__signup-row">
              Don't have an account?{' '}
              <button
                type="button"
                onClick={() => navigate('/register')}
                className="il-login__signup-link"
              >
                Create one free
              </button>
            </p>
          </form>

          {/* Demo credentials */}
          <div className="il-login__demo">
            <p className="il-login__demo-label">Demo accounts</p>
            <div className="il-login__demo-row">
              <span className="il-login__demo-role">User</span>
              <code className="il-login__demo-code">user@test.com</code>
              <span className="il-login__demo-pwd">any password</span>
            </div>
            <div className="il-login__demo-row">
              <span className="il-login__demo-role">Admin</span>
              <code className="il-login__demo-code">admin@marketplace.com</code>
              <span className="il-login__demo-pwd">any password</span>
            </div>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Login