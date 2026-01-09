import React, { useEffect, useRef, useState } from "react";
import axios from "../utils/api";
import Login from "./Login";
import api from "../utils/api";
const API_URL = import.meta.env.VITE_API_URL;

export default function Register({ onClose, openLogin }) {
  const overlayRef = useRef();
  const [closing, setClosing] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    mobile: "",
    city: "",
  });

  const [errors, setErrors] = useState({});
  const [successMsg, setSuccessMsg] = useState("");
  const [backendError, setBackendError] = useState("");
  const [showLogin, setShowLogin] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") handleClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleClickOutside = (e) => {
    if (overlayRef.current && e.target === overlayRef.current) handleClose();
  };

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      onClose();
      setClosing(false);
      setFormData({
        name: "",
        email: "",
        password: "",
        mobile: "",
        city: "",
      });
      setErrors({});
      setSuccessMsg("");
    }, 300);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
    setSuccessMsg("");
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";
    if (!formData.password.trim()) newErrors.password = "Password is required";
    if (!formData.mobile.trim()) newErrors.mobile = "Mobile is required";
    if (!formData.city.trim()) newErrors.city = "City is required";
    return newErrors;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    setErrors({});
    setBackendError("");

    // Client-side validation
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const res = await api.post("/users/register", formData);
      console.log("User Registered:", res.data);
      
      setShowLogin(true)
      localStorage.setItem("token", res.data.token);
      setClosing(true);
       setSuccessMsg(res.data.message);

      // Wait 1.5 seconds to show success message, then switch to login popup
      setTimeout(() => {
        handleOpenLogin(); // This will close register popup, then open login popup after 350ms
      }, 1500);

      // optionally reset form
      setFormData({ name: "", email: "", password: "", mobile: "", city: "" });
      alert("Registration successful!");

    } catch (err) {
      const data = err.response?.data;
      if (data?.message) {
        setBackendError(data.message); // show backend error like "User already exists"
      } else {
        setBackendError("Something went wrong");
      }
    }
  };

  let renderedErrors;
  if (!errors) {
    renderedErrors = null;
  } else if (Array.isArray(errors)) {
    renderedErrors = errors;
  } else if (typeof errors === "object") {
    renderedErrors = Object.values(errors); // convert object to array of strings
  } else {
    renderedErrors = [errors]; // wrap string in array
  }


  const handleOpenLogin = () => {
  
      setShowLogin(true); 
  handleClose(); // close register popup
  setTimeout(() => {
    openLogin(true); // open login popup
  }, 350); // wait for close animation
};  

  // Responsive styles
  const getStyles = () => {
    const isMobile = windowSize.width < 768;
    const isSmallMobile = windowSize.width < 541;

    return {
      overlay: {
        position: "fixed",
        top: 0,
        left: 0,
        height: "100vh",
        width: "100vw",
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: isMobile ? "flex-start" : "center",
        zIndex: 1500,
        padding: isMobile ? "20px 10px" : "5px",
        overflowY: "auto",
      },
      popup: {
        backgroundColor: "white",
        padding: isSmallMobile ? "15px 20px" : "20px 25px",
        borderRadius: "10px",
        width: isSmallMobile ? "100%" : isMobile ? "80%" : "500px",
        maxWidth: "100%",
        boxShadow: "0 8px 25px rgba(0,0,0,0.25)",
        display: "flex",
        flexDirection: "column",
        marginTop: isMobile ? "20px" : 0,
        marginBottom: isMobile ? "20px" : 0,
      },
      popupTitle: {
        marginBottom: "10px",
        textAlign: "center",
        fontFamily: "Times New Roman",
        fontSize: isSmallMobile ? "1.5rem" : "2rem",
        fontWeight: "700",
        color: "white",
        letterSpacing: "1px",
        backgroundColor: "gray",
        padding: "8px 0",
        borderRadius: "15px",
      },
      form: {
        display: "flex",
        flexDirection: "column",
      },
      label: {
        marginBottom: "8px",
        fontSize: isSmallMobile ? "0.9rem" : "1.1rem",
        color: "#444",
        fontWeight: "600",
        display: "flex",
        flexDirection: "column",
      },
      row: {
        display: "flex",
        flexDirection: isSmallMobile ? "column" : "row",
        gap: "20px",
        justifyContent: "space-between",
      },
      halfLabel: {
        flex: 1,
      },
      input: {
        marginTop: "8px",
        padding: isSmallMobile ? "8px 12px" : "10px 14px",
        fontSize: isSmallMobile ? "0.9rem" : "1rem",
        borderRadius: "6px",
        border: "1.8px solid #ccc",
        transition: "border-color 0.3s ease",
      },
      submitBtn: {
        marginTop: "10px",
        padding: isSmallMobile ? "12px" : "14px",
        fontSize: isSmallMobile ? "1rem" : "1.1rem",
        borderRadius: "8px",
        border: "none",
        backgroundColor: "#007bff",
        color: "white",
        fontWeight: "700",
        cursor: "pointer",
        transition: "background-color 0.3s ease",
      },
      switchContainer: {
        marginTop: "8px",
        textAlign: "center",
        fontSize: isSmallMobile ? "0.9rem" : "1rem",
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
      closeBtnContainer: {
        display: "flex",
        justifyContent: "flex-end",
      },
      closeBtn: {
        marginTop: "-10px",
        marginBottom: "-10px",
        padding: isSmallMobile ? "10px 20px" : "10px 24px",
        fontSize: isSmallMobile ? "0.9rem" : "1rem",
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
        fontSize: isSmallMobile ? "0.8rem" : "0.9rem",
        fontWeight: "600",
      },
      success: {
        marginTop: "18px",
        color: "#28a745",
        fontWeight: "700",
        textAlign: "center",
        fontSize: isSmallMobile ? "0.95rem" : "1.05rem",
      },
    };
  };

  const styles = getStyles();

  return (
    <div
      ref={overlayRef}
      style={styles.overlay}
      onClick={handleClickOutside}
      className={`fade-in ${closing ? "fade-out" : ""}`}
    >
      <div style={styles.popup} className={`slide-up ${closing ? "slide-down" : ""}`}>
        {/* {renderedErrors &&
          renderedErrors.map((e, i) => (
            <p key={i} style={{ color: "red" }}>{e.user}</p> 


          ))}*/}
        {backendError && (
          <p style={{ color: "red", marginBottom: "10px" }}>{backendError}</p>
        )}
        <h2 style={styles.popupTitle}>Register</h2>
        <form style={styles.form} onSubmit={handleSubmit} noValidate>
          <label style={styles.label}>Name
            <input type="text" name="name" placeholder="Enter your Full Name" value={formData.name} onChange={handleChange} style={styles.input} require />
            {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
          </label>

          <label style={styles.label}> Email
            <input type="email" name="email" placeholder="Enter your Valid Email" value={formData.email} onChange={handleChange} style={styles.input} require />
            {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
          </label>

          <label style={styles.label}> Password
            <input type="password" name="password" placeholder="Enter your Password" value={formData.password} onChange={handleChange} style={styles.input} require />
            {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
          </label>

          <div style={styles.row}>
            <label style={{ ...styles.label, ...styles.halfLabel }}> Mobile
              <input type="tel" name="mobile" value={formData.mobile} onChange={handleChange} style={styles.input} required pattern="[0-9]{10}" placeholder="10-digit phone number" />
              {errors.mobile && <p style={styles.error}>{errors.mobile}</p>}
            </label>

            <label style={{ ...styles.label, ...styles.halfLabel }}> Which city are you from?
              <input type="text" name="city" value={formData.city} onChange={handleChange} style={styles.input} require />
              {errors.city && <p style={styles.error}>{errors.city}</p>}
            </label>
          </div>

          <button type="submit" style={styles.submitBtn}> Submit</button>

          {successMsg && <p style={styles.success}>{successMsg}</p>}

          {showLogin && (

            <Login onClose={() => setShowLogin(false)} />
          )}

          <div style={styles.switchContainer}>
            <p>
              Already have an account?{" "}
              <button type="button" style={styles.switchBtn} onClick={handleOpenLogin}>
                Login
              </button>
            </p>
          </div>

          <div style={styles.closeBtnContainer}>
            <button type="button" onClick={handleClose} style={styles.closeBtn}>
              Close
            </button>
          </div>
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



//   import React, { useState, useContext } from "react";
// import { AuthContext } from "../Context/AuthContext";
// import axios from "../utils/api";

// export default function Register({ onClose, openLogin }) {
//   const { login } = useContext(AuthContext);

//   const [formData, setFormData] = useState({ name: "", email: "", password: "", contact: "", city: "" });
//   const [errors, setErrors] = useState({});
//   const [successMsg, setSuccessMsg] = useState("");

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//     setErrors({ ...errors, [e.target.name]: "" });
//     setSuccessMsg("");
//   };

//   const validate = () => {
//     const newErrors = {};
//     if (!formData.name) newErrors.name = "Name is required";
//     if (!formData.email) newErrors.email = "Email is required";
//     if (!formData.password) newErrors.password = "Password is required";
//     if (!formData.contact) newErrors.contact = "Contact is required";
//     if (!formData.city) newErrors.city = "City is required";
//     return newErrors;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const validationErrors = validate();
//     setErrors(validationErrors);
//     if (Object.keys(validationErrors).length === 0) {
//       try {
//         await axios.post("/users/register", formData);
//         setSuccessMsg("Registration successful! Logging you in...");
//         await login(formData.email, formData.password);
//         onClose();
//       } catch (err) {
//         setErrors({ email: err.response?.data?.message || "Registration failed" });
//       }
//     }
//   };

//   return (
//     <div className="overlay">
//       <div className="popup">
//         <h2>Register</h2>
//         <form onSubmit={handleSubmit}>
//           <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} />
//           {errors.name && <p className="error">{errors.name}</p>}

//           <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
//           {errors.email && <p className="error">{errors.email}</p>}

//           <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
//           {errors.password && <p className="error">{errors.password}</p>}

//           <input type="text" name="contact" placeholder="Contact" value={formData.contact} onChange={handleChange} />
//           {errors.contact && <p className="error">{errors.contact}</p>}

//           <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange} />
//           {errors.city && <p className="error">{errors.city}</p>}

//           <button type="submit">Register</button>
//         </form>

//         {successMsg && <p className="success">{successMsg}</p>}

//         <p>
//           Already have an account? <button onClick={openLogin}>Login</button>
//         </p>
//         <button onClick={onClose}>Close</button>
//       </div>
//     </div>
//   );
// }


//



// import React, { useEffect, useRef, useState, useContext } from "react";
// import { AuthContext } from "../Context/AuthContext";

// export default function Register({ onClose, openLogin }) {
//   const { login } = useContext(AuthContext);
//   const overlayRef = useRef();
//   const [closing, setClosing] = useState(false);
//   const [formData, setFormData] = useState({ name: "", email: "", password: "", contact: "", city: "" });
//   const [errors, setErrors] = useState({});
//   const [successMsg, setSuccessMsg] = useState("");
//   const [image, setImage] = useState(null);

//   const handleClickOutside = (e) => {
//     if (overlayRef.current && e.target === overlayRef.current) handleClose();
//   };

//   const handleClose = () => {
//     setClosing(true);
//     setTimeout(() => {
//       onClose();
//       setClosing(false);
//       setFormData({ name: "", email: "", password: "", contact: "", city: "" });
//       setErrors({});
//       setSuccessMsg("");
//       setImage(null);
//     }, 300);
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//     setErrors({ ...errors, [e.target.name]: "" });
//   };

//   const handleImageChange = (e) => {
//     setImage(e.target.files[0]);
//   };

//   const validate = () => {
//     const newErrors = {};
//     if (!formData.name.trim()) newErrors.name = "Name is required";
//     if (!formData.email.trim()) newErrors.email = "Email is required";
//     else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid";
//     if (!formData.password.trim()) newErrors.password = "Password is required";
//     if (!formData.contact.trim()) newErrors.contact = "Contact is required";
//     if (!formData.city.trim()) newErrors.city = "City is required";
//     return newErrors;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const validationErrors = validate();
//     setErrors(validationErrors);
//     if (Object.keys(validationErrors).length === 0) {
//       // Example: store in context after successful "registration"
//       login({ ...formData, image: image ? URL.createObjectURL(image) : null }, "dummy-token");
//       setSuccessMsg("Registration successful!");
//       setTimeout(() => handleClose(), 1000);
//     }
//   };

//   return (
//     <div ref={overlayRef} style={styles.overlay} onClick={handleClickOutside} className={`fade-in ${closing ? "fade-out" : ""}`}>
//       <div style={styles.popup} className={`slide-up ${closing ? "slide-down" : ""}`}>
//         <h2 style={styles.popupTitle}>Register</h2>
//         <form style={styles.form} onSubmit={handleSubmit} noValidate>
//           <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} style={styles.input} />
//           {errors.name && <p style={styles.error}>{errors.name}</p>}

//           <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} style={styles.input} />
//           {errors.email && <p style={styles.error}>{errors.email}</p>}

//           <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} style={styles.input} />
//           {errors.password && <p style={styles.error}>{errors.password}</p>}

//           <input type="tel" name="contact" placeholder="Contact" value={formData.contact} onChange={handleChange} style={styles.input} />
//           {errors.contact && <p style={styles.error}>{errors.contact}</p>}

//           <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange} style={styles.input} />
//           {errors.city && <p style={styles.error}>{errors.city}</p>}

//           <input type="file" accept="image/*" onChange={handleImageChange} style={styles.input} />

//           <button type="submit" style={styles.submitBtn}>Submit</button>
//           {successMsg && <p style={styles.success}>{successMsg}</p>}

//           <p style={styles.switchContainer}>
//             Already have an account? <button type="button" style={styles.switchBtn} onClick={() => { handleClose(); setTimeout(openLogin, 350); }}>Login</button>
//           </p>

//           <button type="button" style={styles.closeBtn} onClick={handleClose}>Close</button>
//         </form>
//         <style>{animationStyles}</style>
//       </div>
//     </div>
//   );
// }

// const animationStyles = `
// .fade-in { animation: fadeIn 0.3s ease-out forwards; }
// .fade-out { animation: fadeOut 0.3s ease-out forwards; }
// .slide-up { animation: slideUp 0.3s ease-out forwards; }
// .slide-down { animation: slideDown 0.3s ease-out forwards; }
// @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
// @keyframes fadeOut { from { opacity: 1; } to { opacity: 0; } }
// @keyframes slideUp { from { transform: translateY(20px); opacity:0 } to { transform: translateY(0); opacity:1 } }
// @keyframes slideDown { from { transform: translateY(0); opacity:1 } to { transform: translateY(20px); opacity:0 } }
// `;

// const styles = {
//   overlay: { position:"fixed", top:0, left:0, width:"100vw", height:"100vh", background:"rgba(0,0,0,0.5)", display:"flex", justifyContent:"center", alignItems:"center", zIndex:1500 },
//   popup: { background:"white", padding:"20px", borderRadius:"10px", width:"400px", maxWidth:"95%", display:"flex", flexDirection:"column" },
//   popupTitle:{ textAlign:"center", fontSize:"1.8rem", fontWeight:"700", marginBottom:"15px", backgroundColor:"gray", color:"white", borderRadius:"10px", padding:"8px" },
//   form:{ display:"flex", flexDirection:"column", gap:"10px" },
//   input:{ padding:"10px", borderRadius:"6px", border:"1.5px solid #ccc" },
//   submitBtn:{ padding:"12px", border:"none", borderRadius:"6px", backgroundColor:"#007bff", color:"white", fontWeight:"600", cursor:"pointer" },
//   closeBtn:{ marginTop:"10px", padding:"10px", border:"none", borderRadius:"6px", backgroundColor:"#dc3545", color:"white", cursor:"pointer" },
//   error:{ color:"#dc3545", fontSize:"0.9rem" },
//   success:{ color:"#28a745", fontSize:"1rem", textAlign:"center" },
//   switchContainer:{ textAlign:"center", marginTop:"10px" },
//   switchBtn:{ background:"none", border:"none", color:"#007bff", textDecoration:"underline", cursor:"pointer" }
// };
