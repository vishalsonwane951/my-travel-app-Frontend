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

// ── Region mapping ─────────────────────────────────────────────
const REGION_MAP = {
  north: [
    'delhi', 'new delhi', 'punjab', 'haryana', 'himachal', 'himachal pradesh',
    'uttarakhand', 'uttaranchal', 'jammu', 'kashmir', 'ladakh', 'chandigarh',
    'rajasthan', 'uttar pradesh', 'up', 'agra', 'jaipur', 'shimla', 'manali',
    'leh', 'varanasi', 'lucknow', 'amritsar', 'rishikesh', 'haridwar', 'mussoorie',
  ],
  south: [
    'kerala', 'karnataka', 'tamil nadu', 'tamilnadu', 'telangana', 'andhra', 'andhra pradesh',
    'goa', 'mumbai', 'pondicherry', 'puducherry', 'coorg', 'ooty', 'munnar', 'alleppey',
    'bangalore', 'bengaluru', 'hyderabad', 'chennai', 'mysore', 'mysuru', 'kodagu',
    'hampi', 'madurai', 'kochi', 'cochin', 'thiruvananthapuram', 'trivandrum',
  ],
  east: [
    'west bengal', 'bengal', 'kolkata', 'calcutta', 'odisha', 'orissa', 'bihar',
    'jharkhand', 'assam', 'meghalaya', 'manipur', 'nagaland', 'mizoram', 'tripura',
    'arunachal', 'sikkim', 'darjeeling', 'gangtok', 'shillong', 'guwahati', 'puri',
    'bhubaneswar', 'patna',
  ],
  west: [
    'gujarat', 'maharashtra', 'rajasthan', 'madhya pradesh', 'mp', 'chhattisgarh',
    'goa', 'pune', 'nashik', 'aurangabad', 'solapur', 'ahmedabad', 'surat', 'vadodara',
    'udaipur', 'jodhpur', 'ajmer', 'indore', 'bhopal', 'raipur', 'navi mumbai',
    'panaji', 'vasco', 'margao',
  ],
};

function detectRegion(item) {
  const haystack = `${item.title || ''} ${item.state || ''} ${item.region || ''}`.toLowerCase();
  for (const [region, keywords] of Object.entries(REGION_MAP)) {
    if (keywords.some(kw => haystack.includes(kw))) return region;
  }
  return null;
}

