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
    title: '', images: '', description: '', location: '', price: '', duration: '', rating: '4.5'
  });
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredDestinations, setFilteredDestinations] = useState([]);

  const imageCache = useRef(new Map());
  const initialFetchDone = useRef(false);

  const getImageUrl = useCallback((imagePath) => {
    if (!imagePath) return '/placeholder.jpg';
    if (imageCache.current.has(imagePath)) return imageCache.current.get(imagePath);
    const url = imagePath.startsWith('http') ? imagePath : `${BASE}/${imagePath.replace(/^\/+/, '')}`;
    imageCache.current.set(imagePath, url);
    return url;
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setWindowWidth(width);
      setCardsToShow(width < 640 ? 1 : width < 1024 ? 2 : 3);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    async function fetchPackages() {
      if (initialFetchDone.current) return;
      try {
        const [res1, res2] = await Promise.all([
          api.get('/International-tours/getallInternational', { signal: controller.signal }),
          api.get('/International-tours/getallInternational2', { signal: controller.signal }),
        ]);
        setInternational1(res1.data || []);
        setInternational2(res2.data || []);
        initialFetchDone.current = true;
      } catch (err) {
        if (err.name !== 'AbortError') console.error('Error fetching Data:', err);
      } finally {
        setLoading(false);
      }
    }
    fetchPackages();
    return () => controller.abort();
  }, []);

  useEffect(() => {
    const all = [...international1, ...international2];
    setFilteredDestinations(
      all.filter(d =>
        d.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        d.location?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        d.description?.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, international1, international2]);

  const handlePrev = useCallback(() => {
    if (startIndex > 0) setStartIndex(prev => Math.max(0, prev - cardsToShow));
  }, [startIndex, cardsToShow]);

  const handleNext = useCallback(() => {
    const total = Math.max(international1.length, international2.length);
    if (startIndex + cardsToShow < total) setStartIndex(prev => prev + cardsToShow);
  }, [startIndex, cardsToShow, international1.length, international2.length]);

  const openCountryModal = useCallback((country) => setSelectedCountry(country), []);
  const closeCountryModal = useCallback(() => setSelectedCountry(null), []);

  const handleFileSelect = useCallback((e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => setFormData(prev => ({ ...prev, preview: reader.result }));
      reader.readAsDataURL(file);
    }
  }, []);

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }, []);

  const resetForm = useCallback(() => {
    setFormData({ title: '', images: '', description: '', location: '', price: '', duration: '', rating: '4.5' });
    setSelectedFile(null);
    setUploadProgress(0);
  }, []);

  const handleAdd = useCallback(async (row) => {
    try {
      const fd = new FormData();
      Object.entries({ title: formData.title, description: formData.description || '', location: formData.location || '', price: formData.price || '', duration: formData.duration || '', rating: formData.rating || '4.5' }).forEach(([k, v]) => fd.append(k, v));
      if (selectedFile) fd.append('image', selectedFile);
      const endpoint = row === 'row1' ? '/International-tours/addInternational' : '/International-tours/addInternational2';
      const res = await api.post(endpoint, fd, {
        headers: { 'Content-Type': 'multipart/form-data' },
        onUploadProgress: (e) => setUploadProgress(Math.round((e.loaded * 100) / e.total)),
      });
      if (res.data.success) {
        if (row === 'row1') setInternational1(prev => [...prev, res.data.data]);
        else setInternational2(prev => [...prev, res.data.data]);
        setShowAddModal(false);
        resetForm();
      }
    } catch (err) { console.error('Error adding:', err); }
  }, [formData, selectedFile, resetForm]);

  const handleUpdate = useCallback(async () => {
    if (!editingItem) return;
    try {
      const fd = new FormData();
      Object.entries({ title: formData.title, description: formData.description, location: formData.location, price: formData.price, duration: formData.duration, rating: formData.rating }).forEach(([k, v]) => fd.append(k, v));
      if (selectedFile) fd.append('image', selectedFile);
      const endpoint = editRow === 'row1'
        ? `/International-tours/updateInternational/${editingItem._id}`
        : `/International-tours/updateInternational2/${editingItem._id}`;
      const res = await api.put(endpoint, fd, {
        headers: { 'Content-Type': 'multipart/form-data' },
        onUploadProgress: (e) => setUploadProgress(Math.round((e.loaded * 100) / e.total)),
      });
      if (res.data.success) {
        if (editRow === 'row1') setInternational1(prev => prev.map(i => i._id === editingItem._id ? res.data.data : i));
        else setInternational2(prev => prev.map(i => i._id === editingItem._id ? res.data.data : i));
        setShowEditModal(false); setEditingItem(null); resetForm();
      }
    } catch (err) { console.error('Error updating:', err); }
  }, [editingItem, editRow, formData, selectedFile, resetForm]);

  const handleDelete = useCallback(async (id, row) => {
    if (!window.confirm('Are you sure you want to delete this destination?')) return;
    try {
      const endpoint = row === 'row1' ? `/International-tours/deleteInternational/${id}` : `/International-tours/deleteInternational2/${id}`;
      const res = await api.delete(endpoint);
      if (res.data.success) {
        if (row === 'row1') setInternational1(prev => prev.filter(i => i._id !== id));
        else setInternational2(prev => prev.filter(i => i._id !== id));
      }
    } catch (err) { console.error('Error deleting:', err); }
  }, []);

  const openEditModal = useCallback((item, row) => {
    setEditingItem(item); setEditRow(row);
    setFormData({ title: item.title || '', images: item.images || '', description: item.description || '', location: item.location || '', price: item.price || '', duration: item.duration || '', rating: item.rating || '4.5' });
    setSelectedFile(null); setShowEditModal(true);
  }, []);

  const totalCards = useMemo(() => Math.max(international1.length, international2.length), [international1.length, international2.length]);
  const progressPercent = useMemo(() => totalCards > 0 ? ((startIndex + cardsToShow) / totalCards) * 100 : 0, [totalCards, startIndex, cardsToShow]);
  const visibleCards1 = useMemo(() => international1.slice(startIndex, startIndex + cardsToShow), [international1, startIndex, cardsToShow]);
  const visibleCards2 = useMemo(() => international2.slice(startIndex, startIndex + cardsToShow), [international2, startIndex, cardsToShow]);
  const featuredDestinations = useMemo(() => [...international1, ...international2].slice(0, 3), [international1, international2]);

  // ── Shared modal form fields ─────────────────────────────────
  const ModalFormFields = () => (
    <>
      {[['title','Title *','text'],['description','Description','textarea'],['location','Location','text']].map(([name, label, type]) => (
        <div key={name} style={{ marginBottom: 18 }}>
          <label style={{ display: 'block', fontFamily: 'Outfit', fontSize: '0.82rem', fontWeight: 600, color: '#374151', marginBottom: 6 }}>{label}</label>
          {type === 'textarea'
            ? <textarea name={name} value={formData[name]} onChange={handleInputChange} style={{ width: '100%', padding: '11px 14px', borderRadius: 12, border: '1.5px solid #E5E7EB', fontFamily: 'Outfit', fontSize: '0.9rem', outline: 'none', minHeight: 80, resize: 'vertical', boxSizing: 'border-box' }} />
            : <input type={type} name={name} value={formData[name]} onChange={handleInputChange} style={{ width: '100%', padding: '11px 14px', borderRadius: 12, border: '1.5px solid #E5E7EB', fontFamily: 'Outfit', fontSize: '0.9rem', outline: 'none', boxSizing: 'border-box' }} />
          }
        </div>
      ))}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 18 }}>
        {[['price','Price ($)','number'],['duration','Duration','text']].map(([name, label, type]) => (
          <div key={name}>
            <label style={{ display: 'block', fontFamily: 'Outfit', fontSize: '0.82rem', fontWeight: 600, color: '#374151', marginBottom: 6 }}>{label}</label>
            <input type={type} name={name} value={formData[name]} onChange={handleInputChange} style={{ width: '100%', padding: '11px 14px', borderRadius: 12, border: '1.5px solid #E5E7EB', fontFamily: 'Outfit', fontSize: '0.9rem', outline: 'none', boxSizing: 'border-box' }} />
          </div>
        ))}
      </div>
      <div style={{ marginBottom: 18 }}>
        <label style={{ display: 'block', fontFamily: 'Outfit', fontSize: '0.82rem', fontWeight: 600, color: '#374151', marginBottom: 6 }}>Rating (1-5)</label>
        <input type="number" name="rating" value={formData.rating} onChange={handleInputChange} min="1" max="5" step="0.1" style={{ width: '100%', padding: '11px 14px', borderRadius: 12, border: '1.5px solid #E5E7EB', fontFamily: 'Outfit', fontSize: '0.9rem', outline: 'none', boxSizing: 'border-box' }} />
      </div>
      <div style={{ marginBottom: 24 }}>
        <label style={{ display: 'block', fontFamily: 'Outfit', fontSize: '0.82rem', fontWeight: 600, color: '#374151', marginBottom: 6 }}>Image</label>
        <input type="file" accept="image/*" onChange={handleFileSelect} style={{ width: '100%', padding: 10, borderRadius: 12, border: '1.5px dashed #E5E7EB', fontFamily: 'Outfit', boxSizing: 'border-box' }} />
        {(formData.preview || formData.images) && (
          <img src={formData.preview || getImageUrl(formData.images)} alt="Preview" style={{ width: '100%', maxHeight: 150, objectFit: 'cover', borderRadius: 12, marginTop: 10 }} />
        )}
        {uploadProgress > 0 && uploadProgress < 100 && (
          <div style={{ height: 4, background: '#E5E7EB', borderRadius: 2, marginTop: 10, overflow: 'hidden' }}>
            <div style={{ width: `${uploadProgress}%`, height: '100%', background: 'linear-gradient(90deg, var(--saffron), var(--saffron-dark))', transition: 'width 0.3s' }} />
          </div>
        )}
      </div>
    </>
  );

  // ── Loading skeleton ─────────────────────────────────────────
  if (loading) return (
    <section id="international" style={{ background: 'white', paddingBottom: 80 }}>
      <div style={{ maxWidth: 1400, margin: '0 auto', padding: '60px 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(300px,1fr))', gap: 24 }}>
          {[1,2,3,4,5,6].map(i => (
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
    <section id="international" style={{ background: 'white', paddingBottom: 80 }}>
      <div style={{ maxWidth: 1400, margin: '0 auto', padding: '80px 24px 0' }}>

        {/* ── Section Header ───────────────────────────────────── */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48, flexWrap: 'wrap', gap: 20 }}>
          <div>
            <div className="section-eyebrow" style={{ marginBottom: 10 }}>International Tours</div>
            <h2 className="section-title">
              Explore the <em style={{ color: 'var(--saffron)' }}>World</em><br />Beyond Borders
            </h2>
          </div>
          <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
            {/* Search */}
            <div style={{ position: 'relative' }}>
              <FaSearch style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: '#9CA3AF', fontSize: '0.85rem' }} />
              <input
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                placeholder="Search countries..."
                style={{ padding: '10px 16px 10px 38px', borderRadius: 50, border: '1.5px solid #E5E7EB', fontFamily: 'Outfit', fontSize: '0.85rem', outline: 'none', width: 220 }}
              />
              {searchTerm && (
                <span style={{ position: 'absolute', right: 14, top: '50%', transform: 'translateY(-50%)', fontFamily: 'Outfit', fontSize: '0.75rem', color: '#9CA3AF' }}>
                  {filteredDestinations.length} results
                </span>
              )}
            </div>
            {/* Admin add button */}
            {isAdmin && (
              <button
                onClick={() => { resetForm(); setShowAddModal(true); }}
                className="btn-primary"
                style={{ padding: '10px 20px', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: 6 }}
              >
                <FaPlus size={11} /> Add Destination
              </button>
            )}
          </div>
        </div>

        {/* ── Featured Destinations ────────────────────────────── */}
        {!searchTerm && featuredDestinations.length > 0 && (
          <div style={{ marginBottom: 60 }}>
            <div style={{ fontFamily: 'Outfit', fontSize: '0.8rem', fontWeight: 600, color: '#6B7280', letterSpacing: 1, textTransform: 'uppercase', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 8 }}>
              <FaAward style={{ color: 'var(--saffron)' }} /> Featured Destinations
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: windowWidth < 768 ? '1fr' : 'repeat(3,1fr)', gap: 24 }}>
              {featuredDestinations.map((dest, i) => (
                <div key={dest._id || i} className="dest-card" onClick={() => !isAdmin && openCountryModal(dest)} style={{ position: 'relative' }}>
                  <div className="dest-card-img" style={{ height: 220, background: '#F3F4F6' }}>
                    <img
                      src={getImageUrl(dest.images)}
                      alt={dest.title}
                      loading="lazy"
                      decoding="async"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      onError={e => { e.target.onerror = null; e.target.src = '/placeholder.jpg'; }}
                    />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 55%)' }} />
                    <span style={{ position: 'absolute', top: 14, right: 14, background: 'var(--saffron)', color: 'white', fontFamily: 'Outfit', fontSize: '0.7rem', fontWeight: 700, padding: '4px 10px', borderRadius: 6, letterSpacing: 1, textTransform: 'uppercase' }}>Featured</span>

                    {isAdmin && (
                      <div style={{ position: 'absolute', top: 14, left: 14, display: 'flex', gap: 6 }}>
                        <button onClick={e => { e.stopPropagation(); openEditModal(dest, 'row1'); }} style={{ width: 30, height: 30, borderRadius: 8, background: '#F59E0B', border: 'none', color: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><FaEdit size={11} /></button>
                        <button onClick={e => { e.stopPropagation(); handleDelete(dest._id, 'row1'); }} style={{ width: 30, height: 30, borderRadius: 8, background: '#EF4444', border: 'none', color: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><FaTrash size={11} /></button>
                      </div>
                    )}

                    <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '14px 16px' }}>
                      <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.2rem', fontWeight: 700, color: 'white' }}>{dest.title}</div>
                      <div style={{ display: 'flex', gap: 12, fontSize: '0.75rem', color: 'rgba(255,255,255,0.7)', fontFamily: 'Outfit', marginTop: 3 }}>
                        <span><FaClock style={{ marginRight: 3 }} />{dest.duration || 'Flexible'}</span>
                        <span><FaStar style={{ marginRight: 3, color: '#F59E0B' }} />{dest.rating || '4.8'}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── Tab Pills ────────────────────────────────────────── */}
        {!searchTerm && (
          <div style={{ display: 'flex', gap: 8, marginBottom: 32, overflowX: 'auto', paddingBottom: 4 }}>
            {[
              { id: 'all', label: 'All Destinations' },
              { id: 'popular', label: 'Most Popular' },
              { id: 'hidden', label: 'Hidden Gems' },
              { id: 'upcoming', label: 'Upcoming Tours' },
            ].map(t => (
              <button
                key={t.id}
                className={`filter-pill ${activeTab === t.id ? 'active' : ''}`}
                onClick={() => setActiveTab(t.id)}
              >
                {t.label}
              </button>
            ))}
          </div>
        )}

        {/* ── Cards Container ──────────────────────────────────── */}
        <div style={{ background: '#F9FAFB', borderRadius: 24, padding: 28, position: 'relative' }}>

          {/* Nav arrows (desktop) */}
          {totalCards > cardsToShow && windowWidth >= 768 && (
            <>
              <button onClick={handlePrev} disabled={startIndex === 0} style={{ position: 'absolute', left: -18, top: '50%', transform: 'translateY(-50%)', width: 36, height: 36, borderRadius: '50%', border: '1.5px solid #E5E7EB', background: startIndex === 0 ? '#F9FAFB' : 'white', color: startIndex === 0 ? '#D1D5DB' : 'var(--ink)', cursor: startIndex === 0 ? 'not-allowed' : 'pointer', zIndex: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <FaChevronLeft size={13} />
              </button>
              <button onClick={handleNext} disabled={startIndex + cardsToShow >= totalCards} style={{ position: 'absolute', right: -18, top: '50%', transform: 'translateY(-50%)', width: 36, height: 36, borderRadius: '50%', border: '1.5px solid #E5E7EB', background: startIndex + cardsToShow >= totalCards ? '#F9FAFB' : 'white', color: startIndex + cardsToShow >= totalCards ? '#D1D5DB' : 'var(--ink)', cursor: startIndex + cardsToShow >= totalCards ? 'not-allowed' : 'pointer', zIndex: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <FaChevronRight size={13} />
              </button>
            </>
          )}

          {/* Count + inline nav */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
            <div style={{ fontFamily: 'Outfit', fontSize: '0.85rem', color: '#6B7280' }}>
              <strong style={{ color: 'var(--ink)' }}>{totalCards}</strong> destinations worldwide
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

          {/* Row 1 — getallInternational */}
          {visibleCards1.length > 0 && (
            <div style={{ display: 'grid', gridTemplateColumns: `repeat(${cardsToShow},1fr)`, gap: 20, marginBottom: 20 }}>
              {visibleCards1.map((item, index) => (
                <div key={`r1-${item._id || index}`} className="dest-card" onClick={() => !isAdmin && openCountryModal(item)} style={{ position: 'relative' }}>
                  <div className="dest-card-img" style={{ height: 200, background: '#F3F4F6' }}>
                    <img
                      src={getImageUrl(item.images)}
                      alt={item.title}
                      loading="lazy"
                      decoding="async"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      onError={e => { e.target.onerror = null; e.target.src = '/placeholder.jpg'; }}
                    />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 55%)' }} />

                    {isAdmin && (
                      <div style={{ position: 'absolute', top: 10, left: 10, display: 'flex', gap: 6 }}>
                        <button onClick={e => { e.stopPropagation(); openEditModal(item, 'row1'); }} style={{ width: 30, height: 30, borderRadius: 8, background: '#F59E0B', border: 'none', color: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><FaEdit size={11} /></button>
                        <button onClick={e => { e.stopPropagation(); handleDelete(item._id, 'row1'); }} style={{ width: 30, height: 30, borderRadius: 8, background: '#EF4444', border: 'none', color: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><FaTrash size={11} /></button>
                      </div>
                    )}

                    <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '12px 16px' }}>
                      <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.15rem', fontWeight: 700, color: 'white', marginBottom: 2 }}>{item.title}</div>
                      <div style={{ display: 'flex', gap: 10, fontSize: '0.75rem', color: 'rgba(255,255,255,0.75)', fontFamily: 'Outfit' }}>
                        {item.location && <span><FaMapMarkerAlt style={{ marginRight: 3 }} />{item.location}</span>}
                        <span><FaStar style={{ marginRight: 3, color: '#F59E0B' }} />{item.rating || '4.8'}</span>
                        {item.duration && <span><FaClock style={{ marginRight: 3 }} />{item.duration}</span>}
                      </div>
                    </div>
                  </div>
                  <div style={{ padding: '16px 18px 18px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                      <div style={{ display: 'flex', gap: 10, fontSize: '0.77rem', color: '#6B7280', fontFamily: 'Outfit' }}>
                        <span><FaUsers style={{ marginRight: 3 }} />2-12</span>
                        <span><FaHotel style={{ marginRight: 3 }} />4★</span>
                      </div>
                      {item.price && (
                        <div>
                          <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.3rem', fontWeight: 700, color: 'var(--saffron)' }}>₹{item.price}</span>
                        </div>
                      )}
                    </div>
                    <button onClick={() => !isAdmin && openCountryModal(item)} className="btn-primary" style={{ width: '100%', padding: '10px', fontSize: '0.85rem', borderRadius: 12 }}>
                      Book Your Adventure →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Row 2 — getallInternational2 */}
          {visibleCards2.length > 0 && (
            <div style={{ display: 'grid', gridTemplateColumns: `repeat(${cardsToShow},1fr)`, gap: 20 }}>
              {visibleCards2.map((item, index) => (
                <div key={`r2-${item._id || index}`} className="dest-card" onClick={() => !isAdmin && openCountryModal(item)} style={{ position: 'relative' }}>
                  <div className="dest-card-img" style={{ height: 200, background: '#F3F4F6' }}>
                    <img
                      src={getImageUrl(item.images)}
                      alt={item.title}
                      loading="lazy"
                      decoding="async"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      onError={e => { e.target.onerror = null; e.target.src = '/placeholder.jpg'; }}
                    />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 55%)' }} />

                    {isAdmin && (
                      <div style={{ position: 'absolute', top: 10, left: 10, display: 'flex', gap: 6 }}>
                        <button onClick={e => { e.stopPropagation(); openEditModal(item, 'row2'); }} style={{ width: 30, height: 30, borderRadius: 8, background: '#F59E0B', border: 'none', color: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><FaEdit size={11} /></button>
                        <button onClick={e => { e.stopPropagation(); handleDelete(item._id, 'row2'); }} style={{ width: 30, height: 30, borderRadius: 8, background: '#EF4444', border: 'none', color: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><FaTrash size={11} /></button>
                      </div>
                    )}

                    <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '12px 16px' }}>
                      <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.15rem', fontWeight: 700, color: 'white', marginBottom: 2 }}>{item.title}</div>
                      <div style={{ display: 'flex', gap: 10, fontSize: '0.75rem', color: 'rgba(255,255,255,0.75)', fontFamily: 'Outfit' }}>
                        {item.location && <span><FaMapMarkerAlt style={{ marginRight: 3 }} />{item.location}</span>}
                        <span><FaStar style={{ marginRight: 3, color: '#F59E0B' }} />{item.rating || '4.7'}</span>
                        {item.duration && <span><FaClock style={{ marginRight: 3 }} />{item.duration}</span>}
                      </div>
                    </div>
                  </div>
                  <div style={{ padding: '16px 18px 18px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                      <div style={{ display: 'flex', gap: 10, fontSize: '0.77rem', color: '#6B7280', fontFamily: 'Outfit' }}>
                        <span><FaUsers style={{ marginRight: 3 }} />2-12</span>
                        <span><FaHotel style={{ marginRight: 3 }} />5★</span>
                      </div>
                      {item.price && (
                        <div>
                          <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.3rem', fontWeight: 700, color: 'var(--saffron)' }}>₹{item.price}</span>
                        </div>
                      )}
                    </div>
                    <button onClick={() => !isAdmin && openCountryModal(item)} className="btn-primary" style={{ width: '100%', padding: '10px', fontSize: '0.85rem', borderRadius: 12 }}>
                      Book Your Adventure →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Progress bar */}
          {totalCards > 0 && (
            <div style={{ marginTop: 24 }}>
              <div style={{ height: 4, background: '#E5E7EB', borderRadius: 2, overflow: 'hidden', marginBottom: 8 }}>
                <div style={{ width: `${Math.min(progressPercent, 100)}%`, height: '100%', background: 'linear-gradient(90deg, var(--saffron), var(--saffron-dark))', transition: 'width 0.4s ease' }} />
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

        {/* ── Newsletter ───────────────────────────────────────── */}
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

      {/* ── Add Modal ─────────────────────────────────────────── */}
      {showAddModal && (
        <div className="modal-backdrop" onClick={() => { setShowAddModal(false); resetForm(); }}>
          <div className="modal-box" onClick={e => e.stopPropagation()}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
              <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.8rem', fontWeight: 700, color: 'var(--ink)' }}>Add Destination</h2>
              <button onClick={() => { setShowAddModal(false); resetForm(); }} style={{ background: 'none', border: 'none', fontSize: '1.4rem', cursor: 'pointer', color: '#6B7280' }}>×</button>
            </div>
            <ModalFormFields />
            <div style={{ display: 'flex', gap: 12 }}>
              <button onClick={() => { setShowAddModal(false); resetForm(); }} style={{ flex: 1, padding: 13, borderRadius: 12, border: '1.5px solid #E5E7EB', background: 'white', fontFamily: 'Outfit', fontWeight: 600, cursor: 'pointer', fontSize: '0.9rem', color: '#374151' }}>Cancel</button>
              <button onClick={() => handleAdd('row1')} disabled={!formData.title} className="btn-primary" style={{ flex: 1, padding: 13, fontSize: '0.9rem', borderRadius: 12, opacity: !formData.title ? 0.5 : 1 }}>Add Destination</button>
            </div>
          </div>
        </div>
      )}

      {/* ── Edit Modal ────────────────────────────────────────── */}
      {showEditModal && editingItem && (
        <div className="modal-backdrop" onClick={() => { setShowEditModal(false); setEditingItem(null); resetForm(); }}>
          <div className="modal-box" onClick={e => e.stopPropagation()}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
              <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.8rem', fontWeight: 700, color: 'var(--ink)' }}>Edit Destination</h2>
              <button onClick={() => { setShowEditModal(false); setEditingItem(null); resetForm(); }} style={{ background: 'none', border: 'none', fontSize: '1.4rem', cursor: 'pointer', color: '#6B7280' }}>×</button>
            </div>
            <ModalFormFields />
            <div style={{ display: 'flex', gap: 12 }}>
              <button onClick={() => { setShowEditModal(false); setEditingItem(null); resetForm(); }} style={{ flex: 1, padding: 13, borderRadius: 12, border: '1.5px solid #E5E7EB', background: 'white', fontFamily: 'Outfit', fontWeight: 600, cursor: 'pointer', fontSize: '0.9rem', color: '#374151' }}>Cancel</button>
              <button onClick={handleUpdate} disabled={!formData.title} className="btn-primary" style={{ flex: 1, padding: 13, fontSize: '0.9rem', borderRadius: 12, opacity: !formData.title ? 0.5 : 1 }}>Save Changes</button>
            </div>
          </div>
        </div>
      )}

      {/* ── Country Detail Modal ─────────────────────────────── */}
      {selectedCountry && !isAdmin && (
        <div className="modal-backdrop" onClick={closeCountryModal}>
          <div className="modal-box" onClick={e => e.stopPropagation()} style={{ padding: 0 }}>
            <div style={{ position: 'relative' }}>
              <img
                src={getImageUrl(selectedCountry.images)}
                alt={selectedCountry.title}
                loading="lazy"
                style={{ width: '100%', height: 280, objectFit: 'cover', borderRadius: '24px 24px 0 0', background: '#F3F4F6' }}
                onError={e => { e.target.onerror = null; e.target.src = '/placeholder.jpg'; }}
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%)', borderRadius: '24px 24px 0 0' }} />
              <button onClick={closeCountryModal} style={{ position: 'absolute', top: 16, right: 16, width: 36, height: 36, borderRadius: '50%', background: 'rgba(255,255,255,0.9)', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem' }}>×</button>
              <div style={{ position: 'absolute', bottom: 20, left: 24 }}>
                <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2rem', fontWeight: 700, color: 'white' }}>{selectedCountry.title}</h2>
              </div>
            </div>
            <div style={{ padding: 32 }}>
              <p style={{ fontFamily: 'Outfit', fontSize: '0.9rem', color: '#6B7280', lineHeight: 1.7, marginBottom: 24 }}>
                {selectedCountry.description || `Experience the beauty and culture of ${selectedCountry.title}. From stunning landscapes to rich cultural heritage, this destination offers unforgettable experiences for every traveler.`}
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 14, marginBottom: 24 }}>
                {[
                  { icon: <FaPlane />, label: 'Price', val: selectedCountry.price ? `₹${selectedCountry.price}` : 'On Request' },
                  { icon: <FaClock />, label: 'Duration', val: selectedCountry.duration || 'Flexible' },
                  { icon: <FaStar />, label: 'Rating', val: selectedCountry.rating || '4.8' },
                ].map((s, i) => (
                  <div key={i} style={{ background: '#F9FAFB', borderRadius: 14, padding: 16, textAlign: 'center' }}>
                    <div style={{ color: 'var(--saffron)', marginBottom: 6, fontSize: '1.1rem' }}>{s.icon}</div>
                    <div style={{ fontFamily: 'Outfit', fontSize: '0.75rem', color: '#9CA3AF', marginBottom: 4 }}>{s.label}</div>
                    <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.1rem', fontWeight: 700, color: 'var(--ink)' }}>{s.val}</div>
                  </div>
                ))}
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 12, marginBottom: 24 }}>
                {[
                  { icon: <FaPlane />, label: 'Flights' },
                  { icon: <FaHotel />, label: 'Hotels' },
                  { icon: <FaUmbrellaBeach />, label: 'Activities' },
                ].map((s, i) => (
                  <div key={i} style={{ background: '#F9FAFB', borderRadius: 12, padding: '14px 10px', textAlign: 'center' }}>
                    <div style={{ color: 'var(--saffron)', marginBottom: 6 }}>{s.icon}</div>
                    <div style={{ fontFamily: 'Outfit', fontSize: '0.8rem', color: '#6B7280' }}>{s.label}</div>
                  </div>
                ))}
              </div>
              <button className="btn-primary" style={{ width: '100%', padding: 15, fontSize: '1rem', borderRadius: 14 }}>
                Book Your Adventure →
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default React.memo(International);