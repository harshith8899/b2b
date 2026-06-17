import "./TopBar.css";
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar">
      {/* Logo */}
      <a href="/" className="nav-logo">
        <div className="logo-sq">
          <svg viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
        </div>

        Industry<span>Link</span>
      </a>

      {/* Search */}
      <div className="nav-search">
        <svg viewBox="0 0 24 24">
          <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
        </svg>

        <input
          type="text"
          placeholder="Search machines, tools, jobs, scrap..."
        />
      </div>

      {/* Links */}
      <div className="nav-links">
        <a href="/" className="active">
          Services
        </a>

        <a href="/">Technicians</a>

        <a href="/">Jobs</a>

        <a href="/">Vacant Machines</a>

        <a href="/">Scrap</a>
      </div>

      <div className="nav-spacer"></div>

      <Link to="/login" className="nav-login">
        Login
      </Link>

      <button className="nav-post">
        + Post Listing
      </button>
    </nav>
  );
}