// ── Scoped styles ────────────────────────────────────────────
const DomesticStyles = () => (
  <style>{`
    #domestic {
      --saffron: #E8813A;
      --saffron-light: #F4A261;
      --saffron-dark: #C85A1A;
      --forest: #1A3C34;
      --forest-light: #2E6B5C;
      --cream: #FBF5EC;
      --cream-deep: #F3E8D4;
      --ink: #0F1923;
    }

    #domestic .section-eyebrow {
      font-family: 'Outfit', sans-serif;
      font-size: 0.75rem;
      font-weight: 700;
      letter-spacing: 3px;
      text-transform: uppercase;
      color: var(--saffron);
      margin-bottom: 10px;
      display: block;
    }

    #domestic .section-title {
      font-family: 'Cormorant Garamond', serif;
      font-size: clamp(2rem, 4vw, 3.2rem);
      font-weight: 600;
      line-height: 1.15;
      color: var(--ink);
      margin: 0;
    }

    #domestic .filter-pill {
      display: inline-flex;
      align-items: center;
      padding: 9px 20px;
      border-radius: 50px;
      font-family: 'Outfit', sans-serif;
      font-size: 0.85rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.25s;
      border: 1.5px solid #E5E7EB;
      background: white;
      color: #6B7280;
      white-space: nowrap;
      gap: 7px;
    }
    #domestic .filter-pill:hover {
      border-color: var(--saffron);
      color: var(--saffron);
    }
    #domestic .filter-pill.active {
      background: var(--saffron);
      color: white;
      border-color: var(--saffron);
      box-shadow: 0 4px 14px rgba(232,129,58,0.35);
    }

    #domestic .view-btn {
      width: 40px;
      height: 40px;
      border-radius: 10px;
      border: 1.5px solid #E5E7EB;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.2s;
      background: white;
      color: #6B7280;
    }
    #domestic .view-btn.active {
      border-color: var(--saffron);
      background: #fff5ee;
      color: var(--saffron);
    }

    #domestic .skeleton {
      background: linear-gradient(90deg, #f0f0f0 25%, #e8e8e8 50%, #f0f0f0 75%);
      background-size: 200% 100%;
      animation: domestic-shimmer 1.5s infinite;
      border-radius: 10px;
    }
    @keyframes domestic-shimmer {
      0%   { background-position: -200% 0; }
      100% { background-position:  200% 0; }
    }

    #domestic .dc-track::-webkit-scrollbar { display: none; }
    #domestic .dc-track {
      scrollbar-width: none;
      -ms-overflow-style: none;
    }

    #domestic .dom-card {
      border-radius: 20px;
      overflow: hidden;
      background: white;
      box-shadow: 0 2px 20px rgba(0,0,0,0.09);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      display: flex;
      flex-direction: column;
      height: 100%;
    }
    #domestic .dom-card:hover {
      transform: translateY(-7px);
      box-shadow: 0 16px 44px rgba(0,0,0,0.15);
    }
    #domestic .dom-card:hover .dom-card-img {
      transform: scale(1.07);
    }
    #domestic .dom-card-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
      transition: transform 0.6s ease;
    }

    #domestic .tag-badge {
      display: inline-block;
      padding: 3px 10px;
      border-radius: 6px;
      font-size: 0.72rem;
      font-weight: 600;
      font-family: 'Outfit', sans-serif;
    }
    #domestic .tag-orange {
      background: #fff5ee;
      color: #e06010;
      border: 1px solid #fcd9b8;
    }
    #domestic .tag-green {
      background: #ecfdf5;
      color: #047857;
      border: 1px solid #a7f3d0;
    }

    #domestic .cta-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      width: 100%;
      padding: 13px;
      border-radius: 14px;
      text-decoration: none;
      font-family: 'Outfit', sans-serif;
      font-size: 0.9rem;
      font-weight: 600;
      color: white;
      background: linear-gradient(100deg, #f07020 0%, #c94e00 100%);
      border: none;
      cursor: pointer;
      transition: filter 0.2s, transform 0.15s;
    }
    #domestic .cta-btn:hover  { filter: brightness(1.1); }
    #domestic .cta-btn:active { transform: scale(0.98); }

    #domestic .scroll-arrow {
      width: 36px;
      height: 36px;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.2s;
      border: 1.5px solid #E5E7EB;
      cursor: pointer;
      background: white;
    }
    #domestic .scroll-arrow.enabled {
      color: var(--ink);
    }
    #domestic .scroll-arrow.enabled:hover {
      border-color: var(--saffron);
      color: var(--saffron);
    }
    #domestic .scroll-arrow.disabled {
      background: #F9FAFB;
      color: #D1D5DB;
      cursor: not-allowed;
    }

    #domestic .search-input {
      padding: 10px 18px 10px 38px;
      border-radius: 50px;
      border: 1.5px solid #E5E7EB;
      font-family: 'Outfit', sans-serif;
      font-size: 0.85rem;
      outline: none;
      width: 220px;
      transition: border-color 0.2s;
      box-sizing: border-box;
    }
    #domestic .search-input:focus {
      border-color: var(--saffron);
    }

    #domestic .no-results {
      text-align: center;
      padding: 72px 24px;
      font-family: 'Outfit', sans-serif;
      color: #9CA3AF;
    }
    #domestic .no-results-icon {
      font-size: 3rem;
      margin-bottom: 16px;
      opacity: 0.4;
    }

    @media (max-width: 768px) {
      #domestic .dom-header {
        flex-direction: column !important;
        align-items: flex-start !important;
      }
    }
  `}</style>
);

// ── Module-level cache ────────────────────────────────────────
const MODULE_CACHE = { animation: null, states: null, fetchedAt: 0 };
const CACHE_TTL_MS = 5 * 60 * 1000;

