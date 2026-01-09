import React, { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useNavigate, useSearchParams } from 'react-router-dom';
// import MHeader from "../../Components/Header/MHeader";
import api from "../../utils/api";

import MaharashtraHeader from '../../Components/Header/MaharashtraHeader';
import axios from 'axios';
import HoursDropdown from './Maharashtra/HoursDropdown';
const API_URL = import.meta.env.VITE_API_URL;


// ---------- Carousel Component ----------
function ImageCarousel({ images }) {
  const [index, setIndex] = useState(0);



  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div style={{ position: 'relative', width: '100%', paddingTop: '75%', borderRadius: '12px', overflow: 'hidden' }}>
      <img
        src={images[index]}
        alt={`Slide ${index + 1}`}
        loading='lazy'
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
      />
      <button onClick={() => setIndex((i) => (i - 1 + images.length) % images.length)} style={navBtnStyle('left')}>‹</button>
      <button onClick={() => setIndex((i) => (i + 1) % images.length)} style={navBtnStyle('right')}>›</button>
      <div style={dotWrapStyle}>
        {images.map((_, i) => (
          <div key={i} onClick={() => setIndex(i)} style={{ ...dotStyle, backgroundColor: i === index ? 'white' : 'rgba(255,255,255,0.5)' }} />
        ))}
      </div>
    </div>
  );
}

const navBtnStyle = (side) => ({
  position: 'absolute',
  top: '50%',
  [side]: '10px',
  transform: 'translateY(-50%)',
  backgroundColor: 'rgba(0,0,0,0.5)',
  color: 'white',
  border: 'none',
  padding: '8px 12px',
  borderRadius: '50%',
  cursor: 'pointer',
  zIndex: 2
});

const dotWrapStyle = {
  position: 'absolute',
  bottom: '10px',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  gap: '8px',
  zIndex: 2
};

const dotStyle = {
  width: '10px',
  height: '10px',
  borderRadius: '50%',
  border: '1px solid white',
  cursor: 'pointer',
};

// ---------- Category Mapping ----------
const categories = {
  essential: {
    label: 'Essentials',
    url: `/maharashtra-cards/essential`,
  },
  travellers: {
    label: "Travellers' Choice",
    url: `/travellers-choice/gettraveller`,
  },
  family: {
    label: 'Family friendly',
    url: `/family-friendly/getfamily`,
  },
  hidden: {
    label: 'Hidden gems',
    url: `/hidden-games/gethidden-games`,

  },
  Museums: {
    label: 'Museums',
    url: `/maharashtra-museums/getallmuseums`,
  },
  outdoors: {
    label: 'Outdoors',
    url: `/outdoors/getalloutdoors`,
  },
  arts: {
    label: 'Arts & theatre',
    url: `/arts&theatre/getallarts-theatre`,
  },
  nightlife: {
    label: 'Night-life',
    url: `/night-life/getallnightlife`,
  }
};

