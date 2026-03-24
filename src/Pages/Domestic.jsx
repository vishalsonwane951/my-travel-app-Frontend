import React, { useEffect, useState, useContext, useCallback, useMemo, useRef } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';
import api from '../utils/api';
import {
  FaUsers,
  FaStar,
  FaArrowRight,
  FaSearch,
  FaGlobe,
  FaUmbrellaBeach,
  FaMountain,
  FaTree,
  FaWater,
  FaChevronRight,
  FaChevronLeft,
  FaHotel,
  FaTrash,
  FaUpload,
  FaMapMarkerAlt,
  FaClock,
} from 'react-icons/fa';

const MODULE_CACHE = { animation: null, states: null, fetchedAt: 0 };
const CACHE_TTL_MS = 5 * 60 * 1000;

const Domestic = () => {
  const { user } = useContext(AuthContext);
  const isAdmin = user?.isAdmin;

  const isCacheFresh = () =>
    Date.now() - MODULE_CACHE.fetchedAt < CACHE_TTL_MS &&
    MODULE_CACHE.animation !== null &&
    MODULE_CACHE.states    !== null;

  const [animation, setAnimation] = useState(MODULE_CACHE.animation || []);
  const [states1,   setStates1]   = useState(MODULE_CACHE.states    || []);
  const [loading,   setLoading]   = useState(!isCacheFresh());

  const [currentIndex,      setCurrentIndex]      = useState(0);
  const [windowWidth,       setWindowWidth]        = useState(window.innerWidth);
  const [selectedCategory,  setSelectedCategory]   = useState('all');
  const [viewMode,          setViewMode]           = useState('grid');
  const [searchTerm,        setSearchTerm]         = useState('');

  const imageCache = useRef(new Map());
  const abortRef   = useRef(null);

  const getImageUrl = useCallback((imagePath) => {
    let path = imagePath;
    if (Array.isArray(path)) path = path[0];
    if (path && typeof path === 'object') path = path.secure_url ?? path.url ?? null;
    if (!path || typeof path !== 'string') return '/placeholder.jpg';
    if (imageCache.current.has(path)) return imageCache.current.get(path);
    const url = path.startsWith('http')
      ? path.replace('/upload/', '/upload/f_auto,q_auto:eco,w_400,c_fill,g_auto/')
      : '/placeholder.jpg';
    imageCache.current.set(path, url);
    return url;
  }, []);

  const getSidebarImageUrl = useCallback((imagePath) => {
    let path = imagePath;
    if (Array.isArray(path)) path = path[0];
    if (path && typeof path === 'object') path = path.secure_url ?? path.url ?? null;
    if (!path || typeof path !== 'string') return '/placeholder.jpg';
    const key = `sb_${path}`;
    if (imageCache.current.has(key)) return imageCache.current.get(key);
    const url = path.startsWith('http')
      ? path.replace('/upload/', '/upload/f_auto,q_auto,w_600,c_fill/')
      : '/placeholder.jpg';
    imageCache.current.set(key, url);
    return url;
  }, []);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isCacheFresh()) return;
    if (abortRef.current) abortRef.current.abort();
    const controller = new AbortController();
    abortRef.current = controller;

    const isCanceled = (err) =>
      err.name === 'CanceledError' || err.name === 'AbortError' || err.code === 'ERR_CANCELED';

    async function fetchPackages() {
      try {
        const [res1, res2] = await Promise.all([
          api.get('/maharashtra-domestic/getallAnimation', { signal: controller.signal, timeout: 10_000 }),
          api.get('/maharashtra-domestic/getstates',       { signal: controller.signal, timeout: 10_000 }),
        ]);
        if (controller.signal.aborted) return;
        const animData  = res1.data || [];
        const stateData = Array.isArray(res2.data) ? res2.data : (res2.data?.data ?? []);
        MODULE_CACHE.animation = animData;
        MODULE_CACHE.states    = stateData;
        MODULE_CACHE.fetchedAt = Date.now();
        setAnimation(animData);
        setStates1(stateData);
      } catch (err) {
        if (!isCanceled(err)) console.error('Error fetching Domestic data:', err);
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    }
    fetchPackages();
    return () => controller.abort();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDelete = useCallback(async (id) => {
    if (!window.confirm('Are you sure you want to delete this destination?')) return;
    try {
      const res = await api.delete(`/maharashtra-domestic/deletestate/${id}`);
      if (res.data.success) {
        setStates1(prev => {
          const next = prev.filter(item => item._id !== id);
          MODULE_CACHE.states = next;
          return next;
        });
      }
    } catch (err) { console.error('Error deleting:', err); }
  }, []);

  const handleUpdate = useCallback(async (id, file) => {
    if (!file) return;
    try {
      const fd = new FormData();
      fd.append('images', file);
      const res = await api.put(`/maharashtra-domestic/updatestate/${id}`, fd, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      if (res.data.success) {
        setStates1(prev => {
          const next = prev.map(item =>
            item._id === id ? { ...item, images: res.data.data.images } : item
          );
          MODULE_CACHE.states = next;
          return next;
        });
      }
    } catch (err) { console.error('Error updating:', err); }
  }, []);

  const filteredStates = useMemo(() =>
    states1.filter(item =>
      item.title?.toLowerCase().includes(searchTerm.toLowerCase())
    ),
    [states1, searchTerm]
  );

  const totalCards = filteredStates.length;

  const categories = [
    { id: 'all',   label: 'All India', icon: <FaGlobe />,         count: totalCards },
    { id: 'north', label: 'North',     icon: <FaMountain />,      count: 12 },
    { id: 'south', label: 'South',     icon: <FaUmbrellaBeach />, count: 15 },
    { id: 'east',  label: 'East',      icon: <FaTree />,          count: 8  },
    { id: 'west',  label: 'West',      icon: <FaWater />,         count: 10 },
  ];

  return (
    <section id="domestic" className="bg-[var(--cream)] pb-20">
      <div className="max-w-[1400px] mx-auto px-6 pt-20">

        {/* Section Header */}
        <div className="flex justify-between items-end mb-12 flex-wrap gap-5">
          <div>
            <div className="section-eyebrow mb-2.5">Domestic Packages</div>
            <h2 className="section-title">
              Discover <em className="text-[var(--saffron)]">India's</em><br />Finest Destinations
            </h2>
          </div>

          <div className="flex gap-3 items-center flex-wrap">
            <div className="relative">
              <FaSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-[0.85rem]" />
              <input
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                placeholder="Search destinations..."
                className="py-2.5 pr-4 pl-9 rounded-full border border-gray-200 font-[Outfit] text-[0.85rem] outline-none w-[220px] focus:border-[var(--saffron)] transition-colors"
              />
            </div>
            <div className="flex gap-1.5">
              {['grid', 'list'].map(mode => (
                <button
                  key={mode}
                  onClick={() => setViewMode(mode)}
                  className={`w-[38px] h-[38px] rounded-[10px] border flex items-center justify-center cursor-pointer transition-colors ${
                    viewMode === mode
                      ? 'border-[var(--saffron)] bg-orange-50 text-[var(--saffron)]'
                      : 'border-gray-200 bg-white text-gray-500'
                  }`}
                >
                  {mode === 'grid' ? (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" />
                      <rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" />
                    </svg>
                  ) : (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="8" y1="6" x2="21" y2="6" /><line x1="8" y1="12" x2="21" y2="12" /><line x1="8" y1="18" x2="21" y2="18" />
                      <line x1="3" y1="6" x2="3.01" y2="6" /><line x1="3" y1="12" x2="3.01" y2="12" /><line x1="3" y1="18" x2="3.01" y2="18" />
                    </svg>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex gap-2.5 mb-10 overflow-x-auto pb-1">
          {categories.map(c => (
            <button
              key={c.id}
              className={`filter-pill ${selectedCategory === c.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(c.id)}
            >
              {c.icon}
              <span className="ml-1.5">{c.label}</span>
              <span className={`ml-1.5 px-1.5 py-px rounded-xl text-[0.72rem] font-bold ${
                selectedCategory === c.id ? 'bg-white/30 text-white' : 'bg-gray-200 text-gray-500'
              }`}>
                {c.count}
              </span>
            </button>
          ))}
        </div>

        {/* Main Layout */}
        <div className={`grid gap-7 ${windowWidth >= 1100 ? 'grid-cols-[300px_1fr]' : 'grid-cols-1'}`}>

          {/* Sidebar */}
          {windowWidth >= 1100 && (
            <div className="sticky top-[90px] h-fit">
              <div className="bg-[var(--forest)] rounded-3xl overflow-hidden text-white">
                <div className="relative h-[220px]">
                  {animation.length > 0 ? (
                    <>
                      <img
                        src={getSidebarImageUrl(animation[currentIndex]?.images)}
                        alt="Featured destination"
                        loading="eager"
                        decoding="async"
                        className="w-full h-full object-cover"
                        onError={e => { e.target.onerror = null; e.target.src = '/placeholder.jpg'; }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(26,60,52,0.9)] to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="font-[Cormorant_Garamond,serif] text-[1.3rem] font-bold">
                          {animation[currentIndex]?.title || 'Discover India'}
                        </div>
                      </div>
                      <button
                        aria-label="Previous"
                        onClick={() => setCurrentIndex(p => (p - 1 + animation.length) % animation.length)}
                        className="absolute left-2.5 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-white/15 border-none text-white cursor-pointer flex items-center justify-center"
                      >‹</button>
                      <button
                        aria-label="Next"
                        onClick={() => setCurrentIndex(p => (p + 1) % animation.length)}
                        className="absolute right-2.5 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-white/15 border-none text-white cursor-pointer flex items-center justify-center"
                      >›</button>
                    </>
                  ) : (
                    <div className="w-full h-full bg-white/10 animate-pulse" />
                  )}
                </div>

                <div className="px-5 pt-5 pb-6">
                  <div className="font-[Outfit] text-[0.75rem] opacity-60 tracking-widest uppercase mb-3">Quick Stats</div>
                  {[
                    { label: 'Destinations', val: totalCards > 0 ? `${totalCards}+` : '—' },
                    { label: 'Packages',     val: '156' },
                    { label: 'Support',      val: '24/7' },
                  ].map((s, i) => (
                    <div key={i} className={`flex justify-between items-center py-2.5 ${i < 2 ? 'border-b border-white/10' : ''}`}>
                      <span className="font-[Outfit] text-[0.85rem] opacity-70">{s.label}</span>
                      <span className="font-[Cormorant_Garamond,serif] text-[1.2rem] font-bold text-[var(--saffron-light)]">{s.val}</span>
                    </div>
                  ))}
                  {animation.length > 0 && (
                    <div className="flex gap-1.5 mt-4">
                      {animation.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setCurrentIndex(i)}
                          className={`h-2 rounded border-none cursor-pointer transition-all p-0 ${
                            i === currentIndex ? 'w-6 bg-[var(--saffron)]' : 'w-2 bg-white/25'
                          }`}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Cards area */}
          <div>
            {loading ? (
              <SkeletonCarousel />
            ) : filteredStates.length === 0 ? (
              <div className="text-center py-12 font-[Outfit] text-gray-400">
                {searchTerm
                  ? `No destinations found for "${searchTerm}"`
                  : 'No destinations available yet.'}
              </div>
            ) : (
              <DomesticCarousel
                items={filteredStates}
                isAdmin={isAdmin}
                getImageUrl={getImageUrl}
                onDelete={handleDelete}
                onUpdate={handleUpdate}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

// ── Skeleton ─────────────────────────────────────────────────
const SkeletonCarousel = () => (
  <div className="relative">
    <div className="flex justify-between items-center mb-5">
      <div className="skeleton h-4 w-36 rounded" />
      <div className="flex gap-2">
        <div className="skeleton w-9 h-9 rounded-[10px]" />
        <div className="skeleton w-9 h-9 rounded-[10px]" />
      </div>
    </div>
    <div className="flex gap-4 overflow-hidden">
      {[1, 2, 3, 4].map(i => (
        <div key={i} className="shrink-0 rounded-2xl overflow-hidden bg-white shadow-md" style={{ width: 'calc(25% - 12px)' }}>
          <div className="skeleton h-[200px]" />
          <div className="p-4 space-y-2.5">
            <div className="skeleton h-3 w-16 rounded" />
            <div className="skeleton h-5 w-32 rounded" />
            <div className="skeleton h-3 w-24 rounded" />
            <div className="skeleton h-10 rounded-xl mt-3" />
          </div>
        </div>
      ))}
    </div>
  </div>
);

// ── Carousel — shows exactly 4 cards, scroll reveals more ────
const DomesticCarousel = React.memo(({ items, isAdmin, getImageUrl, onDelete, onUpdate }) => {
  const scrollRef    = useRef(null);
  const containerRef = useRef(null);

  const [canScrollLeft,  setCanScrollLeft]  = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [progress,       setProgress]       = useState(0);
  const [cardWidth,      setCardWidth]      = useState(260);

  // Always exactly 4 visible cards with 16px gap
  const VISIBLE = 4;
  const GAP     = 16;

  const measureCard = useCallback(() => {
    const el = containerRef.current;
    if (!el) return;
    const totalGaps = (VISIBLE - 1) * GAP;
    setCardWidth(Math.floor((el.clientWidth - totalGaps) / VISIBLE));
  }, []);

  useEffect(() => {
    measureCard();
    const ro = new ResizeObserver(measureCard);
    if (containerRef.current) ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, [measureCard]);

  const updateScrollState = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 4);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 4);
    setProgress(scrollWidth > clientWidth ? scrollLeft / (scrollWidth - clientWidth) : 0);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    updateScrollState();
    el.addEventListener('scroll', updateScrollState, { passive: true });
    return () => el.removeEventListener('scroll', updateScrollState);
  }, [items, updateScrollState]);

  // Scroll by exactly one card width + gap
  const scroll = useCallback((dir) => {
    scrollRef.current?.scrollBy({ left: dir * (cardWidth + GAP), behavior: 'smooth' });
  }, [cardWidth]);

  return (
    <div className="relative">
      {/* Header row */}
      <div className="flex justify-between items-center mb-5">
        <div className="font-[Outfit] text-[0.85rem] text-gray-500">
          Showing <strong className="text-[var(--ink)]">{items.length}</strong> destinations
        </div>
        <div className="flex items-center gap-3">
          {/* Dot pagination */}
          <div className="flex gap-1 items-center">
            {Array.from({ length: Math.ceil(items.length / VISIBLE) }).map((_, i) => {
              const active = Math.round(progress * (Math.ceil(items.length / VISIBLE) - 1)) === i;
              return (
                <button
                  key={i}
                  onClick={() => {
                    const el = scrollRef.current;
                    if (el) el.scrollTo({ left: i * VISIBLE * (cardWidth + GAP), behavior: 'smooth' });
                  }}
                  className={`rounded-full border-none cursor-pointer transition-all p-0 ${
                    active ? 'w-5 h-2 bg-[var(--saffron)]' : 'w-2 h-2 bg-gray-300'
                  }`}
                />
              );
            })}
          </div>
          {/* Arrow buttons */}
          <div className="flex gap-2">
            {[
              { dir: -1, enabled: canScrollLeft,  Icon: FaChevronLeft  },
              { dir:  1, enabled: canScrollRight, Icon: FaChevronRight },
            ].map(({ dir, enabled, Icon }) => (
              <button
                key={dir}
                onClick={() => scroll(dir)}
                disabled={!enabled}
                className={`w-9 h-9 rounded-[10px] border flex items-center justify-center transition-all ${
                  enabled
                    ? 'bg-white border-gray-200 text-[var(--ink)] cursor-pointer hover:border-[var(--saffron)] hover:text-[var(--saffron)]'
                    : 'bg-gray-50 border-gray-100 text-gray-300 cursor-not-allowed'
                }`}
              >
                <Icon size={13} />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll container — edge fades */}
      <div ref={containerRef} className="relative overflow-hidden">
        {canScrollLeft  && <div className="absolute left-0  top-0 bottom-0 w-10 bg-gradient-to-r from-[var(--cream)] to-transparent z-10 pointer-events-none" />}
        {canScrollRight && <div className="absolute right-0 top-0 bottom-0 w-10 bg-gradient-to-l from-[var(--cream)] to-transparent z-10 pointer-events-none" />}

        <style>{`.dc-track::-webkit-scrollbar{display:none}`}</style>

        <div
          ref={scrollRef}
          className="dc-track flex overflow-x-auto"
          style={{
            gap: GAP,
            scrollSnapType: 'x mandatory',
            WebkitOverflowScrolling: 'touch',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {items.map((item, i) => (
            <div
              key={`dc-${item._id || i}`}
              className="shrink-0"
              style={{ width: cardWidth, minWidth: cardWidth, scrollSnapAlign: 'start' }}
            >
              <DomesticCard
                item={item}
                isAdmin={isAdmin}
                getImageUrl={getImageUrl}
                onDelete={onDelete}
                onUpdate={onUpdate}
                priority={i < 4}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Progress bar */}
      <div className="mt-4 h-[3px] bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-[var(--saffron)] to-[var(--saffron-dark)] transition-[width] duration-200 ease-out"
          style={{ width: `${Math.max(progress * 100, items.length > VISIBLE ? 3 : 100)}%` }}
        />
      </div>
    </div>
  );
});

// ── Redesigned card ──────────────────────────────────────────
const DomesticCard = React.memo(({ item, isAdmin, getImageUrl, onDelete, onUpdate, priority }) => (
  <div className="group relative rounded-2xl overflow-hidden bg-white shadow-[0_2px_16px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-1 flex flex-col h-full">

    {/* ── Image block ── */}
    <div className="relative h-[200px] bg-gray-100 overflow-hidden flex-shrink-0">
      <img
        src={getImageUrl(item.images)}
        alt={item.title}
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        fetchpriority={priority ? 'high' : 'low'}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
        style={{ transform: 'scale(1)', transition: 'transform 700ms ease' }}
        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.08)'}
        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
        onError={e => { e.target.onerror = null; e.target.src = '/placeholder.jpg'; }}
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent h-20" />

      {/* Rating badge — top left */}
      <div className="absolute top-3 left-3 flex items-center gap-1 bg-white/95 backdrop-blur-sm rounded-full px-2.5 py-1 shadow-sm">
        <FaStar className="text-amber-400" size={11} />
        <span className="font-[Outfit] text-[0.78rem] font-bold text-gray-800">
          {item.rating || '4.8'}
        </span>
      </div>

      {/* Admin controls — top right */}
      {isAdmin && (
        <div className="absolute top-3 right-3 flex gap-1.5 z-10">
          <input
            id={`dc-file-${item._id}`}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={e => onUpdate(item._id, e.target.files[0])}
          />
          <button
            onClick={e => { e.stopPropagation(); document.getElementById(`dc-file-${item._id}`).click(); }}
            className="w-7 h-7 rounded-lg bg-amber-400/90 backdrop-blur-sm border-none text-white cursor-pointer flex items-center justify-center shadow-md hover:bg-amber-400 transition-colors"
          >
            <FaUpload size={11} />
          </button>
          <button
            onClick={e => { e.stopPropagation(); onDelete(item._id); }}
            className="w-7 h-7 rounded-lg bg-red-500/90 backdrop-blur-sm border-none text-white cursor-pointer flex items-center justify-center shadow-md hover:bg-red-500 transition-colors"
          >
            <FaTrash size={11} />
          </button>
        </div>
      )}

      {/* Destination name — bottom of image */}
      <div className="absolute bottom-0 left-0 right-0 px-3.5 pb-3.5 pt-8">
        <h3
          className="font-[Cormorant_Garamond,serif] text-[1.35rem] font-bold text-white leading-tight"
          style={{ textShadow: '0 2px 12px rgba(0,0,0,0.6)' }}
        >
          {item.title}
        </h3>
        {item.state && (
          <div className="flex items-center gap-1 mt-0.5">
            <FaMapMarkerAlt size={10} className="text-orange-300" />
            <span className="font-[Outfit] text-[0.72rem] text-white/80">{item.state}</span>
          </div>
        )}
      </div>
    </div>

    {/* ── Card body ── */}
    <div className="px-3.5 pt-3 pb-3.5 flex flex-col flex-1">

      {/* Meta row */}
      <div className="flex items-center justify-between mb-3 text-[0.75rem] text-gray-500 font-[Outfit]">
        <span className="flex items-center gap-1.5">
          <FaUsers size={11} className="text-gray-400" />
          <span>2–12 pax</span>
        </span>
        <span className="flex items-center gap-1.5">
          <FaHotel size={11} className="text-gray-400" />
          <span>4★ Hotels</span>
        </span>
        <span className="flex items-center gap-1.5">
          <FaClock size={11} className="text-gray-400" />
          <span>{item.duration || '3–5 days'}</span>
        </span>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-100 mb-3" />

      {/* Tags row */}
      <div className="flex gap-1.5 mb-3 flex-wrap">
        {(item.tags || ['Culture', 'Nature']).slice(0, 2).map((tag, i) => (
          <span
            key={i}
            className="inline-block px-2 py-0.5 rounded-md text-[0.68rem] font-semibold font-[Outfit] bg-orange-50 text-orange-600 border border-orange-100"
          >
            {tag}
          </span>
        ))}
        <span className="inline-block px-2 py-0.5 rounded-md text-[0.68rem] font-semibold font-[Outfit] bg-emerald-50 text-emerald-700 border border-emerald-100">
          Best Value
        </span>
      </div>

      {/* Spacer pushes CTA to bottom */}
      <div className="flex-1" />

      {/* CTA button */}
      <Link
        to="/Maharashtra"
        className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl no-underline font-[Outfit] text-[0.85rem] font-semibold text-white transition-all duration-200 hover:brightness-110 active:scale-[0.98] mt-1"
        style={{ background: 'linear-gradient(100deg, #f07020 0%, #c94e00 100%)' }}
      >
        Book Now <FaArrowRight size={11} />
      </Link>
    </div>
  </div>
));

export default Domestic;