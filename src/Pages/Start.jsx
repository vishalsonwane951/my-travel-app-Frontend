import React, {
  useEffect, useState, useRef, useContext, useCallback, useMemo, lazy, Suspense
} from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Footer from '../Components/Footer/Footer.jsx';
import api from '../utils/api.js';
import { AuthContext } from '../Context/AuthContext.jsx';
import BookingForm from '../Components/BookingForm/BookingForm.jsx';
import {
  FaMapMarkerAlt, FaClock, FaUsers, FaStar, FaArrowRight,
  FaSearch, FaAward, FaGlobe, FaUmbrellaBeach, FaMountain,
  FaTree, FaWater, FaChevronRight, FaChevronLeft, FaHotel,
  FaMapMarkedAlt, FaTrash, FaUpload, FaPlay, FaPlane,
  FaEdit, FaPlus, FaHeart, FaTimes, FaFilter, FaCompass,
  FaCalendarAlt, FaRupeeSign, FaSun, FaCloudRain, FaBolt,
  FaSnowflake, FaWind, FaShareAlt, FaPhone, FaEnvelope,
  FaWhatsapp, FaInstagram, FaFacebook, FaTwitter, FaYoutube,
  FaBars, FaSlidersH, FaChartLine, FaTrophy
} from 'react-icons/fa';
import TourPackageCard from '../Components/TourPackageCard.jsx';
import TripPlannerModal from '../Components/TripPlannerModal.jsx';
import ItineraryResult from '../Components/ItineraryResult.jsx';

// ─── FIX 1: Lazy-load heavy sections (code splitting) ─────────
const Domestic = lazy(() => import('./Domestic.jsx'));
const International = lazy(() => import('./International.jsx'));
// const NorthIndiaSection = lazy(() => import('./sections/NorthIndiaSection.jsx'));

const BASE = 'https://my-travel-app-backend-6.onrender.com';

// ─── FIX 2: Memoized image URL cache (module-level, not re-created per render)
const _imgCache = new Map();
const getImageUrl = (path) => {
  if (!path) return '/placeholder.jpg';
  const str = typeof path === 'string' ? path : (path?.url || path?.src || path?.images || String(path));
  if (!str || str === 'undefined' || str === 'null') return '/placeholder.jpg';
  if (_imgCache.has(str)) return _imgCache.get(str);
  const url = str.startsWith('http') ? str : `${BASE}/${str.replace(/^\/+/, '')}`;
  _imgCache.set(str, url);
  return url;
};

// ─── FIX 3: Custom hook — only mount section when scrolled near it
function useIsVisible(ref, rootMargin = '300px') {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { rootMargin }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref, rootMargin]);
  return visible;
}