// ---------- Main Component ----------
function Maharashtra() {
  // const location = useLocation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const initialCategory = searchParams.get('category') || localStorage.getItem('category') || 'essential';
  const [selected, setSelected] = useState(initialCategory);
  const [cardData, setCardData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    // Trigger animation on mount
    setTimeout(() => setVisible(true), 300);
  }, []);

  const fetchData = async (key) => {
  setLoading(true);

  try {
    const url = categories[key]?.url;

    if (!url) {
      console.error("Invalid category key:", key);
      setCardData([]);
      return;
    }

    const res = await api.get(url);
    setCardData(res.data || []);
    
  } catch (err) {
    console.error("Fetch error:", err);
    setCardData([]);
  } finally {
    setLoading(false);
  }
};


  useEffect(() => {
    fetchData(selected);
  }, [selected]);

  const handleCategoryChange = (key) => {
    if (key !== selected) {
      setSelected(key);
      localStorage.setItem('category', key);
      navigate(`?category=${key}`, { replace: true });
    }
  };

  const carouselItems = [
    {
      img: "https://i.pinimg.com/1200x/e2/5e/42/e25e42288c45a808d6bf52c9426db8e7.jpg",
      alt: "Malaysia",
      placeholder: "Search Places in Malaysia",
      title: "Explore Malaysia with",
      packageDis: "50+ New Packages",
      loading: "lazy",
    },
    {
      img: "https://i.pinimg.com/736x/20/e9/e5/20e9e5115a8ed1fed84542f4923d393e.jpg",
      alt: "Assam",
      placeholder: "Search Places in Assam",
      title: "Explore Assam with",
      packageDis: "45+ New Packages",
      loading: "lazy",
    },
    {
      img: "https://i.pinimg.com/1200x/3d/f2/69/3df269be901bf8063b8f7b385d4418d2.jpg",
      alt: "Dubai",
      placeholder: "Search Places in Dubai",
      title: "Explore Dubai with",
      packageDis: "54+ New Packages",
      loading: "lazy",
    },
    {
      img: "https://image.cnbcfm.com/api/v1/image/107393342-1711505001678-gettyimages-552552059-d71652b4-3459-4fda-a90c-88632afbe92c.jpeg?v=1711505112&w=1920&h=1080",
      alt: "India",
      placeholder: "Search Places in India",
      title: "Explore India with",
      packageDis: "28+ New Packages",
      loading: "lazy",
    },
  ];





  return (
    <>
      {/* <MaharashtraHeader /> */}
      <style>{`
        /* Prevent horizontal scrolling */
        * {
          box-sizing: border-box;
        }
        
        body, html {
          overflow-x: hidden;
          max-width: 100vw;
        }

        .carousel-item img {
          width: 100%;
          height: auto;
          max-height: 500px;
          object-fit: cover;
        }

        .category-button {
          display: flex;
          
          flex-wrap: wrap;
          justify-content: center;
          gap: 12px;
          margin-top: 16px;
        }

        .card-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
          padding: 24px;
        }

        .carousel-caption input[type="search"] {
          max-width: 500px;
          width: 90%;
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {

          .carousel-caption p {
            font-size: 14px;
          }

          .carousel-caption input[type="search"] {
            font-size: 14px;
            width: 95%;
          }

          .card-grid {
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
            padding: 20px 10px;
          }
            .category-buttons {
          margin: 30px 0;
          display: flex;
          gap: 15px;
        }

        .category-buttons button {
          padding: 10px 20px;
          border-radius: 8px;
          border: 1px solid #007bff;
          background: white;
          color: #007bff;
          font-weight: bold;
          cursor: pointer;
          transition: 0.3s ease;
        }

        .category-buttons button:hover {
          background: #007bff;
          color: white;
        }

          .category-button {
            gap: 8px;
            color:red;
          }
        }

        @media (max-width: 480px) {

          .card-grid {
            grid-template-columns: 1fr;
            gap: 16px;
            padding: 16px 5px;
          }

          .carousel-caption input[type="search"] {
            width: 98%;
            font-size: 12px;
          }

          .carousel-caption p {
            font-size: 12px;
          }

          .category-button {
            gap: 6px;
          }

          .btn {
            font-size: 12px;
            padding: 6px 12px;
            
          }

          h2 {
            font-size: 1.5rem;
          }

          h4 {
            font-size: 1.2rem;
          }
        }

        @media (max-width: 360px) {

          .btn {
            font-size: 11px;
            padding: 5px 10px;
          }
        }
      `}</style>

      <br />
      {/* Page Content */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          margin: "120px 20px 40px 20px",
          flexWrap: "wrap",
          gap: "40px",
        }}
      >
        {/* Left Side Image */}
        <div style={{ flex: "1 1 400px", minWidth: "300px" }}>
          <img
            src="MH1.png"
            alt="Maharashtra"
            style={{
              width: "100%",
              height: "450px",
              // borderTopRightRadius: "80px",
              // borderBottomLeftRadius: "80px",
              borderRadius: "20px",
              objectFit: "cover",
              boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
            }}
          />
        </div>

        {/* Right Side Text with Animation */}
        <div
          className={`explore-text-container ${visible ? "visible" : ""}`}
          style={{ flex: "1 1 400px", minWidth: "300px" }}
        >
          <h1
            className="explore-heading"
            style={{
              fontSize: "clamp(3rem, 8vw, 5.5rem)",
              fontWeight: "800",
              background: "linear-gradient(135deg, #FF6B35, #F7931E, #FFB84D)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              marginBottom: "20px",
              letterSpacing: "-0.02em",
              lineHeight: "1.1",
              textTransform: "uppercase",
            }}
          >
            Explore<br />Maharashtra
          </h1>
          <p
            className="explore-subtitle"
            style={{
              fontSize: "clamp(1.1rem, 2vw, 1.4rem)",
              color: "#555",
              lineHeight: "1.6",
              fontWeight: "400",
              maxWidth: "500px",
            }}
          >
            Discover forts, beaches, culture, and traditions — all in one vibrant state.
          </p>
        </div>
      </div>

      {/* Category Buttons */}
      <div
        className="category-button " 
        style={{
          display: "flex",
          gap: "15px",
          flexWrap: "wrap",
          justifyContent: "center",
          margin: "60px 20px 40px 20px",
        }}
      >
        {["Hotels", "Things To Do", "Restaurants", "Holiday Homes"].map((category) => (
          <button
            key={category}
            style={{
              padding: "14px 32px",
              fontSize: "1rem",
              fontWeight: "600",
              border: "2px solid #FF6B35",
              background: "transparent",
              color: "#FF6B35",
              borderRadius: "50px",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.target.style.background = "#FF6B35";
              e.target.style.color = "white";
              e.target.style.transform = "translateY(-2px)";
              e.target.style.boxShadow = "0 8px 20px rgba(255,107,53,0.3)";
            }}
            onMouseLeave={(e) => {
              e.target.style.background = "transparent";
              e.target.style.color = "#FF6B35";
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = "none";
            }}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Example Cards
<div className="cards-grid">
  <div className="card">
    <img src="/example1.jpg" alt="Place 1" />
    <div className="card-content">
      <h4>Beautiful Beach</h4>
      <p>Enjoy the serene beauty of Maharashtra beaches.</p>
    </div>
  </div>

  <div className="card">
    <img src="/example2.jpg" alt="Place 2" />
    <div className="card-content">
      <h4>Luxury Hotel</h4>
      <p>Stay in comfort at top-rated hotels.</p>
    </div>
  </div>

  <div className="card">
    <img src="/example3.jpg" alt="Place 3" />
    <div className="card-content">
      <h4>Historic Forts</h4>
      <p>Discover the rich history of Maharashtra.</p>
    </div>
  </div>
</div> */}

      {/* Carousel */}
      <div id="demo" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          {carouselItems.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#demo"
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>

        <div className="carousel-inner">
          {carouselItems.map((item, index) => (
            <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
              <img src={item.img} alt={item.alt} loading='lazy' className="d-block w-100" />
              <div className="carousel-caption d-none d-md-block">
                <input
                  type="search"
                  placeholder={item.placeholder}
                  className="form-control m-auto text-primary "
                />
                <p className="mt-4 mb-0">
                  {item.title} <a href="#">{item.packageDis}</a>
                </p>
              </div>
            </div>
          ))}
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
        </button>
      </div >

      {/* Category Buttons */}
      < div className="container mt-5" >
        <div>
          <h2>Maharashtra, India</h2>
          <br />
          <h4>Maharashtra: A Journey Through the Heart of India</h4>
          <span>Pick a category to filter your recs</span>
        </div>


        <div className="category-buttons">
          {Object.entries(categories).map(([key, { label }]) => (
            <button
              key={key}
              onClick={() => handleCategoryChange(key)}
              className={`btn mt-3 m-1 text-decoration-none border border-2 border-success rounded-3 text-dark ${selected === key ? 'btn-info' : 'btn-outline-info '
                }`}
            >
              {label}
            </button>
          ))}
        </div>

        <hr />



        {/* Cards */}
        {
          loading ? (
            <p className="text-center mt-4">⏳ Loading...</p>
          ) : cardData.length === 0 ? (
            <p className="text-center mt-4">🛑 No Cards Available</p>
          ) : (
            <div className="card-grid">
              {Array.isArray(cardData) && cardData.map((card, i) => (
                <div key={i} style={{ backgroundColor: '#fff', borderRadius: '16px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)', overflow: 'hidden' }}>
                  <ImageCarousel images={card.images} loading="lazy" />
                  <h2 style={{ padding: '12px 16px', fontSize: '1.25rem', fontWeight: 600 }}>
                    <u><Link to={card.link} style={{ color: 'black' }}>{card.title}</Link></u>
                  </h2>
                  <h6 style={{ marginLeft: '14px' }}>{card.subtitle}</h6>
                </div>
              ))}
            </div>
          )
        }

        <Outlet />
      </div >
    </>
  );
}

export default Maharashtra;