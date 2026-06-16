// pages/TourPackages/BaseTourPage.jsx
import React, { useState, useEffect, useRef, useContext, useCallback, useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import TourPackageCard from "../../Components/TourPackageCard";
import PackageContext from "../../Context/PackageContext";
import { FaSearch, FaArrowUp, FaPhone, FaEnvelope, FaWhatsapp, FaFilter, FaTimes, FaSortAmountDown, FaThLarge, FaList, FaStar, FaMapMarkerAlt, FaArrowRight, FaCalendarAlt, FaUsers, FaClock, FaChevronDown, FaChevronUp, FaHeart, FaShareAlt, FaEye, FaDollarSign, FaTachometerAlt, FaGem, FaMountain, FaUmbrellaBeach, FaTree, FaCity, FaCompass } from "react-icons/fa";
import Header from "../../Components/Header/Header";
import api from '../../utils/api.js';

// ── Premium Skeleton Card ─────────────────────────────────────────────────────────────
const PremiumSkeletonCard = () => (
  <div className="col-xl-4 col-lg-4 col-md-6 mb-4">
    <div className="premium-skeleton-card">
      <div className="premium-skel-img shimmer" />
      <div className="premium-skel-content">
        <div className="premium-skel-chip shimmer" style={{ width: '40%' }} />
        <div className="premium-skel-line shimmer" style={{ width: '85%' }} />
        <div className="premium-skel-line shimmer" style={{ width: '60%' }} />
        <div className="premium-skel-footer">
          <div className="premium-skel-line shimmer" style={{ width: '35%', height: 24 }} />
          <div className="premium-skel-btn shimmer" />
        </div>
      </div>
    </div>
  </div>
);

// ── Enhanced Weather Component ──────────────────────────────────────────────────────────────
const EnhancedWeatherWidget = ({ destination }) => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!destination) return;
    setLoading(true);
    // Simulated weather data - replace with actual API call
    const weatherMap = {
      goa: { temp: 31, feelsLike: 34, desc: 'Sunny & Humid', icon: '☀️', humidity: 78, wind: 12, uv: 8, best: 'Nov–Feb', airQuality: 'Moderate' },
      kerala: { temp: 28, feelsLike: 30, desc: 'Partly Cloudy', icon: '⛅', humidity: 82, wind: 8, uv: 6, best: 'Sep–Mar', airQuality: 'Good' },
      rajasthan: { temp: 38, feelsLike: 40, desc: 'Hot & Dry', icon: '🌤️', humidity: 25, wind: 15, uv: 10, best: 'Oct–Mar', airQuality: 'Poor' },
      manali: { temp: 12, feelsLike: 10, desc: 'Cool & Clear', icon: '🏔️', humidity: 60, wind: 20, uv: 4, best: 'May–Jun', airQuality: 'Good' },
      shimla: { temp: 15, feelsLike: 14, desc: 'Misty', icon: '🌫️', humidity: 72, wind: 10, uv: 3, best: 'Mar–Jun', airQuality: 'Good' },
      default: { temp: 26, feelsLike: 27, desc: 'Pleasant', icon: '🌤️', humidity: 65, wind: 8, uv: 5, best: 'Oct–Mar', airQuality: 'Moderate' },
    };
    setTimeout(() => {
      const key = destination?.toLowerCase().split('-')[0] || 'default';
      setWeather(weatherMap[key] || weatherMap.default);
      setLoading(false);
    }, 500);
  }, [destination]);

  if (loading) {
    return (
      <div className="premium-weather-card loading">
        <div className="premium-weather-header">
          <span className="premium-weather-location">{destination || 'Loading...'}</span>
        </div>
        <div className="premium-weather-temp shimmer" style={{ height: 40, width: 100 }} />
      </div>
    );
  }

  return (
    <div className="premium-weather-card">
      <div className="premium-weather-header">
        <span className="premium-weather-location">
          <FaMapMarkerAlt size={12} /> {destination || 'Current Location'}
        </span>
        <span className="premium-weather-updated">Live</span>
      </div>
      <div className="premium-weather-main">
        <div className="premium-weather-icon">{weather.icon}</div>
        <div className="premium-weather-info">
          <div className="premium-weather-temp">{weather.temp}°C</div>
          <div className="premium-weather-desc">{weather.desc}</div>
        </div>
        <div className="premium-weather-details">
          <div className="premium-weather-detail">
            <span>💧 {weather.humidity}%</span>
            <span>Humidity</span>
          </div>
          <div className="premium-weather-detail">
            <span>🌬️ {weather.wind} km/h</span>
            <span>Wind</span>
          </div>
          <div className="premium-weather-detail">
            <span>☀️ UV {weather.uv}</span>
            <span>UV Index</span>
          </div>
        </div>
        <div className="premium-weather-best">
          <span>🏆 Best Time to Visit</span>
          <strong>{weather.best}</strong>
        </div>
      </div>
    </div>
  );
};

// ── Dynamic Pricing Widget ──────────────────────────────────────────────────────────────
const DynamicPricingWidget = ({ multiplier, trend }) => {
  const [expanded, setExpanded] = useState(false);
  
  const getTrendColor = () => {
    if (trend === 'rising') return '#FF6B6B';
    if (trend === 'falling') return '#51CF66';
    return '#FFD43B';
  };

  const getTrendIcon = () => {
    if (trend === 'rising') return '📈';
    if (trend === 'falling') return '📉';
    return '📊';
  };

  const getTrendText = () => {
    if (trend === 'rising') return 'Prices Rising';
    if (trend === 'falling') return 'Prices Dropping';
    return 'Prices Stable';
  };

  return (
    <div className="premium-pricing-widget" onMouseEnter={() => setExpanded(true)} onMouseLeave={() => setExpanded(false)}>
      <div className="premium-pricing-header">
        <div className="premium-pricing-trend" style={{ background: `${getTrendColor()}15`, borderColor: `${getTrendColor()}30` }}>
          <span className="premium-trend-icon">{getTrendIcon()}</span>
          <span className="premium-trend-text" style={{ color: getTrendColor() }}>{getTrendText()}</span>
          <span className="premium-trend-value">{Math.round(multiplier * 100)}%</span>
        </div>
        <FaChevronDown className={`premium-pricing-chevron ${expanded ? 'expanded' : ''}`} size={12} />
      </div>
      {expanded && (
        <div className="premium-pricing-expanded">
          <p>Real-time dynamic pricing based on:</p>
          <ul>
            <li>Current demand & seasonality</li>
            <li>Booking velocity</li>
            <li>Available inventory</li>
          </ul>
          <div className="premium-pricing-multiplier">
            <span>Current Multiplier</span>
            <strong>{multiplier.toFixed(2)}x</strong>
          </div>
          <small>Prices refresh every 5 minutes</small>
        </div>
      )}
    </div>
  );
};

