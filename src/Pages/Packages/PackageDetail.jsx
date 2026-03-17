import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../utils/api";

import {
  FaStar,
  FaRegStar,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaUsers,
  FaCheckCircle,
  FaTimesCircle,
  FaWhatsapp,
  FaArrowLeft,
  FaArrowRight,
  FaClock,
  FaUtensils,
  FaHotel,
  FaCamera,
  FaShieldAlt,
  FaHeart,
  FaShare,
  FaBalanceScale,
  FaTimes,
  FaCheck,
  FaInfoCircle,
  FaSun,
  FaSwimmer,
  FaSpa,
  FaShoppingCart,
  FaPalette,
  FaMusic,
  FaMountain,
  FaWater,
  FaBicycle,
  FaCar,
  FaGem,
  FaLandmark,
  FaTree,
  FaUserFriends,
  FaChild
} from "react-icons/fa";
import { GiTempleDoor } from "react-icons/gi";
import BookingForm from "../../Components/BookingForm/BookingForm";

function PackageDetail() {
  const { location } = useParams();
  // const { user } = useContext(AuthContext); // Uncomment when you have auth context

  // Temporary user state - replace with actual auth
  const [user, setUser] = useState(null);

  const [packageData, setPackageData] = useState(null);
  const [selectedDuration, setSelectedDuration] = useState(null);
  const [activeDay, setActiveDay] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showBooking, setShowBooking] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);
  const [showShareModal, setShowShareModal] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [showComparison, setShowComparison] = useState(false);
  const [showAllInclusions, setShowAllInclusions] = useState(false);
  const [showAllExclusions, setShowAllExclusions] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [pendingBooking, setPendingBooking] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    travelDate: "",
    adults: 1,
    children: 0,
    seniors: 0,
    childAges: [],
    roomPreference: "",
    mealPreference: "",
    pickup: false,
    guide: false,
    insurance: false,
    wheelchair: false,
    message: "",
  });

  // Fetch Package
  useEffect(() => {
    const fetchPackage = async () => {
      try {
        setLoading(true);
        const res = await api.get(`/explore/${location}`);
        const pkg = res.data[0];
        setPackageData(pkg);

        // Set default selected duration
        if (pkg?.durations?.length > 0) {
          setSelectedDuration(pkg.durations[0]);
        }
      } catch (err) {
        setError("Failed to load package details");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (location) {
      fetchPackage();
    }
  }, [location]);

  const handleBookNow = () => {
    if (!user) {
      setShowAlert(true);
      setPendingBooking(true);
    } else {
      setShowBooking(true);
    }
  };

  const handleAlertClose = () => {
    setShowAlert(false);
    setShowLogin(true);
  };

  const handleLoginSuccess = (loggedInUser) => {
    setUser(loggedInUser);
    setShowLogin(false);
    if (pendingBooking) {
      setShowBooking(true);
      setPendingBooking(false);
    }
  };

  const handleWhatsApp = () => {
    const totalTravelers = (formData.adults || 0) + (formData.children || 0) + (formData.seniors || 0);
    const childAgesText = formData.childAges?.length > 0
      ? `\n👶 Children Ages: ${formData.childAges.join(', ')} years`
      : '';

    const message = `
*New Package Inquiry*
════════════════════
🏷️ *Package:* ${packageData?.title}
📍 *Location:* ${packageData?.location}
📅 *Duration:* ${selectedDuration?.duration}
💰 *Price:* ₹${formatPrice(selectedDuration?.discountedPrice || selectedDuration?.price)}

*Travelers:*
👤 Adults: ${formData.adults || 0}
🧒 Children: ${formData.children || 0}${childAgesText}
👴 Seniors: ${formData.seniors || 0}
📊 Total: ${totalTravelers}

*Preferences:*
🏨 Room: ${formData.roomPreference || 'Not specified'}
🍽️ Meal: ${formData.mealPreference || 'Not specified'}
🚗 Pickup: ${formData.pickup ? 'Yes' : 'No'}
👨‍🏫 Private Guide: ${formData.guide ? 'Yes' : 'No'}
🛡️ Insurance: ${formData.insurance ? 'Yes' : 'No'}
♿ Wheelchair Access: ${formData.wheelchair ? 'Yes' : 'No'}

📅 *Travel Date:* ${formData.travelDate || "Not specified"}

*Contact Details:*
👤 Name: ${formData.name || "Not provided"}
📧 Email: ${formData.email || "Not provided"}
📞 Phone: ${formData.phone || "Not provided"}

*Message:* ${formData.message || "No special requests"}
  `;

    const phone = "919876543210";
    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  const handleBookingSuccess = () => {
    // Reset form after successful booking
    setFormData({
      name: "",
      email: "",
      phone: "",
      travelDate: "",
      adults: 1,
      children: 0,
      seniors: 0,
      childAges: [],
      roomPreference: "",
      mealPreference: "",
      pickup: false,
      guide: false,
      insurance: false,
      wheelchair: false,
      message: "",
    });
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<FaStar key={i} className="star-filled" />);
      } else if (i === fullStars && hasHalfStar) {
        stars.push(<FaStar key={i} className="star-half" />);
      } else {
        stars.push(<FaRegStar key={i} className="star-empty" />);
      }
    }
    return stars;
  };

  const getBestValueDuration = () => {
    if (!packageData?.durations) return null;

    return packageData.durations.reduce((best, current) => {
      const currentDiscount = current.discountedPrice
        ? ((current.price - current.discountedPrice) / current.price * 100).toFixed(0)
        : 0;
      const bestDiscount = best.discountedPrice
        ? ((best.price - best.discountedPrice) / best.price * 100).toFixed(0)
        : 0;

      return currentDiscount > bestDiscount ? current : best;
    }, packageData.durations[0]);
  };

  const getDurationHighlights = (duration) => {
    const activities = duration.itinerary?.flatMap(day => day.activities) || [];
    return {
      totalDays: duration.duration,
      totalActivities: activities.length,
      price: duration.discountedPrice || duration.price,
      originalPrice: duration.price,
      discount: duration.discountedPrice
        ? ((duration.price - duration.discountedPrice) / duration.price * 100).toFixed(0)
        : 0,
      perDayCost: Math.round((duration.discountedPrice || duration.price) /
        (parseInt(duration.duration) || 3)),
    };
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN').format(price);
  };

  const getIconForActivity = (activity) => {
    const activityLower = activity.toLowerCase();
    if (activityLower.includes('breakfast') || activityLower.includes('lunch') || activityLower.includes('dinner')) return <FaUtensils />;
    if (activityLower.includes('hotel') || activityLower.includes('check')) return <FaHotel />;
    if (activityLower.includes('taj') || activityLower.includes('fort') || activityLower.includes('monument')) return <FaLandmark />;
    if (activityLower.includes('temple') || activityLower.includes('church') || activityLower.includes('mosque')) return <GiTempleDoor />;
    if (activityLower.includes('swim') || activityLower.includes('pool')) return <FaSwimmer />;
    if (activityLower.includes('spa')) return <FaSpa />;
    if (activityLower.includes('shopping') || activityLower.includes('market')) return <FaShoppingCart />;
    if (activityLower.includes('museum') || activityLower.includes('gallery')) return <FaPalette />;
    if (activityLower.includes('music') || activityLower.includes('dance') || activityLower.includes('show')) return <FaMusic />;
    if (activityLower.includes('trek') || activityLower.includes('hike') || activityLower.includes('mountain')) return <FaMountain />;
    if (activityLower.includes('beach') || activityLower.includes('sea') || activityLower.includes('ocean')) return <FaWater />;
    if (activityLower.includes('bike') || activityLower.includes('cycle')) return <FaBicycle />;
    if (activityLower.includes('car') || activityLower.includes('drive') || activityLower.includes('transport')) return <FaCar />;
    return <FaSun />;
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loader"></div>
        <p className="loading-text">Crafting your perfect journey...</p>
      </div>
    );
  }

  if (error) return <div className="error-container">{error}</div>;
  if (!packageData) return <div className="error-container">No Package Found</div>;

  const bestValueDuration = getBestValueDuration();
  const totalTravelers = (formData.adults || 0) + (formData.children || 0) + (formData.seniors || 0);

  return (
    <div className="package-detail">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="container">
            <div className="hero-grid">
              <div className="hero-info">
                <div className="badge-container">
                  <span className="featured-badge">
                    <FaStar /> Featured Destination 2024
                  </span>
                  <span className="rating-badge">
                    {renderStars(packageData.rating || 4.8)}
                    <span className="rating-value">{packageData.rating || 4.8}</span>
                  </span>
                </div>

                <h1 className="hero-title">
                  {packageData.title || `Discover ${packageData.location}`}
                </h1>

                <div className="hero-meta">
                  <span className="location">
                    <FaMapMarkerAlt /> {packageData.location}
                  </span>
                  <span className="duration-meta">
                    <FaClock /> {packageData.durations?.length || 4} Packages
                  </span>
                  <span className="group-meta">
                    <FaUsers /> Up to {packageData.groupSize || 12} People
                  </span>
                </div>

                <p className="hero-description">
                  {packageData.caption || packageData.overview?.substring(0, 200)}...
                </p>

                <div className="hero-actions">
                  <button className="btn-primary" onClick={handleBookNow}>
                    Book Your Escape
                  </button>
                  <button className="btn-outline" onClick={() => setShowShareModal(true)}>
                    <FaShare /> Share
                  </button>
                </div>
              </div>

              <div className="hero-gallery">
                <div className="main-image">
                  <img
                    src={packageData.images?.[selectedImage] || packageData.images?.[0] || "/api/placeholder/800/600"}
                    alt={packageData.title}
                  />
                  {packageData.images?.length > 1 && (
                    <>
                      <button
                        className="gallery-nav prev"
                        onClick={() => setSelectedImage(prev =>
                          prev === 0 ? packageData.images.length - 1 : prev - 1
                        )}
                      >
                        <FaArrowLeft />
                      </button>
                      <button
                        className="gallery-nav next"
                        onClick={() => setSelectedImage(prev =>
                          prev === packageData.images.length - 1 ? 0 : prev + 1
                        )}
                      >
                        <FaArrowRight />
                      </button>
                    </>
                  )}
                  <div className="image-counter">
                    <FaCamera /> {selectedImage + 1} / {packageData.images?.length}
                  </div>
                  <button
                    className="wishlist-btn"
                    onClick={() => setIsWishlisted(!isWishlisted)}
                  >
                    <FaHeart color={isWishlisted ? "#ff4444" : "#fff"} />
                  </button>
                </div>

                {packageData.images?.length > 1 && (
                  <div className="thumbnail-grid">
                    {packageData.images.slice(0, 4).map((img, index) => (
                      <div
                        key={index}
                        className={`thumbnail ${selectedImage === index ? 'active' : ''}`}
                        onClick={() => setSelectedImage(index)}
                      >
                        <img src={img} alt={`Thumbnail ${index + 1}`} />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="quick-stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-icon">🌤️</div>
              <div className="stat-content">
                <div className="stat-label">Best Time</div>
                <div className="stat-value">Oct - March</div>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">⏱️</div>
              <div className="stat-content">
                <div className="stat-label">Duration</div>
                <div className="stat-value">3-7 Days</div>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">👥</div>
              <div className="stat-content">
                <div className="stat-label">Group Size</div>
                <div className="stat-value">Up to {packageData.groupSize || 12}</div>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">🛡️</div>
              <div className="stat-content">
                <div className="stat-label">Safety</div>
                <div className="stat-value">Certified</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container">
        <div className="content-grid">
          {/* Left Column */}
          <div className="main-content">
            {/* Overview */}
            <section className="content-section">
              <h2 className="section-title">Overview</h2>
              <p className="overview-text">{packageData.overview}</p>
              {packageData.description && (
                <p className="description-text">{packageData.description}</p>
              )}
            </section>

            {/* Highlights */}
            {packageData.highlights?.length > 0 && (
              <section className="content-section">
                <h2 className="section-title">✨ Highlights</h2>
                <div className="highlights-grid">
                  {packageData.highlights.map((item, index) => (
                    <div key={index} className="highlight-card">
                      <div className="highlight-icon">
                        {index === 0 && <FaGem />}
                        {index === 1 && <FaLandmark />}
                        {index === 2 && <FaTree />}
                        {index === 3 && <FaUtensils />}
                        {index === 4 && <FaShoppingCart />}
                        {index === 5 && <FaMusic />}
                        {index >= 6 && <FaStar />}
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Duration Selection */}
            {packageData.durations?.length > 0 && (
              <section className="content-section">
                <div className="section-header">
                  <h2 className="section-title">📅 Choose Duration</h2>
                  {packageData.durations.length > 1 && (
                    <button className="compare-btn" onClick={() => setShowComparison(true)}>
                      <FaBalanceScale /> Compare Packages
                    </button>
                  )}
                </div>

                <div className="duration-grid">
                  {packageData.durations.map((duration, index) => {
                    const isSelected = selectedDuration?.duration === duration.duration;
                    const isBestValue = bestValueDuration?.duration === duration.duration;
                    const stats = getDurationHighlights(duration);

                    return (
                      <div
                        key={index}
                        className={`duration-card ${isSelected ? 'selected' : ''} ${isBestValue ? 'best-value' : ''}`}
                        onClick={() => {
                          setSelectedDuration(duration);
                          setActiveDay(0);
                        }}
                      >
                        {isBestValue && <span className="best-value-badge">Best Value</span>}
                        <div className="duration-header">
                          <h3 className="duration-name">{duration.duration}</h3>
                          <span className="duration-price">₹{formatPrice(duration.discountedPrice || duration.price)}</span>
                        </div>
                        {duration.discountedPrice && (
                          <div className="duration-discount">
                            <span className="original-price">₹{formatPrice(duration.price)}</span>
                            <span className="discount-badge">{stats.discount}% off</span>
                          </div>
                        )}
                        <div className="duration-stats">
                          <span><FaCalendarAlt /> {stats.totalDays}</span>
                          <span><FaClock /> {stats.totalActivities} activities</span>
                          <span>₹{formatPrice(stats.perDayCost)}/day</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>
            )}

            {/* Itinerary */}
            {selectedDuration?.itinerary?.length > 0 && (
              <section className="content-section">
                <h2 className="section-title">📋 Journey Timeline</h2>
                <p className="section-subtitle">
                  {selectedDuration.duration} • {selectedDuration.itinerary.length} Days
                </p>

                <div className="timeline">
                  {selectedDuration.itinerary.map((day, index) => {
                    const isActive = activeDay === index;
                    const dayNumber = index + 1;

                    return (
                      <div key={index} className="timeline-item">
                        <div className="timeline-marker" onClick={() => setActiveDay(index)}>
                          <span className="marker-day">Day {dayNumber}</span>
                          <div className={`marker-dot ${isActive ? 'active' : ''}`}></div>
                        </div>

                        <div className={`timeline-content ${isActive ? 'active' : ''}`}>
                          <div className="timeline-header" onClick={() => setActiveDay(index)}>
                            <h3 className="timeline-day-title">
                              {day.title || `Day ${day.day || dayNumber}`}
                            </h3>
                            <span className="timeline-arrow">{isActive ? '▼' : '▶'}</span>
                          </div>

                          {isActive && (
                            <div className="timeline-body">
                              {day.description && (
                                <p className="day-description">{day.description}</p>
                              )}

                              {day.activities?.length > 0 && (
                                <div className="activities-list">
                                  {day.activities.map((activity, idx) => {
                                    const [time, ...descParts] = activity.split(" - ");
                                    const description = descParts.join(" - ");

                                    return (
                                      <div key={idx} className="activity-item">
                                        <div className="activity-time">
                                          {getIconForActivity(activity)}
                                          <span>{time || "Flexible"}</span>
                                        </div>
                                        <div className="activity-description">
                                          {description || activity}
                                        </div>
                                      </div>
                                    );
                                  })}
                                </div>
                              )}
                            </div>
                          )}

                          {!isActive && day.activities?.[0] && (
                            <div className="timeline-preview">
                              <FaClock /> {day.activities[0].substring(0, 50)}...
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="timeline-legend">
                  <div className="legend-item">
                    <span className="legend-dot active"></span>
                    <span>Current Day</span>
                  </div>
                  <div className="legend-item">
                    <span className="legend-dot"></span>
                    <span>Upcoming Days</span>
                  </div>
                </div>
              </section>
            )}

            {/* Inclusions & Exclusions */}
            <div className="inclusion-grid">
              {packageData.inclusions?.length > 0 && (
                <section className="content-section">
                  <h2 className="section-title">✅ Inclusions</h2>
                  <ul className="inclusion-list">
                    {(showAllInclusions ? packageData.inclusions : packageData.inclusions.slice(0, 6)).map((item, index) => (
                      <li key={index}>
                        <FaCheckCircle className="check-icon" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  {packageData.inclusions.length > 6 && (
                    <button className="show-more-btn" onClick={() => setShowAllInclusions(!showAllInclusions)}>
                      {showAllInclusions ? 'Show Less' : `Show ${packageData.inclusions.length - 6} More`}
                    </button>
                  )}
                </section>
              )}

              {packageData.exclusions?.length > 0 && (
                <section className="content-section">
                  <h2 className="section-title">❌ Exclusions</h2>
                  <ul className="inclusion-list">
                    {(showAllExclusions ? packageData.exclusions : packageData.exclusions.slice(0, 6)).map((item, index) => (
                      <li key={index}>
                        <FaTimesCircle className="times-icon" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  {packageData.exclusions.length > 6 && (
                    <button className="show-more-btn" onClick={() => setShowAllExclusions(!showAllExclusions)}>
                      {showAllExclusions ? 'Show Less' : `Show ${packageData.exclusions.length - 6} More`}
                    </button>
                  )}
                </section>
              )}
            </div>
          </div>

          {/* Right Column - Booking Widget */}
          <div className="booking-widget">
            <div className="widget-sticky">
              {/* Price Summary */}
              {selectedDuration && (
                <div className="price-summary">
                  <div className="price-header">
                    <span className="price-label">Starting from</span>
                    <div className="price-value">
                      <span className="currency">₹</span>
                      <span className="amount">{formatPrice(selectedDuration.discountedPrice || selectedDuration.price)}</span>
                    </div>
                  </div>
                  {selectedDuration.discountedPrice && (
                    <div className="price-original">
                      <span className="original">₹{formatPrice(selectedDuration.price)}</span>
                      <span className="savings">
                        Save ₹{formatPrice(selectedDuration.price - selectedDuration.discountedPrice)}
                      </span>
                    </div>
                  )}
                  <p className="price-note">per person • inclusive of all taxes</p>
                </div>
              )}

              {/* Traveler Selection */}
              <div className="traveler-section">
                <h4 className="widget-title">Travelers</h4>
                <div className="traveler-controls">
                  <div className="traveler-item">
                    <div className="traveler-info">
                      <FaUserFriends />
                      <span>Adults <small>(12-59 years)</small></span>
                    </div>
                    <div className="traveler-counter">
                      <button
                        className="counter-btn"
                        onClick={() => setFormData({ ...formData, adults: Math.max(0, (formData.adults || 0) - 1) })}
                      >
                        -
                      </button>
                      <span className="counter-value">{formData.adults || 0}</span>
                      <button
                        className="counter-btn"
                        onClick={() => setFormData({ ...formData, adults: (formData.adults || 0) + 1 })}
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="traveler-item">
                    <div className="traveler-info">
                      <FaChild />
                      <span>Children <small>(2-11 years)</small></span>
                    </div>
                    <div className="traveler-counter">
                      <button
                        className="counter-btn"
                        onClick={() => setFormData({ ...formData, children: Math.max(0, (formData.children || 0) - 1) })}
                      >
                        -
                      </button>
                      <span className="counter-value">{formData.children || 0}</span>
                      <button
                        className="counter-btn"
                        onClick={() => setFormData({ ...formData, children: (formData.children || 0) + 1 })}
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="traveler-item">
                    <div className="traveler-info">
                      <FaUserFriends />
                      <span>Seniors <small>(60+ years)</small></span>
                    </div>
                    <div className="traveler-counter">
                      <button
                        className="counter-btn"
                        onClick={() => setFormData({ ...formData, seniors: Math.max(0, (formData.seniors || 0) - 1) })}
                      >
                        -
                      </button>
                      <span className="counter-value">{formData.seniors || 0}</span>
                      <button
                        className="counter-btn"
                        onClick={() => setFormData({ ...formData, seniors: (formData.seniors || 0) + 1 })}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                <div className="total-price">
                  <span>Total Travelers</span>
                  <span className="total-amount">{totalTravelers}</span>
                </div>
              </div>

              {/* Date Selection */}
              <div className="date-section">
                <h4 className="widget-title">Travel Date</h4>
                <input
                  type="date"
                  className="date-input"
                  min={new Date().toISOString().split('T')[0]}
                  value={formData.travelDate}
                  onChange={(e) => setFormData({ ...formData, travelDate: e.target.value })}
                />
              </div>

              {/* Action Buttons */}
              <div className="action-buttons">
                <button className="book-now-btn" onClick={handleBookNow}>
                  Book Now
                </button>
                <button className="whatsapp-btn" onClick={handleWhatsApp}>
                  <FaWhatsapp /> WhatsApp
                </button>
              </div>

              {/* Trust Badges */}
              <div className="trust-badges">
                <div className="trust-badge">
                  <FaShieldAlt /> Secure Booking
                </div>
                <div className="trust-badge">
                  <FaClock /> Instant Confirmation
                </div>
                <div className="trust-badge">
                  <FaUsers /> Best Price Guarantee
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Experience {packageData.location}?</h2>
            <p className="cta-text">
              Join hundreds of happy travelers who've discovered the beauty of this destination.
              Limited slots available for the upcoming season.
            </p>
            <button className="cta-button" onClick={handleBookNow}>
              Book Your Adventure Now
            </button>
          </div>
        </div>
      </section>

      {/* Booking Form Modal */}
      {/* <BookingForm
        isOpen={showBooking}
        onClose={() => setShowBooking(false)}
        packageData={packageData}
        selectedDuration={selectedDuration}
        user={user}
        onSuccess={handleBookingSuccess}
      /> */}

      {user ? (
  showBooking && <BookingForm user={user} onClose={() => setShowBooking(false)} />
) : (
  showAlert && (
    <div className="alert-overlay">
      <div className="alert-box">
        <h4>Login Required</h4>
        <p>Please login first to book this package!</p>
        <button onClick={handleAlertClose}>Login Now</button>
      </div>
    </div>
  )
)}

{showLogin && <Login onClose={() => setShowLogin(false)} onLoginSuccess={handleLoginSuccess} />}


      {/* Comparison Modal */}
      {showComparison && (
        <div className="modal-overlay" onClick={() => setShowComparison(false)}>
          <div className="modal-content comparison-modal" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowComparison(false)}>
              <FaTimes />
            </button>

            <h2 className="modal-title">Compare Packages</h2>

            <div className="comparison-table-wrapper">
              <table className="comparison-table">
                <thead>
                  <tr>
                    <th>Features</th>
                    {packageData.durations.map((dur, idx) => (
                      <th key={idx}>
                        {dur.duration}
                        {bestValueDuration?.duration === dur.duration && (
                          <span className="best-value-tag">Best Value</span>
                        )}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Price</td>
                    {packageData.durations.map((dur, idx) => (
                      <td key={idx}>
                        <div className="compare-price">
                          <span className="current">₹{formatPrice(dur.discountedPrice || dur.price)}</span>
                          {dur.discountedPrice && (
                            <span className="original">₹{formatPrice(dur.price)}</span>
                          )}
                        </div>
                      </td>
                    ))}
                  </tr>

                  <tr>
                    <td>Per Day Cost</td>
                    {packageData.durations.map((dur, idx) => {
                      const perDay = Math.round((dur.discountedPrice || dur.price) /
                        (parseInt(dur.duration) || 3));
                      return (
                        <td key={idx}>₹{formatPrice(perDay)}/day</td>
                      );
                    })}
                  </tr>

                  <tr>
                    <td>Duration</td>
                    {packageData.durations.map((dur, idx) => (
                      <td key={idx}>{dur.duration}</td>
                    ))}
                  </tr>

                  <tr>
                    <td>Activities</td>
                    {packageData.durations.map((dur, idx) => {
                      const activities = dur.itinerary?.flatMap(day => day.activities)?.length || 0;
                      return (
                        <td key={idx}>{activities} activities</td>
                      );
                    })}
                  </tr>

                  <tr>
                    <td>Itinerary Days</td>
                    {packageData.durations.map((dur, idx) => (
                      <td key={idx}>{dur.itinerary?.length || 0} days</td>
                    ))}
                  </tr>

                  <tr>
                    <td>Savings</td>
                    {packageData.durations.map((dur, idx) => {
                      const savings = dur.discountedPrice ? dur.price - dur.discountedPrice : 0;
                      return (
                        <td key={idx}>
                          {savings > 0 ? (
                            <span className="savings-amount">₹{formatPrice(savings)}</span>
                          ) : '-'}
                        </td>
                      );
                    })}
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="comparison-footer">
              <p className="comparison-note">
                <FaInfoCircle /> All prices are per person and include taxes
              </p>
              <button className="close-btn" onClick={() => setShowComparison(false)}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Share Modal */}
      {showShareModal && (
        <div className="modal-overlay" onClick={() => setShowShareModal(false)}>
          <div className="modal-content share-modal" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowShareModal(false)}>
              <FaTimes />
            </button>

            <h3 className="modal-title">Share this package</h3>

            <div className="share-options">
              <button className="share-btn" onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: packageData.title,
                    text: packageData.caption || packageData.description,
                    url: window.location.href,
                  });
                } else {
                  navigator.clipboard.writeText(window.location.href);
                  alert('Link copied to clipboard!');
                }
              }}>
                📱 Share via...
              </button>
              <button className="share-btn" onClick={() => {
                navigator.clipboard.writeText(window.location.href);
                alert('Link copied to clipboard!');
              }}>
                🔗 Copy Link
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .package-detail {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          color: #333;
        }

        /* Loading */
        .loading-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 80vh;
        }

        .loader {
          width: 60px;
          height: 60px;
          border: 4px solid #f3f3f3;
          border-top: 4px solid #4158D0;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin-bottom: 20px;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .loading-text {
          color: #666;
          font-size: 1.2rem;
        }

        .error-container {
          text-align: center;
          padding: 60px 20px;
          color: #ef4444;
          background: #fef2f2;
          border-radius: 12px;
          margin: 40px auto;
          max-width: 600px;
        }

        /* Hero Section */
        .hero-section {
          position: relative;
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
          color: white;
          padding: 60px 0 0;
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.3);
        }

        .hero-content {
          position: relative;
          z-index: 2;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .badge-container {
          display: flex;
          gap: 15px;
          margin-bottom: 25px;
          flex-wrap: wrap;
        }

        .featured-badge {
          background: rgba(255, 215, 0, 0.2);
          padding: 8px 16px;
          border-radius: 30px;
          font-size: 0.9rem;
          backdrop-filter: blur(10px);
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }

        .rating-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255, 255, 255, 0.1);
          padding: 8px 16px;
          border-radius: 30px;
        }

        .star-filled {
          color: #FFD700;
        }

        .star-half {
          color: #FFD700;
          opacity: 0.7;
        }

        .star-empty {
          color: rgba(255, 255, 255, 0.3);
        }

        .rating-value {
          margin-left: 5px;
          font-weight: 600;
        }

        .hero-title {
          font-size: 3rem;
          font-weight: 700;
          margin-bottom: 20px;
          line-height: 1.2;
        }

        .hero-meta {
          display: flex;
          gap: 25px;
          margin-bottom: 25px;
          flex-wrap: wrap;
        }

        .hero-meta span {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 1rem;
          opacity: 0.9;
        }

        .hero-description {
          font-size: 1.1rem;
          line-height: 1.6;
          margin-bottom: 30px;
          opacity: 0.9;
        }

        .hero-actions {
          display: flex;
          gap: 15px;
        }

        .btn-primary {
          background: linear-gradient(145deg, #4158D0, #C850C0);
          color: white;
          padding: 14px 35px;
          border: none;
          border-radius: 50px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 10px 20px rgba(65, 88, 208, 0.3);
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 15px 30px rgba(65, 88, 208, 0.4);
        }

        .btn-outline {
          background: transparent;
          color: white;
          padding: 14px 25px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-radius: 50px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: all 0.3s ease;
        }

        .btn-outline:hover {
          background: white;
          color: #333;
          border-color: white;
        }

        /* Hero Gallery */
        .hero-gallery {
          position: relative;
        }

        .main-image {
          position: relative;
          height: 400px;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
        }

        .main-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .gallery-nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 45px;
          height: 45px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          border: none;
          color: white;
          font-size: 1.2rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          z-index: 10;
        }

        .gallery-nav.prev {
          left: 15px;
        }

        .gallery-nav.next {
          right: 15px;
        }

        .gallery-nav:hover {
          background: rgba(255, 255, 255, 0.4);
        }

        .image-counter {
          position: absolute;
          bottom: 15px;
          right: 15px;
          background: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(10px);
          color: white;
          padding: 6px 12px;
          border-radius: 30px;
          font-size: 0.85rem;
          display: flex;
          align-items: center;
          gap: 6px;
          z-index: 10;
        }

        .wishlist-btn {
          position: absolute;
          top: 15px;
          right: 15px;
          width: 45px;
          height: 45px;
          border-radius: 50%;
          background: rgba(0, 0, 0, 0.4);
          backdrop-filter: blur(10px);
          border: none;
          color: white;
          font-size: 1.2rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          z-index: 10;
        }

        .wishlist-btn:hover {
          transform: scale(1.1);
        }

        .thumbnail-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 10px;
          margin-top: 15px;
        }

        .thumbnail {
          height: 80px;
          border-radius: 10px;
          overflow: hidden;
          cursor: pointer;
          opacity: 0.7;
          transition: all 0.3s ease;
        }

        .thumbnail.active {
          opacity: 1;
          border: 3px solid #4158D0;
        }

        .thumbnail:hover {
          opacity: 1;
        }

        .thumbnail img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* Quick Stats */
        .quick-stats {
          background: white;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
          padding: 30px 0;
          position: relative;
          z-index: 10;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
        }

        .stat-item {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .stat-icon {
          font-size: 2.5rem;
        }

        .stat-label {
          font-size: 0.9rem;
          color: #999;
          margin-bottom: 5px;
        }

        .stat-value {
          font-size: 1.2rem;
          font-weight: 600;
          color: #333;
        }

        /* Content Grid */
        .content-grid {
          display: grid;
          grid-template-columns: 1fr 350px;
          gap: 40px;
          margin: 60px 0;
        }

        /* Main Content */
        .content-section {
          background: white;
          padding: 30px;
          border-radius: 20px;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
          margin-bottom: 30px;
        }

        .section-title {
          font-size: 1.8rem;
          font-weight: 600;
          color: #333;
          margin-bottom: 20px;
        }

        .section-subtitle {
          font-size: 1rem;
          color: #666;
          margin-bottom: 25px;
        }

        .overview-text {
          font-size: 1.1rem;
          line-height: 1.7;
          color: #555;
          margin-bottom: 20px;
        }

        .description-text {
          font-size: 1rem;
          line-height: 1.6;
          color: #666;
        }

        /* Highlights */
        .highlights-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 15px;
        }

        .highlight-card {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 15px;
          background: #f8f9fa;
          border-radius: 12px;
          transition: all 0.3s ease;
        }

        .highlight-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }

        .highlight-icon {
          width: 40px;
          height: 40px;
          background: linear-gradient(145deg, #4158D0, #C850C0);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 1.2rem;
        }

        /* Duration Selection */
        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }

        .compare-btn {
          padding: 10px 20px;
          background: transparent;
          border: 2px solid #4158D0;
          border-radius: 30px;
          color: #4158D0;
          font-size: 0.95rem;
          font-weight: 600;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: all 0.3s ease;
        }

        .compare-btn:hover {
          background: #4158D0;
          color: white;
        }

        .duration-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 15px;
        }

        .duration-card {
          background: #f8f9fa;
          padding: 20px;
          border-radius: 15px;
          cursor: pointer;
          position: relative;
          transition: all 0.3s ease;
          border: 2px solid transparent;
        }

        .duration-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        }

        .duration-card.selected {
          background: linear-gradient(145deg, #4158D0, #C850C0);
          color: white;
          border-color: #4158D0;
        }

        .duration-card.selected .duration-stats {
          color: rgba(255, 255, 255, 0.9);
        }

        .duration-card.best-value {
          border-color: #10b981;
        }

        .best-value-badge {
          position: absolute;
          top: -10px;
          left: 20px;
          background: #10b981;
          color: white;
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
        }

        .duration-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 10px;
        }

        .duration-name {
          font-size: 1.2rem;
          font-weight: 600;
          margin: 0;
        }

        .duration-price {
          font-size: 1.3rem;
          font-weight: 700;
        }

        .duration-discount {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 10px;
        }

        .original-price {
          font-size: 0.9rem;
          text-decoration: line-through;
          opacity: 0.7;
        }

        .discount-badge {
          background: #ef4444;
          color: white;
          padding: 2px 8px;
          border-radius: 15px;
          font-size: 0.8rem;
          font-weight: 600;
        }

        .duration-stats {
          display: flex;
          gap: 15px;
          font-size: 0.85rem;
          color: #666;
        }

        /* Timeline */
        .timeline {
          position: relative;
          padding: 20px 0;
        }

        .timeline-item {
          display: flex;
          gap: 20px;
          margin-bottom: 20px;
        }

        .timeline-marker {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 80px;
          flex-shrink: 0;
          cursor: pointer;
        }

        .marker-day {
          font-size: 0.85rem;
          font-weight: 600;
          color: #666;
          margin-bottom: 8px;
        }

        .marker-dot {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: #e0e0e0;
          transition: all 0.3s ease;
          position: relative;
        }

        .marker-dot.active {
          background: #4158D0;
          transform: scale(1.3);
          box-shadow: 0 0 0 3px rgba(65, 88, 208, 0.2);
        }

        .marker-dot.active::after {
          content: '';
          position: absolute;
          top: -3px;
          left: -3px;
          right: -3px;
          bottom: -3px;
          border-radius: 50%;
          border: 2px solid rgba(65, 88, 208, 0.3);
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.5);
            opacity: 0;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        .timeline-content {
          flex: 1;
          background: #f8f9fa;
          border-radius: 15px;
          padding: 20px;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .timeline-content.active {
          background: white;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
        }

        .timeline-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .timeline-day-title {
          font-size: 1.2rem;
          font-weight: 600;
          color: #333;
          margin: 0;
        }

        .timeline-arrow {
          color: #999;
          font-size: 1.2rem;
        }

        .timeline-body {
          margin-top: 20px;
        }

        .day-description {
          font-size: 1rem;
          line-height: 1.6;
          color: #555;
          margin-bottom: 20px;
          padding-bottom: 15px;
          border-bottom: 1px dashed #e0e0e0;
        }

        .activities-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .activity-item {
          display: flex;
          gap: 15px;
          padding: 10px;
          background: white;
          border-radius: 10px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
        }

        .activity-item:hover {
          transform: translateX(5px);
        }

        .activity-time {
          min-width: 100px;
          padding: 6px 12px;
          background: linear-gradient(145deg, #4158D0, #C850C0);
          color: white;
          border-radius: 20px;
          font-size: 0.9rem;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .activity-description {
          flex: 1;
          color: #555;
        }

        .timeline-preview {
          font-size: 0.95rem;
          color: #999;
          margin-top: 10px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .timeline-legend {
          display: flex;
          justify-content: center;
          gap: 30px;
          margin-top: 30px;
          padding: 15px;
          background: #f8f9fa;
          border-radius: 30px;
        }

        .legend-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.9rem;
          color: #666;
        }

        .legend-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #e0e0e0;
        }

        .legend-dot.active {
          background: #4158D0;
        }

        /* Inclusions */
        .inclusion-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .inclusion-list {
          list-style: none;
          padding: 0;
          margin: 0 0 15px;
        }

        .inclusion-list li {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px 0;
          border-bottom: 1px solid #f0f0f0;
          color: #555;
        }

        .inclusion-list li:last-child {
          border-bottom: none;
        }

        .check-icon {
          color: #10b981;
          font-size: 1.1rem;
          flex-shrink: 0;
        }

        .times-icon {
          color: #ef4444;
          font-size: 1.1rem;
          flex-shrink: 0;
        }

        .show-more-btn {
          background: none;
          border: none;
          color: #4158D0;
          font-weight: 600;
          cursor: pointer;
          padding: 5px 0;
        }

        .show-more-btn:hover {
          text-decoration: underline;
        }

        /* Booking Widget */
        .booking-widget {
          position: sticky;
          top: 20px;
          align-self: start;
        }

        .widget-sticky {
          background: white;
          border-radius: 20px;
          padding: 25px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }

        .price-summary {
          padding-bottom: 20px;
          border-bottom: 2px dashed #f0f0f0;
          margin-bottom: 20px;
        }

        .price-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 10px;
        }

        .price-label {
          font-size: 0.95rem;
          color: #666;
        }

        .price-value {
          display: flex;
          align-items: baseline;
          gap: 5px;
        }

        .currency {
          font-size: 1.5rem;
          color: #4158D0;
          font-weight: 600;
        }

        .amount {
          font-size: 2.5rem;
          font-weight: 700;
          color: #333;
          line-height: 1;
        }

        .price-original {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 5px;
        }

        .original {
          font-size: 1rem;
          color: #999;
          text-decoration: line-through;
        }

        .savings {
          background: #10b981;
          color: white;
          padding: 3px 10px;
          border-radius: 15px;
          font-size: 0.85rem;
          font-weight: 600;
        }

        .price-note {
          font-size: 0.85rem;
          color: #888;
          margin: 0;
        }

        .widget-title {
          font-size: 1rem;
          font-weight: 600;
          color: #333;
          margin-bottom: 15px;
        }

        .traveler-section {
          margin-bottom: 20px;
        }

        .traveler-controls {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .traveler-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .traveler-info {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .traveler-info small {
          display: block;
          font-size: 0.7rem;
          color: #999;
        }

        .traveler-counter {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .counter-btn {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          border: 1px solid #e0e0e0;
          background: white;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
          transition: all 0.3s ease;
        }

        .counter-btn:hover {
          background: #f0f0f0;
        }

        .counter-value {
          font-weight: 600;
          min-width: 25px;
          text-align: center;
        }

        .total-price {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 15px 0;
          margin-top: 15px;
          border-top: 1px solid #f0f0f0;
          font-weight: 600;
        }

        .total-amount {
          font-size: 1.3rem;
          color: #4158D0;
        }

        .date-section {
          margin-bottom: 20px;
        }

        .date-input {
          width: 100%;
          padding: 12px 15px;
          border: 2px solid #e0e0e0;
          border-radius: 10px;
          font-size: 1rem;
          outline: none;
          transition: all 0.3s ease;
        }

        .date-input:focus {
          border-color: #4158D0;
        }

        .action-buttons {
          display: flex;
          gap: 15px;
          margin-bottom: 20px;
        }

        .book-now-btn {
          flex: 2;
          padding: 14px;
          background: linear-gradient(145deg, #4158D0, #C850C0);
          color: white;
          border: none;
          border-radius: 50px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .book-now-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(65, 88, 208, 0.3);
        }

        .whatsapp-btn {
          flex: 1;
          padding: 14px;
          background: #25D366;
          color: white;
          border: none;
          border-radius: 50px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          transition: all 0.3s ease;
        }

        .whatsapp-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(37, 211, 102, 0.3);
        }

        .trust-badges {
          display: flex;
          justify-content: space-between;
          gap: 10px;
          padding-top: 15px;
          border-top: 1px solid #f0f0f0;
        }

        .trust-badge {
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 0.8rem;
          color: #666;
        }

        /* CTA Section */
        .cta-section {
          padding: 100px 0;
          background: linear-gradient(135deg, #4158D0 0%, #C850C0 100%);
          color: white;
          margin-top: 60px;
        }

        .cta-content {
          text-align: center;
          max-width: 700px;
          margin: 0 auto;
        }

        .cta-title {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 20px;
        }

        .cta-text {
          font-size: 1.2rem;
          margin-bottom: 30px;
          opacity: 0.9;
        }

        .cta-button {
          background: white;
          color: #4158D0;
          padding: 16px 40px;
          border: none;
          border-radius: 50px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        }

        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
        }

        /* Alert Box */
        .alert-box {
          background: white;
          border-radius: 20px;
          padding: 40px;
          max-width: 400px;
          text-align: center;
          animation: slideUp 0.3s ease;
        }

        .alert-icon {
          color: #ff4444;
          margin-bottom: 20px;
        }

        .alert-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #333;
          margin-bottom: 10px;
        }

        .alert-message {
          color: #666;
          margin-bottom: 25px;
        }

        .alert-button {
          background: linear-gradient(145deg, #4158D0, #C850C0);
          color: white;
          padding: 12px 30px;
          border: none;
          border-radius: 50px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .alert-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(65, 88, 208, 0.3);
        }

        /* Modal Styles */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.8);
          backdrop-filter: blur(10px);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 2000;
          padding: 20px;
          animation: fadeIn 0.3s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .modal-content {
          background: white;
          border-radius: 30px;
          width: 100%;
          max-width: 600px;
          max-height: 90vh;
          overflow-y: auto;
          padding: 40px;
          position: relative;
          box-shadow: 0 40px 80px rgba(0, 0, 0, 0.4);
          animation: slideUp 0.3s ease;
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .modal-close {
          position: absolute;
          top: 20px;
          right: 20px;
          width: 45px;
          height: 45px;
          border-radius: 50%;
          border: none;
          background: #f0f0f0;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #666;
          transition: all 0.3s ease;
          z-index: 10;
        }

        .modal-close:hover {
          background: #e0e0e0;
          transform: rotate(90deg);
        }

        .modal-title {
          font-size: 2rem;
          font-weight: 700;
          color: #333;
          margin-bottom: 25px;
        }

        /* Comparison Modal */
        .comparison-modal {
          max-width: 900px !important;
        }

        .comparison-table-wrapper {
          overflow-x: auto;
          margin: 20px 0;
        }

        .comparison-table {
          width: 100%;
          border-collapse: collapse;
          min-width: 600px;
        }

        .comparison-table th {
          padding: 20px 15px;
          background: linear-gradient(145deg, #4158D0, #C850C0);
          color: white;
          font-size: 1rem;
          font-weight: 600;
          text-align: center;
          position: relative;
        }

        .best-value-tag {
          display: block;
          padding: 4px 8px;
          background: #FFD700;
          color: #333;
          border-radius: 20px;
          font-size: 0.75rem;
          margin-top: 5px;
        }

        .comparison-table td {
          padding: 15px;
          border-bottom: 1px solid #f0f0f0;
          text-align: center;
          color: #555;
        }

        .comparison-table tr:hover td {
          background: #f8f9fa;
        }

        .compare-price {
          display: flex;
          flex-direction: column;
          gap: 5px;
          align-items: center;
        }

        .compare-price .current {
          font-size: 1.1rem;
          font-weight: 600;
          color: #4158D0;
        }

        .compare-price .original {
          font-size: 0.9rem;
          color: #999;
          text-decoration: line-through;
        }

        .savings-amount {
          color: #10b981;
          font-weight: 600;
        }

        .comparison-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 20px;
          padding-top: 20px;
          border-top: 1px solid #f0f0f0;
        }

        .comparison-note {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #888;
          font-size: 0.9rem;
        }

        .close-btn {
          padding: 12px 30px;
          background: linear-gradient(145deg, #4158D0, #C850C0);
          color: white;
          border: none;
          border-radius: 30px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .close-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(65, 88, 208, 0.3);
        }

        /* Share Modal */
        .share-modal {
          max-width: 400px !important;
        }

        .share-options {
          display: flex;
          flex-direction: column;
          gap: 15px;
          margin-top: 20px;
        }

        .share-btn {
          padding: 15px;
          font-size: 1rem;
          background: #f8f9fa;
          border: 2px solid #e0e0e0;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .share-btn:hover {
          background: #4158D0;
          color: white;
          border-color: #4158D0;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .content-grid {
            grid-template-columns: 1fr;
          }

          .booking-widget {
            position: static;
          }
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }

          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .inclusion-grid {
            grid-template-columns: 1fr;
          }

          .cta-title {
            font-size: 2rem;
          }

          .form-row {
            grid-template-columns: 1fr;
          }

          .traveler-type-grid {
            grid-template-columns: 1fr;
          }

          .preference-checkboxes {
            grid-template-columns: 1fr;
          }

          .modal-content {
            padding: 30px 20px;
          }
        }

        @media (max-width: 576px) {
          .hero-title {
            font-size: 2rem;
          }

          .hero-actions {
            flex-direction: column;
          }

          .stats-grid {
            grid-template-columns: 1fr;
          }

          .duration-grid {
            grid-template-columns: 1fr;
          }

          .timeline-item {
            flex-direction: column;
          }

          .timeline-marker {
            flex-direction: row;
            width: 100%;
            gap: 15px;
          }

          .action-buttons {
            flex-direction: column;
          }

          .age-inputs {
            flex-wrap: wrap;
          }

          .age-select {
            min-width: calc(50% - 5px);
          }

          .traveler-type-header {
            flex-direction: column;
            align-items: flex-start;
          }

          .traveler-age {
            margin-left: 0;
          }
        }
      `}</style>
    </div>
  );
}

export default PackageDetail;