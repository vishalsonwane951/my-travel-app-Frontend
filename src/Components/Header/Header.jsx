import { Link, useNavigate, useLocation } from "react-router-dom";
import React, { useState, useContext, useEffect } from "react";
import Register from "../../Pages/Register.jsx";
import Login from "../../Pages/Login.jsx";
import { AuthContext } from "../../Context/AuthContext.jsx";
import ProfileDropdown from "../ProfileDropdown/ProfileDropdown.jsx";
import UserProfilePopup from "../Profile/Profile.jsx";
import { style } from "framer-motion/client";

const Header = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToAbout = () => {
    if (location.pathname === "/") {
      const aboutSection = document.getElementById("about-us");
      if (aboutSection) aboutSection.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/", { state: { scrollToAbout: true } });
    }
  };

  const scrollToContact = () => {
    if (location.pathname === "/") {
      const contactSection = document.getElementById("footer");
      if (contactSection) contactSection.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/", { state: { scrollToContact: true } });
    }
  };

  const openRegister = () => {
    setShowLogin(false);
    setShowRegister(true);
  };

  const openLogin = () => {
    setShowRegister(false);
    setShowLogin(true);
  };

  const domesticDestinations = [
    { name: "Maharashtra", path: "/Maharashtra" },
    { name: "Goa", path: "/goa" },
    { name: "Kerala", path: "/kerala" },
    { name: "Rajasthan", path: "/rajasthan" },
    { name: "Uttarakhand", path: "/uttarakhand" },
  ];

  const internationalDestinations = [
    { name: "Dubai", path: "/dubai" },
    { name: "Maldives", path: "/maldives" },
    { name: "Thailand", path: "/thailand" },
    { name: "Bali", path: "/bali" },
    { name: "Europe", path: "/europe" },
  ];

  return (
    <>
      <header className={`modern-header ${scrolled ? "scrolled" : ""} w-full`}>
        <div className="nav-container bg-white bg-opacity-70">
          {/* Logo */}
          <Link to="/" className="logo">
            <img src="/logo.png" alt="Travel Logo" />
            <span style={{color:'black', fontFamily:'-moz-initial'}}>DesiVDesi</span>
          </Link>

          {/* Hamburger for mobile */}
          <button
            className={`hamburger ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          {/* Navbar Links */}
          <nav className={`nav-links text-black ${menuOpen ? "open" : ""}`} style={{fontFamily:'Times New Roman', fontSize:'25px'}}>
            <Link to="/"style={{color:'black'}}>Home</Link>
            <a onClick={scrollToAbout}>About</a>
            <Link to="/services" style={{color:'black'}}>Services</Link>
            <Link to="/career"style={{color:'black'}}>Career</Link>
            <a onClick={scrollToContact}>Contact</a>

            {/* Dropdowns */}
            <div className="dropdown">
              <span style={{color:'black', fontFamily:'Times New Roman' , fontSize:'20px'}}> Domestic ▾</span>
              <div className="dropdown-content">
                {domesticDestinations.map((d, i) => (
                  <Link key={i} to={d.path} style={{fontFamily:'Times New Roman', fontSize:'20px'}}>
                    {d.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="dropdown">
              <span style={{color:'black', fontFamily:'Times New Roman', fontSize:'20px'}}>International ▾</span>
              <div className="dropdown-content">
                {internationalDestinations.map((d, i) => (
                  <Link key={i} to={d.path}>
                    {d.name}
                  </Link>
                ))}
              </div>
            </div>
          </nav>

          {/* Auth Section */}
          <div className="auth-buttons">
            {!user ? (
              <>
                <button onClick={openLogin} className="btn login-btn">
                  Login
                </button>
                <button onClick={openRegister} className="btn register-btn">
                  Sign Up
                </button>
              </>
            ) : (
              <ProfileDropdown />
            )}
          </div>
        </div>
      </header>

      {showRegister && <Register onClose={() => setShowRegister(false)} />}
      {showLogin && <Login onClose={() => setShowLogin(false)} />}
      {showProfile && (
        <UserProfilePopup onClose={() => setShowProfile(false)} />
      )}

      <style jsx>{`
        .modern-header {
          position: fixed;
          width: 100%;
          top: 0;
          left: 0;
          z-index: 5;
          backdrop-filter: blur(15px);
          background: rgba(255, 255, 255, 0.08);
          border-bottom: 1px solid rgba(255, 255, 255, 0.2);
          transition: all 0.4s ease;
        }

        .modern-header.scrolled {
          background: rgba(255, 255, 255, 0.18);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
        }

        .nav-container {
          max-width: 90%;
          margin: 0 auto;
          padding: 0.8rem 2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #fff;
          font-weight: 700;
          font-size: 1.4rem;
          text-decoration: none;
          letter-spacing: 1px;
          text-shadow: 0 2px 10px rgba(255, 255, 255, 0.4);
        }

        .logo img {
          height: 105px;
          width: 150px;
          margin: -20px;
          margin-left: 30px;
          background: none;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .nav-links a,
        .nav-links span {
          color: #fff;
          font-weight: 500;
          font-size: 1rem;
          text-decoration: none;
          cursor: pointer;
          position: relative;
          transition: color 0.3s ease;
        }

        .nav-links a::after,
        .nav-links span::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -4px;
          width: 0%;
          height: 2px;
          background: #00f5d4;
          transition: width 0.3s ease;
        }

        .nav-links a:hover::after,
        .nav-links span:hover::after {
          width: 100%;
          height: 5px;
          margin-top: 10px;
        }

        .dropdown {
          position: relative;
        }

        .dropdown-content {
          position: absolute;
          top: 100%;
          left: 0;
          background: rgba(255, 255, 255, 0.95);
          border-radius: 10px;
          display: none;
          flex-direction: column;
          min-width: 180px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
          animation: fadeIn 0.3s ease;
        }

        .dropdown-content a {
          color: #333;
          padding: 10px 15px;
          text-decoration: none;
          border-radius: 8px;
          transition: all 0.3s ease;
        }

        .dropdown-content a:hover {
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: #fff;
        }

        .dropdown:hover .dropdown-content {
          display: flex;
        }

        .auth-buttons {
          display: flex;
          gap: 1rem;
        }

        .btn {
          border: none;
          padding: 0.6rem 1.5rem;
          border-radius: 25px;
          font-weight: 600;
          font-size: 0.95rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .login-btn {
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: #fff;
          border: 2px solid #fff;
        }

        .login-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(118, 75, 162, 0.4);
        }

        .register-btn {
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: #fff;
          box-shadow: 0 4px 15px rgba(118, 75, 162, 0.3);
        }

        .register-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(118, 75, 162, 0.4);
        }

        /* Hamburger (mobile) */
        .hamburger {
        color: 'black',
          display: none;
          flex-direction: column;
          gap: 5px;
          cursor: pointer;
          border: none;
          background: black;
        }

        .hamburger span {
          width: 25px;
          height: 3px;
          background: #fff;
          border-radius: 2px;
          transition: all 0.3s ease;
        }

        .hamburger.active span:nth-child(1) {
          transform: rotate(45deg) translate(5px, 5px);
        }

        .hamburger.active span:nth-child(2) {
          opacity: 1000;
        }

        .hamburger.active span:nth-child(3) {
          transform: rotate(-45deg) translate(6px, -6px);
        }

        @media (max-width: 992px) {
          .hamburger {
            display: flex;
          }
          .nav-links {
            position: absolute;
            top: 100%;
            right: 0;
            flex-direction: column;
            width: 100%;
            background: rgba(102, 126, 234, 0.95);
            backdrop-filter: blur(20px);
            padding: 1rem 0;
            border-radius: 0 0 15px 15px;
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease;
          }
          .nav-links.open {
            max-height: 500px;
          }
          .nav-links a {
            padding: 0.75rem 1rem;
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
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

export default Header;
