// // import { Link, useNavigate } from "react-router-dom";
// // import React, { useState, useContext } from "react";
// // import Register from "../../Pages/Register.jsx"; 
// // import Login from "../../Pages/Login";
// // import { AuthContext } from "../../Context/AuthContext";

// // const Header = ({ scrollToAbout }) => {
// //   const { user, logout } = useContext(AuthContext); // Added AuthContext
// //   const navigate = useNavigate();

// //   const [showRegister, setShowRegister] = useState(false);
// //   const [showLogin, setShowLogin] = useState(false);

// //   // Handlers for switching between login and register popups
// //   const openRegister = () => {
// //     setShowLogin(false);
// //     setShowRegister(true);
// //   };
// //   const openLogin = () => {
// //     setShowRegister(false);
// //     setShowLogin(true);
// //   };

// //   return (
// //     <>
// //       <nav
// //         className="navbar navbar-expand-lg navbar-dark bg-gradient shadow mt-0 mb-2 w-100"
// //         style={{
// //           background:
// //             "linear-gradient(to right,rgb(242, 232, 241),rgb(87, 234, 229),rgb(236, 234, 104))",
// //         }}
// //       >
// //         <div className="container-fluid w-100%">
// //           <img
// //             src="/logo.png"
// //             alt="Logo"
// //             className="logo-img"
// //             width="150"
// //             height="100"
// //           />

// //           <button
// //             className="navbar-toggler"
// //             type="button"
// //             data-bs-toggle="collapse"
// //             data-bs-target="#navbarNav"
// //           >
// //             <span className="navbar-toggler-icon"></span>
// //           </button>

// //           <div
// //             className="collapse navbar-collapse justify-content-center"
// //             id="navbarNav"
// //           >
// //             <ul className="navbar-nav gap-4">
// //               <li className="nav-item">
// //                 <Link className="nav-link text-dark" to="/">
// //                   Home
// //                 </Link>
// //               </li>
// //               <li className="nav-item">
// //                 <a
// //                   href="#about-us"
// //                   className="nav-link text-dark"
// //                   onClick={scrollToAbout}
// //                 >
// //                   About Us
// //                 </a>
// //               </li>
// //               <li className="nav-item">
// //                 <Link className="nav-link text-dark" to="/services">
// //                   Services
// //                 </Link>
// //               </li>
// //               <li className="nav-item">
// //                 <Link className="nav-link text-dark" to="/career">
// //                   Career
// //                 </Link>
// //               </li>
// //             </ul>
// //           </div>

// //           <div className="d-flex gap-2">
// //             {!user ? (
// //               <>
// //                 <button
// //                   className="btn btn-outline-light"
// //                   onClick={openRegister}
// //                 >
// //                   Register
// //                 </button>
// //                 <button
// //                   className="btn btn-outline-light"
// //                   onClick={openLogin}
// //                 >
// //                   Login
// //                 </button>
// //               </>
// //             ) : (
// //               <div className="dropdown">
// //                 <span
// //                   className="btn btn-light dropdown-toggle"
// //                   role="button"
// //                   data-bs-toggle="dropdown"
// //                 >
// //                   {user.name || user.email}
// //                 </span>
// //                 <ul className="dropdown-menu">
// //                   <li>
// //                     <button
// //                       className="dropdown-item"
// //                       onClick={() => navigate("/profile")}
// //                     >
// //                       Profile
// //                     </button>
// //                   </li>
// //                   <li>
// //                     <button className="dropdown-item" onClick={logout}>
// //                       Logout
// //                     </button>
// //                   </li>
// //                 </ul>
// //               </div>
// //             )}
// //           </div>
// //         </div>
// //       </nav>

// //       {/* Popups */}
// //       {showRegister && (
// //         <Register onClose={() => setShowRegister(false)} openLogin={openLogin} />
// //       )}
// //       {showLogin && (
// //         <Login onClose={() => setShowLogin(false)} openRegister={openRegister} />
// //       )}


// //          <style jsx>{`
// //         *{
// //   margin: 0px;
// //   padding: 0px;
// // }
// // .nav-links li button:hover{
// //     /* border: 2px solid black; */
// //     text-decoration: none;
    
// //    /* border-radius: 5px; */
// //     color: blue;
// //     font-family: 'Times New Roman', Times, serif;

// // }
// // .nav-links li{
// //     text-decoration: none;
// //     border: none;
// //     background-color: transparent;
// // }

// // /* Navbar Container */
// // .navbar {
// //   padding: 1rem 2rem;
// //   /* border-radius: 0 0 12px 12px; */
// //   box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
// //   font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif, sans-serif;
// //   width: 100%;
// //   border: none;

