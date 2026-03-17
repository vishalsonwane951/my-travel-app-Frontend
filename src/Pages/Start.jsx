import React, {
  useEffect, useState, useRef, useContext, useCallback, useMemo
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

// ─── ✅ NEW: Import real AI Trip Planner components ───────────
import TripPlannerModal from '../Components/TripPlannerModal.jsx';
import ItineraryResult from '../Components/ItineraryResult.jsx';

const BASE = 'https://my-travel-app-backend-6.onrender.com';

// ─── Utility ──────────────────────────────────────────────────
const getImageUrl = (path) => {
  if (!path) return '/placeholder.jpg';
  const str = typeof path === 'string' ? path : (path?.url || path?.src || path?.images || String(path));
  if (!str || str === 'undefined' || str === 'null') return '/placeholder.jpg';
  if (str.startsWith('http')) return str;
  return `${BASE}/${str.replace(/^\/+/, '')}`;
};

// ─── Global Styles ────────────────────────────────────────────
const GlobalStyles = () => (
  <style>{`
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

    /* ── Navbar ── */
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

    /* ── Hero ── */
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

    /* ── Cards ── */
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

    /* ── Buttons ── */
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
    .btn-primary:disabled {
      opacity: 0.65; cursor: not-allowed; transform: none;
    }
    .btn-outline {
      background: transparent; color: white;
      border: 1.5px solid rgba(255,255,255,0.4);
      border-radius: 50px; font-family: 'Outfit', sans-serif;
      font-weight: 500; cursor: pointer; transition: all 0.3s;
    }
    .btn-outline:hover { background: rgba(255,255,255,0.12); border-color: white; }

    /* ── Search Bar ── */
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

    /* ── Filter Pills ── */
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

    /* ── Section Labels ── */
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

    /* ── Stat Ticker ── */
    .stat-ticker {
      border-left: 3px solid var(--saffron);
      padding-left: 16px;
    }

    /* ── Wishlist Drawer ── */
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

    /* ── Trip Planner Modal ── */
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

    /* ── TripPlannerModal inner styles ── */
    .progress {
      display: flex; gap: 8px; margin-bottom: 28px;
    }
    .progress-seg {
      flex: 1; height: 4px; border-radius: 2px;
      background: #E5E7EB; transition: background 0.3s;
    }
    .progress-seg.done { background: var(--saffron); }

    .step-enter { animation: fadeUp 0.4s ease forwards; }

    .field-label {
      font-family: 'Outfit', sans-serif; font-size: 0.82rem;
      font-weight: 600; color: #374151; margin-bottom: 8px;
      display: flex; align-items: center; gap: 8px;
    }
    .field-hint {
      font-weight: 400; color: var(--muted); font-size: 0.75rem;
    }

    .input {
      width: 100%; padding: 11px 16px; border-radius: 12px;
      border: 1.5px solid #E5E7EB; font-family: 'Outfit', sans-serif;
      font-size: 0.9rem; outline: none; transition: border-color 0.2s;
    }
    .input:focus { border-color: var(--saffron); }

    .ac-wrap { position: relative; }
    .ac-inner { position: relative; }
    .clear-btn {
      position: absolute; right: 10px; top: 50%;
      transform: translateY(-50%); background: none; border: none;
      cursor: pointer; color: var(--muted); font-size: 0.75rem;
      opacity: 0; transition: opacity 0.2s; padding: 4px;
    }
    .clear-btn.show { opacity: 1; }

    .dropdown {
      position: absolute; top: calc(100% + 6px); left: 0; right: 0;
      background: white; border: 1.5px solid #E5E7EB; border-radius: 14px;
      box-shadow: 0 8px 32px rgba(0,0,0,0.12); z-index: 100;
      max-height: 240px; overflow-y: auto;
    }
    .dropdown-item {
      display: flex; align-items: flex-start; gap: 10;
      padding: 10px 14px; cursor: pointer; transition: background 0.15s;
      font-family: 'Outfit'; font-size: 0.87rem;
    }
    .dropdown-item:hover, .dropdown-item.focused { background: #FFF5EE; }
    .dd-icon { font-size: 0.9rem; margin-top: 1px; }
    .dd-sub { font-size: 0.76rem; color: var(--muted); margin-top: 2px; }
    .dd-kbhint {
      display: flex; gap: 14px; padding: 8px 14px;
      border-top: 1px solid #F3F4F6; font-size: 0.72rem;
      color: var(--muted); font-family: 'Outfit';
    }
    .dd-kbhint kbd {
      background: #F3F4F6; border-radius: 4px;
      padding: 1px 5px; font-family: inherit; font-size: 0.7rem;
    }

    .area-wrap { max-height: 0; overflow: hidden; transition: max-height 0.4s ease, opacity 0.3s; opacity: 0; margin-bottom: 0; }
    .area-wrap.visible { max-height: 120px; opacity: 1; margin-bottom: 18px; }

    .date-row { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-bottom: 8px; }

    .nights-info { min-height: 28px; margin-bottom: 16px; }
    .nights-badge {
      display: inline-block; background: #ECFDF5; color: #059669;
      font-family: 'Outfit'; font-size: 0.78rem; font-weight: 600;
      padding: 4px 12px; border-radius: 20px;
    }

    .range-wrap { margin-bottom: 20px; }
    .range-label { font-family: 'Outfit'; font-size: 0.85rem; color: #374151; display: block; margin-bottom: 10px; }
    .range-val { color: var(--saffron); font-weight: 700; }
    input[type="range"] { width: 100%; accent-color: var(--saffron); }

    .pills { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 8px; }
    .pill {
      padding: 7px 18px; border-radius: 50px; font-family: 'Outfit';
      font-size: 0.83rem; font-weight: 500; cursor: pointer; transition: all 0.2s;
      border: 1.5px solid #E5E7EB; background: white; color: #6B7280;
    }
    .pill:hover { border-color: var(--saffron); color: var(--saffron); }
    .pill.active { background: var(--saffron); color: white; border-color: var(--saffron); }

    .budget-card {
      display: flex; align-items: center; gap: 14px;
      padding: 14px 18px; border-radius: 14px;
      border: 1.5px solid #E5E7EB; background: white;
      margin-bottom: 10px; cursor: pointer; transition: all 0.2s;
    }
    .budget-card:hover { border-color: var(--saffron-light); }
    .budget-card.active { border-color: var(--saffron); background: #FFF5EE; }
    .budget-radio {
      width: 20px; height: 20px; border-radius: 50%;
      border: 2px solid #D1D5DB; display: flex; align-items: center;
      justify-content: center; flex-shrink: 0; transition: border-color 0.2s;
    }
    .budget-card.active .budget-radio { border-color: var(--saffron); }
    .budget-dot {
      width: 10px; height: 10px; border-radius: 50%;
      background: var(--saffron); opacity: 0; transition: opacity 0.2s;
    }
    .budget-card.active .budget-dot { opacity: 1; }
    .budget-label { font-family: 'Outfit'; font-size: 0.9rem; color: #374151; }
    .budget-card.active .budget-label { font-weight: 600; color: var(--saffron-dark); }

    .footer-btns { display: flex; gap: 12px; margin-top: 20px; }
    .btn-back {
      padding: 12px 20px; border-radius: 12px; border: 1.5px solid #E5E7EB;
      background: white; font-family: 'Outfit'; font-weight: 600;
      font-size: 0.9rem; cursor: pointer; color: #374151; transition: all 0.2s;
    }
    .btn-back:hover { border-color: var(--saffron); color: var(--saffron); }

    .error-msg { font-family: 'Outfit'; font-size: 0.78rem; color: #DC2626; margin-top: 5px; }

    .spinner {
      display: inline-block; width: 14px; height: 14px;
      border: 2px solid rgba(255,255,255,0.4); border-top-color: white;
      border-radius: 50%; animation: spin 0.7s linear infinite;
      margin-right: 8px; vertical-align: middle;
    }

    /* ── Itinerary Result Page ── */
    .result-page {
      max-width: 900px; margin: 0 auto;
      padding: 40px 24px 80px; font-family: 'Outfit', sans-serif;
    }
    .trip-header {
      background: linear-gradient(135deg, var(--forest), var(--forest-light));
      border-radius: 24px; padding: 36px; color: white; margin-bottom: 32px;
    }
    .trip-header h1 {
      font-family: 'Cormorant Garamond', serif; font-size: 2.4rem;
      font-weight: 700; margin-bottom: 14px;
    }
    .trip-meta { display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 16px; }
    .meta-badge {
      background: rgba(255,255,255,0.15); border: 1px solid rgba(255,255,255,0.2);
      border-radius: 20px; padding: 5px 14px;
      font-size: 0.8rem; font-weight: 500;
    }
    .trip-summary { font-size: 0.95rem; color: rgba(255,255,255,0.8); line-height: 1.7; margin-bottom: 14px; }
    .total-cost {
      background: rgba(255,255,255,0.15); border-radius: 12px;
      padding: 12px 18px; font-size: 0.95rem; font-weight: 600;
      display: inline-block;
    }
    .info-row { display: flex; flex-wrap: wrap; gap: 10px; }
    .info-chip {
      background: rgba(255,255,255,0.1); border-radius: 8px;
      padding: 6px 12px; font-size: 0.8rem;
    }

    .days-grid { display: flex; flex-direction: column; gap: 20px; margin-bottom: 32px; }
    .day-card {
      background: white; border-radius: 20px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.06); overflow: hidden;
    }
    .day-header {
      background: linear-gradient(135deg, var(--saffron), var(--saffron-dark));
      padding: 16px 24px; display: flex; align-items: center; gap: 16px;
    }
    .day-num {
      width: 40px; height: 40px; background: rgba(255,255,255,0.2);
      border-radius: 50%; display: flex; align-items: center; justify-content: center;
      font-weight: 700; font-size: 1rem; color: white; flex-shrink: 0;
    }
    .day-title { font-family: 'Cormorant Garamond', serif; font-size: 1.2rem; font-weight: 700; color: white; flex: 1; }
    .day-cost-est { font-size: 0.8rem; color: rgba(255,255,255,0.85); font-weight: 600; }

    .section-title { font-size: 0.72rem; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; color: var(--muted); padding: 16px 24px 8px; }

    .activity-item, .food-item {
      display: flex; gap: 16px; padding: 12px 24px;
      border-bottom: 1px solid #F9FAFB;
    }
    .activity-time { font-size: 0.75rem; font-weight: 600; color: var(--saffron); min-width: 55px; padding-top: 2px; }
    .meal-type { font-size: 0.75rem; font-weight: 600; color: var(--forest-light); min-width: 55px; padding-top: 2px; text-transform: capitalize; }
    .item-name { font-weight: 600; font-size: 0.9rem; color: var(--ink); margin-bottom: 2px; }
    .item-desc { font-size: 0.82rem; color: #6B7280; line-height: 1.5; }
    .item-cost { font-size: 0.78rem; font-weight: 600; color: var(--saffron); margin-top: 4px; }

    .stay-card {
      display: flex; justify-content: space-between; align-items: center;
      padding: 14px 24px 18px;
    }
    .stay-name { font-weight: 600; font-size: 0.9rem; color: var(--ink); }
    .stay-type { font-size: 0.78rem; color: var(--muted); margin-top: 2px; }
    .stay-cost { font-size: 0.85rem; font-weight: 600; color: var(--saffron); }

    .tips-section {
      background: #FFFBEB; border: 1px solid #FDE68A;
      border-radius: 20px; padding: 28px; margin-bottom: 32px;
    }
    .tips-section h3 { font-family: 'Cormorant Garamond', serif; font-size: 1.4rem; font-weight: 700; color: var(--ink); margin-bottom: 16px; }
    .tip-item { font-size: 0.88rem; color: #374151; padding: 8px 0; border-bottom: 1px solid #FDE68A; line-height: 1.6; }
    .tip-item:last-child { border-bottom: none; }

    .actions-section {
      background: white; border-radius: 20px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.06);
      padding: 28px; margin-bottom: 24px;
    }
    .actions-section h3 { font-family: 'Cormorant Garamond', serif; font-size: 1.3rem; font-weight: 700; color: var(--ink); margin-bottom: 16px; }
    .action-btns { display: flex; flex-wrap: wrap; gap: 10px; }
    .action-btn {
      padding: 11px 20px; border-radius: 12px;
      border: 1.5px solid #E5E7EB; background: white;
      font-family: 'Outfit'; font-size: 0.85rem; font-weight: 600;
      cursor: pointer; transition: all 0.2s; color: #374151;
    }
    .action-btn:hover { border-color: var(--saffron); color: var(--saffron); }
    .action-btn.primary-action {
      background: linear-gradient(135deg, var(--saffron), var(--saffron-dark));
      color: white; border-color: transparent;
      box-shadow: 0 4px 14px rgba(232,129,58,0.3);
    }
    .action-btn.primary-action:hover { transform: translateY(-1px); box-shadow: 0 6px 20px rgba(232,129,58,0.4); }
    .action-btn:disabled { opacity: 0.6; cursor: not-allowed; transform: none; }

    .plan-again-btn {
      width: 100%; padding: 16px;
      background: linear-gradient(135deg, var(--forest), var(--forest-light));
      color: white; border: none; border-radius: 16px;
      font-family: 'Outfit'; font-size: 1rem; font-weight: 600;
      cursor: pointer; transition: all 0.3s;
      box-shadow: 0 4px 20px rgba(26,60,52,0.3);
    }
    .plan-again-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 30px rgba(26,60,52,0.4); }

    /* ── Weather Widget ── */
    .weather-card {
      background: linear-gradient(135deg, var(--forest), var(--forest-light));
      border-radius: 20px; padding: 24px; color: white;
      position: relative; overflow: hidden;
    }
    .weather-card::before {
      content: ''; position: absolute;
      width: 200px; height: 200px;
      background: rgba(255,255,255,0.05);
      border-radius: 50%;
      top: -60px; right: -60px;
    }

    /* ── Currency Widget ── */
    .currency-card {
      background: linear-gradient(135deg, var(--saffron), var(--saffron-dark));
      border-radius: 20px; padding: 24px; color: white;
    }

    /* ── Floating Action ── */
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

    /* ── Animations ── */
    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(24px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
    @keyframes spin { to { transform: rotate(360deg); } }
    @keyframes pulse { 0%,100% { transform: scale(1); } 50% { transform: scale(1.05); } }
    @keyframes slideLeft { from { opacity:0; transform:translateX(-20px); } to { opacity:1; transform:translateX(0); } }
    @keyframes shimmer {
      0% { background-position: -200% 0; }
      100% { background-position: 200% 0; }
    }

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

    /* ── Misc ── */
    .tag-badge {
      font-family: 'Outfit', sans-serif;
      font-size: 0.7rem; font-weight: 700;
      letter-spacing: 1px; text-transform: uppercase;
      padding: 4px 10px; border-radius: 6px;
    }
    .price-strike { text-decoration: line-through; color: #9CA3AF; }
    .star-gold { color: #F59E0B; }

    .react-multi-carousel-dot--active button { background: var(--saffron) !important; }
    .react-multi-carousel-dot button { background: #D1D5DB !important; border: none !important; width: 8px !important; height: 8px !important; }

    /* ── Itinerary full-page overlay ── */
    .itinerary-overlay {
      position: fixed; inset: 0; background: var(--cream);
      z-index: 4000; overflow-y: auto;
      animation: fadeIn 0.4s ease forwards;
    }
    .itinerary-overlay-inner {
      max-width: 900px; margin: 0 auto; padding: 0 24px 80px;
    }
    .itinerary-topbar {
      position: sticky; top: 0; background: rgba(251,245,236,0.95);
      backdrop-filter: blur(12px); padding: 16px 0;
      display: flex; align-items: center; gap: 12px;
      border-bottom: 1px solid var(--cream-deep); z-index: 10;
      margin-bottom: 32px;
    }
    .itinerary-topbar-back {
      display: flex; align-items: center; gap: 8px;
      background: none; border: 1.5px solid #E5E7EB;
      border-radius: 10px; padding: 8px 16px;
      font-family: 'Outfit'; font-size: 0.85rem; font-weight: 600;
      cursor: pointer; color: var(--ink); transition: all 0.2s;
    }
    .itinerary-topbar-back:hover { border-color: var(--saffron); color: var(--saffron); }

    /* Responsive */
    @media(max-width:768px) {
      .hide-mobile { display: none !important; }
      .wishlist-drawer { width: 100%; }
      .date-row { grid-template-columns: 1fr; }
      .action-btns { flex-direction: column; }
      .trip-header { padding: 24px; }
      .trip-header h1 { font-size: 1.8rem; }
    }
    @media(min-width:769px) {
      .hide-desktop { display: none !important; }
    }
  `}</style>
);

// ─── Skeleton Card ────────────────────────────────────────────
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
          <button onClick={onBookNow} className="btn-primary" style={{ padding: '10px 22px', fontSize: '0.85rem' }}>
            Book Now
          </button>
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
const HeroSection = ({ onBookNow, onSearch }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [searchValue, setSearchValue] = useState('');
  const [searchTab, setSearchTab] = useState('destination');

  const slides = [
    { img: '/images/Malaysia.png', tag: 'International', title: 'Discover\nMalaysia', sub: 'Rainforests, Towers & Timeless Culture', cta: 'View Packages' },
    { img: '/images/005.png', tag: 'North East', title: 'Enchanting\nAssam', sub: 'Tea Gardens, Wildlife & Brahmaputra Sunsets', cta: 'Explore Now' },
    { img: '/images/006.png', tag: 'International', title: 'Golden\nDubai', sub: 'Desert Dunes, Skylines & Arabian Nights', cta: 'Book Trip' },
    { img: '/images/007.png', tag: 'Scenic India', title: 'Sacred\nHimalayas', sub: 'Monasteries, Peaks & Spiritual Journeys', cta: 'Explore' },
  ];

  useEffect(() => {
    const t = setInterval(() => setActiveSlide(p => (p + 1) % slides.length), 5500);
    return () => clearInterval(t);
  }, []);

  const handleSearch = (e) => { e.preventDefault(); onSearch(searchValue); };

  return (
    <div className="hero-container">
      {slides.map((s, i) => (
        <div key={i} className={`hero-slide ${i === activeSlide ? 'active' : 'inactive'}`}>
          <img src={s.img} alt={s.tag} className="hero-img" onError={e => e.target.src = '/placeholder.jpg'} />
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
      <div style={{ position: 'absolute', bottom: 32, right: 32, zIndex: 4, color: 'rgba(255,255,255,0.5)', fontSize: '0.7rem', letterSpacing: 2, textTransform: 'uppercase', fontFamily: 'Outfit, sans-serif', display: 'flex', alignItems: 'center', gap: 8 }}>
        Scroll <div style={{ width: 1, height: 40, background: 'rgba(255,255,255,0.3)' }} />
      </div>
    </div>
  );
};

// ─── Stats Bar ────────────────────────────────────────────────
const StatsBar = () => (
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
);

// ─── Weather + Currency Widgets ───────────────────────────────
const WidgetsRow = () => {
  const [amount, setAmount] = useState('');
  const [converted, setConverted] = useState(null);
  const [toCurrency, setToCurrency] = useState('USD');
  const rates = { USD: 0.012, EUR: 0.011, GBP: 0.0094, AED: 0.044, SGD: 0.016, JPY: 1.79 };
  const weatherData = [
    { city: 'Mumbai', temp: 32, icon: <FaSun />, desc: 'Sunny' },
    { city: 'Delhi', temp: 28, icon: <FaWind />, desc: 'Windy' },
    { city: 'Goa', temp: 34, icon: <FaSun />, desc: 'Clear' },
  ];
  const [activeCity, setActiveCity] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setActiveCity(p => (p + 1) % weatherData.length), 3000);
    return () => clearInterval(t);
  }, []);
  const convert = () => { if (!amount) return; setConverted((parseFloat(amount) * rates[toCurrency]).toFixed(2)); };

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
};

// ─── Tour Card ─────────────────────────────────────────────────
const TourCard = ({ card, onFavourite, isFav, onBookNow, onRate, rating }) => (
  <div className="dest-card" style={{ margin: '0 8px' }}>
    <div className="dest-card-img" style={{ height: 220, background: '#F3F4F6', position: 'relative' }}>
      <img src={card.img || '/placeholder.jpg'} alt={card.title} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={e => e.target.src = '/placeholder.jpg'} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 50%)' }} />
      <button onClick={() => onFavourite(card._id)} style={{ position: 'absolute', top: 12, right: 12, width: 36, height: 36, borderRadius: '50%', background: 'rgba(255,255,255,0.9)', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'transform 0.2s' }} onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.15)'} onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>
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
);

