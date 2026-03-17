// components/TourPackageCard.jsx
import React, { useState, useEffect, useCallback } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  FaMapMarkerAlt, FaClock, FaUsers, FaStar, FaHeart,
  FaRegHeart, FaArrowRight, FaFire, FaBolt, FaShieldAlt
} from 'react-icons/fa';
import { WiDaySunny, WiCloudy, WiRain } from 'react-icons/wi';

// ── Simulated live data hooks ─────────────────────────────────────────────────
const useWeatherSim = (location) => {
  const [weather, setWeather] = useState(null);
  useEffect(() => {
    const weathers = [
      { icon: '☀️', temp: Math.floor(22 + Math.random() * 15), desc: 'Sunny', color: '#FF9F1C' },
      { icon: '⛅', temp: Math.floor(18 + Math.random() * 10), desc: 'Partly Cloudy', color: '#5BC0EB' },
      { icon: '🌧️', temp: Math.floor(15 + Math.random() * 8), desc: 'Light Rain', color: '#7091E6' },
      { icon: '❄️', temp: Math.floor(-2 + Math.random() * 12), desc: 'Snow', color: '#A8D8EA' },
    ];
    const seed = (location?.charCodeAt(0) || 0) % weathers.length;
    setTimeout(() => setWeather(weathers[seed]), 600 + Math.random() * 400);
  }, [location]);
  return weather;
};

const useLiveSeats = (initialSeats) => {
  const [seats, setSeats] = useState(initialSeats || Math.floor(5 + Math.random() * 20));
  useEffect(() => {
    if (seats <= 0) return;
    const chance = Math.random();
    if (chance > 0.7) {
      const t = setTimeout(() => {
        setSeats(s => Math.max(0, s - 1));
      }, 15000 + Math.random() * 30000);
      return () => clearTimeout(t);
    }
  }, [seats]);
  return seats;
};

