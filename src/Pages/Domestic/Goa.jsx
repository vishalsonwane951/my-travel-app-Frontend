import React, { useEffect, useState, useRef, useCallback } from 'react';
import { Link, Outlet, useNavigate, useSearchParams } from 'react-router-dom';
import api from "../../utils/api";

// ── Hooks ──────────────────────────────────────────────────────────────────────
const useCountUp = (target, duration = 2000) => {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setStarted(true); },
      { threshold: 0.5 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

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

// ── Data ───────────────────────────────────────────────────────────────────────
const HERO_SLIDES = [
  {
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1800&q=85",
    place: "Calangute Shoreline",
    tag: "Golden Hour",
  },
  {
    img: "https://images.unsplash.com/photo-1718275520594-8bb2d4fae9f0?w=1800&q=85",
    place: "Old Goa Basilica",
    tag: "UNESCO Heritage",
  },
  {
    img: "https://images.unsplash.com/photo-1652120704209-14cbc87b603f?w=1800&q=85",
    place: "Dudhsagar Falls",
    tag: "Sea of Milk",
  },
  {
    img: "https://images.unsplash.com/photo-1727499031382-407906c7e208?w=1800&q=85",
    place: "Candolim Boats",
    tag: "Fishing Coast",
  },
];

const CATEGORIES = [
  { key: 'beaches', label: 'Beaches', icon: '🏖️' },
  { key: 'heritage', label: 'Heritage & Churches', icon: '⛪' },
  { key: 'watersports', label: 'Water Sports', icon: '🤿' },
  { key: 'nightlife', label: 'Nightlife & Shacks', icon: '🎶' },
  { key: 'hidden', label: 'Hidden Coves', icon: '💎' },
  { key: 'family', label: 'Family Friendly', icon: '👨‍👩‍👧‍👦' },
  { key: 'spice', label: 'Spice & Cuisine', icon: '🌶️' },
  { key: 'wildlife', label: 'Wildlife & Nature', icon: '🦜' },
];

const QUICK_ACTIONS = [
  { label: 'Stay', icon: '🏨', color: '#3D52A0', link: '/stay' },
  { label: 'Beach Shacks', icon: '🍤', color: '#FF6B35', link: '/beach-shacks' },
  { label: 'Water Sports', icon: '🛶', color: '#4ECDC4', link: '/water-sports' },
  { label: 'Villas & Homestays', icon: '🏡', color: '#FFB347', link: '/villas-homestays' },
];

const DESTINATIONS = [
  {
    img: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&q=80",
    name: "Baga & Calangute", tag: "North Goa Buzz", price: "₹5,499", desc: "Shacks, parasailing & sundown parties",
  },
  {
    img: "https://images.unsplash.com/photo-1567005753256-c0529035b300?w=800&q=80",
    name: "Old Goa", tag: "UNESCO Heritage", price: "₹3,999", desc: "Baroque basilicas & 400-year-old bells",
  },
  {
    img: "https://images.unsplash.com/photo-1667760334198-d3958029a08b?w=800&q=80",
    name: "Dudhsagar Falls", tag: "Sea of Milk", price: "₹4,499", desc: "A four-tiered cascade through the Sahyadris",
  },
  {
    img: "https://images.unsplash.com/photo-1582972236019-ea4af5ffe587?w=800&q=80",
    name: "Palolem", tag: "South Goa Calm", price: "₹6,299", desc: "Crescent sands & swaying palms",
  },
  {
    img: "https://images.unsplash.com/photo-1566824099147-bef027d3a333?w=800&q=80",
    name: "Anjuna & Mapusa", tag: "Flea Market Trail", price: "₹2,999", desc: "Spice sacks, vinyl crates & sundown bazaars",
  },
  {
    img: "https://images.unsplash.com/photo-1560179406-1c6c60e0dc76?w=800&q=80",
    name: "Candolim", tag: "Beach Shack Row", price: "₹5,999", desc: "Easy sand, easy seafood, easy living",
  },
];

const EXPERIENCES = [
  { icon: '🍤', title: 'Beach Shack Trails', desc: 'Bare feet in the sand, a king fish curry on the table, and the tide doing all the talking. Goa\'s shacks are an institution of their own.', color: '#FF6B35' },
  { icon: '⛪', title: 'Portuguese Heritage Walks', desc: 'Wander Fontainhas\' ochre lanes and the basilicas of Old Goa, where four centuries of Indo-Portuguese history are written into the walls.', color: '#C9A84C' },
  { icon: '🌶️', title: 'Spice Plantation Tours', desc: 'Ponda\'s plantations open their groves for guided walks through cardamom, pepper and nutmeg, ending in a banana-leaf Konkani thali.', color: '#4ECDC4' },
  { icon: '🚤', title: 'Sunset Cruise & Dolphin Watch', desc: 'Drift down the Mandovi as the sky turns copper, or head out at dawn to spot dolphins off the Sinquerim coast.', color: '#3D52A0' },
  { icon: '🛍️', title: 'Flea Markets & Night Bazaars', desc: 'Anjuna\'s Wednesday flea market and the Arpora Saturday Night Bazaar trade in everything from silver jewellery to live music.', color: '#FFB347' },
  { icon: '🤿', title: 'Water Sports Adventures', desc: 'Parasailing over Baga, scuba at Grande Island, or a jet-ski run past Candolim — the Arabian Sea is Goa\'s real playground.', color: '#7BAE7F' },
];

const TRAVEL_TIPS = [
  { icon: '🌤️', title: 'Best Time to Visit', tip: 'Nov–Feb is peak season: cool, dry and festive. Mar–May turns hot. Jun–Sep monsoon rains empty the beaches but fill the waterfalls and drop hotel rates sharply.' },
  { icon: '🛵', title: 'Getting Around', tip: 'A rented scooter is the local way to see Goa — helmets are mandatory for both rider and pillion. Flat-bottomed ferries still cross the Mandovi and Zuari rivers for a slower, scenic route.' },
  { icon: '💰', title: 'Budget Guide', tip: 'Hostel bed + street food: ₹1,500/day. Mid-range guesthouse + shacks: ₹4,000/day. Beachfront resort with all the trimmings: ₹12,000+/night.' },
  { icon: '🗣️', title: 'Local Language & Spirit', tip: 'Konkani is the official language, with Portuguese still echoing in surnames and recipes. Locals call their easy-going philosophy "susegad" — and you\'ll feel it within a day.' },
];

const COASTS = [
  {
    key: 'north',
    name: 'North Goa',
    img: "https://images.unsplash.com/photo-1496566084516-c5b96fcbd5c8?w=900&q=80",
    blurb: 'Buzzing beaches, beach shacks and sundown parties that run past midnight.',
    points: ['Baga & Calangute nightlife', 'Anjuna flea market', 'Vagator\'s cliffside views', 'Chapora Fort sunsets'],
  },
  {
    key: 'south',
    name: 'South Goa',
    img: "https://images.unsplash.com/photo-1646748019039-e908f7e41282?w=900&q=80",
    blurb: 'Quiet coves, coconut groves and mornings with nowhere in particular to be.',
    points: ['Palolem\'s crescent beach', 'Cabo de Rama\'s fort ruins', 'Cotigao wildlife sanctuary', 'Colva\'s wide open sands'],
  },
];

// ── Image Carousel ─────────────────────────────────────────────────────────────
function ImageCarousel({ images }) {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIndex(i => (i + 1) % images.length), 4000);
    return () => clearInterval(t);
  }, [images.length]);

  return (
    <div className="relative w-full" style={{ paddingTop: '68%' }}>
      <img
        src={images[index]}
        alt={`slide-${index}`}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
      />
      <button
        onClick={() => setIndex(i => (i - 1 + images.length) % images.length)}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white rounded-full w-8 h-8 flex items-center justify-center z-10 hover:bg-black/70 transition-colors"
      >‹</button>
      <button
        onClick={() => setIndex(i => (i + 1) % images.length)}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white rounded-full w-8 h-8 flex items-center justify-center z-10 hover:bg-black/70 transition-colors"
      >›</button>
      <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-2 z-10">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-2 h-2 rounded-full border border-white transition-all ${i === index ? 'bg-white w-5' : 'bg-white/50'}`}
          />
        ))}
      </div>
    </div>
  );
}

