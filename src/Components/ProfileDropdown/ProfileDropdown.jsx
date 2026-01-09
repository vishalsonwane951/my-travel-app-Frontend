// import React, { useState, useContext, useEffect, useRef } from "react";
// import { AuthContext } from "../../Context/AuthContext";
// import axios from "../../utils/api";
// import MyBookings from "../BookingForm/MyBookings";
// import MyFavourite from "./MyFavourite";
// import MyEnquiry from "./MyEnquiry";

// const ProfileDropdown = () => {
//   const { user, logout, updateUser } = useContext(AuthContext);
//   const [showProfile, setShowProfile] = useState(false); // show/hide profile dropdown
//   const [uploading, setUploading] = useState(false);
//   const [showBookings, setShowBookings] = useState(false);
//   const [showEnquiry, setShowEnquiry] = useState(false);
//   const [showFavourites, setShowFavourites] = useState(false);

//   const profileRef = useRef(null);

//   // Toggle profile dropdown on profile click
//   const handleProfileClick = () => setShowProfile(prev => !prev);

//   // Close profile dropdown if clicked outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (profileRef.current && !profileRef.current.contains(event.target)) {
//         setShowProfile(false);
//       }
//     };
//     document.addEventListener("click", handleClickOutside);
//     return () => document.removeEventListener("click", handleClickOutside);
//   }, []);

//   const handleFileChange = async (e) => {
//     const file = e.target.files[0];
//     if (!file) return;

//     const formData = new FormData();
//     formData.append("avatar", file);

//     setUploading(true);
//     try {
//       const res = await axios.post("/users/upload-avatar", formData, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });
//       updateUser({ avatar: res.data.avatar });
//     } catch (err) {
//       console.error("Upload failed:", err);
//     } finally {
//       setUploading(false);
//     }
//   };

//   const handleBookings = () => {
//     setShowBookings(true);
//   };

//   return (
//     <>
//       {/* Profile Icon */}
//       <div ref={profileRef} style={{ position: "relative" }}>
//         <img
//           src={user.avatar || "/default-avatar.png"}
//           alt="Profile"
//           onClick={handleProfileClick}
//           style={{
//             width: "40px",
//             height: "40px",
//             borderRadius: "50%",
//             cursor: "pointer",
//             objectFit: "cover",
//             border: "2px solid #fff",
//           }}
//         />

//         {/* Profile Dropdown - only shows after clicking */}
//         {showProfile && (
//           <div
//             style={{
//               position: "absolute",
//               top: "50px",
//               right: "0",
//               backgroundColor: "#fff",
//               border: "1px solid #ccc",
//               borderRadius: "8px",
//               width: "180px",
//               boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
//               padding: "10px",
//               zIndex: 1000,
//             }}
//           >
//             <div style={{ textAlign: "center", marginBottom: "10px" }}>
//               <img
//                 src={user.avatar || "/default-avatar.png"}
//                 alt="Profile"
//                 style={{ width: "60px", height: "60px", borderRadius: "50%", objectFit: "cover" }}
//               />
//               <div>
//                 <label
//                   htmlFor="avatar-upload"
//                   style={{ cursor: "pointer", color: "#007bff", fontSize: "0.85rem" }}
//                 >
//                   {uploading ? "Uploading..." : "Change Avatar"}
//                 </label>
//                 <input
//                   id="avatar-upload"
//                   type="file"
//                   accept="image/*"
//                   style={{ display: "none" }}
//                   onChange={handleFileChange}
//                 />
//               </div>
//             </div>

//             <hr />
//             <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
//               <li>
//                 <button className="dropdown-item" onClick={() => setShowEnquiry(true)}>
//                   Your Enquiries
//                 </button>
//               </li>
//               <li>
//                 <button className="dropdown-item" onClick={() => setShowBookings(true)}>
//                   Your Bookings
//                 </button>
//               </li>
//               <li>
//                 <button className="dropdown-item" onClick={() => setShowFavourites(true)}>
//                   My Favourite
//                 </button>
//               </li>
//               <li>
//                 <button className="dropdown-item text-danger" onClick={logout}>
//                   Logout
//                 </button>
//               </li>
//             </ul>
//           </div>
//         )}
//       </div>

