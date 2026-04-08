import React, { useEffect, useState, useContext, useCallback, useMemo, useRef } from 'react';
import { AuthContext } from '../Context/AuthContext';
import api from '../utils/api';
import {
  FaMapMarkerAlt,
  FaClock,
  FaUsers,
  FaStar,
  FaSearch,
  FaAward,
  FaUmbrellaBeach,
  FaChevronRight,
  FaChevronLeft,
  FaHotel,
  FaTrash,
  FaEdit,
  FaPlus,
  FaPlane,
} from 'react-icons/fa';

// ── CSS variables injected locally so this component works even
//    when lazy-loaded outside of Start.jsx's GlobalStyles scope ──
const InternationalStyles = () => (
  <style>{`
    #international {
      --saffron: #E8813A;
      --saffron-light: #F4A261;
      --saffron-dark: #C85A1A;
      --forest: #1A3C34;
      --forest-mid: #264D42;
      --forest-light: #2E6B5C;
      --cream: #FBF5EC;
      --cream-deep: #F3E8D4;
      --ink: #0F1923;
      --muted: #9CA3AF;
    }
    #international .dest-card {
      background: white;
      border-radius: 20px;
      overflow: hidden;
      box-shadow: 0 4px 20px rgba(0,0,0,0.06);
      transition: transform 0.4s cubic-bezier(.25,.8,.25,1), box-shadow 0.4s;
      cursor: pointer;
    }
    #international .dest-card:hover {
      transform: translateY(-8px);
      box-shadow: 0 20px 60px rgba(0,0,0,0.14);
    }
    #international .dest-card:hover img {
      transform: scale(1.06);
    }
    #international .dest-card img {
      transition: transform 0.6s ease;
    }
    #international .btn-primary {
      background: linear-gradient(135deg, var(--saffron), var(--saffron-dark));
      color: white;
      border: none;
      border-radius: 50px;
      font-family: 'Outfit', sans-serif;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s;
      box-shadow: 0 4px 20px rgba(232,129,58,0.35);
      display: inline-block;
    }
    #international .btn-primary:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 30px rgba(232,129,58,0.5);
    }
    #international .btn-primary:disabled {
      opacity: 0.65;
      cursor: not-allowed;
      transform: none;
    }
    #international .filter-pill {
      padding: 8px 20px;
      border-radius: 50px;
      font-family: 'Outfit', sans-serif;
      font-size: 0.82rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.25s;
      border: 1.5px solid #E5E7EB;
      background: white;
      color: #6B7280;
      white-space: nowrap;
    }
    #international .filter-pill:hover {
      border-color: var(--saffron);
      color: var(--saffron);
    }
    #international .filter-pill.active {
      background: var(--saffron);
      color: white;
      border-color: var(--saffron);
      box-shadow: 0 4px 14px rgba(232,129,58,0.35);
    }
    #international .section-eyebrow {
      font-family: 'Outfit', sans-serif;
      font-size: 0.75rem;
      font-weight: 700;
      letter-spacing: 3px;
      text-transform: uppercase;
      color: var(--saffron);
    }
    #international .section-title {
      font-family: 'Cormorant Garamond', serif;
      font-size: clamp(2rem, 4vw, 3.2rem);
      font-weight: 600;
      line-height: 1.15;
      color: var(--ink);
    }
    #international .modal-backdrop {
      position: fixed;
      inset: 0;
      background: rgba(15,25,35,0.75);
      backdrop-filter: blur(8px);
      z-index: 3000;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
    }
    #international .modal-box {
      background: white;
      border-radius: 24px;
      max-width: 620px;
      width: 100%;
      max-height: 88vh;
      overflow-y: auto;
      box-shadow: 0 40px 100px rgba(0,0,0,0.3);
      padding: 32px;
    }
    #international .skeleton {
      background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
      background-size: 200% 100%;
      animation: intl-shimmer 1.5s infinite;
      border-radius: 12px;
    }
    @keyframes intl-shimmer {
      0% { background-position: -200% 0; }
      100% { background-position: 200% 0; }
    }
    #international .sc-track::-webkit-scrollbar { display: none; }
  `}</style>
);

