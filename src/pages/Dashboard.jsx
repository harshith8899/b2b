import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { getMyListings, getDashboardStats } from '../lib/api'
import './Dashboard.css'

function Dashboard() {
  const navigate = useNavigate()
  const { user } = useAuth()
  const [stats, setStats] = useState({
    activeListings: 0,
    enquiriesSent: 0,
    enquiriesReceived: 0,
    totalViews: 0
  })
  const [listings, setListings] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    loadDashboard()
  }, [])

  const loadDashboard = async () => {
    setLoading(true)
    setError('')
    try {
      const [listingsData, statsData] = await Promise.all([
        getMyListings(user.id),
        getDashboardStats(user.id)
      ])
      setListings(listingsData || [])
      setStats(statsData || stats)
    } catch (err) {
      console.error('Error loading dashboard:', err)
      setError('Failed to load dashboard data')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="dashboard">
      <div className="dashboard__container">
        <h1 className="dashboard__title">Dashboard</h1>

        {error && (
          <div className="dashboard__error" style={{
            backgroundColor: '#fee',
            color: '#c00',
            padding: '12px',
            borderRadius: '4px',
            marginBottom: '16px'
          }}>
            {error}
          </div>
        )}

        {loading ? (
          <div style={{ padding: '40px', textAlign: 'center' }}>Loading...</div>
        ) : (
          <>
            <div className="dashboard__stats">
              <div className="stat-card">
                <div className="stat-card__value">{stats.activeListings}</div>
                <div className="stat-card__label">Active Listings</div>
              </div>

              <div className="stat-card">
                <div className="stat-card__value">{stats.enquiriesReceived}</div>
                <div className="stat-card__label">Enquiries Received</div>
              </div>

              <div className="stat-card">
                <div className="stat-card__value">{stats.enquiriesSent}</div>
                <div className="stat-card__label">Enquiries Sent</div>
              </div>

              <div className="stat-card">
                <div className="stat-card__value">{stats.totalViews}</div>
                <div className="stat-card__label">Total Views</div>
              </div>
            </div>

            <div className="dashboard__section">
              <div className="dashboard__section-header">
                <h2 className="dashboard__section-title">My Listings</h2>
                <button
                  className="dashboard__view-all"
                  onClick={() => navigate('/post')}
                >
                  Post New
                </button>
              </div>

              {listings.length === 0 ? (
                <div style={{
                  padding: '40px',
                  textAlign: 'center',
                  backgroundColor: '#f7fafc',
                  borderRadius: '8px'
                }}>
                  <p style={{ marginBottom: '16px' }}>You haven't created any listings yet</p>
                  <button
                    onClick={() => navigate('/post')}
                    style={{
                      padding: '12px 24px',
                      backgroundColor: '#2c7a7b',
                      color: 'white',
                      border: 'none',
                      borderRadius: '4px',
                      cursor: 'pointer'
                    }}
                  >
                    Create Your First Listing
                  </button>
                </div>
              ) : (
                <div className="dashboard__listings">
                  {listings.slice(0, 5).map(listing => (
                    <div
                      key={listing.id}
                      className="listing-item"
                      onClick={() => navigate(`/listing/${listing.id}`)}
                      style={{ cursor: 'pointer' }}
                    >
                      <div className="listing-item__main">
                        <h3 className="listing-item__title">{listing.title}</h3>
                        <span className={`listing-item__status listing-item__status--${listing.status}`}>
                          {listing.status}
                        </span>
                      </div>
                      <div className="listing-item__stats">
                        <span className="listing-item__stat">{listing.views_count || 0} views</span>
                        <span className="listing-item__stat">{listing.enquiries_count || 0} enquiries</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="dashboard__section">
              <h2 className="dashboard__section-title">Quick Actions</h2>
              <div className="dashboard__actions">
            <button className="action-card" onClick={() => navigate('/post')}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
              <span>Post Listing</span>
            </button>

            <button className="action-card" onClick={() => navigate('/messages')}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
              <span>View Messages</span>
            </button>

            <button className="action-card" onClick={() => navigate('/browse')}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
              <span>Browse Market</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