// ─── Global Styles ────────────────────────────────────────────
const GlobalStyles = () => (
  <style>{`
    /* FIX 4: Font import moved to index.html <head> for parallel loading.
       This inline import is kept as fallback only. */
    @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,400;1,600&family=Outfit:wght@300;400;500;600;700&display=swap');

    :root {
      --saffron: #E8813A;
      --saffron-light: #F4A261;
      --saffron-dark: #C85A1A;
      --forest: #1A3C34;
      --forest-mid: #264D42;
      --forest-light: #2E6B5C;
      --cream: #FBF5EC;
      --cream-deep: #F3E8D4;
      --sand: #D4B896;
      --charcoal: #1C1C1E;
      --ink: #0F1923;
      --muted: #9CA3AF;
      --mist: rgba(251,245,236,0.06);
      --glass: rgba(255,255,255,0.08);
      --glass-border: rgba(255,255,255,0.12);
    }

    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    html { scroll-behavior: smooth; }
    body { font-family: 'Outfit', sans-serif; background: var(--cream); color: var(--ink); overflow-x: hidden; }
    h1,h2,h3,h4 { font-family: 'Cormorant Garamond', serif; }

    ::selection { background: var(--saffron); color: white; }
    ::-webkit-scrollbar { width: 6px; }
    ::-webkit-scrollbar-track { background: var(--cream-deep); }
    ::-webkit-scrollbar-thumb { background: var(--saffron); border-radius: 3px; }

    .dvd-nav {
      position: fixed; top: 0; left: 0; right: 0; z-index: 1000;
      transition: all 0.4s cubic-bezier(.4,0,.2,1);
    }
    .dvd-nav.scrolled {
      background: rgba(15,25,35,0.92);
      backdrop-filter: blur(20px);
      border-bottom: 1px solid var(--glass-border);
      box-shadow: 0 8px 32px rgba(0,0,0,0.3);
    }
    .nav-link {
      color: rgba(255,255,255,0.8); text-decoration: none;
      font-size: 0.85rem; font-weight: 500; letter-spacing: 0.5px;
      padding: 6px 0; position: relative; transition: color 0.3s;
    }
    .nav-link::after {
      content: ''; position: absolute; bottom: 0; left: 0;
      width: 0; height: 1.5px; background: var(--saffron);
      transition: width 0.3s ease;
    }
    .nav-link:hover { color: white; }
    .nav-link:hover::after { width: 100%; }

    .hero-container { height: 100vh; min-height: 680px; position: relative; overflow: hidden; }
    .hero-slide { position: absolute; inset: 0; transition: opacity 0.9s ease, transform 0.9s ease; }
    .hero-slide.active { opacity: 1; transform: scale(1); z-index: 2; }
    .hero-slide.inactive { opacity: 0; transform: scale(1.04); z-index: 1; }
    .hero-img { width: 100%; height: 100%; object-fit: cover; }
    .hero-overlay {
      position: absolute; inset: 0;
      background: linear-gradient(105deg, rgba(15,25,35,0.82) 0%, rgba(15,25,35,0.45) 55%, rgba(15,25,35,0.1) 100%);
    }
    .hero-content { position: relative; z-index: 3; }

    .dest-card {
      background: white; border-radius: 20px; overflow: hidden;
      box-shadow: 0 4px 20px rgba(0,0,0,0.06);
      transition: transform 0.4s cubic-bezier(.25,.8,.25,1), box-shadow 0.4s;
      cursor: pointer;
    }
    .dest-card:hover { transform: translateY(-10px); box-shadow: 0 20px 60px rgba(0,0,0,0.14); }
    .dest-card-img { position: relative; overflow: hidden; }
    .dest-card-img img { transition: transform 0.6s ease; }
    .dest-card:hover .dest-card-img img { transform: scale(1.08); }

    .glass-card {
      background: var(--glass);
      backdrop-filter: blur(16px);
      border: 1px solid var(--glass-border);
      border-radius: 20px;
    }

    .btn-primary {
      background: linear-gradient(135deg, var(--saffron), var(--saffron-dark));
      color: white; border: none; border-radius: 50px;
      font-family: 'Outfit', sans-serif; font-weight: 600;
      cursor: pointer; transition: all 0.3s;
      box-shadow: 0 4px 20px rgba(232,129,58,0.35);
    }
    .btn-primary:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 30px rgba(232,129,58,0.5);
    }
    .btn-primary:disabled { opacity: 0.65; cursor: not-allowed; transform: none; }
    .btn-outline {
      background: transparent; color: white;
      border: 1.5px solid rgba(255,255,255,0.4);
      border-radius: 50px; font-family: 'Outfit', sans-serif;
      font-weight: 500; cursor: pointer; transition: all 0.3s;
    }
    .btn-outline:hover { background: rgba(255,255,255,0.12); border-color: white; }

    .search-container {
      background: white; border-radius: 16px;
      box-shadow: 0 20px 60px rgba(0,0,0,0.15);
      padding: 8px;
    }
    .search-tab {
      border-radius: 12px; padding: 10px 20px;
      font-family: 'Outfit', sans-serif; font-size: 0.85rem;
      font-weight: 500; cursor: pointer; transition: all 0.2s;
      border: none; background: transparent; color: #6b7280;
    }
    .search-tab.active { background: var(--forest); color: white; }
    .search-input {
      border: none; outline: none; font-family: 'Outfit', sans-serif;
      font-size: 0.95rem; background: transparent; width: 100%; color: var(--ink);
    }
    .search-input::placeholder { color: #9ca3af; }

    .filter-pill {
      padding: 8px 20px; border-radius: 50px;
      font-family: 'Outfit', sans-serif; font-size: 0.82rem;
      font-weight: 600; cursor: pointer; transition: all 0.25s;
      border: 1.5px solid #E5E7EB; background: white; color: #6B7280;
      white-space: nowrap;
    }
    .filter-pill:hover { border-color: var(--saffron); color: var(--saffron); }
    .filter-pill.active {
      background: var(--saffron); color: white;
      border-color: var(--saffron);
      box-shadow: 0 4px 14px rgba(232,129,58,0.35);
    }

    .section-eyebrow {
      font-family: 'Outfit', sans-serif;
      font-size: 0.75rem; font-weight: 700;
      letter-spacing: 3px; text-transform: uppercase;
      color: var(--saffron);
    }
    .section-title {
      font-family: 'Cormorant Garamond', serif;
      font-size: clamp(2rem, 4vw, 3.2rem);
      font-weight: 600; line-height: 1.15; color: var(--ink);
    }

    .stat-ticker { border-left: 3px solid var(--saffron); padding-left: 16px; }

    .wishlist-drawer {
      position: fixed; top: 0; right: 0; bottom: 0;
      width: 360px; background: white; z-index: 2000;
      box-shadow: -20px 0 60px rgba(0,0,0,0.15);
      transform: translateX(100%);
      transition: transform 0.4s cubic-bezier(.4,0,.2,1);
      overflow-y: auto;
    }
    .wishlist-drawer.open { transform: translateX(0); }
    .wishlist-overlay {
      position: fixed; inset: 0; background: rgba(0,0,0,0.4);
      z-index: 1999; opacity: 0; pointer-events: none;
      transition: opacity 0.3s;
    }
    .wishlist-overlay.open { opacity: 1; pointer-events: all; }

    .modal-backdrop {
      position: fixed; inset: 0;
      background: rgba(15,25,35,0.75);
      backdrop-filter: blur(8px);
      z-index: 3000;
      display: flex; align-items: center; justify-content: center;
      padding: 20px;
    }
    .modal-box {
      background: white; border-radius: 24px;
      max-width: 620px; width: 100%;
      max-height: 88vh; overflow-y: auto;
      box-shadow: 0 40px 100px rgba(0,0,0,0.3);
      padding: 32px;
    }

    .progress { display: flex; gap: 8px; margin-bottom: 28px; }
    .progress-seg { flex: 1; height: 4px; border-radius: 2px; background: #E5E7EB; transition: background 0.3s; }
    .progress-seg.done { background: var(--saffron); }
    .step-enter { animation: fadeUp 0.4s ease forwards; }
    .field-label { font-family: 'Outfit', sans-serif; font-size: 0.82rem; font-weight: 600; color: #374151; margin-bottom: 8px; display: flex; align-items: center; gap: 8px; }
    .field-hint { font-weight: 400; color: var(--muted); font-size: 0.75rem; }
    .input { width: 100%; padding: 11px 16px; border-radius: 12px; border: 1.5px solid #E5E7EB; font-family: 'Outfit', sans-serif; font-size: 0.9rem; outline: none; transition: border-color 0.2s; }
    .input:focus { border-color: var(--saffron); }
    .weather-card { background: linear-gradient(135deg, var(--forest), var(--forest-light)); border-radius: 20px; padding: 24px; color: white; position: relative; overflow: hidden; }
    .weather-card::before { content: ''; position: absolute; width: 200px; height: 200px; background: rgba(255,255,255,0.05); border-radius: 50%; top: -60px; right: -60px; }
    .currency-card { background: linear-gradient(135deg, var(--saffron), var(--saffron-dark)); border-radius: 20px; padding: 24px; color: white; }
    .fab-wishlist {
      position: fixed; bottom: 30px; right: 30px; z-index: 900;
      width: 56px; height: 56px; border-radius: 50%;
      background: linear-gradient(135deg, var(--saffron), var(--saffron-dark));
      color: white; border: none; cursor: pointer;
      box-shadow: 0 8px 24px rgba(232,129,58,0.5);
      display: flex; align-items: center; justify-content: center;
      font-size: 1.2rem; transition: all 0.3s;
    }
    .fab-wishlist:hover { transform: scale(1.1); }
    .fab-badge {
      position: absolute; top: -4px; right: -4px;
      width: 20px; height: 20px; border-radius: 50%;
      background: var(--forest); color: white;
      font-size: 0.7rem; font-weight: 700;
      display: flex; align-items: center; justify-content: center;
      border: 2px solid white;
    }

    .itinerary-overlay { position: fixed; inset: 0; background: var(--cream); z-index: 4000; overflow-y: auto; animation: fadeIn 0.4s ease forwards; }
    .itinerary-overlay-inner { max-width: 900px; margin: 0 auto; padding: 0 24px 80px; }
    .itinerary-topbar { position: sticky; top: 0; background: rgba(251,245,236,0.95); backdrop-filter: blur(12px); padding: 16px 0; display: flex; align-items: center; gap: 12px; border-bottom: 1px solid var(--cream-deep); z-index: 10; margin-bottom: 32px; }
    .itinerary-topbar-back { display: flex; align-items: center; gap: 8px; background: none; border: 1.5px solid #E5E7EB; border-radius: 10px; padding: 8px 16px; font-family: 'Outfit'; font-size: 0.85rem; font-weight: 600; cursor: pointer; color: var(--ink); transition: all 0.2s; }
    .itinerary-topbar-back:hover { border-color: var(--saffron); color: var(--saffron); }

    @keyframes fadeUp { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
    @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
    @keyframes spin { to { transform: rotate(360deg); } }
    @keyframes pulse { 0%,100% { transform: scale(1); } 50% { transform: scale(1.05); } }
    @keyframes slideLeft { from { opacity:0; transform:translateX(-20px); } to { opacity:1; transform:translateX(0); } }
    @keyframes shimmer { 0% { background-position: -200% 0; } 100% { background-position: 200% 0; } }

    .animate-fadeup { animation: fadeUp 0.7s ease forwards; }
    .animate-fadein { animation: fadeIn 0.5s ease forwards; }
    .spinner { animation: spin 0.8s linear infinite; }
    .animate-pulse { animation: pulse 2s ease-in-out infinite; }
    .animate-slideLeft { animation: slideLeft 0.5s ease forwards; }

    .stagger-1 { animation-delay: 0.1s; opacity: 0; }
    .stagger-2 { animation-delay: 0.2s; opacity: 0; }
    .stagger-3 { animation-delay: 0.3s; opacity: 0; }
    .stagger-4 { animation-delay: 0.4s; opacity: 0; }
    .stagger-5 { animation-delay: 0.5s; opacity: 0; }

    .skeleton {
      background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
      background-size: 200% 100%;
      animation: shimmer 1.5s infinite;
      border-radius: 12px;
    }

    .tag-badge { font-family: 'Outfit', sans-serif; font-size: 0.7rem; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; padding: 4px 10px; border-radius: 6px; }
    .price-strike { text-decoration: line-through; color: #9CA3AF; }
    .star-gold { color: #F59E0B; }
    .react-multi-carousel-dot--active button { background: var(--saffron) !important; }
    .react-multi-carousel-dot button { background: #D1D5DB !important; border: none !important; width: 8px !important; height: 8px !important; }

    @media(max-width:768px) {
      .hide-mobile { display: none !important; }
      .wishlist-drawer { width: 100%; }
    }
    @media(min-width:769px) {
      .hide-desktop { display: none !important; }
    }
  `}</style>
);