const International = ({ prefetchedData }) => {
  const { user } = useContext(AuthContext);
  const isAdmin = user?.isAdmin;

  // ── If parent passes prefetchedData, skip the fetch ──────────
  const [destinations, setDestinations] = useState(
    Array.isArray(prefetchedData) && prefetchedData.length > 0 ? prefetchedData : []
  );
  const [loading, setLoading] = useState(
    !(Array.isArray(prefetchedData) && prefetchedData.length > 0)
  );
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState('all');
  const [selectedCountry, setSelectedCountry] = useState(null);

  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [formData, setFormData] = useState({
    title: '', images: '', description: '', location: '', price: '', duration: '', rating: '4.5',
  });
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [retryCount, setRetryCount] = useState(0);

  const imageCache = useRef(new Map());
  const abortRef = useRef(null);

  // ── Sync if parent updates prefetchedData after mount ────────
  useEffect(() => {
    if (Array.isArray(prefetchedData) && prefetchedData.length > 0) {
      setDestinations(prefetchedData);
      setLoading(false);
    }
  }, [prefetchedData]);

  const getImageUrl = useCallback((imagePath) => {
    if (!imagePath) return '/placeholder.jpg';
    // Handle array of images (some APIs return images as array)
    const path = Array.isArray(imagePath) ? imagePath[0] : imagePath;
    if (!path || path === 'undefined' || path === 'null') return '/placeholder.jpg';
    if (imageCache.current.has(path)) return imageCache.current.get(path);
    let url;
    if (path.startsWith('http')) {
      // Cloudinary: inject auto-optimization transforms
      url = path.includes('/upload/')
        ? path.replace('/upload/', '/upload/f_auto,q_auto,w_600/')
        : path;
    } else {
      url = '/placeholder.jpg';
    }
    imageCache.current.set(path, url);
    return url;
  }, []);

  // ── Fetch only when prefetchedData is absent ─────────────────
  useEffect(() => {
    // Skip fetch if we already have data from parent
    if (Array.isArray(prefetchedData) && prefetchedData.length > 0) return;

    if (abortRef.current) abortRef.current.abort();
    const controller = new AbortController();
    abortRef.current = controller;

    const isCanceled = (err) =>
      err.name === 'CanceledError' || err.name === 'AbortError' || err.code === 'ERR_CANCELED';

    const candidates = ['/International/getallInternational'];

    async function fetchPackages() {
      setError(null);
      setLoading(true);
      try {
        let res = null;
        for (const endpoint of candidates) {
          if (controller.signal.aborted) return;
          try {
            res = await api.get(endpoint, { signal: controller.signal });
            break;
          } catch (err) {
            if (isCanceled(err)) return;
            if (err.response?.status === 404) continue;
            throw err;
          }
        }
        if (!res) throw new Error('All endpoint variants returned 404.');
        if (!controller.signal.aborted) {
          const data = Array.isArray(res.data) ? res.data : (res.data?.data ?? []);
          setDestinations(data);
        }
      } catch (err) {
        if (isCanceled(err)) return;
        setError(err.message || 'Failed to load destinations. Please try again.');
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    }

    fetchPackages();
    return () => controller.abort();
  }, [retryCount, prefetchedData]);

  // ── Derived data ─────────────────────────────────────────────
  const filteredDestinations = useMemo(() =>
    destinations.filter(d =>
      d.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      d.location?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      d.description?.toLowerCase().includes(searchTerm.toLowerCase())
    ),
    [searchTerm, destinations]
  );

  const featuredDestinations = useMemo(() => destinations.slice(0, 3), [destinations]);

  // ── Modal helpers ────────────────────────────────────────────
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

  // ── CRUD ─────────────────────────────────────────────────────
  const handleAdd = useCallback(async () => {
    try {
      const fd = new FormData();
      Object.entries({
        title: formData.title, description: formData.description || '',
        location: formData.location || '', price: formData.price || '',
        duration: formData.duration || '', rating: formData.rating || '4.5',
      }).forEach(([k, v]) => fd.append(k, v));
      if (selectedFile) fd.append('image', selectedFile);
      const res = await api.post('/International-tours/addInternational', fd, {
        headers: { 'Content-Type': 'multipart/form-data' },
        onUploadProgress: (e) => setUploadProgress(Math.round((e.loaded * 100) / e.total)),
      });
      if (res.data.success) {
        setDestinations(prev => [...prev, res.data.data]);
        setShowAddModal(false);
        resetForm();
      }
    } catch (err) { console.error('Error adding:', err); }
  }, [formData, selectedFile, resetForm]);

  const handleUpdate = useCallback(async () => {
    if (!editingItem) return;
    try {
      const fd = new FormData();
      Object.entries({
        title: formData.title, description: formData.description,
        location: formData.location, price: formData.price,
        duration: formData.duration, rating: formData.rating,
      }).forEach(([k, v]) => fd.append(k, v));
      if (selectedFile) fd.append('image', selectedFile);
      const res = await api.put(`/International-tours/updateInternational/${editingItem._id}`, fd, {
        headers: { 'Content-Type': 'multipart/form-data' },
        onUploadProgress: (e) => setUploadProgress(Math.round((e.loaded * 100) / e.total)),
      });
      if (res.data.success) {
        setDestinations(prev => prev.map(i => i._id === editingItem._id ? res.data.data : i));
        setShowEditModal(false); setEditingItem(null); resetForm();
      }
    } catch (err) { console.error('Error updating:', err); }
  }, [editingItem, formData, selectedFile, resetForm]);

  const handleDelete = useCallback(async (id) => {
    if (!window.confirm('Are you sure you want to delete this destination?')) return;
    try {
      const res = await api.delete(`/International-tours/deleteInternational/${id}`);
      if (res.data.success) setDestinations(prev => prev.filter(i => i._id !== id));
    } catch (err) { console.error('Error deleting:', err); }
  }, []);

  const openEditModal = useCallback((item) => {
    setEditingItem(item);
    setFormData({
      title: item.title || '', images: item.images || '', description: item.description || '',
      location: item.location || '', price: item.price || '',
      duration: item.duration || '', rating: item.rating || '4.5',
    });
    setSelectedFile(null); setShowEditModal(true);
  }, []);

  // ── Modal form fields ────────────────────────────────────────
  const ModalFormFields = () => (
    <>
      {[['title', 'Title *', 'text'], ['description', 'Description', 'textarea'], ['location', 'Location', 'text']].map(([name, label, type]) => (
        <div key={name} className="mb-5">
          <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, color: '#374151', marginBottom: 6, fontFamily: 'Outfit, sans-serif' }}>{label}</label>
          {type === 'textarea'
            ? <textarea name={name} value={formData[name]} onChange={handleInputChange} style={{ width: '100%', padding: '10px 14px', borderRadius: 12, border: '1.5px solid #E5E7EB', fontFamily: 'Outfit, sans-serif', fontSize: '0.9rem', outline: 'none', minHeight: 80, resize: 'vertical', boxSizing: 'border-box' }} />
            : <input type={type} name={name} value={formData[name]} onChange={handleInputChange} style={{ width: '100%', padding: '10px 14px', borderRadius: 12, border: '1.5px solid #E5E7EB', fontFamily: 'Outfit, sans-serif', fontSize: '0.9rem', outline: 'none', boxSizing: 'border-box' }} />
          }
        </div>
      ))}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 20 }}>
        {[['price', 'Price (₹)', 'number'], ['duration', 'Duration', 'text']].map(([name, label, type]) => (
          <div key={name}>
            <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, color: '#374151', marginBottom: 6, fontFamily: 'Outfit, sans-serif' }}>{label}</label>
            <input type={type} name={name} value={formData[name]} onChange={handleInputChange} style={{ width: '100%', padding: '10px 14px', borderRadius: 12, border: '1.5px solid #E5E7EB', fontFamily: 'Outfit, sans-serif', fontSize: '0.9rem', outline: 'none', boxSizing: 'border-box' }} />
          </div>
        ))}
      </div>
      <div style={{ marginBottom: 20 }}>
        <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, color: '#374151', marginBottom: 6, fontFamily: 'Outfit, sans-serif' }}>Rating (1–5)</label>
        <input type="number" name="rating" value={formData.rating} onChange={handleInputChange} min="1" max="5" step="0.1" style={{ width: '100%', padding: '10px 14px', borderRadius: 12, border: '1.5px solid #E5E7EB', fontFamily: 'Outfit, sans-serif', fontSize: '0.9rem', outline: 'none', boxSizing: 'border-box' }} />
      </div>
      <div style={{ marginBottom: 24 }}>
        <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, color: '#374151', marginBottom: 6, fontFamily: 'Outfit, sans-serif' }}>Image</label>
        <input type="file" accept="image/*" onChange={handleFileSelect} style={{ width: '100%', padding: 10, borderRadius: 12, border: '1.5px dashed #E5E7EB', fontFamily: 'Outfit, sans-serif', boxSizing: 'border-box', fontSize: '0.85rem' }} />
        {(formData.preview || formData.images) && (
          <img src={formData.preview || getImageUrl(formData.images)} alt="Preview" style={{ width: '100%', maxHeight: 150, objectFit: 'cover', borderRadius: 12, marginTop: 10 }} />
        )}
        {uploadProgress > 0 && uploadProgress < 100 && (
          <div style={{ height: 4, background: '#E5E7EB', borderRadius: 2, marginTop: 10, overflow: 'hidden' }}>
            <div style={{ height: '100%', background: 'linear-gradient(90deg, var(--saffron), var(--saffron-dark))', borderRadius: 2, width: `${uploadProgress}%`, transition: 'width 0.3s' }} />
          </div>
        )}
      </div>
    </>
  );

  // ── Loading skeleton ─────────────────────────────────────────
  if (loading) return (
    <section id="international" style={{ background: 'white', paddingBottom: 80 }}>
      <InternationalStyles />
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '64px 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 24 }}>
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

  // ── Error state ──────────────────────────────────────────────
  if (error) return (
    <section id="international" style={{ background: 'white', paddingBottom: 80 }}>
      <InternationalStyles />
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '80px 24px', textAlign: 'center' }}>
        <div style={{ fontSize: '3rem', marginBottom: 16 }}>🌐</div>
        <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.8rem', color: 'var(--ink)', marginBottom: 12 }}>Couldn't Load Destinations</h3>
        <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: '0.88rem', color: '#9CA3AF', maxWidth: 400, margin: '0 auto 24px' }}>{error}</p>
        <button
          onClick={() => { setLoading(true); setError(null); setRetryCount(c => c + 1); }}
          className="btn-primary"
          style={{ padding: '12px 28px', fontSize: '0.9rem' }}
        >
          Try Again
        </button>
      </div>
    </section>
  );

  return (
    <section id="international" style={{ background: 'white', paddingBottom: 80 }}>
      <InternationalStyles />
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>

        {/* ── Section Header ───────────────────────────────────── */}
        {/* FIX: use a proper flex row with items-start so search stays right-aligned */}
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          gap: 24,
          marginBottom: 40,
          flexWrap: 'wrap',
        }}>
          {/* Left: eyebrow + title */}
          <div style={{ flex: '1 1 280px', minWidth: 0 }}>
            <div className="section-eyebrow" style={{ marginBottom: 10 }}>International Tours</div>
            <h2 className="section-title" style={{ lineHeight: 1.1 }}>
              Explore the <em style={{ color: 'var(--saffron)', fontStyle: 'italic' }}>World</em><br />Beyond Borders
            </h2>
          </div>

          {/* Right: search + add — aligned to top */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            flexShrink: 0,
            paddingTop: 6,         /* nudge down to align with eyebrow text */
            flexWrap: 'wrap',
          }}>
            <div style={{ position: 'relative' }}>
              <FaSearch style={{
                position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)',
                color: '#9CA3AF', fontSize: '0.8rem', pointerEvents: 'none',
              }} />
              <input
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                placeholder="Search countries..."
                style={{
                  paddingLeft: 38, paddingRight: searchTerm ? 36 : 16,
                  paddingTop: 10, paddingBottom: 10,
                  borderRadius: 50, border: '1.5px solid #E5E7EB',
                  fontFamily: 'Outfit, sans-serif', fontSize: '0.85rem',
                  outline: 'none', width: 220,
                  transition: 'border-color 0.2s',
                }}
              />
              {searchTerm && (
                <span style={{
                  position: 'absolute', right: 14, top: '50%', transform: 'translateY(-50%)',
                  fontFamily: 'Outfit, sans-serif', fontSize: '0.7rem', color: '#9CA3AF',
                }}>
                  {filteredDestinations.length}
                </span>
              )}
            </div>

            {isAdmin && (
              <button
                onClick={() => { resetForm(); setShowAddModal(true); }}
                className="btn-primary"
                style={{ padding: '10px 20px', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: 6, whiteSpace: 'nowrap' }}
              >
                <FaPlus size={11} /> Add Destination
              </button>
            )}
          </div>
        </div>

        {/* ── Search results ───────────────────────────────────── */}
        {searchTerm && (
          <div style={{ marginBottom: 48 }}>
            {filteredDestinations.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '48px 0', fontFamily: 'Outfit, sans-serif', color: '#9CA3AF' }}>
                No destinations found for "{searchTerm}"
              </div>
            ) : (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 20 }}>
                {filteredDestinations.map((item, i) => (
                  <DestCard key={`s-${item._id || i}`} item={item} isAdmin={isAdmin} getImageUrl={getImageUrl} onOpen={openCountryModal} onEdit={openEditModal} onDelete={handleDelete} />
                ))}
              </div>
            )}
          </div>
        )}

        {/* ── Featured ─────────────────────────────────────────── */}
        {!searchTerm && featuredDestinations.length > 0 && (
          <div style={{ marginBottom: 56 }}>
            <div style={{
              display: 'flex', alignItems: 'center', gap: 8,
              fontFamily: 'Outfit, sans-serif', fontSize: '0.72rem', fontWeight: 700,
              color: '#6B7280', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 20,
            }}>
              <FaAward style={{ color: 'var(--saffron)', flexShrink: 0 }} />
              <span>Featured Destinations</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 20 }}>
              {featuredDestinations.map((dest, i) => (
                <div
                  key={dest._id || i}
                  className="dest-card"
                  style={{ position: 'relative', overflow: 'hidden', cursor: isAdmin ? 'default' : 'pointer' }}
                  onClick={() => !isAdmin && openCountryModal(dest)}
                >
                  <div style={{ position: 'relative', height: 240, background: '#F3F4F6', overflow: 'hidden' }}>
                    <img
                      src={getImageUrl(dest.images)}
                      alt={dest.title}
                      loading="lazy"
                      decoding="async"
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                      onError={e => { e.target.onerror = null; e.target.src = '/placeholder.jpg'; }}
                    />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 55%)' }} />
                    <span style={{
                      position: 'absolute', top: 12, right: 12,
                      background: 'var(--saffron)', color: 'white',
                      fontFamily: 'Outfit, sans-serif', fontSize: '0.62rem', fontWeight: 700,
                      padding: '4px 10px', borderRadius: 6, letterSpacing: 2, textTransform: 'uppercase',
                    }}>
                      Featured
                    </span>
                    {isAdmin && (
                      <div style={{ position: 'absolute', top: 12, left: 12, display: 'flex', gap: 6 }}>
                        <button onClick={e => { e.stopPropagation(); openEditModal(dest); }} style={{ width: 30, height: 30, borderRadius: 8, background: 'var(--saffron)', border: 'none', color: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><FaEdit size={11} /></button>
                        <button onClick={e => { e.stopPropagation(); handleDelete(dest._id); }} style={{ width: 30, height: 30, borderRadius: 8, background: '#EF4444', border: 'none', color: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><FaTrash size={11} /></button>
                      </div>
                    )}
                    <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '16px 16px 14px' }}>
                      <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.3rem', fontWeight: 700, color: 'white', lineHeight: 1.2 }}>{dest.title}</div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 4, fontFamily: 'Outfit, sans-serif', fontSize: '0.72rem', color: 'rgba(255,255,255,0.75)' }}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><FaClock size={10} />{dest.duration || 'Flexible'}</span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><FaStar size={10} style={{ color: '#FBB040' }} />{dest.rating || '4.8'}</span>
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
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 24, overflowX: 'auto', paddingBottom: 4 }}>
            {[
              { id: 'all', label: 'All Destinations' },
              { id: 'popular', label: 'Most Popular' },
              { id: 'hidden', label: 'Hidden Gems' },
              { id: 'upcoming', label: 'Upcoming Tours' },
            ].map(t => (
              <button
                key={t.id}
                className={`filter-pill${activeTab === t.id ? ' active' : ''}`}
                onClick={() => setActiveTab(t.id)}
              >
                {t.label}
              </button>
            ))}
          </div>
        )}

        {/* ── Horizontal Scroll Carousel ───────────────────────── */}
        {!searchTerm && (
          <ScrollCarousel
            destinations={destinations}
            isAdmin={isAdmin}
            getImageUrl={getImageUrl}
            onOpen={openCountryModal}
            onEdit={openEditModal}
            onDelete={handleDelete}
          />
        )}

        {/* ── Newsletter ───────────────────────────────────────── */}
        <div style={{
          marginTop: 56,
          background: 'linear-gradient(135deg, var(--forest) 0%, var(--forest-light) 100%)',
          borderRadius: 28,
          padding: '40px 32px',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 32,
        }}>
          <div style={{ flex: '1 1 260px', minWidth: 0 }}>
            <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '0.7rem', fontWeight: 700, color: 'var(--saffron-light)', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 8 }}>Stay Inspired</div>
            <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.6rem,3vw,2.4rem)', fontWeight: 700, color: 'white', marginBottom: 8, lineHeight: 1.2 }}>Get Exclusive Deals</h3>
            <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>Join 10,000+ travellers getting weekly travel inspiration & offers</p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap', flexShrink: 0 }}>
            <input
              type="email"
              placeholder="Your email address"
              style={{
                padding: '12px 20px', borderRadius: 12, border: 'none',
                fontFamily: 'Outfit, sans-serif', fontSize: '0.9rem',
                width: 240, outline: 'none',
              }}
            />
            <button className="btn-primary" style={{ padding: '12px 28px', fontSize: '0.9rem', borderRadius: 12, flexShrink: 0 }}>Subscribe</button>
          </div>
        </div>
      </div>

      {/* ── Add Modal ─────────────────────────────────────────── */}
      {showAddModal && (
        <div className="modal-backdrop" onClick={() => { setShowAddModal(false); resetForm(); }}>
          <div className="modal-box" onClick={e => e.stopPropagation()}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
              <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.8rem', fontWeight: 700, color: 'var(--ink)' }}>Add Destination</h2>
              <button onClick={() => { setShowAddModal(false); resetForm(); }} style={{ background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer', color: '#6B7280', lineHeight: 1 }}>×</button>
            </div>
            <ModalFormFields />
            <div style={{ display: 'flex', gap: 12 }}>
              <button onClick={() => { setShowAddModal(false); resetForm(); }} style={{ flex: 1, padding: '14px', borderRadius: 12, border: '1.5px solid #E5E7EB', background: 'white', fontFamily: 'Outfit, sans-serif', fontWeight: 600, cursor: 'pointer', fontSize: '0.9rem', color: '#374151' }}>Cancel</button>
              <button onClick={handleAdd} disabled={!formData.title} className="btn-primary" style={{ flex: 1, padding: '14px', fontSize: '0.9rem', borderRadius: 12, opacity: !formData.title ? 0.5 : 1 }}>Add Destination</button>
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
              <button onClick={() => { setShowEditModal(false); setEditingItem(null); resetForm(); }} style={{ background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer', color: '#6B7280', lineHeight: 1 }}>×</button>
            </div>
            <ModalFormFields />
            <div style={{ display: 'flex', gap: 12 }}>
              <button onClick={() => { setShowEditModal(false); setEditingItem(null); resetForm(); }} style={{ flex: 1, padding: '14px', borderRadius: 12, border: '1.5px solid #E5E7EB', background: 'white', fontFamily: 'Outfit, sans-serif', fontWeight: 600, cursor: 'pointer', fontSize: '0.9rem', color: '#374151' }}>Cancel</button>
              <button onClick={handleUpdate} disabled={!formData.title} className="btn-primary" style={{ flex: 1, padding: '14px', fontSize: '0.9rem', borderRadius: 12, opacity: !formData.title ? 0.5 : 1 }}>Save Changes</button>
            </div>
          </div>
        </div>
      )}

      {/* ── Country Detail Modal ─────────────────────────────── */}
      {selectedCountry && !isAdmin && (
        <div className="modal-backdrop" onClick={closeCountryModal}>
          <div className="modal-box" style={{ padding: 0 }} onClick={e => e.stopPropagation()}>
            <div style={{ position: 'relative' }}>
              <img
                src={getImageUrl(selectedCountry.images)}
                alt={selectedCountry.title}
                loading="lazy"
                style={{ width: '100%', height: 280, objectFit: 'cover', borderRadius: '24px 24px 0 0', background: '#F3F4F6', display: 'block' }}
                onError={e => { e.target.onerror = null; e.target.src = '/placeholder.jpg'; }}
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 50%)', borderRadius: '24px 24px 0 0' }} />
              <button onClick={closeCountryModal} style={{ position: 'absolute', top: 16, right: 16, width: 36, height: 36, borderRadius: '50%', background: 'rgba(255,255,255,0.9)', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem' }}>×</button>
              <div style={{ position: 'absolute', bottom: 20, left: 24 }}>
                <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2.2rem', fontWeight: 700, color: 'white' }}>{selectedCountry.title}</h2>
              </div>
            </div>
            <div style={{ padding: 32 }}>
              <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: '0.88rem', color: '#6B7280', lineHeight: 1.7, marginBottom: 24 }}>
                {selectedCountry.description || `Experience the beauty and culture of ${selectedCountry.title}. From stunning landscapes to rich cultural heritage, this destination offers unforgettable experiences for every traveler.`}
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14, marginBottom: 24 }}>
                {[
                  { icon: <FaPlane />, label: 'Price', val: selectedCountry.price ? `₹${selectedCountry.price}` : 'On Request' },
                  { icon: <FaClock />, label: 'Duration', val: selectedCountry.duration || 'Flexible' },
                  { icon: <FaStar />, label: 'Rating', val: selectedCountry.rating || '4.8' },
                ].map((s, i) => (
                  <div key={i} style={{ background: '#F9FAFB', borderRadius: 16, padding: '16px 12px', textAlign: 'center' }}>
                    <div style={{ color: 'var(--saffron)', marginBottom: 6, fontSize: '1.1rem' }}>{s.icon}</div>
                    <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '0.72rem', color: '#9CA3AF', marginBottom: 4 }}>{s.label}</div>
                    <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.1rem', fontWeight: 700, color: 'var(--ink)' }}>{s.val}</div>
                  </div>
                ))}
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12, marginBottom: 24 }}>
                {[{ icon: <FaPlane />, label: 'Flights' }, { icon: <FaHotel />, label: 'Hotels' }, { icon: <FaUmbrellaBeach />, label: 'Activities' }].map((s, i) => (
                  <div key={i} style={{ background: '#F9FAFB', borderRadius: 12, padding: '14px 10px', textAlign: 'center' }}>
                    <div style={{ color: 'var(--saffron)', marginBottom: 6 }}>{s.icon}</div>
                    <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '0.78rem', color: '#6B7280' }}>{s.label}</div>
                  </div>
                ))}
              </div>
              <button className="btn-primary" style={{ width: '100%', padding: '16px', fontSize: '1rem', borderRadius: 16 }}>
                Book Your Adventure →
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

