// Pages/ItineraryPage.jsx
// Route: /package/:type/:location

import React, { useState, useEffect, useRef, useCallback, useContext } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import {
  FaMapMarkerAlt, FaClock, FaUsers, FaStar, FaArrowLeft,
  FaChevronDown, FaChevronUp, FaCheck, FaTimes,
  FaPhone, FaWhatsapp, FaShieldAlt, FaShare,
  FaHeart, FaRegHeart, FaBolt, FaBalanceScale,
  FaUser, FaEnvelope, FaMobileAlt, FaPrint, FaLock,
  FaCity, FaStickyNote, FaCalendarAlt,
} from "react-icons/fa";
import { AuthContext } from "../Context/AuthContext";
import TripPlannerModal from "../Components/TripPlannerModal";
import api from '../utils/api.js';

// ── Cloudinary URL optimizer ──────────────────────────────────
// Adds f_auto,q_auto,w_900 only for Cloudinary URLs; passes all others through unchanged
const getCloudinaryUrl = (url, width = 900) => {
  if (!url || !url.startsWith('http')) return url;
  if (!url.includes('cloudinary.com')) return url;
  return url.replace('/upload/', `/upload/f_auto,q_auto,w_${width}/`);
};

// ── Per-type colour themes ────────────────────────────────────────────────────
const THEMES = {
  "custom-tour": { grad: "linear-gradient(135deg,#FF6B6B,#FF8E53)", primary: "#FF6B6B", light: "#FFF0F0", icon: "🎨" },
  "adventure-tour": { grad: "linear-gradient(135deg,#4ECDC4,#2C3E50)", primary: "#4ECDC4", light: "#E8F8F5", icon: "🏔️" },
  "family-tour": { grad: "linear-gradient(135deg,#FFE66D,#FFB347)", primary: "#FFB347", light: "#FFF9E6", icon: "👨‍👩‍👧‍👦" },
  "group-tour": { grad: "linear-gradient(135deg,#A37BFF,#6B4EFF)", primary: "#A37BFF", light: "#F3EDFF", icon: "🚌" },
  "city-tour": { grad: "linear-gradient(135deg,#FF9F1C,#FCCF31)", primary: "#FF9F1C", light: "#FFF3E0", icon: "🌆" },
  "honeymoon-tour": { grad: "linear-gradient(135deg,#FF6EB4,#FF9A9E)", primary: "#FF6EB4", light: "#FFF0F7", icon: "💑" },
  "weekend-getaway": { grad: "linear-gradient(135deg,#5BC0EB,#0353A4)", primary: "#5BC0EB", light: "#E8F4FD", icon: "🌅" },
  "luxury-tour": { grad: "linear-gradient(135deg,#C9A84C,#8B6914)", primary: "#C9A84C", light: "#FDF6E3", icon: "💎" },
  "pilgrimage-tour": { grad: "linear-gradient(135deg,#7BAE7F,#4A7C59)", primary: "#7BAE7F", light: "#EEFBEE", icon: "🕌" },
};
const getTheme = (type) =>
  THEMES[type] || THEMES[`${type}-tour`] ||
  { grad: "linear-gradient(135deg,#667eea,#764ba2)", primary: "#667eea", light: "#F0F2FF", icon: "✈️" };

// ── Normalise the raw API package into a consistent shape ─────────────────────
function normalisePackage(raw) {
  if (!raw) return null;

  let gallery = [];
  if (Array.isArray(raw.gallery) && raw.gallery.length) {
    gallery = raw.gallery;
  } else if (typeof raw.images === "string" && raw.images) {
    gallery = [{ img: raw.images, caption: "" }];
  } else if (Array.isArray(raw.images) && raw.images.length) {
    gallery = raw.images.map((img) => ({ img, caption: "" }));
  }

  let durations = [];
  if (Array.isArray(raw.durations) && raw.durations.length) {
    durations = raw.durations.map((d) => ({
      label: d.label || d.duration || "",
      nights: d.nights ?? null,
      days: d.days ?? null,
      price: d.price || raw.price || 0,
      discountedPrice: d.discountedPrice || null,
    }));
  } else {
    const rawLabel =
      (typeof raw.durations === "string" && raw.durations) ||
      raw.duration ||
      "";
    const matchND = rawLabel.match(/(\d+)\s*N\s*\/?\s*(\d+)\s*D/i);
    const matchD = rawLabel.match(/^(\d+)\s*D$/i);
    const nights = matchND ? parseInt(matchND[1]) : null;
    const days = matchND ? parseInt(matchND[2]) : matchD ? parseInt(matchD[1]) : null;
    durations = [{
      label: rawLabel || (days ? `${days} Day${days > 1 ? "s" : ""}` : ""),
      nights,
      days,
      price: raw.price || 0,
      discountedPrice: null,
    }];
    if (raw.strikePrice) {
      durations[0].discountedPrice = raw.price || 0;
      durations[0].price = raw.strikePrice;
    }
  }

  const inclusions = raw.inclusions || raw.inclExcl?.inclusions || [];
  const exclusions = raw.exclusions || raw.inclExcl?.exclusions || [];

  const itinerary = (raw.itinerary || []).map((day) => ({
    ...day,
    meals: Array.isArray(day.meals)
      ? day.meals
      : typeof day.meals === "string" && day.meals
        ? day.meals.split(/[,;]/).map((m) => m.trim()).filter(Boolean)
        : [],
    activities: Array.isArray(day.activities)
      ? day.activities
      : typeof day.activities === "string" && day.activities
        ? day.activities.split(/[,;]/).map((a) => a.trim()).filter(Boolean)
        : [],
  }));

  return { ...raw, gallery, durations, inclusions, exclusions, itinerary };
}

// ── Fallback itinerary builder ────────────────────────────────────────────────
const buildFallbackDays = (locationTitle, numDays = 1) =>
  Array.from({ length: numDays }, (_, i) => ({
    day: i + 1,
    title: i === 0
      ? `Arrival in ${locationTitle}`
      : i === numDays - 1
        ? `Departure from ${locationTitle}`
        : `Explore ${locationTitle} — Day ${i + 1}`,
    description:
      i === 0
        ? `Welcome to ${locationTitle}! Transfer from airport/station to hotel. Check in, freshen up, and enjoy a welcome dinner.`
        : i === numDays - 1
          ? `Enjoy breakfast at the hotel. Check out and transfer to airport/station for your return journey.`
          : `Full day of guided sightseeing, local cuisine, and cultural experiences across the best of ${locationTitle}.`,
    activities:
      i === 0
        ? ["Airport / station pickup", "Hotel check-in", "Orientation walk", "Welcome dinner"]
        : i === numDays - 1
          ? ["Breakfast at hotel", "Check-out", "Transfer to departure point"]
          : ["Sightseeing tour", "Local street food", "Cultural experience", "Leisure time"],
    meals:
      i === 0
        ? ["Dinner"]
        : i === numDays - 1
          ? ["Breakfast"]
          : ["Breakfast", "Lunch", "Dinner"],
    accommodation: i < numDays - 1 ? "Hotel (as per selected plan)" : null,
  }));

// ── Live price hook ───────────────────────────────────────────────────────────
function useLivePrice(base) {
  const [price, setPrice] = useState(base || 0);
  const [trend, setTrend] = useState("stable");
  useEffect(() => {
    if (!base) return;
    setPrice(base);
    const id = setInterval(() => {
      setPrice((p) => {
        const delta = (Math.random() - 0.48) * base * 0.03;
        const next = Math.round(Math.max(base * 0.88, Math.min(base * 1.18, p + delta)));
        setTrend(next > p ? "rising" : next < p ? "falling" : "stable");
        return next;
      });
    }, 15000);
    return () => clearInterval(id);
  }, [base]);
  return { price, trend };
}

// ── Skeleton ──────────────────────────────────────────────────────────────────
const Skel = ({ h = 16, w = "100%", r = 8, mb = 8 }) => (
  <div style={{ height: h, width: w, borderRadius: r, marginBottom: mb, background: "linear-gradient(90deg,#f0f0f0 25%,#e8e8e8 50%,#f0f0f0 75%)", backgroundSize: "400px 100%", animation: "itp-shimmer 1.4s infinite" }} />
);