//       {/* Bookings Popup */}
//       {showBookings && (
//         <div style={popupOverlayStyle}>
//           <div style={popupContentStyle}>
//             <button style={closeBtnStyle} onClick={() => setShowBookings(false)}>
//               ✖
//             </button>
//             <MyBookings onClose={() => setShowBookings(false)} />
//           </div>
//         </div>
//       )}

//        {showEnquiry && (
//         <div style={popupOverlayStyle}>
//           <div style={popupContentStyle}>
//             <button style={closeBtnStyle} onClick={() => setShowEnquiry(false)}>
//               ✖
//             </button>
//             <MyEnquiry onClose={() => setShowEnquiry(false)} />
//           </div>
//         </div>
//       )}

//        {showFavourites && (
//         <div style={popupOverlayStyle}>
//           <div style={popupContentStyle}>
//             <button style={closeBtnStyle} onClick={() => setShowFavourites(false)}>
//               ✖
//             </button>
//             <MyFavourite onClose={() => setShowFavourites(false)} />
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// // Popup styles
// const popupOverlayStyle = {
//   position: "fixed",
//   top: 0,
//   left: 0,
//   width: "0",
//   height: "0",
//   backgroundColor: "rgba(0,0,0,0.5)",
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
//   zIndex: 2000,
// };

// const popupContentStyle = {
//   backgroundColor: "#fff",
//   padding: "20px",
//   borderRadius: "8px",
//   width: "80%",
//   maxWidth: "500px",
//   position: "relative",
// };

// const closeBtnStyle = {
//   position: "absolute",
//   top: "10px",
//   right: "10px",
//   background: "transparent",
//   border: "none",
//   fontSize: "1.2rem",
//   cursor: "pointer",
// };

// export default ProfileDropdown;


import React, { useState, useContext, useEffect, useRef } from "react";
import { AuthContext } from "../../Context/AuthContext";
import axios from "../../utils/api";
import MyBookings from "../BookingForm/MyBookings";
import MyFavourite from "./MyFavourite";
import MyEnquiry from "./MyEnquiry";
const API_URL = import.meta.env.VITE_API_URL;


