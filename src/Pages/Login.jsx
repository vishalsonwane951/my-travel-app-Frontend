import React, { useState, useRef, useEffect, useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import axios from "axios";
import api from "../utils/api";
const axios_URL = import.meta.env.VITE_axios_URL;

export default function Login({ onClose, openRegister }) {
  const { login } = useContext(AuthContext);
  const overlayRef = useRef();
  const [closing, setClosing] = useState(false);
  const [loginMethod, setLoginMethod] = useState("password"); // 'password' or 'otp'
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    otp: ""
  });
  const [errors, setErrors] = useState({});
  const [backendError, setBackendError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otpLoading, setOtpLoading] = useState(false);
  const [generatedOtp, setGeneratedOtp] = useState("")
  const [showOtp, setShowOtp] = useState(false);

  const handleClickOutside = (e) => {
    if (overlayRef.current && e.target === overlayRef.current) handleClose();
  };

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      onClose();
      setClosing(false);
      setFormData({ email: "", password: "", otp: "" });
      setErrors({});
      setSuccessMsg("");
      setOtpSent(false);
    }, 300);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (loginMethod === "password" && !formData.password.trim()) {
      newErrors.password = "Password is required";
    }

    if (loginMethod === "otp" && otpSent && !formData.otp.trim()) {
      newErrors.otp = "OTP is required";
    }

    return newErrors;
  };

  const handleSendOtp = async () => {
    setErrors({});
    setBackendError("");

    if (!formData.email.trim()) {
      setErrors({ email: "Email is required to send OTP" });
      return;
    }

    try {
      setOtpLoading(true);
      const res = await api.post('/users/generate-login-otp', {
        email: formData.email
      });

      if (res.data.success) {
      // ✅ Show OTP in alert (for testing)
      alert(`Your OTP is: ${res.data.otp}`);

      setOtpSent(true);
      setSuccessMsg("OTP sent successfully!");
      setGeneratedOtp(res.data.otp);
      setMessage(res.data.message);
      setShowOtp(true);

      setTimeout(() => setSuccessMsg(""), 3000);
      }
   
    } catch (err) {
      const data = err.response?.data;
      if (data?.message) setBackendError(data.message);
      else setBackendError(res.data.message || "Failed to send OTP");
    } finally {
      setOtpLoading(false);
    }
  };


  const verifyOtp = async () => {
    try {
      const response = await api.post('/users/verify-login-otp', {
        email: storedEmail, // Make sure this is set
        otp: generatedOtp    // From user input
      });

      if (response.data.success) {
        // Store token and redirect
        localStorage.setItem('token', response.data.token);
        navigate('/dashboard');
      }
    } catch (error) {
      console.error('Verification failed:', {
        status: error.response?.status,
        data: error.response?.data,
        message: error.message
      });

      setErrors(error.response?.data?.error || 'Verification failed');
    }
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setBackendError("");
    setSuccessMsg("");

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      let res;
      if (loginMethod === "password") {
        res = await api.post('/users/login', {
          email: formData.email,
          password: formData.password
        });
      } else {
        res = await api.post('/users/login', {
          email: formData.email,
          otp: formData.otp
        });
      }

      const { token, user } = res.data;
      localStorage.setItem("token", token);             // store token
      localStorage.setItem("user", JSON.stringify(user));
      login(res.data.user, token);

      
      console.log("User logged in:", user);
      console.log("User ID saved:", user._id);



      setSuccessMsg("Login successful!");
      setTimeout(() => handleClose(), 1000);
    } catch (err) {
      const data = err.response?.data;
      if (data?.message) setBackendError(data.message);
      else setBackendError("Something went wrong");
    }
  };

  const toggleLoginMethod = () => {
    setLoginMethod(prev => prev === "password" ? "otp" : "password");
    setErrors({});
    setBackendError("");
    setSuccessMsg("");
    setOtpSent(false);
  };

  return (
    <div
      ref={overlayRef}
      style={styles.overlay}
      onClick={handleClickOutside}
      className={`fade-in ${closing ? "fade-out" : ""}`}
    >
      <div style={styles.popup} className={`slide-up ${closing ? "slide-down" : ""}`}>
        <h2 style={styles.popupTitle}>Login</h2>

        <div style={styles.toggleContainer}>
          <button
            style={{
              ...styles.toggleBtn,
              ...(loginMethod === "password" ? styles.activeToggleBtn : {})
            }}
            onClick={() => toggleLoginMethod()}
            type="button"
          >
            Password
          </button>
          <button
            style={{
              ...styles.toggleBtn,
              ...(loginMethod === "otp" ? styles.activeToggleBtn : {})
            }}
            onClick={() => toggleLoginMethod()}
            type="button"
          >
            OTP
          </button>
        </div>

        <form style={styles.form} onSubmit={handleLoginSubmit} noValidate>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
            disabled={otpSent && loginMethod === "otp"}
          />
          {errors.email && <p style={styles.error}>{errors.email}</p>}

          {loginMethod === "password" ? (
            <>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                style={styles.input}
              />
              {errors.password && <p style={styles.error}>{errors.password}</p>}
            </>
          ) : (
            <>
              {otpSent ? (
                <>
                  <div style={styles.otpContainer}>
                    <input
                      type="text"
                      name="otp"
                      placeholder="Enter OTP"
                      value={formData.otp}
                      onChange={handleChange}
                      style={styles.otpInput}
                      maxLength="6"
                    />
                    <button
                      type="button"
                      onClick={handleSendOtp}
                      style={styles.resendOtpBtn}
                      disabled={otpLoading}
                    >
                      {otpLoading ? "Sending..." : "Resend OTP"}
                    </button>
                  </div>
                  {errors.otp && <p style={styles.error}>{errors.otp}</p>}
                </>
              ) : (
                <button
                  type="button"
                  onClick={handleSendOtp}
                  style={styles.sendOtpBtn}
                  disabled={otpLoading}
                >
                  {otpLoading ? "Sending OTP..." : "Send OTP"}
                </button>
              )}
            </>
          )}

          <button type="submit" style={styles.submitBtn}>
            {loginMethod === "password" ? "Login" : "Verify OTP"}
          </button>

          {successMsg && <p style={styles.success}>{successMsg}</p>}
          {backendError && <p style={styles.error}>{backendError}</p>}

          <p style={styles.switchContainer}>
            Don't have an account?{" "}
            <button
              type="button"
              style={styles.switchBtn}
              onClick={() => {
                handleClose();
                setTimeout(openRegister, 350);
              }}
            >
              Register
            </button>
          </p>
          {showOtp && generatedOtp && (
            <p style={{ color: "green" }}>Generated OTP (for testing): {generatedOtp}</p>
          )}
          <button type="button" style={styles.closeBtn} onClick={handleClose}>
            Close
          </button>
        </form>
        <style>{animationStyles}</style>
      </div>
    </div>
  );
}