// ─── Skeleton Card ─────────────────────────────────────────────
const SkeletonCard = () => (
  <div style={{ borderRadius: 20, overflow: 'hidden', background: 'white', boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}>
    <div className="skeleton" style={{ height: 200 }} />
    <div style={{ padding: 16 }}>
      <div className="skeleton" style={{ height: 20, marginBottom: 10 }} />
      <div className="skeleton" style={{ height: 14, width: '60%', marginBottom: 16 }} />
      <div className="skeleton" style={{ height: 36, borderRadius: 50 }} />
    </div>
  </div>
);

// ─── Section Skeleton (for lazy-loaded sections) ───────────────
const SectionSkeleton = () => (
  <div style={{ maxWidth: 1400, margin: '0 auto', padding: '60px 24px' }}>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(300px,1fr))', gap: 24 }}>
      {[1, 2, 3, 4, 5, 6].map(i => <SkeletonCard key={i} />)}
    </div>
  </div>
);

// ─── Navbar ───────────────────────────────────────────────────
const Navbar = ({ wishlistCount, onWishlistOpen, onBookNow }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <nav className={`dvd-nav ${scrolled ? 'scrolled' : ''}`}>
      <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 24px', height: 72, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ width: 36, height: 36, background: 'linear-gradient(135deg, var(--saffron), var(--saffron-dark))', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <FaCompass style={{ color: 'white', fontSize: 16 }} />
          </div>
          <div>
            <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.3rem', fontWeight: 700, color: 'white', lineHeight: 1 }}>Desi V Desi</div>
            <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '0.62rem', color: 'var(--saffron-light)', letterSpacing: 2, textTransform: 'uppercase', lineHeight: 1 }}>Tours & Travel</div>
          </div>
        </Link>
        <div className="hide-mobile" style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
          {['Destinations', 'Domestic', 'International', 'About'].map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} className="nav-link">{l}</a>
          ))}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <button onClick={onWishlistOpen} style={{ background: 'none', border: 'none', cursor: 'pointer', position: 'relative', color: 'white', fontSize: '1.1rem', padding: 8 }}>
            <FaHeart />
            {wishlistCount > 0 && (
              <span className="fab-badge" style={{ position: 'absolute', top: 2, right: 2, width: 18, height: 18, fontSize: '0.65rem', border: '2px solid transparent', background: 'var(--saffron)' }}>{wishlistCount}</span>
            )}
          </button>
          <button onClick={onBookNow} className="btn-primary" style={{ padding: '10px 22px', fontSize: '0.85rem' }}>Book Now</button>
          <button className="hide-desktop" onClick={() => setMobileOpen(p => !p)} style={{ background: 'none', border: 'none', color: 'white', fontSize: '1.3rem', cursor: 'pointer' }}>
            <FaBars />
          </button>
        </div>
      </div>
      {mobileOpen && (
        <div style={{ background: 'rgba(15,25,35,0.97)', padding: '20px 24px', borderTop: '1px solid var(--glass-border)' }}>
          {['Destinations', 'Domestic', 'International', 'About'].map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} className="nav-link" style={{ display: 'block', padding: '14px 0', fontSize: '1rem', borderBottom: '1px solid var(--glass-border)' }} onClick={() => setMobileOpen(false)}>{l}</a>
          ))}
        </div>
      )}
    </nav>
  );
};

