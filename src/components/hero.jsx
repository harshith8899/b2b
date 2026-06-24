import { useState, useEffect } from "react";
import "/src/components/hero.css";

const POPULAR = [
  "CNC Machines",
  "Welding Equipment",
  "ITI Operators",
  "Compressor Rental",
  "Scrap Iron",
  "Machine Repair",
  "Product Designer",
];

const STATS = [
  { num: "18,400+", label: "Total Listings" },
  { num: "5,200+", label: "Verified Operators" },
  { num: "940+", label: "Rental Units" },
  { num: "320+", label: "Machine Vendors" },
  { num: "1,800+", label: "Scrap Listings" },
  { num: "34", label: "Cities Active" },
];

export default function IndustryLinkHero() {
  const [query, setQuery] = useState("");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", overflow: "hidden" }}>

      {/* ── HERO ── */}
      <section className="il-hero-section">
        <div className="il-hero-inner">

          <div className={`il-badge il-fade il-fade-d1 ${visible ? "in" : ""}`}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="#92400E">
              <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
            </svg>
            Karnataka's #1 Small-Scale Industry Platform
          </div>

          <h1 className={`il-h1 il-fade il-fade-d2 ${visible ? "in" : ""}`}>
            Machines. Skills. Rentals.<br />
            <em>All in one place.</em>
          </h1>

          <p className={`il-sub il-fade il-fade-d3 ${visible ? "in" : ""}`}>
            Buy, rent, hire, or sell — connect with verified machinery dealers,
            skilled operators, technicians, and product vendors across India's
            industrial belt.
          </p>

          {/* Search Box */}
          <div className={`il-search-wrap il-fade il-fade-d4 ${visible ? "in" : ""}`}>
            <div className="il-search-box">
              <div className="il-loc">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="#F59E0B">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                Bengaluru ▾
              </div>
              <input
                className="il-input"
                type="text"
                placeholder="e.g. CNC lathe, welding operator, scrap steel…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <button className="il-btn">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="#0D1B2A">
                  <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                </svg>
                Search
              </button>
            </div>
          </div>

          {/* Popular Chips */}
          <div className={`il-pop-row il-fade il-fade-d5 ${visible ? "in" : ""}`}>
            <span className="il-pop-label">Popular:</span>
            {POPULAR.map((chip) => (
              <span
                key={chip}
                className="il-chip"
                onClick={() => setQuery(chip)}
              >
                {chip}
              </span>
            ))}
          </div>

        </div>
      </section>

      {/* ── STATS TICKER ── */}
      <div className="il-stats">
        <div className="il-stats-inner">
          {STATS.map((s) => (
            <div key={s.label} className="il-tk">
              <div className="il-tk-num">{s.num}</div>
              <div className="il-tk-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}