// ─── Destination Card ─────────────────────────────────────────
const DestCard = ({ item, onClick, isAdmin, onDelete, onEdit, onFav, isFav, imageKey = 'images', price = '4,999', strikePrice = '6,999', days = '3-7' }) => {
  const rawImg = item[imageKey] || item['image'] || item['images'] || item['img'] || '';
  const imgSrc = getImageUrl(rawImg);
  return (
    <div className="dest-card" onClick={() => !isAdmin && onClick(item)} style={{ position: 'relative' }}>
      <div className="dest-card-img" style={{ height: 200, background: '#F3F4F6' }}>
        <img src={imgSrc} alt={item.title || 'Destination'} style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={e => { e.target.onerror = null; e.target.src = '/placeholder.jpg'; }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 55%)' }} />
        <button onClick={e => { e.stopPropagation(); onFav && onFav(item._id); }} style={{ position: 'absolute', top: 12, right: 12, width: 32, height: 32, borderRadius: '50%', background: 'rgba(255,255,255,0.9)', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <FaHeart style={{ color: isFav ? '#E85757' : '#D1D5DB', fontSize: '0.8rem' }} />
        </button>
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '12px 16px' }}>
          <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.15rem', fontWeight: 700, color: 'white', marginBottom: 2 }}>{item.title}</div>
          <div style={{ display: 'flex', gap: 10, fontSize: '0.75rem', color: 'rgba(255,255,255,0.75)', fontFamily: 'Outfit' }}>
            <span><FaMapMarkerAlt style={{ marginRight: 3 }} />India</span>
            <span><FaStar className="star-gold" style={{ marginRight: 3 }} />4.8</span>
            <span><FaClock style={{ marginRight: 3 }} />{days} Days</span>
          </div>
        </div>
        {isAdmin && (
          <div style={{ position: 'absolute', top: 12, left: 12, display: 'flex', gap: 6 }}>
            <button onClick={e => { e.stopPropagation(); onEdit && onEdit(item); }} style={{ width: 30, height: 30, borderRadius: 8, background: '#F59E0B', border: 'none', color: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><FaEdit size={11} /></button>
            <button onClick={e => { e.stopPropagation(); onDelete && onDelete(item._id); }} style={{ width: 30, height: 30, borderRadius: 8, background: '#EF4444', border: 'none', color: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><FaTrash size={11} /></button>
          </div>
        )}
      </div>
      <div style={{ padding: '16px 18px 18px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
          <div style={{ display: 'flex', gap: 10, fontSize: '0.77rem', color: '#6B7280', fontFamily: 'Outfit' }}>
            <span><FaUsers style={{ marginRight: 3 }} />2-12</span>
            <span><FaHotel style={{ marginRight: 3 }} />4★</span>
          </div>
          <div>
            <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.3rem', fontWeight: 700, color: 'var(--saffron)' }}>₹{price}</span>
            <span className="price-strike" style={{ fontFamily: 'Outfit', fontSize: '0.8rem', marginLeft: 6 }}>₹{strikePrice}</span>
          </div>
        </div>
        <Link to="/Maharashtra" onClick={e => e.stopPropagation()} className="btn-primary" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, padding: '10px', fontSize: '0.85rem', borderRadius: 12, textDecoration: 'none' }}>
          View Package <FaArrowRight size={11} />
        </Link>
      </div>
    </div>
  );
};

// ─── Domestic Section ─────────────────────────────────────────
function Domestic({ wishlist, setWishlist }) {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const isAdmin = user?.isAdmin;
  const [animation, setAnimation] = useState([]);
  const [states1, setStates1] = useState([]);
  const [states2, setStates2] = useState([]);
  const [loading, setLoading] = useState(true);
  const [startIndex, setStartIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentFeat, setCurrentFeat] = useState(0);

  const cardsToShow = windowWidth < 640 ? 1 : windowWidth < 1024 ? 2 : 3;

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    async function fetchPackages() {
      try {
        const [r1, r2] = await Promise.all([
          api.get('/maharashtra-domestic/getallAnimation', { signal: controller.signal }),
          api.get('/maharashtra-domestic/getstates', { signal: controller.signal }),
        ]);
        setAnimation(r1.data || []);
        setStates1(Array.isArray(r2.data) ? r2.data : r2.data?.data || []);
      } catch (err) {
        if (err.name !== 'AbortError' && err.name !== 'CanceledError') console.error(err);
      } finally { setLoading(false); }
    }
    fetchPackages();
    return () => controller.abort();
  }, []);

  useEffect(() => {
    if (!animation.length) return;
    const t = setInterval(() => setCurrentFeat(p => (p + 1) % animation.length), 3500);
    return () => clearInterval(t);
  }, [animation.length]);

  const filtered1 = states1.filter(i => i.title?.toLowerCase().includes(searchTerm.toLowerCase()));
  const filtered2 = states2.filter(i => i.title?.toLowerCase().includes(searchTerm.toLowerCase()));
  const total = Math.max(filtered1.length, filtered2.length);
  const visible1 = filtered1.slice(startIndex, startIndex + cardsToShow);
  const visible2 = filtered2.slice(startIndex, startIndex + cardsToShow);

  const categories = [
    { id: 'all', label: 'All India', icon: <FaGlobe /> },
    { id: 'north', label: 'North', icon: <FaMountain /> },
    { id: 'south', label: 'South', icon: <FaUmbrellaBeach /> },
    { id: 'east', label: 'East', icon: <FaTree /> },
    { id: 'west', label: 'West', icon: <FaWater /> },
  ];

  const handleFav = (id) => setWishlist(p => p.includes(id) ? p.filter(x => x !== id) : [...p, id]);

  if (loading) return (
    <div id="domestic" style={{ maxWidth: 1400, margin: '0 auto', padding: '60px 24px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(300px,1fr))', gap: 24 }}>
        {[1, 2, 3, 4, 5, 6].map(i => <SkeletonCard key={i} />)}
      </div>
    </div>
  );

  return (
    <section id="domestic" style={{ background: 'var(--cream)', paddingBottom: 80 }}>
      <div style={{ maxWidth: 1400, margin: '0 auto', padding: '80px 24px 0' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48, flexWrap: 'wrap', gap: 20 }}>
          <div>
            <div className="section-eyebrow" style={{ marginBottom: 10 }}>Domestic Packages</div>
            <h2 className="section-title">Discover <em style={{ color: 'var(--saffron)' }}>India's</em><br />Finest Destinations</h2>
          </div>
          <div style={{ position: 'relative' }}>
            <FaSearch style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: '#9CA3AF', fontSize: '0.85rem' }} />
            <input value={searchTerm} onChange={e => setSearchTerm(e.target.value)} placeholder="Search destinations..." style={{ padding: '10px 16px 10px 38px', borderRadius: 50, border: '1.5px solid #E5E7EB', fontFamily: 'Outfit', fontSize: '0.85rem', outline: 'none', width: 220 }} />
          </div>
        </div>
        <div style={{ display: 'flex', gap: 10, marginBottom: 40, overflowX: 'auto', paddingBottom: 4 }}>
          {categories.map(c => (
            <button key={c.id} className={`filter-pill ${activeCategory === c.id ? 'active' : ''}`} onClick={() => setActiveCategory(c.id)}>
              {c.icon} <span style={{ marginLeft: 6 }}>{c.label}</span>
            </button>
          ))}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: windowWidth >= 1100 ? '300px 1fr' : '1fr', gap: 28 }}>
          {windowWidth >= 1100 && animation.length > 0 && (
            <div style={{ position: 'sticky', top: 90, height: 'fit-content' }}>
              <div style={{ background: 'var(--forest)', borderRadius: 24, overflow: 'hidden', color: 'white' }}>
                <div style={{ position: 'relative', height: 220 }}>
                  <img src={getImageUrl(animation[currentFeat]?.images)} alt="Featured" style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={e => e.target.src = '/placeholder.jpg'} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(26,60,52,0.9) 0%, transparent 50%)' }} />
                  <div style={{ position: 'absolute', bottom: 16, left: 16, right: 16 }}>
                    <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.3rem', fontWeight: 700 }}>{animation[currentFeat]?.title || 'Discover India'}</div>
                  </div>
                  <button onClick={() => setCurrentFeat(p => (p - 1 + animation.length) % animation.length)} style={{ position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)', width: 28, height: 28, borderRadius: '50%', background: 'rgba(255,255,255,0.15)', border: 'none', color: 'white', cursor: 'pointer' }}>‹</button>
                  <button onClick={() => setCurrentFeat(p => (p + 1) % animation.length)} style={{ position: 'absolute', right: 10, top: '50%', transform: 'translateY(-50%)', width: 28, height: 28, borderRadius: '50%', background: 'rgba(255,255,255,0.15)', border: 'none', color: 'white', cursor: 'pointer' }}>›</button>
                </div>
                <div style={{ padding: '20px 20px 24px' }}>
                  <div style={{ fontFamily: 'Outfit', fontSize: '0.75rem', opacity: 0.6, letterSpacing: 1, textTransform: 'uppercase', marginBottom: 12 }}>Quick Stats</div>
                  {[{ label: 'Destinations', val: `${total}+` }, { label: 'Packages', val: '156' }, { label: 'Support', val: '24/7' }].map((s, i) => (
                    <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: i < 2 ? '1px solid rgba(255,255,255,0.1)' : 'none' }}>
                      <span style={{ fontFamily: 'Outfit', fontSize: '0.85rem', opacity: 0.7 }}>{s.label}</span>
                      <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.2rem', fontWeight: 700, color: 'var(--saffron-light)' }}>{s.val}</span>
                    </div>
                  ))}
                  <div style={{ display: 'flex', gap: 6, marginTop: 16 }}>
                    {animation.map((_, i) => (
                      <button key={i} onClick={() => setCurrentFeat(i)} style={{ width: i === currentFeat ? 24 : 8, height: 8, borderRadius: 4, border: 'none', background: i === currentFeat ? 'var(--saffron)' : 'rgba(255,255,255,0.25)', cursor: 'pointer', transition: 'all 0.3s', padding: 0 }} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
              <div style={{ fontFamily: 'Outfit', fontSize: '0.85rem', color: '#6B7280' }}>Showing <strong style={{ color: 'var(--ink)' }}>{total}</strong> destinations</div>
              <div style={{ display: 'flex', gap: 8 }}>
                <button onClick={() => setStartIndex(p => Math.max(0, p - cardsToShow))} disabled={startIndex === 0} style={{ width: 36, height: 36, borderRadius: 10, border: '1.5px solid #E5E7EB', background: startIndex === 0 ? '#F9FAFB' : 'white', color: startIndex === 0 ? '#D1D5DB' : 'var(--ink)', cursor: startIndex === 0 ? 'not-allowed' : 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><FaChevronLeft size={13} /></button>
                <button onClick={() => setStartIndex(p => Math.min(p + cardsToShow, total - cardsToShow))} disabled={startIndex + cardsToShow >= total} style={{ width: 36, height: 36, borderRadius: 10, border: '1.5px solid #E5E7EB', background: startIndex + cardsToShow >= total ? '#F9FAFB' : 'white', color: startIndex + cardsToShow >= total ? '#D1D5DB' : 'var(--ink)', cursor: startIndex + cardsToShow >= total ? 'not-allowed' : 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><FaChevronRight size={13} /></button>
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: `repeat(${cardsToShow},1fr)`, gap: 20, marginBottom: 20 }}>
              {visible1.map((item, i) => (
                <DestCard key={item._id || i} item={item} onClick={() => { }} isAdmin={isAdmin}
                  onDelete={async (id) => { if (!window.confirm('Delete?')) return; try { await api.delete(`/delete-image/${id}`); setStates1(p => p.filter(x => x._id !== id)); } catch (e) { } }}
                  onFav={handleFav} isFav={wishlist.includes(item._id)} imageKey="images" />
              ))}
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: `repeat(${cardsToShow},1fr)`, gap: 20 }}>
              {visible2.map((item, i) => (
                <DestCard key={item._id || i} item={item} onClick={() => { }} isAdmin={isAdmin}
                  onDelete={async (id) => { if (!window.confirm('Delete?')) return; try { await api.delete(`/delete-image/${id}`); setStates2(p => p.filter(x => x._id !== id)); } catch (e) { } }}
                  onFav={handleFav} isFav={wishlist.includes(item._id)} imageKey="image" price="5,999" strikePrice="7,999" days="4-8" />
              ))}
            </div>
            {total > 0 && (
              <div style={{ marginTop: 28 }}>
                <div style={{ height: 4, background: '#E5E7EB', borderRadius: 2, overflow: 'hidden', marginBottom: 8 }}>
                  <div style={{ width: `${Math.min(((startIndex + cardsToShow) / total) * 100, 100)}%`, height: '100%', background: 'linear-gradient(90deg, var(--saffron), var(--saffron-dark))', transition: 'width 0.4s ease' }} />
                </div>
                <p style={{ textAlign: 'center', fontFamily: 'Outfit', fontSize: '0.8rem', color: '#9CA3AF' }}>{startIndex + 1}–{Math.min(startIndex + cardsToShow, total)} of {total} destinations</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── International Section ────────────────────────────────────
function International({ wishlist, setWishlist }) {
  const { user } = useContext(AuthContext);
  const isAdmin = user?.isAdmin;
  const [intl1, setIntl1] = useState([]);
  const [intl2, setIntl2] = useState([]);
  const [loading, setLoading] = useState(true);
  const [startIndex, setStartIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [activeTab, setActiveTab] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);
  const [editItem, setEditItem] = useState(null);
  const [formData, setFormData] = useState({ title: '', description: '', location: '', price: '', duration: '', rating: '4.5' });
  const [selectedFile, setSelectedFile] = useState(null);
  const initialFetchDone = useRef(false);
  const imageCache = useRef(new Map());

  const getImg = useCallback((p) => {
    if (!p) return '/placeholder.jpg';
    const str = typeof p === 'string' ? p : (p?.url || p?.src || String(p));
    if (!str || str === 'undefined' || str === 'null') return '/placeholder.jpg';
    if (imageCache.current.has(str)) return imageCache.current.get(str);
    const u = str.startsWith('http') ? str : `${BASE}/${str.replace(/^\/+/, '')}`;
    imageCache.current.set(str, u);
    return u;
  }, []);

  useEffect(() => {
    const h = () => { const w = window.innerWidth; setWindowWidth(w); setCardsToShow(w < 640 ? 1 : w < 1024 ? 2 : 3); };
    h(); window.addEventListener('resize', h); return () => window.removeEventListener('resize', h);
  }, []);

  useEffect(() => {
    if (initialFetchDone.current) return;
    const controller = new AbortController();
    api.get('/International/getallInternational', { signal: controller.signal })
      .then((res) => { setIntl1(Array.isArray(res.data) ? res.data : []); initialFetchDone.current = true; })
      .catch((e) => { if (e.name !== 'AbortError') console.error(e); })
      .finally(() => setLoading(false));
    return () => controller.abort();
  }, []);

  const total = Math.max(intl1.length, intl2.length);
  const v1 = intl1.slice(startIndex, startIndex + cardsToShow);
  const v2 = intl2.slice(startIndex, startIndex + cardsToShow);
  const featured = [...intl1].slice(0, 1);
  const handleFav = (id) => setWishlist(p => p.includes(id) ? p.filter(x => x !== id) : [...p, id]);
  const handleDelete = async (id, row) => {
    if (!window.confirm('Delete?')) return;
    const ep = row === 'row1' ? `/International-tours/deleteInternational/${id}` : `/International-tours/deleteInternational2/${id}`;
    try { await api.delete(ep); if (row === 'row1') setIntl1(p => p.filter(x => x._id !== id)); else setIntl2(p => p.filter(x => x._id !== id)); } catch (e) { }
  };
  const resetForm = () => { setFormData({ title: '', description: '', location: '', price: '', duration: '', rating: '4.5' }); setSelectedFile(null); };
  const handleSave = async (row) => {
    try {
      const fd = new FormData();
      Object.entries(formData).forEach(([k, v]) => fd.append(k, v));
      if (selectedFile) fd.append('image', selectedFile);
      const ep = editItem ? (row === 'row1' ? `/International-tours/updateInternational/${editItem._id}` : `/International-tours/updateInternational2/${editItem._id}`) : (row === 'row1' ? '/International-tours/addInternational' : '/International-tours/addInternational2');
      const res = editItem ? await api.put(ep, fd, { headers: { 'Content-Type': 'multipart/form-data' } }) : await api.post(ep, fd, { headers: { 'Content-Type': 'multipart/form-data' } });
      if (res.data.success) {
        if (row === 'row1') setIntl1(p => editItem ? p.map(x => x._id === editItem._id ? res.data.data : x) : [...p, res.data.data]);
        else setIntl2(p => editItem ? p.map(x => x._id === editItem._id ? res.data.data : x) : [...p, res.data.data]);
        setShowAddModal(false); setEditItem(null); resetForm();
      }
    } catch (e) { console.error(e); }
  };
  const tabs = ['all', 'popular', 'hidden', 'upcoming'];

  if (loading) return (
    <div id="international" style={{ maxWidth: 1400, margin: '0 auto', padding: '60px 24px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(300px,1fr))', gap: 24 }}>
        {[1, 2, 3, 4, 5, 6].map(i => <SkeletonCard key={i} />)}
      </div>
    </div>
  );

  return (
    <section id="international" style={{ background: 'white', paddingBottom: 80 }}>
      <div style={{ maxWidth: 1400, margin: '0 auto', padding: '80px 24px 0' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48, flexWrap: 'wrap', gap: 20 }}>
          <div>
            <div className="section-eyebrow" style={{ marginBottom: 10 }}>International Tours</div>
            <h2 className="section-title">Explore the <em style={{ color: 'var(--saffron)' }}>World</em><br />Beyond Borders</h2>
          </div>
          <div style={{ display: 'flex', gap: 10 }}>
            <div style={{ position: 'relative' }}>
              <FaSearch style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: '#9CA3AF', fontSize: '0.85rem' }} />
              <input value={searchTerm} onChange={e => setSearchTerm(e.target.value)} placeholder="Search countries..." style={{ padding: '10px 16px 10px 38px', borderRadius: 50, border: '1.5px solid #E5E7EB', fontFamily: 'Outfit', fontSize: '0.85rem', outline: 'none', width: 200 }} />
            </div>
            {isAdmin && (
              <button onClick={() => { resetForm(); setShowAddModal(true); }} className="btn-primary" style={{ padding: '10px 20px', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: 6 }}>
                <FaPlus size={11} /> Add
              </button>
            )}
          </div>
        </div>
        {featured.length > 0 && (
          <div style={{ marginBottom: 60 }}>
            <div style={{ fontFamily: 'Outfit', fontSize: '0.8rem', fontWeight: 600, color: '#6B7280', letterSpacing: 1, textTransform: 'uppercase', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 8 }}>
              <FaAward style={{ color: 'var(--saffron)' }} /> Featured Destinations
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: windowWidth < 768 ? '1fr' : 'repeat(3,1fr)', gap: 24 }}>
              {featured.map((dest, i) => (
                <div key={dest._id || i} className="dest-card" onClick={() => setSelectedCountry(dest)} style={{ position: 'relative' }}>
                  <div className="dest-card-img" style={{ height: 220, background: '#F3F4F6' }}>
                    <img src={getImg(dest.images)} alt={dest.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={e => { e.target.onerror = null; e.target.src = '/placeholder.jpg'; }} />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 55%)' }} />
                    <span style={{ position: 'absolute', top: 14, right: 14, background: 'var(--saffron)', color: 'white', fontFamily: 'Outfit', fontSize: '0.7rem', fontWeight: 700, padding: '4px 10px', borderRadius: 6, letterSpacing: 1, textTransform: 'uppercase' }}>Featured</span>
                    <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '14px 16px' }}>
                      <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.2rem', fontWeight: 700, color: 'white' }}>{dest.title}</div>
                      <div style={{ display: 'flex', gap: 12, fontSize: '0.75rem', color: 'rgba(255,255,255,0.7)', fontFamily: 'Outfit', marginTop: 3 }}>
                        <span><FaClock style={{ marginRight: 3 }} />{dest.duration || 'Flexible'}</span>
                        <span><FaStar className="star-gold" style={{ marginRight: 3 }} />{dest.rating || '4.8'}</span>
                      </div>
                    </div>
                    <button onClick={e => { e.stopPropagation(); handleFav(dest._id); }} style={{ position: 'absolute', top: 14, left: 14, width: 32, height: 32, borderRadius: '50%', background: 'rgba(255,255,255,0.9)', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <FaHeart style={{ color: wishlist.includes(dest._id) ? '#E85757' : '#D1D5DB', fontSize: '0.8rem' }} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        <div style={{ display: 'flex', gap: 8, marginBottom: 32, overflowX: 'auto', paddingBottom: 4 }}>
          {tabs.map(t => (
            <button key={t} className={`filter-pill ${activeTab === t ? 'active' : ''}`} onClick={() => setActiveTab(t)}>
              {t === 'all' ? 'All Destinations' : t === 'popular' ? 'Most Popular' : t === 'hidden' ? 'Hidden Gems' : 'Upcoming'}
            </button>
          ))}
        </div>
        <div style={{ background: '#F9FAFB', borderRadius: 24, padding: 28, position: 'relative' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
            <div style={{ fontFamily: 'Outfit', fontSize: '0.85rem', color: '#6B7280' }}><strong style={{ color: 'var(--ink)' }}>{total}</strong> destinations worldwide</div>
            <div style={{ display: 'flex', gap: 8 }}>
              <button onClick={() => setStartIndex(p => Math.max(0, p - cardsToShow))} disabled={startIndex === 0} style={{ width: 36, height: 36, borderRadius: 10, border: '1.5px solid #E5E7EB', background: startIndex === 0 ? '#F9FAFB' : 'white', color: startIndex === 0 ? '#D1D5DB' : 'var(--ink)', cursor: startIndex === 0 ? 'not-allowed' : 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><FaChevronLeft size={13} /></button>
              <button onClick={() => setStartIndex(p => Math.min(p + cardsToShow, total - cardsToShow))} disabled={startIndex + cardsToShow >= total} style={{ width: 36, height: 36, borderRadius: 10, border: '1.5px solid #E5E7EB', background: startIndex + cardsToShow >= total ? '#F9FAFB' : 'white', color: startIndex + cardsToShow >= total ? '#D1D5DB' : 'var(--ink)', cursor: startIndex + cardsToShow >= total ? 'not-allowed' : 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><FaChevronRight size={13} /></button>
            </div>
          </div>
          {v1.length > 0 && (
            <div style={{ display: 'grid', gridTemplateColumns: `repeat(${cardsToShow},1fr)`, gap: 20, marginBottom: 20 }}>
              {v1.map((item, i) => (
                <DestCard key={`r1-${item._id || i}`} item={item} onClick={setSelectedCountry} isAdmin={isAdmin}
                  onDelete={(id) => handleDelete(id, 'row1')}
                  onEdit={(it) => { setEditItem(it); setFormData({ title: it.title || '', description: it.description || '', location: it.location || '', price: it.price || '', duration: it.duration || '', rating: it.rating || '4.5' }); setShowAddModal(true); }}
                  onFav={handleFav} isFav={wishlist.includes(item._id)} imageKey="images" />
              ))}
            </div>
          )}
          {v2.length > 0 && (
            <div style={{ display: 'grid', gridTemplateColumns: `repeat(${cardsToShow},1fr)`, gap: 20 }}>
              {v2.map((item, i) => (
                <DestCard key={`r2-${item._id || i}`} item={item} onClick={setSelectedCountry} isAdmin={isAdmin}
                  onDelete={(id) => handleDelete(id, 'row2')}
                  onEdit={(it) => { setEditItem(it); setFormData({ title: it.title || '', description: it.description || '', location: it.location || '', price: it.price || '', duration: it.duration || '', rating: it.rating || '4.5' }); setShowAddModal(true); }}
                  onFav={handleFav} isFav={wishlist.includes(item._id)} imageKey="images" price="5,999" strikePrice="7,999" days="4-8" />
              ))}
            </div>
          )}
          {total > 0 && (
            <div style={{ marginTop: 24 }}>
              <div style={{ height: 4, background: '#E5E7EB', borderRadius: 2, overflow: 'hidden', marginBottom: 8 }}>
                <div style={{ width: `${Math.min(((startIndex + cardsToShow) / total) * 100, 100)}%`, height: '100%', background: 'linear-gradient(90deg, var(--saffron), var(--saffron-dark))', transition: 'width 0.4s ease' }} />
              </div>
              <p style={{ textAlign: 'center', fontFamily: 'Outfit', fontSize: '0.8rem', color: '#9CA3AF' }}>{startIndex + 1}–{Math.min(startIndex + cardsToShow, total)} of {total} destinations</p>
            </div>
          )}
        </div>
        <div style={{ marginTop: 60, background: 'linear-gradient(135deg, var(--forest), var(--forest-light))', borderRadius: 24, padding: windowWidth < 768 ? '40px 24px' : '56px 60px', display: 'flex', flexDirection: windowWidth < 768 ? 'column' : 'row', alignItems: 'center', justifyContent: 'space-between', gap: 24 }}>
          <div>
            <div style={{ fontFamily: 'Outfit', fontSize: '0.75rem', color: 'var(--saffron-light)', letterSpacing: 2, textTransform: 'uppercase', marginBottom: 10 }}>Stay Inspired</div>
            <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2rem', fontWeight: 700, color: 'white', marginBottom: 8 }}>Get Exclusive Deals</h3>
            <p style={{ fontFamily: 'Outfit', fontSize: '0.9rem', color: 'rgba(255,255,255,0.65)' }}>Join 10,000+ travellers getting weekly travel inspiration & offers</p>
          </div>
          <div style={{ display: 'flex', gap: 10, flexShrink: 0, flexDirection: windowWidth < 768 ? 'column' : 'row', width: windowWidth < 768 ? '100%' : 'auto' }}>
            <input type="email" placeholder="Your email address" style={{ padding: '13px 20px', borderRadius: 12, border: 'none', fontFamily: 'Outfit', fontSize: '0.9rem', width: windowWidth < 768 ? '100%' : 260, outline: 'none' }} />
            <button className="btn-primary" style={{ padding: '13px 28px', fontSize: '0.9rem', borderRadius: 12, flexShrink: 0 }}>Subscribe</button>
          </div>
        </div>
      </div>

      {selectedCountry && (
        <div className="modal-backdrop" onClick={() => setSelectedCountry(null)}>
          <div className="modal-box" onClick={e => e.stopPropagation()}>
            <div style={{ position: 'relative' }}>
              <img src={getImg(selectedCountry.images)} alt={selectedCountry.title} style={{ width: '100%', height: 280, objectFit: 'cover', borderRadius: '24px 24px 0 0' }} onError={e => { e.target.onerror = null; e.target.src = '/placeholder.jpg'; }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%)', borderRadius: '24px 24px 0 0' }} />
              <button onClick={() => setSelectedCountry(null)} style={{ position: 'absolute', top: 16, right: 16, width: 36, height: 36, borderRadius: '50%', background: 'rgba(255,255,255,0.9)', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem' }}>×</button>
              <div style={{ position: 'absolute', bottom: 20, left: 24 }}>
                <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2rem', fontWeight: 700, color: 'white' }}>{selectedCountry.title}</h2>
              </div>
            </div>
            <div style={{ padding: 32 }}>
              <p style={{ fontFamily: 'Outfit', fontSize: '0.9rem', color: '#6B7280', lineHeight: 1.7, marginBottom: 24 }}>{selectedCountry.description || `Experience the beauty and culture of ${selectedCountry.title}.`}</p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 14, marginBottom: 24 }}>
                {[{ icon: <FaRupeeSign />, label: 'Price', val: selectedCountry.price ? `₹${selectedCountry.price}` : 'On Request' }, { icon: <FaClock />, label: 'Duration', val: selectedCountry.duration || 'Flexible' }, { icon: <FaStar />, label: 'Rating', val: selectedCountry.rating || '4.8' }].map((s, i) => (
                  <div key={i} style={{ background: '#F9FAFB', borderRadius: 14, padding: '16px', textAlign: 'center' }}>
                    <div style={{ color: 'var(--saffron)', marginBottom: 6, fontSize: '1.1rem' }}>{s.icon}</div>
                    <div style={{ fontFamily: 'Outfit', fontSize: '0.75rem', color: '#9CA3AF', marginBottom: 4 }}>{s.label}</div>
                    <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.1rem', fontWeight: 700, color: 'var(--ink)' }}>{s.val}</div>
                  </div>
                ))}
              </div>
              <button className="btn-primary" style={{ width: '100%', padding: 15, fontSize: '1rem', borderRadius: 14 }}>Book Your Adventure →</button>
            </div>
          </div>
        </div>
      )}

      {showAddModal && (
        <div className="modal-backdrop" onClick={() => { setShowAddModal(false); setEditItem(null); resetForm(); }}>
          <div className="modal-box" onClick={e => e.stopPropagation()}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
              <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.8rem', fontWeight: 700, color: 'var(--ink)' }}>{editItem ? 'Edit' : 'Add'} Destination</h2>
              <button onClick={() => { setShowAddModal(false); setEditItem(null); resetForm(); }} style={{ background: 'none', border: 'none', fontSize: '1.2rem', cursor: 'pointer', color: '#6B7280' }}>×</button>
            </div>
            {[['title', 'Title *', 'text'], ['description', 'Description', 'textarea'], ['location', 'Location', 'text'], ['price', 'Price ($)', 'number'], ['duration', 'Duration', 'text'], ['rating', 'Rating (1-5)', 'number']].map(([name, label, type]) => (
              <div key={name} style={{ marginBottom: 16 }}>
                <label style={{ display: 'block', fontFamily: 'Outfit', fontSize: '0.82rem', fontWeight: 600, color: '#374151', marginBottom: 6 }}>{label}</label>
                {type === 'textarea'
                  ? <textarea name={name} value={formData[name]} onChange={e => setFormData(p => ({ ...p, [name]: e.target.value }))} style={{ width: '100%', padding: '10px 14px', borderRadius: 10, border: '1.5px solid #E5E7EB', fontFamily: 'Outfit', fontSize: '0.9rem', outline: 'none', minHeight: 80, resize: 'vertical' }} />
                  : <input type={type} name={name} value={formData[name]} onChange={e => setFormData(p => ({ ...p, [name]: e.target.value }))} style={{ width: '100%', padding: '10px 14px', borderRadius: 10, border: '1.5px solid #E5E7EB', fontFamily: 'Outfit', fontSize: '0.9rem', outline: 'none' }} />
                }
              </div>
            ))}
            <div style={{ marginBottom: 24 }}>
              <label style={{ display: 'block', fontFamily: 'Outfit', fontSize: '0.82rem', fontWeight: 600, color: '#374151', marginBottom: 6 }}>Image</label>
              <input type="file" accept="image/*" onChange={e => setSelectedFile(e.target.files[0])} style={{ width: '100%', padding: 10, borderRadius: 10, border: '1.5px dashed #E5E7EB', fontFamily: 'Outfit' }} />
            </div>
            <div style={{ display: 'flex', gap: 12 }}>
              <button onClick={() => { setShowAddModal(false); setEditItem(null); resetForm(); }} style={{ flex: 1, padding: 13, borderRadius: 12, border: '1.5px solid #E5E7EB', background: 'white', fontFamily: 'Outfit', fontWeight: 600, cursor: 'pointer', fontSize: '0.9rem' }}>Cancel</button>
              <button onClick={() => handleSave('row1')} disabled={!formData.title} className="btn-primary" style={{ flex: 1, padding: 13, fontSize: '0.9rem', borderRadius: 12 }}>{editItem ? 'Save Changes' : 'Add Destination'}</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

// ─── North India States ───────────────────────────────────────
const NorthIndiaSection = () => {
  const states = [
    { img: "https://i.pinimg.com/736x/5a/db/60/5adb6045c7f5e7701638fa12a5d367ef.jpg", title: "Haryana", desc: "Heritage & Dhaba Culture" },
    { img: "https://i.pinimg.com/736x/97/36/b6/9736b63fdfd6e297d767dd1cc53f8201.jpg", title: "Jammu & Kashmir", desc: "Heaven on Earth" },
    { img: "https://i.pinimg.com/736x/19/1a/8f/191a8fc4ea0445877c0f774b9c6778e5.jpg", title: "Punjab", desc: "Land of Five Rivers" },
    { img: "https://i.pinimg.com/736x/bb/14/be/bb14be40be2c68bd959490d4e483e9f9.jpg", title: "Rajasthan", desc: "Land of Kings" },
    { img: "https://i.pinimg.com/1200x/35/29/bd/3529bde46e2ecb90db33bfe2854ca6a3.jpg", title: "Uttar Pradesh", desc: "Spiritual India" },
    { img: "https://i.pinimg.com/1200x/85/0c/7a/850c7a1be03a931dbaa443301bc0dcbc.jpg", title: "Himachal Pradesh", desc: "Mountains & Valleys" },
    { img: "https://i.pinimg.com/1200x/48/e5/1a/48e51a0e4f798832e10ff0c43f925e64.jpg", title: "Delhi", desc: "The Capital City" },
    { img: "https://i.pinimg.com/1200x/7c/46/c5/7c46c5bdbe8f89364e4da64610e60c45.jpg", title: "Ladakh", desc: "Roof of the World" },
  ];
  return (
    <section id="destinations" style={{ background: 'var(--cream-deep)', padding: '80px 0' }}>
      <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ marginBottom: 48 }}>
          <div className="section-eyebrow" style={{ marginBottom: 10 }}>Explore Regions</div>
          <h2 className="section-title">States of <em style={{ color: 'var(--saffron)' }}>North India</em></h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(240px,1fr))', gap: 20 }}>
          {states.map((state, i) => (
            <Link key={i} to={`/state/${state.title.toLowerCase()}`} style={{ textDecoration: 'none', display: 'block', borderRadius: 20, overflow: 'hidden', height: 220, position: 'relative', cursor: 'pointer', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', transition: 'transform 0.4s cubic-bezier(.25,.8,.25,1), box-shadow 0.4s' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-8px)'; e.currentTarget.style.boxShadow = '0 20px 50px rgba(0,0,0,0.16)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)'; }}>
              <img src={state.img} alt={state.title} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={e => e.target.src = '/placeholder.jpg'} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15,25,35,0.8) 0%, rgba(15,25,35,0.1) 60%)' }} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '16px 18px' }}>
                <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.1rem', fontWeight: 700, color: 'white', marginBottom: 2 }}>{state.title}</div>
                <div style={{ fontFamily: 'Outfit', fontSize: '0.75rem', color: 'rgba(255,255,255,0.65)' }}>{state.desc}</div>
                <div style={{ fontFamily: 'Outfit', fontSize: '0.72rem', color: 'var(--saffron-light)', marginTop: 4 }}>Explore →</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── About / Testimonials ─────────────────────────────────────
const AboutSection = ({ onBookNow }) => {
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  const testimonials = [
    { text: "The best travel experience I've ever had! Desi V Desi made every moment magical.", author: "Priya S.", role: "Solo Traveler", avatar: "P" },
    { text: "Perfectly planned trip, seamless booking. Our family had an absolutely wonderful time!", author: "Rajesh K.", role: "Family Trip", avatar: "R" },
    { text: "Excellent service and truly amazing tours. I've now booked three trips with them!", author: "Anjali M.", role: "Frequent Traveler", avatar: "A" },
    { text: "From the first booking to the last day — everything was seamless and beautiful.", author: "Sunil T.", role: "Honeymoon Package", avatar: "S" },
  ];
  useEffect(() => {
    const t = setInterval(() => setTestimonialIdx(p => (p + 1) % testimonials.length), 4000);
    return () => clearInterval(t);
  }, []);

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
              <img src="/photo2.jpg" alt="Founder" loading="lazy" style={{ width: 72, height: 72, borderRadius: 16, objectFit: 'cover', flexShrink: 0, border: '2px solid var(--saffron)' }} onError={e => e.target.src = '/placeholder.jpg'} />
              <div>
                <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.1rem', fontWeight: 700, color: 'white' }}>Mr. Sonwane</div>
                <div style={{ fontFamily: 'Outfit', fontSize: '0.75rem', color: 'var(--saffron-light)', letterSpacing: 1, textTransform: 'uppercase', marginTop: 4 }}>Founder & CEO</div>
              </div>
            </div>
            <p style={{ fontFamily: 'Outfit', fontSize: '0.88rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.75, fontStyle: 'italic' }}>"We are one of the leading tour operators in Maharashtra for the last 36 years, known as experts in Domestic as well as International tours."</p>
            <div style={{ marginTop: 24, display: 'flex', gap: 14 }}>
              {[<FaFacebook />, <FaInstagram />, <FaTwitter />, <FaYoutube />].map((icon, i) => (
                <a key={i} href="#" style={{ width: 36, height: 36, borderRadius: '50%', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: '0.85rem' }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'var(--saffron)'; e.currentTarget.style.color = 'white'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; e.currentTarget.style.color = 'rgba(255,255,255,0.6)'; }}>{icon}</a>
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
};

// ─── Wishlist Drawer ──────────────────────────────────────────
const WishlistDrawer = ({ open, onClose, wishlist, items }) => {
  const savedItems = items.filter(item => wishlist.includes(item._id));
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
              <img src={getImageUrl(item.images || item.image || item.img)} alt={item.title} style={{ width: 70, height: 70, borderRadius: 12, objectFit: 'cover', flexShrink: 0 }} onError={e => { e.target.onerror = null; e.target.src = '/placeholder.jpg'; }} />
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
};

// ─── ✅ Itinerary full-page overlay wrapper ───────────────────
const ItineraryOverlay = ({ itinerary, onPlanAgain }) => (
  <div className="itinerary-overlay">
    <div className="itinerary-overlay-inner">
      {/* Top bar */}
      <div className="itinerary-topbar">
        <button className="itinerary-topbar-back" onClick={onPlanAgain}>
          ← Plan Another Trip
        </button>
        <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.1rem', fontWeight: 700, color: 'var(--ink)' }}>
          Your AI Itinerary ✨
        </div>
      </div>
      {/* The actual result component */}
      <ItineraryResult itinerary={itinerary} onPlanAgain={onPlanAgain} />
    </div>
  </div>
);

// ─── Main Start Component ─────────────────────────────────────
function Start() {
  const { user } = useContext(AuthContext);
  const [showBooking, setShowBooking] = useState(false);
  const [showPlanner, setShowPlanner] = useState(false);   // ← controls TripPlannerModal
  const [itinerary, setItinerary] = useState(null);    // ← holds the AI result
  const [showAlert, setShowAlert] = useState(false);
  const [showWishlist, setShowWishlist] = useState(false);
  const [wishlist, setWishlist] = useState([]);
  const [ratings, setRatings] = useState({});
  const [tourCards, setTourCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const aboutRef = useRef(null);
  const location = useLocation();
  const initialFetchDone = useRef(false);

  useEffect(() => {
    const handler = () => setIsVisible(window.scrollY > 400);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    if (location.state?.scrollToAbout && aboutRef.current) {
      setTimeout(() => aboutRef.current?.scrollIntoView({ behavior: 'smooth' }), 300);
    }
  }, [location]);

  useEffect(() => {
    if (initialFetchDone.current) return;
    const controller = new AbortController();
    api.get('/favourites/getCards', { signal: controller.signal })
      .then(({ data }) => { setTourCards(data || []); initialFetchDone.current = true; })
      .catch(e => { if (e.name !== 'AbortError') console.error(e); })
      .finally(() => setLoading(false));
    return () => controller.abort();
  }, []);

  const handleBookNow = useCallback(() => {
    if (!user) { setShowAlert(true); setTimeout(() => setShowAlert(false), 3000); }
    else setShowBooking(true);
  }, [user]);

  // ✅ Called by TripPlannerModal when Claude returns the itinerary
  const handleItinerary = useCallback((data) => {
    setItinerary(data);
    setShowPlanner(false);
  }, []);

  // ✅ Called by ItineraryResult "Plan Another Trip" button
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

      {/* Hero */}
      <HeroSection onBookNow={handleBookNow} onSearch={setSearchQuery} />

      {/* Stats */}
      <StatsBar />

      {/* Widgets */}
      <WidgetsRow />

      {/* Tour Cards — with AI Trip Planner button */}
      <section style={{ background: 'var(--cream)', padding: '80px 0 40px' }}>
        <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48, flexWrap: 'wrap', gap: 20 }}>
            <div>
              <div className="section-eyebrow" style={{ marginBottom: 10 }}>Curated For You</div>
              <h2 className="section-title">Perfect <em style={{ color: 'var(--saffron)' }}>India</em> Holidays</h2>
            </div>
            {/* ✅ This button opens the real AI Trip Planner */}
            <button
              onClick={() => setShowPlanner(true)}
              className="btn-primary"
              style={{ padding: '12px 24px', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: 8 }}
            >
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

      {/* Domestic */}
      <Domestic wishlist={wishlist} setWishlist={setWishlist} />

      {/* International */}
      <International wishlist={wishlist} setWishlist={setWishlist} />

      {/* North India */}
      <NorthIndiaSection />

      {/* About */}
      <div ref={aboutRef}>
        <AboutSection onBookNow={handleBookNow} />
      </div>

      {/* Footer */}
      <div id="footer"><Footer /></div>

      {/* ── Modals & Overlays ── */}

      {showBooking && <BookingForm user={user} onClose={() => setShowBooking(false)} />}

      {/* ✅ Real AI Trip Planner Modal — replaces the old placeholder */}
      <TripPlannerModal
        open={showPlanner}
        onClose={() => setShowPlanner(false)}
        onItinerary={handleItinerary}
      />

      {/* ✅ Itinerary Result — shown as full-page overlay after Claude responds */}
      {itinerary && (
        <ItineraryOverlay
          itinerary={itinerary}
          onPlanAgain={handlePlanAgain}
        />
      )}

      <WishlistDrawer open={showWishlist} onClose={() => setShowWishlist(false)} wishlist={wishlist} items={[...tourCards]} />

      {/* FAB - Wishlist */}
      <button className="fab-wishlist" onClick={() => setShowWishlist(true)}>
        <FaHeart />
        {wishlist.length > 0 && <span className="fab-badge">{wishlist.length}</span>}
      </button>

      {/* Scroll to top */}
      {isVisible && (
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{ position: 'fixed', bottom: 100, right: 30, width: 44, height: 44, borderRadius: '50%', background: 'var(--ink)', color: 'white', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem', boxShadow: '0 4px 16px rgba(0,0,0,0.25)', zIndex: 800 }}
          onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-3px)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}>
          ↑
        </button>
      )}
    </>
  );
}

export default React.memo(Start);