// ─── Hero Section ──────────────────────────────────────────────
const HeroSection = React.memo(({ onBookNow, onSearch }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [searchValue, setSearchValue] = useState('');
  const [searchTab, setSearchTab] = useState('destination');

  const slides = useMemo(() => [
    { img: '/images/Malaysia.png', tag: 'International', title: 'Discover\nMalaysia', sub: 'Rainforests, Towers & Timeless Culture', cta: 'View Packages' },
    { img: '/images/005.png', tag: 'North East', title: 'Enchanting\nAssam', sub: 'Tea Gardens, Wildlife & Brahmaputra Sunsets', cta: 'Explore Now' },
    { img: '/images/006.png', tag: 'International', title: 'Golden\nDubai', sub: 'Desert Dunes, Skylines & Arabian Nights', cta: 'Book Trip' },
    { img: '/images/007.png', tag: 'Scenic India', title: 'Sacred\nHimalayas', sub: 'Monasteries, Peaks & Spiritual Journeys', cta: 'Explore' },
  ], []);

  useEffect(() => {
    const t = setInterval(() => setActiveSlide(p => (p + 1) % slides.length), 5500);
    return () => clearInterval(t);
  }, [slides.length]);

  const handleSearch = useCallback((e) => { e.preventDefault(); onSearch(searchValue); }, [onSearch, searchValue]);

  return (
    <div className="hero-container">
      {slides.map((s, i) => (
        <div key={i} className={`hero-slide ${i === activeSlide ? 'active' : 'inactive'}`}>
          {/* FIX 5: fetchpriority="high" on hero image, lazy on rest */}
          <img
            src={s.img}
            alt={s.tag}
            className="hero-img"
            loading={i === 0 ? 'eager' : 'lazy'}
            fetchpriority={i === 0 ? 'high' : 'low'}
            // onError={e => e.target.src = '/placeholder.jpg'}
          />
          <div className="hero-overlay" />
        </div>
      ))}
      <div className="hero-content" style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingTop: 72 }}>
        <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 24px', width: '100%' }}>
          <div key={`tag-${activeSlide}`} className="animate-fadeup stagger-1" style={{ marginBottom: 16 }}>
            <span className="tag-badge" style={{ background: 'var(--saffron)', color: 'white' }}>{slides[activeSlide].tag}</span>
          </div>
          <h1 key={`title-${activeSlide}`} className="animate-fadeup stagger-2" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(3rem,8vw,6.5rem)', fontWeight: 700, color: 'white', lineHeight: 1.05, marginBottom: 16, whiteSpace: 'pre-line', maxWidth: 700 }}>
            {slides[activeSlide].title}
          </h1>
          <p key={`sub-${activeSlide}`} className="animate-fadeup stagger-3" style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(0.95rem,2vw,1.15rem)', color: 'rgba(255,255,255,0.75)', marginBottom: 40, fontWeight: 300, maxWidth: 460 }}>
            {slides[activeSlide].sub}
          </p>
          <div key={`search-${activeSlide}`} className="animate-fadeup stagger-4" style={{ maxWidth: 640 }}>
            <div className="search-container">
              <div style={{ display: 'flex', gap: 4, marginBottom: 8 }}>
                {['destination', 'package', 'date'].map(t => (
                  <button key={t} className={`search-tab ${searchTab === t ? 'active' : ''}`} onClick={() => setSearchTab(t)} style={{ textTransform: 'capitalize' }}>{t}</button>
                ))}
              </div>
              <form onSubmit={handleSearch} style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 10, padding: '4px 16px', borderRadius: 12, border: '1.5px solid #E5E7EB' }}>
                  <FaSearch style={{ color: '#9CA3AF', flexShrink: 0 }} />
                  <input className="search-input" placeholder={searchTab === 'destination' ? 'Where do you want to go?' : searchTab === 'package' ? 'Search tour packages...' : 'Pick a travel date...'} value={searchValue} onChange={e => setSearchValue(e.target.value)} />
                </div>
                <button type="submit" className="btn-primary" style={{ padding: '14px 28px', fontSize: '0.9rem', borderRadius: 12, flexShrink: 0 }}>Search</button>
              </form>
            </div>
          </div>
          <div key={`cta-${activeSlide}`} className="animate-fadeup stagger-5" style={{ display: 'flex', gap: 14, marginTop: 24 }}>
            <button onClick={onBookNow} className="btn-primary" style={{ padding: '13px 32px', fontSize: '0.9rem' }}>
              {slides[activeSlide].cta} <FaArrowRight style={{ marginLeft: 6, display: 'inline' }} />
            </button>
            <a href="#destinations" className="btn-outline" style={{ padding: '13px 28px', fontSize: '0.9rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}>Browse All</a>
          </div>
        </div>
      </div>
      <div style={{ position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: 8, zIndex: 4 }}>
        {slides.map((_, i) => (
          <button key={i} onClick={() => setActiveSlide(i)} style={{ width: i === activeSlide ? 32 : 8, height: 8, borderRadius: 4, border: 'none', background: i === activeSlide ? 'var(--saffron)' : 'rgba(255,255,255,0.4)', cursor: 'pointer', transition: 'all 0.3s', padding: 0 }} />
        ))}
      </div>
      <button onClick={() => setActiveSlide(p => (p - 1 + slides.length) % slides.length)} style={{ position: 'absolute', left: 20, top: '50%', transform: 'translateY(-50%)', width: 44, height: 44, borderRadius: '50%', background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.25)', color: 'white', fontSize: '1.2rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 4 }}>‹</button>
      <button onClick={() => setActiveSlide(p => (p + 1) % slides.length)} style={{ position: 'absolute', right: 20, top: '50%', transform: 'translateY(-50%)', width: 44, height: 44, borderRadius: '50%', background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.25)', color: 'white', fontSize: '1.2rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 4 }}>›</button>
    </div>
  );
});

// ─── Stats Bar ────────────────────────────────────────────────
const StatsBar = React.memo(() => (
  <div style={{ background: 'var(--forest)', padding: '28px 24px' }}>
    <div style={{ maxWidth: 1400, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 20 }}>
      {[
        { val: '36+', label: 'Years Experience', icon: <FaTrophy /> },
        { val: '15k+', label: 'Happy Travellers', icon: <FaUsers /> },
        { val: '200+', label: 'Tour Packages', icon: <FaMapMarkedAlt /> },
        { val: '4.9★', label: 'Average Rating', icon: <FaStar /> },
      ].map((s, i) => (
        <div key={i} className="stat-ticker" style={{ borderColor: 'var(--saffron)' }}>
          <div style={{ color: 'var(--saffron)', marginBottom: 4, fontSize: '0.9rem' }}>{s.icon}</div>
          <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2rem', fontWeight: 700, color: 'white', lineHeight: 1 }}>{s.val}</div>
          <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '0.75rem', color: 'rgba(255,255,255,0.55)', marginTop: 4, letterSpacing: 0.5 }}>{s.label}</div>
        </div>
      ))}
    </div>
  </div>
));

