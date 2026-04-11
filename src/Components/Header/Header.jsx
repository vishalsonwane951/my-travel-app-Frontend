import { Link, useNavigate, useLocation } from "react-router-dom";
import React, { useState, useContext, useEffect, useCallback, useMemo, useRef } from "react";
import LoginRegister from "../../Pages/LoginRegister.jsx";
import { AuthContext } from "../../Context/AuthContext.jsx";
import ProfileDropdown from "../ProfileDropdown/ProfileDropdown.jsx";
import UserProfilePopup from "../Profile/Profile.jsx";

// ─── Real-time booking ticker data ───────────────────────────────────────────
const BOOKING_EVENTS = [
  { name: "Priya S.", location: "Goa", pkg: "Beach Escape", time: "2 min ago" },
  { name: "Rahul M.", location: "Manali", pkg: "Snow Trek", time: "5 min ago" },
  { name: "Ananya K.", location: "Kerala", pkg: "Honeymoon Special", time: "8 min ago" },
  { name: "Vikram T.", location: "Rajasthan", pkg: "Heritage Tour", time: "11 min ago" },
  { name: "Sneha P.", location: "Dubai", pkg: "Luxury Escape", time: "14 min ago" },
  {
    name: "Arjun R.", location: "Thailand", pkg
      : "Adventure Pack", time: "17 min ago"
  },
  { name: "Meera D.", location: "Shimla", pkg: "Weekend Getaway", time: "20 min ago" },
  { name: "Karan B.", location: "Varanasi", pkg: "Pilgrimage Tour", time: "23 min ago" },
];

const NOTIFICATIONS = [
  { id: 1, icon: "🔥", title: "Flash Sale!", body: "Goa packages 30% OFF this weekend only", time: "Just now", unread: true },
  { id: 2, icon: "🌟", title: "New Package", body: "Luxury Maldives added — Limited slots", time: "1h ago", unread: true },
  { id: 3, icon: "📅", title: "Booking Reminder", body: "Complete your Manali booking before slots fill", time: "3h ago", unread: true },
  { id: 4, icon: "💬", title: "Review Request", body: "How was your Kerala trip? Share your experience!", time: "1d ago", unread: false },
];

const ALL_DESTINATIONS = [
  "Goa", "Kerala", "Rajasthan", "Himachal Pradesh", "Uttarakhand", "Maharashtra",
  "Dubai", "Maldives", "Thailand", "Bali", "Singapore", "Switzerland",
  "Manali", "Shimla", "Leh Ladakh", "Rishikesh", "Varanasi", "Coorg",
  "Paris", "Istanbul", "Sri Lanka", "Nepal", "Bhutan",
];

