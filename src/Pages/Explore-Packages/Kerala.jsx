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

function Kerala() {

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
        const response = await api.get('/explore-packages/kerala/getallpackage');
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
          <h1 className="display-3 fw-bold mb-3">Kerla Golden Escape</h1>
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
                <h2 className="display-5 fw-bold mb-3">Ready to Experience Kerla?</h2>
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
          <h2 className="display-5 fw-bold text-white mb-4">Your Kerla Adventure Awaits</h2>
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

export default Kerala;






[
  {
    "code": "KER-3D2N",
    "category": "3D/2N",
    "duration": "3D/2N",
    "highlights": [
      { "icon": "🏝️", "text": "Alleppey Backwater Houseboat" },
      { "icon": "🏛️", "text": "Fort Kochi & Chinese Fishing Nets" },
      { "icon": "🍛", "text": "Authentic Kerala Cuisine" }
    ],
    "itinerary": [
      {
        "day": "Day 1: Arrival in Kochi & Sightseeing",
        "activities": [
          "12:00 PM - Arrival at Kochi",
          "02:00 PM - Visit Fort Kochi, Chinese Fishing Nets & St. Francis Church",
          "07:00 PM - Kathakali performance (optional)"
        ],
        "icon": "🏙️"
      },
      {
        "day": "Day 2: Alleppey Houseboat Cruise",
        "activities": [
          "08:00 AM - Drive to Alleppey",
          "12:00 PM - Board traditional houseboat and begin backwater cruise",
          "07:00 PM - Overnight on houseboat with local dinner"
        ],
        "icon": "🚣"
      },
      {
        "day": "Day 3: Checkout & Departure",
        "activities": [
          "08:00 AM - Breakfast on board",
          "10:00 AM - Disembark and transfer to Kochi for onward journey"
        ],
        "icon": "✈️"
      }
    ],
    "gallery": [
      { "img": "https://via.placeholder.com/1200x800?text=Fort+Kochi", "caption": "Fort Kochi & Chinese Nets" },
      { "img": "https://via.placeholder.com/1200x800?text=Alleppey+Houseboat", "caption": "Traditional Houseboat" },
      { "img": "https://via.placeholder.com/1200x800?text=Kerala+Cuisine", "caption": "Kerala Cuisine" },
      { "img": "https://via.placeholder.com/1200x800?text=Backwaters", "caption": "Palm-fringed Backwaters" },
      { "img": "https://via.placeholder.com/1200x800?text=Local+Village", "caption": "Village Life Along Canals" },
      { "img": "https://via.placeholder.com/1200x800?text=Sunset+Backwaters", "caption": "Sunset on the Backwaters" }
    ],
    "testimonials": [
      {
        "quote": "The houseboat experience was magical — peaceful cruise and delicious food.",
        "author": "Neha & Sameer",
        "rating": 5,
        "avatar": "👫"
      }
    ],
    "pricing": {
      "original": 7500,
      "discounted": 5999,
      "currency": "₹"
    }
  },
  {
    "code": "KER-4D3N",
    "category": "4D/3N",
    "duration": "4D/3N",
    "highlights": [
      { "icon": "🌿", "text": "Tea Plantations of Munnar" },
      { "icon": "🐘", "text": "Wildlife at Thekkady (Periyar)" },
      { "icon": "🚣", "text": "Backwater Cruise in Alleppey" }
    ],
    "itinerary": [
      {
        "day": "Day 1: Kochi Arrival & Fort Kochi",
        "activities": [
          "12:00 PM - Arrive Kochi and check-in",
          "03:00 PM - Explore Fort Kochi and local markets"
        ],
        "icon": "🏙️"
      },
      {
        "day": "Day 2: Drive to Munnar",
        "activities": [
          "07:00 AM - Depart for Munnar via scenic route",
          "02:00 PM - Visit Tea Museum and local viewpoints"
        ],
        "icon": "🌄"
      },
      {
        "day": "Day 3: Thekkady (Periyar Wildlife)",
        "activities": [
          "06:00 AM - Early drive to Thekkady",
          "10:00 AM - Boat safari on Periyar Lake and spice plantation visit"
        ],
        "icon": "🐾"
      },
      {
        "day": "Day 4: Alleppey Backwaters & Departure",
        "activities": [
          "09:00 AM - Transfer to Alleppey",
          "12:00 PM - Short backwater cruise and departure"
        ],
        "icon": "🚣"
      }
    ],
    "gallery": [
      { "img": "https://via.placeholder.com/1200x800?text=Munnar+Tea+Gardens", "caption": "Munnar Tea Plantations" },
      { "img": "https://via.placeholder.com/1200x800?text=Periyar+Wildlife", "caption": "Periyar Wildlife Sanctuary" },
      { "img": "https://via.placeholder.com/1200x800?text=Spice+Garden", "caption": "Spice Plantation" },
      { "img": "https://via.placeholder.com/1200x800?text=Alleppey+Backwaters", "caption": "Alleppey Backwaters" },
      { "img": "https://via.placeholder.com/1200x800?text=Tea+Museum", "caption": "Tea Museum, Munnar" },
      { "img": "https://via.placeholder.com/1200x800?text=Hill+View", "caption": "Scenic Hill Views" }
    ],
    "testimonials": [
      {
        "quote": "From tea gardens to wildlife — great pace and well-organized!",
        "author": "Rakesh & Pooja",
        "rating": 5,
        "avatar": "👨‍👩‍👧"
      }
    ],
    "pricing": {
      "original": 11500,
      "discounted": 8999,
      "currency": "₹"
    }
  },
  {
    "code": "KER-5D4N",
    "category": "5D/4N",
    "duration": "5D/4N",
    "highlights": [
      { "icon": "🛶", "text": "Extended Backwater Cruise" },
      { "icon": "🌱", "text": "Munnar & Mattupetty Dam" },
      { "icon": "🦜", "text": "Kumarakom Bird Sanctuary" }
    ],
    "itinerary": [
      {
        "day": "Day 1: Kochi Arrival & Local Tour",
        "activities": [
          "01:00 PM - Arrive Kochi",
          "04:00 PM - Visit Fort Kochi & local cafes"
        ],
        "icon": "🏙️"
      },
      {
        "day": "Day 2: Munnar Excursion",
        "activities": [
          "07:00 AM - Drive to Munnar",
          "03:00 PM - Visit Eravikulam NP (if open) and Mattupetty Dam"
        ],
        "icon": "🌿"
      },
      {
        "day": "Day 3: Thekkady (Periyar)",
        "activities": [
          "08:00 AM - Drive to Thekkady",
          "02:00 PM - Spice plantation tour and evening nature walk"
        ],
        "icon": "🐾"
      },
      {
        "day": "Day 4: Alleppey Houseboat",
        "activities": [
          "09:00 AM - Transfer to Alleppey",
          "12:00 PM - Board houseboat for an extended backwater cruise"
        ],
        "icon": "🚣"
      },
      {
        "day": "Day 5: Kumarakom & Departure",
        "activities": [
          "08:00 AM - Disembark and transfer to Kumarakom",
          "11:00 AM - Visit Kumarakom Bird Sanctuary, then transfer to Kochi"
        ],
        "icon": "🦜"
      }
    ],
    "gallery": [
      { "img": "https://via.placeholder.com/1200x800?text=Eravikulam+National+Park", "caption": "Eravikulam National Park" },
      { "img": "https://via.placeholder.com/1200x800?text=Mattupetty+Dam", "caption": "Mattupetty Dam" },
      { "img": "https://via.placeholder.com/1200x800?text=Thekkady+Spice+Garden", "caption": "Spice Garden, Thekkady" },
      { "img": "https://via.placeholder.com/1200x800?text=Houseboat+Cruise", "caption": "Houseboat Cruise" },
      { "img": "https://via.placeholder.com/1200x800?text=Kumarakom+Bird+Sanctuary", "caption": "Kumarakom Bird Sanctuary" },
      { "img": "https://via.placeholder.com/1200x800?text=Village+Canal", "caption": "Village Canals & Life" }
    ],
    "testimonials": [
      {
        "quote": "Loved the mix of hill, wildlife and backwaters — well-balanced itinerary.",
        "author": "Priyanka & Arjun",
        "rating": 5,
        "avatar": "👩‍❤️‍👨"
      }
    ],
    "pricing": {
      "original": 15500,
      "discounted": 12999,
      "currency": "₹"
    }
  },
  {
    "code": "KER-7D6N",
    "category": "7D/6N",
    "duration": "7D/6N",
    "highlights": [
      { "icon": "🏞️", "text": "Comprehensive Kerala Tour" },
      { "icon": "🛶", "text": "Extended Backwaters & Houseboat Stay" },
      { "icon": "🌿", "text": "Munnar, Thekkady & Kumarakom" },
      { "icon": "🎭", "text": "Cultural Experiences (Kathakali & Village Tours)" }
    ],
    "itinerary": [
      {
        "day": "Day 1: Kochi Arrival & Fort Kochi",
        "activities": [
          "12:00 PM - Arrive Kochi and check-in",
          "03:00 PM - Explore Fort Kochi and historic sites"
        ],
        "icon": "🏙️"
      },
      {
        "day": "Day 2: Kochi to Munnar",
        "activities": [
          "07:30 AM - Drive to Munnar",
          "02:30 PM - Tea gardens and viewpoints"
        ],
        "icon": "🌄"
      },
      {
        "day": "Day 3: Munnar Full Day",
        "activities": [
          "08:00 AM - Eravikulam NP / Top Station (seasonal)",
          "03:00 PM - Tea tasting and local market visit"
        ],
        "icon": "🍃"
      },
      {
        "day": "Day 4: Munnar to Thekkady",
        "activities": [
          "09:00 AM - Drive to Thekkady",
          "04:00 PM - Spice plantation tour and evening cultural show"
        ],
        "icon": "🌶️"
      },
      {
        "day": "Day 5: Thekkady to Alleppey (Houseboat)",
        "activities": [
          "07:00 AM - Morning boat safari on Periyar Lake",
          "12:00 PM - Transfer to Alleppey and board houseboat"
        ],
        "icon": "🚣"
      },
      {
        "day": "Day 6: Kumarakom & Bird Sanctuary",
        "activities": [
          "08:00 AM - Disembark and transfer to Kumarakom",
          "11:00 AM - Visit Kumarakom Bird Sanctuary and relax by Vembanad Lake"
        ],
        "icon": "🦜"
      },
      {
        "day": "Day 7: Kochi & Departure",
        "activities": [
          "09:00 AM - Return to Kochi",
          "03:00 PM - Last-minute shopping and departure"
        ],
        "icon": "✈️"
      }
    ],
    "gallery": [
      { "img": "https://via.placeholder.com/1200x800?text=Fort+Kochi+Streets", "caption": "Historic Fort Kochi" },
      { "img": "https://via.placeholder.com/1200x800?text=Munnar+Valley", "caption": "Munnar Valley & Tea Gardens" },
      { "img": "https://via.placeholder.com/1200x800?text=Periyar+Boat+Safari", "caption": "Periyar Boat Safari" },
      { "img": "https://via.placeholder.com/1200x800?text=Alleppey+Houseboat+Stay", "caption": "Houseboat Stay" },
      { "img": "https://via.placeholder.com/1200x800?text=Kumarakom+Lake", "caption": "Vembanad Lake, Kumarakom" },
      { "img": "https://i.pinimg.com/1200x/19/12/e7/1912e7ac410964b86b27f94f227ebf83.jpg", "caption": "Kathakali Cultural Show" }
    ],
    "testimonials": [
      {
        "quote": "A perfect, immersive Kerala experience — nature, culture and relaxation.",
        "author": "Manish & Friends",
        "rating": 5,
        "avatar": "👨‍👩‍👧‍👦"
      }
    ],
    "pricing": {
      "original": 26000,
      "discounted": 21999,
      "currency": "₹"
    }
  }
]
