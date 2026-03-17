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
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
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
          console.error("Error fetching Data:", err);
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
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
    if (currentLoader) {
      observer.observe(currentLoader);
    }

    return () => {
      if (currentLoader) {
        observer.unobserve(currentLoader);
      }
    };
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
        console.error("Error loading more data:", err);
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
    if (!window.confirm("Are you sure you want to delete this image?")) return;
    try {
      const res = await axios.delete(`${BASE}/api/delete-image/${id}`);
      if (res.data.success) {
        setStates1(prev => prev.filter(item => item._id !== id));
        setStates2(prev => prev.filter(item => item._id !== id));
      }
    } catch (err) {
      console.error("Error deleting:", err);
    }
  }, []);

  const handleUpdate = useCallback(async (id, file) => {
    if (!file) return;
    try {
      const formdata = new FormData();
      formdata.append("image", file);
      const res = await api.post(`upload-image/${id}`, formdata, {
        headers: { "Content-Type": "multipart/form-data" }
      });

      if (res.data.success) {
        setStates1(prev =>
          prev.map(item => item._id === id ? { ...item, image: res.data.data.image } : item)
        );
        setStates2(prev =>
          prev.map(item => item._id === id ? { ...item, image: res.data.data.image } : item)
        );
      }
    } catch (err) {
      console.error("Error updating:", err);
    }
  }, []);

  // Filter states based on search
  const filteredStates1 = states1.filter(item =>
    item.title?.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const filteredStates2 = states2.filter(item =>
    item.title?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const visibleCards1 = filteredStates1.slice(startIndex, startIndex + cardsToShow);
  const visibleCards2 = filteredStates2.slice(startIndex, startIndex + cardsToShow);
  const totalCards = Math.max(filteredStates1.length, filteredStates2.length);

  // Category filters
  const categories = [
    { id: 'all', label: 'All', icon: <FaGlobe />, count: totalCards },
    { id: 'north', label: 'North', icon: <FaMountain />, count: 12 },
    { id: 'south', label: 'South', icon: <FaUmbrellaBeach />, count: 15 },
    { id: 'east', label: 'East', icon: <FaTree />, count: 8 },
    { id: 'west', label: 'West', icon: <FaWater />, count: 10 },
  ];

  if (loading) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#0B1E33'
      }}>
        <div style={{ textAlign: 'center', color: 'white' }}>
          <div style={{
            width: '40px',
            height: '40px',
            margin: '0 auto 20px',
            border: '3px solid rgba(255,255,255,0.3)',
            borderTopColor: '#00C3A5',
            borderRadius: '50%'
          }}></div>
          <p>Loading destinations...</p>
        </div>
      </div>
    );
  }

  return (

    
    <div style={{
      minHeight: '100vh',
      background: '#F8FAFC',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      
      {/* Simple Header */}
      <div style={{
        background: '#0B1E33',
        padding: '40px 0',
        borderBottom: '3px solid #00C3A5'
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 20px'
        }}>
          <h1 style={{
            fontSize: '2rem',
            fontWeight: '600',
            color: 'white',
            marginBottom: '10px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}>
            <FaMapMarkedAlt style={{ color: '#00C3A5' }} />
            Discover India
          </h1>
          <p style={{ color: '#94A3B8', fontSize: '1rem' }}>
            Explore the diverse landscapes and rich culture of India's beautiful destinations
          </p>
          
          {/* Simple Stats */}
          <div style={{
            display: 'flex',
            gap: '30px',
            marginTop: '25px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <FaAward style={{ color: '#00C3A5' }} />
              <span style={{ color: 'white' }}>36+ Years</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <FaUsers style={{ color: '#00C3A5' }} />
              <span style={{ color: 'white' }}>15k+ Travelers</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <FaStar style={{ color: '#00C3A5' }} />
              <span style={{ color: 'white' }}>4.8 Rating</span>
            </div>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div style={{
        maxWidth: '1400px',
        margin: '-20px auto 30px',
        padding: '0 20px',
        position: 'relative',
        zIndex: 10
      }}>
        <div style={{
          background: 'white',
          borderRadius: '8px',
          padding: '12px 20px',
          display: 'flex',
          alignItems: 'center',
          boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
          border: '1px solid #E2E8F0'
        }}>
          <FaSearch style={{ color: '#94A3B8', marginRight: '12px' }} />
          <input
            type="text"
            placeholder="Search destinations..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              flex: 1,
              border: 'none',
              outline: 'none',
              fontSize: '0.95rem',
              background: 'transparent'
            }}
          />
        </div>
      </div>

      {/* Filter Bar */}
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto 30px',
        padding: '0 20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '20px'
      }}>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '8px 16px',
                borderRadius: '30px',
                border: selectedCategory === cat.id ? '2px solid #00C3A5' : '1px solid #E2E8F0',
                background: selectedCategory === cat.id ? '#F0FDF9' : 'white',
                color: selectedCategory === cat.id ? '#00C3A5' : '#64748B',
                fontSize: '0.9rem',
                fontWeight: selectedCategory === cat.id ? '600' : '400',
                cursor: 'pointer'
              }}
            >
              {cat.icon}
              {cat.label}
              <span style={{
                background: selectedCategory === cat.id ? '#00C3A5' : '#E2E8F0',
                color: selectedCategory === cat.id ? 'white' : '#64748B',
                padding: '2px 6px',
                borderRadius: '12px',
                fontSize: '0.75rem'
              }}>{cat.count}</span>
            </button>
          ))}
        </div>

        <div style={{ display: 'flex', gap: '8px' }}>
          <button
            onClick={() => setViewMode('grid')}
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '8px',
              border: viewMode === 'grid' ? '2px solid #00C3A5' : '1px solid #E2E8F0',
              background: viewMode === 'grid' ? '#F0FDF9' : 'white',
              color: viewMode === 'grid' ? '#00C3A5' : '#64748B',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="7" height="7" rx="1" />
              <rect x="14" y="3" width="7" height="7" rx="1" />
              <rect x="3" y="14" width="7" height="7" rx="1" />
              <rect x="14" y="14" width="7" height="7" rx="1" />
            </svg>
          </button>
          <button
            onClick={() => setViewMode('list')}
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '8px',
              border: viewMode === 'list' ? '2px solid #00C3A5' : '1px solid #E2E8F0',
              background: viewMode === 'list' ? '#F0FDF9' : 'white',
              color: viewMode === 'list' ? '#00C3A5' : '#64748B',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="8" y1="6" x2="21" y2="6" />
              <line x1="8" y1="12" x2="21" y2="12" />
              <line x1="8" y1="18" x2="21" y2="18" />
              <line x1="3" y1="6" x2="3.01" y2="6" />
              <line x1="3" y1="12" x2="3.01" y2="12" />
              <line x1="3" y1="18" x2="3.01" y2="18" />
            </svg>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '0 20px 40px',
        display: 'grid',
        gridTemplateColumns: '350px 1fr',
        gap: '30px'
      }}>
        {/* Left Sidebar - Featured */}
        <div>
          <div style={{
            background: 'white',
            borderRadius: '12px',
            border: '1px solid #E2E8F0',
            overflow: 'hidden'
          }}>
            <div style={{
              padding: '16px 20px',
              borderBottom: '1px solid #E2E8F0',
              background: '#F8FAFC'
            }}>
              <h3 style={{
                fontSize: '1.1rem',
                fontWeight: '600',
                color: '#0B1E33',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <FaPlay style={{ color: '#00C3A5' }} />
                Featured Destinations
              </h3>
            </div>

            <div style={{ padding: '20px' }}>
              {/* Carousel */}
              <div style={{
                position: 'relative',
                borderRadius: '8px',
                overflow: 'hidden',
                aspectRatio: '4/3',
                background: '#F1F5F9'
              }}>
                <button
                  onClick={() => setCurrentIndex(prev => (prev - 1 + animation.length) % animation.length)}
                  style={{
                    position: 'absolute',
                    left: '10px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: 'white',
                    border: '1px solid #E2E8F0',
                    color: '#64748B',
                    cursor: 'pointer',
                    zIndex: 10,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <FaChevronLeft size={14} />
                </button>

                <img
                  src={animation[currentIndex]?.images}
                  alt="Featured"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />

                <button
                  onClick={() => setCurrentIndex(prev => (prev + 1) % animation.length)}
                  style={{
                    position: 'absolute',
                    right: '10px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: 'white',
                    border: '1px solid #E2E8F0',
                    color: '#64748B',
                    cursor: 'pointer',
                    zIndex: 10,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <FaChevronRight size={14} />
                </button>

                <div style={{
                  position: 'absolute',
                  bottom: '0',
                  left: '0',
                  right: '0',
                  padding: '20px',
                  background: 'linear-gradient(to top, rgba(11,30,51,0.9), transparent)',
                  color: 'white'
                }}>
                  <h4 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '4px' }}>
                    {animation[currentIndex]?.title || 'Discover India'}
                  </h4>
                  <p style={{ fontSize: '0.85rem', opacity: '0.9' }}>
                    Experience the magic
                  </p>
                </div>
              </div>

              {/* Dots */}
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '6px',
                marginTop: '15px'
              }}>
                {animation.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    style={{
                      width: i === currentIndex ? '24px' : '6px',
                      height: '6px',
                      borderRadius: i === currentIndex ? '12px' : '50%',
                      border: 'none',
                      background: i === currentIndex ? '#00C3A5' : '#E2E8F0',
                      cursor: 'pointer'
                    }}
                  />
                ))}
              </div>

              {/* Quick Stats */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '15px',
                marginTop: '20px',
                paddingTop: '20px',
                borderTop: '1px solid #E2E8F0'
              }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '1.3rem', fontWeight: '600', color: '#0B1E33' }}>{totalCards}+</div>
                  <div style={{ fontSize: '0.8rem', color: '#64748B' }}>Destinations</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '1.3rem', fontWeight: '600', color: '#0B1E33' }}>156</div>
                  <div style={{ fontSize: '0.8rem', color: '#64748B' }}>Packages</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '1.3rem', fontWeight: '600', color: '#0B1E33' }}>24/7</div>
                  <div style={{ fontSize: '0.8rem', color: '#64748B' }}>Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Content - Destinations Grid */}
        <div>
          <div style={{
            background: 'white',
            borderRadius: '12px',
            border: '1px solid #E2E8F0',
            padding: '25px'
          }}>
            {/* Header with Navigation */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '25px'
            }}>
              <h2 style={{
                fontSize: '1.2rem',
                fontWeight: '600',
                color: '#0B1E33',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <FaMapMarkerAlt style={{ color: '#00C3A5' }} />
                Popular Destinations
                <span style={{
                  fontSize: '0.85rem',
                  color: '#64748B',
                  fontWeight: '400',
                  marginLeft: '8px'
                }}>
                  {totalCards} places
                </span>
              </h2>

              <div style={{ display: 'flex', gap: '8px' }}>
                <button
                  onClick={handlePrev}
                  disabled={startIndex === 0}
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '8px',
                    border: '1px solid #E2E8F0',
                    background: startIndex === 0 ? '#F1F5F9' : 'white',
                    color: startIndex === 0 ? '#CBD5E1' : '#64748B',
                    cursor: startIndex === 0 ? 'not-allowed' : 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <FaChevronLeft size={14} />
                </button>
                <button
                  onClick={handleNext}
                  disabled={startIndex + cardsToShow >= totalCards}
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '8px',
                    border: '1px solid #E2E8F0',
                    background: startIndex + cardsToShow >= totalCards ? '#F1F5F9' : 'white',
                    color: startIndex + cardsToShow >= totalCards ? '#CBD5E1' : '#64748B',
                    cursor: startIndex + cardsToShow >= totalCards ? 'not-allowed' : 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <FaChevronRight size={14} />
                </button>
              </div>
            </div>

            {/* First Row */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: cardsToShow === 1 ? '1fr' : cardsToShow === 2 ? 'repeat(2,1fr)' : 'repeat(3,1fr)',
              gap: '20px',
              marginBottom: '20px'
            }}>
              {visibleCards1.map((item, index) => (
                <div
                  key={item._id || index}
                  style={{
                    background: 'white',
                    borderRadius: '8px',
                    border: '1px solid #E2E8F0',
                    overflow: 'hidden'
                  }}
                >
                  <div style={{ position: 'relative', height: '160px', background: '#F1F5F9' }}>
                    <img
                      src={item.images ? `${BASE}${item.images}` : "/placeholder.jpg"}
                      alt={item.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                    />
                    
                    {isAdmin && (
                      <div style={{
                        position: 'absolute',
                        top: '8px',
                        right: '8px',
                        display: 'flex',
                        gap: '6px'
                      }}>
                        <input
                          id={`file-${item._id}`}
                          type="file"
                          style={{ display: 'none' }}
                          onChange={(e) => handleUpdate(item._id, e.target.files[0])}
                        />
                        <button
                          onClick={() => document.getElementById(`file-${item._id}`).click()}
                          style={{
                            width: '30px',
                            height: '30px',
                            borderRadius: '6px',
                            border: 'none',
                            background: '#F59E0B',
                            color: 'white',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}
                        >
                          <FaUpload size={12} />
                        </button>
                        <button
                          onClick={() => handleDelete(item._id)}
                          style={{
                            width: '30px',
                            height: '30px',
                            borderRadius: '6px',
                            border: 'none',
                            background: '#EF4444',
                            color: 'white',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}
                        >
                          <FaTrash size={12} />
                        </button>
                      </div>
                    )}
                  </div>

                  <div style={{ padding: '15px' }}>
                    <h3 style={{
                      fontSize: '1rem',
                      fontWeight: '600',
                      color: '#0B1E33',
                      marginBottom: '8px'
                    }}>
                      {item.title}
                    </h3>

                    <div style={{
                      display: 'flex',
                      gap: '12px',
                      marginBottom: '12px',
                      fontSize: '0.8rem',
                      color: '#64748B'
                    }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <FaMapMarkerAlt size={10} /> India
                      </span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <FaStar size={10} style={{ color: '#FBBF24' }} /> 4.8
                      </span>
                    </div>

                    <div style={{
                      display: 'flex',
                      gap: '12px',
                      marginBottom: '15px',
                      paddingBottom: '15px',
                      borderBottom: '1px solid #E2E8F0',
                      fontSize: '0.8rem',
                      color: '#64748B'
                    }}>
                      <span><FaClock size={10} /> 3-7 Days</span>
                      <span><FaUsers size={10} /> 2-12</span>
                      <span><FaHotel size={10} /> 4★</span>
                    </div>

                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }}>
                      <div>
                        <span style={{ fontSize: '1.1rem', fontWeight: '600', color: '#0B1E33' }}>₹4,999</span>
                        <span style={{ fontSize: '0.8rem', color: '#94A3B8', textDecoration: 'line-through', marginLeft: '6px' }}>₹6,999</span>
                      </div>
                      <Link
                        to="/Maharashtra"
                        style={{
                          padding: '6px 14px',
                          background: '#00C3A5',
                          color: 'white',
                          textDecoration: 'none',
                          borderRadius: '6px',
                          fontSize: '0.85rem',
                          fontWeight: '500',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px'
                        }}
                      >
                        Book <FaArrowRight size={10} />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Second Row */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: cardsToShow === 1 ? '1fr' : cardsToShow === 2 ? 'repeat(2,1fr)' : 'repeat(3,1fr)',
              gap: '20px'
            }}>
              {visibleCards2.map((item, index) => (
                <div
                  key={item._id || index}
                  style={{
                    background: 'white',
                    borderRadius: '8px',
                    border: '1px solid #E2E8F0',
                    overflow: 'hidden'
                  }}
                >
                  <div style={{ position: 'relative', height: '160px', background: '#F1F5F9' }}>
                    <img
                      src={item.image ? `${BASE}${item.image}` : "/placeholder.jpg"}
                      alt={item.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                    />
                    
                    {isAdmin && (
                      <div style={{
                        position: 'absolute',
                        top: '8px',
                        right: '8px',
                        display: 'flex',
                        gap: '6px'
                      }}>
                        <input
                          id={`file2-${item._id}`}
                          type="file"
                          style={{ display: 'none' }}
                          onChange={(e) => handleUpdate(item._id, e.target.files[0])}
                        />
                        <button
                          onClick={() => document.getElementById(`file2-${item._id}`).click()}
                          style={{
                            width: '30px',
                            height: '30px',
                            borderRadius: '6px',
                            border: 'none',
                            background: '#F59E0B',
                            color: 'white',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}
                        >
                          <FaUpload size={12} />
                        </button>
                        <button
                          onClick={() => handleDelete(item._id)}
                          style={{
                            width: '30px',
                            height: '30px',
                            borderRadius: '6px',
                            border: 'none',
                            background: '#EF4444',
                            color: 'white',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}
                        >
                          <FaTrash size={12} />
                        </button>
                      </div>
                    )}
                  </div>

                  <div style={{ padding: '15px' }}>
                    <h3 style={{
                      fontSize: '1rem',
                      fontWeight: '600',
                      color: '#0B1E33',
                      marginBottom: '8px'
                    }}>
                      {item.title}
                    </h3>

                    <div style={{
                      display: 'flex',
                      gap: '12px',
                      marginBottom: '12px',
                      fontSize: '0.8rem',
                      color: '#64748B'
                    }}>
                      <span><FaMapMarkerAlt size={10} /> India</span>
                      <span><FaStar size={10} style={{ color: '#FBBF24' }} /> 4.7</span>
                    </div>

                    <div style={{
                      display: 'flex',
                      gap: '12px',
                      marginBottom: '15px',
                      paddingBottom: '15px',
                      borderBottom: '1px solid #E2E8F0',
                      fontSize: '0.8rem',
                      color: '#64748B'
                    }}>
                      <span><FaClock size={10} /> 4-8 Days</span>
                      <span><FaUsers size={10} /> 2-15</span>
                      <span><FaHotel size={10} /> 5★</span>
                    </div>

                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }}>
                      <div>
                        <span style={{ fontSize: '1.1rem', fontWeight: '600', color: '#0B1E33' }}>₹5,999</span>
                        <span style={{ fontSize: '0.8rem', color: '#94A3B8', textDecoration: 'line-through', marginLeft: '6px' }}>₹7,999</span>
                      </div>
                      <Link
                        to="/Maharashtra"
                        style={{
                          padding: '6px 14px',
                          background: '#00C3A5',
                          color: 'white',
                          textDecoration: 'none',
                          borderRadius: '6px',
                          fontSize: '0.85rem',
                          fontWeight: '500',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px'
                        }}
                      >
                        Book <FaArrowRight size={10} />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Progress */}
            <div style={{ marginTop: '25px' }}>
              <div style={{
                height: '4px',
                background: '#E2E8F0',
                borderRadius: '2px',
                overflow: 'hidden',
                marginBottom: '8px'
              }}>
                <div style={{
                  width: `${((startIndex + cardsToShow) / totalCards) * 100}%`,
                  height: '100%',
                  background: '#00C3A5'
                }} />
              </div>
              <p style={{
                textAlign: 'center',
                fontSize: '0.85rem',
                color: '#64748B'
              }}>
                Showing {startIndex + 1}-{Math.min(startIndex + cardsToShow, totalCards)} of {totalCards} destinations
              </p>
            </div>

            {/* Mobile Navigation */}
            <div style={{
              display: windowWidth < 768 ? 'flex' : 'none',
              gap: '10px',
              marginTop: '20px'
            }}>
              <button
                onClick={handlePrev}
                disabled={startIndex === 0}
                style={{
                  flex: 1,
                  padding: '10px',
                  borderRadius: '6px',
                  border: '1px solid #E2E8F0',
                  background: startIndex === 0 ? '#F1F5F9' : 'white',
                  color: startIndex === 0 ? '#CBD5E1' : '#64748B',
                  cursor: startIndex === 0 ? 'not-allowed' : 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px'
                }}
              >
                <FaChevronLeft size={12} /> Previous
              </button>
              <button
                onClick={handleNext}
                disabled={startIndex + cardsToShow >= totalCards}
                style={{
                  flex: 1,
                  padding: '10px',
                  borderRadius: '6px',
                  border: '1px solid #E2E8F0',
                  background: startIndex + cardsToShow >= totalCards ? '#F1F5F9' : 'white',
                  color: startIndex + cardsToShow >= totalCards ? '#CBD5E1' : '#64748B',
                  cursor: startIndex + cardsToShow >= totalCards ? 'not-allowed' : 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px'
                }}
              >
                Next <FaChevronRight size={12} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Loader */}
      {hasMore && (
        <div ref={loaderRef} style={{ textAlign: 'center', padding: '20px' }}>
          {loadingMore && (
            <div style={{
              width: '30px',
              height: '30px',
              margin: '0 auto',
              border: '2px solid #E2E8F0',
              borderTopColor: '#00C3A5',
              borderRadius: '50%'
            }} />
          )}
        </div>
      )}
    </div>
  );
};

export default Domestic;