// // }

// // /* Logo Styling */
// // .logo-img {
// //   border-radius: 8px;
// //   transition: transform 0.3s ease;

// // }
// // .logo-img:hover {
// //   transform: scale(1.05);
// // }

// // /* Nav Links */
// // .navbar-nav .nav-link {
// //   color: #0b0a0a !important;
// //   font-weight: 500;
// //   letter-spacing: 0.5px;
// //   transition: all 0.3s ease;
// // }
// // .navbar-nav .nav-link:hover {
// //   color: #04048a !important;
// //   background-color: rgba(255, 255, 255, 0.2);
// //   padding: 6px 12px;
// //   border-radius: 6px;
// // }

// // /* Show dropdown menu on hover */
// // .dropdown:hover .dropdown-menu {
// //   display: block;
// //   margin-top: 0; /* optional, aligns dropdown */
// // }

// // /* Dropdown Menu */
// // .dropdown-menu {
// //   background-color:rgba(220, 179, 179, 0.49); /* Bisque */
// //   border: 1px solid black;
// //   width: 250px;
// //   text-decoration: none;
// //   box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
// //   border-radius: 10px;
// // }
// // .dropdown-menu a {
// //   text-decoration: none;
// //   color: #0b0a0a;
// // }
// // .dropdown-menu li :hover{
// //     color:white;
// //     width: 100%;
// //     background-color: black;
// //     padding: 5px;
// // }
// // .dropdown-item {
// //   color: #0b0a0a;
// //   font-weight: 500;
// //   text-decoration: none;  
// // }
// // .dropdown-item a:hover {
// //   background-color: #ffcc80; /* Light orange */
// //   color: #000;
// //   border-radius: 6px;
// // }

// // /* Buttons (Login/Register) */
// // .btn {
// //   background-color: #007bff;
// //     padding: 8px 16px;
// //   font-weight: 500;
// //   border-radius: 20px;
// //   transition: background-color 0.3s ease;
// // }
// // .btn-outline-light {
// //   border: 2px solid #fff;
// //   color: #fff;
// // }
// // .btn-outline-light:hover {
// //   background-color: #d2cccc;
// //   color: #f12711;
// // }
// // .btn-light {
// //   background-color: #c9c7c7;
// //   color: #f12711;
// // }
// // .btn-light:hover {
// //   background-color: #eae6e2;
// // }

// // /* Media Responsive Adjustments */
// // @media (max-width: 768px) {
// //   .navbar-nav {
// //     gap: 0.5rem;
// //   }

// //   .btn {
// //     padding: 4px 10px;
// //   }
// // }
// //         `}</style>
// //      </>
// //    );
// // };

// //  export default Header;



// // // import React, { useState, useContext } from "react";
// // // import { Link, useNavigate } from "react-router-dom";
// // // import Register from "../../Pages/Register.jsx";
// // // import Login from "../../Pages/Login.jsx";
// // // import { AuthContext } from "../../Context/AuthContext";

// // // const Header = ({ scrollToAbout }) => {
// // //   const { user, logout } = useContext(AuthContext);
// // //   const navigate = useNavigate();

// // //   const [showRegister, setShowRegister] = useState(false);
// // //   const [showLogin, setShowLogin] = useState(false);
// // //   const [profileDropdown, setProfileDropdown] = useState(false);

// // //   const handleLogout = () => {
// // //     logout();
// // //     navigate("/"); // redirect to home
// // //   };

// // //   return (
// // //     <>
// // //       <nav
// // //         className="navbar navbar-expand-lg navbar-dark bg-gradient shadow mt-0 mb-2 w-100"
// // //         style={{
// // //           background:
// // //             "linear-gradient(to right,rgb(242, 232, 241),rgb(87, 234, 229),rgb(236, 234, 104))",
// // //         }}
// // //       >
// // //         <div className="container-fluid w-100%">
// // //           <img
// // //             src="/logo.png"
// // //             alt="Logo"
// // //             className="logo-img"
// // //             width="150"
// // //             height="100"
// // //           />

// // //           <button
// // //             className="navbar-toggler"
// // //             type="button"
// // //             data-bs-toggle="collapse"
// // //             data-bs-target="#navbarNav"
// // //           >
// // //             <span className="navbar-toggler-icon"></span>
// // //           </button>