// ── Smooth horizontal scroll carousel ───────────────────────
const ScrollCarousel = React.memo(({ destinations, isAdmin, getImageUrl, onOpen, onEdit, onDelete }) => {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [progress, setProgress] = useState(0);

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
    const ro = new ResizeObserver(updateScrollState);
    ro.observe(el);
    return () => { el.removeEventListener('scroll', updateScrollState); ro.disconnect(); };
  }, [destinations, updateScrollState]);

  const scroll = useCallback((dir) => {
    const el = scrollRef.current;
    if (!el) return;
    const cardW = el.querySelector('.sc-card')?.offsetWidth || 300;
    el.scrollBy({ left: dir * (cardW + 20), behavior: 'smooth' });
  }, []);

  if (!destinations.length) return (
    <div style={{ textAlign: 'center', padding: '48px 0', fontFamily: 'Outfit, sans-serif', color: '#9CA3AF' }}>
      No destinations available yet.
    </div>
  );

  return (
    <div style={{ position: 'relative' }}>
      {/* Header row */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
        <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '0.88rem', color: '#6B7280' }}>
          <strong style={{ color: 'var(--ink)' }}>{destinations.length}</strong> destinations worldwide
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <button
            onClick={() => scroll(-1)}
            disabled={!canScrollLeft}
            style={{
              width: 36, height: 36, borderRadius: 10, border: '1.5px solid #E5E7EB',
              background: canScrollLeft ? 'white' : '#F9FAFB',
              color: canScrollLeft ? 'var(--ink)' : '#D1D5DB',
              cursor: canScrollLeft ? 'pointer' : 'not-allowed',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'all 0.2s',
            }}
          >
            <FaChevronLeft size={13} />
          </button>
          <button
            onClick={() => scroll(1)}
            disabled={!canScrollRight}
            style={{
              width: 36, height: 36, borderRadius: 10, border: '1.5px solid #E5E7EB',
              background: canScrollRight ? 'white' : '#F9FAFB',
              color: canScrollRight ? 'var(--ink)' : '#D1D5DB',
              cursor: canScrollRight ? 'pointer' : 'not-allowed',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'all 0.2s',
            }}
          >
            <FaChevronRight size={13} />
          </button>
        </div>
      </div>

      {/* Track container */}
      <div style={{ position: 'relative', borderRadius: 16, background: '#F9FAFB', padding: '20px 0' }}>
        {canScrollLeft && (
          <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 60, background: 'linear-gradient(to right, #F9FAFB, transparent)', zIndex: 2, borderRadius: '16px 0 0 16px', pointerEvents: 'none' }} />
        )}
        {canScrollRight && (
          <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: 60, background: 'linear-gradient(to left, #F9FAFB, transparent)', zIndex: 2, borderRadius: '0 16px 16px 0', pointerEvents: 'none' }} />
        )}
        <div
          ref={scrollRef}
          className="sc-track"
          style={{
            display: 'flex', gap: 20, overflowX: 'auto', padding: '4px 20px 8px',
            scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch',
            scrollbarWidth: 'none', msOverflowStyle: 'none',
          }}
        >
          {destinations.map((item, i) => (
            <div
              key={`sc-${item._id || i}`}
              className="sc-card"
              style={{ flex: '0 0 calc(25% - 15px)', minWidth: 240, scrollSnapAlign: 'start' }}
            >
              <DestCard item={item} isAdmin={isAdmin} getImageUrl={getImageUrl} onOpen={onOpen} onEdit={onEdit} onDelete={onDelete} />
            </div>
          ))}
        </div>
      </div>

      {/* Progress bar */}
      <div style={{ marginTop: 14, height: 3, background: '#E5E7EB', borderRadius: 2, overflow: 'hidden' }}>
        <div
          style={{
            height: '100%',
            background: 'linear-gradient(90deg, var(--saffron), var(--saffron-dark))',
            borderRadius: 2,
            width: `${progress * 100}%`,
            transition: 'width 0.15s ease-out',
          }}
        />
      </div>
    </div>
  );
});