const Domestic = ({ prefetchedData }) => {
  const { user } = useContext(AuthContext);
  const isAdmin = user?.isAdmin;

  const isCacheFresh = () =>
    Date.now() - MODULE_CACHE.fetchedAt < CACHE_TTL_MS &&
    MODULE_CACHE.animation !== null &&
    MODULE_CACHE.states !== null;

  const [animation, setAnimation] = useState(
    prefetchedData?.animation?.length ? prefetchedData.animation : MODULE_CACHE.animation || []
  );
  const [states1, setStates1] = useState(
    prefetchedData?.states?.length ? prefetchedData.states : MODULE_CACHE.states || []
  );
  const [loading, setLoading] = useState(
    !(prefetchedData?.states?.length) && !isCacheFresh()
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [searchTerm, setSearchTerm] = useState('');

  const imageCache = useRef(new Map());
  const abortRef = useRef(null);

  useEffect(() => {
    if (prefetchedData?.animation?.length) setAnimation(prefetchedData.animation);
    if (prefetchedData?.states?.length) { setStates1(prefetchedData.states); setLoading(false); }
  }, [prefetchedData]);

  const getImageUrl = useCallback((imagePath) => {
    let path = imagePath;
    if (Array.isArray(path)) path = path[0];
    if (path && typeof path === 'object') path = path.secure_url ?? path.url ?? null;
    if (!path || typeof path !== 'string') return '/placeholder.jpg';
    if (imageCache.current.has(path)) return imageCache.current.get(path);
    const url = path.startsWith('http')
      ? path.replace('/upload/', '/upload/f_auto,q_auto:eco,w_500,c_fill,g_auto/')
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
    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (prefetchedData?.states?.length || isCacheFresh()) return;
    if (abortRef.current) abortRef.current.abort();
    const controller = new AbortController();
    abortRef.current = controller;
    const isCanceled = (err) =>
      err.name === 'CanceledError' || err.name === 'AbortError' || err.code === 'ERR_CANCELED';

    async function fetchPackages() {
      try {
        const [res1, res2] = await Promise.all([
          api.get('/maharashtra-domestic/getallAnimation', { signal: controller.signal }),
          api.get('/maharashtra-domestic/getstates', { signal: controller.signal }),
        ]);
        if (controller.signal.aborted) return;
        const animData = res1.data || [];
        const stateData = Array.isArray(res2.data) ? res2.data : (res2.data?.data ?? []);
        MODULE_CACHE.animation = animData;
        MODULE_CACHE.states = stateData;
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

  // ── Filtering ─────────────────────────────────────────────
  const filteredStates = useMemo(() => {
    return states1.filter(item => {
      const matchesSearch = !searchTerm ||
        item.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.state?.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesRegion =
        selectedCategory === 'all' ||
        (item.region?.toLowerCase() === selectedCategory) ||
        detectRegion(item) === selectedCategory;
      return matchesSearch && matchesRegion;
    });
  }, [states1, searchTerm, selectedCategory]);

  const regionCounts = useMemo(() => {
    const counts = { all: states1.length, north: 0, south: 0, east: 0, west: 0 };
    states1.forEach(item => {
      const r = item.region?.toLowerCase() || detectRegion(item);
      if (r && r in counts) counts[r]++;
    });
    return counts;
  }, [states1]);

  const categories = [
    { id: 'all', label: 'All India', icon: <FaGlobe /> },
    { id: 'north', label: 'North', icon: <FaMountain /> },
    { id: 'south', label: 'South', icon: <FaUmbrellaBeach /> },
    { id: 'east', label: 'East', icon: <FaTree /> },
    { id: 'west', label: 'West', icon: <FaWater /> },
  ];

  const showSidebar = windowWidth >= 1100;

  return (
    <section id="domestic" style={{ background: 'var(--cream)', paddingBottom: 80 }}>
      <DomesticStyles />

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>

        {/* ── Section Header ───────────────────────────────────── */}
        <div
          className="dom-header"
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: 24,
            paddingTop: 80,
            marginBottom: 48,
            flexWrap: 'wrap',
          }}
        >
          <div style={{ flex: '1 1 280px', minWidth: 0 }}>
            <span className="section-eyebrow">Domestic Packages</span>
            <h2 className="section-title">
              Discover <em style={{ color: 'var(--saffron)', fontStyle: 'italic' }}>India's</em><br />
              Finest Destinations
            </h2>
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            flexShrink: 0,
            paddingTop: 6,
            flexWrap: 'wrap',
          }}>
            <div style={{ position: 'relative' }}>
              <FaSearch style={{
                position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)',
                color: '#9CA3AF', fontSize: '0.8rem', pointerEvents: 'none',
              }} />
              <input
                value={searchTerm}
                onChange={e => { setSearchTerm(e.target.value); setSelectedCategory('all'); }}
                placeholder="Search destinations..."
                className="search-input"
              />
            </div>

            <div style={{ display: 'flex', gap: 6 }}>
              {['grid', 'list'].map(mode => (
                <button
                  key={mode}
                  onClick={() => setViewMode(mode)}
                  className={`view-btn${viewMode === mode ? ' active' : ''}`}
                  title={mode === 'grid' ? 'Grid view' : 'List view'}
                >
                  {mode === 'grid' ? (
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="3" width="7" height="7" rx="1" />
                      <rect x="14" y="3" width="7" height="7" rx="1" />
                      <rect x="3" y="14" width="7" height="7" rx="1" />
                      <rect x="14" y="14" width="7" height="7" rx="1" />
                    </svg>
                  ) : (
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="8" y1="6" x2="21" y2="6" />
                      <line x1="8" y1="12" x2="21" y2="12" />
                      <line x1="8" y1="18" x2="21" y2="18" />
                      <line x1="3" y1="6" x2="3.01" y2="6" />
                      <line x1="3" y1="12" x2="3.01" y2="12" />
                      <line x1="3" y1="18" x2="3.01" y2="18" />
                    </svg>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ── Filter Pills ──────────────────────────────────────── */}
        <div style={{ display: 'flex', gap: 10, marginBottom: 44, overflowX: 'auto', paddingBottom: 4 }}>
          {categories.map(c => (
            <button
              key={c.id}
              className={`filter-pill${selectedCategory === c.id ? ' active' : ''}`}
              onClick={() => { setSelectedCategory(c.id); setSearchTerm(''); }}
            >
              {c.icon}
              <span>{c.label}</span>
              <span style={{
                marginLeft: 5,
                padding: '2px 8px',
                borderRadius: 20,
                fontSize: '0.73rem',
                fontWeight: 700,
                background: selectedCategory === c.id ? 'rgba(255,255,255,0.28)' : '#F3F4F6',
                color: selectedCategory === c.id ? 'white' : '#6B7280',
                minWidth: 22,
                textAlign: 'center',
              }}>
                {regionCounts[c.id] ?? 0}
              </span>
            </button>
          ))}
        </div>

        {/* ── Main Layout ───────────────────────────────────────── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: showSidebar ? '320px 1fr' : '1fr',
          gap: 32,
          alignItems: 'start',
          width: '100%',
        }}>

          {/* ── Sidebar ─────────────────────────────────────────── */}
          {showSidebar && (
            <div style={{ position: 'sticky', top: 90 }}>
              <div style={{
                background: 'var(--forest)',
                borderRadius: 28,
                overflow: 'hidden',
                color: 'white',
              }}>
                <div style={{ position: 'relative', height: 240, background: '#0F2920' }}>
                  {animation.length > 0 ? (
                    <>
                      <img
                        src={getSidebarImageUrl(animation[currentIndex]?.images)}
                        alt="Featured destination"
                        loading="eager"
                        decoding="async"
                        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                        // onError={e => { e.target.onerror = null; e.target.src = '/placeholder.jpg'; }}
                      />
                      <div style={{
                        position: 'absolute', inset: 0,
                        background: 'linear-gradient(to top, rgba(26,60,52,0.92) 0%, transparent 55%)',
                      }} />
                      <div style={{ position: 'absolute', bottom: 18, left: 18, right: 44 }}>
                        <div style={{
                          fontFamily: 'Cormorant Garamond, serif',
                          fontSize: '1.3rem', fontWeight: 700,
                          color: 'white', lineHeight: 1.2,
                        }}>
                          {animation[currentIndex]?.title || 'Discover India'}
                        </div>
                      </div>
                      {[{ dir: -1, side: 'left' }, { dir: 1, side: 'right' }].map(({ dir, side }) => (
                        <button
                          key={side}
                          onClick={() => setCurrentIndex(p => (p + dir + animation.length) % animation.length)}
                          style={{
                            position: 'absolute', [side]: 10, top: '50%', transform: 'translateY(-50%)',
                            width: 30, height: 30, borderRadius: '50%',
                            background: 'rgba(255,255,255,0.15)', border: 'none',
                            color: 'white', cursor: 'pointer',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            fontSize: '1.1rem', lineHeight: 1,
                          }}
                        >
                          {dir === -1 ? '‹' : '›'}
                        </button>
                      ))}
                    </>
                  ) : (
                    <div className="skeleton" style={{ width: '100%', height: '100%' }} />
                  )}
                </div>

                <div style={{ padding: '22px 24px 26px' }}>
                  <div style={{
                    fontFamily: 'Outfit, sans-serif', fontSize: '0.72rem',
                    opacity: 0.55, letterSpacing: 3, textTransform: 'uppercase', marginBottom: 14,
                  }}>
                    Quick Stats
                  </div>
                  {[
                    { label: 'Destinations', val: states1.length > 0 ? `${states1.length}+` : '—' },
                    { label: 'Filtered', val: `${filteredStates.length}` },
                    { label: 'Support', val: '24/7' },
                  ].map((s, i, arr) => (
                    <div key={i} style={{
                      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                      padding: '11px 0',
                      borderBottom: i < arr.length - 1 ? '1px solid rgba(255,255,255,0.1)' : 'none',
                    }}>
                      <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '0.88rem', opacity: 0.65 }}>{s.label}</span>
                      <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.25rem', fontWeight: 700, color: 'var(--saffron-light)' }}>{s.val}</span>
                    </div>
                  ))}

                  {animation.length > 0 && (
                    <div style={{ display: 'flex', gap: 6, marginTop: 18 }}>
                      {animation.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setCurrentIndex(i)}
                          style={{
                            height: 8,
                            width: i === currentIndex ? 26 : 8,
                            borderRadius: 4, border: 'none',
                            background: i === currentIndex ? 'var(--saffron)' : 'rgba(255,255,255,0.25)',
                            cursor: 'pointer', transition: 'all 0.3s', padding: 0,
                          }}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* ── Cards area ────────────────────────────────────────── */}
          <div style={{ minHeight: 460, width: '100%' }}>
            {loading ? (
              <SkeletonCarousel />
            ) : filteredStates.length === 0 ? (
              <NoResults
                searchTerm={searchTerm}
                category={selectedCategory}
                onReset={() => { setSearchTerm(''); setSelectedCategory('all'); }}
              />
            ) : (
              <DomesticCarousel
                items={filteredStates}
                isAdmin={isAdmin}
                getImageUrl={getImageUrl}
                onDelete={handleDelete}
                onUpdate={handleUpdate}
                width={windowWidth}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

// ── No Results ────────────────────────────────────────────────
const NoResults = ({ searchTerm, category, onReset }) => (
  <div className="no-results">
    <div className="no-results-icon">🗺️</div>
    <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.5rem', fontWeight: 600, color: '#374151', marginBottom: 8 }}>
      No destinations found
    </div>
    <div style={{ fontSize: '0.9rem', marginBottom: 24 }}>
      {searchTerm
        ? `No results for "${searchTerm}"`
        : `No destinations listed under ${category === 'all' ? 'this' : category.charAt(0).toUpperCase() + category.slice(1)} India yet.`}
    </div>
    <button
      onClick={onReset}
      style={{
        padding: '10px 28px', borderRadius: 50,
        border: '1.5px solid #E8813A', background: 'white', color: '#E8813A',
        fontFamily: 'Outfit, sans-serif', fontSize: '0.88rem', fontWeight: 600, cursor: 'pointer',
      }}
    >
      Show all destinations
    </button>
  </div>
);

// ── Skeleton ─────────────────────────────────────────────────
const SkeletonCarousel = () => (
  <div>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
      <div className="skeleton" style={{ height: 14, width: 160 }} />
      <div style={{ display: 'flex', gap: 8 }}>
        <div className="skeleton" style={{ width: 36, height: 36, borderRadius: 10 }} />
        <div className="skeleton" style={{ width: 36, height: 36, borderRadius: 10 }} />
      </div>
    </div>
    <div style={{ display: 'flex', gap: 20, overflow: 'hidden' }}>
      {[1, 2, 3, 4].map(i => (
        <div key={i} style={{
          flex: '0 0 calc(25% - 15px)', minWidth: 200,
          borderRadius: 20, overflow: 'hidden',
          background: 'white', boxShadow: '0 2px 16px rgba(0,0,0,0.07)',
        }}>
          <div className="skeleton" style={{ height: 220 }} />
          <div style={{ padding: 16, display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div className="skeleton" style={{ height: 13, width: 72 }} />
            <div className="skeleton" style={{ height: 20, width: 130 }} />
            <div className="skeleton" style={{ height: 13, width: 100 }} />
            <div className="skeleton" style={{ height: 44, borderRadius: 14, marginTop: 6 }} />
          </div>
        </div>
      ))}
    </div>
  </div>
);

// ── Carousel with FIXED card width ─────────────────────────────────
const DomesticCarousel = React.memo(({ items, isAdmin, getImageUrl, onDelete, onUpdate }) => {
  const scrollRef = useRef(null);
  const containerRef = useRef(null);
  
  // FIX: Set a FIXED card width that doesn't change
  // Using a consistent pixel value that works well across all screen sizes
  // const CARD_WIDTH = 10; // Fixed width in pixels
  const VISIBLE = 4;
  const GAP = 20;

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [progress, setProgress] = useState(0);

  // Update scroll state function
  const updateScrollState = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 4);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 4);
    setProgress(scrollWidth > clientWidth ? scrollLeft / (scrollWidth - clientWidth) : 0);
  }, []);

  // Initialize scroll position and add event listeners
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    
    // Reset scroll to start when items change
    el.scrollTo({ left: 0, behavior: 'instant' });
    updateScrollState();
    
    // Add scroll event listener
    el.addEventListener('scroll', updateScrollState, { passive: true });
    
    // Observe resize to update scroll state
    const ro = new ResizeObserver(updateScrollState);
    ro.observe(el);
    
    return () => {
      el.removeEventListener('scroll', updateScrollState);
      ro.disconnect();
    };
  }, [items, updateScrollState]);

  // Scroll function - moves by exactly one card width + gap
  const scroll = useCallback((dir) => {
    const el = scrollRef.current;
    if (!el) return;
    const scrollAmount = scrollRef.current.clientWidth * 0.9 * dir;
    el.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  }, []);

  const pageCount = Math.ceil(items.length / VISIBLE);

  return (
    <div ref={containerRef} style={{ width: '100%', minHeight: 460 }}>

      {/* Header row */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
        <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '0.88rem', color: '#6B7280' }}>
          Showing <strong style={{ color: 'var(--ink)' }}>{items.length}</strong>{' '}
          destination{items.length !== 1 ? 's' : ''}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          {pageCount > 1 && (
            <div style={{ display: 'flex', gap: 5, alignItems: 'center' }}>
              {Array.from({ length: Math.min(pageCount, 5) }).map((_, i) => {
                const active = Math.round(progress * (pageCount - 1)) === i;
                return (
                  <button
                    key={i}
                    onClick={() => {
                      const el = scrollRef.current;
                      if (!el) return;
                      el.scrollTo({ left: i * VISIBLE * (CARD_WIDTH + GAP), behavior: 'smooth' });
                    }}
                    style={{
                      width: active ? 22 : 8, height: 8,
                      borderRadius: 4, border: 'none',
                      background: active ? 'var(--saffron)' : '#D1D5DB',
                      cursor: 'pointer', transition: 'all 0.3s', padding: 0,
                    }}
                  />
                );
              })}
            </div>
          )}

          <div style={{ display: 'flex', gap: 8 }}>
            {[
              { dir: -1, enabled: canScrollLeft, Icon: FaChevronLeft },
              { dir: 1, enabled: canScrollRight, Icon: FaChevronRight },
            ].map(({ dir, enabled, Icon }) => (
              <button
                key={dir}
                onClick={() => scroll(dir)}
                disabled={!enabled}
                className={`scroll-arrow ${enabled ? 'enabled' : 'disabled'}`}
              >
                <Icon size={13} />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll track wrapper */}
      <div style={{
        position: 'relative',
        borderRadius: 16,
        background: '#F9FAFB',
        padding: '20px 0',
        overflow: 'hidden',
        width: '100%',
      }}>
        {/* Left fade */}
        {canScrollLeft && (
          <div style={{
            position: 'absolute', left: 0, top: 0, bottom: 0, width: 60,
            background: 'linear-gradient(to right, #F9FAFB, transparent)',
            zIndex: 2, borderRadius: '16px 0 0 16px', pointerEvents: 'none',
          }} />
        )}
        {/* Right fade */}
        {canScrollRight && (
          <div style={{
            position: 'absolute', right: 0, top: 0, bottom: 0, width: 60,
            background: 'linear-gradient(to left, #F9FAFB, transparent)',
            zIndex: 2, borderRadius: '0 16px 16px 0', pointerEvents: 'none',
          }} />
        )}

        <div
          ref={scrollRef}
          className="dc-track"
          style={{
            display: 'flex',
            gap: GAP,
            overflowX: 'auto',
            width: '100%',
            boxSizing: 'border-box',
            padding: '4px 20px 8px',
            scrollSnapType: 'x mandatory',
            WebkitOverflowScrolling: 'touch',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {items.map((item, i) => (
            <div
              key={`dc-${item._id || i}`}
              data-dc-card
              style={{
                // FIX: Use FIXED width that never changes
                flex: "0 0 calc((100% - 60px) / 4)",
                // width: `${CARD_WIDTH}px`,
                  minWidth: "calc((100% - 60px) / 4)",

                maxWidth: "calc((100% - 60px) / 4)",
                scrollSnapAlign: 'start',
              }}
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
      {items.length > VISIBLE && (
        <div style={{ marginTop: 14, height: 3, background: '#E5E7EB', borderRadius: 2, overflow: 'hidden' }}>
          <div style={{
            height: '100%',
            background: 'linear-gradient(90deg, var(--saffron), var(--saffron-dark))',
            borderRadius: 2,
            width: `${Math.max(progress * 100, 4)}%`,
            transition: 'width 0.15s ease-out',
          }} />
        </div>
      )}
    </div>
  );
});

// ── Card Component (unchanged) ─────────────────────────────────────
const DomesticCard = React.memo(({ item, isAdmin, getImageUrl, onDelete, onUpdate, priority }) => (
  <div className="dom-card">

    {/* Image block */}
    <div style={{ position: 'relative', width: '100%', height: 220, background: '#F3F4F6', overflow: 'hidden', flexShrink: 0 }}>
      <img
        src={getImageUrl(item.images)}
        alt={item.title}
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        className="dom-card-img"
        // onError={e => { e.target.onerror = null; e.target.src = '/placeholder.jpg'; }}
      />

      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.1) 45%, transparent 100%)',
      }} />

      {/* Rating badge */}
      <div style={{
        position: 'absolute', top: 12, left: 12,
        display: 'flex', alignItems: 'center', gap: 5,
        background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(4px)',
        borderRadius: 50, padding: '4px 10px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.14)',
      }}>
        <FaStar style={{ color: '#FBB040', fontSize: '0.7rem' }} />
        <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '0.78rem', fontWeight: 700, color: '#1F2937' }}>
          {item.rating || '4.8'}
        </span>
      </div>

      {/* Region badge */}
      {(item.region || detectRegion(item)) && (
        <div style={{
          position: 'absolute', top: 12, right: isAdmin ? 76 : 12,
          padding: '4px 10px', borderRadius: 50,
          background: 'rgba(232,129,58,0.92)', backdropFilter: 'blur(4px)',
          fontFamily: 'Outfit, sans-serif', fontSize: '0.68rem', fontWeight: 700,
          color: 'white', textTransform: 'capitalize',
        }}>
          {(item.region || detectRegion(item))} India
        </div>
      )}

      {/* Admin controls */}
      {isAdmin && (
        <div style={{ position: 'absolute', top: 10, right: 10, display: 'flex', gap: 6, zIndex: 10 }}>
          <input
            id={`dc-file-${item._id}`}
            type="file"
            accept="image/*"
            style={{ display: 'none' }}
            onChange={e => onUpdate(item._id, e.target.files[0])}
          />
          <button
            onClick={e => { e.stopPropagation(); document.getElementById(`dc-file-${item._id}`).click(); }}
            style={{
              width: 30, height: 30, borderRadius: 8,
              background: 'rgba(251,191,36,0.92)', backdropFilter: 'blur(4px)',
              border: 'none', color: 'white', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
          >
            <FaUpload size={11} />
          </button>
          <button
            onClick={e => { e.stopPropagation(); onDelete(item._id); }}
            style={{
              width: 30, height: 30, borderRadius: 8,
              background: 'rgba(239,68,68,0.92)', backdropFilter: 'blur(4px)',
              border: 'none', color: 'white', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
          >
            <FaTrash size={11} />
          </button>
        </div>
      )}

      {/* Title + location overlaid on image */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '14px 16px' }}>
        <h3 style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: '1.3rem', fontWeight: 700, color: 'white',
          lineHeight: 1.2, margin: 0,
          textShadow: '0 2px 14px rgba(0,0,0,0.6)',
        }}>
          {item.title}
        </h3>
        {item.state && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginTop: 4 }}>
            <FaMapMarkerAlt style={{ color: '#FDA06B', fontSize: '0.65rem' }} />
            <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '0.72rem', color: 'rgba(255,255,255,0.85)' }}>
              {item.state}
            </span>
          </div>
        )}
      </div>
    </div>

    {/* Card body */}
    <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', flex: 1 }}>

      {/* Meta row */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        marginBottom: 12, fontFamily: 'Outfit, sans-serif', fontSize: '0.75rem', color: '#6B7280',
      }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
          <FaUsers style={{ color: '#9CA3AF', fontSize: '0.7rem' }} /> 2–12
        </span>
        <span style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
          <FaHotel style={{ color: '#9CA3AF', fontSize: '0.7rem' }} /> 4★
        </span>
        <span style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
          <FaClock style={{ color: '#9CA3AF', fontSize: '0.7rem' }} /> {item.duration || '3–5 days'}
        </span>
      </div>

      {/* Divider */}
      <div style={{ borderTop: '1px solid #F3F4F6', marginBottom: 12 }} />

      {/* Tags */}
      <div style={{ display: 'flex', gap: 6, marginBottom: 14, flexWrap: 'wrap' }}>
        {(item.tags || ['Culture', 'Nature']).slice(0, 2).map((tag, i) => (
          <span key={i} className="tag-badge tag-orange">{tag}</span>
        ))}
        <span className="tag-badge tag-green">Best Value</span>
      </div>

      <div style={{ flex: 1 }} />

      {/* CTA */}
      <Link to="/Maharashtra" className="cta-btn">
        Book Now <FaArrowRight size={11} />
      </Link>
    </div>
  </div>
));

export default Domestic;