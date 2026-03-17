import React, { useEffect, useState, useContext, useCallback, useMemo, useRef } from 'react';
import { AuthContext } from '../Context/AuthContext';
import api from '../utils/api';
import {
  FaGlobe,
  FaMapMarkerAlt,
  FaClock,
  FaUsers,
  FaStar,
  FaArrowRight,
  FaSearch,
  FaAward,
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
  FaEdit,
  FaPlus,
  FaPlane,
  FaShip,
  FaCar,
  FaTrain,
  FaBus,
  FaBicycle,
  FaWalking,
  FaHiking,
  FaSkiing,
  FaSwimmer,
  FaDumbbell,
  FaSpa,
  FaWineGlassAlt,
  FaCocktail,
  FaUtensils,
  FaPizzaSlice,
  FaIceCream,
  FaCoffee,
  FaBeer
} from 'react-icons/fa';

const BASE = 'https://my-travel-app-backend-6.onrender.com';

const International = () => {
  const { user } = useContext(AuthContext);
  const isAdmin = user?.isAdmin;

  const [international1, setInternational1] = useState([]);
  const [international2, setInternational2] = useState([]);
  const [loading, setLoading] = useState(true);
  const [startIndex, setStartIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [activeTab, setActiveTab] = useState('all');
  const [selectedCountry, setSelectedCountry] = useState(null);
  
  // Admin states
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [editRow, setEditRow] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    images: '',
    description: '',
    location: '',
    price: '',
    duration: '',
    rating: '4.5'
  });
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredDestinations, setFilteredDestinations] = useState([]);

  // Refs
  const observerRef = useRef(null);
  const imageCache = useRef(new Map());
  const initialFetchDone = useRef(false);

  // Helper function to get correct image URL
  const getImageUrl = useCallback((imagePath) => {
    if (!imagePath) return "/placeholder.jpg";
    
    if (imageCache.current.has(imagePath)) {
      return imageCache.current.get(imagePath);
    }
    
    let url;
    if (imagePath.startsWith('http')) {
      url = imagePath;
    } else {
      const cleanPath = imagePath.replace(/^\/+/, '');
      url = `${BASE}/${cleanPath}`;
    }
    
    imageCache.current.set(imagePath, url);
    return url;
  }, []);

  // Handle responsive card count
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setWindowWidth(width);
      
      if (width < 640) {
        setCardsToShow(1);
      } else if (width < 1024) {
        setCardsToShow(2);
      } else {
        setCardsToShow(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Fetch data
  useEffect(() => {
    const controller = new AbortController();
    
    async function fetchPackages() {
      if (initialFetchDone.current) return;
      
      try {
        const [res1, res2] = await Promise.all([
          api.get('/International-tours/getallInternational', { 
            signal: controller.signal
          }),
          api.get('/International-tours/getallInternational2', { 
            signal: controller.signal
          }),
        ]);
        
        setInternational1(res1.data || []);
        setInternational2(res2.data || []);
        initialFetchDone.current = true;
      } catch (err) {
        if (err.name !== 'AbortError') {
          console.error("Error fetching Data:", err);
        }
      } finally {
        setLoading(false);
      }
    }
    
    fetchPackages();
    return () => controller.abort();
  }, []);

  // Filter destinations based on search
  useEffect(() => {
    const allDestinations = [...international1, ...international2];
    const filtered = allDestinations.filter(dest => 
      dest.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      dest.location?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      dest.description?.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredDestinations(filtered);
  }, [searchTerm, international1, international2]);

  const handlePrev = useCallback(() => {
    if (startIndex > 0) {
      setStartIndex(prev => Math.max(0, prev - cardsToShow));
    }
  }, [startIndex, cardsToShow]);

  const handleNext = useCallback(() => {
    const totalCards = Math.max(international1.length, international2.length);
    if (startIndex + cardsToShow < totalCards) {
      setStartIndex(prev => prev + cardsToShow);
    }
  }, [startIndex, cardsToShow, international1.length, international2.length]);

  const openCountryModal = useCallback((country) => {
    setSelectedCountry(country);
  }, []);

  const closeCountryModal = useCallback(() => {
    setSelectedCountry(null);
  }, []);

  // Admin Functions
  const handleFileSelect = useCallback((e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({ ...prev, preview: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  }, []);

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }, []);

  const resetForm = useCallback(() => {
    setFormData({
      title: '',
      images: '',
      description: '',
      location: '',
      price: '',
      duration: '',
      rating: '4.5'
    });
    setSelectedFile(null);
    setUploadProgress(0);
  }, []);

  const handleAdd = useCallback(async (row) => {
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('title', formData.title);
      formDataToSend.append('description', formData.description || '');
      formDataToSend.append('location', formData.location || '');
      formDataToSend.append('price', formData.price || '');
      formDataToSend.append('duration', formData.duration || '');
      formDataToSend.append('rating', formData.rating || '4.5');
      
      if (selectedFile) {
        formDataToSend.append('image', selectedFile);
      }

      const endpoint = row === 'row1' 
        ? '/International-tours/addInternational'
        : '/International-tours/addInternational2';

      const res = await api.post(endpoint, formDataToSend, {
        headers: { 'Content-Type': 'multipart/form-data' },
        onUploadProgress: (progressEvent) => {
          const percent = Math.round((progressEvent.loaded * 100) / progressEvent.total);
          setUploadProgress(percent);
        }
      });

      if (res.data.success) {
        if (row === 'row1') {
          setInternational1(prev => [...prev, res.data.data]);
        } else {
          setInternational2(prev => [...prev, res.data.data]);
        }
        setShowAddModal(false);
        resetForm();
      }
    } catch (err) {
      console.error('Error adding destination:', err);
    }
  }, [formData, selectedFile, resetForm]);

  const handleUpdate = useCallback(async () => {
    if (!editingItem) return;

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('title', formData.title);
      formDataToSend.append('description', formData.description);
      formDataToSend.append('location', formData.location);
      formDataToSend.append('price', formData.price);
      formDataToSend.append('duration', formData.duration);
      formDataToSend.append('rating', formData.rating);
      
      if (selectedFile) {
        formDataToSend.append('image', selectedFile);
      }

      const endpoint = editRow === 'row1'
        ? `/International-tours/updateInternational/${editingItem._id}`
        : `/International-tours/updateInternational2/${editingItem._id}`;

      const res = await api.put(endpoint, formDataToSend, {
        headers: { 'Content-Type': 'multipart/form-data' },
        onUploadProgress: (progressEvent) => {
          const percent = Math.round((progressEvent.loaded * 100) / progressEvent.total);
          setUploadProgress(percent);
        }
      });

      if (res.data.success) {
        if (editRow === 'row1') {
          setInternational1(prev => prev.map(item => 
            item._id === editingItem._id ? res.data.data : item
          ));
        } else {
          setInternational2(prev => prev.map(item => 
            item._id === editingItem._id ? res.data.data : item
          ));
        }
        setShowEditModal(false);
        setEditingItem(null);
        resetForm();
      }
    } catch (err) {
      console.error('Error updating destination:', err);
    }
  }, [editingItem, editRow, formData, selectedFile, resetForm]);

  const handleDelete = useCallback(async (id, row) => {
    if (!window.confirm('Are you sure you want to delete this destination?')) return;

    try {
      const endpoint = row === 'row1'
        ? `/International-tours/deleteInternational/${id}`
        : `/International-tours/deleteInternational2/${id}`;

      const res = await api.delete(endpoint);

      if (res.data.success) {
        if (row === 'row1') {
          setInternational1(prev => prev.filter(item => item._id !== id));
        } else {
          setInternational2(prev => prev.filter(item => item._id !== id));
        }
      }
    } catch (err) {
      console.error('Error deleting destination:', err);
    }
  }, []);

  const openEditModal = useCallback((item, row) => {
    setEditingItem(item);
    setEditRow(row);
    setFormData({
      title: item.title || '',
      images: item.images || '',
      description: item.description || '',
      location: item.location || '',
      price: item.price || '',
      duration: item.duration || '',
      rating: item.rating || '4.5'
    });
    setSelectedFile(null);
    setShowEditModal(true);
  }, []);

  // Computed values
  const totalCards = useMemo(() => 
    Math.max(international1.length, international2.length), 
    [international1.length, international2.length]
  );

  const progressPercent = useMemo(() => 
    totalCards > 0 ? ((startIndex + cardsToShow) / totalCards) * 100 : 0,
    [totalCards, startIndex, cardsToShow]
  );

  const visibleCards1 = useMemo(() => 
    international1.slice(startIndex, startIndex + cardsToShow),
    [international1, startIndex, cardsToShow]
  );

  const visibleCards2 = useMemo(() => 
    international2.slice(startIndex, startIndex + cardsToShow),
    [international2, startIndex, cardsToShow]
  );

  const featuredDestinations = useMemo(() => 
    [...international1, ...international2].slice(0, 6),
    [international1, international2]
  );

  const stats = useMemo(() => [
    { icon: <FaGlobe />, number: international1.length + international2.length, label: 'Destinations' },
    { icon: <FaPlane />, number: Math.floor((international1.length + international2.length) * 2.5), label: 'Active Tours' },
    { icon: <FaUsers />, number: '24/7', label: 'Support' },
    { icon: <FaStar />, number: '4.8', label: 'Rating' }
  ], [international1.length, international2.length]);

  if (loading) {
    return (
      <div style={{
        minHeight: '100vh',
        background: '#0B1E33',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{
            width: '40px',
            height: '40px',
            margin: '0 auto 20px',
            border: '3px solid rgba(255,255,255,0.3)',
            borderTopColor: '#00C3A5',
            borderRadius: '50%'
          }}></div>
          <p style={{ color: 'white' }}>Loading destinations...</p>
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
      {/* Header */}
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
            <FaPlane style={{ color: '#00C3A5' }} />
            Discover the World
          </h1>
          <p style={{ color: '#94A3B8', fontSize: '1rem' }}>
            Embark on unforgettable journeys to the most beautiful destinations across the globe
          </p>
          
          {/* Stats */}
          <div style={{
            display: 'flex',
            gap: '30px',
            marginTop: '25px',
            flexWrap: 'wrap'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <FaGlobe style={{ color: '#00C3A5' }} />
              <span style={{ color: 'white' }}>{international1.length + international2.length} Destinations</span>
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
            placeholder="Search destinations, countries, or experiences..."
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
          {searchTerm && (
            <span style={{ color: '#64748B', fontSize: '0.9rem' }}>
              {filteredDestinations.length} results
            </span>
          )}
        </div>
      </div>

      {/* Admin Bar */}
      {isAdmin && (
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto 30px',
          padding: '0 20px'
        }}>
          <div style={{
            background: 'white',
            padding: '15px 20px',
            borderRadius: '8px',
            border: '1px solid #E2E8F0',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '15px'
          }}>
            <h3 style={{ margin: 0, color: '#0B1E33', fontSize: '1rem' }}>Admin Dashboard</h3>
            <button
              onClick={() => {
                resetForm();
                setShowAddModal(true);
              }}
              style={{
                padding: '8px 16px',
                borderRadius: '6px',
                border: 'none',
                background: '#00C3A5',
                color: 'white',
                fontSize: '0.9rem',
                fontWeight: '500',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <FaPlus size={12} /> Add Destination
            </button>
          </div>
        </div>
      )}

      {/* Stats Cards */}
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto 40px',
        padding: '0 20px',
        display: 'grid',
        gridTemplateColumns: windowWidth < 768 ? '1fr' : 'repeat(4, 1fr)',
        gap: '20px'
      }}>
        {stats.map((stat, index) => (
          <div
            key={index}
            style={{
              background: 'white',
              padding: '20px',
              borderRadius: '8px',
              border: '1px solid #E2E8F0',
              textAlign: 'center'
            }}
          >
            <div style={{ fontSize: '2rem', color: '#00C3A5', marginBottom: '10px' }}>
              {stat.icon}
            </div>
            <div style={{ fontSize: '1.5rem', fontWeight: '600', color: '#0B1E33' }}>
              {stat.number}
            </div>
            <div style={{ fontSize: '0.9rem', color: '#64748B' }}>
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* Featured Destinations */}
      {!searchTerm && featuredDestinations.length > 0 && (
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto 50px',
          padding: '0 20px'
        }}>
          <h2 style={{
            fontSize: '1.5rem',
            fontWeight: '600',
            color: '#0B1E33',
            marginBottom: '10px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}>
            <FaAward style={{ color: '#00C3A5' }} />
            Featured Destinations
          </h2>
          <p style={{ color: '#64748B', marginBottom: '30px' }}>
            Hand-picked locations for your next adventure
          </p>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: windowWidth < 768 ? '1fr' : 'repeat(3, 1fr)',
            gap: '30px'
          }}>
            {featuredDestinations.map((dest, index) => (
              <div
                key={dest._id || index}
                style={{
                  background: 'white',
                  borderRadius: '8px',
                  border: '1px solid #E2E8F0',
                  overflow: 'hidden',
                  cursor: 'pointer'
                }}
                onClick={() => openCountryModal(dest)}
              >
                <div style={{ height: '200px', background: '#F1F5F9', position: 'relative' }}>
                  <img
                    src={getImageUrl(dest.images)}
                    alt={dest.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/placeholder.jpg';
                    }}
                  />
                  <span style={{
                    position: 'absolute',
                    top: '15px',
                    right: '15px',
                    background: '#00C3A5',
                    color: 'white',
                    padding: '4px 10px',
                    borderRadius: '4px',
                    fontSize: '0.8rem',
                    fontWeight: '500'
                  }}>
                    Featured
                  </span>
                </div>
                <div style={{ padding: '20px' }}>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: '600', color: '#0B1E33', marginBottom: '8px' }}>
                    {dest.title}
                  </h3>
                  <div style={{ display: 'flex', gap: '15px', fontSize: '0.9rem', color: '#64748B' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <FaClock size={12} /> {dest.duration || 'Flexible'}
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <FaStar size={12} style={{ color: '#FBBF24' }} /> {dest.rating || '4.8'}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tabs */}
      {!searchTerm && (
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto 30px',
          padding: '0 20px',
          display: 'flex',
          justifyContent: 'center',
          gap: '10px',
          flexWrap: 'wrap'
        }}>
          {['all', 'popular', 'hidden', 'upcoming'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                padding: '8px 20px',
                borderRadius: '30px',
                border: activeTab === tab ? '2px solid #00C3A5' : '1px solid #E2E8F0',
                background: activeTab === tab ? '#F0FDF9' : 'white',
                color: activeTab === tab ? '#00C3A5' : '#64748B',
                fontSize: '0.9rem',
                fontWeight: activeTab === tab ? '600' : '400',
                cursor: 'pointer',
                textTransform: 'capitalize'
              }}
            >
              {tab === 'all' ? 'All Destinations' : 
               tab === 'popular' ? 'Most Popular' :
               tab === 'hidden' ? 'Hidden Gems' : 'Upcoming Tours'}
            </button>
          ))}
        </div>
      )}

      {/* Main Content */}
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto 40px',
        padding: '0 20px'
      }}>
        <div style={{
          background: 'white',
          borderRadius: '12px',
          border: '1px solid #E2E8F0',
          padding: '25px',
          position: 'relative'
        }}>
          {/* Navigation Arrows */}
          {totalCards > cardsToShow && (
            <>
              <button
                onClick={handlePrev}
                disabled={startIndex === 0}
                style={{
                  position: 'absolute',
                  left: '-15px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  border: '1px solid #E2E8F0',
                  background: startIndex === 0 ? '#F1F5F9' : 'white',
                  color: startIndex === 0 ? '#CBD5E1' : '#64748B',
                  cursor: startIndex === 0 ? 'not-allowed' : 'pointer',
                  zIndex: 10,
                  display: windowWidth < 768 ? 'none' : 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <FaChevronLeft size={16} />
              </button>
              <button
                onClick={handleNext}
                disabled={startIndex + cardsToShow >= totalCards}
                style={{
                  position: 'absolute',
                  right: '-15px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  border: '1px solid #E2E8F0',
                  background: startIndex + cardsToShow >= totalCards ? '#F1F5F9' : 'white',
                  color: startIndex + cardsToShow >= totalCards ? '#CBD5E1' : '#64748B',
                  cursor: startIndex + cardsToShow >= totalCards ? 'not-allowed' : 'pointer',
                  zIndex: 10,
                  display: windowWidth < 768 ? 'none' : 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <FaChevronRight size={16} />
              </button>
            </>
          )}

          {/* First Row */}
          {visibleCards1.length > 0 && (
            <div style={{
              display: 'grid',
              gridTemplateColumns: cardsToShow === 1 ? '1fr' : cardsToShow === 2 ? 'repeat(2,1fr)' : 'repeat(3,1fr)',
              gap: '20px',
              marginBottom: '20px'
            }}>
              {visibleCards1.map((item, index) => (
                <div
                  key={`row1-${item._id || index}`}
                  style={{
                    background: 'white',
                    borderRadius: '8px',
                    border: '1px solid #E2E8F0',
                    overflow: 'hidden',
                    cursor: isAdmin ? 'default' : 'pointer'
                  }}
                  onClick={() => !isAdmin && openCountryModal(item)}
                >
                  {/* Admin Controls */}
                  {isAdmin && (
                    <div style={{
                      position: 'absolute',
                      top: '10px',
                      right: '10px',
                      display: 'flex',
                      gap: '5px',
                      zIndex: 10
                    }}>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          openEditModal(item, 'row1');
                        }}
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
                        <FaEdit size={12} />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDelete(item._id, 'row1');
                        }}
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

                  <div style={{ height: '160px', background: '#F1F5F9' }}>
                    <img
                      src={getImageUrl(item.images)}
                      alt={item.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = '/placeholder.jpg';
                      }}
                    />
                  </div>

                  <div style={{ padding: '15px' }}>
                    <h3 style={{ fontSize: '1rem', fontWeight: '600', color: '#0B1E33', marginBottom: '8px' }}>
                      {item.title}
                    </h3>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.85rem', color: '#64748B', marginBottom: '10px' }}>
                      <FaMapMarkerAlt size={10} /> {item.location || 'Multiple locations'}
                    </div>
                    {item.price && (
                      <div style={{ fontSize: '1rem', fontWeight: '600', color: '#00C3A5' }}>
                        ${item.price}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Second Row */}
          {visibleCards2.length > 0 && (
            <div style={{
              display: 'grid',
              gridTemplateColumns: cardsToShow === 1 ? '1fr' : cardsToShow === 2 ? 'repeat(2,1fr)' : 'repeat(3,1fr)',
              gap: '20px'
            }}>
              {visibleCards2.map((item, index) => (
                <div
                  key={`row2-${item._id || index}`}
                  style={{
                    background: 'white',
                    borderRadius: '8px',
                    border: '1px solid #E2E8F0',
                    overflow: 'hidden',
                    cursor: isAdmin ? 'default' : 'pointer'
                  }}
                  onClick={() => !isAdmin && openCountryModal(item)}
                >
                  {/* Admin Controls */}
                  {isAdmin && (
                    <div style={{
                      position: 'absolute',
                      top: '10px',
                      right: '10px',
                      display: 'flex',
                      gap: '5px',
                      zIndex: 10
                    }}>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          openEditModal(item, 'row2');
                        }}
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
                        <FaEdit size={12} />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDelete(item._id, 'row2');
                        }}
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

                  <div style={{ height: '160px', background: '#F1F5F9' }}>
                    <img
                      src={getImageUrl(item.images)}
                      alt={item.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = '/placeholder.jpg';
                      }}
                    />
                  </div>

                  <div style={{ padding: '15px' }}>
                    <h3 style={{ fontSize: '1rem', fontWeight: '600', color: '#0B1E33', marginBottom: '8px' }}>
                      {item.title}
                    </h3>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.85rem', color: '#64748B', marginBottom: '10px' }}>
                      <FaMapMarkerAlt size={10} /> {item.location || 'Multiple locations'}
                    </div>
                    {item.price && (
                      <div style={{ fontSize: '1rem', fontWeight: '600', color: '#00C3A5' }}>
                        ${item.price}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Progress Bar */}
          {totalCards > 0 && (
            <div style={{ marginTop: '25px' }}>
              <div style={{
                height: '4px',
                background: '#E2E8F0',
                borderRadius: '2px',
                overflow: 'hidden',
                marginBottom: '8px'
              }}>
                <div style={{
                  width: `${progressPercent}%`,
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
          )}

          {/* Mobile Navigation */}
          {windowWidth < 768 && (
            <div style={{
              display: 'flex',
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
          )}
        </div>
      </div>

      {/* Newsletter */}
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto 50px',
        padding: '0 20px'
      }}>
        <div style={{
          background: '#0B1E33',
          borderRadius: '12px',
          padding: windowWidth < 768 ? '40px 20px' : '60px 40px',
          textAlign: 'center'
        }}>
          <h2 style={{
            fontSize: windowWidth < 768 ? '1.5rem' : '2rem',
            fontWeight: '600',
            color: 'white',
            marginBottom: '15px'
          }}>
            Get Travel Inspiration
          </h2>
          <p style={{
            color: '#94A3B8',
            marginBottom: '25px',
            fontSize: '1rem'
          }}>
            Subscribe to our newsletter and get exclusive deals and travel tips
          </p>
          <div style={{
            display: 'flex',
            gap: '10px',
            maxWidth: '500px',
            margin: '0 auto',
            flexDirection: windowWidth < 768 ? 'column' : 'row'
          }}>
            <input
              type="email"
              placeholder="Your email address"
              style={{
                flex: 1,
                padding: '12px 16px',
                borderRadius: '6px',
                border: 'none',
                fontSize: '0.95rem'
              }}
            />
            <button style={{
              padding: '12px 30px',
              borderRadius: '6px',
              border: 'none',
              background: '#00C3A5',
              color: 'white',
              fontWeight: '500',
              cursor: 'pointer'
            }}>
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Add Modal */}
      {showAddModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0,0,0,0.7)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          padding: '20px'
        }} onClick={() => setShowAddModal(false)}>
          <div style={{
            background: 'white',
            borderRadius: '12px',
            maxWidth: '600px',
            width: '100%',
            maxHeight: '90vh',
            overflow: 'auto',
            position: 'relative'
          }} onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setShowAddModal(false)}
              style={{
                position: 'absolute',
                top: '15px',
                right: '15px',
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                border: '1px solid #E2E8F0',
                background: 'white',
                cursor: 'pointer',
                fontSize: '18px',
                zIndex: 10
              }}
            >
              ×
            </button>
            
            <div style={{ padding: '30px' }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#0B1E33', marginBottom: '20px' }}>
                Add New Destination
              </h2>
              
              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500', color: '#0B1E33' }}>
                  Title *
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '6px',
                    border: '1px solid #E2E8F0',
                    fontSize: '0.95rem'
                  }}
                  placeholder="Enter destination title"
                />
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500', color: '#0B1E33' }}>
                  Description
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '6px',
                    border: '1px solid #E2E8F0',
                    fontSize: '0.95rem',
                    minHeight: '80px'
                  }}
                  placeholder="Enter destination description"
                />
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500', color: '#0B1E33' }}>
                  Location
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '6px',
                    border: '1px solid #E2E8F0',
                    fontSize: '0.95rem'
                  }}
                  placeholder="Enter location"
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '20px' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500', color: '#0B1E33' }}>
                    Price ($)
                  </label>
                  <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleInputChange}
                    style={{
                      width: '100%',
                      padding: '10px',
                      borderRadius: '6px',
                      border: '1px solid #E2E8F0',
                      fontSize: '0.95rem'
                    }}
                    placeholder="Price"
                  />
                </div>

                <div>
                  <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500', color: '#0B1E33' }}>
                    Duration
                  </label>
                  <input
                    type="text"
                    name="duration"
                    value={formData.duration}
                    onChange={handleInputChange}
                    style={{
                      width: '100%',
                      padding: '10px',
                      borderRadius: '6px',
                      border: '1px solid #E2E8F0',
                      fontSize: '0.95rem'
                    }}
                    placeholder="e.g., 7 days"
                  />
                </div>
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500', color: '#0B1E33' }}>
                  Rating (1-5)
                </label>
                <input
                  type="number"
                  name="rating"
                  value={formData.rating}
                  onChange={handleInputChange}
                  min="1"
                  max="5"
                  step="0.1"
                  style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '6px',
                    border: '1px solid #E2E8F0',
                    fontSize: '0.95rem'
                  }}
                />
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500', color: '#0B1E33' }}>
                  Image
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileSelect}
                  style={{
                    width: '100%',
                    padding: '8px',
                    borderRadius: '6px',
                    border: '1px dashed #E2E8F0',
                    background: '#F8FAFC'
                  }}
                />
                {formData.preview && (
                  <img
                    src={formData.preview}
                    alt="Preview"
                    style={{
                      width: '100%',
                      maxHeight: '150px',
                      objectFit: 'cover',
                      borderRadius: '6px',
                      marginTop: '10px'
                    }}
                  />
                )}
                {uploadProgress > 0 && uploadProgress < 100 && (
                  <div style={{
                    width: '100%',
                    height: '4px',
                    background: '#E2E8F0',
                    borderRadius: '2px',
                    marginTop: '10px',
                    overflow: 'hidden'
                  }}>
                    <div style={{
                      width: `${uploadProgress}%`,
                      height: '100%',
                      background: '#00C3A5'
                    }} />
                  </div>
                )}
              </div>

              <div style={{ display: 'flex', gap: '15px' }}>
                <button
                  onClick={() => {
                    setShowAddModal(false);
                    resetForm();
                  }}
                  style={{
                    flex: 1,
                    padding: '12px',
                    borderRadius: '6px',
                    border: '1px solid #E2E8F0',
                    background: 'white',
                    color: '#64748B',
                    fontSize: '0.95rem',
                    fontWeight: '500',
                    cursor: 'pointer'
                  }}
                >
                  Cancel
                </button>
                <button
                  onClick={() => handleAdd('row1')}
                  disabled={!formData.title}
                  style={{
                    flex: 1,
                    padding: '12px',
                    borderRadius: '6px',
                    border: 'none',
                    background: !formData.title ? '#CBD5E1' : '#00C3A5',
                    color: 'white',
                    fontSize: '0.95rem',
                    fontWeight: '500',
                    cursor: !formData.title ? 'not-allowed' : 'pointer'
                  }}
                >
                  Add Destination
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Edit Modal */}
      {showEditModal && editingItem && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0,0,0,0.7)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          padding: '20px'
        }} onClick={() => setShowEditModal(false)}>
          <div style={{
            background: 'white',
            borderRadius: '12px',
            maxWidth: '600px',
            width: '100%',
            maxHeight: '90vh',
            overflow: 'auto',
            position: 'relative'
          }} onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setShowEditModal(false)}
              style={{
                position: 'absolute',
                top: '15px',
                right: '15px',
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                border: '1px solid #E2E8F0',
                background: 'white',
                cursor: 'pointer',
                fontSize: '18px',
                zIndex: 10
              }}
            >
              ×
            </button>
            
            <div style={{ padding: '30px' }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#0B1E33', marginBottom: '20px' }}>
                Edit Destination
              </h2>
              
              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500', color: '#0B1E33' }}>
                  Title *
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '6px',
                    border: '1px solid #E2E8F0',
                    fontSize: '0.95rem'
                  }}
                />
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500', color: '#0B1E33' }}>
                  Description
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '6px',
                    border: '1px solid #E2E8F0',
                    fontSize: '0.95rem',
                    minHeight: '80px'
                  }}
                />
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500', color: '#0B1E33' }}>
                  Location
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '6px',
                    border: '1px solid #E2E8F0',
                    fontSize: '0.95rem'
                  }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '20px' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500', color: '#0B1E33' }}>
                    Price ($)
                  </label>
                  <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleInputChange}
                    style={{
                      width: '100%',
                      padding: '10px',
                      borderRadius: '6px',
                      border: '1px solid #E2E8F0',
                      fontSize: '0.95rem'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500', color: '#0B1E33' }}>
                    Duration
                  </label>
                  <input
                    type="text"
                    name="duration"
                    value={formData.duration}
                    onChange={handleInputChange}
                    style={{
                      width: '100%',
                      padding: '10px',
                      borderRadius: '6px',
                      border: '1px solid #E2E8F0',
                      fontSize: '0.95rem'
                    }}
                  />
                </div>
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500', color: '#0B1E33' }}>
                  Rating (1-5)
                </label>
                <input
                  type="number"
                  name="rating"
                  value={formData.rating}
                  onChange={handleInputChange}
                  min="1"
                  max="5"
                  step="0.1"
                  style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '6px',
                    border: '1px solid #E2E8F0',
                    fontSize: '0.95rem'
                  }}
                />
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500', color: '#0B1E33' }}>
                  Image
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileSelect}
                  style={{
                    width: '100%',
                    padding: '8px',
                    borderRadius: '6px',
                    border: '1px dashed #E2E8F0',
                    background: '#F8FAFC'
                  }}
                />
                {(formData.preview || formData.images) && (
                  <img
                    src={formData.preview || getImageUrl(formData.images)}
                    alt="Preview"
                    style={{
                      width: '100%',
                      maxHeight: '150px',
                      objectFit: 'cover',
                      borderRadius: '6px',
                      marginTop: '10px'
                    }}
                  />
                )}
                {uploadProgress > 0 && uploadProgress < 100 && (
                  <div style={{
                    width: '100%',
                    height: '4px',
                    background: '#E2E8F0',
                    borderRadius: '2px',
                    marginTop: '10px',
                    overflow: 'hidden'
                  }}>
                    <div style={{
                      width: `${uploadProgress}%`,
                      height: '100%',
                      background: '#00C3A5'
                    }} />
                  </div>
                )}
              </div>

              <div style={{ display: 'flex', gap: '15px' }}>
                <button
                  onClick={() => {
                    setShowEditModal(false);
                    setEditingItem(null);
                    resetForm();
                  }}
                  style={{
                    flex: 1,
                    padding: '12px',
                    borderRadius: '6px',
                    border: '1px solid #E2E8F0',
                    background: 'white',
                    color: '#64748B',
                    fontSize: '0.95rem',
                    fontWeight: '500',
                    cursor: 'pointer'
                  }}
                >
                  Cancel
                </button>
                <button
                  onClick={handleUpdate}
                  disabled={!formData.title}
                  style={{
                    flex: 1,
                    padding: '12px',
                    borderRadius: '6px',
                    border: 'none',
                    background: !formData.title ? '#CBD5E1' : '#00C3A5',
                    color: 'white',
                    fontSize: '0.95rem',
                    fontWeight: '500',
                    cursor: !formData.title ? 'not-allowed' : 'pointer'
                  }}
                >
                  Update Destination
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Detail Modal */}
      {selectedCountry && !isAdmin && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0,0,0,0.7)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          padding: '20px'
        }} onClick={closeCountryModal}>
          <div style={{
            background: 'white',
            borderRadius: '12px',
            maxWidth: '800px',
            width: '100%',
            maxHeight: '90vh',
            overflow: 'auto',
            position: 'relative'
          }} onClick={(e) => e.stopPropagation()}>
            <button
              onClick={closeCountryModal}
              style={{
                position: 'absolute',
                top: '15px',
                right: '15px',
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                border: '1px solid #E2E8F0',
                background: 'white',
                cursor: 'pointer',
                fontSize: '18px',
                zIndex: 10
              }}
            >
              ×
            </button>
            <img
              src={getImageUrl(selectedCountry.images)}
              alt={selectedCountry.title}
              style={{
                width: '100%',
                height: '300px',
                objectFit: 'cover',
                backgroundColor: '#F1F5F9'
              }}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = '/placeholder.jpg';
              }}
            />
            <div style={{ padding: '30px' }}>
              <h2 style={{ fontSize: '1.8rem', fontWeight: '600', color: '#0B1E33', marginBottom: '15px' }}>
                {selectedCountry.title}
              </h2>
              <p style={{ color: '#64748B', lineHeight: '1.6', marginBottom: '20px' }}>
                {selectedCountry.description || `Experience the beauty and culture of ${selectedCountry.title}. 
                From stunning landscapes to rich cultural heritage, this destination offers 
                unforgettable experiences for every traveler.`}
              </p>
              
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '15px',
                marginBottom: '25px'
              }}>
                {selectedCountry.price && (
                  <div style={{
                    padding: '15px',
                    background: '#F8FAFC',
                    borderRadius: '8px',
                    textAlign: 'center'
                  }}>
                    <div style={{ fontSize: '0.9rem', color: '#64748B', marginBottom: '5px' }}>Price</div>
                    <div style={{ fontSize: '1.3rem', fontWeight: '600', color: '#00C3A5' }}>
                      ${selectedCountry.price}
                    </div>
                  </div>
                )}
                {selectedCountry.duration && (
                  <div style={{
                    padding: '15px',
                    background: '#F8FAFC',
                    borderRadius: '8px',
                    textAlign: 'center'
                  }}>
                    <div style={{ fontSize: '0.9rem', color: '#64748B', marginBottom: '5px' }}>Duration</div>
                    <div style={{ fontSize: '1.1rem', fontWeight: '500', color: '#0B1E33' }}>
                      {selectedCountry.duration}
                    </div>
                  </div>
                )}
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '15px',
                marginBottom: '30px'
              }}>
                {['Flights', 'Hotels', 'Activities'].map((item, index) => (
                  <div key={index} style={{
                    padding: '15px',
                    background: '#F8FAFC',
                    borderRadius: '8px',
                    textAlign: 'center',
                    fontSize: '0.9rem',
                    color: '#64748B'
                  }}>
                    {item === 'Flights' && <FaPlane style={{ marginBottom: '5px', color: '#00C3A5' }} />}
                    {item === 'Hotels' && <FaHotel style={{ marginBottom: '5px', color: '#00C3A5' }} />}
                    {item === 'Activities' && <FaUmbrellaBeach style={{ marginBottom: '5px', color: '#00C3A5' }} />}
                    <div>{item}</div>
                  </div>
                ))}
              </div>

              <button style={{
                width: '100%',
                padding: '15px',
                background: '#00C3A5',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontSize: '1rem',
                fontWeight: '500',
                cursor: 'pointer'
              }}>
                Book Your Adventure
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default React.memo(International);