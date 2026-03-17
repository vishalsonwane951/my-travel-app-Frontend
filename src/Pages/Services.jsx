import React, { useState, useRef, useEffect, useCallback, useMemo, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../Components/Header/Header';
import PackageContext from '../Context/PackageContext';

// ── Real-time counters (simulated live data) ──────────────────────────────────
const useCountUp = (target, duration = 2000, startOnVisible = true) => {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(!startOnVisible);
  const ref = useRef(null);

  useEffect(() => {
    if (!startOnVisible) { setStarted(true); return; }
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setStarted(true); }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [startOnVisible]);

  useEffect(() => {
    if (!started) return;
    let start = null;
    const step = (ts) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started, target, duration]);

  return [count, ref];
};

const useLiveBookings = () => {
  const [count, setCount] = useState(247);
  useEffect(() => {
    const interval = setInterval(() => {
      setCount(c => c + Math.floor(Math.random() * 3));
    }, 8000);
    return () => clearInterval(interval);
  }, []);
  return count;
};

// ── Tour data ──────────────────────────────────────────────────────────────────
const TOUR_PACKAGES = [
  {
    id: 1, title: "Custom Tours", type: 'custom-tour',
    icon: "🎨", color: "#FF6B6B", gradFrom: "#FF6B6B", gradTo: "#FF8E53",
    duration: "Flexible", price: "₹12,999", priceNote: "onwards",
    rating: 4.9, reviews: 128, badge: null,
    tagline: "Your Trip, Your Rules!",
    description: "Craft a travel story that's uniquely yours — every detail tailored to your preferences.",
    features: ["Tailor-Made Itineraries", "Flexible Scheduling", "Exclusive Experiences", "Handpicked Stays", "Local Expertise", "Your Budget, Your Way"],
    seatsLeft: 12,
  },
  {
    id: 2, title: "Adventure Tours", type: 'adventure-tour',
    icon: "🏔️", color: "#4ECDC4", gradFrom: "#4ECDC4", gradTo: "#2C3E50",
    duration: "5–14 Days", price: "₹18,999", priceNote: "per person",
    rating: 4.8, reviews: 256, badge: "🔥 Most Popular",
    tagline: "Feel the Rush!",
    description: "Dare to explore the wild side of life with heart-pumping adventures in stunning landscapes.",
    features: ["Thrilling Activities", "Professional Guides", "Stunning Landscapes", "Challenging Trails", "Group Adventures", "Safety Gear Included"],
    seatsLeft: 5,
  },
  {
    id: 3, title: "Family Tours", type: 'family-tour',
    icon: "👨‍👩‍👧‍👦", color: "#FFB347", gradFrom: "#FFE66D", gradTo: "#FFB347",
    duration: "7–21 Days", price: "₹15,999", priceNote: "per person",
    rating: 4.9, reviews: 312, badge: null,
    tagline: "Together We Travel!",
    description: "Perfect memories for every generation — safe, fun, and stress-free journeys for the whole family.",
    features: ["Kid-Friendly Activities", "Comfortable Stays", "Safe Travel", "Meal Plans", "Guided Sightseeing", "24/7 Assistance"],
    seatsLeft: 18,
  },
  {
    id: 4, title: "Group Tours", type: 'group-tour',
    icon: "🚌", color: "#A37BFF", gradFrom: "#A37BFF", gradTo: "#6B4EFF",
    duration: "4–10 Days", price: "₹8,999", priceNote: "per person",
    rating: 4.7, reviews: 189, badge: "💰 Best Value",
    tagline: "More People, More Fun!",
    description: "Travel together, laugh louder, bond stronger — incredible experiences shared with amazing people.",
    features: ["Fun With Friends", "Pre-Planned Itineraries", "Great Discounts", "Team Bonding", "Group Transport", "Dedicated Manager"],
    seatsLeft: 24,
  },
  {
    id: 5, title: "City Tours", type: 'city-tour',
    icon: "🌆", color: "#FF9F1C", gradFrom: "#FF9F1C", gradTo: "#FCCF31",
    duration: "1–3 Days", price: "₹3,999", priceNote: "per person",
    rating: 4.6, reviews: 445, badge: null,
    tagline: "Discover the City's Soul!",
    description: "Explore iconic landmarks, hidden alleys, street food, and shopping in the world's best cities.",
    features: ["Iconic Landmarks", "Local Street Food", "Shopping Hotspots", "Guided Tours", "Flexible Timings", "Photo Stops"],
    seatsLeft: 30,
  },
  {
    id: 6, title: "Honeymoon Tours", type: 'honeymoon-tour',
    icon: "💑", color: "#FF6EB4", gradFrom: "#FF6EB4", gradTo: "#FF9A9E",
    duration: "5–10 Days", price: "₹24,999", priceNote: "per couple",
    rating: 5.0, reviews: 203, badge: "✨ New",
    tagline: "Love in Every Moment!",
    description: "Romantic escapes crafted for two — candlelit dinners, private beaches, luxury stays, and forever memories.",
    features: ["Romantic Packages", "Private Transfers", "Couple Spa", "Candlelit Dinners", "Luxury Hotels", "Surprise Add-ons"],
    seatsLeft: 8,
  },
  {
    id: 7, title: "Weekend Getaways", type: 'weekend-getaway',
    icon: "🌅", color: "#5BC0EB", gradFrom: "#5BC0EB", gradTo: "#0353A4",
    duration: "2–3 Days", price: "₹4,999", priceNote: "per person",
    rating: 4.7, reviews: 167, badge: "✨ New",
    tagline: "Escape the Grind!",
    description: "Quick, refreshing escapes from the hustle — perfectly planned for your precious weekend.",
    features: ["Quick Escapes", "Nearby Destinations", "Hassle-free Planning", "Comfortable Hotels", "Guided Activities", "Flexible Dates"],
    seatsLeft: 20,
  },
  {
    id: 8, title: "Luxury Tours", type: 'luxury-tour',
    icon: "💎", color: "#C9A84C", gradFrom: "#C9A84C", gradTo: "#8B6914",
    duration: "7–14 Days", price: "₹49,999", priceNote: "per person",
    rating: 5.0, reviews: 94, badge: "👑 Premium",
    tagline: "Travel Like Royalty!",
    description: "Five-star experiences, private jets, butler service, and the world's most exclusive destinations.",
    features: ["5-Star Hotels", "Private Transfers", "Personal Butler", "Fine Dining", "VIP Experiences", "24/7 Concierge"],
    seatsLeft: 4,
  },
  {
    id: 9, title: "Pilgrimage Tours", type: 'pilgrimage-tour',
    icon: "🕌", color: "#7BAE7F", gradFrom: "#7BAE7F", gradTo: "#4A7C59",
    duration: "5–15 Days", price: "₹9,999", priceNote: "per person",
    rating: 4.8, reviews: 321, badge: "✨ New",
    tagline: "A Journey of the Soul!",
    description: "Sacred journeys to holy sites across India and beyond — peaceful, organized, spiritually enriching.",
    features: ["Sacred Sites", "Puja Arrangements", "Experienced Guides", "Comfortable Stays", "Vegetarian Meals", "Group Prayers"],
    seatsLeft: 16,
  },
];

const DESTINATIONS = [
  { img: "https://images.unsplash.com/photo-1544015759-237f43ca3d53?w=600&q=80", title: "Goa", tag: "Beach Paradise", price: "₹8,999" },
  { img: "https://images.unsplash.com/photo-1477587458883-47145ed31d27?w=600&q=80", title: "Kerala", tag: "God's Own Country", price: "₹12,499" },
  { img: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600&q=80", title: "Rajasthan", tag: "Land of Kings", price: "₹14,999" },
  { img: "https://images.unsplash.com/photo-1506038634487-60a69ae4b7b1?w=600&q=80", title: "Manali", tag: "Snow Adventure", price: "₹11,999" },
  { img: "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=600&q=80", title: "Dubai", tag: "Ultra Luxury", price: "₹42,999" },
  { img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&q=80", title: "Bali", tag: "Island Magic", price: "₹38,999" },
];

const TESTIMONIALS = [
  { name: "Priya Sharma", loc: "Mumbai", img: "https://randomuser.me/api/portraits/women/44.jpg", text: "DesiVDesi made our honeymoon absolutely magical! Every detail was perfect — from the hotel to the sunset cruise. We're already planning our anniversary trip with them!", rating: 5, tour: "Honeymoon Tour" },
  { name: "Rahul Mehta", loc: "Bangalore", img: "https://randomuser.me/api/portraits/men/32.jpg", text: "The Manali adventure tour was beyond expectations. The guides were knowledgeable, safety was top-notch, and the experiences were genuinely thrilling. 10/10 would recommend!", rating: 5, tour: "Adventure Tour" },
  { name: "Ananya Iyer", loc: "Chennai", img: "https://randomuser.me/api/portraits/women/63.jpg", text: "Our family Rajasthan trip was seamless — kids loved every moment and we didn't have to worry about a single thing. Best travel investment we've made!", rating: 5, tour: "Family Tour" },
  { name: "Vikram Patel", loc: "Ahmedabad", img: "https://randomuser.me/api/portraits/men/45.jpg", text: "The Varanasi pilgrimage tour was spiritually transformative. Incredibly organized, deeply moving, and handled with so much care and respect.", rating: 5, tour: "Pilgrimage Tour" },
];

const WHY_US = [
  { icon: "🛡️", title: "Fully Insured", desc: "Every trip covered with comprehensive travel insurance for complete peace of mind." },
  { icon: "⚡", title: "Instant Booking", desc: "Book in under 2 minutes. Instant confirmation, no long wait times." },
  { icon: "🌐", title: "500+ Destinations", desc: "From remote Himalayan villages to luxury European capitals." },
  { icon: "💰", title: "Best Price Guarantee", desc: "Find it cheaper elsewhere? We'll match it and give you ₹500 off." },
  { icon: "🔄", title: "Free Cancellation", desc: "Cancel up to 48 hours before departure for a full refund." },
  { icon: "🎯", title: "Expert Curation", desc: "Every itinerary handcrafted by travel experts with 15+ years experience." },
];

export default function Services() {
  const { setSelectedType } = useContext(PackageContext);
  const navigate = useNavigate();

  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredDest, setHoveredDest] = useState(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [currency, setCurrency] = useState('INR');
  const [searchQuery, setSearchQuery] = useState('');
  const [visibleSections, setVisibleSections] = useState({});

  const liveBookings = useLiveBookings();
  const [happyCount, happyRef] = useCountUp(10482, 2200);
  const [destCount, destRef] = useCountUp(500, 1800);
  const [yearsCount, yearsRef] = useCountUp(15, 1200);
  const [toursCount, toursRef] = useCountUp(2840, 2000);

  // Intersection Observer for section reveals
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) setVisibleSections(prev => ({ ...prev, [e.target.dataset.section]: true }));
      }),
      { threshold: 0.1 }
    );
    document.querySelectorAll('[data-section]').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  // Testimonial auto-rotate
  useEffect(() => {
    const t = setInterval(() => setActiveTestimonial(i => (i + 1) % TESTIMONIALS.length), 5000);
    return () => clearInterval(t);
  }, []);

  const FILTERS = [
    { key: 'all', label: 'All Tours' },
    { key: 'domestic', label: '🇮🇳 Domestic' },
    { key: 'international', label: '🌍 International' },
    { key: 'budget', label: '💰 Budget' },
    { key: 'luxury', label: '👑 Luxury' },
    { key: 'new', label: '✨ New' },
  ];

  const filterMap = {
    domestic: ['city-tour', 'pilgrimage-tour', 'weekend-getaway', 'family-tour'],
    international: ['luxury-tour', 'adventure-tour', 'honeymoon-tour'],
    budget: ['city-tour', 'group-tour', 'weekend-getaway', 'pilgrimage-tour'],
    luxury: ['luxury-tour', 'honeymoon-tour', 'custom-tour'],
    new: ['honeymoon-tour', 'weekend-getaway', 'pilgrimage-tour'],
  };

  const filteredPackages = useMemo(() => {
    let pkgs = TOUR_PACKAGES;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      pkgs = pkgs.filter(p => p.title.toLowerCase().includes(q) || p.description.toLowerCase().includes(q));
    }
    if (activeFilter !== 'all') pkgs = pkgs.filter(p => filterMap[activeFilter]?.includes(p.type));
    return pkgs;
  }, [activeFilter, searchQuery]);

  const handleBook = useCallback((type) => {
    // setSelectedType(type);
    navigate(`/tourcard/${type}`);
    console.log('type',type)
  }, [setSelectedType, navigate]);
  

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;1,400&display=swap');

        :root {
          --gold: #C9A84C;
          --gold-light: #F0D080;
          --navy: #1a1a2e;
          --indigo: #3D52A0;
          --indigo-light: #7091E6;
          --rose: #FF6B6B;
          --teal: #4ECDC4;
          --cream: #FDFAF4;
          --font-display: 'Cormorant Garamond', serif;
          --font-body: 'DM Sans', sans-serif;
          --ease: cubic-bezier(0.4,0,0.2,1);
        }

        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: var(--font-body); color: var(--navy); overflow-x: hidden; }

        /* ── Hero ── */
        .svc-hero {
          min-height: 100vh;
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          overflow: hidden;
          background: var(--navy);
        }
        .svc-hero-bg {
          position: absolute; inset: 0;
          background: url('https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1800&q=85') center/cover no-repeat;
          opacity: 0.35;
        }
        .svc-hero-mesh {
          position: absolute; inset: 0;
          background: radial-gradient(ellipse 80% 60% at 50% 40%, rgba(61,82,160,0.4) 0%, transparent 70%),
                      linear-gradient(180deg, rgba(26,26,46,0.3) 0%, rgba(26,26,46,0.9) 100%);
        }
        .svc-hero-content {
          position: relative; z-index: 2;
          padding: 0 1.5rem;
          max-width: 900px;
        }
        .svc-hero-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(201,168,76,0.15);
          border: 1px solid rgba(201,168,76,0.4);
          color: var(--gold-light);
          font-size: 0.78rem;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          padding: 6px 18px;
          border-radius: 50px;
          margin-bottom: 1.75rem;
          animation: dvdFadeUp 0.8s var(--ease) both;
        }
        .svc-hero-title {
          font-family: var(--font-display);
          font-size: clamp(3rem, 8vw, 6rem);
          font-weight: 700;
          color: white;
          line-height: 1.05;
          margin-bottom: 1.25rem;
          animation: dvdFadeUp 0.8s 0.15s var(--ease) both;
        }
        .svc-hero-title .gold { color: var(--gold-light); }
        .svc-hero-title .italic { font-style: italic; }
        .svc-hero-sub {
          font-size: clamp(1rem, 2.5vw, 1.2rem);
          color: rgba(255,255,255,0.8);
          max-width: 600px;
          margin: 0 auto 2.5rem;
          line-height: 1.7;
          animation: dvdFadeUp 0.8s 0.3s var(--ease) both;
        }
        .svc-hero-search {
          display: flex;
          background: white;
          border-radius: 16px;
          overflow: hidden;
          max-width: 580px;
          width: 100%;
          margin: 0 auto 2rem;
          box-shadow: 0 30px 60px rgba(0,0,0,0.35);
          animation: dvdFadeUp 0.8s 0.45s var(--ease) both;
        }
        .svc-hero-search input {
          flex: 1; padding: 1rem 1.5rem;
          border: none; outline: none;
          font-size: 1rem; font-family: var(--font-body);
          color: var(--navy);
        }
        .svc-hero-search button {
          padding: 0 1.75rem;
          background: linear-gradient(135deg, var(--indigo), var(--indigo-light));
          border: none; color: white;
          font-size: 0.9rem; font-weight: 600;
          cursor: pointer; font-family: var(--font-body);
          letter-spacing: 0.03em;
          transition: opacity 0.2s;
        }
        .svc-hero-search button:hover { opacity: 0.9; }
        .svc-hero-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          justify-content: center;
          animation: dvdFadeUp 0.8s 0.6s var(--ease) both;
        }
        .svc-hero-pill {
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.2);
          color: rgba(255,255,255,0.9);
          padding: 6px 14px;
          border-radius: 50px;
          font-size: 0.82rem;
          cursor: pointer;
          transition: all 0.25s;
        }
        .svc-hero-pill:hover {
          background: rgba(201,168,76,0.2);
          border-color: var(--gold);
          color: var(--gold-light);
        }
        .svc-live-badge {
          position: absolute;
          bottom: 2.5rem;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(255,255,255,0.08);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.15);
          color: white;
          padding: 10px 24px;
          border-radius: 50px;
          font-size: 0.85rem;
          display: flex;
          align-items: center;
          gap: 10px;
          white-space: nowrap;
          animation: dvdFadeUp 0.8s 0.75s var(--ease) both;
        }
        .svc-live-dot {
          width: 8px; height: 8px;
          background: #4CAF50;
          border-radius: 50%;
          box-shadow: 0 0 0 3px rgba(76,175,80,0.25);
          animation: svc-pulse 2s infinite;
        }
        @keyframes svc-pulse { 0%,100%{box-shadow:0 0 0 3px rgba(76,175,80,0.25)} 50%{box-shadow:0 0 0 6px rgba(76,175,80,0.1)} }

        .svc-hero-scroll {
          position: absolute; bottom: 2.5rem; right: 2.5rem;
          display: flex; flex-direction: column;
          align-items: center; gap: 6px;
          color: rgba(255,255,255,0.5);
          font-size: 0.72rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }
        .svc-scroll-line {
          width: 1px; height: 40px;
          background: linear-gradient(to bottom, rgba(255,255,255,0.5), transparent);
          animation: dvdScrollLine 1.5s ease-in-out infinite;
        }
        @keyframes dvdScrollLine { 0%,100%{transform:scaleY(1);opacity:1} 50%{transform:scaleY(0.5);opacity:0.4} }

        /* ── Stats Bar ── */
        .svc-stats {
          background: white;
          padding: 3.5rem 2rem;
          border-bottom: 1px solid #f0f0f8;
        }
        .svc-stats-grid {
          max-width: 1100px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
        }
        .svc-stat-item {
          text-align: center;
          padding: 1.5rem;
          border-radius: 16px;
          background: #fafbff;
          border: 1px solid #eef0ff;
          transition: transform 0.3s var(--ease), box-shadow 0.3s;
        }
        .svc-stat-item:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 30px rgba(61,82,160,0.1);
        }
        .svc-stat-num {
          font-family: var(--font-display);
          font-size: 2.8rem;
          font-weight: 700;
          color: var(--indigo);
          line-height: 1;
          margin-bottom: 0.5rem;
        }
        .svc-stat-label { font-size: 0.9rem; color: #666; font-weight: 500; }

        /* ── Section Commons ── */
        .svc-section {
          padding: 6rem 2rem;
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s var(--ease), transform 0.8s var(--ease);
        }
        .svc-section.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .svc-section-header {
          text-align: center;
          margin-bottom: 3.5rem;
        }
        .svc-eyebrow {
          display: inline-block;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--indigo);
          background: rgba(61,82,160,0.08);
          padding: 5px 14px;
          border-radius: 50px;
          margin-bottom: 1rem;
        }
        .svc-section-title {
          font-family: var(--font-display);
          font-size: clamp(2rem, 5vw, 3.2rem);
          font-weight: 700;
          color: var(--navy);
          margin-bottom: 0.75rem;
          line-height: 1.15;
        }
        .svc-section-sub {
          font-size: 1.05rem;
          color: #666;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.7;
        }

        /* ── Tour Packages Section ── */
        .svc-packages { background: var(--cream); }
        .svc-filter-bar {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          justify-content: center;
          margin-bottom: 2.5rem;
        }
        .svc-filter-btn {
          padding: 8px 20px;
          border-radius: 50px;
          border: 1.5px solid #e0e3f0;
          background: white;
          color: #555;
          font-size: 0.85rem;
          font-weight: 500;
          cursor: pointer;
          font-family: var(--font-body);
          transition: all 0.25s var(--ease);
        }
        .svc-filter-btn:hover { border-color: var(--indigo); color: var(--indigo); }
        .svc-filter-btn.active {
          background: var(--indigo);
          border-color: var(--indigo);
          color: white;
          box-shadow: 0 6px 16px rgba(61,82,160,0.3);
        }
        .svc-search-wrap {
          display: flex;
          justify-content: center;
          margin-bottom: 2rem;
        }
        .svc-pkg-search {
          display: flex;
          background: white;
          border: 1.5px solid #e0e3f0;
          border-radius: 50px;
          overflow: hidden;
          width: 360px;
          transition: border-color 0.2s;
        }
        .svc-pkg-search:focus-within { border-color: var(--indigo); box-shadow: 0 0 0 3px rgba(61,82,160,0.1); }
        .svc-pkg-search input {
          flex: 1; padding: 0.7rem 1.25rem;
          border: none; outline: none;
          font-size: 0.9rem; font-family: var(--font-body);
        }
        .svc-pkg-search span { padding: 0 1rem; display: flex; align-items: center; color: #999; }

        .svc-pkg-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 1.75rem;
          max-width: 1300px;
          margin: 0 auto;
        }

        .svc-pkg-card {
          background: white;
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid rgba(200,200,230,0.25);
          transition: transform 0.35s var(--ease), box-shadow 0.35s var(--ease);
          position: relative;
        }
        .svc-pkg-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 24px 50px rgba(0,0,0,0.12);
        }
        .svc-pkg-card-header {
          padding: 1.75rem 1.75rem 1.25rem;
          position: relative;
        }
        .svc-pkg-badge {
          position: absolute;
          top: 1.25rem;
          right: 1.25rem;
          font-size: 0.7rem;
          font-weight: 700;
          padding: 4px 10px;
          border-radius: 20px;
          letter-spacing: 0.05em;
        }
        .svc-pkg-icon-wrap {
          width: 60px; height: 60px;
          border-radius: 16px;
          display: flex; align-items: center; justify-content: center;
          font-size: 1.75rem;
          margin-bottom: 1rem;
        }
        .svc-pkg-title {
          font-family: var(--font-display);
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--navy);
          margin-bottom: 0.4rem;
        }
        .svc-pkg-tagline {
          font-size: 0.85rem;
          font-style: italic;
          color: #888;
          margin-bottom: 0.75rem;
        }
        .svc-pkg-desc {
          font-size: 0.88rem;
          color: #666;
          line-height: 1.65;
          margin-bottom: 1.25rem;
        }
        .svc-pkg-meta {
          display: flex;
          gap: 1.25rem;
          font-size: 0.82rem;
          color: #888;
          margin-bottom: 1rem;
        }
        .svc-pkg-meta span { display: flex; align-items: center; gap: 4px; }
        .svc-pkg-rating {
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 0.85rem;
          margin-bottom: 0.75rem;
        }
        .svc-pkg-stars { color: #FFD700; letter-spacing: 1px; font-size: 0.8rem; }
        .svc-pkg-review-count { color: #999; }

        /* Live seats */
        .svc-pkg-seats {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.78rem;
          margin-bottom: 1rem;
        }
        .svc-seats-bar-bg {
          flex: 1; height: 5px;
          background: #f0f0f8;
          border-radius: 3px;
          overflow: hidden;
        }
        .svc-seats-bar {
          height: 100%;
          border-radius: 3px;
          transition: width 0.6s var(--ease);
        }
        .svc-seats-text { white-space: nowrap; font-weight: 600; }

        .svc-pkg-features {
          border-top: 1px solid #f0f0f8;
          padding: 1.25rem 1.75rem;
        }
        .svc-pkg-feat-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.4rem 1rem;
        }
        .svc-pkg-feat {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.82rem;
          color: #555;
        }
        .svc-pkg-feat-dot { width: 6px; height: 6px; border-radius: 50%; flex-shrink: 0; }

        .svc-pkg-footer {
          padding: 1.25rem 1.75rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 1px solid #f0f0f8;
        }
        .svc-pkg-price {
          font-family: var(--font-display);
          font-size: 1.6rem;
          font-weight: 700;
        }
        .svc-pkg-price-note { font-size: 0.78rem; color: #999; font-weight: 400; font-family: var(--font-body); }
        .svc-book-btn {
          padding: 0.65rem 1.5rem;
          border-radius: 50px;
          border: none;
          color: white;
          font-size: 0.88rem;
          font-weight: 600;
          cursor: pointer;
          font-family: var(--font-body);
          letter-spacing: 0.02em;
          transition: all 0.3s var(--ease);
        }
        .svc-book-btn:hover { transform: scale(1.04); box-shadow: 0 8px 20px rgba(0,0,0,0.2); }

        /* ── Destinations Section ── */
        .svc-destinations { background: white; }
        .svc-dest-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-template-rows: repeat(2, 260px);
          gap: 1.25rem;
          max-width: 1200px;
          margin: 0 auto;
        }
        .svc-dest-card {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          cursor: pointer;
        }
        .svc-dest-card:first-child {
          grid-row: span 2;
        }
        .svc-dest-img {
          width: 100%; height: 100%;
          object-fit: cover;
          transition: transform 0.6s var(--ease);
        }
        .svc-dest-card:hover .svc-dest-img { transform: scale(1.07); }
        .svc-dest-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(180deg, transparent 30%, rgba(10,10,30,0.82) 100%);
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 1.5rem;
          transition: all 0.3s;
        }
        .svc-dest-tag {
          font-size: 0.72rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--gold-light);
          margin-bottom: 4px;
        }
        .svc-dest-name {
          font-family: var(--font-display);
          font-size: 1.6rem;
          font-weight: 700;
          color: white;
          margin-bottom: 6px;
        }
        .svc-dest-card:first-child .svc-dest-name { font-size: 2.2rem; }
        .svc-dest-price {
          font-size: 0.88rem;
          color: rgba(255,255,255,0.8);
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .svc-dest-arrow {
          position: absolute;
          top: 1.25rem; right: 1.25rem;
          width: 36px; height: 36px;
          background: rgba(255,255,255,0.15);
          backdrop-filter: blur(8px);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 0.85rem;
          opacity: 0;
          transform: translate(-5px, 5px);
          transition: all 0.3s var(--ease);
        }
        .svc-dest-card:hover .svc-dest-arrow { opacity: 1; transform: translate(0, 0); }

        /* ── Why Us ── */
        .svc-why { background: var(--navy); }
        .svc-why .svc-eyebrow { color: var(--gold-light); background: rgba(201,168,76,0.15); }
        .svc-why .svc-section-title { color: white; }
        .svc-why .svc-section-sub { color: rgba(255,255,255,0.6); }
        .svc-why-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          max-width: 1100px;
          margin: 0 auto;
        }
        .svc-why-card {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 20px;
          padding: 2rem;
          transition: all 0.3s var(--ease);
        }
        .svc-why-card:hover {
          background: rgba(255,255,255,0.08);
          border-color: rgba(201,168,76,0.3);
          transform: translateY(-4px);
        }
        .svc-why-icon {
          font-size: 2rem;
          margin-bottom: 1rem;
        }
        .svc-why-title {
          font-size: 1.05rem;
          font-weight: 700;
          color: white;
          margin-bottom: 0.5rem;
        }
        .svc-why-desc { font-size: 0.88rem; color: rgba(255,255,255,0.55); line-height: 1.65; }

        /* ── Testimonials ── */
        .svc-testimonials { background: var(--cream); }
        .svc-testi-wrap {
          max-width: 900px;
          margin: 0 auto;
        }
        .svc-testi-card {
          background: white;
          border-radius: 24px;
          padding: 2.5rem;
          box-shadow: 0 20px 40px rgba(0,0,0,0.06);
          border: 1px solid rgba(200,200,230,0.2);
          position: relative;
          overflow: hidden;
        }
        .svc-testi-quote {
          position: absolute;
          top: 1.5rem; right: 2rem;
          font-family: var(--font-display);
          font-size: 6rem;
          color: var(--indigo);
          opacity: 0.07;
          line-height: 1;
        }
        .svc-testi-text {
          font-size: 1.1rem;
          line-height: 1.8;
          color: #444;
          margin-bottom: 1.75rem;
          position: relative;
          font-style: italic;
        }
        .svc-testi-author {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .svc-testi-img {
          width: 54px; height: 54px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid var(--indigo-light);
        }
        .svc-testi-name { font-weight: 700; color: var(--navy); font-size: 0.97rem; }
        .svc-testi-loc { font-size: 0.82rem; color: #888; }
        .svc-testi-tour {
          margin-left: auto;
          background: rgba(61,82,160,0.08);
          color: var(--indigo);
          font-size: 0.75rem;
          font-weight: 600;
          padding: 5px 12px;
          border-radius: 20px;
        }
        .svc-testi-stars { color: #FFD700; font-size: 0.85rem; margin-top: 2px; }
        .svc-testi-dots {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin-top: 1.5rem;
        }
        .svc-testi-dot {
          width: 8px; height: 8px;
          border-radius: 50%;
          border: none; cursor: pointer;
          transition: all 0.3s;
          background: #dde0f0;
        }
        .svc-testi-dot.active { background: var(--indigo); width: 24px; border-radius: 4px; }

        /* ── CTA ── */
        .svc-cta {
          background: linear-gradient(135deg, #1a1a2e 0%, #3D52A0 60%, #1a1a2e 100%);
          background-size: 200% 100%;
          animation: ctaShimmer 8s linear infinite;
          text-align: center;
          padding: 6rem 2rem;
        }
        @keyframes ctaShimmer { 0%{background-position:0%} 100%{background-position:200%} }
        .svc-cta-title {
          font-family: var(--font-display);
          font-size: clamp(2rem, 5vw, 3.2rem);
          font-weight: 700;
          color: white;
          margin-bottom: 1rem;
        }
        .svc-cta-sub {
          font-size: 1.1rem;
          color: rgba(255,255,255,0.75);
          margin-bottom: 2.5rem;
          max-width: 560px;
          margin-left: auto;
          margin-right: auto;
        }
        .svc-cta-btns { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; }
        .svc-cta-btn-primary {
          padding: 1rem 2.5rem;
          background: var(--gold);
          color: var(--navy);
          border: none;
          border-radius: 50px;
          font-size: 1rem;
          font-weight: 700;
          cursor: pointer;
          font-family: var(--font-body);
          box-shadow: 0 10px 30px rgba(201,168,76,0.4);
          transition: all 0.3s var(--ease);
          text-decoration: none;
          display: inline-block;
        }
        .svc-cta-btn-primary:hover { transform: translateY(-2px); box-shadow: 0 16px 40px rgba(201,168,76,0.5); }
        .svc-cta-btn-secondary {
          padding: 1rem 2.5rem;
          background: transparent;
          color: white;
          border: 1.5px solid rgba(255,255,255,0.35);
          border-radius: 50px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          font-family: var(--font-body);
          transition: all 0.3s;
          text-decoration: none;
          display: inline-block;
        }
        .svc-cta-btn-secondary:hover { background: rgba(255,255,255,0.1); border-color: rgba(255,255,255,0.6); }

        /* ── Animations ── */
        @keyframes dvdFadeUp {
          from { opacity: 0; transform: translateY(25px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .svc-stats-grid { grid-template-columns: repeat(2, 1fr); }
          .svc-why-grid { grid-template-columns: repeat(2, 1fr); }
          .svc-dest-grid { grid-template-columns: repeat(2, 1fr); grid-template-rows: auto; }
          .svc-dest-card:first-child { grid-row: span 1; }
        }
        @media (max-width: 640px) {
          .svc-stats-grid { grid-template-columns: repeat(2, 1fr); gap: 1rem; }
          .svc-why-grid { grid-template-columns: 1fr; }
          .svc-dest-grid { grid-template-columns: 1fr; }
          .svc-pkg-grid { grid-template-columns: 1fr; }
          .svc-section { padding: 4rem 1.25rem; }
        }
      `}</style>

      <Header />

      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section className="svc-hero">
        <div className="svc-hero-bg" />
        <div className="svc-hero-mesh" />
        <div className="svc-hero-content">
          <span className="svc-hero-eyebrow">
            <span className="svc-live-dot" style={{ margin: 0 }} />
            {liveBookings} bookings made today
          </span>
          <h1 className="svc-hero-title">
            Discover Your<br />
            <span className="italic gold">Next</span> Adventure
          </h1>
          <p className="svc-hero-sub">
            From misty Himalayan peaks to sun-kissed beaches — craft your perfect journey with India's most trusted travel experts.
          </p>
          <div className="svc-hero-search">
            <input
              type="text"
              placeholder="Search destinations, tour types, places..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
            />
            <button>Search</button>
          </div>
          <div className="svc-hero-pills">
            {["🏔️ Adventure", "🌊 Beach", "🏛️ Heritage", "💑 Honeymoon", "👨‍👩‍👧‍👦 Family", "💎 Luxury"].map(p => (
              <span key={p} className="svc-hero-pill" onClick={() => setSearchQuery(p.split(' ')[1])}>{p}</span>
            ))}
          </div>
        </div>
        <div className="svc-live-badge">
          <span className="svc-live-dot" />
          <span><strong>500+</strong> destinations · <strong>9</strong> tour types · <strong>24/7</strong> support</span>
        </div>
        <div className="svc-hero-scroll">
          <div className="svc-scroll-line" />
          <span>Scroll</span>
        </div>
      </section>

      {/* ── STATS ────────────────────────────────────────────────────────────── */}
      <section className="svc-stats">
        <div className="svc-stats-grid">
          {[
            { num: happyCount, suffix: '+', label: 'Happy Travelers', ref: happyRef },
            { num: destCount, suffix: '+', label: 'Destinations', ref: destRef },
            { num: yearsCount, suffix: '+', label: 'Years Experience', ref: yearsRef },
            { num: toursCount, suffix: '+', label: 'Tours Completed', ref: toursRef },
          ].map((s, i) => (
            <div key={i} className="svc-stat-item" ref={s.ref}>
              <div className="svc-stat-num">
                {s.num.toLocaleString()}{s.suffix}
              </div>
              <div className="svc-stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── TOUR PACKAGES ────────────────────────────────────────────────────── */}
      <section
        className={`svc-section svc-packages ${visibleSections['packages'] ? 'visible' : ''}`}
        data-section="packages"
      >
        <div className="svc-section-header">
          <span className="svc-eyebrow">Our Offerings</span>
          <h2 className="svc-section-title">Explore 9 Tour Categories</h2>
          <p className="svc-section-sub">From weekend getaways to luxury escapes — find the journey that speaks to your soul.</p>
        </div>

        <div className="svc-filter-bar">
          {FILTERS.map(f => (
            <button
              key={f.key}
              className={`svc-filter-btn ${activeFilter === f.key ? 'active' : ''}`}
              onClick={() => setActiveFilter(f.key)}
            >{f.label}</button>
          ))}
        </div>

        <div className="svc-search-wrap">
          <div className="svc-pkg-search">
            <input
              type="text"
              placeholder="Search tours..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
            />
            <span>🔍</span>
          </div>
        </div>

        <div className="svc-pkg-grid">
          {filteredPackages.map((pkg, idx) => {
            const seatsPercent = Math.min(100, ((30 - pkg.seatsLeft) / 30) * 100);
            const seatsColor = pkg.seatsLeft <= 5 ? '#FF6B6B' : pkg.seatsLeft <= 12 ? '#FF9F1C' : '#4CAF50';
            return (
              <div
                key={pkg.id}
                className="svc-pkg-card"
                style={{ animationDelay: `${idx * 0.08}s` }}
                onMouseEnter={() => setHoveredCard(pkg.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {pkg.badge && (
                  <div className="svc-pkg-badge" style={{
                    background: pkg.badge.includes('Popular') ? '#fff3e0' :
                                pkg.badge.includes('Value') ? '#e3f2fd' :
                                pkg.badge.includes('Premium') ? '#fdf6e3' : '#e8f5e9',
                    color: pkg.badge.includes('Popular') ? '#e65100' :
                           pkg.badge.includes('Value') ? '#1565c0' :
                           pkg.badge.includes('Premium') ? '#8B6914' : '#2e7d32',
                  }}>{pkg.badge}</div>
                )}

                <div className="svc-pkg-card-header" style={{
                  background: `linear-gradient(135deg, ${pkg.gradFrom}12, ${pkg.gradTo}08)`
                }}>
                  <div className="svc-pkg-icon-wrap" style={{
                    background: `linear-gradient(135deg, ${pkg.gradFrom}25, ${pkg.gradTo}15)`
                  }}>{pkg.icon}</div>
                  <h3 className="svc-pkg-title">{pkg.title}</h3>
                  <p className="svc-pkg-tagline">"{pkg.tagline}"</p>
                  <p className="svc-pkg-desc">{pkg.description}</p>
                  <div className="svc-pkg-meta">
                    <span>⏱️ {pkg.duration}</span>
                    <span>👥 Group & Solo</span>
                  </div>
                  <div className="svc-pkg-rating">
                    <span className="svc-pkg-stars">{'★'.repeat(5)}</span>
                    <span style={{ fontWeight: 600, fontSize: '0.88rem' }}>{pkg.rating}</span>
                    <span className="svc-pkg-review-count">({pkg.reviews} reviews)</span>
                  </div>
                  {/* Live seats */}
                  <div className="svc-pkg-seats">
                    <span style={{ color: seatsColor, fontWeight: 700 }}>🪑</span>
                    <div className="svc-seats-bar-bg">
                      <div className="svc-seats-bar" style={{ width: `${seatsPercent}%`, background: seatsColor }} />
                    </div>
                    <span className="svc-seats-text" style={{ color: seatsColor }}>
                      {pkg.seatsLeft <= 5 ? `Only ${pkg.seatsLeft} left!` : `${pkg.seatsLeft} seats`}
                    </span>
                  </div>
                </div>

                <div className="svc-pkg-features">
                  <div className="svc-pkg-feat-grid">
                    {pkg.features.map((f, i) => (
                      <div key={i} className="svc-pkg-feat">
                        <span className="svc-pkg-feat-dot" style={{ background: pkg.color }} />
                        {f}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="svc-pkg-footer">
                  <div>
                    <div className="svc-pkg-price" style={{ color: pkg.color }}>{pkg.price}</div>
                    <div className="svc-pkg-price-note">{pkg.priceNote}</div>
                  </div>
                  <button
                    className="svc-book-btn"
                    style={{ background: `linear-gradient(135deg, ${pkg.gradFrom}, ${pkg.gradTo})` }}
                    onClick={() => handleBook(pkg.type)}
                  >
                    Book Now →
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {filteredPackages.length === 0 && (
          <div style={{ textAlign: 'center', padding: '3rem', color: '#999' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔍</div>
            <p>No tours found. Try a different filter or search term.</p>
          </div>
        )}
      </section>

      {/* ── FEATURED DESTINATIONS ────────────────────────────────────────────── */}
      <section
        className={`svc-section svc-destinations ${visibleSections['destinations'] ? 'visible' : ''}`}
        data-section="destinations"
      >
        <div className="svc-section-header">
          <span className="svc-eyebrow">Top Picks</span>
          <h2 className="svc-section-title">Featured Destinations</h2>
          <p className="svc-section-sub">Hand-picked locations for your next unforgettable journey.</p>
        </div>
        <div className="svc-dest-grid">
          {DESTINATIONS.map((d, i) => (
            <div
              key={i}
              className="svc-dest-card"
              onMouseEnter={() => setHoveredDest(i)}
              onMouseLeave={() => setHoveredDest(null)}
            >
              <img src={d.img} alt={d.title} className="svc-dest-img" loading="lazy" />
              <div className="svc-dest-overlay">
                <div className="svc-dest-tag">{d.tag}</div>
                <div className="svc-dest-name">{d.title}</div>
                <div className="svc-dest-price">✈️ From {d.price}</div>
              </div>
              <div className="svc-dest-arrow">→</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── WHY CHOOSE US ────────────────────────────────────────────────────── */}
      <section
        className={`svc-section svc-why ${visibleSections['why'] ? 'visible' : ''}`}
        data-section="why"
      >
        <div className="svc-section-header">
          <span className="svc-eyebrow">Why DesiVDesi</span>
          <h2 className="svc-section-title" style={{ color: 'white' }}>Travel With Confidence</h2>
          <p className="svc-section-sub" style={{ color: 'rgba(255,255,255,0.6)' }}>
            We go beyond booking — we craft experiences that stay with you forever.
          </p>
        </div>
        <div className="svc-why-grid">
          {WHY_US.map((w, i) => (
            <div key={i} className="svc-why-card">
              <div className="svc-why-icon">{w.icon}</div>
              <div className="svc-why-title">{w.title}</div>
              <div className="svc-why-desc">{w.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────────────────────── */}
      <section
        className={`svc-section svc-testimonials ${visibleSections['testimonials'] ? 'visible' : ''}`}
        data-section="testimonials"
      >
        <div className="svc-section-header">
          <span className="svc-eyebrow">Traveler Stories</span>
          <h2 className="svc-section-title">What Our Guests Say</h2>
          <p className="svc-section-sub">Real stories from real explorers — unfiltered, unsponsored.</p>
        </div>
        <div className="svc-testi-wrap">
          <div className="svc-testi-card">
            <div className="svc-testi-quote">"</div>
            <p className="svc-testi-text">{TESTIMONIALS[activeTestimonial].text}</p>
            <div className="svc-testi-author">
              <img src={TESTIMONIALS[activeTestimonial].img} alt="" className="svc-testi-img" />
              <div>
                <div className="svc-testi-name">{TESTIMONIALS[activeTestimonial].name}</div>
                <div className="svc-testi-loc">{TESTIMONIALS[activeTestimonial].loc}</div>
                <div className="svc-testi-stars">{'★'.repeat(TESTIMONIALS[activeTestimonial].rating)}</div>
              </div>
              <span className="svc-testi-tour">{TESTIMONIALS[activeTestimonial].tour}</span>
            </div>
          </div>
          <div className="svc-testi-dots">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                className={`svc-testi-dot ${i === activeTestimonial ? 'active' : ''}`}
                onClick={() => setActiveTestimonial(i)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────────── */}
      <section className="svc-cta">
        <h2 className="svc-cta-title">Ready for Your Next Adventure?</h2>
        <p className="svc-cta-sub">
          Join 10,000+ happy travelers. Let us craft a journey you'll never forget.
        </p>
        <div className="svc-cta-btns">
          <Link to="/contact" className="svc-cta-btn-primary">Plan My Trip 🗺️</Link>
          <a href="tel:+917888251550" className="svc-cta-btn-secondary">📞 Call Us Now</a>
        </div>
      </section>
    </>
  );
}