const Header = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const [showAuth, setShowAuth] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications, setNotifications] = useState(NOTIFICATIONS);
  const [tickerIndex, setTickerIndex] = useState(0);
  const [tickerVisible, setTickerVisible] = useState(true);
  const [announcementBar, setAnnouncementBar] = useState(true);
  const [mobileExpandedSection, setMobileExpandedSection] = useState(null);

  const searchInputRef = useRef(null);
  const notifRef = useRef(null);
  const dropdownTimeoutRef = useRef(null);

  const unreadCount = notifications.filter(n => n.unread).length;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTickerVisible(false);
      setTimeout(() => {
        setTickerIndex(i => (i + 1) % BOOKING_EVENTS.length);
        setTickerVisible(true);
      }, 400);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (searchQuery.trim().length < 2) { setSearchResults([]); return; }
    const q = searchQuery.toLowerCase();
    setSearchResults(ALL_DESTINATIONS.filter(d => d.toLowerCase().includes(q)).slice(0, 6));
  }, [searchQuery]);

  useEffect(() => {
    if (showSearch && searchInputRef.current) {
      setTimeout(() => searchInputRef.current?.focus(), 100);
    }
  }, [showSearch]);

  useEffect(() => {
    const handler = (e) => {
      if (notifRef.current && !notifRef.current.contains(e.target)) setShowNotifications(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setShowSearch(false);
    setShowNotifications(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const scrollToSection = useCallback((sectionId, stateKey) => {
    if (location.pathname === "/") {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/", { state: { [stateKey]: true } });
    }
    setMenuOpen(false);
  }, [location.pathname, navigate]);

  const handleDropdownEnter = useCallback((key) => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setActiveDropdown(key);
  }, []);

  const handleDropdownLeave = useCallback(() => {
    dropdownTimeoutRef.current = setTimeout(() => setActiveDropdown(null), 180);
  }, []);

  const markAllRead = useCallback(() => {
    setNotifications(prev => prev.map(n => ({ ...n, unread: false })));
  }, []);

  const handleSearchDestination = useCallback((dest) => {
    setShowSearch(false);
    setSearchQuery("");
    navigate(`/${dest.toLowerCase().replace(/ /g, "-")}`);
  }, [navigate]);

  const domesticDestinations = useMemo(() => [
    { name: "Maharashtra", path: "/Maharashtra", icon: "🏯" },
    { name: "Goa", path: "/goa", icon: "🏖️" },
    { name: "Kerala", path: "/kerala", icon: "🌴" },
    { name: "Rajasthan", path: "/rajasthan", icon: "🏜️" },
    { name: "Uttarakhand", path: "/uttarakhand", icon: "🏔️" },
    { name: "Himachal", path: "/himachal", icon: "⛰️" },
  ], []);

  const internationalDestinations = useMemo(() => [
    { name: "Dubai", path: "/dubai", icon: "🌆" },
    { name: "Maldives", path: "/maldives", icon: "🏝️" },
    { name: "Thailand", path: "/thailand", icon: "🐘" },
    { name: "Bali", path: "/bali", icon: "🌺" },
    { name: "Singapore", path: "/singapore", icon: "🦁" },
    { name: "Switzerland", path: "/switzerland", icon: "🏔️" },
  ], []);

  const tourTypes = useMemo(() => [
    { name: "Custom Tours", path: "/tourcard/custom-tour", icon: "🎨", color: "#FF6B6B", badge: null },
    { name: "Adventure Tours", path: "/tourcard/adventure-tour", icon: "🏔️", color: "#4ECDC4", badge: "Popular" },
    { name: "Family Tours", path: "/tourcard/family-tour", icon: "👨‍👩‍👧‍👦", color: "#FFB347", badge: null },
    { name: "Group Tours", path: "/tourcard/group-tour", icon: "🚌", color: "#A37BFF", badge: "Best Value" },
    { name: "City Tours", path: "/tourcard/city-tour", icon: "🌆", color: "#FF9F1C", badge: null },
    { name: "Honeymoon Tours", path: "/tourcard/honeymoon-tour", icon: "💑", color: "#FF6EB4", badge: "New" },
    { name: "Weekend Getaways", path: "/tourcard/weekend-getaway", icon: "🌅", color: "#5BC0EB", badge: "New" },
    { name: "Luxury Tours", path: "/tourcard/luxury-tour", icon: "💎", color: "#C9A84C", badge: "Premium" },
    { name: "Pilgrimage Tours", path: "/tourcard/pilgrimage-tour", icon: "🕌", color: "#7BAE7F", badge: "New" },
  ], []);

  const currentTicker = BOOKING_EVENTS[tickerIndex];
  const isHeroPage = ["/", "/services"].includes(location.pathname);
  const textColor = scrolled ? "#1a1a2e" : (isHeroPage ? "#1a1a2e" : "#1a1a2e");

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Playfair+Display:wght@600;700&display=swap');

        :root {
          --header-h: 80px;
          --announce-h: 40px;
          --gold: #C9A84C;
          --gold-light: #F0D080;
          --indigo: #3D52A0;
          --indigo-light: #7091E6;
          --rose: #FF6B6B;
          --teal: #4ECDC4;
          --text-dark: #1a1a2e;
          --text-mid: #4a4a6a;
          --text-light: #8888aa;
          --glass-bg: rgba(255,255,255,0.94);
          --glass-border: rgba(255,255,255,0.6);
          --shadow-soft: 0 8px 32px rgba(30,30,80,0.10);
          --shadow-strong: 0 20px 60px rgba(30,30,80,0.18);
          --radius: 16px;
          --font-body: 'DM Sans', sans-serif;
          --font-display: 'Playfair Display', serif;
          --transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
        }

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: var(--font-body); }

        /* ── Announcement Bar ── */
        .dvd-announce {
          height: var(--announce-h);
          background: linear-gradient(90deg, #1a1a2e 0%, #3D52A0 50%, #1a1a2e 100%);
          background-size: 200% 100%;
          animation: dvd-shimmer 6s linear infinite;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 2rem;
          color: white;
          font-size: 0.78rem;
          font-weight: 500;
          letter-spacing: 0.02em;
          position: relative;
          z-index: 1001;
        }
        @keyframes dvd-shimmer { 0%{background-position:0% 0} 100%{background-position:200% 0} }

        .dvd-announce-badge {
          background: var(--gold);
          color: #1a1a2e;
          font-size: 0.68rem;
          font-weight: 700;
          padding: 2px 8px;
          border-radius: 20px;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }
        .dvd-ticker-wrap { overflow: hidden; max-width: 420px; }
        .dvd-ticker {
          display: flex; align-items: center; gap: 6px;
          transition: opacity 0.4s ease, transform 0.4s ease;
        }
        .dvd-ticker.hidden { opacity: 0; transform: translateY(-8px); }
        .dvd-ticker.visible { opacity: 1; transform: translateY(0); }
        .dvd-announce-right { display: flex; align-items: center; gap: 16px; font-size: 0.75rem; opacity: 0.85; }
        .dvd-announce-right a { color: var(--gold-light); text-decoration: none; }
        .dvd-announce-close { background: none; border: none; color: rgba(255,255,255,0.6); cursor: pointer; font-size: 1rem; line-height: 1; padding: 2px; }
        .dvd-announce-close:hover { color: white; }

        /* ── Main Header ── */
        .dvd-header {
          position: fixed; top: 0; left: 0; right: 0; z-index: 1000;
          transition: var(--transition); font-family: var(--font-body);
        }
        .dvd-header.with-bar { top: var(--announce-h); }
        .dvd-header.scrolled {
          background: var(--glass-bg);
          backdrop-filter: blur(20px) saturate(180%);
          -webkit-backdrop-filter: blur(20px) saturate(180%);
          box-shadow: var(--shadow-soft);
          border-bottom: 1px solid rgba(200,200,230,0.25);
        }
        .dvd-header.transparent { background: transparent;  }

        .dvd-inner {
          max-width: 1440px; margin: 0 auto; padding: 0 2rem;
          height: var(--header-h);
          display: flex; align-items: center; justify-content: space-between; gap: 1.5rem;
        }

        /* ── Logo ── */
        .dvd-logo {
          display: flex;
          align-items: center;
          text-decoration: none;
          flex-shrink: 0;
          background: white;
          border-radius: 14px;
          padding: 6px 14px;
          box-shadow: 0 2px 16px rgba(0,0,0,0.14), 0 1px 4px rgba(0,0,0,0.08);
          transition: var(--transition);
        }

        .dvd-logo:hover {
          box-shadow: 0 6px 24px rgba(61,82,160,0.22), 0 2px 8px rgba(0,0,0,0.10);
          transform: translateY(-2px);
        }

        .dvd-logo-img {
          height: 50px;
          width: auto;
          max-width: 220px;
          object-fit: contain;
          display: block;
          transition: var(--transition);
        }

        .dvd-header.scrolled .dvd-logo {
          padding: 5px 12px;
          border-radius: 12px;
        }
        .dvd-header.scrolled .dvd-logo-img {
          height: 44px;
        }

        /* ── Desktop Nav ── */
        .dvd-nav { display: flex; align-items: center; gap: 0.25rem; flex: 1; justify-content: center; }
        .dvd-nav-link {
          padding: 0.5rem 0.85rem; border-radius: 8px; font-size: 0.92rem; font-weight: 500;
          text-decoration: none; cursor: pointer; background: none; border: none;
          font-family: var(--font-body); transition: var(--transition); white-space: nowrap; position: relative;
        }
        .dvd-nav-link:hover { background: rgba(255,255,255,0.15); }
        .dvd-header.scrolled .dvd-nav-link:hover { background: rgba(61,82,160,0.08); color: var(--indigo) !important; }

        /* ── Dropdown ── */
        .dvd-dropdown { position: relative; }
        .dvd-dropdown-trigger {
          display: flex; align-items: center; gap: 5px; padding: 0.5rem 0.85rem; border-radius: 8px;
          font-size: 0.92rem; font-weight: 500; cursor: pointer; background: none; border: none;
          font-family: var(--font-body); transition: var(--transition); white-space: nowrap;
        }
        .dvd-dropdown-trigger:hover { background: rgba(255,255,255,0.15); }
        .dvd-header.scrolled .dvd-dropdown-trigger:hover { background: rgba(61,82,160,0.08); color: var(--indigo) !important; }
        .dvd-chevron { font-size: 0.65rem; transition: transform 0.3s ease; display: inline-block; }
        .dvd-dropdown:hover .dvd-chevron { transform: rotate(180deg); }

        .dvd-dropdown-menu {
          position: absolute; top: calc(100% + 10px); left: 50%;
          transform: translateX(-50%) translateY(6px);
          background: white; border-radius: var(--radius); box-shadow: var(--shadow-strong);
          min-width: 220px; padding: 0.6rem;
          opacity: 0; visibility: hidden; pointer-events: none;
          transition: opacity 0.25s ease, transform 0.25s ease, visibility 0.25s;
          border: 1px solid rgba(200,200,230,0.2); z-index: 1002;
        }
        .dvd-dropdown-menu.wide { min-width: 560px; left: 50%; }
        .dvd-dropdown-menu.active { opacity: 1; visibility: visible; pointer-events: all; transform: translateX(-50%) translateY(0); }
        .dvd-dropdown-menu::before {
          content: ''; position: absolute; top: -7px; left: 50%;
          width: 14px; height: 14px; background: white;
          border-left: 1px solid rgba(200,200,230,0.2); border-top: 1px solid rgba(200,200,230,0.2);
          transform: translateX(-50%) rotate(45deg);
        }

        .dvd-menu-section-title {
          font-size: 0.68rem; font-weight: 700; letter-spacing: 0.1em;
          text-transform: uppercase; color: var(--text-light); padding: 0.5rem 0.75rem 0.3rem;
        }
        .dvd-menu-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 2px; }
        .dvd-dropdown-item {
          display: flex; align-items: center; gap: 10px; padding: 0.6rem 0.75rem;
          border-radius: 10px; color: var(--text-dark); text-decoration: none;
          font-size: 0.88rem; font-weight: 500; transition: var(--transition); position: relative; cursor: pointer;
        }
        .dvd-dropdown-item:hover { background: linear-gradient(135deg, #f8f9ff, #f0f3ff); color: var(--indigo); transform: translateX(3px); }
        .dvd-dropdown-item .item-icon {
          width: 32px; height: 32px; border-radius: 8px;
          display: flex; align-items: center; justify-content: center;
          font-size: 1rem; flex-shrink: 0; background: #f8f8ff; transition: var(--transition);
        }
        .dvd-dropdown-item:hover .item-icon { transform: scale(1.15); }
        .dvd-item-badge {
          margin-left: auto; font-size: 0.6rem; font-weight: 700;
          padding: 2px 6px; border-radius: 20px; text-transform: uppercase; letter-spacing: 0.05em;
        }
        .badge-new { background: #e8f5e9; color: #2e7d32; }
        .badge-popular { background: #fff3e0; color: #e65100; }
        .badge-value { background: #e3f2fd; color: #1565c0; }
        .badge-premium { background: #fdf6e3; color: #8B6914; }

        .dvd-menu-footer {
          margin-top: 0.5rem; padding: 0.75rem; border-top: 1px solid #f0f0f8;
          display: flex; align-items: center; justify-content: space-between; font-size: 0.82rem; color: var(--text-light);
        }
        .dvd-menu-footer a { color: var(--indigo); font-weight: 600; text-decoration: none; }
        .dvd-menu-footer a:hover { text-decoration: underline; }

        /* ── Right Controls ── */
        .dvd-controls { display: flex; align-items: center; gap: 0.75rem; flex-shrink: 0; }
        .dvd-icon-btn {
          width: 40px; height: 40px; border-radius: 10px; border: none; cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          font-size: 1.05rem; transition: var(--transition); background: transparent; position: relative;
        }
        .dvd-header.scrolled .dvd-icon-btn { background: rgba(61,82,160,0.06); }
        .dvd-icon-btn:hover { background: rgba(61,82,160,0.12) !important; transform: scale(1.05); }

        .dvd-notif-badge {
          position: absolute; top: 4px; right: 4px; width: 16px; height: 16px;
          background: #FF6B6B; color: white; font-size: 0.6rem; font-weight: 700;
          border-radius: 50%; display: flex; align-items: center; justify-content: center; border: 2px solid white;
        }

        .dvd-notif-panel {
          position: absolute; top: calc(100% + 14px); right: 0; width: 340px;
          background: white; border-radius: var(--radius); box-shadow: var(--shadow-strong);
          border: 1px solid rgba(200,200,230,0.2); overflow: hidden;
          opacity: 0; visibility: hidden; transform: translateY(6px);
          transition: all 0.25s ease; z-index: 1003;
        }
        .dvd-notif-panel.active { opacity: 1; visibility: visible; transform: translateY(0); }
        .dvd-notif-header {
          padding: 1rem 1.25rem 0.75rem;
          display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid #f0f0f8;
        }
        .dvd-notif-header h4 { font-size: 0.95rem; font-weight: 700; color: var(--text-dark); }
        .dvd-notif-read-all { font-size: 0.78rem; color: var(--indigo); font-weight: 600; cursor: pointer; background: none; border: none; font-family: var(--font-body); }
        .dvd-notif-item { display: flex; gap: 12px; padding: 0.85rem 1.25rem; border-bottom: 1px solid #f8f8fc; transition: background 0.2s; cursor: pointer; }
        .dvd-notif-item:hover { background: #f8f9ff; }
        .dvd-notif-item.unread { background: #f5f7ff; }
        .dvd-notif-emoji { width: 36px; height: 36px; border-radius: 10px; background: #f0f3ff; display: flex; align-items: center; justify-content: center; font-size: 1.1rem; flex-shrink: 0; }
        .dvd-notif-body { flex: 1; min-width: 0; }
        .dvd-notif-title { font-size: 0.86rem; font-weight: 700; color: var(--text-dark); margin-bottom: 2px; }
        .dvd-notif-text { font-size: 0.80rem; color: var(--text-mid); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
        .dvd-notif-time { font-size: 0.72rem; color: var(--text-light); margin-top: 3px; }
        .dvd-notif-dot { width: 7px; height: 7px; background: var(--indigo); border-radius: 50%; flex-shrink: 0; margin-top: 5px; }
        .dvd-notif-footer { padding: 0.75rem 1.25rem; text-align: center; }
        .dvd-notif-footer a { font-size: 0.82rem; color: var(--indigo); font-weight: 600; text-decoration: none; }

        /* Sign In button */
        .dvd-signin-btn {
          padding: 0.55rem 1.5rem; border-radius: 50px; border: none; font-size: 0.88rem; font-weight: 600;
          cursor: pointer; font-family: var(--font-body); transition: var(--transition); letter-spacing: 0.01em; white-space: nowrap;
        }
        .dvd-signin-btn.light { background: rgba(255,255,255,0.2); color: white; border: 1.5px solid rgba(255,255,255,0.4); backdrop-filter: blur(8px); }
        .dvd-signin-btn.light:hover { background: rgba(255,255,255,0.35); border-color: rgba(255,255,255,0.7); }
        .dvd-signin-btn.dark { background: linear-gradient(135deg, #3D52A0, #7091E6); color: white; box-shadow: 0 6px 20px rgba(61,82,160,0.35); }
        .dvd-signin-btn.dark:hover { transform: translateY(-1px); box-shadow: 0 10px 28px rgba(61,82,160,0.45); }

        /* ── Hamburger ── */
        .dvd-hamburger {
          display: none; flex-direction: column; gap: 5px; cursor: pointer;
          border: none; background: transparent; padding: 8px; border-radius: 10px; transition: var(--transition);
        }
        .dvd-hamburger:hover { background: rgba(255,255,255,0.15); }
        .dvd-header.scrolled .dvd-hamburger:hover { background: rgba(61,82,160,0.08); }
        .dvd-ham-line { width: 22px; height: 2px; border-radius: 2px; transition: var(--transition); display: block; }
        .dvd-ham-line:nth-child(2) { width: 16px; }

        /* ── Search Overlay ── */
        .dvd-search-overlay {
          position: fixed; inset: 0; background: rgba(10,10,30,0.75);
          backdrop-filter: blur(12px); z-index: 2000;
          display: flex; align-items: flex-start; justify-content: center; padding-top: 140px;
          opacity: 0; visibility: hidden; transition: all 0.3s ease;
        }
        .dvd-search-overlay.active { opacity: 1; visibility: visible; }
        .dvd-search-box { width: 100%; max-width: 640px; margin: 0 1rem; transform: translateY(-20px); transition: transform 0.35s ease; }
        .dvd-search-overlay.active .dvd-search-box { transform: translateY(0); }
        .dvd-search-label { font-family: var(--font-display); font-size: 1.8rem; color: white; text-align: center; margin-bottom: 1.25rem; font-weight: 600; }
        .dvd-search-label .hl { color: var(--gold-light); }
        .dvd-search-input-wrap { display: flex; background: white; border-radius: 16px; overflow: hidden; box-shadow: 0 30px 60px rgba(0,0,0,0.4); }
        .dvd-search-input { flex: 1; padding: 1.1rem 1.5rem; border: none; outline: none; font-size: 1.05rem; font-family: var(--font-body); color: var(--text-dark); background: transparent; }
        .dvd-search-btn { padding: 0 1.5rem; background: linear-gradient(135deg, #3D52A0, #7091E6); color: white; border: none; font-size: 1.15rem; cursor: pointer; transition: var(--transition); }
        .dvd-search-btn:hover { background: linear-gradient(135deg, #2d4090, #5e80d4); }
        .dvd-search-results { margin-top: 0.75rem; background: white; border-radius: 14px; overflow: hidden; box-shadow: 0 20px 40px rgba(0,0,0,0.3); }
        .dvd-search-result-item { display: flex; align-items: center; gap: 12px; padding: 0.85rem 1.25rem; cursor: pointer; transition: background 0.2s; border-bottom: 1px solid #f0f0f8; font-size: 0.95rem; color: var(--text-dark); font-family: var(--font-body); }
        .dvd-search-result-item:hover { background: #f5f7ff; }
        .dvd-search-result-item:last-child { border-bottom: none; }
        .dvd-search-close {
          position: fixed; top: 1.5rem; right: 1.5rem; width: 44px; height: 44px;
          background: rgba(255,255,255,0.15); border: 1.5px solid rgba(255,255,255,0.3);
          border-radius: 50%; color: white; font-size: 1.25rem; cursor: pointer;
          display: flex; align-items: center; justify-content: center; transition: var(--transition);
        }
        .dvd-search-close:hover { background: rgba(255,255,255,0.3); transform: rotate(90deg); }

        /* ── Mobile ── */
        .dvd-mobile-overlay { position: fixed; inset: 0; background: rgba(10,10,30,0.6); backdrop-filter: blur(4px); z-index: 1001; opacity: 0; visibility: hidden; transition: all 0.35s ease; }
        .dvd-mobile-overlay.active { opacity: 1; visibility: visible; }
        .dvd-mobile-menu {
          position: fixed; top: 0; right: 0; bottom: 0; width: min(340px, 90vw);
          background: white; z-index: 1002; transform: translateX(100%);
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          display: flex; flex-direction: column; overflow: hidden; box-shadow: -20px 0 60px rgba(0,0,0,0.2);
        }
        .dvd-mobile-menu.active { transform: translateX(0); }
        .dvd-mobile-header {
          padding: 1.25rem 1.5rem;
          background: linear-gradient(135deg, #1a1a2e, #3D52A0);
          display: flex; align-items: center; justify-content: space-between; flex-shrink: 0;
        }

        /* Mobile header logo — white pill so true colours show on dark gradient */
        .dvd-mobile-logo-img {
          height: 46px;
          width: auto;
          max-width: 180px;
          object-fit: contain;
          background: white;
          border-radius: 10px;
          padding: 5px 10px;
          display: block;
        }

        .dvd-mobile-close {
          width: 36px; height: 36px; border-radius: 10px; background: rgba(255,255,255,0.15);
          border: 1px solid rgba(255,255,255,0.2); color: white; font-size: 1.2rem;
          cursor: pointer; display: flex; align-items: center; justify-content: center; transition: var(--transition);
        }
        .dvd-mobile-close:hover { background: rgba(255,255,255,0.3); }
        .dvd-mobile-body { flex: 1; overflow-y: auto; padding: 1rem 0; }
        .dvd-mobile-body::-webkit-scrollbar { width: 4px; }
        .dvd-mobile-body::-webkit-scrollbar-thumb { background: #ddd; border-radius: 2px; }
        .dvd-mobile-nav-item {
          display: flex; align-items: center; justify-content: space-between;
          padding: 0.85rem 1.5rem; color: var(--text-dark); font-size: 0.97rem; font-weight: 500;
          text-decoration: none; cursor: pointer; background: none; border: none;
          width: 100%; text-align: left; font-family: var(--font-body);
          border-bottom: 1px solid #f5f5fa; transition: background 0.2s;
        }
        .dvd-mobile-nav-item:hover { background: #f8f9ff; color: var(--indigo); }
        .dvd-mobile-expand-icon { font-size: 0.75rem; transition: transform 0.3s; display: inline-block; }
        .dvd-mobile-expand-icon.open { transform: rotate(180deg); }
        .dvd-mobile-sub { max-height: 0; overflow: hidden; transition: max-height 0.35s ease; background: #f8f9ff; }
        .dvd-mobile-sub.open { max-height: 600px; }
        .dvd-mobile-sub-item {
          display: flex; align-items: center; gap: 10px; padding: 0.7rem 1.5rem 0.7rem 2rem;
          color: var(--text-mid); font-size: 0.88rem; text-decoration: none; transition: color 0.2s;
          font-family: var(--font-body); border-bottom: 1px solid rgba(200,200,240,0.2);
        }
        .dvd-mobile-sub-item:hover { color: var(--indigo); }
        .dvd-mobile-sub-item .item-icon { width: 28px; height: 28px; border-radius: 7px; background: white; display: flex; align-items: center; justify-content: center; font-size: 0.9rem; flex-shrink: 0; }
        .dvd-mobile-footer { padding: 1.25rem 1.5rem; border-top: 1px solid #f0f0f8; background: #fafbff; flex-shrink: 0; }
        .dvd-mobile-signin {
          width: 100%; padding: 0.9rem; border-radius: 50px; border: none;
          background: linear-gradient(135deg, #3D52A0, #7091E6); color: white;
          font-size: 0.95rem; font-weight: 600; cursor: pointer; font-family: var(--font-body);
          letter-spacing: 0.02em; box-shadow: 0 6px 20px rgba(61,82,160,0.35); transition: var(--transition);
        }
        .dvd-mobile-signin:hover { transform: translateY(-1px); box-shadow: 0 10px 28px rgba(61,82,160,0.45); }
        .dvd-mobile-quick { display: flex; gap: 0.5rem; margin-top: 0.75rem; }
        .dvd-mobile-quick a {
          flex: 1; padding: 0.6rem; border-radius: 10px; background: #f0f3ff;
          color: var(--indigo); font-size: 0.78rem; font-weight: 600;
          text-align: center; text-decoration: none; transition: var(--transition);
        }
        .dvd-mobile-quick a:hover { background: #e0e5ff; }

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .dvd-nav { display: none !important; }
          .dvd-signin-btn { display: none !important; }
          .dvd-icon-btn.search-btn { display: none !important; }
          .dvd-hamburger { display: flex !important; }
        }
        @media (max-width: 540px) {
          .dvd-announce-right .links-row { display: none; }
          .dvd-ticker-wrap { max-width: 200px; }
          .dvd-inner { padding: 0 1rem; }
        }
      `}</style>

      {/* ── Announcement Bar ─────────────────────────────────────────────────── */}
      {announcementBar && (
        <div className="dvd-announce" style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 1001 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span className="dvd-announce-badge">LIVE</span>
            <div className="dvd-ticker-wrap">
              <div className={`dvd-ticker ${tickerVisible ? "visible" : "hidden"}`}>
                <span>🎉</span>
                <span>
                  <strong>{currentTicker.name}</strong> just booked <strong>{currentTicker.pkg}</strong> to {currentTicker.location}
                </span>
                <span style={{ opacity: 0.6, fontSize: "0.72rem" }}>{currentTicker.time}</span>
              </div>
            </div>
          </div>
          <div className="dvd-announce-right">
            <div className="links-row" style={{ display: "flex", gap: 14 }}>
              <a href="tel:+917888251550">📞 +91 78882 51550</a>
              <a href="mailto:tours.desivdesi@gmail.com">✉️ Email us</a>
            </div>
            <button className="dvd-announce-close" onClick={() => setAnnouncementBar(false)}>×</button>
          </div>
        </div>
      )}

      {/* ── Main Header ──────────────────────────────────────────────────────── */}
      <header
        className={`dvd-header ${announcementBar ? "with-bar" : ""} ${scrolled ? "scrolled" : "scrolled"}`}
        style={{ top: announcementBar ? 40 : 0 }}
      >
        <div className="dvd-inner ">

          {/* ── LOGO — replaced text with image ── */}
          <Link to="/" className=" ">
            <img
              src="/newlogo.png"
              alt="DesiVDesi Escape"
              className=" w-25"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="dvd-nav">
            <Link to="/" className="dvd-nav-link" style={{ color: textColor }}>Home</Link>
            <button onClick={() => scrollToSection("about-us", "scrollToAbout")} className="dvd-nav-link" style={{ color: textColor }}>About</button>
            <Link to="/services" className="dvd-nav-link" style={{ color: textColor }}>Services</Link>

            {/* Tour Packages Dropdown */}
            <div className="dvd-dropdown" onMouseEnter={() => handleDropdownEnter("tours")} onMouseLeave={handleDropdownLeave}>
              <button className="dvd-dropdown-trigger" style={{ color: textColor }}>
                Tour Packages <span className="dvd-chevron">▼</span>
              </button>
              <div className={`dvd-dropdown-menu wide ${activeDropdown === "tours" ? "active" : ""}`}>
                <div className="dvd-menu-section-title">All Tour Types</div>
                <div className="dvd-menu-grid">
                  {tourTypes.map((t, i) => (
                    <Link key={i} to={t.path} className="dvd-dropdown-item" onClick={() => setActiveDropdown(null)}>
                      <span className="item-icon" style={{ background: `${t.color}18` }}>{t.icon}</span>
                      <span>{t.name}</span>
                      {t.badge && (
                        <span className={`dvd-item-badge badge-${t.badge === "New" ? "new" : t.badge === "Popular" ? "popular" : t.badge === "Best Value" ? "value" : "premium"
                          }`}>{t.badge}</span>
                      )}
                    </Link>
                  ))}
                </div>
                <div className="dvd-menu-footer">
                  <span>9 tour types available</span>
                  <Link to="/services">View All Packages →</Link>
                </div>
              </div>
            </div>

            {/* Domestic Dropdown */}
            <div className="dvd-dropdown" onMouseEnter={() => handleDropdownEnter("domestic")} onMouseLeave={handleDropdownLeave}>
              <button className="dvd-dropdown-trigger" style={{ color: textColor }}>
                Domestic <span className="dvd-chevron">▼</span>
              </button>
              <div className={`dvd-dropdown-menu ${activeDropdown === "domestic" ? "active" : ""}`}>
                <div className="dvd-menu-section-title">Popular in India</div>
                {domesticDestinations.map((d, i) => (
                  <Link key={i} to={d.path} className="dvd-dropdown-item" onClick={() => setActiveDropdown(null)}>
                    <span className="item-icon">{d.icon}</span>{d.name}
                  </Link>
                ))}
                <div className="dvd-menu-footer"><span></span><Link to="/" state={{ scrollToDomestic: true }}>All Domestic →</Link></div>
              </div>
            </div>

            {/* International Dropdown */}
            <div className="dvd-dropdown" onMouseEnter={() => handleDropdownEnter("international")} onMouseLeave={handleDropdownLeave}>
              <button className="dvd-dropdown-trigger" style={{ color: textColor }}>
                International <span className="dvd-chevron">▼</span>
              </button>
              <div className={`dvd-dropdown-menu ${activeDropdown === "international" ? "active" : ""}`}>
                <div className="dvd-menu-section-title">Top International</div>
                {internationalDestinations.map((d, i) => (
                  <Link key={i} to={d.path} className="dvd-dropdown-item" onClick={() => setActiveDropdown(null)}>
                    <span className="item-icon">{d.icon}</span>{d.name}
                  </Link>
                ))}
                <div className="dvd-menu-footer"><span></span><Link to="/" state={{ scrollToInternational: true }}>All International →</Link></div>
              </div>
            </div>

            <Link to="/career" className="dvd-nav-link" style={{ color: textColor }}>Career</Link>
            <button onClick={() => scrollToSection("footer", "scrollToContact")} className="dvd-nav-link" style={{ color: textColor }}>Contact</button>
          </nav>

          {/* Right Controls */}
          <div className="dvd-controls">
            <button className="dvd-icon-btn search-btn" onClick={() => setShowSearch(true)} title="Search" style={{ color: textColor }}>🔍</button>

            <div style={{ position: "relative" }} ref={notifRef}>
              <button className="dvd-icon-btn" onClick={() => setShowNotifications(v => !v)} title="Notifications" style={{ color: textColor }}>
                🔔
                {unreadCount > 0 && <span className="dvd-notif-badge">{unreadCount}</span>}
              </button>
              <div className={`dvd-notif-panel ${showNotifications ? "active" : ""}`}>
                <div className="dvd-notif-header">
                  <h4>Notifications</h4>
                  <button className="dvd-notif-read-all" onClick={markAllRead}>Mark all read</button>
                </div>
                {notifications.map(n => (
                  <div key={n.id} className={`dvd-notif-item ${n.unread ? "unread" : ""}`}>
                    <div className="dvd-notif-emoji">{n.icon}</div>
                    <div className="dvd-notif-body">
                      <div className="dvd-notif-title">{n.title}</div>
                      <div className="dvd-notif-text">{n.body}</div>
                      <div className="dvd-notif-time">{n.time}</div>
                    </div>
                    {n.unread && <div className="dvd-notif-dot" />}
                  </div>
                ))}
                <div className="dvd-notif-footer"><a href="/notifications">See all notifications</a></div>
              </div>
            </div>

            {!user ? (
              <button onClick={() => setShowAuth(true)} className={`dvd-signin-btn ${scrolled ? "dark" : "dark"}`}>
                Sign In
              </button>
            ) : (
              <ProfileDropdown />
            )}

            <button className="dvd-hamburger" onClick={() => setMenuOpen(true)} aria-label="Open menu" style={{ color: textColor }}>
              <span className="dvd-ham-line" style={{ background: textColor }} />
              <span className="dvd-ham-line" style={{ background: textColor }} />
              <span className="dvd-ham-line" style={{ background: textColor }} />
            </button>
          </div>
        </div>
      </header>

      {/* ── Search Overlay ────────────────────────────────────────────────────── */}
      <div className={`dvd-search-overlay ${showSearch ? "active" : ""}`} onClick={(e) => { if (e.target === e.currentTarget) setShowSearch(false); }}>
        <button className="dvd-search-close" onClick={() => setShowSearch(false)}>✕</button>
        <div className="dvd-search-box">
          <p className="dvd-search-label">Where do you want to <span className="hl">explore?</span></p>
          <div className="dvd-search-input-wrap">
            <input
              ref={searchInputRef}
              type="text"
              className="dvd-search-input"
              placeholder="Search destinations, tours, places..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              onKeyDown={e => {
                if (e.key === "Escape") setShowSearch(false);
                if (e.key === "Enter" && searchResults.length > 0) handleSearchDestination(searchResults[0]);
              }}
            />
            <button className="dvd-search-btn" onClick={() => searchResults.length > 0 && handleSearchDestination(searchResults[0])}>🔍</button>
          </div>
          {searchResults.length > 0 && (
            <div className="dvd-search-results">
              {searchResults.map((dest, i) => (
                <div key={i} className="dvd-search-result-item" onClick={() => handleSearchDestination(dest)}>
                  <span>📍</span> {dest}
                </div>
              ))}
            </div>
          )}
          {searchQuery.length >= 2 && searchResults.length === 0 && (
            <div className="dvd-search-results">
              <div className="dvd-search-result-item" style={{ color: "#aaa", justifyContent: "center" }}>
                No destinations found for "{searchQuery}"
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ── Mobile Overlay ── */}
      <div className={`dvd-mobile-overlay ${menuOpen ? "active" : ""}`} onClick={() => setMenuOpen(false)} />

      {/* ── Mobile Menu ── */}
      <div className={`dvd-mobile-menu ${menuOpen ? "active" : ""}`}>
        <div className="dvd-mobile-header">
          {/* Logo in mobile menu header — white filter so it shows on dark bg */}
          <img src="/logo.png" alt="DesiVDesi Escape" className="dvd-mobile-logo-img" />
          <button className="dvd-mobile-close" onClick={() => setMenuOpen(false)}>✕</button>
        </div>

        <div className="dvd-mobile-body">
          <Link to="/" className="dvd-mobile-nav-item" onClick={() => setMenuOpen(false)}><span>🏠 Home</span></Link>
          <button onClick={() => scrollToSection("about-us", "scrollToAbout")} className="dvd-nav-link">About</button>
          <Link to="/services" className="dvd-mobile-nav-item" onClick={() => setMenuOpen(false)}><span>🛎️ Services</span></Link>

          <div>
            <button className="dvd-mobile-nav-item" onClick={() => setMobileExpandedSection(s => s === "tours" ? null : "tours")}>
              <span>✈️ Tour Packages</span>
              <span className={`dvd-mobile-expand-icon ${mobileExpandedSection === "tours" ? "open" : ""}`}>▼</span>
            </button>
            <div className={`dvd-mobile-sub ${mobileExpandedSection === "tours" ? "open" : ""}`}>
              {tourTypes.map((t, i) => (
                <Link key={i} to={t.path} className="dvd-mobile-sub-item" onClick={() => setMenuOpen(false)}>
                  <span className="item-icon" style={{ background: `${t.color}18` }}>{t.icon}</span>
                  {t.name}
                  {t.badge && (
                    <span className={`dvd-item-badge badge-${t.badge === "New" ? "new" : t.badge === "Popular" ? "popular" : t.badge === "Best Value" ? "value" : "premium"
                      }`} style={{ marginLeft: "auto" }}>{t.badge}</span>
                  )}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <button className="dvd-mobile-nav-item" onClick={() => setMobileExpandedSection(s => s === "domestic" ? null : "domestic")}>
              <span>🇮🇳 Domestic</span>
              <span className={`dvd-mobile-expand-icon ${mobileExpandedSection === "domestic" ? "open" : ""}`}>▼</span>
            </button>
            <div className={`dvd-mobile-sub ${mobileExpandedSection === "domestic" ? "open" : ""}`}>
              {domesticDestinations.map((d, i) => (
                <Link key={i} to={d.path} className="dvd-mobile-sub-item" onClick={() => setMenuOpen(false)}>
                  <span className="item-icon">{d.icon}</span>{d.name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <button className="dvd-mobile-nav-item" onClick={() => setMobileExpandedSection(s => s === "international" ? null : "international")}>
              <span>🌍 International</span>
              <span className={`dvd-mobile-expand-icon ${mobileExpandedSection === "international" ? "open" : ""}`}>▼</span>
            </button>
            <div className={`dvd-mobile-sub ${mobileExpandedSection === "international" ? "open" : ""}`}>
              {internationalDestinations.map((d, i) => (
                <Link key={i} to={d.path} className="dvd-mobile-sub-item" onClick={() => setMenuOpen(false)}>
                  <span className="item-icon">{d.icon}</span>{d.name}
                </Link>
              ))}
            </div>
          </div>

          <Link to="/career" className="dvd-mobile-nav-item" onClick={() => setMenuOpen(false)}><span>💼 Career</span></Link>
          <button onClick={() => scrollToSection("footer", "scrollToContact")} className="dvd-mobile-nav-item"><span>📞 Contact</span></button>
          <button className="dvd-mobile-nav-item" onClick={() => { setMenuOpen(false); setShowSearch(true); }}><span>🔍 Search Destinations</span></button>
        </div>

        <div className="dvd-mobile-footer">
          {!user ? (
            <button className="dvd-mobile-signin" onClick={() => { setShowAuth(true); setMenuOpen(false); }}>
              Sign In to Your Account
            </button>
          ) : (
            <ProfileDropdown />
          )}
          <div className="dvd-mobile-quick">
            <a href="tel:+917888251550">📞 Call Us</a>
            <a href="https://wa.me/917888251550" target="_blank" rel="noreferrer">💬 WhatsApp</a>
            <a href="mailto:tours.desivdesi@gmail.com">✉️ Email</a>
          </div>
        </div>
      </div>

      {showAuth && <LoginRegister onClose={() => setShowAuth(false)} />}
      {showProfile && <UserProfilePopup onClose={() => setShowProfile(false)} />}

      <div style={{ height: announcementBar ? `calc(40px + 80px)` : "80px" }} />
    </>
  );
};

export default Header;