// ── Reusable destination card ────────────────────────────────
const DestCard = React.memo(({ item, isAdmin, getImageUrl, onOpen, onEdit, onDelete }) => (
  <div
    className="dest-card"
    style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden' }}
    onClick={() => !isAdmin && onOpen(item)}
  >
    {/* Image block */}
    <div style={{ position: 'relative', height: 200, width: '100%', flexShrink: 0, background: '#F3F4F6', overflow: 'hidden' }}>
      <img
        src={getImageUrl(item.images)}
        alt={item.title}
        loading="lazy"
        decoding="async"
        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        onError={e => { e.target.onerror = null; e.target.src = '/placeholder.jpg'; }}
      />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.62) 0%, transparent 50%)' }} />

      {isAdmin && (
        <div style={{ position: 'absolute', top: 10, left: 10, display: 'flex', gap: 6, zIndex: 10 }}>
          <button
            onClick={e => { e.stopPropagation(); onEdit(item); }}
            style={{ width: 30, height: 30, borderRadius: 8, background: 'var(--saffron)', border: 'none', color: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <FaEdit size={11} />
          </button>
          <button
            onClick={e => { e.stopPropagation(); onDelete(item._id); }}
            style={{ width: 30, height: 30, borderRadius: 8, background: '#EF4444', border: 'none', color: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <FaTrash size={11} />
          </button>
        </div>
      )}

      {/* Title overlay at bottom of image */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '12px 14px' }}>
        <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.05rem', fontWeight: 700, color: 'white', lineHeight: 1.2, marginBottom: 4 }}>
          {item.title}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontFamily: 'Outfit, sans-serif', fontSize: '0.7rem', color: 'rgba(255,255,255,0.75)' }}>
          {item.location && (
            <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              <FaMapMarkerAlt size={9} />{item.location}
            </span>
          )}
          <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <FaStar size={9} style={{ color: '#FBB040' }} />{item.rating || '4.8'}
          </span>
          {item.duration && (
            <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              <FaClock size={9} />{item.duration}
            </span>
          )}
        </div>
      </div>
    </div>

    {/* Card body */}
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, padding: 16, flex: 1 }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, fontFamily: 'Outfit, sans-serif', fontSize: '0.75rem', color: '#6B7280' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><FaUsers size={11} />2–12</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><FaHotel size={11} />4★</span>
        </div>
        {item.price && (
          <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.3rem', fontWeight: 700, color: 'var(--saffron)', lineHeight: 1 }}>
            ₹{item.price}
          </span>
        )}
      </div>
      <button
        onClick={e => { e.stopPropagation(); !isAdmin && onOpen(item); }}
        className="btn-primary"
        style={{ width: '100%', padding: '10px', fontSize: '0.84rem', borderRadius: 12 }}
      >
        Book Your Adventure →
      </button>
    </div>
  </div>
));

export default React.memo(International);