// ── Tour Type Metadata ────────────────────────────────────────────────────────
const TOUR_META = {
  'custom-tour':     { title: 'Custom Tours',     icon: '🎨', grad: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', desc: 'Personalized journeys crafted around your dreams.', features: ['Tailored Itineraries', 'Private Guides', 'Flexible Dates'] },
  'adventure-tour':  { title: 'Adventure Tours',  icon: '🏔️', grad: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)', desc: 'Thrilling experiences for the bold and brave.', features: ['Rock Climbing', 'River Rafting', 'Trekking'] },
  'family-tour':     { title: 'Family Tours',     icon: '👨‍👩‍👧‍👦', grad: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', desc: 'Joyful journeys for every generation.', features: ['Kid-Friendly', 'Group Activities', 'Safe Travel'] },
  'group-tour':      { title: 'Group Tours',      icon: '🚌', grad: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)', desc: 'Better together — explore as a community.', features: ['Group Discounts', 'Shared Experiences', 'Social Travel'] },
  'city-tour':       { title: 'City Tours',       icon: '🌆', grad: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)', desc: 'Uncover the soul of iconic cities.', features: ['Historical Sites', 'Local Cuisine', 'Cultural Tours'] },
  'honeymoon-tour':  { title: 'Honeymoon Tours',  icon: '💑', grad: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)', desc: 'Romantic escapes crafted for two.', features: ['Couple Spa', 'Candlelight Dinners', 'Private Villas'] },
  'weekend-getaway': { title: 'Weekend Getaways', icon: '🌅', grad: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)', desc: 'Escape the grind for a perfect 2-3 days.', features: ['Short Trips', 'Quick Escapes', 'Budget Friendly'] },
  'luxury-tour':     { title: 'Luxury Tours',     icon: '💎', grad: 'linear-gradient(135deg, #d4af37 0%, #8b6914 100%)', desc: 'Five-star experiences for discerning travelers.', features: ['5-Star Hotels', 'Private Jets', 'Concierge Service'] },
  'pilgrimage-tour': { title: 'Pilgrimage Tours', icon: '🕌', grad: 'linear-gradient(135deg, #2c3e50 0%, #3498db 100%)', desc: 'Sacred journeys that nourish the soul.', features: ['Spiritual Guides', 'Temple Visits', 'Religious Ceremonies'] },
};

const SORT_OPTIONS = [
  { value: 'default',   label: 'Recommended', icon: '⭐' },
  { value: 'price-asc', label: 'Price: Low to High', icon: '💰' },
  { value: 'price-desc',label: 'Price: High to Low', icon: '💎' },
  { value: 'rating',    label: 'Highest Rated', icon: '🏆' },
  { value: 'newest',    label: 'Newest First', icon: '🆕' },
  { value: 'popular',   label: 'Most Popular', icon: '🔥' },
];

const DURATION_OPTIONS = [
  { value: 'all', label: 'Any Duration' },
  { value: '1-3', label: '1-3 Days' },
  { value: '4-7', label: '4-7 Days' },
  { value: '7-14', label: '1-2 Weeks' },
  { value: '14+', label: '2+ Weeks' },
];

const BaseTourPage = () => {
  const { type } = useParams();
  const { selectedType } = useContext(PackageContext);
  const packageType = type ? decodeURIComponent(type) : selectedType;

  const [packages, setPackages] = useState([]);
  const [filteredPackages, setFilteredPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [priceRange, setPriceRange] = useState([0, 100000]);
  const [selectedDuration, setSelectedDuration] = useState("all");
  const [selectedRating, setSelectedRating] = useState(0);
  const [sortBy, setSortBy] = useState("default");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [viewMode, setViewMode] = useState('grid');
  const [activeDestination, setActiveDestination] = useState(null);
  const [resultsCount, setResultsCount] = useState(0);
  const [favorites, setFavorites] = useState([]);
  const [priceRangeValue, setPriceRangeValue] = useState(100000);

  const packagesRef = useRef(null);
  const meta = TOUR_META[packageType] || TOUR_META['custom-tour'];
  const { multiplier, trend } = useDynamicPricing();

  // Fetch packages
  useEffect(() => {
    if (!packageType) return;
    const fetchPackages = async () => {
      try {
        setLoading(true);
        const res = await api.get(`/packages/${packageType}`);
        setPackages(res.data);
        if (res.data?.[0]?.location) setActiveDestination(res.data[0].location);
      } catch (error) {
        console.error('Error fetching packages:', error);
        setPackages([]);
      } finally {
        setTimeout(() => setLoading(false), 400);
      }
    };
    fetchPackages();
  }, [packageType]);

  // Filter and sort logic
  useEffect(() => {
    let result = [...packages];
    
    if (searchTerm.trim()) {
      const q = searchTerm.toLowerCase();
      result = result.filter(p =>
        p.title?.toLowerCase().includes(q) ||
        p.location?.toLowerCase().includes(q) ||
        p.description?.toLowerCase().includes(q)
      );
    }
    
    result = result.filter(p => {
      const price = p.durations?.[0]?.discountedPrice || p.durations?.[0]?.price || p.price || 0;
      return price >= priceRange[0] && price <= priceRangeValue;
    });
    
    if (selectedDuration !== "all") {
      result = result.filter(p => {
        const duration = p.duration || p.days || '';
        const [min, max] = selectedDuration.split('-').map(Number);
        if (selectedDuration === '14+') return parseInt(duration) >= 14;
        return parseInt(duration) >= min && parseInt(duration) <= max;
      });
    }
    
    if (selectedRating > 0) {
      result = result.filter(p => (p.rating || 4.5) >= selectedRating);
    }
    
    switch (sortBy) {
      case 'price-asc':  result.sort((a,b) => (a.price||0) - (b.price||0)); break;
      case 'price-desc': result.sort((a,b) => (b.price||0) - (a.price||0)); break;
      case 'rating':     result.sort((a,b) => (b.rating||0) - (a.rating||0)); break;
      case 'popular':    result.sort((a,b) => (b.reviews||0) - (a.reviews||0)); break;
      default: break;
    }
    
    setFilteredPackages(result);
    setResultsCount(result.length);
  }, [packages, searchTerm, priceRange, priceRangeValue, selectedDuration, selectedRating, sortBy]);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const resetFilters = useCallback(() => {
    setSearchTerm("");
    setPriceRange([0, 100000]);
    setPriceRangeValue(100000);
    setSelectedDuration("all");
    setSelectedRating(0);
    setSortBy("default");
  }, []);

  const toggleFavorite = (id) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(fid => fid !== id) : [...prev, id]
    );
  };

  const hasActiveFilters = searchTerm || priceRangeValue < 100000 || priceRange[0] > 0 || selectedDuration !== "all" || selectedRating > 0;
  const priceRangeText = priceRangeValue >= 100000 ? `Up to ₹1L+` : `₹${(priceRange[0]/1000).toFixed(0)}k – ₹${(priceRangeValue/1000).toFixed(0)}k`;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,300;14..32,400;14..32,500;14..32,600;14..32,700;14..32,800&family=Playfair+Display:wght@400;500;600;700;800;900&display=swap');
        
        :root {
          --font-primary: 'Inter', sans-serif;
          --font-display: 'Playfair Display', serif;
          --primary: #3D52A0;
          --primary-dark: #2D3A7A;
          --primary-light: #6B84C8;
          --secondary: #C9A84C;
          --accent: #FF6B6B;
          --dark: #1A1A2E;
          --gray-100: #F8F9FA;
          --gray-200: #E9ECEF;
          --gray-300: #DEE2E6;
          --gray-400: #CED4DA;
          --gray-500: #ADB5BD;
          --gray-600: #6C757D;
          --gray-700: #495057;
          --gray-800: #343A40;
          --gray-900: #212529;
          --shadow-sm: 0 2px 4px rgba(0,0,0,0.04), 0 1px 2px rgba(0,0,0,0.06);
          --shadow-md: 0 4px 12px rgba(0,0,0,0.08), 0 2px 4px rgba(0,0,0,0.04);
          --shadow-lg: 0 10px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.02);
          --shadow-xl: 0 20px 35px -10px rgba(0,0,0,0.15);
          --shadow-2xl: 0 25px 50px -12px rgba(0,0,0,0.25);
          --transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1);
          --transition-base: 250ms cubic-bezier(0.4, 0, 0.2, 1);
          --transition-slow: 350ms cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        * { margin: 0; padding: 0; box-sizing: border-box; }
        
        body { 
          font-family: var(--font-primary);
          background: var(--gray-100);
          color: var(--gray-800);
        }
        
        /* Premium Animations */
        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .shimmer {
          background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
          background-size: 1000px 100%;
          animation: shimmer 1.5s infinite;
        }
        
        /* Premium Skeleton */
        .premium-skeleton-card {
          background: white;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: var(--shadow-md);
        }
        
        .premium-skel-img {
          height: 260px;
          background: linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%);
          background-size: 1000px 100%;
          animation: shimmer 1.5s infinite;
        }
        
        .premium-skel-content {
          padding: 1.5rem;
        }
        
        .premium-skel-chip {
          height: 24px;
          width: 80px;
          border-radius: 12px;
          background: linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%);
          background-size: 1000px 100%;
          animation: shimmer 1.5s infinite;
          margin-bottom: 12px;
        }
        
        .premium-skel-line {
          height: 16px;
          border-radius: 8px;
          background: linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%);
          background-size: 1000px 100%;
          animation: shimmer 1.5s infinite;
          margin-bottom: 12px;
        }
        
        .premium-skel-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 20px;
        }
        
        .premium-skel-btn {
          width: 100px;
          height: 40px;
          border-radius: 40px;
          background: linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%);
          background-size: 1000px 100%;
          animation: shimmer 1.5s infinite;
        }
        
        /* Premium Hero Section */
        .premium-hero {
          position: relative;
          min-height: 75vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          overflow: hidden;
        }
        
        .premium-hero-bg {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          transition: transform 1.2s cubic-bezier(0.2, 0.9, 0.4, 1.1);
        }
        
        .premium-hero:hover .premium-hero-bg {
          transform: scale(1.05);
        }
        
        .premium-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.7) 100%);
        }
        
        .premium-hero-content {
          position: relative;
          z-index: 2;
          padding: 6rem 2rem 4rem;
          max-width: 1400px;
          width: 100%;
          margin: 0 auto;
          animation: fadeInUp 0.8s ease-out;
        }
        
        .premium-hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255,255,255,0.15);
          backdrop-filter: blur(10px);
          padding: 8px 20px;
          border-radius: 40px;
          font-size: 0.85rem;
          font-weight: 600;
          color: white;
          letter-spacing: 0.05em;
          margin-bottom: 1.5rem;
          border: 1px solid rgba(255,255,255,0.2);
        }
        
        .premium-hero-title {
          font-family: var(--font-display);
          font-size: clamp(3rem, 8vw, 5.5rem);
          font-weight: 800;
          color: white;
          line-height: 1.1;
          margin-bottom: 1rem;
          text-shadow: 0 2px 20px rgba(0,0,0,0.2);
        }
        
        .premium-hero-desc {
          font-size: 1.1rem;
          color: rgba(255,255,255,0.85);
          max-width: 550px;
          line-height: 1.6;
          margin-bottom: 2rem;
        }
        
        .premium-hero-stats {
          display: flex;
          gap: 2rem;
          flex-wrap: wrap;
        }
        
        .premium-hero-stat {
          text-align: center;
        }
        
        .premium-hero-stat-number {
          font-family: var(--font-display);
          font-size: 2rem;
          font-weight: 700;
          color: var(--secondary);
        }
        
        .premium-hero-stat-label {
          font-size: 0.8rem;
          color: rgba(255,255,255,0.7);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        
        .premium-hero-right {
          position: absolute;
          right: 2rem;
          bottom: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          align-items: flex-end;
        }
        
        /* Premium Weather Card */
        .premium-weather-card {
          background: rgba(255,255,255,0.12);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 28px;
          padding: 1.25rem;
          min-width: 280px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .premium-weather-card:hover {
          transform: translateY(-5px);
          background: rgba(255,255,255,0.18);
          box-shadow: 0 20px 35px -10px rgba(0,0,0,0.2);
        }
        
        .premium-weather-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: rgba(255,255,255,0.7);
        }
        
        .premium-weather-location {
          display: flex;
          align-items: center;
          gap: 4px;
        }
        
        .premium-weather-updated {
          background: rgba(255,255,255,0.15);
          padding: 2px 8px;
          border-radius: 20px;
        }
        
        .premium-weather-main {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        
        .premium-weather-icon {
          font-size: 3rem;
        }
        
        .premium-weather-info {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
        }
        
        .premium-weather-temp {
          font-family: var(--font-display);
          font-size: 2.5rem;
          font-weight: 700;
          color: white;
        }
        
        .premium-weather-desc {
          color: rgba(255,255,255,0.7);
          font-size: 0.9rem;
        }
        
        .premium-weather-details {
          display: flex;
          justify-content: space-between;
          padding-top: 0.75rem;
          border-top: 1px solid rgba(255,255,255,0.15);
        }
        
        .premium-weather-detail {
          text-align: center;
          font-size: 0.75rem;
        }
        
        .premium-weather-detail span:first-child {
          display: block;
          font-weight: 600;
          color: white;
        }
        
        .premium-weather-detail span:last-child {
          font-size: 0.7rem;
          color: rgba(255,255,255,0.5);
        }
        
        .premium-weather-best {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: rgba(255,255,255,0.08);
          padding: 0.5rem 0.75rem;
          border-radius: 16px;
          margin-top: 0.5rem;
          font-size: 0.75rem;
        }
        
        /* Premium Pricing Widget */
        .premium-pricing-widget {
          background: rgba(255,255,255,0.12);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 20px;
          padding: 0.75rem 1.25rem;
          cursor: pointer;
          position: relative;
          min-width: 200px;
        }
        
        .premium-pricing-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        
        .premium-pricing-trend {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 4px 12px;
          border-radius: 40px;
          font-size: 0.8rem;
          font-weight: 600;
        }
        
        .premium-trend-icon {
          font-size: 1rem;
        }
        
        .premium-trend-value {
          background: rgba(0,0,0,0.3);
          padding: 2px 6px;
          border-radius: 20px;
        }
        
        .premium-pricing-chevron {
          transition: transform 0.3s ease;
          color: rgba(255,255,255,0.6);
        }
        
        .premium-pricing-chevron.expanded {
          transform: rotate(180deg);
        }
        
        .premium-pricing-expanded {
          position: absolute;
          top: 100%;
          right: 0;
          margin-top: 0.5rem;
          background: rgba(0,0,0,0.9);
          backdrop-filter: blur(20px);
          border-radius: 16px;
          padding: 1rem;
          min-width: 240px;
          font-size: 0.75rem;
          z-index: 10;
          animation: fadeInUp 0.2s ease-out;
        }
        
        .premium-pricing-expanded p {
          margin-bottom: 0.5rem;
          font-weight: 600;
        }
        
        .premium-pricing-expanded ul {
          margin-left: 1rem;
          margin-bottom: 0.75rem;
          color: rgba(255,255,255,0.7);
        }
        
        .premium-pricing-expanded li {
          margin-bottom: 0.25rem;
        }
        
        .premium-pricing-multiplier {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: rgba(255,255,255,0.1);
          padding: 0.5rem;
          border-radius: 12px;
          margin-bottom: 0.5rem;
        }
        
        /* Premium Toolbar */
        .premium-toolbar {
          background: white;
          border-bottom: 1px solid rgba(0,0,0,0.05);
          position: sticky;
          top: 0;
          z-index: 100;
          box-shadow: var(--shadow-sm);
        }
        
        .premium-toolbar-inner {
          max-width: 1400px;
          margin: 0 auto;
          padding: 1rem 2rem;
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
        }
        
        .premium-search-wrapper {
          flex: 1;
          min-width: 250px;
          max-width: 400px;
        }
        
        .premium-search {
          display: flex;
          align-items: center;
          background: var(--gray-100);
          border: 2px solid transparent;
          border-radius: 60px;
          overflow: hidden;
          transition: all 0.3s ease;
        }
        
        .premium-search:focus-within {
          border-color: var(--primary);
          background: white;
          box-shadow: 0 0 0 4px rgba(61,82,160,0.1);
        }
        
        .premium-search-input {
          flex: 1;
          padding: 0.85rem 1.25rem;
          border: none;
          outline: none;
          font-size: 0.9rem;
          background: transparent;
          font-family: var(--font-primary);
        }
        
        .premium-search-icon {
          padding: 0 1.25rem;
          color: var(--gray-500);
        }
        
        .premium-filter-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 0.7rem 1.5rem;
          background: white;
          border: 2px solid var(--gray-200);
          border-radius: 60px;
          font-size: 0.85rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          color: var(--gray-700);
        }
        
        .premium-filter-btn:hover,
        .premium-filter-btn.active {
          border-color: var(--primary);
          color: var(--primary);
          background: rgba(61,82,160,0.05);
        }
        
        .premium-filter-badge {
          background: var(--primary);
          color: white;
          font-size: 0.7rem;
          padding: 2px 8px;
          border-radius: 20px;
        }
        
        .premium-sort-select {
          padding: 0.7rem 1.25rem;
          border: 2px solid var(--gray-200);
          border-radius: 60px;
          background: white;
          font-size: 0.85rem;
          font-family: var(--font-primary);
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .premium-sort-select:focus {
          border-color: var(--primary);
          outline: none;
        }
        
        .premium-view-toggles {
          display: flex;
          background: var(--gray-100);
          border-radius: 60px;
          padding: 4px;
        }
        
        .premium-view-btn {
          padding: 0.5rem 1rem;
          border: none;
          background: transparent;
          border-radius: 40px;
          cursor: pointer;
          transition: all 0.3s ease;
          color: var(--gray-600);
        }
        
        .premium-view-btn.active {
          background: var(--primary);
          color: white;
        }
        
        .premium-results-count {
          margin-left: auto;
          font-size: 0.85rem;
          color: var(--gray-600);
          white-space: nowrap;
        }
        
        .premium-results-count strong {
          color: var(--primary);
          font-size: 1.1rem;
        }
        
        /* Premium Layout */
        .premium-layout {
          display: flex;
          max-width: 1400px;
          margin: 2rem auto;
          padding: 0 2rem;
          gap: 2rem;
          align-items: flex-start;
          min-height: 60vh;
        }
        
        /* Premium Sidebar */
        .premium-sidebar {
          width: 300px;
          flex-shrink: 0;
          background: white;
          border-radius: 28px;
          box-shadow: var(--shadow-md);
          position: sticky;
          top: 100px;
          overflow: hidden;
          transition: all 0.3s ease;
        }
        
        .premium-sidebar-header {
          padding: 1.5rem;
          border-bottom: 1px solid var(--gray-200);
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        
        .premium-sidebar-title {
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--dark);
        }
        
        .premium-reset-btn {
          display: flex;
          align-items: center;
          gap: 4px;
          background: none;
          border: none;
          color: var(--accent);
          font-size: 0.8rem;
          font-weight: 600;
          cursor: pointer;
          transition: opacity 0.3s ease;
        }
        
        .premium-reset-btn:hover {
          opacity: 0.8;
        }
        
        .premium-sidebar-section {
          padding: 1.25rem 1.5rem;
          border-bottom: 1px solid var(--gray-200);
        }
        
        .premium-sidebar-section:last-child {
          border-bottom: none;
        }
        
        .premium-sidebar-label {
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--gray-500);
          margin-bottom: 1rem;
        }
        
        /* Price Range */
        .premium-price-display {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--primary);
          margin-bottom: 1rem;
        }
        
        .premium-slider {
          width: 100%;
          height: 4px;
          border-radius: 4px;
          background: var(--gray-200);
          outline: none;
          -webkit-appearance: none;
        }
        
        .premium-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: var(--primary);
          border: 3px solid white;
          box-shadow: var(--shadow-md);
          cursor: pointer;
        }
        
        /* Chips */
        .premium-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        
        .premium-chip {
          padding: 6px 16px;
          border-radius: 40px;
          border: 1.5px solid var(--gray-200);
          background: white;
          font-size: 0.8rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          color: var(--gray-700);
        }
        
        .premium-chip:hover {
          border-color: var(--primary);
          color: var(--primary);
        }
        
        .premium-chip.active {
          background: var(--primary);
          border-color: var(--primary);
          color: white;
        }
        
        /* Rating Options */
        .premium-rating-opts {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        
        .premium-rating-opt {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 8px 0;
          cursor: pointer;
          font-size: 0.85rem;
          color: var(--gray-700);
          transition: color 0.3s ease;
        }
        
        .premium-rating-opt:hover,
        .premium-rating-opt.active {
          color: var(--primary);
          font-weight: 600;
        }
        
        .premium-rating-stars {
          color: #FFD700;
        }
        
        .premium-radio {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          border: 2px solid var(--gray-300);
          margin-left: auto;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .premium-radio.active {
          border-color: var(--primary);
        }
        
        .premium-radio.active::after {
          content: '';
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--primary);
        }
        
        /* Premium Grid Cards */
        .premium-grid-card {
          background: white;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: var(--shadow-md);
          transition: all 0.4s cubic-bezier(0.2, 0.9, 0.4, 1.1);
          height: 100%;
          display: flex;
          flex-direction: column;
        }
        
        .premium-grid-card:hover {
          transform: translateY(-8px);
          box-shadow: var(--shadow-xl);
        }
        
        .premium-card-image {
          position: relative;
          height: 260px;
          overflow: hidden;
        }
        
        .premium-card-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.2, 0.9, 0.4, 1.1);
        }
        
        .premium-grid-card:hover .premium-card-image img {
          transform: scale(1.08);
        }
        
        .premium-card-badge {
          position: absolute;
          top: 1rem;
          left: 1rem;
          background: var(--primary);
          color: white;
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 0.7rem;
          font-weight: 600;
          z-index: 2;
        }
        
        .premium-card-favorite {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: rgba(255,255,255,0.9);
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          z-index: 2;
        }
        
        .premium-card-favorite:hover {
          transform: scale(1.1);
        }
        
        .premium-card-favorite.active {
          background: var(--accent);
          color: white;
        }
        
        .premium-card-content {
          padding: 1.5rem;
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        
        .premium-card-location {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 0.75rem;
          color: var(--gray-500);
          margin-bottom: 8px;
        }
        
        .premium-card-title {
          font-family: var(--font-display);
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--dark);
          margin-bottom: 12px;
          line-height: 1.3;
        }
        
        .premium-card-desc {
          font-size: 0.85rem;
          color: var(--gray-600);
          line-height: 1.5;
          margin-bottom: 16px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .premium-card-meta {
          display: flex;
          gap: 16px;
          margin-bottom: 16px;
          flex-wrap: wrap;
        }
        
        .premium-card-meta-item {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 0.75rem;
          color: var(--gray-600);
        }
        
        .premium-card-rating {
          display: flex;
          align-items: center;
          gap: 6px;
          margin-bottom: 16px;
        }
        
        .premium-card-stars {
          display: flex;
          gap: 2px;
          color: #FFD700;
        }
        
        .premium-card-review {
          font-size: 0.75rem;
          color: var(--gray-500);
        }
        
        .premium-card-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: auto;
          padding-top: 16px;
          border-top: 1px solid var(--gray-200);
        }
        
        .premium-card-price {
          display: flex;
          flex-direction: column;
        }
        
        .premium-card-price-amount {
          font-family: var(--font-display);
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--primary);
        }
        
        .premium-card-price-per {
          font-size: 0.7rem;
          color: var(--gray-500);
        }
        
        .premium-card-link {
          background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
          color: white;
          padding: 8px 20px;
          border-radius: 40px;
          text-decoration: none;
          font-size: 0.85rem;
          font-weight: 600;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        
        .premium-card-link:hover {
          transform: translateX(4px);
          background: linear-gradient(135deg, var(--primary-dark) 0%, var(--primary) 100%);
          color: white;
        }
        
        /* List View */
        .premium-list-card {
          display: flex;
          background: white;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: var(--shadow-md);
          margin-bottom: 1.5rem;
          transition: all 0.4s ease;
        }
        
        .premium-list-card:hover {
          transform: translateX(6px);
          box-shadow: var(--shadow-lg);
        }
        
        .premium-list-image {
          width: 280px;
          flex-shrink: 0;
          position: relative;
          overflow: hidden;
        }
        
        .premium-list-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }
        
        .premium-list-card:hover .premium-list-image img {
          transform: scale(1.05);
        }
        
        .premium-list-content {
          flex: 1;
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
        }
        
        .premium-list-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 12px;
        }
        
        .premium-list-title {
          font-family: var(--font-display);
          font-size: 1.35rem;
          font-weight: 700;
          color: var(--dark);
        }
        
        .premium-list-rating {
          display: flex;
          align-items: center;
          gap: 6px;
          background: rgba(255,215,0,0.1);
          padding: 4px 12px;
          border-radius: 20px;
        }
        
        .premium-list-meta {
          display: flex;
          gap: 20px;
          margin-bottom: 12px;
          flex-wrap: wrap;
        }
        
        .premium-list-desc {
          font-size: 0.85rem;
          color: var(--gray-600);
          line-height: 1.6;
          margin-bottom: 16px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .premium-list-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: auto;
        }
        
        .premium-list-price {
          font-family: var(--font-display);
          font-size: 1.75rem;
          font-weight: 800;
          color: var(--primary);
        }
        
        /* Empty State */
        .premium-empty {
          text-align: center;
          padding: 5rem 2rem;
          background: white;
          border-radius: 28px;
        }
        
        .premium-empty-icon {
          font-size: 5rem;
          margin-bottom: 1.5rem;
          opacity: 0.5;
        }
        
        .premium-empty-title {
          font-family: var(--font-display);
          font-size: 1.75rem;
          font-weight: 700;
          color: var(--dark);
          margin-bottom: 0.5rem;
        }
        
        .premium-empty-sub {
          color: var(--gray-500);
          margin-bottom: 2rem;
        }
        
        .premium-empty-btn {
          background: var(--primary);
          color: white;
          padding: 0.85rem 2rem;
          border: none;
          border-radius: 60px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .premium-empty-btn:hover {
          background: var(--primary-dark);
          transform: translateY(-2px);
        }
        
        /* Contact Section */
        .premium-contact {
          padding: 5rem 2rem;
          text-align: center;
          color: white;
          background-size: cover;
          background-position: center;
          position: relative;
        }
        
        .premium-contact::before {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.7);
        }
        
        .premium-contact > * {
          position: relative;
          z-index: 1;
        }
        
        .premium-contact-title {
          font-family: var(--font-display);
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }
        
        .premium-contact-sub {
          opacity: 0.85;
          margin-bottom: 2rem;
        }
        
        .premium-contact-row {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          flex-wrap: wrap;
        }
        
        .premium-contact-item {
          display: flex;
          align-items: center;
          gap: 10px;
          background: rgba(255,255,255,0.12);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.2);
          padding: 0.75rem 1.75rem;
          border-radius: 60px;
          font-size: 0.9rem;
          font-weight: 500;
          text-decoration: none;
          color: white;
          transition: all 0.3s ease;
        }
        
        .premium-contact-item:hover {
          background: rgba(255,255,255,0.25);
          transform: translateY(-2px);
        }
        
        /* Scroll to Top */
        .premium-scroll-top {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          border: none;
          background: var(--primary);
          color: white;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          z-index: 200;
          box-shadow: var(--shadow-lg);
        }
        
        .premium-scroll-top:hover {
          transform: translateY(-5px);
          background: var(--primary-dark);
        }
        
        /* Mobile Sidebar */
        .premium-sidebar-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.5);
          backdrop-filter: blur(4px);
          z-index: 300;
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
        }
        
        .premium-sidebar-overlay.open {
          opacity: 1;
          visibility: visible;
        }
        
        .premium-sidebar-drawer {
          position: fixed;
          top: 0;
          left: 0;
          bottom: 0;
          width: 85%;
          max-width: 320px;
          background: white;
          z-index: 301;
          transform: translateX(-100%);
          transition: transform 0.4s cubic-bezier(0.2, 0.9, 0.4, 1.1);
          overflow-y: auto;
        }
        
        .premium-sidebar-drawer.open {
          transform: translateX(0);
        }
        
        /* Responsive */
        @media (max-width: 1200px) {
          .premium-layout {
            padding: 0 1.5rem;
          }
        }
        
        @media (max-width: 992px) {
          .premium-sidebar {
            display: none;
          }
          
          .premium-list-image {
            width: 200px;
          }
        }
        
        @media (max-width: 768px) {
          .premium-hero-content {
            padding: 4rem 1.5rem;
          }
          
          .premium-hero-right {
            position: static;
            margin-top: 2rem;
            align-items: flex-start;
          }
          
          .premium-toolbar-inner {
            padding: 0.75rem 1rem;
          }
          
          .premium-layout {
            padding: 0 1rem;
            margin: 1rem auto;
          }
          
          .premium-list-card {
            flex-direction: column;
          }
          
          .premium-list-image {
            width: 100%;
            height: 200px;
          }
          
          .premium-results-count {
            display: none;
          }
        }
        
        @media (max-width: 576px) {
          .premium-hero-stats {
            gap: 1rem;
          }
          
          .premium-hero-stat-number {
            font-size: 1.5rem;
          }
        }
      `}</style>

      {/* <Header /> */}

      {/* Premium Hero Section */}
      <section className="premium-hero">
        <div
          className="premium-hero-bg"
          style={{ background: `${meta.grad}, url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1600&q=80') center/cover no-repeat`, backgroundBlendMode: 'overlay' }}
        />
        <div className="premium-hero-overlay" />
        <div className="premium-hero-content">
          <div className="premium-hero-badge">
            <span>{meta.icon}</span>
            <span>DesiVDesi Tours</span>
            <span>›</span>
            <span>{meta.title}</span>
          </div>
          <h1 className="premium-hero-title">{meta.title}</h1>
          <p className="premium-hero-desc">{meta.desc}</p>
          <div className="premium-hero-stats">
            <div className="premium-hero-stat">
              <div className="premium-hero-stat-number">{resultsCount}+</div>
              <div className="premium-hero-stat-label">Experiences</div>
            </div>
            <div className="premium-hero-stat">
              <div className="premium-hero-stat-number">4.9</div>
              <div className="premium-hero-stat-label">Rating</div>
            </div>
            <div className="premium-hero-stat">
              <div className="premium-hero-stat-number">5k+</div>
              <div className="premium-hero-stat-label">Travelers</div>
            </div>
          </div>
        </div>
        <div className="premium-hero-right">
          <EnhancedWeatherWidget destination={activeDestination} />
          <DynamicPricingWidget multiplier={multiplier} trend={trend} />
        </div>
      </section>

      {/* Premium Toolbar */}
      <div className="premium-toolbar">
        <div className="premium-toolbar-inner">
          <div className="premium-search-wrapper">
            <div className="premium-search">
              <input
                type="text"
                className="premium-search-input"
                placeholder={`Search ${meta.title.toLowerCase()}...`}
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
              />
              <div className="premium-search-icon"><FaSearch size={14} /></div>
            </div>
          </div>

          <button
            className={`premium-filter-btn ${hasActiveFilters ? 'active' : ''}`}
            onClick={() => setSidebarOpen(true)}
          >
            <FaFilter size={12} />
            Filters
            {hasActiveFilters && <span className="premium-filter-badge">!</span>}
          </button>

          <select className="premium-sort-select" value={sortBy} onChange={e => setSortBy(e.target.value)}>
            {SORT_OPTIONS.map(opt => (
              <option key={opt.value} value={opt.value}>{opt.icon} {opt.label}</option>
            ))}
          </select>

          <div className="premium-view-toggles">
            <button className={`premium-view-btn ${viewMode === 'grid' ? 'active' : ''}`} onClick={() => setViewMode('grid')}>
              <FaThLarge size={14} />
            </button>
            <button className={`premium-view-btn ${viewMode === 'list' ? 'active' : ''}`} onClick={() => setViewMode('list')}>
              <FaList size={14} />
            </button>
          </div>

          <div className="premium-results-count">
            <strong>{resultsCount}</strong> {resultsCount === 1 ? 'package' : 'packages'} found
          </div>
        </div>
      </div>

      {/* Main Layout */}
      <div className="premium-layout">
        {/* Desktop Sidebar */}
        <aside className="premium-sidebar">
          <div className="premium-sidebar-header">
            <span className="premium-sidebar-title">Filters</span>
            {hasActiveFilters && (
              <button className="premium-reset-btn" onClick={resetFilters}>
                <FaTimes size={10} /> Reset
              </button>
            )}
          </div>

          <div className="premium-sidebar-section">
            <div className="premium-sidebar-label">Price Range</div>
            <div className="premium-price-display">{priceRangeText}</div>
            <input
              type="range"
              className="premium-slider"
              min={0}
              max={100000}
              step={1000}
              value={priceRangeValue}
              onChange={e => setPriceRangeValue(Number(e.target.value))}
            />
          </div>

          <div className="premium-sidebar-section">
            <div className="premium-sidebar-label">Duration</div>
            <div className="premium-chips">
              {DURATION_OPTIONS.map(opt => (
                <button
                  key={opt.value}
                  className={`premium-chip ${selectedDuration === opt.value ? 'active' : ''}`}
                  onClick={() => setSelectedDuration(opt.value)}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          <div className="premium-sidebar-section">
            <div className="premium-sidebar-label">Minimum Rating</div>
            <div className="premium-rating-opts">
              {[0, 3, 4, 4.5, 5].map(r => (
                <button
                  key={r}
                  className={`premium-rating-opt ${selectedRating === r ? 'active' : ''}`}
                  onClick={() => setSelectedRating(r)}
                >
                  {r === 0 ? 'Any rating' : (
                    <>
                      <span className="premium-rating-stars">{'★'.repeat(Math.floor(r))}{r % 1 ? '½' : ''}</span>
                      <span>{r}+ stars</span>
                    </>
                  )}
                  <div className={`premium-radio ${selectedRating === r ? 'active' : ''}`} />
                </button>
              ))}
            </div>
          </div>

          <div className="premium-sidebar-section">
            <div className="premium-sidebar-label">Tour Features</div>
            <div className="premium-chips">
              {meta.features?.map(feature => (
                <span key={feature} className="premium-chip" style={{ cursor: 'default' }}>
                  {feature}
                </span>
              ))}
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="premium-main flex-grow-1" ref={packagesRef}>
          {loading ? (
            <div className="row g-4">
              {[1,2,3,4,5,6].map(i => <PremiumSkeletonCard key={i} />)}
            </div>
          ) : filteredPackages.length > 0 ? (
            viewMode === 'grid' ? (
              <div className="row g-4">
                {filteredPackages.map((pkg, i) => (
                  <div className="col-xl-4 col-lg-4 col-md-6" key={pkg._id || i}>
                    <div className="premium-grid-card">
                      <div className="premium-card-image">
                        <img
                          src={pkg.images?.[0] || pkg.image || 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600&q=80'}
                          alt={pkg.title}
                          onError={e => e.target.src = 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600&q=80'}
                        />
                        <div className="premium-card-badge">{meta.title}</div>
                        <div 
                          className={`premium-card-favorite ${favorites.includes(pkg._id) ? 'active' : ''}`}
                          onClick={() => toggleFavorite(pkg._id)}
                        >
                          <FaHeart size={16} />
                        </div>
                      </div>
                      <div className="premium-card-content">
                        <div className="premium-card-location">
                          <FaMapMarkerAlt size={10} />
                          <span>{pkg.location || 'Multiple Locations'}</span>
                        </div>
                        <h3 className="premium-card-title">{pkg.title}</h3>
                        <p className="premium-card-desc">{pkg.description || 'Experience an unforgettable journey with expert guides and premium accommodations.'}</p>
                        <div className="premium-card-meta">
                          <div className="premium-card-meta-item">
                            <FaClock size={11} />
                            <span>{pkg.duration || '7 Days'}</span>
                          </div>
                          <div className="premium-card-meta-item">
                            <FaUsers size={11} />
                            <span>Max {pkg.groupSize || 15}</span>
                          </div>
                        </div>
                        <div className="premium-card-rating">
                          <div className="premium-card-stars">
                            {[...Array(5)].map((_, idx) => (
                              <FaStar key={idx} size={12} color={idx < Math.floor(pkg.rating || 4.5) ? '#FFD700' : '#E0E0E0'} />
                            ))}
                          </div>
                          <span className="premium-card-review">{pkg.rating || 4.8} ({pkg.reviews || 128} reviews)</span>
                        </div>
                        <div className="premium-card-footer">
                          <div className="premium-card-price">
                            <span className="premium-card-price-amount">₹{(pkg.price || 4999).toLocaleString()}</span>
                            <span className="premium-card-price-per">per person</span>
                          </div>
                          <Link to={`/package/${packageType}/${pkg.location?.toLowerCase().replace(/ /g, "-") || pkg._id}`} className="premium-card-link">
                            View Details <FaArrowRight size={10} />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div>
                {filteredPackages.map((pkg, i) => (
                  <div key={pkg._id || i} className="premium-list-card">
                    <div className="premium-list-image">
                      <img
                        src={pkg.images?.[0] || pkg.image || 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600&q=80'}
                        alt={pkg.title}
                        onError={e => e.target.src = 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600&q=80'}
                      />
                      <div className="premium-card-badge">{meta.title}</div>
                    </div>
                    <div className="premium-list-content">
                      <div className="premium-list-header">
                        <div>
                          <div className="premium-card-location" style={{ marginBottom: 4 }}>
                            <FaMapMarkerAlt size={10} />
                            <span>{pkg.location || 'Multiple Locations'}</span>
                          </div>
                          <h3 className="premium-list-title">{pkg.title}</h3>
                        </div>
                        <div className="premium-list-rating">
                          <FaStar size={12} color="#FFD700" />
                          <span style={{ fontWeight: 600 }}>{pkg.rating || 4.8}</span>
                          <span style={{ fontSize: '0.7rem', color: '#666' }}>({pkg.reviews || 128})</span>
                        </div>
                      </div>
                      <div className="premium-list-meta">
                        <div className="premium-card-meta-item">
                          <FaClock size={11} />
                          <span>{pkg.duration || '7 Days'}</span>
                        </div>
                        <div className="premium-card-meta-item">
                          <FaUsers size={11} />
                          <span>Max {pkg.groupSize || 15}</span>
                        </div>
                      </div>
                      <p className="premium-list-desc">{pkg.description || 'Experience an unforgettable journey with expert guides and premium accommodations.'}</p>
                      <div className="premium-list-footer">
                        <div className="premium-list-price">₹{(pkg.price || 4999).toLocaleString()}</div>
                        <Link to={`/package/${packageType}/${pkg.location?.toLowerCase().replace(/ /g, "-") || pkg._id}`} className="premium-card-link">
                          View Details <FaArrowRight size={10} />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )
          ) : (
            <div className="premium-empty">
              <div className="premium-empty-icon">🔍</div>
              <h2 className="premium-empty-title">No packages found</h2>
              <p className="premium-empty-sub">Try adjusting your filters or search term.</p>
              <button className="premium-empty-btn" onClick={resetFilters}>Clear All Filters</button>
            </div>
          )}
        </main>
      </div>

      {/* Contact Section */}
      <section className="premium-contact" style={{ background: meta.grad }}>
        <h2 className="premium-contact-title">Need Help Planning?</h2>
        <p className="premium-contact-sub">Our travel experts are available 24/7 to craft your perfect {meta.title.toLowerCase()}.</p>
        <div className="premium-contact-row">
          <a href="tel:+917888251550" className="premium-contact-item"><FaPhone size={14} /> +91 78882 51550</a>
          <a href="https://wa.me/917888251550" target="_blank" rel="noreferrer" className="premium-contact-item"><FaWhatsapp size={14} /> WhatsApp Us</a>
          <a href="mailto:tours.desivdesi@gmail.com" className="premium-contact-item"><FaEnvelope size={14} /> Email Us</a>
        </div>
      </section>

      {/* Mobile Sidebar Drawer */}
      <div className={`premium-sidebar-overlay ${sidebarOpen ? 'open' : ''}`} onClick={() => setSidebarOpen(false)} />
      <div className={`premium-sidebar-drawer ${sidebarOpen ? 'open' : ''}`}>
        <div className="premium-sidebar-header">
          <span className="premium-sidebar-title">Filters</span>
          <div style={{ display: 'flex', gap: 12 }}>
            {hasActiveFilters && (
              <button className="premium-reset-btn" onClick={resetFilters}>
                <FaTimes size={10} /> Reset
              </button>
            )}
            <button onClick={() => setSidebarOpen(false)} style={{ background: 'none', border: 'none', fontSize: '1.2rem', cursor: 'pointer' }}>✕</button>
          </div>
        </div>
        
        <div className="premium-sidebar-section">
          <div className="premium-sidebar-label">Price Range</div>
          <div className="premium-price-display">{priceRangeText}</div>
          <input type="range" className="premium-slider" min={0} max={100000} step={1000} value={priceRangeValue} onChange={e => setPriceRangeValue(Number(e.target.value))} />
        </div>
        
        <div className="premium-sidebar-section">
          <div className="premium-sidebar-label">Duration</div>
          <div className="premium-chips">
            {DURATION_OPTIONS.map(opt => (
              <button key={opt.value} className={`premium-chip ${selectedDuration === opt.value ? 'active' : ''}`} onClick={() => setSelectedDuration(opt.value)}>
                {opt.label}
              </button>
            ))}
          </div>
        </div>
        
        <div className="premium-sidebar-section">
          <div className="premium-sidebar-label">Minimum Rating</div>
          <div className="premium-rating-opts">
            {[0, 3, 4, 4.5, 5].map(r => (
              <button key={r} className={`premium-rating-opt ${selectedRating === r ? 'active' : ''}`} onClick={() => setSelectedRating(r)}>
                {r === 0 ? 'Any rating' : <><span className="premium-rating-stars">{'★'.repeat(Math.floor(r))}</span><span>{r}+ stars</span></>}
                <div className={`premium-radio ${selectedRating === r ? 'active' : ''}`} />
              </button>
            ))}
          </div>
        </div>
        
        <div style={{ padding: '1.25rem 1.5rem' }}>
          <button onClick={() => setSidebarOpen(false)} style={{ width: '100%', padding: '0.85rem', borderRadius: 60, border: 'none', background: meta.grad, color: 'white', fontWeight: 700, cursor: 'pointer' }}>
            Show {resultsCount} Results
          </button>
        </div>
      </div>

      {/* Scroll to Top */}
      {showScrollTop && (
        <button className="premium-scroll-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <FaArrowUp size={18} />
        </button>
      )}
    </>
  );
};

// ── Dynamic pricing hook (kept from original) ──────────────────────────────────────────────
const useDynamicPricing = () => {
  const [multiplier, setMultiplier] = useState(1);
  const [trend, setTrend] = useState('stable');
  useEffect(() => {
    const interval = setInterval(() => {
      const change = (Math.random() - 0.48) * 0.05;
      setMultiplier(prev => {
        const next = Math.max(0.85, Math.min(1.25, prev + change));
        setTrend(next > prev ? 'rising' : next < prev ? 'falling' : 'stable');
        return next;
      });
    }, 12000);
    return () => clearInterval(interval);
  }, []);
  return { multiplier, trend };
};

export default BaseTourPage;