const ProfileDropdown = () => {
  const { user, logout, updateUser, token } = useContext(AuthContext);
  const [showProfile, setShowProfile] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [showBookings, setShowBookings] = useState(false);
  const [showEnquiry, setShowEnquiry] = useState(false);
  const [showFavourites, setShowFavourites] = useState(false);

  const profileRef = useRef(null);

  // Toggle profile dropdown on profile click
  const handleProfileClick = () => setShowProfile(prev => !prev);

  // Close profile dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setShowProfile(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close profile dropdown when opening modals
  useEffect(() => {
    if (showBookings || showEnquiry || showFavourites) {
      setShowProfile(false);
    }
  }, [showBookings, showEnquiry, showFavourites]);

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("avatar", file);

    setUploading(true);

    try {
      const res = await axios.post(`${API_URL}/api/users/me/avatar`,formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
            withCredentials: true

          },
        }
      );

      updateUser({ avatarUrl: `/api/users/${user._id}/avatar?t=${Date.now()}` });
    } catch (err) {
      console.error("Upload failed:", err);
    } finally {
      setUploading(false);
    }
  };

  const handleMenuItemClick = (action) => {
    setShowProfile(false); // Close dropdown first
    setTimeout(() => action(), 100); // Small delay to ensure smooth UX
  };

  return (
    <>
      {/* Profile Icon */}
      <div ref={profileRef} style={{ position: "relative" }}>
        <div
          onClick={handleProfileClick}
          style={{
            width: "44px",
            height: "44px",
            borderRadius: "50%",
            cursor: "pointer",
            border: "2px solid #070000ff",
            boxShadow: "0 2px 8px rgba(255, 46, 46, 0.1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            background: "",
            backgroundColor: "#10d2d5ff",
            transition: "transform 0.2s ease",
          }}
          onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          {user?.avatarUrl ? (
            <img
              src={`${user.avatarUrl}?t=${Date.now()}`} // cache-busting
              alt={`${user.name || "User"}'s profile`}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              onError={(e) => {
                e.target.src = "/default-avatar.png"; // fallback image
              }}
            />
          ) : (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                height: "100%",
                fontSize: "18px",
                fontWeight: "600",
                color: "#6c757d",
                backgroundColor: "#e9ecef",
              }}
            >
              {user?.name?.charAt(0)?.toUpperCase() || "U"}
            </div>
          )}

          {uploading && (
            <div
              style={{
                position: "absolute",
                bottom: "-20px",
                fontSize: "12px",
                color: "#6c757d",
              }}
            >
              Uploading...
            </div>
          )}
        </div>
      



      {/* Profile Dropdown */}
      {showProfile && (
        <div
          style={{
            position: "absolute",
            top: "55px",
            right: "0",
            backgroundColor: "#fff",
            border: "1px solid #e9ecef",
            borderRadius: "12px",
            width: "220px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
            padding: "0",
            zIndex: 1000,
            overflow: "hidden",
            animation: "fadeInDown 0.2s ease-out",
          }}
        >
          {/* User Info Section */}
          <div style={{
            padding: "20px",
            borderBottom: "1px solid #f8f9fa",
            textAlign: "center"
          }}>
            <div style={{
              position: "relative",
              display: "inline-block",
              marginBottom: "10px"
            }}>
              <div
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  overflow: "hidden",
                  border: "3px solid #e9ecef",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#f8f9fa",
                  margin: "0 auto",
                }}
              >
                {user?.avatar ? (
                  <img
                    src={user.avatar}
                    alt={`${user.name || 'User'}'s profile`}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                ) : (
                  <div style={{
                    fontSize: "24px",
                    fontWeight: "600",
                    color: "#6c757d",
                  }}>
                    {user?.name?.charAt(0)?.toUpperCase() || 'U'}
                  </div>
                )}
              </div>

              <label
                htmlFor="avatar-upload"
                style={{
                  position: "absolute",
                  bottom: "-5px",
                  right: "-5px",
                  width: "24px",
                  height: "24px",
                  borderRadius: "50%",
                  backgroundColor: "#007bff",
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  fontSize: "12px",
                  border: "2px solid white",
                  transition: "background-color 0.2s ease",
                }}
                onMouseOver={(e) => e.target.style.backgroundColor = "#0056b3"}
                onMouseOut={(e) => e.target.style.backgroundColor = "#007bff"}
                title="Change avatar"
              >
                {uploading ? "..." : "📷"}
              </label>

              <input
                id="avatar-upload"
                type="file"
                accept="image/jpeg,image/png,image/gif,image/webp"
                style={{ display: "none" }}
                onChange={handleFileChange}
                disabled={uploading}
              />
            </div>

            <div style={{
              fontWeight: "600",
              fontSize: "14px",
              color: "#2c3e50",
              marginBottom: "4px"
            }}>
              {user?.name || "User"}
            </div>

            {user?.email && (
              <div style={{
                fontSize: "12px",
                color: "#6c757d",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap"
              }}>
                {user.email}
              </div>
            )}
          </div>

          {/* Menu Items */}
          <div style={{ padding: "8px 0" }}>
            <button
              className="dropdown-item"
              onClick={() => handleMenuItemClick(() => setShowEnquiry(true))}
              style={menuItemStyle}
              onMouseOver={(e) => e.target.style.backgroundColor = "#f8f9fa"}
              onMouseOut={(e) => e.target.style.backgroundColor = "transparent"}
            >
              <span style={{ marginRight: "12px" }}>📋</span>
              Your Enquiries
            </button>

            <button
              className="dropdown-item"
              onClick={() => handleMenuItemClick(() => setShowBookings(true))}
              style={menuItemStyle}
              onMouseOver={(e) => e.target.style.backgroundColor = "#f8f9fa"}
              onMouseOut={(e) => e.target.style.backgroundColor = "transparent"}
            >
              <span style={{ marginRight: "12px" }}>📅</span>
              Your Bookings
            </button>

            <button
              className="dropdown-item"
              onClick={() => handleMenuItemClick(() => setShowFavourites(true))}
              style={menuItemStyle}
              onMouseOver={(e) => e.target.style.backgroundColor = "#f8f9fa"}
              onMouseOut={(e) => e.target.style.backgroundColor = "transparent"}
            >
              <span style={{ marginRight: "12px" }}>❤️</span>
              My Favourites
            </button>

            <hr style={{
              margin: "8px 12px",
              border: "none",
              borderTop: "1px solid #e9ecef"
            }} />

            <button
              className="dropdown-item"
              onClick={() => handleMenuItemClick(logout)}
              style={{
                ...menuItemStyle,
                color: "#dc3545"
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = "#fff5f5";
                e.target.style.color = "#c82333";
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = "transparent";
                e.target.style.color = "#dc3545";
              }}
            >
              <span style={{ marginRight: "12px" }}>🚪</span>
              Logout
            </button>
          </div>
        </div>
      )}
      
      </div>
  

      {/* Modals */ }
  {
    showBookings && (
      <div style={popupOverlayStyle}>
        <div style={popupContentStyle}>
          <button
            style={closeBtnStyle}
            onClick={() => setShowBookings(false)}
            aria-label="Close bookings"
          >
            ✕
          </button>
          <MyBookings onClose={() => setShowBookings(false)} />
        </div>
      </div>
    )
  }

  {
    showEnquiry && (
      <div style={popupOverlayStyle}>
        <div style={popupContentStyle}>
          <button
            style={closeBtnStyle}
            onClick={() => setShowEnquiry(false)}
            aria-label="Close enquiries"
          >
            ✕
          </button>
          <MyEnquiry onClose={() => setShowEnquiry(false)} />
        </div>
      </div>
    )
  }

  {
    showFavourites && (
      <div style={popupOverlayStyle}>
        <div style={popupContentStyle}>
          <button
            style={closeBtnStyle}
            onClick={() => setShowFavourites(false)}
            aria-label="Close favourites"
          >
            ✕
          </button>
          <MyFavourite onClose={() => setShowFavourites(false)} />
        </div>
      </div>
    )
  }

  {/* CSS Animation */ }
  <style jsx>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
};

// Styles
const menuItemStyle = {
  width: "100%",
  padding: "12px 16px",
  border: "none",
  background: "transparent",
  textAlign: "left",
  cursor: "pointer",
  fontSize: "14px",
  color: "#495057",
  display: "flex",
  alignItems: "center",
  transition: "all 0.2s ease",
  fontFamily: "inherit",
};

const popupOverlayStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  height: '100vh',
  onfocus: '100vw',
  backgroundColor: 'rgba(0, 0, 0, 0.5)', // semi-transparent black
  zIndex: 1000, // ensure it's above other content
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-start', // align to top
  overflowY: 'auto', // enable scrolling if content is long
};

const popupContentStyle = {
  width: '100%', // full width
  minHeight: '100vh', // full viewport height
  backgroundColor: '#fff', // white background
  padding: '20px',
  boxSizing: 'border-box', // include padding in width calculation
  position: 'relative', // for absolute positioning of close button
};

const closeBtnStyle = {
  position: 'absolute',
  top: '15px',
  right: '15px',
  background: 'transparent',
  border: 'none',
  fontSize: '24px',
  cursor: 'pointer',
  padding: '5px',
};
export default ProfileDropdown;