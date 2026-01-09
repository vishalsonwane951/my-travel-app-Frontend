import axios from 'axios';
import React, { useEffect, useState } from 'react';
import api from '../utils/api';

const axios_URL = import.meta.env.VITE_axios_URL;

const International = () => {
  const [International1, setInternational1] = useState([]);
  const [International2, setInternational2] = useState([]);
  const [loading, setLoading] = useState(true);
  const [startIndex, setStartIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Handle responsive card count and window width
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setWindowWidth(width);
      
      if (width < 768) {
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

  // Fetch the data from Backend
  useEffect(() => {
    async function fetchPackages() {
      try {
        const [res1, res2] = await Promise.all([
          api.get('/International-tours/getallInternational'),
          api.get('/International-tours/getallInternational2'),
        ]);
        setInternational1(res1.data);
        setInternational2(res2.data);
      } catch (err) {
        console.error("Error fetching Data:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchPackages();
  }, []);

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(prev => Math.max(0, prev - cardsToShow));
    }
  };

  const handleNext = () => {
    const totalCards = Math.max(International1.length, International2.length);
    if (startIndex + cardsToShow < totalCards) {
      setStartIndex(prev => prev + cardsToShow);
    }
  };

  if (loading) {
    return <div style={{ textAlign: 'center', marginTop: '2rem' }}>⏳ Loading...</div>;
  }

  if ((!International1.length) && (!International2.length)) {
    return <div style={{ textAlign: 'center', marginTop: '2rem' }}>🛑 Card is empty</div>;
  }

  const totalCards = Math.max(International1.length, International2.length);
  const progressPercent = ((startIndex + cardsToShow) / totalCards) * 100;
  const visibleCards1 = International1.slice(startIndex, startIndex + cardsToShow);
  const visibleCards2 = International2.slice(startIndex, startIndex + cardsToShow);

  // Styles
  const containerStyle = {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f8f9fa',
    minHeight: '100vh',
    padding: '20px 0'
  };

  const headerContainerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
    textAlign: 'center',
    marginBottom: windowWidth < 768 ? '20px' : '30px'
  };

  const titleStyle = {
    fontSize: windowWidth < 768 ? '2rem' : windowWidth < 1024 ? '2.5rem' : '3rem',
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: '15px',
    textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
  };

  const subtitleStyle = {
    fontSize: windowWidth < 768 ? '1.2rem' : windowWidth < 1024 ? '1.3rem' : '1.5rem',
    color: '#34495e',
    fontWeight: '300',
    marginBottom: windowWidth < 768 ? '15px' : '20px'
  };

  const descriptionStyle = {
    fontSize: windowWidth < 768 ? '1rem' : '1.1rem',
    color: '#666',
    lineHeight: '1.6',
    maxWidth: '800px',
    margin: '0 auto',
    padding: windowWidth < 768 ? '0 10px' : '0'
  };

  const carouselContainerStyle = {
    position: 'relative',
    width: '100%',
    padding: '0 10px',
    boxSizing: 'border-box',
    maxWidth: '1200px',
    margin: '0 auto'
  };

  const carouselInnerStyle = {
    backgroundColor: 'white',
    borderRadius: '15px',
    padding: windowWidth < 768 ? '15px' : '20px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
    position: 'relative'
  };

  const arrowButtonStyle = (disabled) => ({
    position: 'absolute',
    top: '46%',
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
    display: windowWidth < 768 ? 'none' : 'block'
  });

  const cardRowStyle = {
    display: 'flex',
    gap: windowWidth < 768 ? '10px' : '15px',
    marginBottom: windowWidth < 768 ? '15px' : '20px',
    justifyContent: 'center',
    width: '100%',
    overflowX: windowWidth < 768 ? 'auto' : 'visible',
    padding: '10px 0',
    scrollbarWidth: 'none',
    msOverflowStyle: 'none'
  };

  const cardStyle = {
    backgroundColor: 'white',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 6px 20px rgba(0,0,0,0.1)',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    minWidth: windowWidth < 768 ? '280px' : 'auto',
    flex: `0 0 calc(${100 / cardsToShow}% - ${windowWidth < 768 ? '10px' : '15px'})`
  };

  const cardImageStyle = {
    width: '100%',
    height: windowWidth < 768 ? '160px' : '180px',
    objectFit: 'cover',
    display: 'block'
  };

  const cardContentStyle = {
    padding: '15px',
    textAlign: 'center'
  };

  const cardTitleStyle = {
    margin: '0',
    fontSize: '1.2rem',
    color: '#2c3e50',
    fontWeight: '600'
  };

  const progressBarStyle = {
    width: '100%',
    height: '6px',
    backgroundColor: '#ecf0f1',
    borderRadius: '3px',
    overflow: 'hidden',
    margin: '20px 0'
  };

  const progressFillStyle = {
    height: '100%',
    background: 'linear-gradient(90deg, #3498db, #e74c3c, #09c47cff)',
    borderRadius: '3px',
    width: `${Math.min(progressPercent, 100)}%`,
    transition: 'width 0.3s ease'
  };

  const progressTextStyle = {
    textAlign: 'center',
    color: '#7f8c8d',
    fontSize: '14px',
    fontWeight: '500'
  };

  const mobileNavStyle = {
    display: windowWidth >= 768 ? 'none' : 'flex',
    justifyContent: 'center',
    gap: '20px',
    marginTop: '20px'
  };

  const mobileButtonStyle = (disabled) => ({
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

  return (
    <div style={containerStyle}>
      {/* Header Section */}
      <div style={headerContainerStyle}>
        <h1 style={titleStyle}>Discover India's Beauty</h1>
        <h3 style={subtitleStyle}>Explore Incredible Destinations Across the Country</h3>
        <p style={descriptionStyle}>
          Embark on a journey through India's diverse landscapes, rich culture, and breathtaking destinations.
          From the beaches of Goa to the mountains of Himachal Pradesh, discover the incredible diversity
          that makes India a traveler's paradise.
        </p>
      </div>

      {/* Carousel Section */}
      <div style={carouselContainerStyle}>
        <div style={carouselInnerStyle}>
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            disabled={startIndex === 0}
            style={{
              ...arrowButtonStyle(startIndex === 0),
              left: windowWidth < 768 ? '5px' : '10px'
            }}
            onMouseEnter={(e) => {
              if (startIndex !== 0) {
                e.target.style.backgroundColor = '#2980b9';
                e.target.style.transform = 'translateY(-50%) scale(1.1)';
              }
            }}
            onMouseLeave={(e) => {
              if (startIndex !== 0) {
                e.target.style.backgroundColor = '#3498db';
                e.target.style.transform = 'translateY(-50%) scale(1)';
              }
            }}
          >
            &#8592;
          </button>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            disabled={startIndex + cardsToShow >= totalCards}
            style={{
              ...arrowButtonStyle(startIndex + cardsToShow >= totalCards),
              right: windowWidth < 768 ? '5px' : '10px'
            }}
            onMouseEnter={(e) => {
              if (startIndex + cardsToShow < totalCards) {
                e.target.style.backgroundColor = '#2980b9';
                e.target.style.transform = 'translateY(-50%) scale(1.1)';
              }
            }}
            onMouseLeave={(e) => {
              if (startIndex + cardsToShow < totalCards) {
                e.target.style.backgroundColor = '#3498db';
                e.target.style.transform = 'translateY(-50%) scale(1)';
              }
            }}
          >
            &#8594;
          </button>

          {/* First Row */}
          <div style={cardRowStyle}>
            {Array.isArray(visibleCards1) && visibleCards1.map((img, i) => ( 
              <div
                key={`row1-${img.id || i}`}
                style={cardStyle}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.1)';
                }}
              >
                <img
                  src={img.images}
                  alt={img.title}
                  loading="lazy"
                  style={cardImageStyle}
                />
                <div style={cardContentStyle}>
                  <h3 style={cardTitleStyle}>{img.title}</h3>
                </div>
              </div>
            ))}
          </div>

          {/* Second Row */}
          <div style={cardRowStyle}>
            {Array.isArray(visibleCards2) && visibleCards2.map((img, i) => (
              <div
                key={`row2-${img.id || i}`}
                style={cardStyle}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.1)';
                }}
              >
                <img
                  src={img.images}
                  alt={img.title}
                  loading="lazy"
                  style={cardImageStyle}
                />
                <div style={cardContentStyle}>
                  <h3 style={cardTitleStyle}>{img.title}</h3>
                </div>
              </div>
            ))}
          </div>

          {/* Progress Bar */}
          <div style={progressBarStyle}>
            <div style={progressFillStyle} />
          </div>

          {/* Progress Text */}
          <div style={progressTextStyle}>
            Showing {startIndex + 1}-{Math.min(startIndex + cardsToShow, totalCards)} of {totalCards} destinations
          </div>

          {/* Mobile Navigation Buttons */}
          <div style={mobileNavStyle}>
            <button
              onClick={handlePrev}
              disabled={startIndex === 0}
              style={mobileButtonStyle(startIndex === 0)}
            >
              &#8592;
            </button>
            <button
              onClick={handleNext}
              disabled={startIndex + cardsToShow >= totalCards}
              style={mobileButtonStyle(startIndex + cardsToShow >= totalCards)}
            >
              &#8594;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default International;