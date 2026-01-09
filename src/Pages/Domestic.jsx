import React, { useEffect, useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';
import api from '../utils/api';
import axios from 'axios';
// const BASE = "http://localhost:5000";
const BASE = 'https://my-travel-app-backend-6.onrender.com'


const Domestic = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext); // get logged-in user

  const isAdmin = user?.isAdmin;

  const [Animation, setAnimation] = useState([]);
  const [states1, setstates1] = useState([]);
  const [states2, setstates2] = useState([]);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startIndex, setStartIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getCardsToShow = () => {
    if (windowWidth < 768) return 1;
    if (windowWidth < 1024) return 2;
    return 3;
  };
  const cardsToShow = getCardsToShow();

  // Animation timer
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % Animation.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [Animation.length]);

  // Fetch data
  useEffect(() => {
    async function fetchPackages() {
      try {
        const [res1, res2, res3] = await Promise.all([
          api.get('/maharashtra-domestic/getallAnimation'),
          api.get('/maharashtra-domestic/getstates'),
          api.get('/maharashtra-domestic/getstates2'),
        ]);
        setAnimation(res1.data);
        setstates1(Array.isArray(res2.data) ? res2.data : res2.data.data || []);
        setstates2(res3.data);
      } catch (err) {
        console.error("Error fetching Data:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchPackages();
  }, []);

  const handlePrev = () => setStartIndex(prev => Math.max(prev - cardsToShow, 0));
  const handleNext = () => {
    const totalCards = Math.max(states1.length, states2.length);
    setStartIndex(prev => Math.min(prev + cardsToShow, totalCards - cardsToShow));
  };

    //  Delete Image
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this image?")) return;

    try {
      const res = await axios.delete(`${BASE}/api/delete-image/${id}`);
      if (res.data.success) {
        setData(prev => prev.filter(item => item._id !== id));
        alert("Image deleted successfully!");
      }
    } catch (err) {
      console.error("Error deleting:", err);
      alert("Failed to delete image.");
    }
  };


  // Update Image
  const handleUpdate = async (id, file) => {
    try {
      const formdata = new FormData();
      formdata.append("image", file);

      const res = await axios.post(
        `${BASE}/api/upload-image/${id}`,
        formdata,
        { headers: { "Content-Type": "multipart/form-data" } }
      );


      if (res.data.success) {
        // 🔥 Update UI instantly without refresh
        setData(prev =>
          prev.map(item =>
            item._id === id
              ? { ...item, image: res.data.data.image } // updated path
              : item
          )
        );

        alert("Image updated!");
      }
    } catch (err) {
      console.error("Error updating:", err);
    }
  };



  if (loading) return <p style={{ textAlign: 'center', marginTop: '2rem' }}>⏳ Loading...</p>;
  if ((!states1 || states1.length === 0) && (!states2 || states2.length === 0))
    return <p style={{ textAlign: 'center', marginTop: '2rem' }}>🛑 Card is empty</p>;

  const safeArray1 = Array.isArray(states1) ? states1 : [];
  const safeArray2 = Array.isArray(states2) ? states2 : [];

  const totalCards = Math.max(safeArray1.length, safeArray2.length);
  const progressPercent = ((startIndex + cardsToShow) / totalCards) * 100;
  const visibleCards1 = safeArray1.slice(startIndex, startIndex + cardsToShow);
  const visibleCards2 = safeArray2.slice(startIndex, startIndex + cardsToShow);

  // Arrow button styles
  const arrowButtonStyle = (disabled) => ({
    position: 'absolute',
    top: '47%',
    transform: 'translateY(-50%)',
    width: windowWidth < 768 ? '35px' : '40px',
    height: windowWidth < 768 ? '35px' : '40px',
    borderRadius: '50%',
    border: 'none',
    backgroundColor: disabled ? '#bdc3c7' : '#3498db',
    color: 'white',
    fontSize: windowWidth < 768 ? '16px' : '18px',
    cursor: disabled ? 'not-allowed' : 'pointer',
    boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
    transition: 'all 0.3s ease',
    zIndex: 10,
    display: windowWidth < 768 ? 'none' : 'block',
  });

  const mobileNavStyle = { display: windowWidth >= 768 ? 'none' : 'flex', justifyContent: 'center', gap: '20px', marginTop: '20px' };
  const mobileButtonStyle = (disabled) => ({
    marginTop: '200px',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    border: 'none',
    backgroundColor: disabled ? '#bdc3c7' : '#3498db',
    color: 'white',
    fontSize: '18px',
    cursor: disabled ? 'not-allowed' : 'pointer',
    boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
    transition: 'all 0.3s ease'
  });

  // Styles
  const styles = {
    container: { maxWidth: '100%', padding: windowWidth < 768 ? '10px' : '20px', margin: '0 auto' },
    header: { textAlign: 'center', padding: windowWidth < 768 ? '10px' : '20px', marginBottom: windowWidth < 768 ? '10px' : '20px' },
    title: { fontFamily: 'initial', fontSize: windowWidth < 576 ? '1.8rem' : windowWidth < 768 ? '2.2rem' : windowWidth < 992 ? '2.8rem' : '3.5rem', fontWeight: 'bold', marginBottom: '10px', lineHeight: '1.2' },
    subtitle: { fontFamily: 'initial', fontSize: windowWidth < 768 ? '1rem' : '1.2rem', marginBottom: '10px' },
    description: { fontFamily: 'initial', fontSize: windowWidth < 768 ? '0.9rem' : '1rem', lineHeight: '1.5', maxWidth: '800px', margin: '0 auto' },
    contentWrapper: { display: 'flex', flexDirection: windowWidth < 1024 ? 'column' : 'row', backgroundColor: 'ButtonFace', padding: windowWidth < 768 ? '10px' : '20px', borderRadius: '10px', gap: windowWidth < 1024 ? '20px' : '30px' },
    animationCard: { width: windowWidth < 1024 ? '100%' : '450px', height: windowWidth < 768 ? '350px' : windowWidth < 1024 ? '450px' : '620px', position: 'relative', flexShrink: 0, marginRight: windowWidth < 1024 ? '0' : '-25px', marginTop: "10px" },
    animationImage: {
      width: '100%',
      height: isAdmin ? '141%' : '124%',
      objectFit: 'cover',
      borderRadius: '10px'
    },
    dotContainer: { display: 'flex', justifyContent: 'center', marginTop: '10px', gap: '5px' },
    dot: { height: '8px', width: '8px', backgroundColor: '#bbb', borderRadius: '50%', display: 'inline-block' },
    activeDot: { backgroundColor: '#3498db' },
    navButton: { position: 'absolute', top: '50%', transform: 'translateY(-50%)', backgroundColor: 'rgba(0,0,0,0.5)', color: 'white', border: 'none', borderRadius: '50%', width: '36px', height: '36px', cursor: 'pointer', zIndex: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px' },
    cardContainer: { flex: 1, zIndex: 1, position: 'relative', backgroundColor: 'white', borderRadius: '10px', padding: windowWidth < 768 ? '15px' : '20px', boxShadow: '0 5px 15px rgba(0,0,0,0.1)', minHeight: '500px' },
    cardRow: { display: 'flex', gap: windowWidth < 768 ? '12px' : '15px', marginBottom: windowWidth < 768 ? '15px' : '20px', overflowX: windowWidth < 820 ? 'auto' : 'hidden', padding: '10px 0', scrollSnapType: windowWidth < 820 ? 'x mandatory' : 'none', scrollbarWidth: 'none', msOverflowStyle: 'none', minHeight: '320px' }, // increased height
    card: { backgroundColor: 'white', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 3px 10px rgba(0,0,0,0.1)', transition: 'all 0.3s ease', cursor: 'pointer', minWidth: windowWidth < 576 ? '260px' : windowWidth < 820 ? '280px' : windowWidth < 992 ? '220px' : '280px', flex: windowWidth < 820 ? '0 0 auto' : '1', scrollSnapAlign: windowWidth < 820 ? 'start' : 'none', minHeight: '300px' }, // increased height
    cardImage: { width: '100%', height: windowWidth < 576 ? '200px' : windowWidth < 820 ? '220px' : windowWidth < 992 ? '240px' : '260px', objectFit: 'cover' }, // increased height
    cardContent: { padding: windowWidth < 768 ? '10px' : '15px', textAlign: 'center' },
    cardTitle: { margin: '0', fontSize: windowWidth < 576 ? '1rem' : '1.1rem', color: 'black', fontWeight: '600', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' },
    progressBar: { width: '100%', height: '6px', backgroundColor: '#e0e0e0', borderRadius: '4px', marginTop: '15px', overflow: 'hidden' },
    progressFill: { height: '100%', background: 'linear-gradient(90deg, #3498db, #e74c3c, #09c47cff)', borderRadius: '3px', transition: 'width 0.3s ease' },
    progressText: { textAlign: 'center', marginTop: '10px', fontSize: windowWidth < 576 ? '12px' : '14px', color: '#7f8c8d' }
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>🇮🇳 "Explore the States, Embrace the Soul of India!"</h1>
        <h3 style={styles.subtitle}>From the snowy Himalayas to the sunny beaches of the South – India is waiting for you.</h3>
        <p style={styles.description}>From snowy peaks to sandy shores, spiritual cities to lush forests — every Indian state offers a unique adventure. Dive into the colors, cultures, and stories that make India truly incredible. Your journey starts here..!</p>
      </div>

      <div style={styles.contentWrapper}>
        {/* Animated Image Card */}
        <div style={styles.animationCard}>
          <div style={{ position: 'relative', height: '100%' }}>
            <button style={{ ...styles.navButton, right: '10px' }} onClick={() => setCurrentIndex((prev) => (prev + 1) % Animation.length)}>&gt;</button>
            <button style={{ ...styles.navButton, left: '10px' }} onClick={() => setCurrentIndex((prev) => (prev - 1 + Animation.length) % Animation.length)}>&lt;</button>
            <img src={Animation[currentIndex]?.images} alt={`Slide ${currentIndex}`} style={styles.animationImage} loading="lazy" />
          </div>
          <div style={styles.dotContainer}>
            {Array.isArray(Animation) && Animation.map((item, i) => (<span key={i} style={i === currentIndex ? { ...styles.dot, ...styles.activeDot } : styles.dot} />))}
          </div>
        </div>

        {/* Card Container */}
        <div style={styles.cardContainer}>
          <button onClick={handlePrev} disabled={startIndex === 0} style={{ ...arrowButtonStyle(startIndex === 0) }}>&#8592;</button>
          <button onClick={handleNext} disabled={startIndex + cardsToShow >= totalCards} style={{ ...arrowButtonStyle(startIndex + cardsToShow >= totalCards), right: 0 }}>&#8594;</button>

          {/* First Row */}

          <div style={styles.cardRow}>


            {visibleCards1.map((img, i) => (
              <div key={img.id || i} style={styles.card}>
                <Link to="/Maharashtra">
                  <img
                    src={img.image ? `${BASE}${img.image}` : "/placeholder.jpg"} loading="lazy"
                    style={styles.cardImage}
                  />
                </Link>
                <div style={styles.cardContent}>
                  <h3 style={styles.cardTitle}>{img.title}</h3>
                  {user?.isAdmin && (
                    <div style={{ marginTop: '15px', display: 'flex', justifyContent: 'center', gap: '10px' }}>
                      <input
                        id={`file-${img._id}`}
                        type="file"
                        style={{ display: "none" }}
                        onChange={(e) => handleUpdate(img._id, e.target.files[0])}   // ✅ FIXED
                      />
                      <button
                        onClick={() => document.getElementById(`file-${img._id}`).click()}
                        style={{
                          padding: '8px 12px', backgroundColor: '#f39c12', color: 'white',
                          border: 'none', borderRadius: '5px', cursor: 'pointer'
                        }}
                      >
                        Update
                      </button>

                      <button onClick={() => handleDelete(img.id)} style={{ padding: '8px 12px', backgroundColor: '#e74c3c', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Delete</button>
                    </div>
                  )}

                </div>
              </div>
            ))}
          </div>

          {/* Second Row */}
          <div style={styles.cardRow}>
            {visibleCards2.map((img, i) => (
              <div key={img.id || i} style={styles.card}>
                <img
                  src={img.image ? `${BASE}${img.image}` : "/placeholder.jpg"} loading="eager"
                  style={styles.cardImage}
                />
                <div style={styles.cardContent}>
                  <h3 style={styles.cardTitle}>{img.title}</h3>
                  {user?.isAdmin && (
                    <div style={{ marginTop: '15px', display: 'flex', justifyContent: 'center', gap: '10px' }}>
                      <input
                        id={`file-${img._id}`}
                        type="file"
                        style={{ display: "none" }}
                        onChange={(e) => handleUpdate(img._id, e.target.files[0])}   // ✅ FIXED
                      />
                      <button
                        onClick={() => document.getElementById(`file-${img._id}`).click()}
                        style={{
                          padding: '8px 12px', backgroundColor: '#f39c12', color: 'white',
                          border: 'none', borderRadius: '5px', cursor: 'pointer'
                        }}
                      >
                        Update
                      </button>

                      <button onClick={() => handleDelete(img._id)} style={{ padding: '8px 12px', backgroundColor: '#e74c3c', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Delete</button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Progress Bar */}
          <div style={styles.progressBar}><div style={{ ...styles.progressFill, width: `${progressPercent}%` }}></div></div>
          <div style={styles.progressText}>Showing {startIndex + 1}-{Math.min(startIndex + cardsToShow, totalCards)} of {totalCards} destinations</div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div style={mobileNavStyle}>
        <button onClick={handlePrev} disabled={startIndex === 0} style={mobileButtonStyle(startIndex === 0)}>&lt;</button>
        <button onClick={handleNext} disabled={startIndex + cardsToShow >= totalCards} style={mobileButtonStyle(startIndex + cardsToShow >= totalCards)}>&gt;</button>
      </div>
    </div>
  );
};

export default Domestic;
