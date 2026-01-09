import React, { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { 
  FaTimes, FaCheck, FaRedo, FaCalendarAlt, FaUser, 
  FaPhone, FaEnvelope, FaHotel, FaPlane, FaReceipt,
  FaChevronDown, FaInfoCircle, FaSpinner
} from "react-icons/fa";
import BookingPopup from "./ConfirmBookingMsg";
import api from "../../utils/api";
const API_URL = import.meta.env.VITE_API_URL;


export default function BookingForm({ onClose, packageId, packageCode, basePricePerDay = 2000 }) {
  const { user } = useContext(AuthContext);
  const overlayRef = useRef();
  const [closing, setClosing] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showSuccessMsg, setShowSuccessMsg] = useState(false);

  const [form, setForm] = useState({
    fullName: user?.name || "",
    email: user?.email || "",
    mobile: "",
    alternateMobile: "",
    destination: "",
    startDate: "",
    duration: "",
    adults: 2,
    children: 0,
    seniors: 0,
    packageCode: packageCode || "",
    accommodationPreference: "Standard",
    travelMode: "flight",
    paymentMethod: "",
    acceptTerms: false
  });

  // OTP State
  const [emailOtpSent, setEmailOtpSent] = useState(false);
  const [mobileOtpSent, setMobileOtpSent] = useState(false);
  const [emailOtp, setEmailOtp] = useState("");
  const [mobileOtp, setMobileOtp] = useState("");
  const [emailVerified, setEmailVerified] = useState(false);
  const [mobileVerified, setMobileVerified] = useState(false);
  const [emailTimer, setEmailTimer] = useState(0);
  const [mobileTimer, setMobileTimer] = useState(0);
  const [sendingEmailOtp, setSendingEmailOtp] = useState(false);
  const [sendingMobileOtp, setSendingMobileOtp] = useState(false);

  // Captcha
  const [captchaA, setCaptchaA] = useState(0);
  const [captchaB, setCaptchaB] = useState(0);
  const [captchaAns, setCaptchaAns] = useState("");
  const [captchaError, setCaptchaError] = useState("");

  // Messages
  const [errors, setErrors] = useState({});
  const [backendError, setBackendError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  // Calculate price and end date
  const calculatePrice = () => {
    const perPerson = Number(form.adults) + Number(form.children) * 0.6 + Number(form.seniors) * 0.8;
    const subtotal = basePricePerDay * Number(form.duration);
    const peopleAdj = Math.max(0, perPerson - 2) * 200;
    return subtotal + peopleAdj;
  };

  const calculateEndDate = (startDate, days = 1) => {
  if (!startDate) return ""; // handle empty startDate

  const date = new Date(startDate); // ✅ declare date
  if (isNaN(date.getTime())) {
    console.error("Invalid start date:", startDate);
    return "";
  }

  date.setDate(date.getDate() + days); // add days
  return date.toISOString().split('T')[0]; // format as YYYY-MM-DD
};

  const [price, setPrice] = useState(calculatePrice());

  // Effects
  useEffect(() => {
    regenerateCaptcha();
  }, []);

  useEffect(() => {
    setPrice(calculatePrice());
  }, [form.duration, form.startDate, form.adults, form.children, form.seniors, basePricePerDay]);

  useEffect(() => {
    let t;
    if (emailTimer > 0) t = setTimeout(() => setEmailTimer(emailTimer - 1), 1000);
    return () => clearTimeout(t);
  }, [emailTimer]);

  useEffect(() => {
    let t;
    if (mobileTimer > 0) t = setTimeout(() => setMobileTimer(mobileTimer - 1), 1000);
    return () => clearTimeout(t);
  }, [mobileTimer]);

  // Helper functions
  const regenerateCaptcha = () => {
    setCaptchaA(Math.floor(Math.random() * 9) + 1);
    setCaptchaB(Math.floor(Math.random() * 9) + 1);
    setCaptchaAns("");
    setCaptchaError("");
  };

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      onClose?.();
      setClosing(false);
    }, 260);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    setErrors(prev => ({ ...prev, [name]: "" }));
    setBackendError("");
    setSuccessMsg("");
  };

  const validate = () => {
    const e = {};
    
    if (!form.fullName.trim()) e.fullName = "Full name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Invalid email";
    if (!form.mobile.trim()) e.mobile = "Mobile is required";
    else if (!/^[6-9]\d{9}$/.test(form.mobile)) e.mobile = "Enter valid 10-digit Indian mobile";
    if (!form.destination) e.destination = "Destination is required";
    if (!form.startDate) e.startDate = "Start date is required";
    if (form.duration < 1) e.duration = "Duration must be at least 1 day";
    if (form.adults < 1) e.adults = "At least 1 adult required";
    if (!form.acceptTerms) e.acceptTerms = "You must accept terms & conditions";
    
    return e;
  };

  // OTP handlers
  const sendEmailOtp = async () => {
    if (!form.email || !/\S+@\S+\.\S+/.test(form.email)) {
      setErrors(prev => ({ ...prev, email: "Please enter a valid email" }));
      return;
    }

    setSendingEmailOtp(true);
    setBackendError("");
    
    try {
      const response = await api.post("/bookings/sendemailOtp", { 
        email: form.email,
        purpose: "booking_verification"
      });
      
      if (response.data.success) {
        alert(`Your Booking Email OTP is: ${response.data.otp}`);
        setEmailOtpSent(true);
        setEmailTimer(60);
        setSuccessMsg("OTP sent to your email!");
      } else {
        setBackendError(response.data.message || "Failed to send OTP");
      }
    } catch (err) {
      const errorMsg = err.response?.data?.message || 
                      err.message || 
                      "Failed to send email OTP";
      setBackendError(errorMsg);
    } finally {
      setSendingEmailOtp(false);
    }
  };

  const sendMobileOtp = async () => {
    if (!form.mobile || !/^[6-9]\d{9}$/.test(form.mobile)) {
      setErrors(prev => ({ ...prev, mobile: "Please enter valid 10-digit Indian mobile" }));
      return;
    }

    setSendingMobileOtp(true);
    setBackendError("");
    
    try {
      const response = await api.post("/bookings/sendmobileOtp", { 
        mobile: `${form.mobile}`,
        purpose: "booking_verification"
      });
     
      if (response.data.success) {
        alert(`Your Booking Mobile OTP is: ${response.data.otp}`);
        setMobileOtpSent(true);
        setMobileTimer(60);
        setSuccessMsg("OTP sent to your mobile!");
      } else {
        setBackendError(response.data.message || "Failed to send OTP");
      }
    } catch (err) {
      const errorMsg = err.response?.data?.message || 
                      err.message || 
                      "Failed to send mobile OTP";
      setBackendError(errorMsg);
    } finally {
      setSendingMobileOtp(false);
    }
  };

  const verifyEmailOtp = async () => {
    if (!emailOtp || emailOtp.length < 4) {
      setBackendError("Please enter a valid OTP");
      return;
    }

    try {
      const response = await api.post("/bookings/verify", {
        email: form.email,
        otp: emailOtp,
        purpose: "booking_verification"
      });
      
      if (response.data.success) {
        setEmailVerified(true);
        setSuccessMsg("Email verified successfully!");
      } else {
        setBackendError(response.data.message || "Invalid OTP");
      }
    } catch (err) {
      setBackendError(err.response?.data?.message || "Verification failed");
    }
  };

  const verifyMobileOtp = async () => {
    if (!mobileOtp || mobileOtp.length < 4) {
      setBackendError("Please enter a valid OTP");
      return;
    }

    try {
      const response = await api.post("/bookings/verify", {
        mobile: `${form.mobile}`,
        otp: mobileOtp,
        purpose: "booking_verification"
      });
      
      if (response.data.success) {
        setMobileVerified(true);
        setSuccessMsg("Mobile verified successfully!");
      } else {
        setBackendError(response.data.message || "Invalid OTP");
      }
    } catch (err) {
      setBackendError(err.response?.data?.message || "Verification failed");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setBackendError("");
    setSuccessMsg("");
    
    const ve = validate();
    if (Object.keys(ve).length) return setErrors(ve);

    if (Number(captchaAns) !== captchaA + captchaB) {
      return setCaptchaError("Captcha incorrect");
    }

    if (!emailVerified || !mobileVerified) {
      return setBackendError("Please verify both email and mobile via OTP.");
    }

    setShowConfirmation(true);
  };
const confirmBooking = async () => {
  try {
    const token = localStorage.getItem("token"); // 👈 token saved after login
    if (!token) {
      setBackendError("You must be logged in to confirm a booking");
      return;
    }

    const res = await api.post("/bookings/create",
      {
        packageId,
        ...form,
        endDate: calculateEndDate(),
        quotedPrice: price,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`, // 👈 send token
        },
      }
    );

    if (res.data.success) {
      setSuccessMsg("Booking confirmed! We've sent details to your email.");
      setShowSuccessMsg(true);
      setTimeout(() => handleClose(), 5000);
    }
  } catch (err) {
    setBackendError(
      err.response?.data?.message || "Booking failed. Please try again."
    );
  } finally {
    setShowConfirmation(false);
  }
};

  return ((
    <div
        ref={overlayRef}
        style={styles.overlay}
        className={`fade-in ${closing ? "fade-out" : ""}`}
        onClick={(e) => e.target === overlayRef.current && handleClose()}
    >
      <div style={styles.popup} className={`slide-up ${closing ? "slide-down" : ""}`}>
        <div style={styles.header}>
          <h2 style={styles.title}>Tour Package Booking</h2>
          <button 
            onClick={handleClose} 
            style={styles.closeButton}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = "#f1f1f1"}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = "transparent"}
          >
            <FaTimes />
          </button>
        </div>
        
        {backendError && (
          <div style={styles.alertError}>
            <FaInfoCircle style={{ marginRight: 8 }} />
            {backendError}
          </div>
        )}
        {successMsg && (
          <div style={styles.alertSuccess}>
            <FaCheck style={{ marginRight: 8 }} />
            {successMsg}
          </div>
        )}

        <form style={styles.form} onSubmit={handleSubmit} noValidate>
          {/* Personal Details Section */}
          <div style={styles.section}>
            <div style={styles.sectionHeader}>
              <div style={styles.sectionNumber}>1</div>
              <h3 style={styles.sectionTitle}>Personal Details</h3>
            </div>
            
            <div style={styles.grid}>
              <div style={styles.formGroup}>
                <label style={styles.label}>
                  <FaUser style={styles.icon} />
                  Full Name*
                </label>
                <input 
                  style={errors.fullName ? styles.inputError : styles.input} 
                  name="fullName" 
                  value={form.fullName} 
                  onChange={handleChange} 
                  placeholder="Your full name"
                />
                {errors.fullName && <span style={styles.errorText}>{errors.fullName}</span>}
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>
                  <FaEnvelope style={styles.icon} />
                  Email ID*
                </label>
                <div style={{ display: "flex", gap: 8 }}>
                  <input 
                    style={{ ...(errors.email ? styles.inputError : styles.input), flex: 1 }} 
                    name="email" 
                    value={form.email} 
                    onChange={handleChange} 
                    placeholder="your@email.com"
                  />
                  <button 
                    type="button" 
                    onClick={sendEmailOtp} 
                    style={emailTimer > 0 || sendingEmailOtp ? styles.otpButtonDisabled : styles.otpButton} 
                    disabled={emailTimer > 0 || emailVerified || sendingEmailOtp}
                  >
                    {emailVerified ? (
                      <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                        <FaCheck /> Verified
                      </span>
                    ) : sendingEmailOtp ? (
                      <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                        <FaSpinner className="spin" /> Sending...
                      </span>
                    ) : emailTimer > 0 ? (
                      `${emailTimer}s`

                    ) : (
                      "Send OTP"
                    )}
                  </button>
                </div>
                {errors.email && <span style={styles.errorText}>{errors.email}</span>}
                {emailOtpSent && !emailVerified && (
                  <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
                    <input 
                      style={{ ...styles.input, flex: 1 }} 
                      value={emailOtp} 
                      onChange={(e) => setEmailOtp(e.target.value)} 
                      placeholder="Enter email OTP" 
                      maxLength={6}
                    />
                    <button 
                      type="button" 
                      onClick={verifyEmailOtp} 
                      style={styles.verifyButton}
                    >
                      Verify
                    </button>
                  </div>
                )}
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>
                  <FaPhone style={styles.icon} />
                  Mobile No.*
                </label>
                <div style={{ display: "flex", gap: 8 }}>
                  <input 
                    style={{ ...(errors.mobile ? styles.inputError : styles.input), flex: 1 }} 
                    name="mobile" 
                    value={form.mobile} 
                    onChange={handleChange} 
                    placeholder="10-digit mobile number"
                    maxLength={10}
                  />
                  <button 
                    type="button" 
                    onClick={sendMobileOtp} 
                    style={mobileTimer > 0 || sendingMobileOtp ? styles.otpButtonDisabled : styles.otpButton} 
                    disabled={mobileTimer > 0 || mobileVerified || sendingMobileOtp}
                  >
                    {mobileVerified ? (
                      <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                        <FaCheck /> Verified
                      </span>
                    ) : sendingMobileOtp ? (
                      <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                        <FaSpinner className="spin" /> Sending...
                      </span>
                    ) : mobileTimer > 0 ? (
                      `${mobileTimer}s`
                    ) : (
                      "Send OTP"
                    )}
                  </button>
                </div>
                {errors.mobile && <span style={styles.errorText}>{errors.mobile}</span>}
                {mobileOtpSent && !mobileVerified && (
                  <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
                    <input 
                      style={{ ...styles.input, flex: 1 }} 
                      value={mobileOtp} 
                      onChange={(e) => setMobileOtp(e.target.value)} 
                      placeholder="Enter mobile OTP" 
                      maxLength={6}
                    />
                    <button 
                      type="button" 
                      onClick={verifyMobileOtp} 
                      style={styles.verifyButton}
                    >
                      Verify
                    </button>
                  </div>
                )}
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>
                  <FaPhone style={styles.icon} />
                  Alternate Mobile No.
                </label>
                <input 
                  style={styles.input} 
                  name="alternateMobile" 
                  value={form.alternateMobile} 
                  onChange={handleChange} 
                  placeholder="Optional alternate number"
                  maxLength={10}
                />
              </div>
            </div>
          </div>

          {/* Travel Details Section */}
          <div style={styles.section}>
            <div style={styles.sectionHeader}>
              <div style={styles.sectionNumber}>2</div>
              <h3 style={styles.sectionTitle}>Travel Details</h3>
            </div>
            
            <div style={styles.grid}>
              <div style={styles.formGroup}>
                <label style={styles.label}>
                  <FaPlane style={styles.icon} />
                  Destination*
                </label>
                <input 
                  style={errors.destination ? styles.inputError : styles.input} 
                  name="destination" 
                  value={form.destination} 
                  onChange={handleChange} 
                  placeholder="Where are you traveling?"
                />
                {errors.destination && <span style={styles.errorText}>{errors.destination}</span>}
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>
                  <FaCalendarAlt style={styles.icon} />
                  Start Date*
                </label>
                <input 
                  type="date"
                  style={errors.startDate ? styles.inputError : styles.input} 
                  name="startDate" 
                  value={form.startDate} 
                  onChange={handleChange} 
                  min={new Date().toISOString().split('T')[0]}
                />
                {errors.startDate && <span style={styles.errorText}>{errors.startDate}</span>}
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>
                  <FaCalendarAlt style={styles.icon} />
                  Duration (Days)*
                </label>
                <select
                  style={errors.duration ? styles.inputError : styles.input} 
                  name="duration" 
                  value={form.duration} 
                  onChange={handleChange}
                >
                  {[0,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map(num => (
                    <option key={num} value={num}>{num}</option>
                  ))}
                </select>
                {errors.duration && <span style={styles.errorText}>{errors.duration}</span>}
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>
                  <FaUser style={styles.icon} />
                  Adults (12+ yrs)*
                </label>
                <select
                  style={errors.adults ? styles.inputError : styles.input} 
                  name="adults" 
                  value={form.adults} 
                  onChange={handleChange}
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                    <option key={num} value={num}>{num}</option>
                  ))}
                </select>
                {errors.adults && <span style={styles.errorText}>{errors.adults}</span>}
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>
                  <FaUser style={styles.icon} />
                  Children (5-12 yrs)
                </label>
                <select
                  style={styles.input} 
                  name="children" 
                  value={form.children} 
                  onChange={handleChange}
                >
                  {[0, 1, 2, 3, 4, 5].map(num => (
                    <option key={num} value={num}>{num}</option>
                  ))}
                </select>
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>
                  <FaUser style={styles.icon} />
                  Senior Citizens (60+ yrs)
                </label>
                <select
                  style={styles.input} 
                  name="seniors" 
                  value={form.seniors} 
                  onChange={handleChange}
                >
                  {[0, 1, 2, 3, 4].map(num => (
                    <option key={num} value={num}>{num}</option>
                  ))}
                </select>
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>
                  <FaInfoCircle style={styles.icon} />
                  Package/Tour Code
                </label>
                <input 
                  style={styles.input} 
                  name="packageCode" 
                  value={form.packageCode} 
                  onChange={handleChange} 
                  placeholder="If you have a package code"
                />
              </div>
            </div>
          </div>

          {/* Accommodation Section */}
          <div style={styles.section}>
            <div style={styles.sectionHeader}>
              <div style={styles.sectionNumber}>3</div>
              <h3 style={styles.sectionTitle}>Accommodation Preferences</h3>
            </div>
            
            <div style={styles.grid}>
              <div style={styles.formGroup}>
                <label style={styles.label}>
                  <FaHotel style={styles.icon} />
                  Hotel Type
                </label>
                <select
                  style={styles.input} 
                  name="accommodationPreference" 
                  value={form.accommodationPreference} 
                  onChange={handleChange}
                >
                  <option value="budget">Budget</option>
                  <option value="standard">Standard</option>
                  <option value="Luxury">Luxury</option>
                  <option value="Deluxe">Deluxe</option>
                  <option value="Homestay">Homestay</option>
                </select>
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>
                  <FaPlane style={styles.icon} />
                  Travel Mode
                </label>
                <select
                  style={styles.input} 
                  name="travelMode" 
                  value={form.travelMode} 
                  onChange={handleChange}
                >
                  <option value="flight">Flight</option>
                  <option value="train">Train</option>
                  <option value="bus">Bus</option>
                  <option value="self">Self Arranged</option>
                </select>
              </div>
            </div>
          </div>

          {/* Payment Section */}
          <div style={styles.section}>
            <div style={styles.sectionHeader}>
              <div style={styles.sectionNumber}>4</div>
              <h3 style={styles.sectionTitle}>Payment Details</h3>
            </div>
            
            <div style={styles.grid}>
              <div style={styles.formGroup}>
                <label style={styles.label}>
                  <FaReceipt style={styles.icon} />
                  Payment Method
                </label>
                <select
                  style={styles.input} 
                  name="paymentMethod" 
                  value={form.paymentMethod} 
                  onChange={handleChange}
                >
                  <option value="">Select payment method</option>
                  <option value="credit_card">Credit Card</option>
                  <option value="debit_card">Debit Card</option>
                  <option value="net_banking">Net Banking</option>
                  <option value="upi">UPI</option>
                  <option value="wallet">Wallet</option>
                </select>
              </div>
            </div>

            <div style={styles.quoteBox}>
              <div style={styles.quoteContent}>
                <div style={styles.quoteTitle}>Estimated Quotation</div>
                <div style={styles.quotePrice}>₹ {price.toLocaleString("en-IN")}</div>
                <div style={styles.quoteBreakdown}>
                  {form.duration} {form.duration === 1 ? 'day' : 'days'} × ₹{basePricePerDay}/day + travelers adjustment
                </div>
                {form.startDate && (
                  <div style={styles.quoteDates}>
                    {form.startDate} to {calculateEndDate(form.startDate)}

                  </div>
                )}
              </div>
            </div>

            <div style={styles.formGroup}>
              <label style={styles.checkboxLabel}>
                <input 
                  type="checkbox" 
                  name="acceptTerms" 
                  checked={form.acceptTerms} 
                  onChange={handleChange}
                  style={styles.checkboxInput}
                />
                I agree to the Terms & Conditions and Privacy Policy*
              </label>
              {errors.acceptTerms && <span style={styles.errorText}>{errors.acceptTerms}</span>}
            </div>

            <div style={styles.captchaContainer}>
              <div style={styles.captchaLabel}>Human Verification:</div>
              <div style={styles.captchaBox}>
                <div style={styles.captchaQuestion}>
                  {captchaA} + {captchaB} =
                </div>
                <input 
                  style={styles.captchaInput} 
                  value={captchaAns} 
                  onChange={(e) => setCaptchaAns(e.target.value)} 
                  placeholder="Your answer"
                />
                <button 
                  type="button" 
                  style={styles.captchaRefresh} 
                  onClick={regenerateCaptcha}
                  title="Refresh captcha"
                >
                  <FaRedo />
                </button>
              </div>
              {captchaError && <div style={styles.errorText}>{captchaError}</div>}
            </div>
          </div>

          <div style={styles.buttonGroup}>
            <button type="submit" style={styles.submitButton}>
              Proceed to Booking
            </button>
            <button type="button" onClick={handleClose} style={styles.cancelButton}>
              Cancel
            </button>
          </div>
        </form>
        

        {/* Confirmation Modal */}
        {showConfirmation && (
          <div style={styles.confirmationOverlay}>
            <div style={styles.confirmationModal}>
              <h3 style={styles.confirmationTitle}>Confirm Booking</h3>
              <p style={styles.confirmationText}>
                Are you sure you want to proceed with this booking for <strong>{form.destination}</strong> from <strong>{form.startDate}</strong> for <strong>{form.duration} {form.duration === 1 ? 'day' : 'days'}</strong>?
              </p>
              <p style={styles.confirmationPrice}>Total: ₹ {price.toLocaleString("en-IN")}</p>
              <div style={styles.confirmationButtons}>
                <button 
                  onClick={confirmBooking} 
                  style={styles.confirmButton}
                >
                  Confirm & Book

                </button>
                <button 
                  onClick={() => { setShowConfirmation(false) }} 
                  style={styles.cancelButton}
                >
                  Go Back
                </button>
              </div>
            </div>
          </div>
        )}
          {showSuccessMsg && (
          <BookingPopup/>
        )}
        
      


        <style>{`
          .fade-in { animation: fadeIn .25s ease-out forwards; }
          .fade-out { animation: fadeOut .25s ease-out forwards; }
          .slide-up { animation: slideUp .25s ease-out forwards; }
          .slide-down { animation: slideDown .25s ease-out forwards; }
          @keyframes fadeIn { from{opacity:0} to{opacity:1} }
          @keyframes fadeOut { from{opacity:1} to{opacity:0} }
          @keyframes slideUp { from{transform:translateY(14px);opacity:.0} to{transform:translateY(0);opacity:1} }
          @keyframes slideDown { from{transform:translateY(0);opacity:1} to{transform:translateY(14px);opacity:0} }
          .spin {
            animation: spin 1s linear infinite;
          }
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    </div>
  )
  );
}

// Styles remain the same as in your original code
const styles = {
  overlay: { 
    position: "fixed", 
    inset: 0, 
    background: "rgba(0,0,0,.5)", 
    display: "flex", 
    alignItems: "center", 
    justifyContent: "center", 
    zIndex: 1500, 
    padding: 10,
    backdropFilter: "blur(4px)"
  },
  popup: { 
    background: "#fff", 
    width: "800px", 
    maxWidth: "96%", 
    borderRadius: 12, 
    boxShadow: "0 10px 28px rgba(0,0,0,.25)", 
    padding: "20px 22px",
    maxHeight: "90vh",
    overflowY: "auto"
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "16px",
    position: "relative"
  },
  title: { 
    fontWeight: 700, 
    fontSize: "1.6rem", 
    color: "#2c3e50",
    margin: 0
  },
  closeButton: {
    background: "none",
    border: "none",
    fontSize: "1.5rem",
    color: "#7f8c8d",
    cursor: "pointer",
    padding: "4px 8px",
    borderRadius: "50%",
    transition: "all 0.2s",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 36,
    height: 36
  },
  form: { 
    display: "flex", 
    flexDirection: "column", 
    gap: 16 
  },
  section: {
    border: "1px solid #e0e0e0",
    borderRadius: 10,
    padding: "16px 20px",
    marginBottom: 16
  },
  sectionHeader: {
    display: "flex",
    alignItems: "center",
    marginBottom: 16,
    borderBottom: "1px solid #eee",
    paddingBottom: 12
  },
  sectionNumber: {
    backgroundColor: "#3498db",
    color: "white",
    borderRadius: "50%",
    width: 24,
    height: 24,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
    fontSize: "0.9rem",
    fontWeight: "bold"
  },
  sectionTitle: {
    margin: 0,
    fontSize: "1.2rem",
    color: "#2c3e50"
  },
  grid: { 
    display: "grid", 
    gridTemplateColumns: "1fr 1fr", 
    gap: 16
  },
  formGroup: {
    marginBottom: 12
  },
  label:{ 
    display: "flex", 
    alignItems: "center",
    gap: 8,
    fontWeight: 600, 
    color: "#34495e",
    fontSize: "0.9rem",
    marginBottom: 6
  },
  icon: {
    color: "#7f8c8d",
    fontSize: "0.9rem"
  },
  input: { 
    padding: "10px 12px", 
    border: "1.5px solid #ddd", 
    borderRadius: 8, 
    fontSize: "0.95rem",
    width: "100%",
    boxSizing: "border-box",
    transition: "all 0.2s",
    appearance: "none",
    ":focus": {
      borderColor: "#3498db",
      boxShadow: "0 0 0 2px rgba(52,152,219,0.2)",
      outline: "none"
    }
  },
  inputError: {
    padding: "10px 12px", 
    border: "1.5px solid #e74c3c", 
    borderRadius: 8, 
    fontSize: "0.95rem",
    width: "100%",
    boxSizing: "border-box",
    transition: "all 0.2s",
    ":focus": {
      borderColor: "#e74c3c",
      boxShadow: "0 0 0 2px rgba(231,76,60,0.2)",
      outline: "none"
    }
  },
  errorText: { 
    color: "#e74c3c", 
    fontSize: "0.8rem", 
    marginTop: 4,
    display: "block"
  },
  alertError: {
    backgroundColor: "#fdecea",
    color: "#d32f2f",
    padding: "12px 16px",
    borderRadius: 8,
    marginBottom: 16,
    display: "flex",
    alignItems: "center",
    fontSize: "0.9rem",
    fontWeight: 500
  },
  alertSuccess: {
    backgroundColor: "#e8f5e9",
    color: "#2e7d32",
    padding: "12px 16px",
    borderRadius: 8,
    marginBottom: 16,
    display: "flex",
    alignItems: "center",
    fontSize: "0.9rem",
    fontWeight: 500
  },
  otpButton: {
    whiteSpace: "nowrap", 
    padding: "10px 12px", 
    border: "none", 
    borderRadius: 8, 
    background: "#3498db", 
    color: "#fff", 
    fontWeight: 600, 
    cursor: "pointer",
    fontSize: "0.85rem",
    transition: "all 0.2s",
    minWidth: 60,
    ":hover": {
      background: "#2980b9"
    }
  },
  otpButtonDisabled: {
    whiteSpace: "nowrap", 
    padding: "10px 12px", 
    border: "none", 
    borderRadius: 8, 
    background: "#bdc3c7", 
    color: "#7f8c8d", 
    fontWeight: 600, 
    cursor: "not-allowed",
    fontSize: "0.85rem",
    minWidth: 60
  },
  verifyButton: {
    whiteSpace: "nowrap", 
    padding: "10px 12px", 
    border: "none", 
    borderRadius: 8, 
    background: "#2ecc71", 
    color: "#fff", 
    fontWeight: 600, 
    cursor: "pointer",
    fontSize: "0.85rem",
    transition: "all 0.2s",
    ":hover": {
      background: "#27ae60"
    }
  },
  quoteBox: { 
    margin: "16px 0", 
    padding: "16px", 
    border: "1px dashed #95a5a6", 
    borderRadius: 10, 
    background: "#f8f9fa" 
  },
  quoteContent: {
    display: "flex",
    flexDirection: "column",
    gap: 4
  },
  quoteTitle: {
    fontSize: "0.9rem",
    fontWeight: 600,
    color: "#7f8c8d"
  },
  quotePrice: {
    fontSize: "1.6rem",
    fontWeight: 800,
    color: "#2c3e50"
  },
  quoteBreakdown: {
    fontSize: "0.8rem",
    color: "#95a5a6"
  },
  quoteDates: {
    fontSize: "0.8rem",
    color: "#95a5a6",
    marginTop: 4
  },
  captchaContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 8,
    margin: "12px 0"
  },
  captchaLabel: {
    fontSize: "0.9rem",
    fontWeight: 600,
    color: "#34495e"
  },
  captchaBox: {
    display: "flex",
    alignItems: "center",
    gap: 8
  },
  captchaQuestion: {
    padding: "8px 12px",
    border: "1px solid #ddd",
    borderRadius: 8,
    background: "#f8f9fa",
    fontWeight: 700,
    fontSize: "1.1rem",
    minWidth: 60,
    textAlign: "center"
  },
  captchaInput: {
    padding: "10px 12px",
    border: "1.5px solid #ddd",
    borderRadius: 8,
    fontSize: "1rem",
    width: 100,
    ":focus": {
      borderColor: "#3498db",
      boxShadow: "0 0 0 2px rgba(52,152,219,0.2)"
    }
  },
  captchaRefresh: {
    background: "#ecf0f1",
    border: "none",
    borderRadius: 8,
    padding: "8px 10px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.2s",
    ":hover": {
      background: "#bdc3c7"
    }
  },
  checkboxLabel: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    fontSize: "0.9rem",
    color: "#34495e",
    cursor: "pointer"
  },
  checkboxInput: {
    width: 16,
    height: 16,
    accentColor: "#3498db"
  },
  buttonGroup: {
    display: "flex",
    gap: 12,
    marginTop: 16
  },
  submitButton: {
    flex: 1,
    padding: "14px",
    border: "none",
    borderRadius: 8,
    background: "#3498db",
    color: "#fff",
    fontWeight: 700,
    cursor: "pointer",
    fontSize: "1rem",
    transition: "all 0.2s",
    ":hover": {
      background: "#2980b9"
    }
  },
  cancelButton: {
    flex: 1,
    padding: "14px",
    border: "1.5px solid #bdc3c7",
    borderRadius: 8,
    background: "transparent",
    color: "#7f8c8d",
    fontWeight: 700,
    cursor: "pointer",
    fontSize: "1rem",
    transition: "all 0.2s",
    ":hover": {
      background: "#f1f1f1"
    }
  },
  confirmationOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 2000
  },
  confirmationModal: {
    backgroundColor: "white",
    padding: "24px",
    borderRadius: "12px",
    maxWidth: "500px",
    width: "90%",
    boxShadow: "0 5px 20px rgba(0,0,0,0.2)"
  },
  confirmationTitle: {
    marginTop: 0,
    color: "#2c3e50",
    fontSize: "1.4rem"
  },
  confirmationText: {
    margin: "16px 0",
    fontSize: "1rem",
    color: "#34495e",
    lineHeight: 1.5
  },
  confirmationPrice: {
    fontSize: "1.2rem",
    fontWeight: "bold",
    color: "#27ae60",
    margin: "16px 0"
  },
  confirmationButtons: {
    display: "flex",
    gap: "12px",
    marginTop: "24px"
  },
  confirmButton: {
    flex: 1,
    padding: "12px",
    backgroundColor: "#27ae60",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "background-color 0.2s",
    ":hover": {
      backgroundColor: "#219653"
    }
  }
};