// ─── Weather + Currency Widgets ───────────────────────────────
const WidgetsRow = React.memo(() => {
  const [amount, setAmount] = useState('');
  const [converted, setConverted] = useState(null);
  const [toCurrency, setToCurrency] = useState('USD');
  const rates = useMemo(() => ({ USD: 0.012, EUR: 0.011, GBP: 0.0094, AED: 0.044, SGD: 0.016, JPY: 1.79 }), []);
  const weatherData = useMemo(() => [
    { city: 'Mumbai', temp: 32, icon: <FaSun />, desc: 'Sunny' },
    { city: 'Delhi', temp: 28, icon: <FaWind />, desc: 'Windy' },
    { city: 'Goa', temp: 34, icon: <FaSun />, desc: 'Clear' },
  ], []);
  const [activeCity, setActiveCity] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActiveCity(p => (p + 1) % weatherData.length), 3000);
    return () => clearInterval(t);
  }, [weatherData.length]);

  const convert = useCallback(() => {
    if (!amount) return;
    setConverted((parseFloat(amount) * rates[toCurrency]).toFixed(2));
  }, [amount, rates, toCurrency]);

  return (
    <div style={{ maxWidth: 1400, margin: '0 auto', padding: '40px 24px 0' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 20 }}>
        <div className="weather-card">
          <div style={{ fontSize: '0.75rem', fontFamily: 'Outfit', letterSpacing: 2, textTransform: 'uppercase', opacity: 0.7, marginBottom: 12 }}>Travel Weather</div>
          <div key={activeCity} className="animate-slideLeft" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2.5rem', fontWeight: 700, lineHeight: 1 }}>{weatherData[activeCity].temp}°C</div>
              <div style={{ fontFamily: 'Outfit', fontSize: '1rem', fontWeight: 600, marginTop: 4 }}>{weatherData[activeCity].city}</div>
              <div style={{ fontFamily: 'Outfit', fontSize: '0.8rem', opacity: 0.7 }}>{weatherData[activeCity].desc}</div>
            </div>
            <div style={{ fontSize: '3.5rem', opacity: 0.9 }}>{weatherData[activeCity].icon}</div>
          </div>
          <div style={{ display: 'flex', gap: 8, marginTop: 16 }}>
            {weatherData.map((_, i) => (
              <button key={i} onClick={() => setActiveCity(i)} style={{ width: i === activeCity ? 24 : 8, height: 8, borderRadius: 4, border: 'none', background: i === activeCity ? 'var(--saffron)' : 'rgba(255,255,255,0.3)', cursor: 'pointer', transition: 'all 0.3s', padding: 0 }} />
            ))}
          </div>
        </div>
        <div className="currency-card">
          <div style={{ fontSize: '0.75rem', fontFamily: 'Outfit', letterSpacing: 2, textTransform: 'uppercase', opacity: 0.85, marginBottom: 12 }}>Currency Converter</div>
          <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
            <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 6, background: 'rgba(255,255,255,0.2)', borderRadius: 10, padding: '8px 12px' }}>
              <FaRupeeSign style={{ flexShrink: 0 }} />
              <input value={amount} onChange={e => setAmount(e.target.value)} placeholder="Amount ₹" style={{ background: 'none', border: 'none', outline: 'none', color: 'white', fontFamily: 'Outfit', fontSize: '0.95rem', width: '100%' }} />
            </div>
            <select value={toCurrency} onChange={e => setToCurrency(e.target.value)} style={{ background: 'rgba(255,255,255,0.2)', border: 'none', borderRadius: 10, color: 'white', padding: '8px 12px', fontFamily: 'Outfit', cursor: 'pointer', fontSize: '0.9rem' }}>
              {Object.keys(rates).map(c => <option key={c} value={c} style={{ background: 'var(--saffron-dark)', color: 'white' }}>{c}</option>)}
            </select>
          </div>
          <button onClick={convert} style={{ width: '100%', padding: '10px', background: 'rgba(255,255,255,0.25)', border: '1px solid rgba(255,255,255,0.3)', borderRadius: 10, color: 'white', fontFamily: 'Outfit', fontWeight: 600, cursor: 'pointer', fontSize: '0.9rem' }}>Convert</button>
          {converted && <div style={{ marginTop: 12, fontFamily: 'Cormorant Garamond, serif', fontSize: '1.8rem', fontWeight: 700 }}>{converted} {toCurrency}</div>}
        </div>
        <div style={{ background: 'var(--ink)', borderRadius: 20, padding: 24, color: 'white' }}>
          <div style={{ fontSize: '0.75rem', fontFamily: 'Outfit', letterSpacing: 2, textTransform: 'uppercase', color: 'var(--saffron)', marginBottom: 16 }}>Need Help?</div>
          <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.4rem', fontWeight: 600, marginBottom: 16 }}>Talk to Our Travel Experts</div>
          {[{ icon: <FaPhone />, label: '+91 98765 43210' }, { icon: <FaWhatsapp />, label: 'WhatsApp Us' }, { icon: <FaEnvelope />, label: 'info@desivdesi.com' }].map((c, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10, fontFamily: 'Outfit', fontSize: '0.85rem', color: 'rgba(255,255,255,0.75)' }}>
              <span style={{ color: 'var(--saffron)' }}>{c.icon}</span>{c.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

// ─── Tour Card ─────────────────────────────────────────────────
const TourCard = React.memo(({ card, onFavourite, isFav, onBookNow, onRate, rating }) => (
  <div className="dest-card" style={{ margin: '0 8px' }}>
    <div className="dest-card-img" style={{ height: 220, background: '#F3F4F6', position: 'relative' }}>
      <img
        src={card.img || '/placeholder.jpg'}
        alt={card.title}
        loading="lazy"
        decoding="async"
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        // onError={e => e.target.src = '/placeholder.jpg'}
      />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 50%)' }} />
      <button onClick={() => onFavourite(card._id)} style={{ position: 'absolute', top: 12, right: 12, width: 36, height: 36, borderRadius: '50%', background: 'rgba(255,255,255,0.9)', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'transform 0.2s' }}>
        <FaHeart style={{ color: isFav ? '#E85757' : '#D1D5DB', fontSize: '0.9rem' }} />
      </button>
      <span style={{ position: 'absolute', bottom: 12, left: 12, background: 'var(--forest)', color: 'white', fontFamily: 'Outfit', fontSize: '0.7rem', fontWeight: 700, padding: '3px 10px', borderRadius: 6 }}>2025</span>
    </div>
    <div style={{ padding: '18px 20px 20px' }}>
      <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.2rem', fontWeight: 600, color: 'var(--ink)', marginBottom: 6 }}>{card.title}</div>
      <div style={{ fontFamily: 'Outfit', fontSize: '0.78rem', color: '#9CA3AF', marginBottom: 12 }}>{card.category || 'Popular Destination'}</div>
      <div style={{ display: 'flex', gap: 3, marginBottom: 16 }}>
        {[1, 2, 3, 4, 5].map(s => (
          <button key={s} onClick={() => onRate(card._id, s)} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, fontSize: '1.1rem', color: s <= (rating || 0) ? '#F59E0B' : '#E5E7EB' }}>★</button>
        ))}
      </div>
      <button onClick={onBookNow} className="btn-primary" style={{ width: '100%', padding: '11px', fontSize: '0.85rem', borderRadius: 12 }}>Book Now →</button>
    </div>
  </div>
));