// ── Hero Slider ────────────────────────────────────────────────────────────────
function GoaHeroSlider() {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setCurrent(i => (i + 1) % HERO_SLIDES.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="relative w-full h-full">
      {HERO_SLIDES.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <img src={slide.img} alt={slide.place} className="w-full h-full object-cover" />
        </div>
      ))}
      <div className="absolute top-1/2 right-6 -translate-y-1/2 flex flex-col gap-2 z-20">
        {HERO_SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`transition-all rounded-full border border-white/60 ${i === current ? 'h-8 w-2 bg-white' : 'h-2 w-2 bg-white/40'}`}
          />
        ))}
      </div>
    </div>
  );
}

// ── Main Component ─────────────────────────────────────────────────────────────
function Goa() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const initialCategory = searchParams.get('category') || localStorage.getItem('goa_category') || 'beaches';
  const [selected, setSelected] = useState(initialCategory);
  const [cardData, setCardData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [allCards, setAllCards] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [heroVisible, setHeroVisible] = useState(false);
  const [activeCoast, setActiveCoast] = useState('north');
  const [openTip, setOpenTip] = useState(0);
  const [weatherData] = useState({ temp: '31°C', condition: 'Sea Breeze', icon: '🌤️' });
  const carouselRef = useRef(null);

  const [beachCount, beachRef] = useCountUp(40, 1800);
  const [coastCount, coastRef] = useCountUp(105, 2000);
  const [districtCount, districtRef] = useCountUp(2, 1000);
  const [heritageCount, heritageRef] = useCountUp(450, 2200);

  useEffect(() => {
    setTimeout(() => setHeroVisible(true), 100);
  }, []);

  const fetchData = useCallback(async (type) => {
    setLoading(true);
    try {
      const res = await api.get(`/goa-cards/${type}`);
      const categoryData = Array.isArray(res.data.data) ? res.data.data : [];
      setCardData(categoryData);
    } catch (err) {
      console.error("Category error:", err);
      setCardData([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData(selected);
  }, [selected, fetchData]);

  useEffect(() => {
    const fetchAllCards = async () => {
      try {
        const res = await api.get(`/goa-cards/getall`);
        setAllCards(Array.isArray(res.data.data) ? res.data.data : []);
      } catch (err) {
        console.error("All cards error:", err);
        setAllCards([]);
      }
    };
    fetchAllCards();
  }, []);

  const handleCategoryChange = (key) => {
    if (key !== selected) {
      setSelected(key);
      localStorage.setItem('goa_category', key);
      navigate(`?category=${key}`, { replace: true });
    }
  };

  const filteredCards = (searchQuery ? allCards : cardData).filter(card => {
    const query = searchQuery.toLowerCase();
    return (
      !searchQuery ||
      card.title?.toLowerCase().includes(query) ||
      card.location?.toLowerCase().includes(query) ||
      card.tags?.some(tag => tag.toLowerCase().includes(query))
    );
  });

  const scrollCarousel = (dir) => {
    if (!carouselRef.current) return;
    carouselRef.current.scrollBy({ left: dir * 320, behavior: 'smooth' });
  };

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
          --saffron: #FF6B35;
          --saffron-light: #FFB347;
          --teal: #4ECDC4;
          --cream: #FDFAF4;
          --font-display: 'Cormorant Garamond', serif;
          --font-body: 'DM Sans', sans-serif;
          --ease: cubic-bezier(0.4,0,0.2,1);
        }

        * { box-sizing: border-box; }
        body { font-family: var(--font-body); overflow-x: hidden; }

        .ga-hero-content { transition: all 1s var(--ease); }
        .ga-hero-content.hidden-state { opacity: 0; transform: translateX(-30px); }
        .ga-hero-content.visible-state { opacity: 1; transform: translateX(0); }

        .ga-delay-1 { animation: gaFadeUp 0.8s 0.1s var(--ease) both; }
        .ga-delay-2 { animation: gaFadeUp 0.8s 0.25s var(--ease) both; }
        .ga-delay-3 { animation: gaFadeUp 0.8s 0.4s var(--ease) both; }
        .ga-delay-4 { animation: gaFadeUp 0.8s 0.55s var(--ease) both; }

        @keyframes gaFadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .live-dot {
          width: 8px; height: 8px;
          background: #4CAF50;
          border-radius: 50%;
          animation: pulseDot 2s infinite;
        }
        @keyframes pulseDot {
          0%,100%{box-shadow:0 0 0 3px rgba(76,175,80,0.25)}
          50%{box-shadow:0 0 0 7px rgba(76,175,80,0.08)}
        }

        .ga-reveal {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.75s var(--ease), transform 0.75s var(--ease);
        }
        .ga-reveal.revealed { opacity: 1; transform: translateY(0); }

        .ga-stat-chip {
          transition: transform 0.3s var(--ease), box-shadow 0.3s var(--ease);
        }
        .ga-stat-chip:hover { transform: translateY(-4px); box-shadow: 0 16px 32px rgba(0,0,0,0.12); }

        .ga-coast-card { transition: all 0.4s var(--ease); cursor: pointer; }
        .ga-coast-card:hover .ga-coast-img { transform: scale(1.06); }
        .ga-coast-card.active { box-shadow: 0 24px 50px rgba(0,0,0,0.18); }

        .ga-carousel-card { scroll-snap-align: start; flex-shrink: 0; }
        .ga-carousel-card:hover .ga-carousel-img { transform: scale(1.07); }
        .ga-carousel { scroll-snap-type: x mandatory; scrollbar-width: none; }
        .ga-carousel::-webkit-scrollbar { display: none; }

        .ga-tab { position: relative; transition: color 0.25s var(--ease); cursor: pointer; }
        .ga-tab::after {
          content: '';
          position: absolute; left: 0; bottom: -2px; height: 3px; width: 100%;
          background: var(--saffron); border-radius: 4px;
          transform: scaleX(0); transition: transform 0.3s var(--ease);
        }
        .ga-tab.active::after { transform: scaleX(1); }
        .ga-tab.active { color: var(--saffron) !important; }
        .ga-tab:not(.active):hover { color: var(--indigo); }

        .ga-card { transition: transform 0.35s var(--ease), box-shadow 0.35s var(--ease); }
        .ga-card:hover { transform: translateY(-8px); box-shadow: 0 24px 50px rgba(0,0,0,0.13); }

        .ga-exp-row { transition: all 0.3s var(--ease); }
        .ga-exp-row:hover { background: rgba(255,255,255,0.04); }
        .ga-exp-row:hover .ga-exp-icon { transform: scale(1.1) rotate(-4deg); }
        .ga-exp-icon { transition: transform 0.3s var(--ease); }

        .ga-tip-row { cursor: pointer; transition: background 0.25s var(--ease); }
        .ga-tip-row:hover { background: #f5f2e8; }
        .ga-tip-chevron { transition: transform 0.3s var(--ease); }
        .ga-tip-chevron.open { transform: rotate(180deg); }

        .ga-qa-rail::-webkit-scrollbar { display: none; }

        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #f1f1f1; }
        ::-webkit-scrollbar-thumb { background: var(--teal); border-radius: 3px; }

        .skeleton {
          background: linear-gradient(90deg, #f0f0f8 25%, #e8e8f0 50%, #f0f0f8 75%);
          background-size: 200% 100%;
          animation: shimmer 1.4s infinite;
          border-radius: 8px;
        }
        @keyframes shimmer { 0%{background-position:200% 0} 100%{background-position:-200% 0} }

        .ga-cta-bg {
          background: linear-gradient(135deg, #0d3b3e 0%, #1a1a2e 55%, #0d3b3e 100%);
          background-size: 200% 100%;
          animation: ctaShimmer 9s linear infinite;
        }
        @keyframes ctaShimmer { 0%{background-position:0%} 100%{background-position:200%} }

        @media(max-width:640px){
          .ga-stats-row { flex-wrap: wrap !important; justify-content: center !important; }
          .ga-coast-grid { grid-template-columns: 1fr !important; }
          .ga-exp-row { flex-direction: column !important; text-align: center; }
          .ga-tip-grid-inner { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* ── HERO ──────────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden" style={{ minHeight: '92vh', background: 'var(--navy)' }}>
        <div className="absolute inset-0">
          <GoaHeroSlider />
        </div>
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse 70% 55% at 20% 45%, rgba(78,205,196,0.18) 0%, transparent 70%), linear-gradient(100deg, rgba(13,30,40,0.92) 10%, rgba(13,30,40,0.5) 45%, rgba(13,30,40,0.2) 75%)'
        }} />

        <div className={`relative z-10 px-6 md:px-16 ga-hero-content ${heroVisible ? 'visible-state' : 'hidden-state'}`}
          style={{ paddingTop: '11rem', maxWidth: 640 }}>
          <div className="ga-delay-1 inline-flex items-center gap-2 mb-7"
            style={{ background: 'rgba(78,205,196,0.15)', border: '1px solid rgba(78,205,196,0.4)', color: 'var(--teal)', padding: '6px 20px', borderRadius: '50px', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase' }}>
            <span className="live-dot" />
            Welcome to Susegad
          </div>

          <h1 className="ga-delay-2 font-display text-white mb-5 leading-none"
            style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(3rem,7.5vw,6rem)', fontWeight: 700, lineHeight: 1.05 }}>
            Find Your<br />
            <span style={{ color: 'var(--gold-light)', fontStyle: 'italic' }}>Goa</span> State of Mind
          </h1>

          <p className="ga-delay-3 mb-8" style={{ fontSize: 'clamp(1rem,2.2vw,1.15rem)', color: 'rgba(255,255,255,0.8)', maxWidth: 480, lineHeight: 1.75, fontFamily: 'var(--font-body)' }}>
            Forty beaches, four centuries of Portuguese heritage, and a coastline built for slowing down — India's smallest state, biggest welcome.
          </p>

          <div className="ga-delay-4 mb-6 flex overflow-hidden rounded-2xl shadow-2xl"
            style={{ maxWidth: 480, background: 'white' }}>
            <input
              type="text"
              placeholder="Search beaches, churches, shacks..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              style={{ flex: 1, padding: '1rem 1.5rem', border: 'none', outline: 'none', fontSize: '1rem', fontFamily: 'var(--font-body)', color: 'var(--navy)' }}
            />
            <button style={{ padding: '0 1.75rem', background: 'linear-gradient(135deg, var(--teal), #3bb8af)', border: 'none', color: 'white', fontWeight: 700, fontSize: '0.9rem', cursor: 'pointer', fontFamily: 'var(--font-body)' }}>
              Search
            </button>
          </div>

          <div className="ga-delay-4 flex flex-wrap gap-2">
            {['🏖️ Beaches', '⛪ Heritage', '🛶 Water Sports', '🎶 Nightlife', '💎 Hidden Coves', '🌶️ Spice Tours'].map(p => (
              <span key={p}
                onClick={() => setSearchQuery(p.split(' ')[1])}
                style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.9)', padding: '6px 15px', borderRadius: '50px', fontSize: '0.82rem', cursor: 'pointer', transition: 'all 0.25s', fontFamily: 'var(--font-body)' }}
                className="hover:bg-teal-400/20 hover:border-teal-300 hover:text-teal-200 transition-all"
              >{p}</span>
            ))}
          </div>

          {searchQuery && (
            <p style={{ color: 'rgba(255,255,255,0.7)', marginTop: '1.25rem', fontSize: '0.9rem' }}>
              Showing results for "<strong style={{ color: 'white' }}>{searchQuery}</strong>" across all categories
            </p>
          )}
        </div>

        {/* Wave divider into cream section */}
        <svg viewBox="0 0 1440 110" preserveAspectRatio="none" style={{ position: 'absolute', bottom: -1, left: 0, width: '100%', height: 90, zIndex: 6 }}>
          <path d="M0,55 C200,100 380,5 620,45 C860,85 1040,15 1260,50 C1340,62 1400,58 1440,50 L1440,110 L0,110 Z" style={{ fill: 'var(--cream)' }} />
        </svg>
      </section>

      {/* ── STATS STRIP (overlapping wave) ───────────────────────────────────── */}
      <section style={{ background: 'var(--cream)', padding: '0 2rem 4.5rem' }}>
        <div className="ga-stats-row flex justify-center gap-4 mx-auto" style={{ maxWidth: 1000, marginTop: '-3.2rem', position: 'relative', zIndex: 8, flexWrap: 'wrap' }}>
          {[
            { num: beachCount, suffix: '+', label: 'Beaches', ref: beachRef, icon: '🏖️' },
            { num: coastCount, suffix: ' km', label: 'Coastline', ref: coastRef, icon: '🌊' },
            { num: districtCount, suffix: '', label: 'Districts (N & S)', ref: districtRef, icon: '🗺️' },
            { num: heritageCount, suffix: '+ yrs', label: 'Indo-Portuguese Heritage', ref: heritageRef, icon: '⛪' },
          ].map((s, i) => (
            <div key={i} ref={s.ref} className="ga-stat-chip text-center"
              style={{ background: 'white', border: '1px solid #eef0ff', borderRadius: 18, padding: '1.4rem 1.6rem', minWidth: 150, boxShadow: '0 10px 30px rgba(0,0,0,0.07)' }}>
              <div style={{ fontSize: '1.5rem', marginBottom: '0.4rem' }}>{s.icon}</div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', fontWeight: 700, color: 'var(--teal)', lineHeight: 1 }}>
                {s.num.toLocaleString()}{s.suffix}
              </div>
              <div style={{ fontSize: '0.82rem', color: '#666', fontWeight: 500, marginTop: '0.35rem', fontFamily: 'var(--font-body)' }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Weather / live line */}
        <div className="flex justify-center">
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 10, marginTop: '2rem',
            padding: '8px 20px', borderRadius: 50, background: 'white', border: '1px solid #eef0ff',
            color: '#555', fontSize: '0.82rem', fontFamily: 'var(--font-body)',
          }}>
            <span className="live-dot" />
            <span><strong>{weatherData.icon} {weatherData.temp}</strong> on the coast today · <strong>Best time:</strong> Nov–Feb</span>
          </div>
        </div>
      </section>

      {/* ── NORTH vs SOUTH SIGNATURE SECTION ─────────────────────────────────── */}
      <section className="ga-reveal" style={{ padding: '2rem 2rem 5.5rem', background: 'var(--cream)' }}
        ref={el => { if (el) { const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) el.classList.add('revealed'); }, { threshold: 0.1 }); obs.observe(el); } }}>
        <div className="text-center mb-12" style={{ maxWidth: 680, margin: '0 auto 3rem' }}>
          <span style={{ display: 'inline-block', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--indigo)', background: 'rgba(61,82,160,0.08)', padding: '5px 14px', borderRadius: '50px', marginBottom: '1rem', fontFamily: 'var(--font-body)' }}>
            Two Coastlines, One State
          </span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.9rem,4.5vw,2.8rem)', fontWeight: 700, color: 'var(--navy)' }}>
            Choose Your Goa
          </h2>
          <p style={{ fontSize: '1rem', color: '#777', marginTop: '0.6rem', fontFamily: 'var(--font-body)' }}>
            North for the noise, South for the quiet — Goa is really two trips in one.
          </p>
        </div>

        <div className="ga-coast-grid mx-auto" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.75rem', maxWidth: 1000 }}>
          {COASTS.map(coast => (
            <div key={coast.key}
              onClick={() => setActiveCoast(coast.key)}
              className={`ga-coast-card rounded-3xl overflow-hidden relative ${activeCoast === coast.key ? 'active' : ''}`}
              style={{ height: 380, border: activeCoast === coast.key ? '3px solid var(--saffron)' : '3px solid transparent' }}>
              <img src={coast.img} alt={coast.name} className="ga-coast-img w-full h-full object-cover transition-transform duration-700" loading="lazy" />
              <div className="absolute inset-0 flex flex-col justify-end p-6"
                style={{ background: 'linear-gradient(180deg, transparent 25%, rgba(10,10,30,0.9) 100%)' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 700, color: 'white', marginBottom: 6 }}>{coast.name}</div>
                <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.75)', marginBottom: 12, fontFamily: 'var(--font-body)' }}>{coast.blurb}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {coast.points.map((p, i) => (
                    <span key={i} style={{ fontSize: '0.72rem', color: 'white', background: 'rgba(255,255,255,0.15)', padding: '4px 10px', borderRadius: 50, fontFamily: 'var(--font-body)' }}>{p}</span>
                  ))}
                </div>
              </div>
              {activeCoast === coast.key && (
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-white"
                  style={{ background: 'var(--saffron)', fontSize: '0.9rem' }}>✓</div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── QUICK ACTIONS RAIL ────────────────────────────────────────────────── */}
      <section style={{ padding: '0 0 4.5rem', background: 'white' }}>
        <div className="text-center mb-8 px-6">
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem,3.5vw,2.2rem)', fontWeight: 700, color: 'var(--navy)' }}>
            What Do You Need First?
          </h2>
        </div>
        <div className="ga-qa-rail flex gap-4 px-6 overflow-x-auto" style={{ maxWidth: 1100, margin: '0 auto', paddingBottom: 4 }}>
          {QUICK_ACTIONS.map((a, i) => (
            <Link to={a.link}>
            <button key={i}
              style={{
                display: 'flex', alignItems: 'center', gap: 12, padding: '1.1rem 1.6rem', borderRadius: 50,
                background: 'white', border: `2px solid ${a.color}25`, color: a.color,
                fontFamily: 'var(--font-body)', fontSize: '0.95rem', fontWeight: 600,
                boxShadow: '0 4px 16px rgba(0,0,0,0.06)', cursor: 'pointer', transition: 'all 0.3s var(--ease)',
                whiteSpace: 'nowrap', flexShrink: 0,
              }}
              onMouseEnter={e => { e.currentTarget.style.background = a.color; e.currentTarget.style.color = 'white'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'white'; e.currentTarget.style.color = a.color; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              <span style={{ fontSize: '1.4rem' }}>{a.icon}</span>
              <span>{a.label}</span>
            </button>
            </Link>
          ))}
        </div>
      </section>

      {/* ── DESTINATIONS — HORIZONTAL CAROUSEL ───────────────────────────────── */}
      <section className="ga-reveal" style={{ padding: '1rem 0 5.5rem', background: 'var(--cream)' }}
        ref={el => { if (el) { const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) el.classList.add('revealed'); }, { threshold: 0.1 }); obs.observe(el); } }}>
        <div className="flex items-end justify-between px-6 mb-8 mx-auto" style={{ maxWidth: 1200 }}>
          <div>
            <span style={{ display: 'inline-block', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--saffron)', background: 'rgba(255,107,53,0.08)', padding: '5px 14px', borderRadius: '50px', marginBottom: '0.8rem', fontFamily: 'var(--font-body)' }}>
              Set the Itinerary
            </span>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem,4vw,2.6rem)', fontWeight: 700, color: 'var(--navy)' }}>
              Six Places to Begin
            </h2>
          </div>
          <div className="flex gap-2 flex-shrink-0">
            <button onClick={() => scrollCarousel(-1)} style={{ width: 40, height: 40, borderRadius: '50%', border: '1px solid #ddd', background: 'white', cursor: 'pointer', fontSize: '1.1rem' }}>‹</button>
            <button onClick={() => scrollCarousel(1)} style={{ width: 40, height: 40, borderRadius: '50%', border: '1px solid #ddd', background: 'white', cursor: 'pointer', fontSize: '1.1rem' }}>›</button>
          </div>
        </div>

        <div ref={carouselRef} className="ga-carousel flex gap-5 px-6 overflow-x-auto" style={{ maxWidth: 1200, margin: '0 auto' }}>
          {DESTINATIONS.map((d, i) => (
            <div key={i} className="ga-carousel-card relative rounded-2xl overflow-hidden cursor-pointer" style={{ width: 300, height: 380 }}>
              <img src={d.img} alt={d.name} className="ga-carousel-img w-full h-full object-cover transition-transform duration-700" loading="lazy" />
              <div className="absolute inset-0 flex flex-col justify-end p-5"
                style={{ background: 'linear-gradient(180deg, transparent 35%, rgba(10,10,30,0.85) 100%)' }}>
                <span style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--gold-light)', marginBottom: 3 }}>{d.tag}</span>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 700, color: 'white', lineHeight: 1.1, marginBottom: 4 }}>{d.name}</div>
                <div style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.7)', marginBottom: 6, fontFamily: 'var(--font-body)' }}>{d.desc}</div>
                <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.85)', fontFamily: 'var(--font-body)' }}>✈️ From {d.price}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CATEGORY EXPLORE (tab-style) + CARDS ─────────────────────────────── */}
      <section className="ga-reveal" style={{ padding: '5rem 2rem', background: 'white' }}
        ref={el => { if (el) { const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) el.classList.add('revealed'); }, { threshold: 0.08 }); obs.observe(el); } }}>
        <div className="text-center" style={{ marginBottom: '2.5rem' }}>
          <span style={{ display: 'inline-block', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--indigo)', background: 'rgba(61,82,160,0.08)', padding: '5px 14px', borderRadius: '50px', marginBottom: '1rem', fontFamily: 'var(--font-body)' }}>
            Explore by Mood
          </span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,5vw,3rem)', fontWeight: 700, color: 'var(--navy)' }}>
            Goa, India
          </h2>
        </div>

        {/* Tab-style category strip */}
        <div className="flex flex-wrap gap-x-7 gap-y-3 justify-center mb-3 pb-3" style={{ borderBottom: '1px solid #eee', maxWidth: 1000, margin: '0 auto' }}>
          {CATEGORIES.map(cat => (
            <button
              key={cat.key}
              onClick={() => handleCategoryChange(cat.key)}
              className={`ga-tab flex items-center gap-2 font-semibold text-sm pb-2 ${selected === cat.key ? 'active' : ''}`}
              style={{ color: selected === cat.key ? 'var(--saffron)' : '#555', fontFamily: 'var(--font-body)', fontSize: '0.88rem', background: 'none', border: 'none' }}
            >
              <span>{cat.icon}</span>
              {cat.label}
            </button>
          ))}
        </div>

        {/* Search within category */}
        <div className="flex justify-center mb-10 mt-6">
          <div className="flex rounded-full overflow-hidden" style={{ border: '1.5px solid #e0e3f0', width: 340, background: 'white' }}>
            <input
              type="text"
              placeholder="Filter places..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              style={{ flex: 1, padding: '0.7rem 1.25rem', border: 'none', outline: 'none', fontSize: '0.9rem', fontFamily: 'var(--font-body)' }}
            />
            <span style={{ padding: '0 1rem', display: 'flex', alignItems: 'center', color: '#999' }}>🔍</span>
          </div>
        </div>

        {loading ? (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem', maxWidth: 1200, margin: '0 auto' }}>
            {[...Array(6)].map((_, i) => (
              <div key={i} style={{ borderRadius: 20, overflow: 'hidden', background: '#fafbff' }}>
                <div className="skeleton" style={{ height: 200 }} />
                <div style={{ padding: '1rem' }}>
                  <div className="skeleton" style={{ height: 20, marginBottom: 8, width: '70%' }} />
                  <div className="skeleton" style={{ height: 14, width: '50%' }} />
                </div>
              </div>
            ))}
          </div>
        ) : filteredCards.length === 0 ? (
          <div className="text-center py-16" style={{ color: '#999' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🏝️</div>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem' }}>No places found. Try a different keyword.</p>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.75rem', maxWidth: 1200, margin: '0 auto' }}>
            {filteredCards.map((card, i) => (
              <div key={i} className="ga-card rounded-3xl overflow-hidden relative"
                style={{ background: 'white', border: '1px solid rgba(200,200,230,0.25)' }}>
                {card.images && <ImageCarousel images={[card.images]} />}
                <span style={{ position: 'absolute', top: 14, left: 14, background: 'rgba(13,30,40,0.75)', color: 'white', fontSize: '0.7rem', fontWeight: 700, padding: '5px 12px', borderRadius: 50, fontFamily: 'var(--font-body)', letterSpacing: '0.04em' }}>
                  {CATEGORIES.find(c => c.key === selected)?.icon} {CATEGORIES.find(c => c.key === selected)?.label}
                </span>
                <div style={{ padding: '1.25rem 1.5rem 1.5rem' }}>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '0.35rem' }}>
                    <Link to={card.link} style={{ color: 'inherit', textDecoration: 'none' }}
                      onMouseEnter={e => e.currentTarget.style.color = 'var(--teal)'}
                      onMouseLeave={e => e.currentTarget.style.color = 'var(--navy)'}>
                      {card.title}
                    </Link>
                  </h3>
                  {card.subtitle && (
                    <p style={{ fontSize: '0.85rem', color: '#888', fontFamily: 'var(--font-body)', lineHeight: 1.55 }}>{card.subtitle}</p>
                  )}
                  <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'flex-end' }}>
                    <Link to={card.link} style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--indigo)', textDecoration: 'none', fontFamily: 'var(--font-body)' }}>
                      Explore →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <Outlet />
      </section>

      {/* ── EXPERIENCES — ALTERNATING ROWS ───────────────────────────────────── */}
      <section className="ga-reveal" style={{ padding: '5rem 2rem', background: 'var(--navy)' }}
        ref={el => { if (el) { const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) el.classList.add('revealed'); }, { threshold: 0.08 }); obs.observe(el); } }}>
        <div className="text-center mb-12">
          <span style={{ display: 'inline-block', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold-light)', background: 'rgba(201,168,76,0.15)', padding: '5px 14px', borderRadius: '50px', marginBottom: '1rem', fontFamily: 'var(--font-body)' }}>
            Only in Goa
          </span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,5vw,3rem)', fontWeight: 700, color: 'white' }}>
            How Goa Spends a Day
          </h2>
        </div>

        <div className="mx-auto" style={{ maxWidth: 820 }}>
          {EXPERIENCES.map((exp, i) => (
            <div key={i} className="ga-exp-row flex items-center gap-6 py-5 rounded-2xl px-4"
              style={{ borderBottom: i < EXPERIENCES.length - 1 ? '1px solid rgba(255,255,255,0.08)' : 'none' }}>
              <div className="ga-exp-icon flex items-center justify-center flex-shrink-0"
                style={{ width: 60, height: 60, borderRadius: '50%', background: `${exp.color}1f`, fontSize: '1.8rem' }}>
                {exp.icon}
              </div>
              <div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'white', marginBottom: '0.35rem', fontFamily: 'var(--font-body)' }}>{exp.title}</h3>
                <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.6, fontFamily: 'var(--font-body)' }}>{exp.desc}</p>
              </div>
              <div style={{ marginLeft: 'auto', width: 5, height: 36, borderRadius: 4, background: exp.color, flexShrink: 0 }} />
            </div>
          ))}
        </div>
      </section>

      {/* ── TRAVEL TIPS — ACCORDION ───────────────────────────────────────────── */}
      <section className="ga-reveal" style={{ padding: '5rem 2rem', background: 'var(--cream)' }}
        ref={el => { if (el) { const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) el.classList.add('revealed'); }, { threshold: 0.1 }); obs.observe(el); } }}>
        <div className="text-center mb-12">
          <span style={{ display: 'inline-block', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--indigo)', background: 'rgba(61,82,160,0.08)', padding: '5px 14px', borderRadius: '50px', marginBottom: '1rem', fontFamily: 'var(--font-body)' }}>
            Before You Pack
          </span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,5vw,3rem)', fontWeight: 700, color: 'var(--navy)' }}>
            Travel Tips for Goa
          </h2>
        </div>

        <div className="mx-auto rounded-3xl overflow-hidden" style={{ maxWidth: 760, background: 'white', border: '1px solid #eef0ff' }}>
          {TRAVEL_TIPS.map((tip, i) => (
            <div key={i}>
              <div className="ga-tip-row flex items-center gap-4 p-6"
                onClick={() => setOpenTip(openTip === i ? -1 : i)}
                style={{ borderBottom: i < TRAVEL_TIPS.length - 1 || openTip === i ? '1px solid #f0f0f8' : 'none' }}>
                <div style={{ fontSize: '1.6rem', flexShrink: 0 }}>{tip.icon}</div>
                <h4 style={{ flex: 1, fontWeight: 700, color: 'var(--navy)', fontFamily: 'var(--font-body)', fontSize: '1rem' }}>{tip.title}</h4>
                <span className={`ga-tip-chevron ${openTip === i ? 'open' : ''}`} style={{ color: 'var(--teal)', fontSize: '1.1rem' }}>⌄</span>
              </div>
              {openTip === i && (
                <div className="px-6 pb-6" style={{ borderBottom: i < TRAVEL_TIPS.length - 1 ? '1px solid #f0f0f8' : 'none' }}>
                  <p style={{ fontSize: '0.92rem', color: '#666', lineHeight: 1.7, fontFamily: 'var(--font-body)', paddingLeft: 44 }}>{tip.tip}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────────── */}
      <section className="ga-cta-bg text-center" style={{ padding: '6rem 2rem' }}>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,5vw,3.2rem)', fontWeight: 700, color: 'white', marginBottom: '1rem' }}>
          Ready for Some Susegad?
        </h2>
        <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.75)', marginBottom: '2.5rem', maxWidth: 540, marginLeft: 'auto', marginRight: 'auto', fontFamily: 'var(--font-body)', lineHeight: 1.7 }}>
          From church bells in Old Goa to shack tables in the sand — let's plan a coastline that suits your pace.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link to="/contact"
            style={{ padding: '1rem 2.5rem', background: 'var(--gold)', color: 'var(--navy)', border: 'none', borderRadius: '50px', fontSize: '1rem', fontWeight: 700, cursor: 'pointer', fontFamily: 'var(--font-body)', boxShadow: '0 10px 30px rgba(201,168,76,0.4)', textDecoration: 'none', display: 'inline-block', transition: 'all 0.3s' }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(201,168,76,0.55)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 10px 30px rgba(201,168,76,0.4)'; }}>
            Plan My Goa Trip 🌴
          </Link>
          <a href="tel:+917888251550"
            style={{ padding: '1rem 2.5rem', background: 'transparent', color: 'white', border: '1.5px solid rgba(255,255,255,0.35)', borderRadius: '50px', fontSize: '1rem', fontWeight: 600, cursor: 'pointer', fontFamily: 'var(--font-body)', textDecoration: 'none', display: 'inline-block', transition: 'all 0.3s' }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.6)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.35)'; }}>
            📞 Call Us Now
          </a>
        </div>
      </section>
    </>
  );
}

export default Goa;