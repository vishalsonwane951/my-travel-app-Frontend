import React from "react";
import { useState, useEffect, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
// import BookingForm from "./Components/BookingForm";
import BookingForm from "../../Components/BookingForm/BookingForm";
import Register from "../Login";
import api from "../../utils/api";
import { AuthContext } from "../../Context/AuthContext";
import Login from "../Login";
const axios_URL = import.meta.env.VITE_axios_URL;

function Rishikesh() {

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
        const response = await api.get('/explore-packages/rishikesh/getallpackage');
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
          <h1 className="display-3 fw-bold mb-3">Rishikesh Golden Escape</h1>
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
                <h2 className="display-5 fw-bold mb-3">Ready to Experience Rishikesh?</h2>
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
          <h2 className="display-5 fw-bold text-white mb-4">Your Rishikesh Adventure Awaits</h2>
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

export default Rishikesh;





// [
//   {
//     "code": "RIS-3D2N",
//     "category": "3D/2N",
//     "duration": "3D/2N",
//     "highlights": [
//       { "icon": "🏞", "text": "River Rafting on Ganges" },
//       { "icon": "🕉", "text": "Visit to Triveni Ghat" },
//       { "icon": "🧘", "text": "Yoga Session by the Riverside" }
//     ],
//     "itinerary": [
//       {
//         "day": "Day 1: Arrival & Ghat Visit",
//         "activities": [
//           "12:00 PM - Arrival and Hotel Check-in",
//           "04:00 PM - Evening Aarti at Triveni Ghat",
//           "07:00 PM - Dinner at Local Restaurant"
//         ],
//         "icon": "🕉"
//       },
//       {
//         "day": "Day 2: Adventure & Yoga",
//         "activities": [
//           "06:30 AM - Morning Yoga Session",
//           "09:00 AM - Breakfast",
//           "11:00 AM - River Rafting Adventure",
//           "03:00 PM - Visit Neer Garh Waterfall"
//         ],
//         "icon": "🏞"
//       },
//       {
//         "day": "Day 3: Local Exploration & Departure",
//         "activities": [
//           "08:00 AM - Breakfast",
//           "10:00 AM - Visit Beatles Ashram",
//           "01:00 PM - Checkout and Departure"
//         ],
//         "icon": "🎨"
//       }
//     ],
//     "gallery": [
//       { "img": "https://i.pinimg.com/1200x/67/d8/3f/67d83fef499a1dc7d9e9997645d502f5.jpg", "caption": "Triveni Ghat Evening Aarti" },
//       { "img": "https://i.pinimg.com/1200x/33/7c/46/337c462c0d016ef90e7ca99c1681ed0d.jpg", "caption": "Ganges River Rafting" },
//       { "img": "https://i.pinimg.com/1200x/75/b9/f8/75b9f89a20d8da79cdfaf44776404826.jpg", "caption": "Yoga by the Riverside" },
//       { "img": "https://i.pinimg.com/1200x/5d/99/d1/5d99d1663e13b93c4288e4c67b8971a0.jpg", "caption": "Neer Garh Waterfall" },
//       { "img": "https://i.pinimg.com/736x/a4/5f/5a/a45f5a322b4f474b860474216acc777b.jpg", "caption": "Laxman Jhula" }
//     ],
//     "testimonials": [
//       {
//         "quote": "Perfect mix of spirituality and adventure, loved the rafting!",
//         "author": "Ankita & Rohan",
//         "rating": 5,
//         "avatar": "👩‍❤‍👨"
//       }
//     ],
//     "pricing": {
//       "original": 5500,
//       "discounted": 4499,
//       "currency": "₹"
//     }
//   },
//   {
//     "code": "RIS-4D3N",
//     "category": "4D/3N",
//     "duration": "4D/3N",
//     "highlights": [
//       { "icon": "🧗", "text": "River Rafting & Trekking" },
//       { "icon": "🕉", "text": "Visit to Beatles Ashram" },
//       { "icon": "🧘", "text": "Multiple Yoga Sessions" }
//     ],
//     "itinerary": [
//       {
//         "day": "Day 1: Arrival & Relaxation",
//         "activities": [
//           "12:00 PM - Check-in",
//           "04:00 PM - Evening Aarti at Ganges",
//           "07:00 PM - Welcome Dinner"
//         ],
//         "icon": "🕉"
//       },
//       {
//         "day": "Day 2: River Rafting & Local Market",
//         "activities": [
//           "07:00 AM - Yoga Session",
//           "09:00 AM - Breakfast",
//           "10:30 AM - River Rafting",
//           "02:00 PM - Explore Local Markets"
//         ],
//         "icon": "🏞"
//       },
//       {
//         "day": "Day 3: Trek to Neer Garh Falls",
//         "activities": [
//           "06:00 AM - Early Breakfast",
//           "07:00 AM - Trekking to Neer Garh Waterfall",
//           "12:00 PM - Picnic Lunch",
//           "03:00 PM - Return & Relax"
//         ],
//         "icon": "🥾"
//       },
//       {
//         "day": "Day 4: Spiritual Tour & Departure",
//         "activities": [
//           "08:00 AM - Visit Beatles Ashram",
//           "12:00 PM - Checkout & Departure"
//         ],
//         "icon": "🕉"
//       }
//     ],
//     "gallery": [
//       { "img": "https://i.pinimg.com/1200x/e2/25/9c/e2259c57bda6dcc928bdc80f3a257c73.jpg", "caption": "Yoga Morning Session" },
//       { "img": "https://i.pinimg.com/1200x/2d/44/ce/2d44cec9e5563acddeb69bc7b0b36422.jpg", "caption": "Local Market" },
//       { "img": "https://i.pinimg.com/1200x/c9/b1/9a/c9b19aa2efa052fdc6fc9f7877b41076.jpg", "caption": "Sunset at Ghat" },
//       { "img": "https://i.pinimg.com/1200x/17/46/d3/1746d32918cec703bcd85c698a0ee5f9.jpg", "caption": "Rafting Group" }
//     ],
//     "testimonials": [
//       {
//         "quote": "A soulful experience with some adventure thrown in. Highly recommended!",
//         "author": "Siddharth & Meera",
//         "rating": 5,
//         "avatar": "👫"
//       }
//     ],
//     "pricing": {
//       "original": 7500,
//       "discounted": 6399,
//       "currency": "₹"
//     }
//   },
//   {
//     "code": "RIS-5D4N",
//     "category": "5D/4N",
//     "duration": "5D/4N",
//     "highlights": [
//       { "icon": "🧗", "text": "White Water Rafting" },
//       { "icon": "🏞", "text": "Local Trekking & Waterfalls" },
//       { "icon": "🕉", "text": "Yoga & Meditation Retreat" }
//     ],
//     "itinerary": [
//       {
//         "day": "Day 1: Arrival & Ganges Aarti",
//         "activities": [
//           "12:00 PM - Arrival & Hotel Check-in",
//           "05:00 PM - Evening Aarti at Ganges"
//         ],
//         "icon": "🕉"
//       },
//       {
//         "day": "Day 2: White Water Rafting",
//         "activities": [
//           "07:00 AM - Yoga & Meditation",
//           "09:00 AM - Breakfast",
//           "10:00 AM - River Rafting",
//           "04:00 PM - Leisure"
//         ],
//         "icon": "🏞"
//       },
//       {
//         "day": "Day 3: Trekking Neer Garh Falls",
//         "activities": [
//           "06:30 AM - Breakfast",
//           "07:30 AM - Trekking",
//           "12:30 PM - Picnic",
//           "05:00 PM - Return & Relax"
//         ],
//         "icon": "🥾"
//       },
//       {
//         "day": "Day 4: Spiritual Exploration",
//         "activities": [
//           "08:00 AM - Visit Beatles Ashram",
//           "12:00 PM - Visit Swarg Ashram",
//           "05:00 PM - Meditation Session"
//         ],
//         "icon": "🕉"
//       },
//       {
//         "day": "Day 5: Departure",
//         "activities": [
//           "08:00 AM - Breakfast",
//           "10:00 AM - Checkout & Transfer"
//         ],
//         "icon": "✈"
//       }
//     ],
//     "gallery": [
//       { "img": "https://i.pinimg.com/1200x/2e/0d/f7/2e0df7bbf8bfaa2fdc4a6f507ef94408.jpg", "caption": "Morning Meditation" },
//       { "img": "https://i.pinimg.com/1200x/74/84/29/748429ef2bffe11d790c3f1a882bfd95.jpg", "caption": "Swarg Ashram" },
//       { "img": "https://i.pinimg.com/1200x/2b/70/0f/2b700f73e360c4157de473f463807cf9.jpg", "caption": "River Rafting" },
//       { "img": "https://i.pinimg.com/1200x/62/73/89/627389487b78b12f1e5eb445f20b0b96.jpg", "caption": "Trekking Trail" },
//       { "img": "https://i.pinimg.com/1200x/74/84/29/748429ef2bffe11d790c3f1a882bfd95.jpg", "caption": "Beatles Ashram Ruins" },
//       { "img": "https://i.pinimg.com/1200x/f2/ba/1c/f2ba1cde545fbdc7558cf63616dd8294.jpg", "caption": "Ganges River View" }
//     ],
//     "testimonials": [
//       {
//         "quote": "The yoga retreat was rejuvenating and the rafting thrilling!",
//         "author": "Neha & Vivek",
//         "rating": 5,
//         "avatar": "👩‍❤‍👨"
//       }
//     ],
//     "pricing": {
//       "original": 9800,
//       "discounted": 8499,
//       "currency": "₹"
//     }
//   },
//   {
//     "code": "RIS-7D6N",
//     "category": "7D/6N",
//     "duration": "7D/6N",
//     "highlights": [
//       { "icon": "🧘", "text": "Extended Yoga & Meditation" },
//       { "icon": "🏞", "text": "Adventure Sports & Waterfalls" },
//       { "icon": "🕌", "text": "Spiritual & Cultural Tours" }
//     ],
//     "itinerary": [
//       {
//         "day": "Day 1-2: Arrival & Yoga",
//         "activities": [
//           "12:00 PM - Arrival",
//           "04:00 PM - Evening Aarti",
//           "07:00 AM - Morning Yoga",
//           "10:00 AM - Meditation"
//         ],
//         "icon": "🧘"
//       },
//       {
//         "day": "Day 3: River Rafting & Trekking",
//         "activities": [
//           "07:00 AM - Rafting on Ganges",
//           "01:00 PM - Trekking to Waterfalls"
//         ],
//         "icon": "🏞"
//       },
//       {
//         "day": "Day 4-5: Spiritual Exploration",
//         "activities": [
//           "Visit Beatles Ashram, Swarg Ashram",
//           "Meditation sessions"
//         ],
//         "icon": "🕌"
//       },
//       {
//         "day": "Day 6: Local Culture & Market",
//         "activities": [
//           "Explore local markets and temples",
//           "Cultural dinner event"
//         ],
//         "icon": "🎭"
//       },
//       {
//         "day": "Day 7: Departure",
//         "activities": [
//           "Breakfast and transfer to airport"
//         ],
//         "icon": "✈"
//       }
//     ],
//     "gallery": [
//       { "img": "https://i.pinimg.com/1200x/e2/25/9c/e2259c57bda6dcc928bdc80f3a257c73.jpg", "caption": "Yoga Session" },
//       { "img": "https://i.pinimg.com/1200x/2c/13/26/2c1326af9272aaec6ceea2535d9bc886.jpg", "caption": "Local Culture" },
//       { "img": "https://i.pinimg.com/1200x/7e/2c/3d/7e2c3d0d485d29013a7a2381f6360899.jpg", "caption": "Market Visit" },
//       { "img": "https://i.pinimg.com/1200x/2b/70/0f/2b700f73e360c4157de473f463807cf9.jpg", "caption": "Rafting Action" },
//       { "img": "https://i.pinimg.com/1200x/34/74/26/347426bea3b0bc66af0595b066ab5bbb.jpg", "caption": "Temple Visit" },
//       { "img": "https://i.pinimg.com/1200x/2e/0d/f7/2e0df7bbf8bfaa2fdc4a6f507ef94408.jpg", "caption": "Meditation Spot" }
//     ],
//     "testimonials": [
//       {
//         "quote": "The perfect blend of spirituality and adventure in one trip!",
//         "author": "Aarav & Meera",
//         "rating": 5,
//         "avatar": "👨‍👩‍👧‍👦"
//       }
//     ],
//     "pricing": {
//       "original": 13500,
//       "discounted": 11499,
//       "currency": "₹"
//     }
//   }
// ]