// ─────────────────────────────────────────────────────────────────────────────
export default function ItineraryPage() {
  const { type, location } = useParams();
  const navigate = useNavigate();
  const theme = getTheme(type);
  const { user } = useContext(AuthContext);

  const locationTitle = location
    ? location.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")
    : "";
  const typeTitle = type
    ? type.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())
    : "Tour Package";

  const [pkg, setPkg] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [selectedDurationIdx, setSelectedDurationIdx] = useState(0);

  const [openDay, setOpenDay] = useState(1);
  const [activeImg, setActiveImg] = useState(0);
  const [activeTab, setActiveTab] = useState("itinerary");
  const [isFav, setIsFav] = useState(false);
  const [countdown, setCountdown] = useState({ h: 4, m: 17, s: 33 });

  const [compareOpen, setCompareOpen] = useState(false);
  const [compareAllPkgs, setCompareAllPkgs] = useState([]);
  const [compareSelected, setCompareSelected] = useState([]);
  const [compareLoading, setCompareLoading] = useState(false);
  const [compareScope, setCompareScope] = useState("city");
  const [compareDurIdx, setCompareDurIdx] = useState(0);

  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [enquiryLoading, setEnquiryLoading] = useState(false);
  const [enquiryDone, setEnquiryDone] = useState(false);
  const [enquiryError, setEnquiryError] = useState(null);
  const [enquiryForm, setEnquiryForm] = useState({
    fullName: "", email: "", mobile: "",
    destination: locationTitle, city: "",
    travelDate: "", adults: 2, travelers: 2, notes: "",
  });

  const [travelers, setTravelers] = useState(2);
  const [travelDate, setTravelDate] = useState("");
  const bookingRef = useRef(null);

  useEffect(() => {
    const id = setInterval(() => {
      setCountdown(({ h, m, s }) => {
        s--; if (s < 0) { s = 59; m--; } if (m < 0) { m = 59; h--; }
        if (h < 0) return { h: 11, m: 59, s: 59 };
        return { h, m, s };
      });
    }, 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("authToken") || sessionStorage.getItem("authToken");
        if (!token) return;
        const res = await api.get("/auth/profile", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setEnquiryForm((f) => ({
          ...f,
          fullName: res.data.fullName || res.data.name || "",
          email: res.data.email || "",
          mobile: res.data.mobile || res.data.phone || "",
          city: res.data.city || res.data.address?.city || "",
        }));
      } catch { /* not logged in */ }
    };
    fetchUser();
  }, []);

  useEffect(() => {
    if (!type || !location) return;
    const load = async () => {
      setLoading(true); setError(null);
      try {
        const res = await api.get(`/packages/${encodeURIComponent(type)}/${encodeURIComponent(location)}`);
        const raw = Array.isArray(res.data) ? res.data[0] : res.data;
        setPkg(normalisePackage(raw));
      } catch {
        try {
          const res = await api.get(`/packages/${type}`);
          const list = Array.isArray(res.data) ? res.data : [];
          const match = list.find(
            (p) => (p.location || "").toLowerCase().replace(/\s+/g, "-") === location.toLowerCase()
          );
          if (match) setPkg(normalisePackage(match));
          else setError("This package could not be found.");
        } catch {
          setError("Unable to load package. Please check your connection.");
        }
      } finally {
        setTimeout(() => setLoading(false), 300);
      }
    };
    load();
  }, [type, location]);

  const openCompare = useCallback(async () => {
    setCompareOpen(true);
    setCompareScope("duration");
    if (compareAllPkgs.length > 0) {
      if (pkg?._id && !compareSelected.length) setCompareSelected([pkg._id]);
      return;
    }
    setCompareLoading(true);
    try {
      const res = await api.get(`/packages/${type}`);
      const list = (Array.isArray(res.data) ? res.data : []).map(normalisePackage);
      setCompareAllPkgs(list);
      if (pkg?._id) setCompareSelected([pkg._id]);
    } catch { /* ignore */ }
    finally { setCompareLoading(false); }
  }, [type, compareAllPkgs.length, compareSelected.length, pkg]);

  const durationOptions = pkg?.durations || [];
  const _safeIdx = Math.min(selectedDurationIdx, Math.max(0, durationOptions.length - 1));
  const selDur = durationOptions[_safeIdx] || {};

  const basePrice = selDur?.discountedPrice || selDur?.price || pkg?.price || 0;
  const { price: livePrice, trend } = useLivePrice(basePrice);
  const totalPrice = livePrice * travelers;

  const fullItinerary = pkg?.itinerary?.length
    ? pkg.itinerary
    : buildFallbackDays(locationTitle, selDur?.days || 1);
  const itinerary = fullItinerary.slice(0, selDur?.days || fullItinerary.length);

  const inclusions = pkg?.inclusions || [];
  const exclusions = pkg?.exclusions || [];

  // Extract image URLs and run through Cloudinary optimizer
  const images = (pkg?.gallery?.length
    ? pkg.gallery.map((item) => (typeof item === "string" ? item : item.img)).filter(Boolean)
    : []
  ).map((url) => getCloudinaryUrl(url));

  const openEnquiry = useCallback(() => {
    if (!user) {
      navigate(`/login?redirect=${encodeURIComponent(window.location.pathname)}`);
      return;
    }
    setEnquiryForm((f) => ({
      ...f, travelDate, adults: travelers, travelers, destination: locationTitle,
    }));
    setEnquiryDone(false);
    setEnquiryError(null);
    setEnquiryOpen(true);
  }, [user, navigate, travelDate, travelers, locationTitle]);

  const handleEnquirySubmit = useCallback(async (e) => {
    e.preventDefault();
    setEnquiryLoading(true);
    setEnquiryError(null);
    const payload = {
      customer: {
        userId: user?._id || user?.id,
        fullName: enquiryForm.fullName,
        email: enquiryForm.email,
        mobile: enquiryForm.mobile,
        destination: enquiryForm.destination,
        adults: enquiryForm.adults,
        city: enquiryForm.city,
      },
      package: {
        packageId: pkg?._id,
        title: pkg?.title || `${locationTitle} ${typeTitle}`,
        type, location, locationTitle, typeTitle,
        rating: pkg?.rating,
        reviews: pkg?.reviews,
        groupSize: pkg?.groupSize,
      },
      duration: { label: selDur?.label, nights: selDur?.nights, days: selDur?.days },
      itinerary: itinerary.map((day) => ({
        day: day.day,
        title: day.title,
        description: day.description,
        activities: day.activities || [],
        meals: day.meals || [],
        accommodation: day.accommodation || null,
      })),
      inclusions,
      exclusions,
      pricing: {
        pricePerPerson: livePrice,
        adults: enquiryForm.adults,
        travelers: enquiryForm.adults,
        totalPrice: livePrice * enquiryForm.adults,
        currency: "INR",
        durationType: selDur?.label,
      },
      travelDate: enquiryForm.travelDate,
      notes: enquiryForm.notes,
      enquiryDate: new Date().toISOString(),
      source: "ItineraryPage",
      pageUrl: window.location.href,
    };
    try {
      const token = localStorage.getItem("authToken") || sessionStorage.getItem("authToken");
      await api.post("/bookings/package-inquiry", payload, {
        headers: token ? { Authorization: `Bearer ${token}` } : {},
      });
      setEnquiryDone(true);
    } catch (err) {
      setEnquiryError(
        err?.response?.data?.message || "Failed to submit enquiry. Please try again or call us directly."
      );
    } finally {
      setEnquiryLoading(false);
    }
  }, [enquiryForm, pkg, type, location, locationTitle, typeTitle, selDur, itinerary, inclusions, exclusions, livePrice, user]);

  const toggleCompare = (id) => {
    setCompareSelected((prev) => {
      if (prev.includes(id)) return prev.filter((x) => x !== id);
      if (prev.length >= 3) return prev;
      return [...prev, id];
    });
  };

  // ── Loading ────────────────────────────────────────────────────────────────
  if (loading) return (
    <>
      <Header />
      <style>{`@keyframes itp-shimmer{0%{background-position:-400px 0}100%{background-position:400px 0}}`}</style>
      <div style={{ padding: "2rem", maxWidth: 1200, margin: "0 auto" }}>
        <Skel h={420} r={20} mb={24} />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: 24 }}>
          <div><Skel h={32} w="55%" mb={12} /><Skel h={18} mb={8} /><Skel h={18} w="80%" mb={32} /><Skel h={220} r={16} /></div>
          <Skel h={400} r={20} />
        </div>
      </div>
    </>
  );

  // ── Error ──────────────────────────────────────────────────────────────────
  if (error) return (
    <>
      <Header />
      <div style={{ minHeight: "60vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "2rem", fontFamily: "'DM Sans', sans-serif", textAlign: "center" }}>
        <div style={{ fontSize: "3.5rem", marginBottom: "1rem" }}>😕</div>
        <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "2rem", fontWeight: 700, color: "#1a1a2e", marginBottom: ".5rem" }}>Package Not Found</h2>
        <p style={{ color: "#888", marginBottom: "2rem", maxWidth: 420 }}>{error}</p>
        <button onClick={() => navigate(`/tourcard/${type}`)} style={{ padding: "0.75rem 2rem", borderRadius: 50, border: "none", background: theme.grad, color: "white", fontWeight: 700, cursor: "pointer", fontSize: "0.95rem" }}>
          ← Back to {typeTitle}
        </button>
      </div>
    </>
  );

  // ── Main render ────────────────────────────────────────────────────────────
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Cormorant+Garamond:wght@400;500;600;700&display=swap');
        *{box-sizing:border-box}
        html{scroll-padding-top:72px}
        body{font-family:'DM Sans',sans-serif;margin:0}
        :root{--navy:#1a1a2e;--ease:cubic-bezier(0.4,0,0.2,1)}
        @keyframes itp-shimmer{0%{background-position:-400px 0}100%{background-position:400px 0}}
        @keyframes itp-up{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
        @keyframes itp-in{from{opacity:0;transform:translateX(-16px)}to{opacity:1;transform:translateX(0)}}
        @keyframes itp-modal-in{from{opacity:0;transform:scale(.96)}to{opacity:1;transform:scale(1)}}
        @keyframes itp-slide-right{from{opacity:0;transform:translateX(40px)}to{opacity:1;transform:translateX(0)}}
        .itp-hero{position:relative;height:68vh;min-height:460px;overflow:hidden;margin-top:0}
        .itp-hero-img{width:100%;height:100%;object-fit:cover;transition:transform 8s ease}
        .itp-hero:hover .itp-hero-img{transform:scale(1.05)}
        .itp-hero-grad{position:absolute;inset:0;background:linear-gradient(180deg,rgba(10,10,30,.2) 0%,rgba(10,10,30,.78) 100%)}
        .itp-hero-content{position:absolute;inset:0;display:flex;flex-direction:column;justify-content:flex-end;padding:3rem 2.5rem;max-width:860px;animation:itp-up .7s var(--ease) both}
        .itp-breadcrumb{display:flex;align-items:center;gap:6px;font-size:.77rem;color:rgba(255,255,255,.6);margin-bottom:.9rem;flex-wrap:wrap}
        .itp-breadcrumb a{color:rgba(255,255,255,.6);text-decoration:none;transition:color .2s}
        .itp-breadcrumb a:hover{color:#F0D080}
        .itp-breadcrumb sep{opacity:.4}
        .itp-type-chip{display:inline-flex;align-items:center;gap:6px;background:rgba(255,255,255,.12);backdrop-filter:blur(8px);border:1px solid rgba(255,255,255,.2);color:white;font-size:.77rem;font-weight:600;letter-spacing:.08em;text-transform:uppercase;padding:5px 14px;border-radius:50px;margin-bottom:.9rem}
        .itp-hero-title{font-family:'Cormorant Garamond',serif;font-size:clamp(2.2rem,6vw,3.8rem);font-weight:700;color:white;line-height:1.08;margin-bottom:.75rem}
        .itp-hero-meta{display:flex;flex-wrap:wrap;gap:1.25rem}
        .itp-hero-meta-item{display:flex;align-items:center;gap:6px;color:rgba(255,255,255,.85);font-size:.87rem}
        .itp-hero-actions{position:absolute;top:1.5rem;right:1.5rem;display:flex;gap:8px}
        .itp-act-btn{width:40px;height:40px;border-radius:50%;background:rgba(255,255,255,.14);backdrop-filter:blur(8px);border:1px solid rgba(255,255,255,.2);color:white;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all .2s;font-size:.9rem}
        .itp-act-btn:hover{background:rgba(255,255,255,.28);transform:scale(1.08)}
        .itp-thumbs{position:absolute;bottom:1.4rem;right:1.5rem;display:flex;gap:6px}
        .itp-thumb{width:56px;height:40px;border-radius:8px;object-fit:cover;cursor:pointer;border:2px solid transparent;opacity:.6;transition:all .2s}
        .itp-thumb.active{border-color:white;opacity:1}
        .itp-thumb:hover{opacity:.88}
        .itp-layout{display:grid;grid-template-columns:1fr 360px;gap:2.5rem;max-width:1240px;margin:0 auto;padding:2.5rem 2rem;align-items:start}
        .itp-dur-wrap{margin-bottom:1.75rem}
        .itp-dur-title{font-size:.8rem;font-weight:700;letter-spacing:.07em;text-transform:uppercase;color:#aaa;margin-bottom:.7rem}
        .itp-dur-pills{display:flex;flex-wrap:wrap;gap:8px}
        .itp-dur-pill{padding:.5rem 1.1rem;border-radius:50px;border:2px solid #e8eaf6;background:white;font-family:'DM Sans',sans-serif;font-size:.83rem;font-weight:600;color:#666;cursor:pointer;transition:all .22s var(--ease);display:flex;flex-direction:column;align-items:center;gap:1px;min-width:80px}
        .itp-dur-pill:hover{border-color:#c0c8f0;color:var(--navy)}
        .itp-dur-pill.active{color:white;border-color:transparent;transform:translateY(-1px);box-shadow:0 6px 18px rgba(0,0,0,.15)}
        .itp-dur-pill-price{font-size:.68rem;font-weight:400;opacity:.85}
        .itp-qs{display:flex;flex-wrap:wrap;gap:10px;margin-bottom:2rem}
        .itp-qs-item{display:flex;align-items:center;gap:8px;background:#fafbff;border:1px solid #eef0ff;border-radius:12px;padding:.6rem 1rem;font-size:.84rem;color:#555}
        .itp-qs-val{font-weight:700;color:var(--navy);display:block}
        .itp-qs-sub{font-size:.71rem;color:#aaa;display:block}
        .itp-tabs{display:flex;border-bottom:2px solid #f0f0f8;margin-bottom:1.75rem;gap:0;overflow-x:auto}
        .itp-tab{padding:.7rem 1.4rem;border:none;background:none;font-family:'DM Sans',sans-serif;font-size:.88rem;font-weight:500;color:#999;cursor:pointer;position:relative;transition:color .2s;white-space:nowrap}
        .itp-tab::after{content:'';position:absolute;bottom:-2px;left:0;right:0;height:2px;background:transparent;transition:background .2s}
        .itp-tab.active{color:var(--navy);font-weight:700}
        .itp-day{border:1px solid #eef0ff;border-radius:14px;overflow:hidden;margin-bottom:.65rem;transition:box-shadow .2s}
        .itp-day:hover{box-shadow:0 4px 18px rgba(61,82,160,.08)}
        .itp-day-hdr{display:flex;align-items:center;gap:.9rem;padding:1rem 1.2rem;cursor:pointer;background:white;transition:background .2s}
        .itp-day-hdr:hover,.itp-day.open .itp-day-hdr{background:#fafbff}
        .itp-day.open .itp-day-hdr{border-bottom:1px solid #eef0ff}
        .itp-day-num{width:38px;height:38px;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:.78rem;font-weight:800;color:white;flex-shrink:0}
        .itp-day-title{font-weight:700;color:var(--navy);font-size:.95rem;flex:1}
        .itp-day-meals{font-size:.73rem;color:#aaa;margin-right:.4rem;white-space:nowrap}
        .itp-day-body{padding:1.1rem 1.2rem}
        .itp-day-desc{font-size:.87rem;color:#555;line-height:1.72;margin-bottom:.9rem}
        .itp-acts{display:flex;flex-wrap:wrap;gap:5px;margin-bottom:.65rem}
        .itp-act{background:#f0f3ff;color:#3D52A0;font-size:.73rem;font-weight:500;padding:3px 10px;border-radius:50px}
        .itp-day-stay{display:flex;align-items:center;gap:6px;font-size:.79rem;color:#888}
        .itp-inc-grid{display:grid;grid-template-columns:1fr 1fr;gap:1.5rem}
        .itp-inc-col h4{font-size:.88rem;font-weight:700;margin-bottom:.85rem;display:flex;align-items:center;gap:6px}
        .itp-inc-row{display:flex;align-items:flex-start;gap:8px;font-size:.84rem;color:#555;padding:.45rem 0;border-bottom:1px solid #f8f8fc;line-height:1.5}
        .itp-inc-row:last-child{border-bottom:none}
        .itp-inc-icon{flex-shrink:0;margin-top:2px}
        .itp-gallery{display:grid;grid-template-columns:1fr 1fr;gap:10px}
        .itp-gal-img{width:100%;aspect-ratio:4/3;object-fit:cover;border-radius:12px;cursor:pointer;transition:transform .3s,opacity .2s}
        .itp-gal-img:first-child{grid-column:span 2;aspect-ratio:16/7}
        .itp-gal-img:hover{transform:scale(1.02);opacity:.92}
        .itp-bc{background:white;border-radius:22px;border:1px solid #e8eaf6;box-shadow:0 20px 50px rgba(0,0,0,.08);position:sticky;top:80px;overflow:hidden}
        .itp-bc-head{padding:1.5rem 1.5rem .75rem}
        .itp-bc-price{font-family:'Cormorant Garamond',serif;font-size:2.3rem;font-weight:700;line-height:1;margin-bottom:3px}
        .itp-bc-per{font-size:.78rem;color:#aaa;font-family:'DM Sans',sans-serif;margin-bottom:.5rem}
        .itp-trend-pill{display:inline-flex;align-items:center;gap:5px;font-size:.73rem;font-weight:600;padding:3px 10px;border-radius:20px}
        .itp-countdown{display:flex;align-items:center;gap:7px;background:rgba(255,107,107,.07);border:1px solid rgba(255,107,107,.15);border-radius:9px;padding:7px 11px;margin:.7rem 0;font-size:.78rem}
        .itp-cd-num{font-weight:800;color:#FF6B6B;font-variant-numeric:tabular-nums;font-size:.94rem}
        .itp-bc-body{padding:0 1.5rem 1.5rem}
        .itp-lbl{font-size:.74rem;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:#aaa;margin-bottom:4px;display:block}
        .itp-field{margin-bottom:.9rem}
        .itp-inp{width:100%;padding:.65rem .95rem;border:1.5px solid #e8eaf6;border-radius:9px;font-family:'DM Sans',sans-serif;font-size:.88rem;color:var(--navy);outline:none;transition:border-color .2s,box-shadow .2s;background:white}
        .itp-inp:focus{border-color:#3D52A0;box-shadow:0 0 0 3px rgba(61,82,160,.1)}
        .itp-trav{display:flex;align-items:center;justify-content:space-between;border:1.5px solid #e8eaf6;border-radius:9px;padding:.45rem .7rem}
        .itp-trav-btn{width:30px;height:30px;border-radius:8px;border:1px solid #e8eaf6;background:white;font-size:1.1rem;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:background .2s}
        .itp-trav-btn:hover{background:#f0f3ff}
        .itp-trav-n{font-weight:700;font-size:.95rem;min-width:18px;text-align:center}
        .itp-total-row{display:flex;justify-content:space-between;align-items:center;padding:.65rem 0;border-top:1px solid #f0f0f8;margin-bottom:.9rem}
        .itp-total-lbl{font-size:.83rem;color:#888}
        .itp-total-sub{font-size:.72rem;color:#bbb}
        .itp-total-price{font-family:'Cormorant Garamond',serif;font-size:1.55rem;font-weight:700}
        .itp-enq-btn{width:100%;padding:.95rem;border-radius:50px;border:none;color:white;font-size:.97rem;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;transition:all .3s var(--ease);letter-spacing:.02em;display:flex;align-items:center;justify-content:center;gap:8px}
        .itp-enq-btn:hover:not(:disabled){transform:translateY(-2px);box-shadow:0 12px 28px rgba(0,0,0,.2)}
        .itp-enq-btn:disabled{opacity:.6;cursor:not-allowed}
        .itp-compare-btn{width:100%;padding:.65rem;border-radius:50px;border:2px dashed #c8ccee;background:transparent;color:#3D52A0;font-size:.84rem;font-weight:600;cursor:pointer;font-family:'DM Sans',sans-serif;transition:all .2s;margin-top:.65rem;display:flex;align-items:center;justify-content:center;gap:7px}
        .itp-compare-btn:hover{background:#f0f3ff;border-color:#3D52A0}
        .itp-contact-row{display:flex;gap:8px;margin-top:.85rem}
        .itp-chip{flex:1;display:flex;align-items:center;justify-content:center;gap:6px;padding:.55rem;border-radius:9px;border:1.5px solid #e8eaf6;text-decoration:none;color:#555;font-size:.77rem;font-weight:600;font-family:'DM Sans',sans-serif;transition:all .2s}
        .itp-chip:hover{border-color:#3D52A0;color:#3D52A0;background:#f5f7ff}
        .itp-bc-trust{padding:.9rem 1.5rem;background:#fafbff;border-top:1px solid #f0f0f8;display:flex;flex-direction:column;gap:5px}
        .itp-trust-row{display:flex;align-items:center;gap:7px;font-size:.77rem;color:#777}
        .itp-login-nudge{background:linear-gradient(135deg,#f0f4ff,#faf0ff);border:1px solid #d8deff;border-radius:12px;padding:.85rem 1rem;margin-bottom:.9rem;display:flex;align-items:center;gap:10px;font-size:.8rem;color:#555}
        .itp-login-link{color:#3D52A0;font-weight:700;text-decoration:none;border-bottom:1px solid #3D52A0}
        .itp-no-data{background:#fafbff;border:1px dashed #e0e4f8;border-radius:12px;padding:1.2rem 1.4rem;font-size:.85rem;color:#aaa;text-align:center}
        .itp-modal-overlay{position:fixed;inset:0;background:rgba(10,10,30,.55);backdrop-filter:blur(6px);z-index:500;display:flex;align-items:center;justify-content:center;padding:1rem;overflow-y:auto}
        .itp-modal{background:white;border-radius:24px;width:100%;max-width:580px;box-shadow:0 32px 80px rgba(0,0,0,.22);animation:itp-modal-in .3s var(--ease) both;overflow:hidden;max-height:92vh;display:flex;flex-direction:column}
        .itp-modal-head{padding:1.5rem 1.75rem 1rem;border-bottom:1px solid #f0f0f8;flex-shrink:0}
        .itp-modal-title{font-family:'Cormorant Garamond',serif;font-size:1.6rem;font-weight:700;color:var(--navy);margin-bottom:.2rem}
        .itp-modal-sub{font-size:.82rem;color:#aaa}
        .itp-modal-body{padding:1.25rem 1.75rem;overflow-y:auto;flex:1}
        .itp-modal-footer{padding:1rem 1.75rem;border-top:1px solid #f0f0f8;flex-shrink:0}
        .itp-modal-close{position:absolute;top:1.25rem;right:1.25rem;width:32px;height:32px;border-radius:50%;border:none;background:#f5f5f8;cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:.9rem;color:#777;transition:all .2s}
        .itp-modal-close:hover{background:#ececf5;color:#333}
        .itp-req{color:#FF6B6B;margin-left:2px}
        .itp-enq-summary{background:linear-gradient(135deg,#f7f9ff,#fdf5ff);border:1px solid #e4e8ff;border-radius:14px;padding:1rem 1.1rem;margin-bottom:1.25rem}
        .itp-enq-summary-title{font-weight:700;color:var(--navy);font-size:.92rem;margin-bottom:.4rem}
        .itp-enq-summary-row{display:flex;justify-content:space-between;font-size:.8rem;color:#666;padding:.2rem 0}
        .itp-enq-summary-row span:last-child{font-weight:600;color:var(--navy)}
        .itp-enq-total{display:flex;justify-content:space-between;align-items:center;padding:.6rem 0 0;border-top:1px dashed #d8deff;margin-top:.4rem}
        .itp-enq-total-lbl{font-size:.82rem;font-weight:700;color:#555}
        .itp-enq-total-price{font-family:'Cormorant Garamond',serif;font-size:1.45rem;font-weight:700}
        .itp-form-grid{display:grid;grid-template-columns:1fr 1fr;gap:.85rem}
        .itp-form-col-full{grid-column:span 2}
        .itp-modal-inp{width:100%;padding:.65rem .95rem;border:1.5px solid #e8eaf6;border-radius:9px;font-family:'DM Sans',sans-serif;font-size:.88rem;color:var(--navy);outline:none;transition:border-color .2s,box-shadow .2s;background:white}
        .itp-modal-inp:focus{border-color:#3D52A0;box-shadow:0 0 0 3px rgba(61,82,160,.1)}
        .itp-modal-textarea{resize:vertical;min-height:72px}
        .itp-inp-wrap{position:relative}
        .itp-inp-icon{position:absolute;left:.85rem;top:50%;transform:translateY(-50%);color:#bbb;font-size:.82rem;pointer-events:none}
        .itp-inp-wrap .itp-modal-inp{padding-left:2.2rem}
        .itp-submit-btn{width:100%;padding:1rem;border-radius:50px;border:none;color:white;font-size:.97rem;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;transition:all .3s var(--ease);letter-spacing:.02em}
        .itp-submit-btn:hover:not(:disabled){transform:translateY(-2px);box-shadow:0 12px 28px rgba(0,0,0,.2)}
        .itp-submit-btn:disabled{opacity:.5;cursor:not-allowed}
        .itp-enq-error{background:#FFF0F0;border:1px solid #FFD0D0;border-radius:9px;padding:.65rem 1rem;font-size:.82rem;color:#c62828;margin-bottom:.85rem}
        .itp-req-note{font-size:.72rem;color:#bbb;margin-bottom:.85rem}
        .itp-req-note span{color:#FF6B6B}
        .itp-enq-success{padding:2.5rem 1.75rem;text-align:center;animation:itp-up .4s var(--ease) both}
        .itp-enq-success-icon{font-size:3.5rem;margin-bottom:.9rem}
        .itp-enq-success-title{font-family:'Cormorant Garamond',serif;font-size:1.7rem;font-weight:700;color:var(--navy);margin-bottom:.4rem}
        .itp-enq-success-sub{font-size:.86rem;color:#777;line-height:1.7;margin-bottom:1.25rem;max-width:380px;margin-left:auto;margin-right:auto}
        .itp-enq-ref{background:#f5f7ff;border-radius:10px;padding:.6rem 1rem;font-size:.79rem;color:#3D52A0;font-weight:600;margin-bottom:1rem;display:inline-block}
        .itp-enq-print-hint{display:flex;align-items:center;justify-content:center;gap:6px;font-size:.76rem;color:#aaa;margin-top:.5rem}
        @keyframes itp-cmp-in{from{opacity:0;transform:scale(.97) translateY(12px)}to{opacity:1;transform:scale(1) translateY(0)}}
        .itp-cmp-overlay{position:fixed;inset:0;background:rgba(10,10,30,.62);backdrop-filter:blur(6px);z-index:1000;display:flex;align-items:center;justify-content:center;padding:1.5rem;overflow-y:auto}
        .itp-cmp-modal{background:white;border-radius:24px;width:100%;max-width:1000px;height:auto;max-height:min(88vh,800px);box-shadow:0 40px 100px rgba(0,0,0,.28);animation:itp-cmp-in .32s var(--ease) both;display:flex;flex-direction:column;overflow:hidden;margin:auto}
        .itp-cmp-head{padding:1.2rem 1.5rem .9rem;border-bottom:1px solid #f0f0f8;display:flex;align-items:flex-start;justify-content:space-between;flex-shrink:0;gap:.75rem;flex-wrap:wrap}
        .itp-cmp-head-left{flex:1;min-width:180px}
        .itp-cmp-title{font-family:'Cormorant Garamond',serif;font-size:1.45rem;font-weight:700;color:var(--navy);margin-bottom:.2rem;line-height:1.2}
        .itp-cmp-subtitle{font-size:.74rem;color:#aaa}
        .itp-cmp-head-right{display:flex;align-items:center;gap:.5rem;flex-shrink:0;flex-wrap:wrap}
        .itp-cmp-close{width:32px;height:32px;border-radius:50%;border:none;background:#f5f5f8;cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:.85rem;color:#777;transition:all .2s;flex-shrink:0}
        .itp-cmp-close:hover{background:#ececf5;color:#333}
        .itp-cmp-controls{padding:.85rem 1.75rem;border-bottom:1px solid #f0f0f8;display:flex;align-items:center;gap:1.25rem;flex-wrap:wrap;flex-shrink:0;background:#fafbff}
        .itp-cmp-picker-wrap{padding:.85rem 1.75rem;border-bottom:1px solid #f0f0f8;flex-shrink:0}
        .itp-cmp-picker-label{font-size:.73rem;font-weight:700;letter-spacing:.07em;text-transform:uppercase;color:#aaa;margin-bottom:.55rem}
        .itp-cmp-pkg-list{display:flex;flex-wrap:wrap;gap:6px}
        .itp-cmp-pkg-chip{padding:.36rem .9rem;border-radius:50px;border:2px solid #e8eaf6;background:white;font-size:.77rem;font-weight:600;color:#666;cursor:pointer;transition:all .2s;display:flex;align-items:center;gap:5px;font-family:'DM Sans',sans-serif}
        .itp-cmp-pkg-chip.selected{color:white;border-color:transparent}
        .itp-cmp-pkg-chip:hover:not(.selected):not(:disabled){border-color:#c0c8f0;color:var(--navy)}
        .itp-cmp-pkg-chip:disabled{opacity:.4;cursor:not-allowed}
        .itp-cmp-body{flex:1;overflow:auto;min-height:0}
        .itp-cmp-table{border-collapse:collapse;table-layout:auto;min-width:100%}
        .itp-cmp-table th{padding:.85rem 1.1rem;text-align:center;font-size:.82rem;font-weight:700;color:var(--navy);border-bottom:2px solid #f0f0f8;background:#fafbff;vertical-align:top;min-width:170px;white-space:nowrap}
        .itp-cmp-table th:first-child{text-align:left;width:130px;min-width:130px;max-width:130px;background:#f2f3f8;font-size:.7rem;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:#bbb;vertical-align:middle;position:sticky;left:0;z-index:3;border-right:1px solid #eaeaf8}
        .itp-cmp-table td{padding:.75rem 1.1rem;font-size:.84rem;color:#444;border-bottom:1px solid #f5f5fb;text-align:center;vertical-align:middle;min-width:170px}
        .itp-cmp-table td:first-child{font-weight:600;color:#888;font-size:.78rem;text-align:left;background:#f7f8fc;position:sticky;left:0;z-index:2;border-right:1px solid #eaeaf8;white-space:nowrap}
        .itp-cmp-table tr:last-child td{border-bottom:none}
        .itp-cmp-table tr:hover td:not(:first-child){background:#fafbff}
        .itp-cmp-price{font-family:'Cormorant Garamond',serif;font-size:1.35rem;font-weight:700}
        .itp-cmp-badge{display:inline-block;padding:2px 8px;border-radius:50px;font-size:.67rem;font-weight:700;background:#E8F5E9;color:#2E7D32;margin-top:3px}
        .itp-cmp-check{color:#4CAF50;font-size:1rem}
        .itp-cmp-cross{color:#FF6B6B;font-size:.9rem}
        .itp-cmp-empty{text-align:center;padding:3rem 1rem;color:#aaa;font-size:.88rem}
        .itp-cmp-th-pkg{font-size:.9rem;font-weight:700;color:var(--navy);display:block;margin-bottom:2px}
        .itp-cmp-th-dur{font-size:.72rem;font-weight:500;color:#aaa;display:block}
        .itp-cmp-action-link{color:var(--navy);font-weight:700;font-size:.78rem;text-decoration:none;padding:.38rem .85rem;border-radius:50px;border:1.5px solid currentColor;transition:all .2s;display:inline-block}
        .itp-cmp-action-link:hover{opacity:.8}
        .itp-cmp-scope{display:flex;gap:0;background:#f3f4f8;border-radius:50px;padding:3px;width:fit-content}
        .itp-cmp-scope-btn{padding:.38rem 1.1rem;border-radius:50px;border:none;font-family:'DM Sans',sans-serif;font-size:.78rem;font-weight:600;cursor:pointer;transition:all .22s;background:transparent;color:#888}
        .itp-cmp-scope-btn.active{background:white;color:var(--navy);box-shadow:0 2px 8px rgba(0,0,0,.1)}
        .itp-cmp-dur-tabs{display:flex;gap:6px;flex-wrap:wrap}
        .itp-cmp-dur-tab{padding:.34rem .95rem;border-radius:50px;border:1.5px solid #e8eaf6;background:white;font-size:.75rem;font-weight:600;color:#888;cursor:pointer;transition:all .2s;font-family:'DM Sans',sans-serif}
        .itp-cmp-dur-tab:hover:not(.active){border-color:#c0c8f0;color:var(--navy)}
        .itp-cmp-dur-tab.active{color:white;border-color:transparent}
        .itp-sticky{position:fixed;bottom:0;left:0;right:0;background:white;border-top:1px solid #e8eaf6;padding:.7rem 1.5rem;display:none;align-items:center;justify-content:space-between;z-index:200;box-shadow:0 -6px 24px rgba(0,0,0,.1)}
        .itp-sticky-price{font-family:'Cormorant Garamond',serif;font-size:1.45rem;font-weight:700}
        .itp-sticky-btn{padding:.65rem 1.75rem;border-radius:50px;border:none;color:white;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;font-size:.92rem}
        @media(max-width:768px){
          .itp-cmp-overlay{padding:.5rem;align-items:flex-end}
          .itp-cmp-modal{max-width:100%;max-height:92vh;border-radius:20px 20px 0 0;margin:0}
          .itp-cmp-table th,.itp-cmp-table td{min-width:130px;padding:.6rem .75rem;font-size:.77rem}
          .itp-cmp-table th:first-child,.itp-cmp-table td:first-child{width:100px;min-width:100px;max-width:100px;font-size:.7rem}
          .itp-cmp-head-right{gap:.35rem}
        }
        @media(max-width:1024px){
          .itp-layout{grid-template-columns:1fr}
          .itp-bc{position:static}
          .itp-sticky{display:flex}
          body{padding-bottom:72px}
        }
        @media(max-width:640px){
          .itp-hero{height:52vh}
          .itp-hero-content{padding:1.75rem 1.25rem}
          .itp-layout{padding:1.5rem 1rem}
          .itp-inc-grid{grid-template-columns:1fr}
          .itp-form-grid{grid-template-columns:1fr}
          .itp-form-col-full{grid-column:span 1}
          .itp-modal{border-radius:18px 18px 0 0;align-self:flex-end;max-height:95vh}
          .itp-modal-overlay{align-items:flex-end;padding:0}
        }
      `}</style>

      <Header />

      {/* ── HERO ── */}
      <section className="itp-hero">
        <img
          src={images[activeImg] || "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1200&q=80"}
          alt={locationTitle}
          className="itp-hero-img"
          onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1200&q=80"; }}
        />
        <div className="itp-hero-grad" />

        <div className="itp-hero-actions">
          <button className="itp-act-btn" title="Back" onClick={() => navigate(`/tourcard/${type}`)}><FaArrowLeft /></button>
          <button className="itp-act-btn" title="Wishlist" onClick={() => setIsFav((v) => !v)}>
            {isFav ? <FaHeart color="#FF6B6B" /> : <FaRegHeart />}
          </button>
          <button className="itp-act-btn" title="Compare packages" onClick={openCompare}><FaBalanceScale /></button>
          <button className="itp-act-btn" title="Share"
            onClick={() => navigator.share?.({ title: `${locationTitle} ${typeTitle}`, url: window.location.href })}>
            <FaShare />
          </button>
        </div>

        {images.length > 1 && (
          <div className="itp-thumbs">
            {images.slice(0, 4).map((img, i) => (
              <img
                key={i}
                src={getCloudinaryUrl(img, 120)}
                alt=""
                className={`itp-thumb ${i === activeImg ? "active" : ""}`}
                onClick={() => setActiveImg(i)}
                onError={(e) => { e.target.style.display = "none"; }}
              />
            ))}
          </div>
        )}

        <div className="itp-hero-content">
          <nav className="itp-breadcrumb">
            <Link to="/">Home</Link><sep>›</sep>
            <Link to="/services">Tours</Link><sep>›</sep>
            <Link to={`/tourcard/${type}`}>{typeTitle}</Link><sep>›</sep>
            <span style={{ color: "white" }}>{locationTitle}</span>
          </nav>
          <div className="itp-type-chip"><span>{theme.icon}</span><span>{typeTitle}</span></div>
          <h1 className="itp-hero-title">{pkg?.title || `${locationTitle} ${typeTitle}`}</h1>
          <div className="itp-hero-meta">
            {pkg?.location && <div className="itp-hero-meta-item"><FaMapMarkerAlt size={12} /> {pkg.location}</div>}
            {selDur?.label && <div className="itp-hero-meta-item"><FaClock size={12} /> {selDur.label}</div>}
            {pkg?.groupSize && <div className="itp-hero-meta-item"><FaUsers size={12} /> {pkg.groupSize}</div>}
            {pkg?.rating && (
              <div className="itp-hero-meta-item">
                <FaStar size={12} color="#FFD700" /> {pkg.rating}
                {pkg?.reviews && <span style={{ opacity: 0.65 }}>&nbsp;({pkg.reviews} reviews)</span>}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── BODY ── */}
      <div className="itp-layout">
        <main>

          {durationOptions.length > 0 && (
            <div className="itp-dur-wrap">
              <div className="itp-dur-title">Select Package Duration</div>
              <div className="itp-dur-pills">
                {durationOptions.map((dur, idx) => (
                  <button
                    key={idx}
                    className={`itp-dur-pill ${selectedDurationIdx === idx ? "active" : ""}`}
                    style={selectedDurationIdx === idx ? { background: theme.grad } : {}}
                    onClick={() => { setSelectedDurationIdx(idx); setOpenDay(1); }}
                  >
                    <span>{dur.label}</span>
                    {(dur.discountedPrice || dur.price) > 0 && (
                      <span className="itp-dur-pill-price">
                        ₹{(dur.discountedPrice || dur.price).toLocaleString()}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="itp-qs">
            {selDur?.label && <div className="itp-qs-item"><span style={{ fontSize: "1.2rem" }}>📅</span><div><span className="itp-qs-val">{selDur.label}</span><span className="itp-qs-sub">Duration</span></div></div>}
            {pkg?.hotelRating && <div className="itp-qs-item"><span style={{ fontSize: "1.2rem" }}>🏨</span><div><span className="itp-qs-val">{pkg.hotelRating}</span><span className="itp-qs-sub">Hotels</span></div></div>}
            {pkg?.groupSize && <div className="itp-qs-item"><span style={{ fontSize: "1.2rem" }}>👥</span><div><span className="itp-qs-val">{pkg.groupSize}</span><span className="itp-qs-sub">Group Size</span></div></div>}
            {pkg?.destination && <div className="itp-qs-item"><span style={{ fontSize: "1.2rem" }}>📍</span><div><span className="itp-qs-val">{pkg.destination}</span><span className="itp-qs-sub">Region</span></div></div>}
          </div>

          {(pkg?.description || pkg?.about) && (
            <div style={{ marginBottom: "2rem" }}>
              <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.65rem", fontWeight: 700, color: "var(--navy)", marginBottom: ".6rem" }}>About This Package</h2>
              <p style={{ fontSize: ".9rem", color: "#555", lineHeight: 1.8 }}>{pkg.description || pkg.about}</p>
            </div>
          )}

          {pkg?.highlights?.length > 0 && (
            <div style={{ marginBottom: "2rem" }}>
              <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.45rem", fontWeight: 700, color: "var(--navy)", marginBottom: ".75rem" }}>Highlights</h2>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {pkg.highlights.map((h, i) => (
                  <span key={i} style={{ background: theme.light, color: theme.primary, fontWeight: 600, fontSize: ".8rem", padding: "5px 14px", borderRadius: 50, border: `1px solid ${theme.primary}22` }}>
                    ✦ {h}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="itp-tabs">
            {[
              { key: "itinerary", label: "🗺️ Day-by-Day" },
              { key: "inclusions", label: "✅ What's Included" },
              { key: "gallery", label: "📸 Gallery" },
            ].map((t) => (
              <button key={t.key} className={`itp-tab ${activeTab === t.key ? "active" : ""}`}
                onClick={() => setActiveTab(t.key)}>{t.label}</button>
            ))}
            <style>{`.itp-tab.active::after{background:${theme.primary}}`}</style>
          </div>

          {activeTab === "itinerary" && (
            <div>
              {itinerary.length > 0 ? itinerary.map((day, i) => (
                <div key={i} className={`itp-day ${openDay === day.day ? "open" : ""}`}>
                  <div className="itp-day-hdr" onClick={() => setOpenDay(openDay === day.day ? null : day.day)}>
                    <div className="itp-day-num" style={{ background: theme.grad }}>D{day.day}</div>
                    <span className="itp-day-title">{day.title}</span>
                    {day.meals?.length > 0 && (
                      <span className="itp-day-meals">🍽 {day.meals.join(" · ")}</span>
                    )}
                    {openDay === day.day ? <FaChevronUp size={12} color="#aaa" /> : <FaChevronDown size={12} color="#aaa" />}
                  </div>
                  {openDay === day.day && (
                    <div className="itp-day-body">
                      {day.description && <p className="itp-day-desc">{day.description}</p>}
                      {day.activities?.length > 0 && (
                        <div className="itp-acts">
                          {day.activities.map((a, j) => <span key={j} className="itp-act">✦ {a}</span>)}
                        </div>
                      )}
                      {day.accommodation && (
                        <div className="itp-day-stay"><span>🏨</span><span>{day.accommodation}</span></div>
                      )}
                    </div>
                  )}
                </div>
              )) : (
                <div className="itp-no-data">No itinerary details available for this package.</div>
              )}
            </div>
          )}

          {activeTab === "inclusions" && (
            <div className="itp-inc-grid">
              <div className="itp-inc-col">
                <h4 style={{ color: "#2e7d32" }}><FaCheck color="#4CAF50" /> Included</h4>
                {inclusions.length > 0 ? inclusions.map((item, i) => (
                  <div key={i} className="itp-inc-row">
                    <FaCheck size={11} color="#4CAF50" className="itp-inc-icon" /> {item}
                  </div>
                )) : <div className="itp-no-data">No inclusions listed.</div>}
              </div>
              <div className="itp-inc-col">
                <h4 style={{ color: "#c62828" }}><FaTimes color="#FF6B6B" /> Not Included</h4>
                {exclusions.length > 0 ? exclusions.map((item, i) => (
                  <div key={i} className="itp-inc-row">
                    <FaTimes size={11} color="#FF6B6B" className="itp-inc-icon" /> {item}
                  </div>
                )) : <div className="itp-no-data">No exclusions listed.</div>}
              </div>
            </div>
          )}

          {activeTab === "gallery" && (
            images.length > 0 ? (
              <div className="itp-gallery">
                {images.map((img, i) => (
                  <img
                    key={i}
                    src={getCloudinaryUrl(img, 800)}
                    alt={`${locationTitle} ${i + 1}`}
                    className="itp-gal-img"
                    onClick={() => setActiveImg(i)}
                    onError={(e) => { e.target.style.display = "none"; }}
                  />
                ))}
              </div>
            ) : (
              <div className="itp-no-data">No gallery images available.</div>
            )
          )}
        </main>

        {/* ── RIGHT: Booking / Enquiry card ── */}
        <aside>
          <div className="itp-bc" ref={bookingRef}>
            <div className="itp-bc-head">
              <div className="itp-bc-price" style={{ color: theme.primary }}>
                {livePrice > 0 ? `₹${livePrice.toLocaleString()}` : "Price on request"}
              </div>
              <div className="itp-bc-per">
                per person{selDur?.label ? ` · ${selDur.label}` : ""} · all inclusive
              </div>
              {livePrice > 0 && (
                <>
                  <div className="itp-trend-pill" style={{
                    background: trend === "rising" ? "#FFF3E0" : trend === "falling" ? "#E8F5E9" : "#F3F4F6",
                    color: trend === "rising" ? "#E65100" : trend === "falling" ? "#2E7D32" : "#666",
                  }}>
                    {trend === "rising" ? "📈 Price rising" : trend === "falling" ? "📉 Price dropping" : "📊 Price stable"}
                  </div>
                  <div className="itp-countdown">
                    <FaBolt color="#FF6B6B" size={11} />
                    <span style={{ color: "#aaa" }}>Offer ends in</span>
                    <span className="itp-cd-num">
                      {String(countdown.h).padStart(2, "0")}:{String(countdown.m).padStart(2, "0")}:{String(countdown.s).padStart(2, "0")}
                    </span>
                  </div>
                </>
              )}
            </div>

            <div className="itp-bc-body">
              {!user && (
                <div className="itp-login-nudge">
                  <FaLock color="#3D52A0" size={13} />
                  <span>
                    <Link to={`/login?redirect=${encodeURIComponent(window.location.pathname)}`} className="itp-login-link">Login</Link> to submit an enquiry and get personalised quotes
                  </span>
                </div>
              )}

              <div className="itp-field">
                <label className="itp-lbl">Travel Date</label>
                <input type="date" className="itp-inp" value={travelDate}
                  min={new Date().toISOString().split("T")[0]}
                  onChange={(e) => setTravelDate(e.target.value)} />
              </div>

              <div className="itp-field">
                <label className="itp-lbl">Travelers</label>
                <div className="itp-trav">
                  <button type="button" className="itp-trav-btn" onClick={() => setTravelers((t) => Math.max(1, t - 1))}>−</button>
                  <span className="itp-trav-n">{travelers}</span>
                  <button type="button" className="itp-trav-btn" onClick={() => setTravelers((t) => Math.min(20, t + 1))}>+</button>
                </div>
              </div>

              {livePrice > 0 && (
                <div className="itp-total-row">
                  <div>
                    <div className="itp-total-lbl">Estimated Total</div>
                    <div className="itp-total-sub">₹{livePrice.toLocaleString()} × {travelers} {travelers === 1 ? "person" : "people"}</div>
                  </div>
                  <div className="itp-total-price" style={{ color: theme.primary }}>₹{totalPrice.toLocaleString()}</div>
                </div>
              )}

              <button className="itp-enq-btn" style={{ background: theme.grad }} onClick={openEnquiry}>
                <FaEnvelope size={14} />
                {user ? "Submit Enquiry" : "Login & Enquire"}
              </button>

              <button className="itp-compare-btn" onClick={openCompare}>
                <FaBalanceScale size={13} /> Compare Durations &amp; Packages
              </button>

              <TripPlannerModal
                prefillDestination={locationTitle}
                prefillTripType={typeTitle}
              />

              <div className="itp-contact-row">
                <a href="tel:+917888251550" className="itp-chip"><FaPhone size={11} /> Call Us</a>
                <a href="https://wa.me/917888251550" target="_blank" rel="noreferrer" className="itp-chip"><FaWhatsapp size={11} /> WhatsApp</a>
              </div>
            </div>

            <div className="itp-bc-trust">
              <div className="itp-trust-row"><FaShieldAlt size={10} color="#4CAF50" /> 100% Secure Enquiry</div>
              <div className="itp-trust-row"><span>🔄</span> Free cancellation up to 48 hours</div>
              <div className="itp-trust-row"><span>✅</span> Expert will respond within 30 mins</div>
            </div>
          </div>
        </aside>
      </div>

      {/* ── Sticky mobile bar ── */}
      <div className="itp-sticky">
        <div>
          <div className="itp-sticky-price" style={{ color: theme.primary }}>
            {livePrice > 0 ? `₹${livePrice.toLocaleString()}` : "Price on request"}
          </div>
          <div style={{ fontSize: ".72rem", color: "#aaa" }}>{selDur?.label || ""} · per person</div>
        </div>
        <button className="itp-sticky-btn" style={{ background: theme.grad }}
          onClick={() => bookingRef.current?.scrollIntoView({ behavior: "smooth", block: "center" })}>
          Enquire Now →
        </button>
      </div>

      {/* ══ ENQUIRY MODAL ══ */}
      {enquiryOpen && (
        <div className="itp-modal-overlay" onClick={(e) => { if (e.target === e.currentTarget) setEnquiryOpen(false); }}>
          <div className="itp-modal" style={{ position: "relative" }}>
            <button className="itp-modal-close" onClick={() => setEnquiryOpen(false)}><FaTimes /></button>

            {enquiryDone ? (
              <div className="itp-enq-success">
                <div className="itp-enq-success-icon">🎉</div>
                <div className="itp-enq-success-title">Enquiry Submitted!</div>
                <p className="itp-enq-success-sub">
                  Our travel expert will call you within 30 minutes. A confirmation has been sent to <strong>{enquiryForm.email}</strong>.
                </p>
                <div className="itp-enq-ref">📋 Ref: ENQ-{Date.now().toString(36).toUpperCase()}</div>
                <div className="itp-enq-print-hint"><FaPrint size={11} /> Your full itinerary is saved — print option coming soon</div>
                <button style={{ marginTop: "1.5rem", padding: ".7rem 2rem", borderRadius: 50, border: "none", background: theme.grad, color: "white", fontWeight: 700, cursor: "pointer", fontFamily: "'DM Sans',sans-serif" }}
                  onClick={() => setEnquiryOpen(false)}>Close</button>
              </div>
            ) : (
              <>
                <div className="itp-modal-head">
                  <div className="itp-modal-title">Submit Enquiry</div>
                  <div className="itp-modal-sub">{pkg?.title || `${locationTitle} ${typeTitle}`}{selDur?.label ? ` · ${selDur.label}` : ""}</div>
                </div>

                <div className="itp-modal-body">
                  <div className="itp-enq-summary">
                    <div className="itp-enq-summary-title">📦 Package Summary</div>
                    <div className="itp-enq-summary-row"><span>Destination</span><span>{enquiryForm.destination || locationTitle}</span></div>
                    <div className="itp-enq-summary-row"><span>Tour Type</span><span>{typeTitle}</span></div>
                    {selDur?.label && <div className="itp-enq-summary-row"><span>Duration</span><span>{selDur.label}</span></div>}
                    {livePrice > 0 && <div className="itp-enq-summary-row"><span>Price / person</span><span>₹{livePrice.toLocaleString()}</span></div>}
                    <div className="itp-enq-summary-row"><span>Adults</span><span>{enquiryForm.adults}</span></div>
                    {livePrice > 0 && (
                      <div className="itp-enq-total">
                        <span className="itp-enq-total-lbl">Quoted Total</span>
                        <span className="itp-enq-total-price" style={{ color: theme.primary }}>
                          ₹{(livePrice * enquiryForm.adults).toLocaleString()}
                        </span>
                      </div>
                    )}
                  </div>

                  {enquiryError && <div className="itp-enq-error">⚠️ {enquiryError}</div>}
                  <p className="itp-req-note"><span>*</span> Required fields</p>

                  <form id="enquiry-form" onSubmit={handleEnquirySubmit}>
                    <div className="itp-form-grid">
                      <div>
                        <label className="itp-lbl">Full Name <span className="itp-req">*</span></label>
                        <div className="itp-inp-wrap"><FaUser className="itp-inp-icon" />
                          <input className="itp-modal-inp" type="text" placeholder="Your full name" required
                            value={enquiryForm.fullName} onChange={(e) => setEnquiryForm((f) => ({ ...f, fullName: e.target.value }))} />
                        </div>
                      </div>
                      <div>
                        <label className="itp-lbl">Mobile <span className="itp-req">*</span></label>
                        <div className="itp-inp-wrap"><FaMobileAlt className="itp-inp-icon" />
                          <input className="itp-modal-inp" type="tel" placeholder="10-digit number" required
                            pattern="[0-9]{10}" title="Please enter a valid 10-digit mobile number"
                            value={enquiryForm.mobile} onChange={(e) => setEnquiryForm((f) => ({ ...f, mobile: e.target.value }))} />
                        </div>
                      </div>
                      <div>
                        <label className="itp-lbl">Email <span className="itp-req">*</span></label>
                        <div className="itp-inp-wrap"><FaEnvelope className="itp-inp-icon" />
                          <input className="itp-modal-inp" type="email" placeholder="you@email.com" required
                            value={enquiryForm.email} onChange={(e) => setEnquiryForm((f) => ({ ...f, email: e.target.value }))} />
                        </div>
                      </div>
                      <div>
                        <label className="itp-lbl">Your City</label>
                        <div className="itp-inp-wrap"><FaCity className="itp-inp-icon" />
                          <input className="itp-modal-inp" type="text" placeholder="City you're travelling from"
                            value={enquiryForm.city} onChange={(e) => setEnquiryForm((f) => ({ ...f, city: e.target.value }))} />
                        </div>
                      </div>
                      <div className="itp-form-col-full">
                        <label className="itp-lbl">Destination <span className="itp-req">*</span></label>
                        <div className="itp-inp-wrap"><FaMapMarkerAlt className="itp-inp-icon" />
                          <input className="itp-modal-inp" type="text" placeholder="Travel destination" required
                            value={enquiryForm.destination} onChange={(e) => setEnquiryForm((f) => ({ ...f, destination: e.target.value }))} />
                        </div>
                      </div>
                      <div>
                        <label className="itp-lbl">Travel Date</label>
                        <div className="itp-inp-wrap"><FaCalendarAlt className="itp-inp-icon" />
                          <input className="itp-modal-inp" type="date" min={new Date().toISOString().split("T")[0]}
                            value={enquiryForm.travelDate} onChange={(e) => setEnquiryForm((f) => ({ ...f, travelDate: e.target.value }))} />
                        </div>
                      </div>
                      <div>
                        <label className="itp-lbl">Adults <span className="itp-req">*</span></label>
                        <div className="itp-trav" style={{ border: "1.5px solid #e8eaf6", borderRadius: 9 }}>
                          <button type="button" className="itp-trav-btn"
                            onClick={() => setEnquiryForm((f) => { const n = Math.max(1, f.adults - 1); return { ...f, adults: n, travelers: n }; })}>−</button>
                          <span className="itp-trav-n">{enquiryForm.adults}</span>
                          <button type="button" className="itp-trav-btn"
                            onClick={() => setEnquiryForm((f) => { const n = Math.min(20, f.adults + 1); return { ...f, adults: n, travelers: n }; })}>+</button>
                        </div>
                      </div>
                      <div className="itp-form-col-full">
                        <label className="itp-lbl">Special Requests / Notes</label>
                        <div className="itp-inp-wrap">
                          <FaStickyNote className="itp-inp-icon" style={{ top: "0.85rem", transform: "none" }} />
                          <textarea className="itp-modal-inp itp-modal-textarea"
                            placeholder="Any special requirements, dietary restrictions, preferred hotels…"
                            value={enquiryForm.notes} onChange={(e) => setEnquiryForm((f) => ({ ...f, notes: e.target.value }))} />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>

                <div className="itp-modal-footer">
                  <button type="submit" form="enquiry-form" className="itp-submit-btn"
                    style={{ background: theme.grad }} disabled={enquiryLoading}>
                    {enquiryLoading ? "Submitting…" : "✉️  Submit Enquiry"}
                  </button>
                  <p style={{ textAlign: "center", fontSize: ".73rem", color: "#bbb", marginTop: ".65rem" }}>
                    Your details are safe with us · No spam, ever
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* ══ COMPARE MODAL ══ */}
      {compareOpen && (() => {
        const getPkgDur = (p, idx) => {
          const durs = Array.isArray(p.durations) && p.durations.length ? p.durations : null;
          if (durs) return durs[Math.min(idx, durs.length - 1)];
          return { price: p.price, discountedPrice: null, label: p.duration || "—", days: p.durationDays, nights: null };
        };

        if (compareScope === "duration") {
          const cols = durationOptions;
          const rows = [
            { label: "Duration", render: (_p, d) => <strong style={{ color: "var(--navy)" }}>{d?.label || "—"}</strong> },
            {
              label: "Price / person", render: (_p, d) => {
                const price = d?.discountedPrice || d?.price || 0;
                const orig = d?.price;
                return (
                  <div>
                    <span className="itp-cmp-price" style={{ color: theme.primary }}>₹{price.toLocaleString()}</span>
                    {d?.discountedPrice && orig && <div style={{ fontSize: ".68rem", color: "#bbb", textDecoration: "line-through" }}>₹{orig.toLocaleString()}</div>}
                  </div>
                );
              }
            },
            { label: "Nights / Days", render: (_p, d) => d?.nights ? `${d.nights}N / ${d.days}D` : d?.days ? `${d.days} Days` : "—" },
            { label: "Hotels", render: () => pkg?.hotelRating || "3★ / 4★" },
            { label: "Meals", render: () => pkg?.meals || "As per itinerary" },
            { label: "Transport", render: () => pkg?.transport || "Private AC Vehicle" },
            { label: "Group Size", render: () => pkg?.groupSize || "Max 15 people" },
            { label: "Rating", render: () => pkg?.rating ? `⭐ ${pkg.rating}` : "—" },
          ];

          return (
            <div className="itp-cmp-overlay" onClick={(e) => { if (e.target === e.currentTarget) setCompareOpen(false); }}>
              <div className="itp-cmp-modal">
                <div className="itp-cmp-head">
                  <div className="itp-cmp-head-left">
                    <div className="itp-cmp-title">⚖️ Compare Durations</div>
                    <div className="itp-cmp-subtitle">{pkg?.title || `${locationTitle} ${typeTitle}`} — all available duration options</div>
                  </div>
                  <div className="itp-cmp-head-right">
                    <button onClick={() => { setCompareScope("city"); setCompareSelected(pkg?._id ? [pkg._id] : []); }}
                      style={{ padding: ".42rem 1rem", borderRadius: 50, border: "none", background: theme.light, color: theme.primary, fontWeight: 700, fontSize: ".78rem", cursor: "pointer", fontFamily: "'DM Sans',sans-serif", whiteSpace: "nowrap" }}>
                      📍 Compare {locationTitle} Packages
                    </button>
                    <button onClick={() => { setCompareScope("all"); setCompareSelected(pkg?._id ? [pkg._id] : []); }}
                      style={{ padding: ".42rem 1rem", borderRadius: 50, border: "none", background: "#f3f4f8", color: "#555", fontWeight: 700, fontSize: ".78rem", cursor: "pointer", fontFamily: "'DM Sans',sans-serif", whiteSpace: "nowrap" }}>
                      🌏 All Cities
                    </button>
                    <button className="itp-cmp-close" onClick={() => setCompareOpen(false)}><FaTimes /></button>
                  </div>
                </div>
                <div className="itp-cmp-body">
                  {cols.length === 0 ? (
                    <div className="itp-cmp-empty">Only one duration available for this package.</div>
                  ) : (
                    <table className="itp-cmp-table">
                      <thead>
                        <tr>
                          <th>Feature</th>
                          {cols.map((d, i) => (
                            <th key={i} style={_safeIdx === i ? { background: theme.light } : {}}>
                              <span className="itp-cmp-th-pkg">{d.label}</span>
                              <span className="itp-cmp-th-dur">₹{(d.discountedPrice || d.price || 0).toLocaleString()} / person</span>
                              {_safeIdx === i && <div className="itp-cmp-badge">Selected</div>}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {rows.map((row) => (
                          <tr key={row.label}>
                            <td>{row.label}</td>
                            {cols.map((d, i) => (
                              <td key={i} style={_safeIdx === i ? { background: theme.light, fontWeight: 600 } : {}}>{row.render(pkg, d)}</td>
                            ))}
                          </tr>
                        ))}
                        <tr>
                          <td>Select</td>
                          {cols.map((d, i) => (
                            <td key={i} style={_safeIdx === i ? { background: theme.light } : {}}>
                              <button
                                onClick={() => { setSelectedDurationIdx(i); setCompareOpen(false); bookingRef.current?.scrollIntoView({ behavior: "smooth", block: "center" }); }}
                                style={{ padding: ".42rem 1.1rem", borderRadius: 50, border: "none", background: _safeIdx === i ? theme.grad : "#f3f4f8", color: _safeIdx === i ? "white" : "#555", fontWeight: 700, fontSize: ".76rem", cursor: "pointer", fontFamily: "'DM Sans',sans-serif" }}
                              >{_safeIdx === i ? "✓ Selected" : "Choose"}</button>
                            </td>
                          ))}
                        </tr>
                      </tbody>
                    </table>
                  )}
                </div>
              </div>
            </div>
          );
        }

        const visibleList = compareScope === "city"
          ? compareAllPkgs.filter((p) => {
            const pLoc = (p.location || "").toLowerCase().replace(/\s+/g, "-");
            const curLoc = (location || "").toLowerCase();
            return pLoc === curLoc;
          })
          : compareAllPkgs;

        const effectiveSelected = compareSelected.length === 0 && pkg?._id ? [pkg._id] : compareSelected;
        const selectedPkgs = visibleList.filter((p) => effectiveSelected.includes(p._id));
        const displayPkgs = selectedPkgs.length > 0
          ? selectedPkgs
          : (pkg ? [pkg, ...visibleList.filter(p => p._id !== pkg._id).slice(0, 2)] : visibleList.slice(0, 3));

        const allDurLabels = Array.from(new Set(
          displayPkgs.flatMap((p) =>
            Array.isArray(p.durations) && p.durations.length
              ? p.durations.map((d) => d.label)
              : [p.duration || selDur?.label || "3N / 4D"]
          )
        ));
        const safeCmpDurIdx = Math.min(compareDurIdx, Math.max(0, allDurLabels.length - 1));

        const pkgRows = [
          {
            label: "Price / person", render: (p) => {
              const d = getPkgDur(p, safeCmpDurIdx);
              const price = d?.discountedPrice || d?.price || p.price || 0;
              const orig = d?.price;
              return (
                <div>
                  <span className="itp-cmp-price" style={{ color: theme.primary }}>₹{price.toLocaleString()}</span>
                  {d?.discountedPrice && orig && <div style={{ fontSize: ".68rem", color: "#bbb", textDecoration: "line-through" }}>₹{orig.toLocaleString()}</div>}
                </div>
              );
            }
          },
          { label: "Destination", render: (p) => p.location || p.locationTitle || "—" },
          { label: "Duration", render: (p) => getPkgDur(p, safeCmpDurIdx)?.label || p.duration || "—" },
          { label: "Nights / Days", render: (p) => { const d = getPkgDur(p, safeCmpDurIdx); return d?.nights ? `${d.nights}N / ${d.days}D` : d?.days ? `${d.days} Days` : "—"; } },
          { label: "Rating", render: (p) => p.rating ? `⭐ ${p.rating} (${p.reviews || 0})` : "—" },
          { label: "Hotels", render: (p) => p.hotelRating || "3★ / 4★" },
          { label: "Group Size", render: (p) => p.groupSize || "—" },
          { label: "Meals", render: (p) => p.meals || "As per itinerary" },
          { label: "Transport", render: (p) => p.transport || "Private AC Vehicle" },
          { label: "Inclusions", render: (p) => `${(p.inclusions || inclusions).length} items` },
        ];

        return (
          <div className="itp-cmp-overlay" onClick={(e) => { if (e.target === e.currentTarget) setCompareOpen(false); }}>
            <div className="itp-cmp-modal">
              <div className="itp-cmp-head">
                <div className="itp-cmp-head-left">
                  <div className="itp-cmp-title">⚖️ Compare {typeTitle} Packages</div>
                  <div className="itp-cmp-subtitle">
                    {compareScope === "city"
                      ? `${visibleList.length} package${visibleList.length !== 1 ? "s" : ""} in ${locationTitle}`
                      : `${visibleList.length} package${visibleList.length !== 1 ? "s" : ""} across all cities`}
                    {" · tap to select up to 3"}
                  </div>
                </div>
                <div className="itp-cmp-head-right">
                  <button onClick={() => setCompareScope("duration")}
                    style={{ padding: ".42rem 1rem", borderRadius: 50, border: "1.5px solid #e8eaf6", background: "white", color: "#555", fontWeight: 700, fontSize: ".78rem", cursor: "pointer", fontFamily: "'DM Sans',sans-serif", whiteSpace: "nowrap" }}>
                    ← Duration Compare
                  </button>
                  <div className="itp-cmp-scope">
                    <button className={`itp-cmp-scope-btn ${compareScope === "city" ? "active" : ""}`}
                      onClick={() => { setCompareScope("city"); setCompareSelected(pkg?._id ? [pkg._id] : []); }}>
                      📍 {locationTitle}
                    </button>
                    <button className={`itp-cmp-scope-btn ${compareScope === "all" ? "active" : ""}`}
                      onClick={() => { setCompareScope("all"); setCompareSelected(pkg?._id ? [pkg._id] : []); }}>
                      🌏 All Cities
                    </button>
                  </div>
                  <button className="itp-cmp-close" onClick={() => setCompareOpen(false)}><FaTimes /></button>
                </div>
              </div>

              {compareLoading ? (
                <div style={{ padding: "2rem 1.75rem" }}>
                  <Skel h={38} mb={10} r={50} w="280px" />
                  <Skel h={48} mb={8} r={10} />
                  <Skel h={48} mb={8} r={10} />
                  <Skel h={48} mb={8} r={10} />
                </div>
              ) : (
                <>
                  <div className="itp-cmp-picker-wrap">
                    <div className="itp-cmp-picker-label">Choose packages to compare (up to 3)</div>
                    {visibleList.length === 0 ? (
                      <div style={{ fontSize: ".82rem", color: "#aaa" }}>
                        {compareScope === "city"
                          ? `No packages found for ${locationTitle}. Switch to "🌏 All Cities".`
                          : "No packages found for this tour type."}
                      </div>
                    ) : (
                      <div className="itp-cmp-pkg-list">
                        {visibleList.map((p) => {
                          const isSelected = effectiveSelected.includes(p._id);
                          const isCurrent = p._id === pkg?._id;
                          const chipLabel = compareScope === "all"
                            ? (p.location || p.title || "Package")
                            : (p.duration || p.durations?.[0]?.label || p.title || p.location || "Package");
                          return (
                            <button key={p._id}
                              className={`itp-cmp-pkg-chip ${isSelected ? "selected" : ""}`}
                              style={isSelected ? { background: theme.grad } : {}}
                              onClick={() => {
                                setCompareSelected((prev) => {
                                  const cur = prev.length === 0 && pkg?._id ? [pkg._id] : prev;
                                  if (cur.includes(p._id)) return cur.filter((x) => x !== p._id);
                                  if (cur.length >= 3) return cur;
                                  return [...cur, p._id];
                                });
                              }}
                              disabled={!isSelected && effectiveSelected.length >= 3}
                            >
                              {isSelected && <FaCheck size={9} />}
                              {chipLabel}
                              {isCurrent && <span style={{ fontSize: ".64rem", opacity: .65 }}> (current)</span>}
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>

                  {displayPkgs.length > 0 && allDurLabels.length > 1 && (
                    <div style={{ padding: ".55rem 1.5rem", borderBottom: "1px solid #f0f0f8", display: "flex", alignItems: "center", gap: ".75rem", flexWrap: "wrap", background: "#fafbff", flexShrink: 0 }}>
                      <span style={{ fontSize: ".7rem", fontWeight: 700, letterSpacing: ".06em", textTransform: "uppercase", color: "#bbb", whiteSpace: "nowrap" }}>By Duration:</span>
                      <div className="itp-cmp-dur-tabs">
                        {allDurLabels.map((lbl, i) => (
                          <button key={lbl}
                            className={`itp-cmp-dur-tab ${safeCmpDurIdx === i ? "active" : ""}`}
                            style={safeCmpDurIdx === i ? { background: theme.grad } : {}}
                            onClick={() => setCompareDurIdx(i)}>{lbl}</button>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="itp-cmp-body">
                    {displayPkgs.length < 1 ? (
                      <div className="itp-cmp-empty">Select packages above to compare them side by side.</div>
                    ) : (
                      <table className="itp-cmp-table">
                        <thead>
                          <tr>
                            <th>Feature</th>
                            {displayPkgs.map((p) => (
                              <th key={p._id} style={p._id === pkg?._id ? { background: theme.light } : {}}>
                                <span className="itp-cmp-th-pkg">{p.location || p.title || "Package"}</span>
                                <span className="itp-cmp-th-dur">{getPkgDur(p, safeCmpDurIdx)?.label || p.duration || "—"}</span>
                                {p._id === pkg?._id && <div className="itp-cmp-badge">Viewing</div>}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {pkgRows.map((row) => (
                            <tr key={row.label}>
                              <td>{row.label}</td>
                              {displayPkgs.map((p) => (
                                <td key={p._id} style={p._id === pkg?._id ? { background: theme.light } : {}}>
                                  {row.render(p)}
                                </td>
                              ))}
                            </tr>
                          ))}
                          <tr>
                            <td>Action</td>
                            {displayPkgs.map((p) => (
                              <td key={p._id} style={p._id === pkg?._id ? { background: theme.light } : {}}>
                                {p._id === pkg?._id ? (
                                  <span style={{ color: theme.primary, fontWeight: 700, fontSize: ".78rem" }}>✓ Current</span>
                                ) : (
                                  <Link
                                    to={`/package/${type}/${(p.location || "").toLowerCase().replace(/\s+/g, "-") || p._id}`}
                                    className="itp-cmp-action-link"
                                    style={{ color: theme.primary, borderColor: theme.primary }}
                                    onClick={() => setCompareOpen(false)}
                                  >View →</Link>
                                )}
                              </td>
                            ))}
                          </tr>
                        </tbody>
                      </table>
                    )}
                  </div>
                </>
              )}
            </div>
          </div>
        );
      })()}

      <Footer />
    </>
  );
}