// ─── Wishlist Drawer ──────────────────────────────────────────
const WishlistDrawer = React.memo(({ open, onClose, wishlist, items }) => {
  const savedItems = useMemo(() => items.filter(item => wishlist.includes(item._id)), [items, wishlist]);
  return (
    <>
      <div className={`wishlist-overlay ${open ? 'open' : ''}`} onClick={onClose} />
      <div className={`wishlist-drawer ${open ? 'open' : ''}`}>
        <div style={{ padding: '24px 24px 16px', borderBottom: '1px solid #F3F4F6', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.5rem', fontWeight: 700, color: 'var(--ink)' }}>My Wishlist</h3>
            <div style={{ fontFamily: 'Outfit', fontSize: '0.8rem', color: '#9CA3AF', marginTop: 2 }}>{savedItems.length} destinations saved</div>
          </div>
          <button onClick={onClose} style={{ background: 'none', border: 'none', fontSize: '1.1rem', cursor: 'pointer', color: '#6B7280', width: 36, height: 36, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><FaTimes /></button>
        </div>
        <div style={{ padding: 16, overflowY: 'auto' }}>
          {savedItems.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '60px 24px' }}>
              <FaHeart style={{ fontSize: '2.5rem', color: '#E5E7EB', marginBottom: 16 }} />
              <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.3rem', fontWeight: 600, color: '#9CA3AF', marginBottom: 8 }}>No Saved Trips Yet</div>
              <div style={{ fontFamily: 'Outfit', fontSize: '0.85rem', color: '#D1D5DB' }}>Tap the heart icon on any destination to save it here.</div>
            </div>
          ) : savedItems.map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: 14, padding: '14px 0', borderBottom: '1px solid #F9FAFB' }}>
              <img src={getImageUrl(item.images || item.image || item.img)} alt={item.title} loading="lazy" decoding="async" style={{ width: 70, height: 70, borderRadius: 12, objectFit: 'cover', flexShrink: 0 }}/>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1rem', fontWeight: 700, color: 'var(--ink)', marginBottom: 3, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{item.title}</div>
                <div style={{ fontFamily: 'Outfit', fontSize: '0.75rem', color: '#9CA3AF', marginBottom: 8 }}>India • 4.8 ★</div>
                <Link to="/Maharashtra" style={{ fontFamily: 'Outfit', fontSize: '0.78rem', fontWeight: 600, color: 'var(--saffron)', textDecoration: 'none' }}>View Package →</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
});

// ─── Itinerary Overlay ─────────────────────────────────────────
const ItineraryOverlay = ({ itinerary, onPlanAgain }) => (
  <div className="itinerary-overlay">
    <div className="itinerary-overlay-inner">
      <div className="itinerary-topbar">
        <button className="itinerary-topbar-back" onClick={onPlanAgain}>← Plan Another Trip</button>
        <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.1rem', fontWeight: 700, color: 'var(--ink)' }}>Your AI Itinerary ✨</div>
      </div>
      <ItineraryResult itinerary={itinerary} onPlanAgain={onPlanAgain} />
    </div>
  </div>
);

// ─── About Section ─────────────────────────────────────────────
const AboutSection = React.memo(({ onBookNow }) => {
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  const testimonials = useMemo(() => [
    { text: "The best travel experience I've ever had! Desi V Desi made every moment magical.", author: "Priya S.", role: "Solo Traveler", avatar: "P" },
    { text: "Perfectly planned trip, seamless booking. Our family had an absolutely wonderful time!", author: "Rajesh K.", role: "Family Trip", avatar: "R" },
    { text: "Excellent service and truly amazing tours. I've now booked three trips with them!", author: "Anjali M.", role: "Frequent Traveler", avatar: "A" },
    { text: "From the first booking to the last day — everything was seamless and beautiful.", author: "Sunil T.", role: "Honeymoon Package", avatar: "S" },
  ], []);

  useEffect(() => {
    const t = setInterval(() => setTestimonialIdx(p => (p + 1) % testimonials.length), 4000);
    return () => clearInterval(t);
  }, [testimonials.length]);

  return (
    <section id="about" style={{ background: 'var(--ink)', padding: '96px 0', overflow: 'hidden' }}>
      <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <div className="section-eyebrow" style={{ marginBottom: 12 }}>Our Story</div>
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2.2rem,5vw,4rem)', fontWeight: 700, color: 'white', lineHeight: 1.1 }}>
            Welcome to <em style={{ color: 'var(--saffron)' }}>Desi V Desi</em> Tours
          </h2>
          <p style={{ fontFamily: 'Outfit', fontSize: '0.95rem', color: 'rgba(255,255,255,0.5)', marginTop: 14, maxWidth: 500, margin: '14px auto 0' }}>
            36 years of crafting unforgettable journeys across India and the world.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 24 }}>
          <div className="glass-card" style={{ padding: 32 }}>
            <div style={{ display: 'flex', gap: 18, marginBottom: 24 }}>
              <img src="/photo2.jpg" alt="Founder" loading="lazy" decoding="async" style={{ width: 72, height: 72, borderRadius: 16, objectFit: 'cover', flexShrink: 0, border: '2px solid var(--saffron)' }} />
              <div>
                <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.1rem', fontWeight: 700, color: 'white' }}>Mr. Sonwane</div>
                <div style={{ fontFamily: 'Outfit', fontSize: '0.75rem', color: 'var(--saffron-light)', letterSpacing: 1, textTransform: 'uppercase', marginTop: 4 }}>Founder & CEO</div>
              </div>
            </div>
            <p style={{ fontFamily: 'Outfit', fontSize: '0.88rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.75, fontStyle: 'italic' }}>"We are one of the leading tour operators in Maharashtra for the last 36 years, known as experts in Domestic as well as International tours."</p>
            <div style={{ marginTop: 24, display: 'flex', gap: 14 }}>
              {[<FaFacebook />, <FaInstagram />, <FaTwitter />, <FaYoutube />].map((icon, i) => (
                <a key={i} href="#" style={{ width: 36, height: 36, borderRadius: '50%', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: '0.85rem' }}>{icon}</a>
              ))}
            </div>
          </div>
          <div className="glass-card" style={{ padding: 32, display: 'flex', flexDirection: 'column' }}>
            <div style={{ color: 'var(--saffron)', fontSize: '2.5rem', fontFamily: 'Cormorant Garamond, serif', lineHeight: 1, marginBottom: 16 }}>"</div>
            <div key={testimonialIdx} className="animate-fadeup" style={{ flex: 1 }}>
              <p style={{ fontFamily: 'Outfit', fontSize: '0.92rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.75, fontStyle: 'italic', marginBottom: 20 }}>{testimonials[testimonialIdx].text}</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--saffron)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Cormorant Garamond, serif', fontSize: '1.1rem', fontWeight: 700, color: 'white' }}>{testimonials[testimonialIdx].avatar}</div>
                <div>
                  <div style={{ fontFamily: 'Outfit', fontSize: '0.88rem', fontWeight: 600, color: 'white' }}>{testimonials[testimonialIdx].author}</div>
                  <div style={{ fontFamily: 'Outfit', fontSize: '0.75rem', color: 'var(--saffron-light)' }}>{testimonials[testimonialIdx].role}</div>
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: 6, marginTop: 24 }}>
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setTestimonialIdx(i)} style={{ width: i === testimonialIdx ? 24 : 8, height: 8, borderRadius: 4, border: 'none', background: i === testimonialIdx ? 'var(--saffron)' : 'rgba(255,255,255,0.2)', cursor: 'pointer', transition: 'all 0.3s', padding: 0 }} />
              ))}
            </div>
          </div>
          <div style={{ background: 'linear-gradient(135deg, var(--saffron), var(--saffron-dark))', borderRadius: 20, padding: 32, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ fontFamily: 'Outfit', fontSize: '0.75rem', color: 'rgba(255,255,255,0.7)', letterSpacing: 2, textTransform: 'uppercase', marginBottom: 16 }}>Plan Your Dream Trip</div>
              <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2rem', fontWeight: 700, color: 'white', lineHeight: 1.2, marginBottom: 16 }}>Ready for Your Next Adventure?</h3>
              <p style={{ fontFamily: 'Outfit', fontSize: '0.88rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.6 }}>Join 15,000+ happy travellers who trust Desi V Desi for their dream vacations.</p>
            </div>
            <div style={{ marginTop: 32, display: 'flex', flexDirection: 'column', gap: 10 }}>
              <button onClick={onBookNow} style={{ width: '100%', padding: '14px', background: 'white', border: 'none', borderRadius: 14, fontFamily: 'Outfit', fontWeight: 700, fontSize: '0.9rem', color: 'var(--saffron-dark)', cursor: 'pointer' }}>Book Your Tour Now →</button>
              <a href="tel:+919876543210" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, width: '100%', padding: '13px', background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.3)', borderRadius: 14, fontFamily: 'Outfit', fontWeight: 500, fontSize: '0.85rem', color: 'white', textDecoration: 'none' }}>
                <FaPhone size={13} /> Call Us Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

// ─── Main Start Component ─────────────────────────────────────
function Start() {
  const { user } = useContext(AuthContext);
  const [showBooking, setShowBooking] = useState(false);
  const [showPlanner, setShowPlanner] = useState(false);
  const [itinerary, setItinerary] = useState(null);
  const [showAlert, setShowAlert] = useState(false);
  const [showWishlist, setShowWishlist] = useState(false);
  const [wishlist, setWishlist] = useState([]);
  const [ratings, setRatings] = useState({});

  // ─── FIX 1: All data in one parallel fetch ──────────────────
  const [tourCards, setTourCards] = useState([]);
  const [domesticData, setDomesticData] = useState({ animation: [], states: [] });
  const [intlData, setIntlData] = useState([]);
  const [loading, setLoading] = useState(true);

  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef(null);
  const domesticRef = useRef(null);
  const intlRef = useRef(null);
  const northRef = useRef(null);
  const location = useLocation();
  const fetchDone = useRef(false);

  // ─── FIX 3: Intersection observer for each section ──────────
  const domesticVisible = useIsVisible(domesticRef);
  const intlVisible = useIsVisible(intlRef)
  const northVisible = useIsVisible(northRef);

  const navigate = useNavigate()

  useEffect(() => {
    const handler = () => setIsVisible(window.scrollY > 400);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
  const state = location.state;
  if (!state) return;

  // Clear state immediately so it doesn't re-trigger
  navigate(location.pathname, { replace: true, state: {} });

  if (state.scrollToAbout) {
    setTimeout(() => aboutRef.current?.scrollIntoView({ behavior: 'smooth' }), 300);
  }

  if (state.scrollToDomestic) {
    setTimeout(() => domesticRef.current?.scrollIntoView({ behavior: 'smooth' }), 300);
  }

  if (state.scrollToInternational) {
    setTimeout(() => intlRef.current?.scrollIntoView({ behavior: 'smooth' }), 300);
  }

}, [location]);


  // ─── FIX 1: Single Promise.all for all critical data ────────
  useEffect(() => {
    if (fetchDone.current) return;
    const controller = new AbortController();
    const sig = { signal: controller.signal };

    Promise.all([
      api.get('/favourites/getCards', sig),
      api.get('/maharashtra-domestic/getallAnimation', sig),
      api.get('/maharashtra-domestic/getstates', sig),
      api.get('/International/getallInternational', sig),
    ])
      .then(([cards, anim, states, intl]) => {
        setTourCards(cards.data || []);
        setDomesticData({
          animation: anim.data || [],
          states: Array.isArray(states.data) ? states.data : states.data?.data || [],
        });
        setIntlData(Array.isArray(intl.data) ? intl.data : []);
        fetchDone.current = true;
      })
      .catch(e => { if (e.name !== 'AbortError' && e.name !== 'CanceledError') console.error(e); })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, []);

  const handleBookNow = useCallback(() => {
    if (!user) { setShowAlert(true); setTimeout(() => setShowAlert(false), 3000); }
    else setShowBooking(true);
  }, [user]);

  const handleItinerary = useCallback((data) => {
    setItinerary(data);
    setShowPlanner(false);
  }, []);

  const handlePlanAgain = useCallback(() => {
    setItinerary(null);
    setShowPlanner(true);
  }, []);

  const toggleFavourite = useCallback(async (id) => {
    if (!user) { setShowAlert(true); setTimeout(() => setShowAlert(false), 3000); return; }
    try {
      const res = await api.put(`/favourites/${id}/toggle`, {}, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } });
      const { status } = res.data;
      setWishlist(p => status === 'like' ? [...p, id] : p.filter(fid => fid !== id));
    } catch (e) { console.error(e); }
  }, [user]);

  const responsive = useMemo(() => ({
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3, slidesToSlide: 1 },
    tablet: { breakpoint: { max: 1024, min: 640 }, items: 2, slidesToSlide: 1 },
    mobile: { breakpoint: { max: 640, min: 0 }, items: 1, slidesToSlide: 1 },
  }), []);

  return (
    <>
      <GlobalStyles />

      {/* Alert Toast */}
      {showAlert && (
        <div className="animate-fadeup" style={{ position: 'fixed', top: 20, right: 20, zIndex: 9999, background: 'white', borderRadius: 16, padding: '14px 20px', boxShadow: '0 20px 60px rgba(0,0,0,0.15)', display: 'flex', alignItems: 'center', gap: 12, border: '1px solid #FDE68A' }}>
          <span style={{ fontSize: '1.3rem' }}>🔐</span>
          <p style={{ fontFamily: 'Outfit', fontSize: '0.88rem', color: '#374151' }}>Please <Link to="/login" style={{ color: 'var(--saffron)', fontWeight: 700 }}>log in</Link> to continue</p>
        </div>
      )}

      <HeroSection onBookNow={handleBookNow} onSearch={() => { }} />
      <StatsBar />
      <WidgetsRow />

      {/* Tour Cards */}
      <section style={{ background: 'var(--cream)', padding: '80px 0 40px' }}>
        <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48, flexWrap: 'wrap', gap: 20 }}>
            <div>
              <div className="section-eyebrow" style={{ marginBottom: 10 }}>Curated For You</div>
              <h2 className="section-title">Perfect <em style={{ color: 'var(--saffron)' }}>India</em> Holidays</h2>
            </div>
            <button onClick={() => setShowPlanner(true)} className="btn-primary" style={{ padding: '12px 24px', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: 8 }}>
              <FaCalendarAlt /> AI Trip Planner ✨
            </button>
          </div>
          {loading ? (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(280px,1fr))', gap: 24 }}>
              {[1, 2, 3].map(i => <SkeletonCard key={i} />)}
            </div>
          ) : (
            <Carousel responsive={responsive} infinite autoPlay autoPlaySpeed={3800} keyBoardControl showDots containerClass="pb-10" itemClass="px-2" removeArrowOnDeviceType={['mobile']}>
              {tourCards.length > 0 ? tourCards.map(card => (
                <TourCard key={card._id} card={card} onFavourite={toggleFavourite}
                  isFav={wishlist.includes(card._id)} onBookNow={handleBookNow}
                  onRate={(id, s) => setRatings(p => ({ ...p, [id]: s }))} rating={ratings[card._id]} />
              )) : (
                <div style={{ textAlign: 'center', padding: '60px 0', fontFamily: 'Outfit', color: '#9CA3AF' }}>No tours available.</div>
              )}
            </Carousel>
          )}
        </div>
      </section>

      {/* FIX 3: Sections mount only when scrolled near them */}
      <div ref={domesticRef} id="domestic">
        <Suspense fallback={<SectionSkeleton />}>
          {domesticVisible && (
            <Domestic
              wishlist={wishlist}
              setWishlist={setWishlist}
              prefetchedData={domesticData}
            />
          )}
        </Suspense>
      </div>

      <div ref={intlRef} id="international" style={{ minHeight: intlVisible ? 'auto' : '1px' }}>
        <Suspense fallback={<SectionSkeleton />}>
          {intlVisible && (
            <International
              wishlist={wishlist}
              setWishlist={setWishlist}
              prefetchedData={intlData}
            />
          )}
        </Suspense>
      </div>

      <div ref={northRef} id="destinations">
        <Suspense fallback={<SectionSkeleton />}>
          {/* {northVisible && <NorthIndiaSection />} */}
        </Suspense>
      </div>

      <div ref={aboutRef} id="about-us">
        <AboutSection onBookNow={handleBookNow} />
      </div>

      <div id="footer"><Footer /></div>

      {/* Modals */}
      {showBooking && <BookingForm user={user} onClose={() => setShowBooking(false)} />}

      <TripPlannerModal
        open={showPlanner}
        onClose={() => setShowPlanner(false)}
        onItinerary={handleItinerary}
      />

      {itinerary && (
        <ItineraryOverlay itinerary={itinerary} onPlanAgain={handlePlanAgain} />
      )}

      <WishlistDrawer open={showWishlist} onClose={() => setShowWishlist(false)} wishlist={wishlist} items={tourCards} />

      <button className="fab-wishlist" onClick={() => setShowWishlist(true)}>
        <FaHeart />
        {wishlist.length > 0 && <span className="fab-badge">{wishlist.length}</span>}
      </button>

      {isVisible && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{ position: 'fixed', bottom: 100, right: 30, width: 44, height: 44, borderRadius: '50%', background: 'var(--ink)', color: 'white', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem', boxShadow: '0 4px 16px rgba(0,0,0,0.25)', zIndex: 800 }}
        >↑</button>
      )}
    </>
  );
}

export default React.memo(Start);