// // //           <div
// // //             className="collapse navbar-collapse justify-content-center"
// // //             id="navbarNav"
// // //           >
// // //             <ul className="navbar-nav gap-4">
// // //               <li className="nav-item">
// // //                 <Link className="nav-link text-dark" to="/">
// // //                   Home
// // //                 </Link>
// // //               </li>
// // //               <li className="nav-item">
// // //                 <a
// // //                   href="#about-us"
// // //                   className="nav-link text-dark"
// // //                   onClick={scrollToAbout}
// // //                 >
// // //                   About Us
// // //                 </a>
// // //               </li>
// // //               <li className="nav-item">
// // //                 <Link className="nav-link text-dark" to="/services">
// // //                   Services
// // //                 </Link>
// // //               </li>
// // //               <li className="nav-item">
// // //                 <Link className="nav-link text-dark" to="/career">
// // //                   Career
// // //                 </Link>
// // //               </li>
// // //               {/* Add Domestic/International dropdowns here as needed */}
// // //             </ul>
// // //           </div>

// // //           <div className="d-flex gap-2 align-items-center">
// // //             {!user ? (
// // //               <>
// // //                 <button
// // //                   className="btn btn-outline-light"
// // //                   onClick={() => setShowRegister(true)}
// // //                 >
// // //                   Register
// // //                 </button>
// // //                 <button
// // //                   className="btn btn-outline-light"
// // //                   onClick={() => setShowLogin(true)}
// // //                 >
// // //                   Login
// // //                 </button>
// // //               </>
// // //             ) : (
// // //               <div className="position-relative">
// // //                 <img
// // //                   src={user.profilePic || "/default-profile.png"}
// // //                   alt="Profile"
// // //                   className="rounded-circle"
// // //                   width="45"
// // //                   height="45"
// // //                   style={{ cursor: "pointer" }}
// // //                   onClick={() => setProfileDropdown(!profileDropdown)}
// // //                 />
// // //                 {profileDropdown && (
// // //                   <ul
// // //                     className="dropdown-menu dropdown-menu-end show"
// // //                     style={{
// // //                       position: "absolute",
// // //                       top: "50px",
// // //                       right: 0,
// // //                       minWidth: "200px",
// // //                     }}
// // //                   >
// // //                     <li>
// // //                       <Link className="dropdown-item" to="/enquiry">
// // //                         Your Enquiry
// // //                       </Link>
// // //                     </li>
// // //                     <li>
// // //                       <Link className="dropdown-item" to="/bookings">
// // //                         Your Bookings
// // //                       </Link>
// // //                     </li>
// // //                     <li>
// // //                       <button
// // //                         className="dropdown-item text-danger"
// // //                         onClick={handleLogout}
// // //                       >
// // //                         Logout
// // //                       </button>
// // //                     </li>
// // //                   </ul>
// // //                 )}
// // //               </div>
// // //             )}
// // //           </div>
// // //         </div>
// // //       </nav>

// // //       {showRegister && <Register onClose={() => setShowRegister(false)} />}
// // //       {showLogin && <Login onClose={() => setShowLogin(false)} />}
// // //     </>
// // //   );
// // // };

// // // export default Header;



// // // import React, { useState, useContext } from "react";
// // // import { Link, useNavigate } from "react-router-dom";
// // // import { AuthContext } from "../../Context/AuthContext";
// // // import Register from "../../Pages/Register.jsx";
// // // import Login from "../../Pages/Login.jsx";

// // // const Header = ({ scrollToAbout }) => {
// // //   const { user, logout } = useContext(AuthContext);
// // //   const navigate = useNavigate();

// // //   const [showRegister, setShowRegister] = useState(false);
// // //   const [showLogin, setShowLogin] = useState(false);

// // //   return (
// // //     <>
// // //       <nav
// // //         className="navbar navbar-expand-lg navbar-dark bg-gradient shadow mt-0 mb-2 w-100"
// // //         style={{
// // //           background:
// // //             "linear-gradient(to right,rgb(242, 232, 241),rgb(87, 234, 229),rgb(236, 234, 104))",
// // //         }}
// // //       >
// // //         <div className="container-fluid w-100%">
// // //           <img src="/logo.png" alt="Logo" className="logo-img" width="150" height="100" />

// // //           <button
// // //             className="navbar-toggler"
// // //             type="button"
// // //             data-bs-toggle="collapse"
// // //             data-bs-target="#navbarNav"
// // //           >
// // //             <span className="navbar-toggler-icon"></span>
// // //           </button>

