import React, { Suspense, useEffect, lazy, useState } from 'react';
import { useLocation } from "react-router-dom";
import { Outlet, Link } from 'react-router-dom';
import "../Components/Header/Header.jsx";
const Domestic = lazy(() => import('./Domestic'));
const International = lazy(() => import('./International'));
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Footer from '../Components/Footer/Footer.jsx';
import axios from 'axios';
import api from '../utils/api.js'
import { AuthContext } from '../Context/AuthContext.jsx';
import UploadImagesByTitle from '../Components/ImageUpload.jsx';
import { useContext } from 'react';
import BookingForm from '../Components/BookingForm/BookingForm.jsx';
// import Header from '../Components/Header/Header.jsx';

function Start() {
  const { user } = useContext(AuthContext);
  const [isVisible, setIsVisible] = useState(false);
  const [index, setIndex] = useState(0);
  const [favourites, setFavourites] = useState([]);
  const [hoveredHeart, setHoveredHeart] = useState(null);
  const [ratings, setRatings] = useState({});
  const [tourCards, setTourCards] = useState();
  const [showBooking, setShowBooking] = useState(false);



  const location = useLocation();
  const testimonials = [
    `"The best travel experience I've ever had! Highly recommended." – Priya S.`,
    `"Desi V Desi made our family trip unforgettable and smooth." – Rajesh K.`,
    `"Excellent service and amazing tours, will book again!" – Anjali M.`,
    `"From booking to the end, everything was seamless. Five stars!" – Sunil T.`
  ];

  // useEffect(() => {
  //   if (location.state?.scrollToAbout) {
  //     const aboutSection = document.getElementById("about-us");
  //     if (aboutSection) {
  //       // Delay slightly to ensure content is rendered
  //       setTimeout(() => {
  //         aboutSection.scrollIntoView({ behavior: "smooth" });
  //       }, 300);
  //     }
  //   }
  // }, [location]);

  const handleBookNow = () => {
    if (!user) {
      setShowAlert(true);       // show alert popup
      setPendingBooking(true);  // mark booking pending
    } else {
      setShowBooking(true);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const carouselItems = [
    { id: 1, img: "Malaysia.png", alt: "Malaysia", placeholder: "Search Places in Malaysia", title: "Explore Malaysia with", packageDis: "50+ New Packages" },
    { id: 2, img: "005.png", alt: "Assam", placeholder: "Search Places in Assam", title: "Explore Assam with", packageDis: "45+ New Packages" },
    { id: 3, img: "006.png", alt: "Dubai", placeholder: "Search Places in Dubai", title: "Explore Dubai with", packageDis: "54+ New Packages" },
    { id: 4, img: "007.png", alt: "Assam", placeholder: "Search Places in Assam", title: "Explore Assam with", packageDis: "28+ New Packages" },
  ];

  // const tourCards = [
  //   { id:1, img: "002.jpg", title: "Bombay", desc: "Surprise your loved ones with a gift card for unforgettable experiences." },
  //   { id:2, img: "009.png", title: "Winter Kayak Tour", desc: "2 h kayak tour" },
  //   { id:3, img: "010.png", title: "Gdansk by Kayak", desc: "Everyday 2.5 h kayak tour" },
  //   { id:4, img: "011.png", title: "Sunset Gdansk by Kayak", desc: "2.5 h kayak tour" },
  //   { id:5, img: "012.png", title: "Gdansk Kayak Tour Private", desc: "2.5 h private kayak tour" },
  // ];

  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  const northIndiaStates = [
    { img: "https://i.pinimg.com/736x/5a/db/60/5adb6045c7f5e7701638fa12a5d367ef.jpg", title: "Haryana" },
    { img: "https://i.pinimg.com/736x/97/36/b6/9736b63fdfd6e297d767dd1cc53f8201.jpg", title: "Jammu & Kashmir" },
    { img: "https://i.pinimg.com/736x/19/1a/8f/191a8fc4ea0445877c0f774b9c6778e5.jpg", title: "Punjab" },
    { img: "https://i.pinimg.com/736x/bb/14/be/bb14be40be2c68bd959490d4e483e9f9.jpg", title: "Rajasthan" },
    { img: "https://i.pinimg.com/1200x/35/29/bd/3529bde46e2ecb90db33bfe2854ca6a3.jpg", title: "Uttar Pradesh" },
    { img: "https://i.pinimg.com/1200x/85/0c/7a/850c7a1be03a931dbaa443301bc0dcbc.jpg", title: "Himachal Pradesh" },
    { img: "https://i.pinimg.com/1200x/48/e5/1a/48e51a0e4f798832e10ff0c43f925e64.jpg", title: "Delhi-The Caxiostal State Of INDIA" },
    { img: "https://i.pinimg.com/1200x/7c/46/c5/7c46c5bdbe8f89364e4da64610e60c45.jpg", title: "Ladakh" },
  ];

  // const scrollToAbout = (e) => {
  //   e.preventDefault();
  //   const aboutSection = document.getElementById("about-us");
  //   if (aboutSection) {
  //     aboutSection.scrollIntoView({ behavior: "smooth" });
  //   }
  // };

  // const scrollToContact = (e) => {
  //   e.preventDefault();
  //   const contactSection = document.getElementById("footer");
  //   if (contactSection) {
  //     contactSection.scrollIntoView({ behavior: "smooth" });
  //   }
  // };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };


  const styles = {
    button: {
      position: "fixed",
      bottom: "20px",
      right: "20px",
      backgroundColor: "#007bff",
      color: "white",
      border: "none",
      borderRadius: "50%",
      width: "40px",
      height: "40px",
      fontSize: "18px",
      cursor: "pointer",
      boxShadow: "0 4px 6px rgba(0,0,0,0.2)",
      zIndex: 999
    }
  };
  useEffect(() => {
    const fetchTours = async () => {
      try {
        const { data } = await api.get("/favourites/getCards"); // <-- adjust API
        setTourCards(data);
      } catch (err) {
        console.error("Failed to fetch tours", err);
      }
    };
    fetchTours();
  }, []);

  // 🟢 Fetch favourites on mount
  //  useEffect(() => {
  //   const fetchFavourites = async () => {
  //     try {
  //       const res = await axios.get("/api/favourites", {
  //         headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  //       });

  //       // Axios wraps response inside res.data
  //       const favourites = res.data;

  //       // Ensure it's an array before mapping
  //       if (Array.isArray(favourites)) {
  //         setFavourites(favourites.map((fav) => fav._id));
  //       } else {
  //         console.error("Favourites is not an array:", favourites);
  //       }
  //     } catch (err) {
  //       console.error("Failed to fetch favourites", err);
  //     }
  //   };
  //   fetchFavourites();
  // }, []);


  // 🟢 Toggle favourite
  const toggleFavourite = async (id) => {
    try {
      const res = await api.put(`/favourites/${id}/toggle`,
        {},
        { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
      );

      const { status } = res.data;

      setFavourites((prev) =>
        status === "like"
          ? [...prev, id]                // add if liked
          : prev.filter((favId) => favId !== id) // remove if unliked (deleted from DB)
      );
    } catch (err) {
      console.error("Failed to toggle favourite", err);
    }
  };



  // 🟢 Handle ratings (local only for now)
  const handleRating = (cardId, star) => {
    setRatings((prev) => ({
      ...prev,
      [cardId]: star,
    }));
  };



  return (
    <>

      {/* <UploadImagesByTitle/> */}

      {/* <marquee behavior="scroll" direction="left">
        Welcome to Desi V Desi Tours And Travels <Link to="services">Click here</Link> to explore the world with us...!
      </marquee> */}

      <div id="demo" className="carousel slide" data-bs-ride="carousel">
        {/* Indicators */}
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

        {/* Slides */}
        <div className="carousel-inner">
          {carouselItems.map((item, index) => (
            <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
              <img src={item.img} alt={item.alt} loading="lazy" className="d-block w-100" />
              <div className="carousel-caption d-none d-md-block">
                <input type="search" placeholder={item.placeholder} className="form-control m-auto text-primary" />
                <p className="mt-4 mb-0">
                  {item.title} <a href="#">{item.packageDis}</a>
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
        </button>
      </div>

      {/* Reload About Us Page via Outlet */}
      {/* <Outlet /> */}

      {/* Tour Cards Section */}
      <div className="container text-center my-5">
        <h1 className="font">
          Let us plan you a <br />
          perfect <strong style={{ color: 'red' }}>India Holiday</strong>
        </h1>
        <h5>
          Custom‑Crafted Tour Packages for Unforgettable Holiday Experiences in India.
        </h5>

        <Carousel
          responsive={responsive}
          infinite={false}
          arrows
          keyBoardControl
          itemClass="px-2"
          containerClass="py-4"
          showDots={false}

        >
          {tourCards?.length > 0 ? (
            tourCards.map((card) => (
              <div
                key={card._id} // ✅ use _id from MongoDB
                style={{
                  background: "white",
                  borderRadius: "12px",
                  overflow: "hidden",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                }}
              >
                {/* Card Image + Heart + Year Badge */}
                <div style={{ position: "relative" }}>
                  <img
                    src={card.img}
                    alt={card.title}
                    loading="lazy"
                    style={{
                      width: "100%",
                      height: "200px",
                      objectFit: "cover",
                      borderTopLeftRadius: "12px",
                      borderTopRightRadius: "12px",
                    }}
                  />

                  {/* ❤️ Heart Icon */}
                  <div
                    onClick={() => toggleFavourite(card._id)}
                    onMouseEnter={() => setHoveredHeart(card._id)}
                    onMouseLeave={() => setHoveredHeart(null)}
                    style={{
                      position: "absolute",
                      top: "10px",
                      left: "10px",
                      cursor: "pointer",
                      zIndex: 10,
                      pointerEvents: "auto",
                    }}
                  >
                    {/* Tooltip */}
                    {hoveredHeart === card._id && (
                      <div
                        style={{
                          position: "absolute",
                          top: "32px",
                          left: "0",
                          minWidth: "max-content",
                          background: "black",
                          color: "white",
                          fontSize: "12px",
                          padding: "4px 8px",
                          borderRadius: "6px",
                          whiteSpace: "nowrap",
                          opacity: 0.9,
                          zIndex: 20,
                        }}
                      >
                        {favourites.includes(card._id)
                          ? "Remove from Favourite"
                          : "Add to Favourite"}
                      </div>
                    )}

                    {/* Heart Icon */}
                    <span
                      style={{
                        display: "inline-block",
                        transition: "transform 0.2s ease, box-shadow 0.2s ease",
                        transform:
                          hoveredHeart === card._id ? "scale(1.2)" : "scale(1)",
                        transformOrigin: "center center",
                      }}
                    >
                      {favourites.includes(card._id) ? "❤" : "🤍"}
                    </span>
                  </div>

                  {/* Year Badge */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: "10px",
                      left: "10px",
                      background: "#00af87",
                      color: "white",
                      fontSize: "12px",
                      padding: "4px 6px",
                      borderRadius: "6px",
                      fontWeight: "bold",
                    }}
                  >
                    2025
                  </div>
                </div>

                {/* Card Body */}
                <div style={{ padding: "12px" }}>
                  <h5
                    style={{
                      fontSize: "16px",
                      fontWeight: "bold",
                      marginBottom: "6px",
                    }}
                  >
                    {card.title}
                  </h5>

                  {/* ⭐ Ratings */}
                  <div style={{ display: "flex", cursor: "pointer" }}>
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span
                        key={star}
                        onClick={() => handleRating(card._id, star)}
                        style={{
                          color:
                            star <= (ratings[card._id] || 0) ? "#FFD700" : "#ccc",
                          fontSize: "22px",
                          marginRight: "2px",
                          transition: "color 0.2s",
                        }}
                      >
                        ★
                      </span>
                    ))}
                  </div>

                  {/* Category */}
                  <p
                    style={{
                      color: "#555",
                      fontSize: "14px",
                      marginBottom: 0,
                    }}
                  >
                    {card.category}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p className='center' style={{ textAlign: 'center', marginTop: '2rem' }}>⏳ Loading...</p>
          )}
        </Carousel >
      </div>

      {/* <BookingPopup></BookingPopup> */}
      {/* <DellaAdventurePark/> */}

      {/* Domestic Section */}
      <Suspense fallback={<div className="loader-container"><div className="spinner"></div></div>}>
        <Domestic />
      </Suspense>

      <Suspense fallback={<div className="loader-container"><div className="spinner"></div></div>}>
        <International />
      </Suspense>

      {/* North India States */}
      <div className="container text-center text-uppercase text-muted my-5">
        <h1>States in North India</h1>
        <div className="row mt-4">
          {northIndiaStates.map((state, i) => (
            <div className="col-md-4" key={i}>
              <img
                src={state.img}
                alt={`img${i + 1}`}
                loading="lazy"
                className="card-img-top mb-2"
                style={{ maxHeight: "200px", objectFit: "cover" }}
              />
              <p>
                <a href="#" className="text-decoration-none">{state.title}</a>
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* About Section */}

      <div id='about-us'>
        {/* Hero Section */}
        <div className="hero-section m-5">
          <div className="hero-content">
            <p className="section-subtitle">~About Us</p>
            <h1 className="hero-title">
              WELCOME TO <br />
              <span className="highlight">DESI VDESI</span> <br />
              TOUR'S
            </h1>
          </div>
        </div>

        {/* Main Content */}
        <div className="about-container">
          <div className="about-content">
            {/* Left side - Founder info */}
            <div className="about-text">
              <div className="founder-section">
                <img
                  src="/photo2.jpg"
                  alt="Founder"
                  loading="lazy"
                  className="founder-image"
                />
                <p className="founder-quote">
                  We are one of the leading tour operators in Maharashtra for last 36 years & are known
                  as experts in field of Domestic as well as International tours. Currently company is
                  transporting around 15000 + satisfied tourists around the year through group as well
                  as customized tours. With Domestic and international packages we also provide services
                  like Air-tickets, visa, travel insurance, foreign exchange also and are known as "One
                  stop Solution for all of one's tourist needs."
                </p>
                <p className="founder-signature">~MR.SONWANE</p>
              </div>
            </div>

            {/* Right side - Rotating testimonial + CTA */}
            <div className="about-image testimonial-wrapper">
              <div className="testimonial-box" key={index}>
                <p className="testimonial-text">“{testimonials[index]}”</p>
              </div>
              <button className="cta-button" onClick={handleBookNow} >
                Book Your Tour Now
              </button>
            </div>
          </div>

          {showBooking && (
            <BookingForm
              user={user}
              onClose={() => setShowBooking(false)}
            />
          )}

          {/* Bottom message under both sides */}
          <div className="about-footer">
            <hr className="separator" />
            <p className="footer-text">
              Join thousands of happy travelers and explore the world with Desi V Desi Tours — Your trusted travel partner for 36+ years.
            </p>
          </div>
        </div>

        {/* Scroll-to-top button */}
        {isVisible && (
          <button onClick={scrollToTop} style={styles.button}>
            ⬆
          </button>
        )}

        <style jsx="true">{`
        @import url('https://fonts.googleaxioss.com/css2?family=Merriweather:ital,wght@0,400;0,700;1,400&family=Playfair+Display:wght@700&display=swap');

        /* General Styles */
        #about-us {
          font-family: 'Merriweather', serif;
          color: #2c2c2c;
          background-color: #faf9f6;
          line-height: 1.7;
          padding-bottom: 4rem;
        }

        /* Hero Section */
        .hero-section {
          background: linear-gradient(rgba(44, 44, 44, 0.75), rgba(44, 44, 44, 0.75)),
        url('/travel-bg.jpg') center/cover no-repeat;
          height: 50vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: #f3e6d9;
          padding: 0 20px;
          box-shadow: inset 0 0 30px rgba(0,0,0,0.7);
          border-bottom: 4px solid #bfa76f;
        }

        .hero-content {
          max-width: 850px;
        }

        .section-subtitle {
          font-family: 'Playfair Display', serif;
          font-size: 1.2rem;
          letter-spacing: 6px;
          margin-bottom: 1.2rem;
          color: #bfa76f;
          text-transform: uppercase;
          font-weight: 700;
          text-shadow: 1px 1px 2px rgba(0,0,0,0.6);
        }

        .hero-title {
          font-family: 'Playfair Display', serif;
          font-size: 3.8rem;
          font-weight: 700;
          line-height: 1.1;
          margin-bottom: 1.8rem;
          text-shadow: 2px 2px 6px rgba(0,0,0,0.7);
        }

        .highlight {
          color: #bfa76f;
          letter-spacing: 3px;
        }

        /* About Content */
        .about-container {
          max-width: 1100px;
          margin: 5rem auto 0 auto;
          padding: 0 30px;
        }

        .about-content {
          display: flex;
          flex-wrap: wrap;
          gap: 3.5rem;
          align-items: flex-start;
          justify-content: center;
        }

        /* Left side */
        .about-text {
          flex: 1;
          min-width: 320px;
        }

        .founder-section {
          margin-bottom: 3.5rem;
          background-color: #fff;
          padding: 2rem 2.5rem;
          border-radius: 12px;
          box-shadow: 0 8px 24px rgba(191, 167, 111, 0.15);
          border: 1.5px solid #bfa76f;
        }

        .founder-image {
          float: left;
          shape-outside: circle(50%);
          border-radius: 50%;
          width: 180px;
          height: 180px;
          object-fit: cover;
          margin-right: 2.5rem;
          margin-bottom: 1.5rem;
          border: 4px solid #bfa76f;
          box-shadow: 0 4px 15px rgba(191, 167, 111, 0.3);
          transition: transform 0.3s ease;
          cursor: default;
        }
        .founder-image:hover {
          transform: scale(1.05);
          box-shadow: 0 8px 20px rgba(191, 167, 111, 0.5);
        }

        .founder-quote {
          font-size: 1.15rem;
          margin-bottom: 1.8rem;
          text-align: justify;
          color: #4b4b4b;
          font-style: italic;
          letter-spacing: 0.02em;
          line-height: 1.75;
        }

        .founder-signature {
          font-family: 'Playfair Display', serif;
          font-weight: 700;
          color: #bfa76f;
          font-style: italic;
          text-align: right;
          font-size: 1.4rem;
          letter-spacing: 0.06em;
          user-select: none;
          text-shadow: 1px 1px 3px rgba(191, 167, 111, 0.6);
        }

        /* Right side */
        .about-image {
          flex: 1;
          min-width: 320px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 1.5rem;
        }

        .testimonial-wrapper {
          width: 100%;
          max-width: 420px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .testimonial-box {
          background: #f9f4e6;
          border: 2px solid #bfa76f;
          padding: 3rem 2rem;
          border-radius: 12px;
          font-style: italic;
          color: #4b4b4b;
          font-family: 'Merriweather', serif;
          font-size: 1.25rem;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 250px;
          box-shadow: 0 10px 25px rgba(191, 167, 111, 0.2);
          user-select: none;
          transition: opacity 0.5s ease-in-out;
          text-align: center;
        }

        .testimonial-text {
          max-width: 350px;
          margin: 0 auto;
        }

        /* CTA Button */
        .cta-button {
          background-color: #bfa76f;
          color: #fff;
          border: none;
          border-radius: 30px;
          padding: 0.8rem 2.5rem;
          font-family: 'Playfair Display', serif;
          font-weight: 700;
          font-size: 1.1rem;
          cursor: pointer;
          box-shadow: 0 5px 15px rgba(191, 167, 111, 0.4);
          transition: background-color 0.3s ease, box-shadow 0.3s ease;
          user-select: none;
        }
        .cta-button:hover {
          background-color: #a68f4f;
          box-shadow: 0 8px 20px rgba(166, 143, 79, 0.7);
        }
        .cta-button:focus {
          outline: 2px solid #fff;
          outline-offset: 2px;
        }

        /* Bottom message under both sides */
        .about-footer {
          margin-top: 4rem;
          text-align: center;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
          padding: 0 1rem;
          color: #6a5f3c;
          font-family: 'Merriweather', serif;
          font-style: italic;
          font-size: 1.15rem;
          user-select: none;
        }

        .separator {
          width: 120px;
          margin: 0 auto 1.2rem auto;
          border: 0;
          border-top: 3px solid #bfa76f;
          border-radius: 2px;
        }

        /* Responsive Design */
        @media (max-width: 900px) {
          .hero-title {
            font-size: 3rem;
          }
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.3rem;
          }
          
          .founder-image {
            float: none;
            display: block;
            margin: 0 auto 2.5rem auto;
          }
          
          .about-content {
            flex-direction: column;
            gap: 3rem;
          }

          .founder-section {
            padding: 1.5rem 1.8rem;
          }

          .testimonial-box {
            max-width: 100%;
            min-height: auto;
            padding: 2rem 1.5rem;
            font-size: 1.1rem;
          }

          .about-footer {
            font-size: 1rem;
          }
        }
      `}</style>
      </div>
      <div id="footer"><Footer /></div>
    </>
  );
}

export default Start