const animationStyles = `
  .fade-in { animation: fadeIn 0.3s ease-out forwards; }
  .fade-out { animation: fadeOut 0.3s ease-out forwards; }
  .slide-up { animation: slideUp 0.3s ease-out forwards; }
  .slide-down { animation: slideDown 0.3s ease-out forwards; }

  @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
  @keyframes fadeOut { from { opacity: 1; } to { opacity: 0; } }
  @keyframes slideUp { from { transform: translateY(20px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
  @keyframes slideDown { from { transform: translateY(0); opacity: 1; } to { transform: translateY(20px); opacity: 0; } }
`;

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    height: "100vh",
    width: "100vw",
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1500,
    padding: "10px",
  },
  popup: {
    backgroundColor: "white",
    padding: "30px 35px",
    borderRadius: "10px",
    width: "400px",
    maxWidth: "100%",
    boxShadow: "0 8px 25px rgba(0,0,0,0.25)",
    display: "flex",
    flexDirection: "column",
  },
  popupTitle: {
    marginBottom: "20px",
    textAlign: "center",
    fontSize: "2rem",
    fontWeight: "700",
    color: "white",
    backgroundColor: "gray",
    fontFamily: "Times New Roman",
    padding: "10px 0",
    borderRadius: "15px",
  },
  toggleContainer: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "20px",
    gap: "10px",
  },
  toggleBtn: {
    padding: "8px 16px",
    borderRadius: "20px",
    border: "1px solid #ccc",
    background: "white",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
  activeToggleBtn: {
    background: "#007bff",
    color: "white",
    borderColor: "#007bff",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  input: {
    marginTop: "8px",
    padding: "10px 14px",
    fontSize: "1rem",
    borderRadius: "6px",
    border: "1.8px solid #ccc",
    transition: "border-color 0.3s ease",
  },
  otpContainer: {
    display: "flex",
    gap: "10px",
    marginTop: "8px",
  },
  otpInput: {
    flex: 1,
    padding: "10px 14px",
    fontSize: "1rem",
    borderRadius: "6px",
    border: "1.8px solid #ccc",
  },
  sendOtpBtn: {
    padding: "10px",
    background: "#28a745",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "600",
    marginTop: "8px",
  },
  resendOtpBtn: {
    padding: "10px",
    background: "#6c757d",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "600",
    whiteSpace: "nowrap",
  },
  submitBtn: {
    marginTop: "15px",
    padding: "14px",
    fontSize: "1.1rem",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#007bff",
    color: "white",
    fontWeight: "700",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  switchContainer: {
    marginTop: "18px",
    textAlign: "center",
    fontSize: "1rem",
  },
  switchBtn: {
    background: "none",
    border: "none",
    color: "#007bff",
    cursor: "pointer",
    fontWeight: "600",
    textDecoration: "underline",
    padding: 0,
    marginLeft: "6px",
  },
  closeBtn: {
    marginTop: "25px",
    padding: "12px 24px",
    fontSize: "1rem",
    backgroundColor: "#dc3545",
    border: "none",
    borderRadius: "6px",
    color: "white",
    cursor: "pointer",
    fontWeight: "600",
  },
  error: {
    color: "#dc3545",
    marginTop: "6px",
    fontSize: "0.9rem",
    fontWeight: "600",
  },
  success: {
    marginTop: "18px",
    color: "#28a745",
    fontWeight: "700",
    textAlign: "center",
    fontSize: "1.05rem",
  },
};

// import React, { useState, useContext } from "react";
// import { AuthContext } from "../Context/AuthContext";

// export default function Login({ onClose }) {
//   const { login } = useContext(AuthContext);

//   const [formData, setFormData] = useState({ email: "", password: "" });
//   const [error, setError] = useState("");

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//     setError("");
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await login(formData.email, formData.password);
//       onClose();
//     } catch (err) {
//       setError(err.response?.data?.message || "Login failed");
//     }
//   };

//   return (
//     <div className="overlay">
//       <div className="popup">
//         <h2>Login</h2>
//         <form onSubmit={handleSubmit}>
//           <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
//           <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
//           {error && <p className="error">{error}</p>}
//           <button type="submit">Login</button>
//         </form>
//         <button onClick={onClose}>Close</button>
//       </div>
//     </div>
//   );
// }
