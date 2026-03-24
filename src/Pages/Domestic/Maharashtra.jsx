import React, { useEffect, useState, useRef, useCallback } from 'react';
import { Link, Outlet, useLocation, useNavigate, useSearchParams } from 'react-router-dom';
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
    img: "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?w=1800&q=85",
    place: "Gateway of India, Mumbai",
    tag: "Iconic Landmark",
  },
  {
    img: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=1800&q=85",
    place: "Ajanta Caves",
    tag: "UNESCO Heritage",
  },
  {
    img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1800&q=85",
    place: "Sahyadri Mountains",
    tag: "Western Ghats",
  },
  {
    img: "https://images.unsplash.com/photo-1544015759-237f43ca3d53?w=1800&q=85",
    place: "Alibaug Beach",
    tag: "Coastal Paradise",
  },
];

const CATEGORIES = [
  { key: 'essential', label: 'Essentials', icon: '⭐' },
  { key: 'traveller', label: "Travellers' Choice", icon: '🏆' },
  { key: 'family', label: 'Family Friendly', icon: '👨‍👩‍👧‍👦' },
  { key: 'hidden', label: 'Hidden Gems', icon: '💎' },
  { key: 'museums', label: 'Museums', icon: '🏛️' },
  { key: 'outdoors', label: 'Outdoors', icon: '🌿' },
  { key: 'arts', label: 'Arts & Theatre', icon: '🎭' },
  { key: 'nightlife', label: 'Night Life', icon: '🌙' },
];

const QUICK_ACTIONS = [
  { label: 'Hotels', icon: '🏨', color: '#3D52A0' },
  { label: 'Things To Do', icon: '🎯', color: '#FF6B6B' },
  { label: 'Restaurants', icon: '🍽️', color: '#FFB347' },
  { label: 'Holiday Homes', icon: '🏡', color: '#4ECDC4' },
];

const DESTINATIONS = [
  {
    img: "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?w=800&q=80",
    name: "Mumbai", tag: "City of Dreams", price: "₹6,999", desc: "Bollywood, street food & sea",
  },
  {
    img: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800&q=80",
    name: "Aurangabad", tag: "City of Caves", price: "₹8,499", desc: "Ajanta, Ellora & Bibi Ka Maqbara",
  },
  {
    img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    name: "Lonavala", tag: "Hill Station", price: "₹4,999", desc: "Misty valleys & waterfalls",
  },
  {
    img: "https://images.unsplash.com/photo-1544015759-237f43ca3d53?w=800&q=80",
    name: "Alibaug", tag: "Beach Escape", price: "₹5,499", desc: "Sun, sand & sea forts",
  },
  {
    img: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&q=80",
    name: "Pune", tag: "Oxford of the East", price: "₹3,999", desc: "Culture, cafes & Osho",
  },
  {
    img: "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=800&q=80",
    name: "Nashik", tag: "Wine Capital", price: "₹5,999", desc: "Vineyards & holy ghats",
  },
];

const EXPERIENCES = [
  { icon: '🏰', title: 'Fort Trails', desc: '360+ Maratha forts including Raigad, Sinhagad & Pratapgad — each a stone chapter of epic history.', color: '#3D52A0' },
  { icon: '🍛', title: 'Culinary Journey', desc: 'Vada pav, Misal, Puran Poli & Kolhapuri — a food odyssey across Maharashtra\'s distinct regional cuisines.', color: '#FF6B6B' },
  { icon: '🎭', title: 'Lavani & Folk Arts', desc: 'Witness the vibrant Lavani dance, Tamasha performances & Warli art that pulse with cultural pride.', color: '#FFB347' },
  { icon: '🌊', title: 'Konkan Coast', desc: '720 km of pristine coastline with fishing villages, coconut groves & some of India\'s cleanest beaches.', color: '#4ECDC4' },
  { icon: '🦋', title: 'Wildlife Sanctuaries', desc: 'Tadoba Tiger Reserve, Navegaon & Melghat — where the wild roams free across Maharashtra\'s forests.', color: '#7BAE7F' },
  { icon: '🍇', title: 'Winery Tours', desc: 'Nashik\'s wine valley offers vineyard walks, wine tasting & boutique stays amidst rolling green hills.', color: '#A37BFF' },
];