// // //           <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
// // //             <ul className="navbar-nav gap-4">
// // //               <li className="nav-item">
// // //                 <Link className="nav-link text-dark" to="/">Home</Link>
// // //               </li>
// // //               <li className="nav-item">
// // //                 <a href="#about-us" className="nav-link text-dark" onClick={scrollToAbout}>
// // //                   About Us
// // //                 </a>
// // //               </li>
// // //               <li className="nav-item">
// // //                 <Link className="nav-link text-dark" to="/services">Services</Link>
// // //               </li>
// // //               <li className="nav-item">
// // //                 <Link className="nav-link text-dark" to="/career">Career</Link>
// // //               </li>
// // //               {/* Add Domestic / International dropdowns here if needed */}
// // //             </ul>
// // //           </div>

// // //           <div className="d-flex gap-2">
// // //             {!user ? (
// // //               <>
// // //                 <button className="btn btn-outline-light" onClick={() => setShowRegister(true)}>Register</button>
// // //                 <button className="btn btn-outline-light" onClick={() => setShowLogin(true)}>Login</button>
// // //               </>
// // //             ) : (
// // //               <div className="dropdown">
// // //                 <span className="btn btn-light dropdown-toggle" role="button" data-bs-toggle="dropdown">
// // //                   {user.name}
// // //                 </span>
// // //                 <ul className="dropdown-menu">
// // //                   <li>
// // //                     <button className="dropdown-item" onClick={() => navigate("/profile")}>Profile</button>
// // //                   </li>
// // //                   <li>
// // //                     <button className="dropdown-item" onClick={logout}>Logout</button>
// // //                   </li>
// // //                 </ul>
// // //               </div>
// // //             )}
// // //           </div>
// // //         </div>
// // //       </nav>

// // //       {showRegister && <Register onClose={() => setShowRegister(false)} openLogin={() => setShowLogin(true)} />}
// // //       {showLogin && <Login onClose={() => setShowLogin(false)} openRegister={() => setShowRegister(true)} />}
// // //     </>
// // //   );
// // // };

// // // export default Header;











// // //register.jsx

// // // import axios from "axios";
// // // import { useState } from "react";

// // // export default function Register() {
// // //   const [formData, setFormData] = useState({
// // //     name: "",
// // //     email: "",
// // //     password: "",
// // //     contact: "",
// // //     city: ""
// // //   });

// // //   const handleChange = (e) => {
// // //     setFormData({ ...formData, [e.target.name]: e.target.value });
// // //   };

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();
// // //     try {
// // //       const res = await api.post("http://localhost:5000/axios/users/register", formData);
// // //       console.log("User Registered:", res.data);
// // //       localStorage.setItem("token", res.data.token);
// // //     } catch (err) {
// // //       console.error(err.response?.data?.message || err.message);
// // //     }
// // //   };

// // //   return (
// // //     <form onSubmit={handleSubmit}>
// // //       <input name="name" placeholder="Name" onChange={handleChange} />
// // //       <input name="email" placeholder="Email" onChange={handleChange} />
// // //       <input name="password" placeholder="Password" type="password" onChange={handleChange} />
// // //       <input name="contact" placeholder="Contact" onChange={handleChange} />
// // //       <input name="city" placeholder="City" onChange={handleChange} />
// // //       <button type="submit">Register</button>
// // //     </form>
// // //   );
// // // }




// import React, { useState } from "react";
// import axios from "axios";

// const Login = ({ login, handleClose }) => {
//   const [formData, setFormData] = useState({
//     email: "",
//     password: ""
//   });

//   const [errors, setErrors] = useState({});
//   const [backendError, setBackendError] = useState("");
//   const [successMsg, setSuccessMsg] = useState("");

//   // Handle input changes
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // Client-side validation
//   const validate = () => {
//     const errs = {};
//     if (!formData.email.trim()) errs.email = "Email is required";
//     else if (!/\S+@\S+\.\S+/.test(formData.email)) errs.email = "Email is invalid";

//     if (!formData.password) errs.password = "Password is required";
//     else if (formData.password.length < 6) errs.password = "Password must be at least 6 characters";

//     return errs;
//   };

//   // Handle form submission
//   const handleLoginSubmit = async (e) => {
//     e.preventDefault();

//     // Clear previous errors and messages
//     setErrors({});
//     setBackendError("");
//     setSuccessMsg("");

//     // Client-side validation
//     const validationErrors = validate();
//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//       return;
//     }

//     try {
//       // Call backend login axios
//       const res = await api.post("http://localhost:5000/axios/users/login", {
//         email: formData.email,
//         password: formData.password
//       });

//       const { token, user } = res.data;

//       // Store token in localStorage
//       localStorage.setItem("token", token);

//       // Update frontend auth state
//       login(user, token); // function passed as prop

//       // Show success message
//       setSuccessMsg("Login successful!");

//       // Close popup after 1 second
//       setTimeout(() => handleClose(), 1000);

