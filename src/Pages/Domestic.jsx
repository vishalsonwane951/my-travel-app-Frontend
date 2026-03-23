import React, { useEffect, useState, useContext, useCallback, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';
import api from '../utils/api';
import axios from 'axios';
import {
  FaMapMarkerAlt,
  FaClock,
  FaUsers,
  FaStar,
  FaArrowRight,
  FaSearch,
  FaAward,
  FaGlobe,
  FaUmbrellaBeach,
  FaMountain,
  FaTree,
  FaWater,
  FaChevronRight,
  FaChevronLeft,
  FaHotel,
  FaMapMarkedAlt,
  FaTrash,
  FaUpload,
  FaPlay
} from 'react-icons/fa';

const BASE = 'https://my-travel-app-backend-6.onrender.com';

const Domestic = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const isAdmin = user?.isAdmin;

  const [animation, setAnimation] = useState([]);
  const [states1, setStates1] = useState([]);
  const [states2, setStates2] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startIndex, setStartIndex] = useState(0);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [searchTerm, setSearchTerm] = useState('');

  const loaderRef = useRef();

  // Handle window resize
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getCardsToShow = () => {
    if (windowWidth < 640) return 1;
    if (windowWidth < 1024) return 2;
    return 3;
  };
  const cardsToShow = getCardsToShow();

  // Fetch data
  useEffect(() => {
    const controller = new AbortController();
    async function fetchPackages() {
      try {
        const [res1, res2, res3] = await Promise.all([
          api.get('/maharashtra-domestic/getallAnimation', { signal: controller.signal }),
          api.get('/maharashtra-domestic/getstates', { signal: controller.signal }),
          api.get('/maharashtra-domestic/getstates2', { signal: controller.signal }),
        ]);
        if (!controller.signal.aborted) {
          setAnimation(res1.data || []);
          setStates1(Array.isArray(res2.data) ? res2.data : res2.data?.data || []);
          setStates2(res3.data || []);
        }
      } catch (err) {
        if (err.name !== 'CanceledError' && err.name !== 'AbortError') {
          console.error('Error fetching Data:', err);
        }
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    }
    fetchPackages();
    return () => controller.abort();
  }, []);

  // Intersection Observer for infinite scroll
  useEffect(() => {
    if (!hasMore || loadingMore) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !loadingMore) {
          setPage(prev => prev + 1);
        }
      },
      { threshold: 0.1, rootMargin: '200px' }
    );
    const currentLoader = loaderRef.current;
    if (currentLoader) observer.observe(currentLoader);
    return () => { if (currentLoader) observer.unobserve(currentLoader); };
  }, [hasMore, loadingMore]);

  // Load more data
  useEffect(() => {
    if (page === 1) return;
    const loadMore = async () => {
      setLoadingMore(true);
      try {
        const [moreStates1, moreStates2] = await Promise.all([
          api.get(`/maharashtra-domestic/getstates?page=${page}&limit=6`),
          api.get(`/maharashtra-domestic/getstates2?page=${page}&limit=6`),
        ]);
        const newStates1 = Array.isArray(moreStates1.data) ? moreStates1.data : moreStates1.data?.data || [];
        const newStates2 = moreStates2.data || [];
        setStates1(prev => [...prev, ...newStates1]);
        setStates2(prev => [...prev, ...newStates2]);
        setHasMore(newStates1.length > 0 || newStates2.length > 0);
      } catch (err) {
        console.error('Error loading more data:', err);
      } finally {
        setLoadingMore(false);
      }
    };
    loadMore();
  }, [page]);

  const handlePrev = () => setStartIndex(prev => Math.max(prev - cardsToShow, 0));
  const handleNext = () => {
    const totalCards = Math.max(states1.length, states2.length);
    setStartIndex(prev => Math.min(prev + cardsToShow, totalCards - cardsToShow));
  };

  const handleDelete = useCallback(async (id) => {
    if (!window.confirm('Are you sure you want to delete this image?')) return;
    try {
      const res = await axios.delete(`${BASE}/api/delete-image/${id}`);
      if (res.data.success) {
        setStates1(prev => prev.filter(item => item._id !== id));
        setStates2(prev => prev.filter(item => item._id !== id));
      }
    } catch (err) {
      console.error('Error deleting:', err);
    }
  }, []);

  const handleUpdate = useCallback(async (id, file) => {
    if (!file) return;
    try {
      const formdata = new FormData();
      formdata.append('image', file);
      const res = await api.post(`upload-image/${id}`, formdata, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      if (res.data.success) {
        setStates1(prev => prev.map(item => item._id === id ? { ...item, image: res.data.data.image } : item));
        setStates2(prev => prev.map(item => item._id === id ? { ...item, image: res.data.data.image } : item));
      }
    } catch (err) {
      console.error('Error updating:', err);
    }
  }, []);

  const filteredStates1 = states1.filter(item => item.title?.toLowerCase().includes(searchTerm.toLowerCase()));
  const filteredStates2 = states2.filter(item => item.title?.toLowerCase().includes(searchTerm.toLowerCase()));
  const visibleCards1 = filteredStates1.slice(startIndex, startIndex + cardsToShow);
  const visibleCards2 = filteredStates2.slice(startIndex, startIndex + cardsToShow);
  const totalCards = Math.max(filteredStates1.length, filteredStates2.length);

  const categories = [
    { id: 'all', label: 'All India', icon: <FaGlobe />, count: totalCards },
    { id: 'north', label: 'North', icon: <FaMountain />, count: 12 },
    { id: 'south', label: 'South', icon: <FaUmbrellaBeach />, count: 15 },
    { id: 'east', label: 'East', icon: <FaTree />, count: 8 },
    { id: 'west', label: 'West', icon: <FaWater />, count: 10 },
  ];

  // ── Loading skeleton ─────────────────────────────────────────
  if (loading) return (
    <section id="domestic" style={{ background: 'var(--cream)', paddingBottom: 80 }}>
      <div style={{ maxWidth: 1400, margin: '0 auto', padding: '60px 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(300px,1fr))', gap: 24 }}>
          {[1, 2, 3, 4, 5, 6].map(i => (
            <div key={i} style={{ borderRadius: 20, overflow: 'hidden', background: 'white', boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}>
              <div className="skeleton" style={{ height: 200 }} />
              <div style={{ padding: 16 }}>
                <div className="skeleton" style={{ height: 20, marginBottom: 10 }} />
                <div className="skeleton" style={{ height: 14, width: '60%', marginBottom: 16 }} />
                <div className="skeleton" style={{ height: 36, borderRadius: 50 }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  return (
    <section id="domestic" style={{ background: 'var(--cream)', paddingBottom: 80 }}>
      <div style={{ maxWidth: 1400, margin: '0 auto', padding: '80px 24px 0' }}>

        {/* ── Section Header ───────────────────────────────────── */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48, flexWrap: 'wrap', gap: 20 }}>
          <div>
            <div className="section-eyebrow" style={{ marginBottom: 10 }}>Domestic Packages</div>
            <h2 className="section-title">
              Discover <em style={{ color: 'var(--saffron)' }}>India's</em><br />Finest Destinations
            </h2>
          </div>

          <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
            {/* Search */}
            <div style={{ position: 'relative' }}>
              <FaSearch style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: '#9CA3AF', fontSize: '0.85rem' }} />
              <input
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                placeholder="Search destinations..."
                style={{ padding: '10px 16px 10px 38px', borderRadius: 50, border: '1.5px solid #E5E7EB', fontFamily: 'Outfit', fontSize: '0.85rem', outline: 'none', width: 220 }}
              />
            </div>
            {/* View toggle */}
            <div style={{ display: 'flex', gap: 6 }}>
              <button
                onClick={() => setViewMode('grid')}
                style={{ width: 38, height: 38, borderRadius: 10, border: `1.5px solid ${viewMode === 'grid' ? 'var(--saffron)' : '#E5E7EB'}`, background: viewMode === 'grid' ? '#FFF5EE' : 'white', color: viewMode === 'grid' ? 'var(--saffron)' : '#6B7280', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" />
                  <rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" />
                </svg>
              </button>
              <button
                onClick={() => setViewMode('list')}
                style={{ width: 38, height: 38, borderRadius: 10, border: `1.5px solid ${viewMode === 'list' ? 'var(--saffron)' : '#E5E7EB'}`, background: viewMode === 'list' ? '#FFF5EE' : 'white', color: viewMode === 'list' ? 'var(--saffron)' : '#6B7280', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="8" y1="6" x2="21" y2="6" /><line x1="8" y1="12" x2="21" y2="12" /><line x1="8" y1="18" x2="21" y2="18" />
                  <line x1="3" y1="6" x2="3.01" y2="6" /><line x1="3" y1="12" x2="3.01" y2="12" /><line x1="3" y1="18" x2="3.01" y2="18" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* ── Filter Pills ─────────────────────────────────────── */}
        <div style={{ display: 'flex', gap: 10, marginBottom: 40, overflowX: 'auto', paddingBottom: 4 }}>
          {categories.map(c => (
            <button
              key={c.id}
              className={`filter-pill ${selectedCategory === c.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(c.id)}
            >
              {c.icon}
              <span style={{ marginLeft: 6 }}>{c.label}</span>
              <span style={{
                marginLeft: 6,
                background: selectedCategory === c.id ? 'rgba(255,255,255,0.3)' : '#E5E7EB',
                color: selectedCategory === c.id ? 'white' : '#6B7280',
                padding: '1px 7px', borderRadius: 12, fontSize: '0.72rem', fontWeight: 700,
              }}>{c.count}</span>
            </button>
          ))}
        </div>

        {/* ── Main Layout: Sidebar + Cards ─────────────────────── */}
        <div style={{ display: 'grid', gridTemplateColumns: windowWidth >= 1100 ? '300px 1fr' : '1fr', gap: 28 }}>

          {/* Sidebar — featured carousel (desktop only) */}
          {windowWidth >= 1100 && animation.length > 0 && (
            <div style={{ position: 'sticky', top: 90, height: 'fit-content' }}>
              <div style={{ background: 'var(--forest)', borderRadius: 24, overflow: 'hidden', color: 'white' }}>
                <div style={{ position: 'relative', height: 220 }}>
                  <img
                    src={animation[currentIndex]?.images}
                    alt="Featured"
                    loading="lazy"
                    decoding="async"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    onError={e => e.target.src = '/placeholder.jpg'}
                  />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(26,60,52,0.9) 0%, transparent 50%)' }} />
                  <div style={{ position: 'absolute', bottom: 16, left: 16, right: 16 }}>
                    <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.3rem', fontWeight: 700 }}>
                      {animation[currentIndex]?.title || 'Discover India'}
                    </div>
                  </div>
                  <button onClick={() => setCurrentIndex(p => (p - 1 + animation.length) % animation.length)} style={{ position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)', width: 28, height: 28, borderRadius: '50%', background: 'rgba(255,255,255,0.15)', border: 'none', color: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>‹</button>
                  <button onClick={() => setCurrentIndex(p => (p + 1) % animation.length)} style={{ position: 'absolute', right: 10, top: '50%', transform: 'translateY(-50%)', width: 28, height: 28, borderRadius: '50%', background: 'rgba(255,255,255,0.15)', border: 'none', color: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>›</button>
                </div>
                <div style={{ padding: '20px 20px 24px' }}>
                  <div style={{ fontFamily: 'Outfit', fontSize: '0.75rem', opacity: 0.6, letterSpacing: 1, textTransform: 'uppercase', marginBottom: 12 }}>Quick Stats</div>
                  {[
                    { label: 'Destinations', val: `${totalCards}+` },
                    { label: 'Packages', val: '156' },
                    { label: 'Support', val: '24/7' },
                  ].map((s, i) => (
                    <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: i < 2 ? '1px solid rgba(255,255,255,0.1)' : 'none' }}>
                      <span style={{ fontFamily: 'Outfit', fontSize: '0.85rem', opacity: 0.7 }}>{s.label}</span>
                      <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.2rem', fontWeight: 700, color: 'var(--saffron-light)' }}>{s.val}</span>
                    </div>
                  ))}
                  <div style={{ display: 'flex', gap: 6, marginTop: 16 }}>
                    {animation.map((_, i) => (
                      <button key={i} onClick={() => setCurrentIndex(i)} style={{ width: i === currentIndex ? 24 : 8, height: 8, borderRadius: 4, border: 'none', background: i === currentIndex ? 'var(--saffron)' : 'rgba(255,255,255,0.25)', cursor: 'pointer', transition: 'all 0.3s', padding: 0 }} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Right — card grid */}
          <div>
            {/* Count + nav arrows */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
              <div style={{ fontFamily: 'Outfit', fontSize: '0.85rem', color: '#6B7280' }}>
                Showing <strong style={{ color: 'var(--ink)' }}>{totalCards}</strong> destinations
              </div>
              <div style={{ display: 'flex', gap: 8 }}>
                <button onClick={handlePrev} disabled={startIndex === 0} style={{ width: 36, height: 36, borderRadius: 10, border: '1.5px solid #E5E7EB', background: startIndex === 0 ? '#F9FAFB' : 'white', color: startIndex === 0 ? '#D1D5DB' : 'var(--ink)', cursor: startIndex === 0 ? 'not-allowed' : 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <FaChevronLeft size={13} />
                </button>
                <button onClick={handleNext} disabled={startIndex + cardsToShow >= totalCards} style={{ width: 36, height: 36, borderRadius: 10, border: '1.5px solid #E5E7EB', background: startIndex + cardsToShow >= totalCards ? '#F9FAFB' : 'white', color: startIndex + cardsToShow >= totalCards ? '#D1D5DB' : 'var(--ink)', cursor: startIndex + cardsToShow >= totalCards ? 'not-allowed' : 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <FaChevronRight size={13} />
                </button>
              </div>
            </div>

            {/* Row 1 — getstates */}
            <div style={{ display: 'grid', gridTemplateColumns: `repeat(${cardsToShow},1fr)`, gap: 20, marginBottom: 20 }}>
              {visibleCards1.map((item, index) => (
                <div key={item._id || index} className="dest-card" style={{ position: 'relative' }}>
                  <div className="dest-card-img" style={{ height: 200, background: '#F3F4F6' }}>
                    <img
                      src={item.images ? `${BASE}${item.images}` : '/placeholder.jpg'}
                      alt={item.title}
                      loading="lazy"
                      decoding="async"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      onError={e => { e.target.onerror = null; e.target.src = '/placeholder.jpg'; }}
                    />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 55%)' }} />

                    {isAdmin && (
                      <div style={{ position: 'absolute', top: 10, left: 10, display: 'flex', gap: 6 }}>
                        <input id={`file-${item._id}`} type="file" style={{ display: 'none' }} onChange={e => handleUpdate(item._id, e.target.files[0])} />
                        <button onClick={() => document.getElementById(`file-${item._id}`).click()} style={{ width: 30, height: 30, borderRadius: 8, background: '#F59E0B', border: 'none', color: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <FaUpload size={11} />
                        </button>
                        <button onClick={() => handleDelete(item._id)} style={{ width: 30, height: 30, borderRadius: 8, background: '#EF4444', border: 'none', color: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <FaTrash size={11} />
                        </button>
                      </div>
                    )}

                    <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '12px 16px' }}>
                      <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.15rem', fontWeight: 700, color: 'white', marginBottom: 2 }}>{item.title}</div>
                      <div style={{ display: 'flex', gap: 10, fontSize: '0.75rem', color: 'rgba(255,255,255,0.75)', fontFamily: 'Outfit' }}>
                        <span><FaMapMarkerAlt style={{ marginRight: 3 }} />India</span>
                        <span><FaStar style={{ marginRight: 3, color: '#F59E0B' }} />4.8</span>
                        <span><FaClock style={{ marginRight: 3 }} />3-7 Days</span>
                      </div>
                    </div>
                  </div>
                  <div style={{ padding: '16px 18px 18px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                      <div style={{ display: 'flex', gap: 10, fontSize: '0.77rem', color: '#6B7280', fontFamily: 'Outfit' }}>
                        <span><FaUsers style={{ marginRight: 3 }} />2-12</span>
                        <span><FaHotel style={{ marginRight: 3 }} />4★</span>
                      </div>
                      <div>
                        <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.3rem', fontWeight: 700, color: 'var(--saffron)' }}>₹4,999</span>
                        <span style={{ fontFamily: 'Outfit', fontSize: '0.8rem', marginLeft: 6, textDecoration: 'line-through', color: '#9CA3AF' }}>₹6,999</span>
                      </div>
                    </div>
                    <Link to="/Maharashtra" className="btn-primary" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, padding: '10px', fontSize: '0.85rem', borderRadius: 12, textDecoration: 'none' }}>
                      View Package <FaArrowRight size={11} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Row 2 — getstates2 */}
            <div style={{ display: 'grid', gridTemplateColumns: `repeat(${cardsToShow},1fr)`, gap: 20 }}>
              {visibleCards2.map((item, index) => (
                <div key={item._id || index} className="dest-card" style={{ position: 'relative' }}>
                  <div className="dest-card-img" style={{ height: 200, background: '#F3F4F6' }}>
                    <img
                      src={item.image ? `${BASE}${item.image}` : '/placeholder.jpg'}
                      alt={item.title}
                      loading="lazy"
                      decoding="async"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      onError={e => { e.target.onerror = null; e.target.src = '/placeholder.jpg'; }}
                    />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 55%)' }} />

                    {isAdmin && (
                      <div style={{ position: 'absolute', top: 10, left: 10, display: 'flex', gap: 6 }}>
                        <input id={`file2-${item._id}`} type="file" style={{ display: 'none' }} onChange={e => handleUpdate(item._id, e.target.files[0])} />
                        <button onClick={() => document.getElementById(`file2-${item._id}`).click()} style={{ width: 30, height: 30, borderRadius: 8, background: '#F59E0B', border: 'none', color: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <FaUpload size={11} />
                        </button>
                        <button onClick={() => handleDelete(item._id)} style={{ width: 30, height: 30, borderRadius: 8, background: '#EF4444', border: 'none', color: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <FaTrash size={11} />
                        </button>
                      </div>
                    )}

                    <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '12px 16px' }}>
                      <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.15rem', fontWeight: 700, color: 'white', marginBottom: 2 }}>{item.title}</div>
                      <div style={{ display: 'flex', gap: 10, fontSize: '0.75rem', color: 'rgba(255,255,255,0.75)', fontFamily: 'Outfit' }}>
                        <span><FaMapMarkerAlt style={{ marginRight: 3 }} />India</span>
                        <span><FaStar style={{ marginRight: 3, color: '#F59E0B' }} />4.7</span>
                        <span><FaClock style={{ marginRight: 3 }} />4-8 Days</span>
                      </div>
                    </div>
                  </div>
                  <div style={{ padding: '16px 18px 18px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                      <div style={{ display: 'flex', gap: 10, fontSize: '0.77rem', color: '#6B7280', fontFamily: 'Outfit' }}>
                        <span><FaUsers style={{ marginRight: 3 }} />2-15</span>
                        <span><FaHotel style={{ marginRight: 3 }} />5★</span>
                      </div>
                      <div>
                        <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.3rem', fontWeight: 700, color: 'var(--saffron)' }}>₹5,999</span>
                        <span style={{ fontFamily: 'Outfit', fontSize: '0.8rem', marginLeft: 6, textDecoration: 'line-through', color: '#9CA3AF' }}>₹7,999</span>
                      </div>
                    </div>
                    <Link to="/Maharashtra" className="btn-primary" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, padding: '10px', fontSize: '0.85rem', borderRadius: 12, textDecoration: 'none' }}>
                      View Package <FaArrowRight size={11} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Progress bar */}
            {totalCards > 0 && (
              <div style={{ marginTop: 28 }}>
                <div style={{ height: 4, background: '#E5E7EB', borderRadius: 2, overflow: 'hidden', marginBottom: 8 }}>
                  <div style={{ width: `${Math.min(((startIndex + cardsToShow) / totalCards) * 100, 100)}%`, height: '100%', background: 'linear-gradient(90deg, var(--saffron), var(--saffron-dark))', transition: 'width 0.4s ease' }} />
                </div>
                <p style={{ textAlign: 'center', fontFamily: 'Outfit', fontSize: '0.8rem', color: '#9CA3AF' }}>
                  {startIndex + 1}–{Math.min(startIndex + cardsToShow, totalCards)} of {totalCards} destinations
                </p>
              </div>
            )}

            {/* Mobile nav */}
            {windowWidth < 768 && (
              <div style={{ display: 'flex', gap: 10, marginTop: 20 }}>
                <button onClick={handlePrev} disabled={startIndex === 0} style={{ flex: 1, padding: '11px', borderRadius: 12, border: '1.5px solid #E5E7EB', background: startIndex === 0 ? '#F9FAFB' : 'white', color: startIndex === 0 ? '#D1D5DB' : 'var(--ink)', cursor: startIndex === 0 ? 'not-allowed' : 'pointer', fontFamily: 'Outfit', fontWeight: 600, fontSize: '0.85rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
                  <FaChevronLeft size={12} /> Previous
                </button>
                <button onClick={handleNext} disabled={startIndex + cardsToShow >= totalCards} style={{ flex: 1, padding: '11px', borderRadius: 12, border: '1.5px solid #E5E7EB', background: startIndex + cardsToShow >= totalCards ? '#F9FAFB' : 'white', color: startIndex + cardsToShow >= totalCards ? '#D1D5DB' : 'var(--ink)', cursor: startIndex + cardsToShow >= totalCards ? 'not-allowed' : 'pointer', fontFamily: 'Outfit', fontWeight: 600, fontSize: '0.85rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
                  Next <FaChevronRight size={12} />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Infinite scroll loader */}
      {hasMore && (
        <div ref={loaderRef} style={{ textAlign: 'center', padding: '30px 0' }}>
          {loadingMore && (
            <div style={{ display: 'inline-block', width: 32, height: 32, border: '3px solid #E5E7EB', borderTopColor: 'var(--saffron)', borderRadius: '50%', animation: 'spin 0.8s linear infinite' }} />
          )}
        </div>
      )}
    </section>
  );
};

export default Domestic;