const TRAVEL_TIPS = [
  { icon: '🌤️', title: 'Best Time to Visit', tip: 'Oct–Mar is ideal. Monsoon (Jun–Sep) transforms the Sahyadris into lush emerald landscapes.' },
  { icon: '🚆', title: 'Getting Around', tip: 'Maharashtra has excellent rail connectivity. Mumbai\'s local trains are iconic — try the Deccan Queen for Pune.' },
  { icon: '💰', title: 'Budget Guide', tip: 'Budget: ₹2,000/day. Mid-range: ₹5,000/day. Luxury resorts in Alibaug or Mahabaleshwar: ₹15,000+/night.' },
  { icon: '🗣️', title: 'Local Language', tip: 'Marathi is the heart of the state. A warm "Namaskar!" or "Kasa aahat?" will earn you big smiles.' },
];

// ── Image Carousel ─────────────────────────────────────────────────────────────
function ImageCarousel({ images }) {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIndex(i => (i + 1) % images.length), 4000);
    return () => clearInterval(t);
  }, [images.length]);

  return (
    <div className="relative w-full" style={{ paddingTop: '70%' }}>
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
function HeroSlider() {
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
      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {HERO_SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`transition-all rounded-full border border-white/60 ${i === current ? 'w-8 h-2 bg-white' : 'w-2 h-2 bg-white/40'}`}
          />
        ))}
      </div>
      {/* Current place label */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 text-center z-20">
        <span className="text-xs tracking-widest uppercase text-amber-300 font-semibold block mb-1">
          {HERO_SLIDES[current].tag}
        </span>
        <span className="text-white font-light text-lg tracking-wide">
          {HERO_SLIDES[current].place}
        </span>
      </div>
    </div>
  );
}

