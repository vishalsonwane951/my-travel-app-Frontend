import React from "react";
import { useState, useEffect, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
// import BookingForm from "./Components/BookingForm";
import BookingForm from "../../Components/BookingForm/BookingForm";
import Register from "../Login";
import { AuthContext } from "../../Context/AuthContext";
import Login from "../Login";
import api from "../../utils/api";
const axios_URL = import.meta.env.VITE_axios_URL;

function Manali() {

  // State for package data
  const [packageData, setPackageData] = useState({
    name: "",
    category: "",
    highlights: [],
    itinerary: [],
    gallery: [],
    testimonials: [],
    pricing: {
      currency: "₹",
      original: "",
      discounted: ""
    }
  });


  const { user } = useContext(AuthContext); // check if logged in
  const [showBooking, setShowBooking] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showComparison, setShowComparison] = useState(false);
  const [comparedPackages, setComparedPackages] = useState([]);
  const [allPackagesData, setAllPackagesData] = useState([]);
  const [pendingBooking, setPendingBooking] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleBookNow = () => {
    if (!user) {
      setShowAlert(true);       // show alert popup
      setPendingBooking(true);  // mark booking pending
    } else {
      setShowBooking(true);
    }
  };

  // Called after alert OK is clicked
  const handleAlertClose = () => {
    setShowAlert(false);       // close alert
    setShowLogin(true);        // open login form now
  };

  // Called after successful login
  const handleLoginSuccess = (loggedInUser) => {
    setUser(loggedInUser);
    setShowLogin(false);

    if (pendingBooking) {        // if user tried booking before login
      setShowBooking(true);      // open booking form automatically
      setPendingBooking(false);  // reset flag
    }
  };


  // Package Categories
  const packageCategories = [
    { id: 1, name: "3D/2N", axiosEndpoint: "/axios/packages/3d2n" },
    { id: 2, name: "4D/3N", axiosEndpoint: "/axios/packages/4d3n" },
    { id: 3, name: "5D/4N", axiosEndpoint: "/axios/packages/5d4n" },
    { id: 4, name: "7D/6N", axiosEndpoint: "/axios/packages/7d6n" }
  ];

  const [activeCategory, setActiveCategory] = useState(1);

  // Fetch all packages data from axios
  useEffect(() => {
    const fetchAllPackagesData = async () => {
      setLoading(true);
      try {
        // note: endpoint matches server route
        const response = await api.get('/explore-packages/manali/getallpackage');
        if (!response.data || !Array.isArray(response.data.data)) {
          console.error("Invalid axios response:", response.data);
          setLoading(false);
          return;
        }

        // Normalize: ensure each package has a pricing object at pkg.pricingObj (safe for UI)
        const normalized = response.data.data.map((pkg) => {
          // normalizedPricing created server-side too, but handle here as fallback
          const serverNormalized = pkg.normalizedPricing;
          const pricingObj =
            serverNormalized ||
            (Array.isArray(pkg.pricing) && pkg.pricing.length > 0 ? pkg.pricing[0] : (pkg.pricing && typeof pkg.pricing === "object" ? pkg.pricing : { currency: "₹", original: "", discounted: "" }));

          // ensure fields exist to avoid undefined crashes
          return {
            ...pkg,
            pricingObj: {
              currency: pricingObj.currency || "₹",
              original: pricingObj.original || "",
              discounted: pricingObj.discounted || ""
            }
          };
        });

        setAllPackagesData(normalized);
        // Set initial package based on activeCategory
        const initialPackage = findPackageByCategory(normalized, activeCategory);
        if (initialPackage) {
          setPackageData(initialPackage);
        } else if (normalized.length > 0) {
          setPackageData(normalized[0]);
        }
        console.log("Fetched packages:", normalized);
      } catch (error) {
        console.error("Error fetching package data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAllPackagesData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Improved package finder function
  const findPackageByCategory = (packages, category) => {
    if (!Array.isArray(packages)) return null;

    // Determine category name from id or string
    let categoryName = "";
    if (typeof category === "number") {
      const categoryObj = packageCategories.find((c) => c.id === category);
      if (!categoryObj) return null;
      categoryName = categoryObj.name;
    } else if (typeof category === "string") {
      categoryName = category;
    } else {
      return null;
    }

    // Find package where duration matches categoryName (data uses duration)
    const found = packages.find((pkg) => {
      const pkgDuration = (pkg.duration || "").toString().trim();
      return pkgDuration.toLowerCase() === categoryName.toLowerCase();
    });

    return found || null;
  };

  // Update package data when activeCategory or allPackagesData changes
  useEffect(() => {
    if (allPackagesData.length > 0) {
      const currentPackageData = findPackageByCategory(allPackagesData, activeCategory);
      if (currentPackageData) {
        console.log("Setting package data:", currentPackageData);
        setPackageData(currentPackageData);
      } else {
        console.log(`No package found for category ${activeCategory}`);
        // clear to default empty object (UI handles missing gracefully)
        setPackageData({
          name: "",
          category: "",
          highlights: [],
          itinerary: [],
          gallery: [],
          testimonials: [],
          pricingObj: { currency: "₹", original: "", discounted: "" }
        });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeCategory, allPackagesData]);

  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
  };

  // Compare packages function (unchanged, mock data)
  const comparePackages = () => {
    const dataForComparison = allPackagesData.map(pkg => ({
      name: pkg.duration || pkg.name || "Unknown Package",
      pricing: pkg.pricingObj || null,
      price: pkg.price || null,
      rating: pkg.testimonials && pkg.testimonials.length > 0
        ? pkg.testimonials[0].rating
        : null,
      highlights: pkg.highlights || []
    }));

    setComparedPackages(dataForComparison);

    setShowComparison(true);
  };
  const closeComparison = () => setShowComparison(false);

  // Helper to get pricing for current packageData
  // packageData may contain pricingObj (normalized) or pricing array; we prefer pricingObj
  const getPricing = (pkg) => {
    if (!pkg) return { currency: "₹", original: "", discounted: "" };
    if (pkg.pricingObj) return pkg.pricingObj;
    if (Array.isArray(pkg.pricing) && pkg.pricing.length > 0) return pkg.pricing[0];
    if (pkg.pricing && typeof pkg.pricing === "object") return pkg.pricing;
    return { currency: "₹", original: "", discounted: "" };
  };

  const pricing = getPricing(packageData);

  const styles = {
    alertOverlay: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      backgroundColor: "rgba(0,0,0,0.5)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 1000,
    },
    alertBox: {
      backgroundColor: "#fff",
      padding: "20px 30px",
      borderRadius: "10px",
      width: "350px",
      height: "120px",
      textAlign: "center",
      boxShadow: "0 0 10px rgba(0,0,0,0.3)",
    },
    alertButton: {
      marginTop: "15px",
      padding: "10px 20px",
      backgroundColor: "#007bff",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      fontSize: "16px",
    },
    categoryPanel:{
      zIndex:1
    }
  };


  return (
    <div className="goa-package">
      {/* Hero Section */}
      <div className="hero-section text-center text-white position-relative">
        <div className="package-tag">
          {packageCategories.find((p) => p.id === activeCategory)?.name} PREMIUM EXPERIENCE
        </div>
        <div className="container position-relative z-index-1 py-5">
          <h1 className="display-3 fw-bold mb-3">Manali Golden Escape</h1>
          <p className="lead fs-2 mb-4">Where Every Moment Shines Brighter</p>
          <div className="d-flex justify-content-center gap-3">
            <button className="btn btn-light btn-lg px-4 fw-bold book-now-btn" onClick={handleBookNow} >
              Book Now @ {pricing?.currency || "₹"}
              {pricing?.discounted || "--"}
            </button>
            <button className="btn btn-outline-light btn-lg ml-2 px-4">Watch Video</button>
          </div>
        </div>
        <div className="hero-overlay"></div>
      </div>

      {/* Package Highlights */}
      <div className="container my-5">
        {loading ? (
          <div className="text-center py-5">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <div className="row g-4">
            {packageData.highlights?.map((item, index) => (
              <div className="col-md-4 col-6" key={index}>
                <div className="highlight-card p-3 text-center h-100">
                  <div className="highlight-icon fs-1 mb-2">{item.icon}</div>
                  <p className="mb-0 fw-medium">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      {/* Itinerary and Category Panel */}
      <div className="container-fluid">
        <div className="row">
          {/* Itinerary Section */}
          <div className="col-lg-9">
            <div className="container my-5 py-4">
              <div className="section-header mb-5 text-center">
                <h2 className="display-5 fw-bold">Your Curated Itinerary</h2>
                <p className="lead">Every Hour Planned for Maximum Enjoyment</p>
                <div className="header-divider"></div>
              </div>

              {loading ? (
                <div className="text-center py-5">
                  <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
              ) : (
                <div className="itinerary-timeline">
                  {packageData.itinerary?.map((day, index) => (
                    <div className="timeline-day" key={index}>
                      <div className="timeline-badge">
                        <span className="day-icon">{day.icon}</span>
                      </div>
                      <div className="timeline-content">
                        <h3>{day.day}</h3>
                        <ul className="activity-list">
                          {day.activities.map((activity, i) => {
                            const [time, desc] = activity.split(" - ");
                            return (
                              <li key={i}>
                                <span className="activity-time">{time}</span>
                                <span className="activity-desc">{desc}</span>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Category Panel */}
          <div className="col-lg-3" style={styles.categoryPanel}>
            <div className="category-sidebar">
              <div className="category-panel p-4 sticky-top">
                <h4 className="mb-4">Package Duration</h4>
                <ul className="category-list">
                  {packageCategories.map((category) => (
                    <li
                      key={category.id}
                      className={activeCategory === category.id ? "active" : ""}
                      onClick={() => handleCategoryChange(category.id)}
                    >
                      {category.name}
                      {activeCategory === category.id && <span className="category-badge">Most Popular</span>}
                    </li>
                  ))}
                </ul>
                <div className="category-info mt-4">
                  <p>Select duration to see itinerary and pricing details.</p>
                  <button className="btn btn-outline-primary w-100 mt-2 text-dark border border-3 border-primary" onClick={comparePackages}>
                    Compare All
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="container-fluid px-0 my-5">
        <div className="section-header mb-5 text-center">
          <h2 className="display-5 fw-bold">Visual Journey</h2>
          <p className="lead">Moments You'll Cherish Forever</p>
        </div>
        {loading ? (
          <div className="text-center py-5">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <div className="row g-0">
            {packageData.gallery?.map((item, index) => (
              <div className="col-md-4 col-6" key={index}>
                <div className="gallery-item">
                  <img
                    src={item.img || `https://via.placeholder.com/800x600?text=Goa+${index + 1}`}
                    alt={item.caption || `Gallery image ${index + 1}`}
                    className="img-fluid"
                    loading="lazy"
                  />
                  <div className="gallery-caption">
                    <p>{item.caption || `Image ${index + 1}`}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Pricing Section */}
      <div className="container my-5 py-5">
        {loading ? (
          <div className="text-center py-5">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <div className="pricing-card p-5 rounded-4 shadow-lg">
            <div className="row align-items-center">
              <div className="col-lg-7">
                <h2 className="display-5 fw-bold mb-3">Ready to Experience Manali?</h2>
                <p className="lead mb-4">
                  Limited slots available for our premium{" "}
                  {packageCategories.find((p) => p.id === activeCategory)?.name} package
                </p>
                <ul className="package-features">
                  {packageData.highlights?.slice(0, 4).map((item, index) => (
                    <li key={index}>✅ {item.text}</li>
                  ))}
                </ul>
              </div>
              <div className="col-lg-5">
                <div className="price-box text-center p-4">
                  <div className="price-original text-decoration-line-through">
                    {pricing.currency || "₹"}
                    {pricing.original || "--"}
                  </div>
                  <div className="price-discounted display-4 fw-bold">
                    {pricing.currency || "₹"}
                    {pricing.discounted || "--"}
                  </div>
                  <div className="price-note mb-3">Per person (Double occupancy)</div>
                  <button className="btn btn-primary btn-lg w-100 mb-2" onClick={handleBookNow}>Book Now</button>
                  <div className="d-flex justify-content-center gap-3">
                    <span className="badge">Free Cancellation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Testimonials */}
      <div className="container my-5 py-4">
        <div className="section-header mb-5 text-center">
          <h2 className="display-5 fw-bold">Traveler Stories</h2>
          <p className="lead">Don't just take our word for it</p>
        </div>
        {loading ? (
          <div className="text-center py-5">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <div className="row">
            {packageData.testimonials?.map((testimonial, index) => (
              <div className="col-md-6 mb-4" key={index}>
                <div className="testimonial-card h-100 p-4">
                  <div className="testimonial-header mb-3">
                    <span className="testimonial-avatar fs-1">{testimonial.avatar || "👤"}</span>
                    <div>
                      <div className="testimonial-rating">
                        {"★".repeat(testimonial.rating || 0)}
                        {"☆".repeat(5 - (testimonial.rating || 0))}
                      </div>
                      <div className="testimonial-author">{testimonial.author || "Anonymous"}</div>
                    </div>
                  </div>
                  <blockquote className="testimonial-quote">"{testimonial.quote || "Great experience!"}"</blockquote>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Final CTA */}
      <div className="container-fluid final-cta py-5 mb-0">
        <div className="container text-center">
          <h2 className="display-5 fw-bold text-white mb-4">Your Manali Adventure Awaits</h2>
          <p className="lead text-white mb-5">Limited slots available for next month. Reserve yours today!</p>
          <div className="d-flex justify-content-center gap-3">
            <button className="btn btn-light btn-lg px-5 fw-bold" onClick={handleBookNow}>Book Now</button>
            {/* Custom Alert Popup */}
            
            {showAlert && (
              <div style={styles.alertOverlay}>
                <div style={styles.alertBox}>
                  <p>Please login first to book</p>
                  <button onClick={ handleAlertClose} style={styles.alertButton}>OK</button>
                </div>
              </div>
            )}
            {/* Login Form Popup */}
            {showLogin && (
              <Login
                onClose={() => setShowLogin(false)}
                onLoginSuccess={handleLoginSuccess}
              />
            )}

            {/* Booking Form Popup */}
            {showBooking && (
              <BookingForm
                user={user}
                onClose={() => setShowBooking(false)}
              />
            )}
            <button className="btn btn-outline-light ml-2 btn-lg px-5">Get Brochure</button>
          </div>
        </div>
      </div>

      {/* Comparison Modal */}
      {showComparison && (
        <div className="comparison-modal">
          <div className="modal-overlay" onClick={closeComparison}></div>
          <div className="modal-content">
            <div className="modal-header">
              <h3>Compare All Packages</h3>
              <button className="close-btn" onClick={closeComparison}>
                ×
              </button>
            </div>

            <div className="modal-body">
              <div className="table-responsive comparison-table-container">
                <table className="table comparison-table">
                  <thead>
                    <tr>
                      <th className="sticky-header">Features</th>
                      {comparedPackages.map((pkg, index) => (
                        <th key={index} className="sticky-header">
                          {pkg.name || "Unknown Package"}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {/* Price */}
                    <tr>
                      <td>Price</td>
                      {comparedPackages.map((pkg, index) => (
                        <td key={`${index}-price`}>
                          {pkg.pricing
                            ? `${pkg.pricing.currency}${pkg.pricing.discounted}`
                            : pkg.price
                              ? `₹${pkg.price}`
                              : "-"}
                        </td>
                      ))}
                    </tr>


                    {/* Rating */}
                    <tr>
                      <td>Rating</td>
                      {comparedPackages.map((pkg, index) => (
                        <td key={`${index}-rating`}>
                          {pkg.rating ? `${pkg.rating} ★` : "-"}
                        </td>
                      ))}
                    </tr>
                    {/* Highlights (icon + text) */}
                    {[...Array(Math.max(...comparedPackages.map(pkg => pkg.highlights?.length || 0)))].map((_, index) => (
                      <tr key={`highlight-${index}`}>
                        <td>{index === 0 ? "Highlights" : ""}</td>
                        {comparedPackages.map((pkg, pkgIndex) => (
                          <td key={`${pkgIndex}-highlight-${index}`}>
                            {pkg.highlights?.[index]
                              ? `${pkg.highlights[index].text}`
                              : "-"}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="modal-footer">
              <button className="btn btn-primary" onClick={closeComparison}>
                Close
              </button>
              {/* Show Login Popup */}
              {showLogin && (
                <Login
                  onClose={() => setShowLogin(false)}
                  onLoginSuccess={handleLoginSuccess}
                />
              )}

              {/* Show Booking Form Popup */}
              {showBooking && (
                <BookingForm onClose={() => setShowBooking(false)} />
              )}


            </div>
          </div>
        </div>
      )}

      {/* Styles */}
      <style jsx>{`
        /* Styles (exactly as you provided) */
        .goa-package {
          font-family: "Arial", sans-serif;
        }

        .hero-section {
          padding: 120px 0 100px;
          background: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), 
           url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');
          background-size: cover;
          background-position: center;
          position: relative;
        }

        .package-tag {
          position: absolute;
          top: 20px;
          right: 20px;
          background: rgba(255, 255, 255, 0.2);
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: bold;
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.3);
        }

        .z-index-1 {
          z-index: 1;
        }

        .highlight-card {
          background: #f8f9fa;
          border-radius: 12px;
          transition: transform 0.3s ease;
          border: 1px solid #e9ecef;
        }

        .highlight-card:hover {
          transform: translateY(-5px);
        }

        .section-header {
          margin-bottom: 3rem;
        }

        .header-divider {
          width: 60px;
          height: 3px;
          background: linear-gradient(90deg, #667eea, #764ba2);
          margin: 0 auto;
          border-radius: 2px;
        }

        .itinerary-timeline {
          position: relative;
          padding-left: 2rem;
        }

        .timeline-day {
          position: relative;
          margin-bottom: 3rem;
          border-left: 2px solid #e9ecef;
          padding-left: 3rem;
        }

        .timeline-badge {
          position: absolute;
          left: -2rem;
          top: 0;
          width: 3rem;
          height: 3rem;
          background: linear-gradient(135deg, #667eea, #764ba2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 1.5rem;
        }

        .timeline-content h3 {
          color: #333;
          font-weight: bold;
          margin-bottom: 1rem;
        }

        .activity-list {
          list-style: none;
          padding: 0;
        }

        .activity-list li {
          margin-bottom: 0.5rem;
          display: flex;
          align-items: flex-start;
        }

        .activity-time {
          font-weight: bold;
          color: #667eea;
          min-width: 120px;
          margin-right: 1rem;
        }

        .activity-desc {
          color: #666;
        }

        .category-sidebar {
          background: #f8f9fa;
          min-height: 100vh;
        }

        .category-panel {
          background: white;
          border-radius: 12px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }

        .category-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .category-list li {
          padding: 1rem;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-bottom: 0.5rem;
          position: relative;
        }

        .category-list li:hover {
          background: #f0f0f0;
        }

        .category-list li.active {
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
        }

        .category-badge {
          position: absolute;
          right: 10px;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(255, 255, 255, 0.2);
          padding: 2px 8px;
          border-radius: 10px;
          font-size: 0.7rem;
        }

        .gallery-item {
          position: relative;
          overflow: hidden;
          height: 250px;
        }

        .gallery-item img {
          transition: transform 0.5s ease;
          height: 100%;
          width: 100%;
          object-fit: cover;
        }

        .gallery-item:hover img {
          transform: scale(1.1);
        }

        .gallery-caption {
          position: absolute;
          bottom: -100%;
          left: 0;
          right: 0;
          background: rgba(0,0,0,0.7);
          color: white;
          padding: 15px;
          transition: bottom 0.3s ease;
        }

        .gallery-item:hover .gallery-caption {
          bottom: 0;
        }

        .pricing-card {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
        }

        .price-box {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          backdrop-filter: blur(10px);
        }

        .price-original {
          font-size: 1.2rem;
          color: rgba(255, 255, 255, 0.7);
        }

        .price-discounted {
          color: #ffd700;
        }

        .price-note {
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.8);
        }

        .badge {
          background: rgba(255, 255, 255, 0.2);
          color: white;
          padding: 0.3rem 0.8rem;
          border-radius: 15px;
          font-size: 0.8rem;
        }

        .testimonial-card {
          background: white;
          border-radius: 12px;
          box-shadow: 0 2px 15px rgba(0,0,0,0.1);
          border: 1px solid #e9ecef;
        }

        .testimonial-header {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .testimonial-rating {
          color: #ffd700;
          font-size: 1.1rem;
        }

        .testimonial-author {
          font-weight: bold;
          color: #333;
        }

        .testimonial-quote {
          font-style: italic;
          color: #666;
          border-left: 3px solid #667eea;
          padding-left: 1rem;
          margin: 0;
        }

        .final-cta {
          background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
        }

        .comparison-modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          z-index: 1050;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .modal-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
        }

        .modal-content {
          background: white;
          border-radius: 12px;
          max-width: 90vw;
          max-height: 80vh;
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
        }

        .modal-header {
          padding: 1.5rem;
          border-bottom: 1px solid #e9ecef;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .close-btn {
          background: none;
          border: none;
          font-size: 1.5rem;
          cursor: pointer;
          color: #666;
        }

        .modal-body {
          padding: 1.5rem;
          overflow: auto;
          flex: 1;
        }

        .comparison-table-container {
          max-height: 400px;
        }

        .comparison-table th.sticky-header {
          position: sticky;
          top: 0;
          background: #f8f9fa;
          z-index: 10;
        }

        .comparison-table td, .comparison-table th {
          padding: 1rem;
          text-align: center;
          border: 1px solid #e9ecef;
        }

        .modal-footer {
          padding: 1.5rem;
          border-top: 1px solid #e9ecef;
          text-align: right;
        }

        .package-features {
          list-style: none;
          padding: 0;
        }

        .package-features li {
          margin-bottom: 0.5rem;
          color: rgba(255, 255, 255, 0.9);
        }
      `}</style>
    </div>
  );
}

export default Manali;



// [
//   {
//     "code": "LAD-3D2N",
//     "category": "3D/2N",
//     "duration": "3D/2N",
//     "highlights": [
//       { "icon": "🏔️", "text": "Leh Local Sightseeing" },
//       { "icon": "🏯", "text": "Shanti Stupa Visit" },
//       { "icon": "🛶", "text": "Pangong Lake Excursion" },
//       { "icon": "🌄", "text": "Sunset at Chang La Pass" }
//     ],
//     "itinerary": [
//       {
//         "day": "Day 1: Arrival & Leh Sightseeing",
//         "activities": [
//           "12:00 PM - Arrival at Leh",
//           "03:00 PM - Visit Shanti Stupa and Leh Palace",
//           "06:00 PM - Explore local market"
//         ],
//         "icon": "🏙️"
//       },
//       {
//         "day": "Day 2: Pangong Lake Excursion",
//         "activities": [
//           "06:00 AM - Early morning departure to Pangong Lake",
//           "12:00 PM - Lunch by the lake",
//           "04:00 PM - Return to Leh"
//         ],
//         "icon": "🛶"
//       },
//       {
//         "day": "Day 3: Departure",
//         "activities": [
//           "08:00 AM - Breakfast",
//           "10:00 AM - Checkout and departure"
//         ],
//         "icon": "✈️"
//       }
//     ],
//     "gallery": [
//       { "img": "https://i.pinimg.com/1200x/ab/45/ec/ab45ec6b430304b0e6ba9991fae00825.jpg", "caption": "Shanti Stupa" },
//       { "img": "https://i.pinimg.com/1200x/9e/34/fd/9e34fd7b4b6ea068f320f1e905e1984d.jpg", "caption": "Pangong Lake" },
//       { "img": "https://i.pinimg.com/1200x/8f/3f/8f/8f3f8fcc004a57ddcc53015e597b0512.jpg", "caption": "Leh Market" },
//       { "img": "https://i.pinimg.com/1200x/da/07/d1/da07d182e25b29c695e479d2c88cdb12.jpg", "caption": "Chang La Pass" }
//     ],
//     "testimonials": [
//       {
//         "quote": "A breathtaking short trip to Ladakh’s highlights.",
//         "author": "Nisha & Raj",
//         "rating": 5,
//         "avatar": "👫"
//       }
//     ],
//     "pricing": {
//       "original": 12000,
//       "discounted": 9999,
//       "currency": "₹"
//     }
//   },
//   {
//     "code": "LAD-4D3N",
//     "category": "4D/3N",
//     "duration": "4D/3N",
//     "highlights": [
//       { "icon": "🏔️", "text": "Leh & Nubra Valley" },
//       { "icon": "🕌", "text": "Diskit Monastery Visit" },
//       { "icon": "🛶", "text": "Pangong Lake Experience" },
//       { "icon": "🚗", "text": "Scenic Drives & Mountain Passes" }
//     ],
//     "itinerary": [
//       {
//         "day": "Day 1: Arrival & Leh Sightseeing",
//         "activities": [
//           "12:00 PM - Arrival at Leh",
//           "03:00 PM - Visit Shanti Stupa and Leh Palace"
//         ],
//         "icon": "🏙️"
//       },
//       {
//         "day": "Day 2: Nubra Valley Excursion",
//         "activities": [
//           "07:00 AM - Drive to Nubra Valley via Khardung La Pass",
//           "12:00 PM - Visit Diskit Monastery",
//           "05:00 PM - Explore Hunder Sand Dunes"
//         ],
//         "icon": "🏜️"
//       },
//       {
//         "day": "Day 3: Pangong Lake Visit",
//         "activities": [
//           "06:00 AM - Depart for Pangong Lake",
//           "01:00 PM - Picnic and photography",
//           "05:00 PM - Return to Leh"
//         ],
//         "icon": "🛶"
//       },
//       {
//         "day": "Day 4: Departure",
//         "activities": [
//           "08:00 AM - Breakfast and local market visit",
//           "11:00 AM - Checkout and departure"
//         ],
//         "icon": "✈️"
//       }
//     ],
//     "gallery": [
//       { "img": "https://i.pinimg.com/1200x/25/2d/20/252d20c21498b33ca3763598ff64ed4a.jpg", "caption": "Nubra Valley" },
//       { "img": "https://i.pinimg.com/1200x/47/a6/0b/47a60ba16770f4734624a582620cc93a.jpg", "caption": "Diskit Monastery" },
//       { "img": "https://i.pinimg.com/1200x/c7/1e/36/c71e3609e3147f306b70ec380bd26974.jpg", "caption": "Couple Photoshoot" },
//       { "img": "https://i.pinimg.com/1200x/20/61/37/20613734cffbbedc7afbf1b395736958.jpg", "caption": "Khardung La Pass" }
//     ],
//     "testimonials": [
//       {
//         "quote": "A wonderful mix of nature and culture in Ladakh.",
//         "author": "Suman & Deepak",
//         "rating": 5,
//         "avatar": "👩‍❤️‍👨"
//       }
//     ],
//     "pricing": {
//       "original": 16000,
//       "discounted": 13999,
//       "currency": "₹"
//     }
//   },
//   {
//     "code": "LAD-5D4N",
//     "category": "5D/4N",
//     "duration": "5D/4N",
//     "highlights": [
//       { "icon": "🏔️", "text": "Leh, Nubra & Pangong Lake" },
//       { "icon": "🕌", "text": "Monastery Visits" },
//       { "icon": "🚙", "text": "Scenic Road Trips" },
//       { "icon": "🌌", "text": "Stargazing in Ladakh" },
//       { "icon": "🐫", "text": "Camel Ride at Hunder Sand Dunes" }
//     ],
//     "itinerary": [
//       {
//         "day": "Day 1: Arrival & Leh Exploration",
//         "activities": [
//           "12:00 PM - Arrival at Leh",
//           "03:00 PM - Visit Leh Palace and local market"
//         ],
//         "icon": "🏙️"
//       },
//       {
//         "day": "Day 2: Nubra Valley via Khardung La",
//         "activities": [
//           "07:00 AM - Drive to Nubra Valley",
//           "12:00 PM - Explore Diskit Monastery",
//           "04:00 PM - Camel safari at Hunder Sand Dunes"
//         ],
//         "icon": "🐫"
//       },
//       {
//         "day": "Day 3: Pangong Lake Excursion",
//         "activities": [
//           "06:00 AM - Early morning drive to Pangong Lake",
//           "01:00 PM - Lunch and photography",
//           "05:00 PM - Return to Leh"
//         ],
//         "icon": "🛶"
//       },
//       {
//         "day": "Day 4: Monastery Visits & Relaxation",
//         "activities": [
//           "09:00 AM - Visit Thiksey and Hemis Monasteries",
//           "02:00 PM - Leisure time in Leh"
//         ],
//         "icon": "🕌"
//       },
//       {
//         "day": "Day 5: Departure",
//         "activities": [
//           "08:00 AM - Checkout and depart"
//         ],
//         "icon": "✈️"
//       }
//     ],
//     "gallery": [
//       { "img": "https://i.pinimg.com/1200x/2a/7c/97/2a7c97d8884daf5cfb8880358df1c7c3.jpg", "caption": "Hemis Monastery" },
//       { "img": "https://i.pinimg.com/1200x/20/61/37/20613734cffbbedc7afbf1b395736958.jpg", "caption": "Khardung La Top" },
//       { "img": "https://i.pinimg.com/1200x/f0/fb/7b/f0fb7bdb0b4139e11e384527c9a65f4f.jpg", "caption": "Nubra Valley" },
//       { "img": "https://i.pinimg.com/1200x/0b/b3/be/0bb3beb5be688b10b2ca13ae02315d83.jpg", "caption": "Pangong Lake" },
//       { "img": "https://i.pinimg.com/1200x/2d/44/e4/2d44e49b8f2c5447ef5fc3b1406f888c.jpg", "caption": "Camel Ride at Hunder" }
//     ],
//     "testimonials": [
//       {
//         "quote": "The perfect mix of adventure and tranquility in Ladakh.",
//         "author": "Rahul & Meena",
//         "rating": 5,
//         "avatar": "👫"
//       }
//     ],
//     "pricing": {
//       "original": 19500,
//       "discounted": 16999,
//       "currency": "₹"
//     }
//   },
//   {
//     "code": "LAD-7D6N",
//     "category": "7D/6N",
//     "duration": "7D/6N",
//     "highlights": [
//       { "icon": "🏔️", "text": "Complete Ladakh Experience" },
//       { "icon": "🕌", "text": "Famous Monasteries & Culture" },
//       { "icon": "🛶", "text": "Pangong & Tso Moriri Lakes" },
//       { "icon": "🐫", "text": "Camel Safari at Nubra Valley" },
//       { "icon": "🌌", "text": "Night Sky & Stargazing" },
//       { "icon": "🚗", "text": "Scenic Mountain Passes" }
//     ],
//     "itinerary": [
//       {
//         "day": "Day 1: Arrival & Leh Exploration",
//         "activities": [
//           "12:00 PM - Arrival at Leh",
//           "03:00 PM - Visit Leh Palace and Shanti Stupa"
//         ],
//         "icon": "🏙️"
//       },
//       {
//         "day": "Day 2: Nubra Valley via Khardung La",
//         "activities": [
//           "07:00 AM - Drive to Nubra Valley",
//           "12:00 PM - Visit Diskit Monastery",
//           "04:00 PM - Camel safari at Hunder Sand Dunes"
//         ],
//         "icon": "🐫"
//       },
//       {
//         "day": "Day 3: Tso Moriri Lake Visit",
//         "activities": [
//           "06:00 AM - Depart for Tso Moriri Lake",
//           "01:00 PM - Explore lake and surroundings",
//           "05:00 PM - Overnight stay nearby"
//         ],
//         "icon": "🏞️"
//       },
//       {
//         "day": "Day 4: Pangong Lake",
//         "activities": [
//           "07:00 AM - Drive to Pangong Lake",
//           "01:00 PM - Lunch and photography",
//           "05:00 PM - Return to Leh"
//         ],
//         "icon": "🛶"
//       },
//       {
//         "day": "Day 5: Monasteries & Local Markets",
//         "activities": [
//           "09:00 AM - Visit Thiksey and Hemis Monasteries",
//           "03:00 PM - Shopping in Leh market"
//         ],
//         "icon": "🕌"
//       },
//       {
//         "day": "Day 6: Leisure & Cultural Programs",
//         "activities": [
//           "Day for cultural shows, local cuisine, and relaxation"
//         ],
//         "icon": "🎭"
//       },
//       {
//         "day": "Day 7: Departure",
//         "activities": [
//           "08:00 AM - Checkout and depart"
//         ],
//         "icon": "✈️"
//       }
//     ],
//     "gallery": [
//       { "img": "https://i.pinimg.com/1200x/85/8d/41/858d41e5cd6e29972a8ffd27a2330e70.jpg", "caption": "Tso Moriri Lake" },
//       { "img": "https://i.pinimg.com/1200x/e9/9d/f2/e99df2ed573a51b7b4bb61f89739348e.jpg", "caption": "Hemis Monastery" },
//       { "img": "https://i.pinimg.com/1200x/e2/eb/ad/e2ebadc020e9fc2394d27df33165628b.jpg", "caption": "Profesional Couple Photoshoot" },
//       { "img": "https://i.pinimg.com/1200x/0d/46/af/0d46af9d90813e408bf09b8bbcdc7f6b.jpg", "caption": "Camel Safari at Nubra" },
//       { "img": "https://i.pinimg.com/1200x/1e/28/6b/1e286b8be6d5c9b9fac1945e2b40ee9e.jpg", "caption": "Leh Market" }
//     ],
//     "testimonials": [
//       {
//         "quote": "An unforgettable week exploring the magic of Ladakh.",
//         "author": "Karan & Priya",
//         "rating": 5,
//         "avatar": "👨‍👩‍👧‍👦"
//       }
//     ],
//     "pricing": {
//       "original": 28000,
//       "discounted": 23999,
//       "currency": "₹"
//     }
//   }
// ]