//     } catch (err) {
//       const data = err.response?.data;
//       if (data?.message) setBackendError(data.message); // show backend error
//       else setBackendError("Something went wrong");
//     }
//   };

//   return (
//     <div className="popup">
//       {/* Backend error on top */}
//       {backendError && <p style={{ color: "red", marginBottom: "10px" }}>{backendError}</p>}

//       {/* Success message */}
//       {successMsg && <p style={{ color: "green", marginBottom: "10px" }}>{successMsg}</p>}

//       <h2>Login</h2>
//       <form onSubmit={handleLoginSubmit} noValidate>
//         <label>
//           Email
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//           {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
//         </label>

//         <label>
//           Password
//           <input
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             required
//           />
//           {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
//         </label>

//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;




// exports.login = async (req, res) => {
//   const { email, password } = req.body;
//   const user = await User.findOne({ email });
//   // console.log(password)
//   console.log(user.password)
//   // if (!user || !(await bcrypt.compare(password, user.password)))
//   // return res.status(401).json({ message: "Invalid credentials" });
//   const pwd = await bcrypt.compare(password, user.password)
//   if (!user) {
//     return res.status(401).json({ message: "User Not Found" });
//   }
//   if (!pwd) {
//     return res.status(401).json({ message: "Invalid credentials" });
//   }

//   const token = generateToken(user);
//   res.json({ token });
// };

// // otp

// import React, { useState, useContext } from "react";
// import { AuthContext } from "../Context/AuthContext";
// import axios from "axios";

// export default function Register({ onClose, openLogin }) {
//   const { login } = useContext(AuthContext);

//   const [formData, setFormData] = useState({ name: "", email: "", password: "", contact: "", city: "" });
//   const [errors, setErrors] = useState({});
//   const [backendError, setBackendError] = useState("");
//   const [otpStep, setOtpStep] = useState(false);
//   const [otp, setOtp] = useState("");
//   const [successMsg, setSuccessMsg] = useState("");

//   const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

//   const handleRegisterSubmit = async (e) => {
//     e.preventDefault();
//     setErrors({});
//     setBackendError("");
    
//     // Simple validation
//     const validationErrors = {};
//     if (!formData.name) validationErrors.name = "Name is required";
//     if (!formData.email) validationErrors.email = "Email is required";
//     if (!formData.password) validationErrors.password = "Password is required";
//     if (Object.keys(validationErrors).length > 0) return setErrors(validationErrors);

//     try {
//       await api.post("http://localhost:5000/axios/users/register", formData);
//       setOtpStep(true); // show OTP input
//       setSuccessMsg("OTP sent to your email. Enter it below to complete registration.");
//     } catch (err) {
//       setBackendError(err.response?.data?.message || "Registration failed");
//     }
//   };

//   const handleOtpSubmit = async () => {
//     try {
//       const res = await api.post("http://localhost:5000/axios/users/verify-otp", {
//         email: formData.email,
//         otp,
//       });
//       const { token, user } = res.data;
//       localStorage.setItem("token", token);
//       login(user, token);
//       setSuccessMsg("Registration successful!");
//       setTimeout(() => onClose(), 1000);
//     } catch (err) {
//       setBackendError(err.response?.data?.message || "OTP verification failed");
//     }
//   };

//   return (
//     <div className="popup-overlay">
//       <div className="popup">
//         {!otpStep ? (
//           <>
//             <h2>Register</h2>
//             <form onSubmit={handleRegisterSubmit}>
//               <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
//               {errors.name && <p className="error">{errors.name}</p>}

//               <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
//               {errors.email && <p className="error">{errors.email}</p>}

//               <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
//               {errors.password && <p className="error">{errors.password}</p>}

//               <input type="text" name="contact" placeholder="Contact" value={formData.contact} onChange={handleChange} />
//               <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange} />

//               <button type="submit">Register</button>
//               {backendError && <p className="error">{backendError}</p>}
//               {successMsg && <p className="success">{successMsg}</p>}
//             </form>
//             <p>Already have an account? <button onClick={openLogin}>Login</button></p>
//           </>
//         ) : (
//           <>
//             <h2>Enter OTP</h2>
//             <input type="text" placeholder="OTP" value={otp} onChange={(e) => setOtp(e.target.value)} />
//             <button onClick={handleOtpSubmit}>Verify OTP</button>
//             {backendError && <p className="error">{backendError}</p>}
//             {successMsg && <p className="success">{successMsg}</p>}
//           </>
//         )}
//         <button onClick={onClose}>Close</button>
//       </div>
//     </div>
//   );
// }