// ── Main Component ─────────────────────────────────────────────────────────────
function Maharashtra() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const initialCategory = searchParams.get('category') || localStorage.getItem('mh_category') || 'essential';
  const [selected, setSelected] = useState(initialCategory);
  const [cardData, setCardData] = useState([]);
  const [cardSearchQuery, setCardSearchQuery] = useState([]);
  const [loading, setLoading] = useState(true);
  const [allCards, setAllCards] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [heroVisible, setHeroVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [weatherData] = useState({ temp: '28°C', condition: 'Partly Cloudy', icon: '⛅' });

  // Count up stats
  const [fortsCount, fortsRef] = useCountUp(360, 2000);
  const [beachCount, beachRef] = useCountUp(720, 2200);
  const [heritageCount, heritageRef] = useCountUp(5, 1500);
  const [districtCount, districtRef] = useCountUp(36, 1800);

  useEffect(() => {
    setTimeout(() => setHeroVisible(true), 100);
  }, []);

  const fetchData = useCallback(async (type) => {
    setLoading(true);
    try {
      const res = await api.get(`/maharashtra-cards/${type}`);

      const categoryData = Array.isArray(res.data.data)
        ? res.data.data
        : [];

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
        const res = await api.get(`/maharashtra-cards/getall`);
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
      localStorage.setItem('mh_category', key);
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

        /* Hero animations */
        .mh-hero-content { transition: all 1s var(--ease); }
        .mh-hero-content.hidden-state { opacity: 0; transform: translateY(40px); }
        .mh-hero-content.visible-state { opacity: 1; transform: translateY(0); }

        .mh-eyebrow-delay-1 { animation: mhFadeUp 0.8s 0.1s var(--ease) both; }
        .mh-eyebrow-delay-2 { animation: mhFadeUp 0.8s 0.25s var(--ease) both; }
        .mh-eyebrow-delay-3 { animation: mhFadeUp 0.8s 0.4s var(--ease) both; }
        .mh-eyebrow-delay-4 { animation: mhFadeUp 0.8s 0.55s var(--ease) both; }
        .mh-eyebrow-delay-5 { animation: mhFadeUp 0.8s 0.7s var(--ease) both; }

        @keyframes mhFadeUp {
          from { opacity: 0; transform: translateY(25px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* Pulse dot */
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

        /* Section reveal */
        .mh-reveal {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.75s var(--ease), transform 0.75s var(--ease);
        }
        .mh-reveal.revealed {
          opacity: 1;
          transform: translateY(0);
        }

        /* Destination card hover */
        .dest-card:hover .dest-img { transform: scale(1.07); }
        .dest-card:hover .dest-arrow { opacity: 1; transform: translate(0,0); }

        /* Category pill */
        .cat-pill {
          transition: all 0.25s var(--ease);
          font-family: var(--font-body);
          cursor: pointer;
        }
        .cat-pill.active {
          background: linear-gradient(135deg, var(--saffron), var(--saffron-light));
          color: white;
          border-color: transparent;
          box-shadow: 0 6px 18px rgba(255,107,53,0.35);
        }
        .cat-pill:not(.active):hover {
          border-color: var(--saffron);
          color: var(--saffron);
          transform: translateY(-2px);
        }

        /* Card hover */
        .mh-card {
          transition: transform 0.35s var(--ease), box-shadow 0.35s var(--ease);
        }
        .mh-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 24px 50px rgba(0,0,0,0.13);
        }

        /* Experience card */
        .exp-card {
          transition: all 0.3s var(--ease);
          border: 1px solid rgba(200,200,230,0.2);
        }
        .exp-card:hover {
          transform: translateY(-5px);
          border-color: rgba(255,107,53,0.25);
          box-shadow: 0 16px 36px rgba(0,0,0,0.09);
        }

        /* Scrollbar */
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #f1f1f1; }
        ::-webkit-scrollbar-thumb { background: var(--saffron); border-radius: 3px; }

        /* Skeleton */
        .skeleton {
          background: linear-gradient(90deg, #f0f0f8 25%, #e8e8f0 50%, #f0f0f8 75%);
          background-size: 200% 100%;
          animation: shimmer 1.4s infinite;
          border-radius: 8px;
        }
        @keyframes shimmer { 0%{background-position:200% 0} 100%{background-position:-200% 0} }

        /* CTA gradient */
        .mh-cta-bg {
          background: linear-gradient(135deg, #1a1a2e 0%, #3D52A0 55%, #1a1a2e 100%);
          background-size: 200% 100%;
          animation: ctaShimmer 9s linear infinite;
        }
        @keyframes ctaShimmer { 0%{background-position:0%} 100%{background-position:200%} }

        /* Scroll line */
        .scroll-line {
          width: 1px; height: 44px;
          background: linear-gradient(to bottom, rgba(255,255,255,0.6), transparent);
          animation: scrollLine 1.6s ease-in-out infinite;
        }
        @keyframes scrollLine { 0%,100%{transform:scaleY(1);opacity:1} 50%{transform:scaleY(0.4);opacity:0.3} }

        @media(max-width:640px){
          .stats-grid { grid-template-columns: repeat(2,1fr) !important; }
          .dest-grid  { grid-template-columns: 1fr !important; }
          .exp-grid   { grid-template-columns: 1fr !important; }
          .tip-grid   { grid-template-columns: 1fr !important; }
          .qa-grid    { grid-template-columns: repeat(2,1fr) !important; }
        }
      `}</style>

      {/* ── HERO ──────────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ background: 'var(--navy)' }}>
        {/* Background slider */}
        <div className="absolute inset-0">
          <HeroSlider />
        </div>
        {/* Overlays */}
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(255,107,53,0.2) 0%, transparent 70%), linear-gradient(180deg, rgba(26,26,46,0.25) 0%, rgba(26,26,46,0.88) 100%)'
        }} />

        {/* Content */}
        <div className={`relative z-10 text-center px-6 max-w-4xl mx-auto mh-hero-content ${heroVisible ? 'visible-state' : 'hidden-state'}`}
          style={{ paddingBottom: '7rem' }}>
          {/* Eyebrow badge */}
          <div className="mh-eyebrow-delay-1 inline-flex items-center gap-2 mb-7"
            style={{ background: 'rgba(201,168,76,0.15)', border: '1px solid rgba(201,168,76,0.4)', color: 'var(--gold-light)', padding: '6px 20px', borderRadius: '50px', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase' }}>
            <span className="live-dot" />
            Incredible Maharashtra
          </div>

          {/* Title */}
          <h1 className="mh-eyebrow-delay-2 font-display text-white mb-5 leading-none"
            style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(3.5rem,9vw,7rem)', fontWeight: 700, lineHeight: 1.04 }}>
            Discover the<br />
            <span style={{ color: 'var(--gold-light)', fontStyle: 'italic' }}>Soul</span> of Maharashtra
          </h1>

          <p className="mh-eyebrow-delay-3 mx-auto mb-8" style={{ fontSize: 'clamp(1rem,2.5vw,1.2rem)', color: 'rgba(255,255,255,0.8)', maxWidth: 580, lineHeight: 1.75, fontFamily: 'var(--font-body)' }}>
            360+ forts, UNESCO caves, Konkan shores & vibrant cities — India's most multifaceted state awaits your footsteps.
          </p>

          {/* Search */}
          <div className="mh-eyebrow-delay-4 mx-auto mb-6 flex overflow-hidden rounded-2xl shadow-2xl"
            style={{ maxWidth: 560, background: 'white' }}>
            <input
              type="text"
              placeholder="Search places, forts, beaches, experiences..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              style={{ flex: 1, padding: '1rem 1.5rem', border: 'none', outline: 'none', fontSize: '1rem', fontFamily: 'var(--font-body)', color: 'var(--navy)' }}
            />
            <button style={{ padding: '0 1.75rem', background: 'linear-gradient(135deg, var(--saffron), var(--saffron-light))', border: 'none', color: 'white', fontWeight: 700, fontSize: '0.9rem', cursor: 'pointer', fontFamily: 'var(--font-body)' }}>
              Search
            </button>
          </div>

          {/* Quick pills */}
          <div className="mh-eyebrow-delay-5 flex flex-wrap gap-2 justify-center">
            {['🏰 Forts', '🌊 Beaches', '🍛 Food Tours', '💎 Hidden Gems', '🌿 Eco Trails', '🏛️ Heritage'].map(p => (
              <span key={p}
                onClick={() => setSearchQuery(p.split(' ')[1])}
                style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.9)', padding: '6px 15px', borderRadius: '50px', fontSize: '0.82rem', cursor: 'pointer', transition: 'all 0.25s', fontFamily: 'var(--font-body)' }}
                className="hover:bg-amber-400/20 hover:border-amber-400 hover:text-amber-300 transition-all"
              >{p}</span>
            ))}
          </div>
        </div>

        {/* Live badge bottom */}
        <div style={{
          position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)',
          display: 'flex', alignItems: 'center', gap: 12,
          padding: '10px 24px', borderRadius: 50,
          background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255,255,255,0.15)',
          color: 'white', fontSize: '0.83rem', whiteSpace: 'nowrap',
          fontFamily: 'var(--font-body)', zIndex: 20,
        }}>
          <span className="live-dot" />
          <span><strong>{weatherData.icon} {weatherData.temp}</strong> in Maharashtra · <strong>36</strong> districts · <strong>Best time:</strong> Oct–Mar</span>
        </div>


        {searchQuery && (
          <p style={{ textAlign: "center", marginBottom: "1rem" }}>
            Showing results for "<strong>{searchQuery}</strong>" across all categories
          </p>
        )}

        {/* Scroll indicator */}
        <div style={{
          position: 'absolute', bottom: '2.5rem', right: '2.5rem',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
          color: 'rgba(255,255,255,0.4)', fontSize: '0.7rem',
          letterSpacing: '0.1em', textTransform: 'uppercase',
          fontFamily: 'var(--font-body)', zIndex: 20,
        }}>
          <div className="scroll-line" />
          <span>Scroll</span>
        </div>
      </section>

      {/* ── STATS ─────────────────────────────────────────────────────────────── */}
      <section style={{ background: 'white', padding: '3.5rem 2rem', borderBottom: '1px solid #f0f0f8' }}>
        <div className="stats-grid mx-auto" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '1.5rem', maxWidth: 1100 }}>
          {[
            { num: fortsCount, suffix: '+', label: 'Historic Forts', ref: fortsRef, icon: '🏰' },
            { num: beachCount, suffix: ' km', label: 'Coastline', ref: beachRef, icon: '🌊' },
            { num: heritageCount, suffix: '', label: 'UNESCO Sites', ref: heritageRef, icon: '🏛️' },
            { num: districtCount, suffix: '', label: 'Districts', ref: districtRef, icon: '🗺️' },
          ].map((s, i) => (
            <div key={i} ref={s.ref}
              className="text-center p-6 rounded-2xl cursor-default transition-all duration-300 hover:-translate-y-1"
              style={{ background: '#fafbff', border: '1px solid #eef0ff' }}>
              <div style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>{s.icon}</div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.6rem', fontWeight: 700, color: 'var(--saffron)', lineHeight: 1 }}>
                {s.num.toLocaleString()}{s.suffix}
              </div>
              <div style={{ fontSize: '0.88rem', color: '#666', fontWeight: 500, marginTop: '0.4rem', fontFamily: 'var(--font-body)' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── QUICK ACTIONS ─────────────────────────────────────────────────────── */}
      <section style={{ padding: '4rem 2rem', background: 'var(--cream)' }}>
        <div className="mx-auto text-center" style={{ maxWidth: 900 }}>
          <span style={{ display: 'inline-block', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--indigo)', background: 'rgba(61,82,160,0.08)', padding: '5px 14px', borderRadius: '50px', marginBottom: '1rem', fontFamily: 'var(--font-body)' }}>
            Quick Browse
          </span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem,4vw,2.6rem)', fontWeight: 700, color: 'var(--navy)', marginBottom: '2.5rem' }}>
            What Are You Looking For?
          </h2>
          <div className="qa-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.25rem', maxWidth: 860, margin: '0 auto' }}>
            {QUICK_ACTIONS.map((a, i) => (
              <button key={i}
                style={{
                  display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                  gap: 12, padding: '2rem 1rem', borderRadius: 16,
                  background: 'white', border: `2px solid ${a.color}18`,
                  color: a.color, fontFamily: 'var(--font-body)',
                  fontSize: '0.95rem', fontWeight: 600,
                  boxShadow: '0 4px 16px rgba(0,0,0,0.07)',
                  cursor: 'pointer', transition: 'all 0.3s var(--ease)',
                  minHeight: 130,
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = a.color;
                  e.currentTarget.style.color = 'white';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = `0 16px 36px ${a.color}40`;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'white';
                  e.currentTarget.style.color = a.color;
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.07)';
                }}
              >
                <span style={{ fontSize: '2rem', lineHeight: 1 }}>{a.icon}</span>
                <span>{a.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── DESTINATIONS GRID ─────────────────────────────────────────────────── */}
      <section className="mh-reveal" style={{ padding: '5rem 2rem', background: 'white' }}
        ref={el => { if (el) { const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) el.classList.add('revealed'); }, { threshold: 0.1 }); obs.observe(el); } }}>
        <div className="text-center mb-14" style={{ maxWidth: 700, margin: '0 auto 3.5rem' }}>
          <span style={{ display: 'inline-block', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--saffron)', background: 'rgba(255,107,53,0.08)', padding: '5px 14px', borderRadius: '50px', marginBottom: '1rem', fontFamily: 'var(--font-body)' }}>
            Top Picks
          </span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,5vw,3rem)', fontWeight: 700, color: 'var(--navy)', marginBottom: '0.75rem' }}>
            Iconic Maharashtra Destinations
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#666', lineHeight: 1.7, fontFamily: 'var(--font-body)' }}>
            Hand-picked places that capture the diverse magic of Maharashtra.
          </p>
        </div>

        <div className="dest-grid mx-auto" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.25rem', maxWidth: 1200 }}>
          {DESTINATIONS.map((d, i) => (
            <div key={i} className="dest-card relative rounded-2xl overflow-hidden cursor-pointer" style={{ height: i === 0 ? 480 : 220, gridRow: i === 0 ? 'span 2' : 'auto' }}>
              <img src={d.img} alt={d.name} className="dest-img w-full h-full object-cover transition-transform duration-700" loading="lazy" />
              <div className="absolute inset-0 flex flex-col justify-end p-5"
                style={{ background: 'linear-gradient(180deg, transparent 30%, rgba(10,10,30,0.83) 100%)' }}>
                <span style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--gold-light)', marginBottom: 3 }}>{d.tag}</span>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: i === 0 ? '2.2rem' : '1.5rem', fontWeight: 700, color: 'white', lineHeight: 1.1, marginBottom: 4 }}>{d.name}</div>
                <div style={{ fontSize: '0.83rem', color: 'rgba(255,255,255,0.7)', marginBottom: 6, fontFamily: 'var(--font-body)' }}>{d.desc}</div>
                <div style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.85)', fontFamily: 'var(--font-body)' }}>✈️ From {d.price}</div>
              </div>
              <div className="dest-arrow absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center text-white text-sm"
                style={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)', opacity: 0, transform: 'translate(-5px,5px)', transition: 'all 0.3s var(--ease)' }}>→</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CATEGORY FILTER + CARDS ───────────────────────────────────────────── */}
      <section className="mh-reveal" style={{ padding: '5rem 2rem', background: 'var(--cream)' }}
        ref={el => { if (el) { const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) el.classList.add('revealed'); }, { threshold: 0.08 }); obs.observe(el); } }}>
        <div className="text-center" style={{ marginBottom: '3rem' }}>
          <span style={{ display: 'inline-block', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--indigo)', background: 'rgba(61,82,160,0.08)', padding: '5px 14px', borderRadius: '50px', marginBottom: '1rem', fontFamily: 'var(--font-body)' }}>
            Explore by Category
          </span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,5vw,3rem)', fontWeight: 700, color: 'var(--navy)' }}>
            Maharashtra, India
          </h2>
          <p style={{ fontSize: '1rem', color: '#777', marginTop: '0.5rem', fontFamily: 'var(--font-body)' }}>
            Pick a category to filter your recommendations
          </p>
        </div>

        {/* Category pills */}
        <div className="flex flex-wrap gap-3 justify-center mb-10">
          {CATEGORIES.map(cat => (
            <button
              key={cat.key}
              onClick={() => handleCategoryChange(cat.key)}
              className={`cat-pill flex items-center gap-2 px-5 py-3 rounded-full border-2 font-semibold text-sm ${selected === cat.key ? 'active' : ''}`}
              style={{
                borderColor: selected === cat.key ? 'transparent' : '#e0e3f0',
                color: selected === cat.key ? 'white' : '#555',
                fontFamily: 'var(--font-body)',
                fontSize: '0.85rem',
                background: selected === cat.key ? '' : 'white',
              }}
            >
              <span>{cat.icon}</span>
              {cat.label}
            </button>
          ))}
        </div>

        {/* Search within category */}
        <div className="flex justify-center mb-10 m-3">
          <div className="flex rounded-full overflow-hidden"
            style={{ border: '1.5px solid #e0e3f0', width: 340, background: 'white', transition: 'border-color 0.2s' }}
            onFocus={e => e.currentTarget.style.borderColor = 'var(--saffron)'}
            onBlur={e => e.currentTarget.style.borderColor = '#e0e3f0'}>
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

        {/* Cards */}
        {loading ? (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem', maxWidth: 1200, margin: '0 auto' }}>
            {[...Array(6)].map((_, i) => (
              <div key={i} style={{ borderRadius: 16, overflow: 'hidden', background: 'white' }}>
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
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔍</div>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem' }}>No places found. Try a different keyword.</p>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.75rem', maxWidth: 1200, margin: '0 auto' }}>
            {filteredCards.map((card, i) => (
              <div key={i} className="mh-card rounded-2xl overflow-hidden"
                style={{ background: 'white', border: '1px solid rgba(200,200,230,0.25)' }}
                onMouseEnter={() => setHoveredCard(i)}
                onMouseLeave={() => setHoveredCard(null)}>
                {card.images && (
                  <ImageCarousel images={[card.images]} />
                )}
                <div style={{ padding: '1.25rem 1.5rem 1.5rem' }}>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '0.35rem' }}>
                    <Link to={card.link} style={{ color: 'inherit', textDecoration: 'none' }}
                      onMouseEnter={e => e.currentTarget.style.color = 'var(--saffron)'}
                      onMouseLeave={e => e.currentTarget.style.color = 'var(--navy)'}>
                      {card.title}
                    </Link>
                  </h3>
                  {card.subtitle && (
                    <p style={{ fontSize: '0.85rem', color: '#888', fontFamily: 'var(--font-body)', lineHeight: 1.55 }}>{card.subtitle}</p>
                  )}
                  <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--saffron)', fontFamily: 'var(--font-body)' }}>
                      {CATEGORIES.find(c => c.key === selected)?.label}
                    </span>
                    <Link to={card.link}
                      style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--indigo)', textDecoration: 'none', fontFamily: 'var(--font-body)' }}>
                      View Details →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <Outlet />
      </section>

      {/* ── UNIQUE EXPERIENCES ────────────────────────────────────────────────── */}
      <section className="mh-reveal" style={{ padding: '5rem 2rem', background: 'var(--navy)' }}
        ref={el => { if (el) { const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) el.classList.add('revealed'); }, { threshold: 0.08 }); obs.observe(el); } }}>
        <div className="text-center mb-14">
          <span style={{ display: 'inline-block', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold-light)', background: 'rgba(201,168,76,0.15)', padding: '5px 14px', borderRadius: '50px', marginBottom: '1rem', fontFamily: 'var(--font-body)' }}>
            Only in Maharashtra
          </span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,5vw,3rem)', fontWeight: 700, color: 'white', marginBottom: '0.75rem' }}>
            Unique Experiences
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, maxWidth: 560, margin: '0 auto', fontFamily: 'var(--font-body)' }}>
            Beyond the ordinary — moments that only Maharashtra can offer.
          </p>
        </div>

        <div className="exp-grid mx-auto" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.5rem', maxWidth: 1100 }}>
          {EXPERIENCES.map((exp, i) => (
            <div key={i} className="exp-card rounded-2xl"
              style={{ background: 'rgba(255,255,255,0.05)', padding: '2rem 2rem 2rem 2rem', display: 'flex', flexDirection: 'column' }}>
              <div style={{ fontSize: '2.2rem', marginBottom: '1rem', lineHeight: 1 }}>{exp.icon}</div>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'white', marginBottom: '0.6rem', fontFamily: 'var(--font-body)' }}>{exp.title}</h3>
              <p style={{ fontSize: '0.87rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.65, fontFamily: 'var(--font-body)', flex: 1 }}>{exp.desc}</p>
              <div style={{ marginTop: '1.5rem', width: 36, height: 4, borderRadius: 4, background: exp.color, flexShrink: 0 }} />
            </div>
          ))}
        </div>
      </section>

      {/* ── TRAVEL TIPS ───────────────────────────────────────────────────────── */}
      <section className="mh-reveal" style={{ padding: '5rem 2rem', background: 'white' }}
        ref={el => { if (el) { const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) el.classList.add('revealed'); }, { threshold: 0.1 }); obs.observe(el); } }}>
        <div className="text-center mb-14">
          <span style={{ display: 'inline-block', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--indigo)', background: 'rgba(61,82,160,0.08)', padding: '5px 14px', borderRadius: '50px', marginBottom: '1rem', fontFamily: 'var(--font-body)' }}>
            Insider Knowledge
          </span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,5vw,3rem)', fontWeight: 700, color: 'var(--navy)' }}>
            Travel Tips for Maharashtra
          </h2>
        </div>
        <div className="tip-grid mx-auto" style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '1.5rem', maxWidth: 960 }}>
          {TRAVEL_TIPS.map((tip, i) => (
            <div key={i} className="flex gap-5 p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1"
              style={{ background: '#fafbff', border: '1px solid #eef0ff' }}>
              <div style={{ fontSize: '2rem', flexShrink: 0 }}>{tip.icon}</div>
              <div>
                <h4 style={{ fontWeight: 700, color: 'var(--navy)', marginBottom: '0.4rem', fontFamily: 'var(--font-body)', fontSize: '1rem' }}>{tip.title}</h4>
                <p style={{ fontSize: '0.87rem', color: '#666', lineHeight: 1.65, fontFamily: 'var(--font-body)' }}>{tip.tip}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────────── */}
      <section className="mh-cta-bg text-center" style={{ padding: '6rem 2rem' }}>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,5vw,3.2rem)', fontWeight: 700, color: 'white', marginBottom: '1rem' }}>
          Ready to Explore Maharashtra?
        </h2>
        <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.75)', marginBottom: '2.5rem', maxWidth: 540, marginLeft: 'auto', marginRight: 'auto', fontFamily: 'var(--font-body)', lineHeight: 1.7 }}>
          From misty forts to sun-drenched coasts — let us craft your perfect Maharashtra journey.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link to="/contact"
            style={{ padding: '1rem 2.5rem', background: 'var(--gold)', color: 'var(--navy)', border: 'none', borderRadius: '50px', fontSize: '1rem', fontWeight: 700, cursor: 'pointer', fontFamily: 'var(--font-body)', boxShadow: '0 10px 30px rgba(201,168,76,0.4)', textDecoration: 'none', display: 'inline-block', transition: 'all 0.3s' }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(201,168,76,0.55)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 10px 30px rgba(201,168,76,0.4)'; }}>
            Plan My Maharashtra Trip 🗺️
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

export default Maharashtra;