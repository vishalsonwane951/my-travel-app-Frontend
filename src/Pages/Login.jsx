import React, { useState, useRef, useEffect, useContext, useCallback, useMemo } from "react";
import { AuthContext } from "../Context/AuthContext";
import api from "../utils/api";

const axios_URL = import.meta.env.VITE_axios_URL;

export default function Login({ onClose, openRegister }) {
  const { login } = useContext(AuthContext);
  const overlayRef = useRef();
  const emailInputRef = useRef();
  const [closing, setClosing] = useState(false);
  const [loginMethod, setLoginMethod] = useState("password");
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
  const [showOtp, setShowOtp] = useState(false);
  const [countdown, setCountdown] = useState(0);

  // Focus email input on mount
  useEffect(() => {
    if (emailInputRef.current) {
      emailInputRef.current.focus();
    }
  }, []);

  // Countdown timer for OTP resend
  useEffect(() => {
    let timer;
    if (countdown > 0) {
      timer = setTimeout(() => setCountdown(countdown - 1), 1000);
    }
    return () => clearTimeout(timer);
  }, [countdown]);

  // Memoized handlers
  const handleClickOutside = useCallback((e) => {
    if (overlayRef.current && e.target === overlayRef.current) handleClose();
  }, []);

  const handleClose = useCallback(() => {
    setClosing(true);
    setTimeout(() => {
      onClose();
      setClosing(false);
      setFormData({ email: "", password: "", otp: "" });
      setErrors({});
      setSuccessMsg("");
      setOtpSent(false);
      setCountdown(0);
    }, 300);
  }, [onClose]);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: "" }));
    setBackendError("");
  }, []);

  // Memoized validation
  const validate = useCallback(() => {
    const newErrors = {};
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (loginMethod === "password" && !formData.password.trim()) {
      newErrors.password = "Password is required";
    }

    if (loginMethod === "otp" && otpSent && !formData.otp.trim()) {
      newErrors.otp = "OTP is required";
    } else if (loginMethod === "otp" && otpSent && formData.otp.length !== 6) {
      newErrors.otp = "OTP must be 6 digits";
    }

    return newErrors;
  }, [formData, loginMethod, otpSent]);

  // Handle Send OTP
  const handleSendOtp = useCallback(async () => {
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
        alert(`Your OTP is: ${res.data.otp}`);
        setOtpSent(true);
        setSuccessMsg("OTP sent successfully!");
        setCountdown(60); // 60 seconds countdown for resend
        setShowOtp(true);
        setTimeout(() => setSuccessMsg(""), 3000);
      }
    } catch (err) {
      const data = err.response?.data;
      setBackendError(data?.message || "Failed to send OTP");
    } finally {
      setOtpLoading(false);
    }
  }, [formData.email]);

  // Handle Login Submit
  const handleLoginSubmit = useCallback(async (e) => {
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
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      login(user, token);

      setSuccessMsg("Login successful! Redirecting...");
      setTimeout(() => handleClose(), 1500);
    } catch (err) {
      const data = err.response?.data;
      setBackendError(data?.message || "Invalid credentials. Please try again.");
    }
  }, [formData, loginMethod, validate, login, handleClose]);

  const toggleLoginMethod = useCallback(() => {
    setLoginMethod(prev => prev === "password" ? "otp" : "password");
    setErrors({});
    setBackendError("");
    setSuccessMsg("");
    setOtpSent(false);
    setCountdown(0);
    setFormData(prev => ({ ...prev, password: "", otp: "" }));
  }, []);

  // Styles object
  const styles = useMemo(() => ({
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      height: "100vh",
      width: "100vw",
      backgroundColor: "rgba(0, 0, 0, 0.6)",
      backdropFilter: "blur(8px)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 1500,
      padding: "20px",
    },
    popup: {
      backgroundColor: "#ffffff",
      padding: "40px",
      borderRadius: "24px",
      width: "460px",
      maxWidth: "100%",
      boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
      transform: closing ? "scale(0.95)" : "scale(1)",
      transition: "all 0.3s ease",
    },
    header: {
      textAlign: "center",
      marginBottom: "32px",
    },
    title: {
      fontSize: "32px",
      fontWeight: "700",
      color: "#1a1a1a",
      marginBottom: "8px",
      letterSpacing: "-0.5px",
    },
    subtitle: {
      fontSize: "14px",
      color: "#666",
      fontWeight: "400",
    },
    toggleContainer: {
      display: "flex",
      gap: "12px",
      marginBottom: "24px",
      padding: "4px",
      backgroundColor: "#f5f5f5",
      borderRadius: "12px",
    },
    toggleBtn: (isActive) => ({
      flex: 1,
      padding: "12px 16px",
      borderRadius: "10px",
      border: "none",
      background: isActive ? "#ffffff" : "transparent",
      color: isActive ? "#6366f1" : "#666",
      fontWeight: "600",
      fontSize: "15px",
      cursor: "pointer",
      boxShadow: isActive ? "0 4px 12px rgba(99, 102, 241, 0.2)" : "none",
      transition: "all 0.2s ease",
    }),
    form: {
      display: "flex",
      flexDirection: "column",
      gap: "16px",
    },
    inputGroup: {
      display: "flex",
      flexDirection: "column",
      gap: "6px",
    },
    label: {
      fontSize: "14px",
      fontWeight: "500",
      color: "#4b5563",
      marginLeft: "4px",
    },
    input: {
      padding: "14px 16px",
      fontSize: "15px",
      borderRadius: "12px",
      border: "2px solid #e5e7eb",
      outline: "none",
      transition: "all 0.2s ease",
      backgroundColor: "#fafafa",
    },
    inputFocus: {
      borderColor: "#6366f1",
      backgroundColor: "#ffffff",
    },
    otpContainer: {
      display: "flex",
      gap: "12px",
      alignItems: "center",
    },
    otpInput: {
      flex: 2,
      padding: "14px 16px",
      fontSize: "18px",
      fontWeight: "600",
      letterSpacing: "4px",
      textAlign: "center",
      borderRadius: "12px",
      border: "2px solid #e5e7eb",
      outline: "none",
      backgroundColor: "#fafafa",
    },
    sendOtpBtn: (disabled) => ({
      flex: 1,
      padding: "14px",
      background: disabled ? "#9ca3af" : "linear-gradient(135deg, #10b981 0%, #059669 100%)",
      color: "white",
      border: "none",
      borderRadius: "12px",
      cursor: disabled ? "not-allowed" : "pointer",
      fontWeight: "600",
      fontSize: "14px",
      whiteSpace: "nowrap",
      transition: "all 0.2s ease",
      boxShadow: disabled ? "none" : "0 4px 12px rgba(16, 185, 129, 0.3)",
    }),
    resendOtpBtn: (disabled) => ({
      padding: "14px 20px",
      background: disabled ? "#9ca3af" : "#4b5563",
      color: "white",
      border: "none",
      borderRadius: "12px",
      cursor: disabled ? "not-allowed" : "pointer",
      fontWeight: "600",
      fontSize: "14px",
      transition: "all 0.2s ease",
    }),
    submitBtn: {
      marginTop: "8px",
      padding: "16px",
      fontSize: "16px",
      fontWeight: "700",
      borderRadius: "12px",
      border: "none",
      background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
      color: "white",
      cursor: "pointer",
      transition: "all 0.2s ease",
      boxShadow: "0 4px 15px rgba(99, 102, 241, 0.4)",
    },
    messageContainer: {
      marginTop: "8px",
      padding: "12px",
      borderRadius: "10px",
      fontSize: "14px",
      fontWeight: "500",
    },
    success: {
      backgroundColor: "#d1fae5",
      color: "#065f46",
      border: "1px solid #a7f3d0",
    },
    error: {
      backgroundColor: "#fee2e2",
      color: "#991b1b",
      border: "1px solid #fecaca",
    },
    footer: {
      marginTop: "24px",
      display: "flex",
      flexDirection: "column",
      gap: "16px",
    },
    switchContainer: {
      textAlign: "center",
      fontSize: "14px",
      color: "#6b7280",
    },
    switchBtn: {
      background: "none",
      border: "none",
      color: "#6366f1",
      fontWeight: "600",
      cursor: "pointer",
      textDecoration: "underline",
      fontSize: "14px",
      marginLeft: "4px",
    },
    closeBtn: {
      padding: "12px",
      fontSize: "14px",
      fontWeight: "600",
      borderRadius: "10px",
      border: "2px solid #e5e7eb",
      background: "transparent",
      color: "#6b7280",
      cursor: "pointer",
      transition: "all 0.2s ease",
    },
    countdownText: {
      fontSize: "12px",
      color: "#6b7280",
      textAlign: "center",
      marginTop: "4px",
    },
  }), [closing]);

  return (
    <div
      ref={overlayRef}
      style={styles.overlay}
      onClick={handleClickOutside}
    >
      <div style={styles.popup}>
        {/* Header */}
        <div style={styles.header}>
          <h2 style={styles.title}>Welcome Back</h2>
          <p style={styles.subtitle}>Sign in to continue your journey</p>
        </div>

        {/* Toggle Buttons */}
        <div style={styles.toggleContainer}>
          <button
            style={styles.toggleBtn(loginMethod === "password")}
            onClick={() => loginMethod !== "password" && toggleLoginMethod()}
            type="button"
          >
            Password
          </button>
          <button
            style={styles.toggleBtn(loginMethod === "otp")}
            onClick={() => loginMethod !== "otp" && toggleLoginMethod()}
            type="button"
          >
            OTP Login
          </button>
        </div>

        {/* Form */}
        <form style={styles.form} onSubmit={handleLoginSubmit} noValidate>
          {/* Email Field */}
          <div style={styles.inputGroup}>
            <label style={styles.label}>Email Address</label>
            <input
              ref={emailInputRef}
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              style={{
                ...styles.input,
                ...(errors.email ? { borderColor: "#ef4444" } : {}),
                ...(otpSent && loginMethod === "otp" ? { backgroundColor: "#f3f4f6" } : {})
              }}
              disabled={otpSent && loginMethod === "otp"}
              onFocus={(e) => e.target.style.borderColor = "#6366f1"}
              onBlur={(e) => e.target.style.borderColor = errors.email ? "#ef4444" : "#e5e7eb"}
            />
            {errors.email && (
              <p style={{ ...styles.messageContainer, ...styles.error, padding: "8px" }}>
                {errors.email}
              </p>
            )}
          </div>

          {/* Password/OTP Fields */}
          {loginMethod === "password" ? (
            <div style={styles.inputGroup}>
              <label style={styles.label}>Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                style={{
                  ...styles.input,
                  ...(errors.password ? { borderColor: "#ef4444" } : {})
                }}
                onFocus={(e) => e.target.style.borderColor = "#6366f1"}
                onBlur={(e) => e.target.style.borderColor = errors.password ? "#ef4444" : "#e5e7eb"}
              />
              {errors.password && (
                <p style={{ ...styles.messageContainer, ...styles.error, padding: "8px" }}>
                  {errors.password}
                </p>
              )}
            </div>
          ) : (
            <>
              {otpSent ? (
                <div style={styles.inputGroup}>
                  <label style={styles.label}>Enter OTP</label>
                  <div style={styles.otpContainer}>
                    <input
                      type="text"
                      name="otp"
                      placeholder="000000"
                      value={formData.otp}
                      onChange={handleChange}
                      maxLength="6"
                      style={{
                        ...styles.otpInput,
                        ...(errors.otp ? { borderColor: "#ef4444" } : {})
                      }}
                      onFocus={(e) => e.target.style.borderColor = "#6366f1"}
                      onBlur={(e) => e.target.style.borderColor = errors.otp ? "#ef4444" : "#e5e7eb"}
                    />
                    <button
                      type="button"
                      onClick={handleSendOtp}
                      style={styles.resendOtpBtn(countdown > 0)}
                      disabled={countdown > 0}
                    >
                      {countdown > 0 ? `Resend (${countdown}s)` : "Resend"}
                    </button>
                  </div>
                  {errors.otp && (
                    <p style={{ ...styles.messageContainer, ...styles.error, padding: "8px" }}>
                      {errors.otp}
                    </p>
                  )}
                </div>
              ) : (
                <button
                  type="button"
                  onClick={handleSendOtp}
                  style={styles.sendOtpBtn(otpLoading)}
                  disabled={otpLoading}
                >
                  {otpLoading ? "Sending OTP..." : "Send OTP"}
                </button>
              )}
            </>
          )}

          {/* Submit Button */}
          <button type="submit" style={styles.submitBtn}>
            {loginMethod === "password" ? "Sign In" : "Verify OTP"}
          </button>

          {/* Messages */}
          {successMsg && (
            <div style={{ ...styles.messageContainer, ...styles.success }}>
              {successMsg}
            </div>
          )}
          {backendError && (
            <div style={{ ...styles.messageContainer, ...styles.error }}>
              {backendError}
            </div>
          )}

          {/* Footer */}
          <div style={styles.footer}>
            <p style={styles.switchContainer}>
              Don't have an account?
              <button
                type="button"
                style={styles.switchBtn}
                onClick={() => {
                  handleClose();
                  setTimeout(openRegister, 350);
                }}
              >
                Register now
              </button>
            </p>

            {/* Close Button */}
            <button type="button" style={styles.closeBtn} onClick={handleClose}>
              Cancel
            </button>
          </div>
        </form>

        {/* Animation Styles */}
        <style>{`
          .fade-in { animation: fadeIn 0.3s ease-out forwards; }
          .fade-out { animation: fadeOut 0.3s ease-out forwards; }
          .slide-up { animation: slideUp 0.3s ease-out forwards; }
          .slide-down { animation: slideDown 0.3s ease-out forwards; }

          @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
          @keyframes fadeOut { from { opacity: 1; } to { opacity: 0; } }
          @keyframes slideUp { from { transform: translateY(20px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
          @keyframes slideDown { from { transform: translateY(0); opacity: 1; } to { transform: translateY(20px); opacity: 0; } }

          input:focus {
            outline: none;
          }
        `}</style>
      </div>
    </div>
  );
}