const useCountdownPrice = (basePrice) => {
  const [timeLeft, setTimeLeft] = useState({ h: 4, m: 23, s: 41 });
  const [isFlashing, setIsFlashing] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(prev => {
        let { h, m, s } = prev;
        s--;
        if (s < 0) { s = 59; m--; }
        if (m < 0) { m = 59; h--; }
        if (h < 0) return { h: 23, m: 59, s: 59 };
        if (s === 0 && m % 5 === 0) setIsFlashing(true);
        setTimeout(() => setIsFlashing(false), 800);
        return { h, m, s };
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return { timeLeft, isFlashing };
};

// ── Theme config ──────────────────────────────────────────────────────────────
const THEMES = {
  'custom-tour':      { grad: 'linear-gradient(135deg, #FF6B6B, #FF8E53)', primary: '#FF6B6B', light: '#FFF0F0', icon: '🎨', shadow: 'rgba(255,107,107,0.25)' },
  'adventure-tour':   { grad: 'linear-gradient(135deg, #4ECDC4, #2C3E50)', primary: '#4ECDC4', light: '#E8F8F5', icon: '🏔️', shadow: 'rgba(78,205,196,0.25)' },
  'family-tour':      { grad: 'linear-gradient(135deg, #FFE66D, #FFB347)', primary: '#FFB347', light: '#FFF9E6', icon: '👨‍👩‍👧‍👦', shadow: 'rgba(255,179,71,0.25)' },
  'group-tour':       { grad: 'linear-gradient(135deg, #A37BFF, #6B4EFF)', primary: '#A37BFF', light: '#F3EDFF', icon: '🚌', shadow: 'rgba(163,123,255,0.25)' },
  'city-tour':        { grad: 'linear-gradient(135deg, #FF9F1C, #FCCF31)', primary: '#FF9F1C', light: '#FFF3E0', icon: '🌆', shadow: 'rgba(255,159,28,0.25)' },
  'honeymoon-tour':   { grad: 'linear-gradient(135deg, #FF6EB4, #FF9A9E)', primary: '#FF6EB4', light: '#FFF0F7', icon: '💑', shadow: 'rgba(255,110,180,0.25)' },
  'weekend-getaway':  { grad: 'linear-gradient(135deg, #5BC0EB, #0353A4)', primary: '#5BC0EB', light: '#E8F4FD', icon: '🌅', shadow: 'rgba(91,192,235,0.25)' },
  'luxury-tour':      { grad: 'linear-gradient(135deg, #C9A84C, #8B6914)', primary: '#C9A84C', light: '#FDF6E3', icon: '💎', shadow: 'rgba(201,168,76,0.25)' },
  'pilgrimage-tour':  { grad: 'linear-gradient(135deg, #7BAE7F, #4A7C59)', primary: '#7BAE7F', light: '#EEFBEE', icon: '🕌', shadow: 'rgba(123,174,127,0.25)' },
  default:            { grad: 'linear-gradient(135deg, #667eea, #764ba2)', primary: '#667eea', light: '#F0F2FF', icon: '✈️', shadow: 'rgba(102,126,234,0.25)' },
};

const TourPackageCard = ({ pkg, themeColor = 'default', index = 0, onWishlistChange }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFavourite, setIsFavourite] = useState(() => {
    try { return JSON.parse(localStorage.getItem('dvd_wishlist') || '[]').includes(pkg?._id || pkg?.id); }
    catch { return false; }
  });
  const [imageError, setImageError] = useState(false);
  const [showQuickView, setShowQuickView] = useState(false);
  const [justAdded, setJustAdded] = useState(false);

  // Read :type from the URL — set by BaseTourPage route /tourcard/:type
  const { type: typeFromUrl } = useParams();
  const tourType = (themeColor && themeColor !== 'default') ? themeColor : (typeFromUrl || 'custom-tour');

  const themeKey = tourType?.includes('-') ? tourType : `${tourType}-tour`;
  const theme = THEMES[themeKey] || THEMES[tourType] || THEMES.default;

  const weather = useWeatherSim(pkg?.location);
  const seatsLeft = useLiveSeats(pkg?.seatsLeft);
  const { timeLeft, isFlashing } = useCountdownPrice(pkg?.price);

  const isUrgent = seatsLeft <= 5;
  const isLow = seatsLeft <= 12 && seatsLeft > 5;
  const seatsColor = isUrgent ? '#FF6B6B' : isLow ? '#FF9F1C' : '#4CAF50';
  const seatsFill = Math.min(100, ((30 - seatsLeft) / 30) * 100);

  const firstDuration = pkg?.durations?.[0] || {};
  const originalPrice = firstDuration.price || pkg?.price || 4999;
  const discountedPrice = firstDuration.discountedPrice || pkg?.discountedPrice;
  const finalPrice = discountedPrice || originalPrice;
  const discountPct = discountedPrice ? Math.round((1 - discountedPrice / originalPrice) * 100) : null;

  const fallbackImg = 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600&q=80';

  const toggleFavourite = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    const newVal = !isFavourite;
    setIsFavourite(newVal);
    if (newVal) { setJustAdded(true); setTimeout(() => setJustAdded(false), 1500); }
    try {
      const list = JSON.parse(localStorage.getItem('dvd_wishlist') || '[]');
      const id = pkg?._id || pkg?.id;
      const updated = newVal ? [...list, id] : list.filter(x => x !== id);
      localStorage.setItem('dvd_wishlist', JSON.stringify(updated));
    } catch {}
    onWishlistChange?.(pkg, newVal);
  }, [isFavourite, pkg, onWishlistChange]);

  const locationDisplay = pkg?.location
    ? pkg.location.charAt(0).toUpperCase() + pkg.location.slice(1)
    : 'Multiple Locations';

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Cormorant+Garamond:wght@500;600;700&display=swap');

        :root {
          --font-body: 'DM Sans', sans-serif;
          --font-display: 'Cormorant Garamond', serif;
          --ease: cubic-bezier(0.4,0,0.2,1);
        }

        @keyframes dvd-fadeUp { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
        @keyframes dvd-heartPop { 0%{transform:scale(1)} 40%{transform:scale(1.4)} 70%{transform:scale(0.9)} 100%{transform:scale(1)} }
        @keyframes dvd-seatPulse { 0%,100%{opacity:1} 50%{opacity:0.5} }
        @keyframes dvd-shimmer { 0%{background-position:-400px 0} 100%{background-position:400px 0} }
        @keyframes dvd-priceBlink { 0%,100%{background:rgba(255,107,107,0.1)} 50%{background:rgba(255,107,107,0.25)} }
        @keyframes dvd-slideIn { from{opacity:0;transform:translateX(10px)} to{opacity:1;transform:translateX(0)} }
        @keyframes dvd-wishPop { 0%{opacity:1;transform:translateY(0) scale(1)} 100%{opacity:0;transform:translateY(-30px) scale(0.8)} }

        .dvd-card-wrapper {
          animation: dvd-fadeUp 0.6s var(--ease) both;
          font-family: var(--font-body);
        }

        .dvd-card {
          background: white;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0,0,0,0.06);
          transition: transform 0.4s var(--ease), box-shadow 0.4s var(--ease);
          position: relative;
          cursor: pointer;
          border: 1px solid rgba(0,0,0,0.04);
          height: 100%;
          display: flex;
          flex-direction: column;
        }
        .dvd-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 24px 50px var(--card-shadow, rgba(0,0,0,0.15));
        }

        /* ── Image ── */
        .dvd-img-wrap {
          position: relative;
          height: 230px;
          overflow: hidden;
          flex-shrink: 0;
          background: #f0f0f0;
        }
        .dvd-img {
          width: 100%; height: 100%;
          object-fit: cover;
          transition: transform 0.6s var(--ease);
        }
        .dvd-card:hover .dvd-img { transform: scale(1.08); }

        .dvd-img-shimmer {
          width: 100%; height: 100%;
          background: linear-gradient(90deg, #f0f0f0 25%, #e8e8e8 50%, #f0f0f0 75%);
          background-size: 400px 100%;
          animation: dvd-shimmer 1.5s infinite;
        }

        /* Image gradient overlay */
        .dvd-img-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(180deg, transparent 40%, rgba(10,10,30,0.75) 100%);
          opacity: 0;
          transition: opacity 0.4s;
          display: flex; align-items: flex-end; padding: 1.25rem;
        }
        .dvd-card:hover .dvd-img-overlay { opacity: 1; }
        .dvd-overlay-text { color: white; animation: dvd-slideIn 0.3s var(--ease) both; }
        .dvd-overlay-loc { font-size: 0.85rem; opacity: 0.85; margin-bottom: 2px; }
        .dvd-overlay-title { font-size: 1.1rem; font-weight: 600; }

        /* Top badges */
        .dvd-badges-top {
          position: absolute; top: 12px; right: 12px;
          display: flex; flex-direction: column; gap: 6px; align-items: flex-end;
          z-index: 5;
        }
        .dvd-rating-badge {
          display: flex; align-items: center; gap: 5px;
          padding: 5px 12px;
          border-radius: 50px;
          font-size: 0.8rem; font-weight: 700;
          color: white;
          box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        }
        .dvd-fav-btn {
          width: 36px; height: 36px;
          border-radius: 50%;
          background: white;
          border: none; cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          font-size: 1.05rem;
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
          transition: transform 0.2s var(--ease), box-shadow 0.2s;
          position: relative;
          overflow: visible;
        }
        .dvd-fav-btn:hover { transform: scale(1.1); box-shadow: 0 6px 18px rgba(0,0,0,0.2); }
        .dvd-fav-btn.active { animation: dvd-heartPop 0.5s var(--ease); }
        .dvd-wish-popup {
          position: absolute;
          top: -30px; left: 50%;
          transform: translateX(-50%);
          white-space: nowrap;
          background: #FF6B6B;
          color: white;
          font-size: 0.65rem;
          font-weight: 700;
          padding: 3px 8px;
          border-radius: 20px;
          pointer-events: none;
          animation: dvd-wishPop 1.5s var(--ease) forwards;
        }

        /* Discount badge */
        .dvd-discount-badge {
          position: absolute; top: 12px; left: 12px;
          padding: 5px 12px;
          border-radius: 50px;
          font-size: 0.75rem; font-weight: 700;
          color: white; z-index: 5;
          box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        }

        /* Weather widget */
        .dvd-weather {
          position: absolute; bottom: 12px; left: 12px;
          display: flex; align-items: center; gap: 5px;
          background: rgba(255,255,255,0.15);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255,255,255,0.2);
          padding: 4px 10px;
          border-radius: 50px;
          color: white;
          font-size: 0.78rem; font-weight: 600;
          z-index: 5;
          opacity: 0;
          transition: opacity 0.4s;
        }
        .dvd-card:hover .dvd-weather { opacity: 1; }
        .dvd-weather.loaded { opacity: 1; }

        /* Sold Out */
        .dvd-soldout {
          position: absolute; inset: 0;
          background: rgba(0,0,0,0.6);
          display: flex; align-items: center; justify-content: center;
          z-index: 10;
        }
        .dvd-soldout-label {
          background: rgba(255,59,48,0.9);
          color: white;
          padding: 10px 28px;
          border-radius: 50px;
          font-size: 1.2rem;
          font-weight: 800;
          transform: rotate(-15deg);
          box-shadow: 0 10px 30px rgba(255,59,48,0.4);
        }

        /* ── Content ── */
        .dvd-content {
          padding: 1.25rem 1.4rem;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        /* Type icon */
        .dvd-type-chip {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 4px 10px;
          border-radius: 8px;
          font-size: 0.75rem;
          font-weight: 700;
          margin-bottom: 0.75rem;
          letter-spacing: 0.03em;
        }

        .dvd-location {
          display: flex; align-items: center; gap: 6px;
          color: #777; font-size: 0.85rem;
          margin-bottom: 0.4rem;
        }
        .dvd-location svg { flex-shrink: 0; }

        .dvd-title {
          font-family: var(--font-display);
          font-size: 1.35rem;
          font-weight: 700;
          color: #1a1a2e;
          line-height: 1.25;
          margin-bottom: 0.5rem;
        }

        .dvd-caption {
          font-size: 0.84rem;
          color: #777;
          line-height: 1.6;
          margin-bottom: 1rem;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        /* Features row */
        .dvd-features {
          display: flex; gap: 1rem;
          margin-bottom: 0.9rem;
          padding-bottom: 0.9rem;
          border-bottom: 1px solid #f0f0f8;
        }
        .dvd-feature {
          display: flex; align-items: center; gap: 5px;
          font-size: 0.82rem; color: #666;
        }

        /* Seats bar */
        .dvd-seats {
          margin-bottom: 0.75rem;
        }
        .dvd-seats-row {
          display: flex; align-items: center;
          justify-content: space-between;
          margin-bottom: 4px;
          font-size: 0.78rem;
        }
        .dvd-seats-label { color: #888; }
        .dvd-seats-count { font-weight: 700; }
        .dvd-seats-track {
          height: 5px; background: #f0f0f8;
          border-radius: 3px; overflow: hidden;
        }
        .dvd-seats-fill {
          height: 100%; border-radius: 3px;
          transition: width 0.8s var(--ease);
        }

        /* Price countdown */
        .dvd-price-timer {
          display: flex; align-items: center; gap: 6px;
          background: rgba(255,107,107,0.08);
          border: 1px solid rgba(255,107,107,0.15);
          border-radius: 8px;
          padding: 5px 10px;
          margin-bottom: 1rem;
          font-size: 0.78rem;
        }
        .dvd-price-timer.flash { animation: dvd-priceBlink 0.8s; }
        .dvd-timer-digits { font-weight: 700; color: #FF6B6B; font-variant-numeric: tabular-nums; }
        .dvd-timer-label { color: #999; }

        /* Rating */
        .dvd-rating-row {
          display: flex; align-items: center;
          justify-content: space-between;
          margin-bottom: 1rem;
        }
        .dvd-stars { color: #FFD700; font-size: 0.82rem; }
        .dvd-review-text { font-size: 0.8rem; color: #999; }

        /* Footer */
        .dvd-footer {
          display: flex; align-items: center;
          justify-content: space-between;
          margin-top: auto;
          padding-top: 1rem;
          border-top: 1px solid #f0f0f8;
        }
        .dvd-price-block {}
        .dvd-price-main {
          font-family: var(--font-display);
          font-size: 1.55rem; font-weight: 700;
          line-height: 1;
        }
        .dvd-price-original {
          font-size: 0.8rem; color: #aaa;
          text-decoration: line-through;
          margin-left: 4px;
          font-family: var(--font-body);
        }
        .dvd-price-per { font-size: 0.75rem; color: #aaa; display: block; margin-top: 1px; }

        .dvd-view-btn {
          display: inline-flex; align-items: center; gap: 6px;
          padding: 0.6rem 1.25rem;
          border-radius: 50px;
          color: white;
          font-size: 0.84rem; font-weight: 600;
          text-decoration: none;
          transition: all 0.3s var(--ease);
          font-family: var(--font-body);
        }
        .dvd-view-btn:hover { transform: scale(1.04); box-shadow: 0 8px 20px rgba(0,0,0,0.2); }
        .dvd-view-btn svg { transition: transform 0.3s; }
        .dvd-view-btn:hover svg { transform: translateX(4px); }

        /* Trust badges */
        .dvd-trust {
          display: flex; gap: 10px;
          margin-top: 0.75rem;
          padding-top: 0.75rem;
          border-top: 1px dashed #f0f0f8;
        }
        .dvd-trust-item {
          display: flex; align-items: center; gap: 4px;
          font-size: 0.72rem; color: #999;
        }
        .dvd-trust-item svg { color: #4CAF50; }
      `}</style>

      <div
        className="col-xl-4 col-lg-4 col-md-6 mb-4 dvd-card-wrapper"
        style={{ animationDelay: `${index * 0.08}s` }}
      >
        <div
          className="dvd-card"
          style={{ '--card-shadow': theme.shadow }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Sold Out */}
          {pkg?.soldOut && (
            <div className="dvd-soldout">
              <span className="dvd-soldout-label">SOLD OUT</span>
            </div>
          )}

          {/* ── Image Section ── */}
          <div className="dvd-img-wrap">
            {imageError ? (
              <div className="dvd-img-shimmer" />
            ) : (
              <img
                src={pkg?.images?.[0] || pkg?.image || fallbackImg}
                alt={locationDisplay}
                className="dvd-img"
                loading="lazy"
                onError={() => setImageError(true)}
              />
            )}

            <div className="dvd-img-overlay">
              <div className="dvd-overlay-text">
                <div className="dvd-overlay-loc">📍 {locationDisplay}</div>
                <div className="dvd-overlay-title">{pkg?.title || 'Explore'}</div>
              </div>
            </div>

            {/* Top right badges */}
            <div className="dvd-badges-top">
              <div className="dvd-rating-badge" style={{ background: theme.grad }}>
                <FaStar /> {pkg?.rating || '4.8'}
              </div>
              <button
                className={`dvd-fav-btn ${isFavourite ? 'active' : ''}`}
                onClick={toggleFavourite}
                title={isFavourite ? 'Remove from wishlist' : 'Add to wishlist'}
              >
                {justAdded && <span className="dvd-wish-popup">Added! ❤️</span>}
                {isFavourite ? <FaHeart color="#FF6B6B" /> : <FaRegHeart color="#999" />}
              </button>
            </div>

            {/* Discount badge */}
            {discountPct && (
              <div className="dvd-discount-badge" style={{ background: theme.grad }}>
                🔥 {discountPct}% OFF
              </div>
            )}

            {/* Weather widget */}
            {weather && (
              <div className={`dvd-weather loaded`}>
                <span>{weather.icon}</span>
                <span>{weather.temp}°C</span>
                <span style={{ opacity: 0.8 }}>{weather.desc}</span>
              </div>
            )}
          </div>

          {/* ── Content ── */}
          <div className="dvd-content">
            {/* Type chip */}
            <div className="dvd-type-chip" style={{ background: theme.light, color: theme.primary }}>
              {theme.icon} {themeColor.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
            </div>

            {/* Location */}
            <div className="dvd-location">
              <FaMapMarkerAlt size={11} style={{ color: theme.primary }} />
              <span>{locationDisplay}</span>
            </div>

            {/* Title */}
            <h3 className="dvd-title">
              {pkg?.title || pkg?.caption || 'Explore Amazing Destinations'}
            </h3>

            {/* Caption */}
            <p className="dvd-caption">
              {pkg?.description || pkg?.caption || 'Discover the beauty and culture with our carefully crafted tour packages.'}
            </p>

            {/* Features */}
            <div className="dvd-features">
              <div className="dvd-feature">
                <FaClock size={11} style={{ color: theme.primary }} />
                <span>{pkg?.duration || '7 Days'}</span>
              </div>
              <div className="dvd-feature">
                <FaUsers size={11} style={{ color: theme.primary }} />
                <span>{pkg?.groupSize || 'Max 15'}</span>
              </div>
              {pkg?.meals && (
                <div className="dvd-feature">
                  <span>🍽️</span>
                  <span>Meals incl.</span>
                </div>
              )}
            </div>

            {/* Live Seats Bar */}
            {!pkg?.soldOut && (
              <div className="dvd-seats">
                <div className="dvd-seats-row">
                  <span className="dvd-seats-label">
                    {isUrgent ? '🔥 Almost Full!' : isLow ? '⚡ Filling Fast' : '🟢 Availability'}
                  </span>
                  <span
                    className="dvd-seats-count"
                    style={{ color: seatsColor, animation: isUrgent ? 'dvd-seatPulse 1.5s infinite' : 'none' }}
                  >
                    {seatsLeft === 0 ? 'Last slot!' : `${seatsLeft} seats left`}
                  </span>
                </div>
                <div className="dvd-seats-track">
                  <div
                    className="dvd-seats-fill"
                    style={{ width: `${seatsFill}%`, background: seatsColor }}
                  />
                </div>
              </div>
            )}

            {/* Price countdown (show only for urgent/discounted) */}
            {(isUrgent || discountPct) && (
              <div className={`dvd-price-timer ${isFlashing ? 'flash' : ''}`}>
                <FaBolt color="#FF6B6B" size={10} />
                <span className="dvd-timer-label">Price goes up in</span>
                <span className="dvd-timer-digits">
                  {String(timeLeft.h).padStart(2,'0')}:{String(timeLeft.m).padStart(2,'0')}:{String(timeLeft.s).padStart(2,'0')}
                </span>
              </div>
            )}

            {/* Rating */}
            <div className="dvd-rating-row">
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <span className="dvd-stars">{'★'.repeat(5)}</span>
                <span style={{ fontWeight: 700, fontSize: '0.85rem' }}>{pkg?.rating || '4.8'}</span>
              </div>
              <span className="dvd-review-text">({pkg?.reviews || '128'} reviews)</span>
            </div>

            {/* Footer */}
            <div className="dvd-footer">
              <div className="dvd-price-block">
                <div>
                  <span className="dvd-price-main" style={{ color: theme.primary }}>
                    ₹{finalPrice?.toLocaleString() || '4,999'}
                  </span>
                  {discountedPrice && (
                    <span className="dvd-price-original">₹{originalPrice?.toLocaleString()}</span>
                  )}
                </div>
                <span className="dvd-price-per">/person</span>
              </div>

              <Link
                to={`/package/${tourType}/${(pkg?.location || 'tour').toLowerCase().replace(/ /g, '-')}`}
                className="dvd-view-btn"
                style={{ background: theme.grad }}
                onClick={e => e.stopPropagation()}
              >
                Details <FaArrowRight size={11} />
              </Link>
            </div>

            {/* Trust badges */}
            <div className="dvd-trust">
              <div className="dvd-trust-item">
                <FaShieldAlt size={9} style={{ color: '#4CAF50' }} />
                <span>Insured</span>
              </div>
              <div className="dvd-trust-item">
                <span>🔄</span>
                <span>Free cancel</span>
              </div>
              <div className="dvd-trust-item">
                <span>💳</span>
                <span>EMI available</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TourPackageCard;