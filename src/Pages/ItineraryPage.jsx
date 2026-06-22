// Pages/ItineraryPage.jsx
// Route: /package/:type/:location
// Bootstrap 5 loaded via CDN (inline — no separate CSS file needed)
// UI aligned to Style Context — coral-red #F04B5A primary, navy #1A2340 sidebar,
// amber #F97316 day badges, teal-green #10B981 success/checks, DM Sans + Cormorant Garamond

import React, { useState, useEffect, useRef, useCallback, useContext } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
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
import api from "../utils/api.js";

// ── Bootstrap CDN injector (runs once) ───────────────────────────────────────
(function injectBootstrap() {
  if (document.getElementById("bs5-css")) return;
  const link = document.createElement("link");
  link.id = "bs5-css";
  link.rel = "stylesheet";
  link.href = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css";
  link.integrity = "sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH";
  link.crossOrigin = "anonymous";
  document.head.appendChild(link);
  if (document.getElementById("bs5-js")) return;
  const script = document.createElement("script");
  script.id = "bs5-js";
  script.src = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js";
  script.integrity = "sha384-YvpcrYf0tY3lHB60NNkmXc4s9bIOgUxi8T/jzmAb45HFn/6f5m9VFvkF6C1B0e7";
  script.crossOrigin = "anonymous";
  document.body.appendChild(script);
})();

// ── Design tokens (from UI Style Context) ────────────────────────────────────
const BRAND = {
  primary:    "#F04B5A",   // coral-red — CTAs, icon backgrounds, active states
  primaryDark:"#D03848",   // hover state for primary
  navy:       "#1A2340",   // sidebar card bg, footer
  navyBorder: "rgba(255,255,255,0.10)", // dividers inside navy card
  success:    "#10B981",   // teal-green — checkmarks, success icons
  amber:      "#F97316",   // day badges, star ratings
  charcoal:   "#111827",   // headings
  bodyText:   "#374151",   // body copy
  meta:       "#6B7280",   // labels, secondary text
  placeholder:"#9CA3AF",   // input placeholder
  border:     "#E5E7EB",   // card/input borders
  borderLight:"#F3F4F6",   // row separators
  bgLight:    "#F5F6F8",   // page bg, section backgrounds
  bgCard:     "#fafbff",   // quick-stat chip background
  teal:       "#14B8A6",   // links, "send a message"
  // Gradient used only for multi-stop decorative moments (hero overlay, etc.)
  // All CTAs use flat primary, not gradients
};

// ── Cloudinary URL optimizer ──────────────────────────────────────────────────
const getCloudinaryUrl = (url, width = 900) => {
  if (!url || !url.startsWith("http")) return url;
  if (!url.includes("cloudinary.com")) return url;
  return url.replace("/upload/", `/upload/f_auto,q_auto,w_${width}/`);
};

// ── Lat/Lng extractor from Google Maps URL ────────────────────────────────────
export function extractLatLng(url) {
  if (!url) return null;
  const atMatch = url.match(/@(-?\d+\.?\d*),(-?\d+\.?\d*)/);
  if (atMatch) return { lat: parseFloat(atMatch[1]), lng: parseFloat(atMatch[2]) };
  const llMatch = url.match(/[?&](?:ll|center)=(-?\d+\.?\d*),(-?\d+\.?\d*)/);
  if (llMatch) return { lat: parseFloat(llMatch[1]), lng: parseFloat(llMatch[2]) };
  return null;
}

// ── WMO weather-code → emoji + label map ─────────────────────────────────────
const WMO_CODES = {
  0: { e: "☀️", l: "Clear sky" }, 1: { e: "🌤️", l: "Mostly clear" },
  2: { e: "⛅", l: "Partly cloudy" }, 3: { e: "☁️", l: "Overcast" },
  45: { e: "🌫️", l: "Foggy" }, 48: { e: "🌫️", l: "Icy fog" },
  51: { e: "🌦️", l: "Drizzle" }, 61: { e: "🌧️", l: "Light rain" },
  63: { e: "🌧️", l: "Moderate rain" }, 65: { e: "🌧️", l: "Heavy rain" },
  71: { e: "🌨️", l: "Light snow" }, 73: { e: "🌨️", l: "Snow" },
  75: { e: "❄️", l: "Heavy snow" }, 80: { e: "🌦️", l: "Rain showers" },
  95: { e: "⛈️", l: "Thunderstorm" }, 99: { e: "⛈️", l: "Thunderstorm" },
};
const wmoInfo = (code) => WMO_CODES[code] ?? { e: "🌡️", l: "Variable" };

// ── Best-visit-time lookup ────────────────────────────────────────────────────
const BEST_TIMES = {
  manali: "Mar – Jun, Sep – Oct", goa: "Nov – Feb", kerala: "Sep – Mar",
  rajasthan: "Oct – Mar", andaman: "Oct – May", shimla: "Mar – Jun, Sep – Nov",
  leh: "Jun – Sep", jaipur: "Oct – Mar", ooty: "Apr – Jun, Sep – Nov",
  coorg: "Oct – May", munnar: "Sep – May", varanasi: "Oct – Mar",
  agra: "Oct – Mar", delhi: "Oct – Mar", mumbai: "Nov – Feb",
};
const getBestTime = (loc) =>
  BEST_TIMES[(loc || "").toLowerCase()] ?? "Oct – Mar";

// ── useDestinationWeather hook ────────────────────────────────────────────────
function useDestinationWeather(lat, lng, locationName) {
  const [weather, setWeather] = useState(null);
  useEffect(() => {
    if (!lat || !lng) return;
    let cancelled = false;
    const load = async () => {
      try {
        const url =
          `https://api.open-meteo.com/v1/forecast` +
          `?latitude=${lat}&longitude=${lng}` +
          `&current=temperature_2m,relative_humidity_2m,weather_code,uv_index,wind_speed_10m` +
          `&timezone=auto&forecast_days=1`;
        const res = await fetch(url);
        const json = await res.json();
        const c = json.current;
        if (!cancelled) {
          setWeather({
            temp: Math.round(c.temperature_2m),
            humidity: c.relative_humidity_2m,
            uv: Math.round(c.uv_index ?? 0),
            wind: Math.round(c.wind_speed_10m),
            icon: wmoInfo(c.weather_code).e,
            desc: wmoInfo(c.weather_code).l,
            best: getBestTime(locationName),
          });
        }
      } catch { /* non-fatal */ }
    };
    load();
    return () => { cancelled = true; };
  }, [lat, lng, locationName]);
  return weather;
}

// ── Normalise the raw API package ─────────────────────────────────────────────
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
    const rawLabel = (typeof raw.durations === "string" && raw.durations) || raw.duration || "";
    const matchND = rawLabel.match(/(\d+)\s*N\s*\/?\s*(\d+)\s*D/i);
    const matchD = rawLabel.match(/^(\d+)\s*D$/i);
    const nights = matchND ? parseInt(matchND[1]) : null;
    const days = matchND ? parseInt(matchND[2]) : matchD ? parseInt(matchD[1]) : null;
    durations = [{
      label: rawLabel || (days ? `${days} Day${days > 1 ? "s" : ""}` : ""),
      nights, days,
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
    title: i === 0 ? `Arrival in ${locationTitle}` : i === numDays - 1 ? `Departure from ${locationTitle}` : `Explore ${locationTitle} — Day ${i + 1}`,
    description: i === 0
      ? `Welcome to ${locationTitle}! Transfer from airport/station to hotel. Check in, freshen up, and enjoy a welcome dinner.`
      : i === numDays - 1
        ? `Enjoy breakfast at the hotel. Check out and transfer to airport/station for your return journey.`
        : `Full day of guided sightseeing, local cuisine, and cultural experiences across the best of ${locationTitle}.`,
    activities: i === 0 ? ["Airport / station pickup", "Hotel check-in", "Orientation walk", "Welcome dinner"]
      : i === numDays - 1 ? ["Breakfast at hotel", "Check-out", "Transfer to departure point"]
        : ["Sightseeing tour", "Local street food", "Cultural experience", "Leisure time"],
    meals: i === 0 ? ["Dinner"] : i === numDays - 1 ? ["Breakfast"] : ["Breakfast", "Lunch", "Dinner"],
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
  <div style={{
    height: h, width: w, borderRadius: r, marginBottom: mb,
    background: "linear-gradient(90deg,#f0f0f0 25%,#e8e8e8 50%,#f0f0f0 75%)",
    backgroundSize: "400px 100%",
    animation: "itp-shimmer 1.4s infinite",
  }} />
);

// ─────────────────────────────────────────────────────────────────────────────
export default function ItineraryPage() {
  const { type, location } = useParams();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const locationTitle = location
    ? location.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")
    : "";
  const typeTitle = type
    ? type.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())
    : "Tour Package";

  // ── State ────────────────────────────────────────────────────────────────
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

  // ── Weather ──────────────────────────────────────────────────────────────
  const coords = extractLatLng(pkg?.locationurl);
  const weather = useDestinationWeather(coords?.lat, coords?.lng, locationTitle);

  // ── Countdown ────────────────────────────────────────────────────────────
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

  // ── Prefill form from logged-in user ─────────────────────────────────────
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("authToken") || sessionStorage.getItem("authToken");
        if (!token) return;
        const res = await api.get("/auth/profile", { headers: { Authorization: `Bearer ${token}` } });
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

  // ── Load package ──────────────────────────────────────────────────────────
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

  // ── Open compare modal ────────────────────────────────────────────────────
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

  // ── Derived values ────────────────────────────────────────────────────────
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
  const images = (pkg?.gallery?.length
    ? pkg.gallery.map((item) => (typeof item === "string" ? item : item.img)).filter(Boolean)
    : []
  ).map((url) => getCloudinaryUrl(url));

  // ── Open enquiry ──────────────────────────────────────────────────────────
  const openEnquiry = useCallback(() => {
    if (!user) {
      navigate(`/login?redirect=${encodeURIComponent(window.location.pathname)}`);
      return;
    }
    setEnquiryForm((f) => ({ ...f, travelDate, adults: travelers, travelers, destination: locationTitle }));
    setEnquiryDone(false);
    setEnquiryError(null);
    setEnquiryOpen(true);
  }, [user, navigate, travelDate, travelers, locationTitle]);

  // ── Submit enquiry ────────────────────────────────────────────────────────
  const handleEnquirySubmit = useCallback(async (e) => {
    e.preventDefault();
    setEnquiryLoading(true);
    setEnquiryError(null);
    const payload = {
      customer: {
        userId: user?._id || user?.id,
        fullName: enquiryForm.fullName, email: enquiryForm.email,
        mobile: enquiryForm.mobile, destination: enquiryForm.destination,
        adults: enquiryForm.adults, city: enquiryForm.city,
      },
      package: {
        packageId: pkg?._id,
        title: pkg?.title || `${locationTitle} ${typeTitle}`,
        type, location, locationTitle, typeTitle,
        rating: pkg?.rating, reviews: pkg?.reviews, groupSize: pkg?.groupSize,
      },
      duration: { label: selDur?.label, nights: selDur?.nights, days: selDur?.days },
      itinerary: itinerary.map((day) => ({
        day: day.day, title: day.title, description: day.description,
        activities: day.activities || [], meals: day.meals || [],
        accommodation: day.accommodation || null,
      })),
      inclusions, exclusions,
      pricing: {
        pricePerPerson: livePrice, adults: enquiryForm.adults,
        travelers: enquiryForm.adults, totalPrice: livePrice * enquiryForm.adults,
        currency: "INR", durationType: selDur?.label,
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

  // ── Global styles (Style Context aligned) ────────────────────────────────
  const globalStyles = `
    @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Cormorant+Garamond:wght@400;600;700&display=swap');
    *, *::before, *::after { box-sizing: border-box; }
    body { font-family: 'DM Sans', sans-serif; background: ${BRAND.bgLight}; }

    @keyframes itp-shimmer { 0%{background-position:-400px 0} 100%{background-position:400px 0} }
    @keyframes itp-up { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
    @keyframes itp-modal-in { from{opacity:0;transform:scale(.96)} to{opacity:1;transform:scale(1)} }

    /* Hero */
    .itp-hero { position:relative; height:68vh; min-height:460px; overflow:hidden; }
    .itp-hero-img { width:100%; height:100%; object-fit:cover; transition:transform 8s ease; }
    .itp-hero:hover .itp-hero-img { transform:scale(1.05); }
    .itp-hero-grad { position:absolute; inset:0; background:linear-gradient(180deg,rgba(10,10,30,.12) 0%,rgba(10,10,30,.82) 100%); }
    .itp-hero-content { position:absolute; inset:0; display:flex; justify-content:space-between; align-items:flex-end; padding:2.5rem; animation:itp-up .7s cubic-bezier(.4,0,.2,1) both; }
    .itp-hero-left { max-width:680px; }
    .itp-hero-title { font-family:'Cormorant Garamond',serif; font-size:clamp(2rem,5vw,3.4rem); font-weight:700; color:#fff; line-height:1.08; margin-bottom:.6rem; }

    /* Thumbnail strip */
    .itp-thumb { width:52px; height:38px; border-radius:7px; object-fit:cover; cursor:pointer; border:2px solid transparent; opacity:.6; transition:all .2s; }
    .itp-thumb.active { border-color:#fff; opacity:1; }

    /* Tabs */
    .itp-tab-btn { border:none; background:transparent; font-family:'DM Sans',sans-serif; font-size:.88rem; cursor:pointer; white-space:nowrap; padding:.5rem .9rem .6rem; transition:all .2s; border-bottom:3px solid transparent; color:${BRAND.meta}; font-weight:500; }
    .itp-tab-btn.active { color:${BRAND.charcoal}; font-weight:700; border-bottom-color:${BRAND.primary}; }

    /* Duration pills */
    .itp-dur-pill { border:2px solid ${BRAND.border}; background:#fff; font-weight:600; font-size:.82rem; color:${BRAND.meta}; cursor:pointer; transition:all .22s; border-radius:50px; padding:.45rem 1.1rem; display:inline-flex; flex-direction:column; align-items:center; gap:2px; }
    .itp-dur-pill:hover { border-color:#c0c8f0; color:${BRAND.charcoal}; }
    .itp-dur-pill.active { background:${BRAND.primary}; border-color:${BRAND.primary}; color:#fff; }

    /* Itinerary timeline */
    .itp-timeline { position:relative; padding-left:20px; }
    .itp-timeline::before { content:''; position:absolute; left:19px; top:0; bottom:0; width:2px; background:${BRAND.border}; border-radius:2px; }
    .itp-day-card { border:1px solid ${BRAND.border}; border-radius:12px; margin-bottom:10px; overflow:hidden; background:#fff; transition:box-shadow .2s; }
    .itp-day-card:hover { box-shadow:0 4px 18px rgba(240,75,90,.08); }
    .itp-day-card.open { box-shadow:0 4px 18px rgba(240,75,90,.10); }
    .itp-day-header { display:flex; align-items:center; gap:12px; padding:14px 16px; cursor:pointer; background:#fff; }
    .itp-day-badge { width:36px; height:36px; border-radius:9px; background:${BRAND.amber}; color:#fff; font-weight:700; font-size:.78rem; display:flex; align-items:center; justify-content:center; flex-shrink:0; }
    .itp-day-body { background:#fff; padding:0 16px; max-height:0; overflow:hidden; transition:max-height .35s ease, padding .25s ease; }
    .itp-day-body.open { max-height:600px; padding:0 16px 16px; }
    .itp-activity-pill { background:${BRAND.bgCard}; color:#3D52A0; font-size:.73rem; font-weight:500; border-radius:50px; padding:.3rem .85rem; border:1px solid #e4e8ff; }

    /* Gallery */
    .itp-gal-img { width:100%; object-fit:cover; border-radius:12px; cursor:pointer; transition:transform .3s,opacity .2s; aspect-ratio:4/3; }
    .itp-gal-img:hover { transform:scale(1.02); opacity:.9; }
    .itp-gal-first { aspect-ratio:16/7; }

    /* Sidebar booking card */
    .itp-booking-card { border-radius:16px; overflow:hidden; box-shadow:0 20px 50px rgba(0,0,0,.10); border:1px solid ${BRAND.border}; }
    .itp-booking-head { background:${BRAND.navy}; padding:1.5rem 1.5rem 1.25rem; }
    .itp-booking-body { background:#fff; padding:1.25rem 1.5rem 1.5rem; }
    .itp-booking-trust { background:${BRAND.bgCard}; border-top:1px solid ${BRAND.borderLight}; padding:.85rem 1.5rem; display:flex; flex-direction:column; gap:8px; }

    /* Checklist in navy head */
    .itp-checklist-item { display:flex; align-items:center; gap:8px; font-size:.82rem; color:rgba(255,255,255,.85); padding:.35rem 0; border-bottom:1px solid ${BRAND.navyBorder}; }
    .itp-checklist-item:last-child { border-bottom:none; }

    /* CTA buttons */
    .itp-btn-primary { background:${BRAND.primary}; border:none; color:#fff; font-weight:700; border-radius:50px; padding:.85rem 1.5rem; font-size:.95rem; cursor:pointer; transition:all .25s; font-family:'DM Sans',sans-serif; width:100%; display:flex; align-items:center; justify-content:center; gap:8px; }
    .itp-btn-primary:hover { background:${BRAND.primaryDark}; transform:translateY(-1px); box-shadow:0 6px 20px rgba(240,75,90,.30); }
    .itp-btn-primary:active { transform:scale(.98); }
    .itp-btn-outline { border:2px dashed ${BRAND.border}; background:transparent; color:#3D52A0; font-weight:600; font-size:.84rem; border-radius:50px; padding:.55rem 1rem; cursor:pointer; transition:all .2s; font-family:'DM Sans',sans-serif; width:100%; display:flex; align-items:center; justify-content:center; gap:6px; }
    .itp-btn-outline:hover { border-color:#3D52A0; }

    /* Form inputs */
    .itp-input { border:1px solid ${BRAND.border}; border-radius:8px; font-family:'DM Sans',sans-serif; font-size:.88rem; height:46px; padding:0 14px; width:100%; transition:border-color .2s; background:#fff; color:${BRAND.charcoal}; }
    .itp-input::placeholder { color:${BRAND.placeholder}; }
    .itp-input:focus { outline:none; border-color:${BRAND.primary}; box-shadow:0 0 0 3px rgba(240,75,90,.10); }
    .itp-input-group { position:relative; }
    .itp-input-group .itp-input { padding-left:36px; }
    .itp-input-icon { position:absolute; left:12px; top:50%; transform:translateY(-50%); color:${BRAND.placeholder}; pointer-events:none; }
    textarea.itp-input { height:auto; padding:10px 14px; resize:vertical; }
    textarea.itp-input:focus { outline:none; border-color:${BRAND.primary}; box-shadow:0 0 0 3px rgba(240,75,90,.10); }

    /* Contact chips */
    .itp-contact-chip { flex:1; display:flex; align-items:center; justify-content:center; gap:6px; border:1.5px solid ${BRAND.border}; border-radius:8px; color:${BRAND.meta}; text-decoration:none; padding:.5rem; font-size:.77rem; font-weight:600; transition:all .2s; background:#fff; }
    .itp-contact-chip:hover { border-color:${BRAND.primary}; color:${BRAND.primary}; }

    /* Quick-stat chips */
    .itp-stat-chip { display:flex; align-items:center; gap:8px; background:#fff; border:1px solid ${BRAND.border}; border-radius:10px; padding:.5rem .85rem; font-size:.84rem; }

    /* Highlight pills */
    .itp-highlight-pill { background:rgba(240,75,90,.06); color:${BRAND.primary}; font-size:.79rem; font-weight:600; border-radius:50px; padding:.3rem .85rem; border:1px solid rgba(240,75,90,.15); }

    /* Travelers counter */
    .itp-counter { display:flex; align-items:center; justify-content:space-between; border:1.5px solid ${BRAND.border}; border-radius:8px; padding:.45rem .85rem; background:#fff; }
    .itp-counter-btn { width:28px; height:28px; border:1px solid ${BRAND.border}; border-radius:6px; background:#fff; cursor:pointer; display:flex; align-items:center; justify-content:center; font-size:1.1rem; font-weight:400; color:${BRAND.meta}; transition:all .15s; }
    .itp-counter-btn:hover { border-color:${BRAND.primary}; color:${BRAND.primary}; }

    /* Compare & modal */
    .itp-modal-anim { animation:itp-modal-in .3s cubic-bezier(.4,0,.2,1) both; }
    .itp-scope-btn { border:none; background:transparent; font-size:.78rem; font-weight:600; cursor:pointer; color:#888; border-radius:50px; padding:.38rem 1.1rem; }
    .itp-scope-btn.active { background:#fff; color:${BRAND.charcoal}; box-shadow:0 2px 8px rgba(0,0,0,.1); }
    .itp-cmp-pkg-chip { border:2px solid ${BRAND.border}; background:#fff; font-size:.77rem; font-weight:600; color:${BRAND.meta}; cursor:pointer; transition:all .2s; border-radius:50px; padding:.35rem .9rem; }
    .itp-cmp-pkg-chip.selected { background:${BRAND.primary}; border-color:${BRAND.primary}; color:#fff; }
    .itp-cmp-pkg-chip:hover:not(.selected):not(:disabled) { border-color:#c0c8f0; color:${BRAND.charcoal}; }
    .itp-cmp-dur-tab { border:1.5px solid ${BRAND.border}; background:#fff; font-size:.75rem; font-weight:600; color:#888; cursor:pointer; transition:all .2s; border-radius:50px; padding:.3rem .9rem; }
    .itp-cmp-dur-tab.active { background:${BRAND.primary}; border-color:${BRAND.primary}; color:#fff; }

    /* Sticky mobile bar */
    .itp-sticky-bar { position:fixed; bottom:0; left:0; right:0; background:#fff; border-top:1px solid ${BRAND.border}; z-index:200; box-shadow:0 -6px 24px rgba(0,0,0,.10); display:none; }

    /* Breadcrumb */
    .itp-breadcrumb a { color:rgba(255,255,255,.6); text-decoration:none; }
    .itp-breadcrumb a:hover { color:#FFD080; }

    /* Typography helpers */
    .font-serif { font-family:'Cormorant Garamond',serif; }
    .navy { color:${BRAND.charcoal}; }

    /* Inclusions */
    .itp-incl-row { display:flex; align-items:flex-start; gap:8px; padding:.55rem 0; font-size:.84rem; color:${BRAND.bodyText}; border-bottom:1px solid ${BRAND.borderLight}; }
    .itp-incl-row:last-child { border-bottom:none; }

    @media(max-width:992px) {
      .itp-sticky-bar { display:flex; }
      body { padding-bottom:70px; }
      .itp-hero-content { flex-direction:column; align-items:flex-start; gap:1rem; }
    }
    @media(max-width:576px) {
      .itp-hero { height:52vh; }
      .itp-hero-content { padding:1.5rem; }
    }
  `;

  // ── Loading ───────────────────────────────────────────────────────────────
  if (loading) return (
    <>
      <style>{globalStyles}</style>
      <div className="container py-4" style={{ maxWidth: 1200 }}>
        <Skel h={420} r={20} mb={24} />
        <div className="row g-4">
          <div className="col-lg-8"><Skel h={32} w="55%" mb={12} /><Skel h={18} mb={8} /><Skel h={18} w="80%" mb={32} /><Skel h={220} r={16} /></div>
          <div className="col-lg-4"><Skel h={400} r={20} /></div>
        </div>
      </div>
    </>
  );

  // ── Error ─────────────────────────────────────────────────────────────────
  if (error) return (
    <>
      <style>{globalStyles}</style>
      <div className="d-flex flex-column align-items-center justify-content-center text-center py-5" style={{ minHeight: "60vh" }}>
        <div style={{ fontSize: "3.5rem", marginBottom: "1rem" }}>😕</div>
        <h2 className="font-serif fw-bold navy mb-2" style={{ fontSize: "2rem" }}>Package Not Found</h2>
        <p style={{ color: BRAND.meta, marginBottom: "1.5rem", maxWidth: 420 }}>{error}</p>
        <button onClick={() => navigate(`/tourcard/${type}`)}
          className="itp-btn-primary"
          style={{ width: "auto", padding: ".75rem 2rem" }}>
          ← Back to {typeTitle}
        </button>
      </div>
    </>
  );

  // ── Main render ───────────────────────────────────────────────────────────
  return (
    <>
      <style>{globalStyles}</style>

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="itp-hero">
        <img
          src={images[activeImg] || "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1200&q=80"}
          alt={locationTitle}
          className="itp-hero-img"
          onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1200&q=80"; }}
        />
        <div className="itp-hero-grad" />

        {/* Action buttons — top right */}
        <div className="position-absolute d-flex gap-2" style={{ top: "1.4rem", right: "1.5rem", zIndex: 10 }}>
          {[
            { icon: <FaArrowLeft size={14} />, title: "Back", onClick: () => navigate(`/tourcard/${type}`) },
            {
              icon: isFav ? <FaHeart size={14} style={{ color: BRAND.primary }} /> : <FaRegHeart size={14} />,
              title: "Wishlist", onClick: () => setIsFav(v => !v),
            },
            { icon: <FaBalanceScale size={14} />, title: "Compare", onClick: openCompare },
            {
              icon: <FaShare size={14} />, title: "Share",
              onClick: () => navigator.share?.({ title: `${locationTitle} ${typeTitle}`, url: window.location.href }),
            },
          ].map((btn, i) => (
            <button key={i} title={btn.title} onClick={btn.onClick}
              className="d-flex align-items-center justify-content-center border-0 text-white"
              style={{
                width: 40, height: 40, borderRadius: "50%",
                background: "rgba(255,255,255,.14)", backdropFilter: "blur(8px)",
                border: "1px solid rgba(255,255,255,.2)", cursor: "pointer", transition: "all .2s",
              }}
              onMouseOver={e => e.currentTarget.style.background = "rgba(255,255,255,.28)"}
              onMouseOut={e => e.currentTarget.style.background = "rgba(255,255,255,.14)"}
            >{btn.icon}</button>
          ))}
        </div>

        {/* Thumbnail strip */}
        {images.length > 1 && (
          <div className="position-absolute d-flex gap-2" style={{ bottom: "1.4rem", right: "1.5rem", zIndex: 10 }}>
            {images.slice(0, 4).map((img, i) => (
              <img key={i} src={getCloudinaryUrl(img, 120)} alt=""
                className={`itp-thumb ${i === activeImg ? "active" : ""}`}
                onClick={() => setActiveImg(i)}
                onError={(e) => { e.target.style.display = "none"; }} />
            ))}
          </div>
        )}

        {/* Hero content — left text + right weather card */}
        <div className="itp-hero-content">
          {/* LEFT */}
          <div className="itp-hero-left">
            <nav className="itp-breadcrumb d-flex align-items-center gap-1 flex-wrap mb-2"
              style={{ fontSize: ".77rem", color: "rgba(255,255,255,.6)" }}>
              <Link to="/">Home</Link><span style={{ opacity: .4 }}>›</span>
              <Link to="/services">Tours</Link><span style={{ opacity: .4 }}>›</span>
              <Link to={`/tourcard/${type}`}>{typeTitle}</Link><span style={{ opacity: .4 }}>›</span>
              <span className="text-white">{locationTitle}</span>
            </nav>

            <div className="d-inline-flex align-items-center gap-2 mb-2 px-3 py-1 rounded-pill"
              style={{
                background: "rgba(255,255,255,.12)", backdropFilter: "blur(8px)",
                border: "1px solid rgba(255,255,255,.2)", color: "#fff",
                fontSize: ".75rem", fontWeight: 600, letterSpacing: ".08em", textTransform: "uppercase",
              }}>
              <span>✈️</span><span>{typeTitle}</span>
            </div>

            <h1 className="itp-hero-title">{pkg?.title || `${locationTitle} ${typeTitle}`}</h1>

            <div className="d-flex flex-wrap gap-3">
              {[
                pkg?.location && { icon: <FaMapMarkerAlt size={11} />, text: pkg.location },
                selDur?.label && { icon: <FaClock size={11} />, text: selDur.label },
                pkg?.groupSize && { icon: <FaUsers size={11} />, text: pkg.groupSize },
                pkg?.rating && {
                  icon: <FaStar size={11} style={{ color: BRAND.amber }} />,
                  text: `${pkg.rating}${pkg?.reviews ? ` (${pkg.reviews} reviews)` : ""}`,
                },
              ].filter(Boolean).map((item, i) => (
                <div key={i} className="d-flex align-items-center gap-1"
                  style={{ color: "rgba(255,255,255,.85)", fontSize: ".87rem" }}>
                  {item.icon} {item.text}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Weather card */}
          <div className="d-none d-md-block" style={{ minWidth: 200, flexShrink: 0 }}>
            <div className="rounded-4 p-3" style={{
              background: "rgba(10,10,30,.52)", backdropFilter: "blur(10px)",
              border: "1px solid rgba(255,255,255,.18)", color: "#fff", minWidth: 200,
            }}>
              {weather ? (
                <>
                  <div style={{ fontSize: "0.85rem", opacity: .65, marginBottom: 8 }}>
                    📍 {locationTitle} · Weather
                  </div>
                  <div className="d-flex align-items-center gap-2 mb-2">
                    <span style={{ fontSize: "1.9rem", lineHeight: 1 }}>{weather.icon}</span>
                    <div>
                      <div className="font-serif fw-bold" style={{ fontSize: "1.6rem", lineHeight: 1 }}>{weather.temp}°C</div>
                      <div style={{ fontSize: ".7rem", opacity: .75, textTransform: "uppercase", letterSpacing: ".05em", marginTop: 2 }}>{weather.desc}</div>
                    </div>
                  </div>
                  <div className="d-flex gap-2 mb-1 flex-wrap" style={{ fontSize: ".7rem", opacity: .8 }}>
                    <span>💧 {weather.humidity}%</span>
                    <span>🌬️ {weather.wind} km/h</span>
                    <span>☀️ UV {weather.uv}</span>
                  </div>
                  <div style={{ fontSize: ".68rem", opacity: .65, borderTop: "1px solid rgba(255,255,255,.15)", paddingTop: 5, marginTop: 6 }}>
                    🗓️ Best time: {weather.best}
                  </div>
                </>
              ) : (
                <div>
                  <div style={{ fontSize: ".73rem", opacity: .6, marginBottom: 8 }}>Loading weather…</div>
                  {[70, 50, 80].map((w, i) => <Skel key={i} h={10} w={`${w}%`} mb={6} r={5} />)}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── BODY ─────────────────────────────────────────────────────────── */}
      <div className="container py-4" style={{ maxWidth: 1280 }}>
        <div className="row g-4 align-items-start">

          {/* ── MAIN COLUMN ─────────────────────────────────────────────── */}
          <div className="col-lg-8">

            {/* Duration pills */}
            {durationOptions.length > 0 && (
              <div className="mb-4">
                <div className="text-uppercase fw-bold mb-2"
                  style={{ fontSize: ".72rem", color: BRAND.placeholder, letterSpacing: ".07em" }}>
                  Select Package Duration
                </div>
                <div className="d-flex flex-wrap gap-2">
                  {durationOptions.map((dur, idx) => (
                    <button key={idx}
                      className={`itp-dur-pill ${selectedDurationIdx === idx ? "active" : ""}`}
                      onClick={() => { setSelectedDurationIdx(idx); setOpenDay(1); }}>
                      <span>{dur.label}</span>
                      {(dur.discountedPrice || dur.price) > 0 && (
                        <span style={{ fontSize: ".67rem", fontWeight: 400, opacity: selectedDurationIdx === idx ? .85 : .7 }}>
                          ₹{(dur.discountedPrice || dur.price).toLocaleString()}
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quick-stats row */}
            <div className="d-flex flex-wrap gap-2 mb-4">
              {[
                selDur?.label && { emoji: "📅", val: selDur.label, sub: "Duration" },
                pkg?.hotelRating && { emoji: "🏨", val: pkg.hotelRating, sub: "Hotels" },
                pkg?.groupSize && { emoji: "👥", val: pkg.groupSize, sub: "Group Size" },
                pkg?.destination && { emoji: "📍", val: pkg.destination, sub: "Region" },
              ].filter(Boolean).map((item, i) => (
                <div key={i} className="itp-stat-chip">
                  <span style={{ fontSize: "1.2rem" }}>{item.emoji}</span>
                  <div>
                    <div className="fw-bold" style={{ fontSize: ".84rem", color: BRAND.charcoal }}>{item.val}</div>
                    <div style={{ fontSize: ".7rem", color: BRAND.placeholder }}>{item.sub}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* About */}
            {(pkg?.description || pkg?.about) && (
              <div className="mb-4">
                <h2 className="font-serif fw-bold mb-2" style={{ fontSize: "1.6rem", color: BRAND.charcoal }}>About This Package</h2>
                <p style={{ fontSize: ".9rem", color: BRAND.bodyText, lineHeight: 1.8, marginBottom: 0 }}>
                  {pkg.description || pkg.about}
                </p>
              </div>
            )}

            {/* Highlights */}
            {pkg?.highlights?.length > 0 && (
              <div className="mb-4">
                <h2 className="font-serif fw-bold mb-2" style={{ fontSize: "1.4rem", color: BRAND.charcoal }}>Highlights</h2>
                <div className="d-flex flex-wrap gap-2">
                  {pkg.highlights.map((h, i) => (
                    <span key={i} className="itp-highlight-pill">✦ {h}</span>
                  ))}
                </div>
              </div>
            )}

            {/* Tabs */}
            <div style={{ borderBottom: `1px solid ${BRAND.border}`, marginBottom: "1.5rem" }}>
              <div className="d-flex gap-1 overflow-auto">
                {[
                  { key: "itinerary", label: "🗺️ Day-by-Day" },
                  { key: "inclusions", label: "✅ What's Included" },
                  { key: "gallery", label: "📸 Gallery" },
                ].map((t) => (
                  <button key={t.key}
                    className={`itp-tab-btn ${activeTab === t.key ? "active" : ""}`}
                    onClick={() => setActiveTab(t.key)}>
                    {t.label}
                  </button>
                ))}
              </div>
            </div>

            {/* ── ITINERARY tab ─────────────────────────────────────────── */}
            {activeTab === "itinerary" && (
              <div className="itp-timeline">
                {itinerary.length > 0 ? itinerary.map((day, i) => (
                  <div key={i} className={`itp-day-card ${openDay === day.day ? "open" : ""}`}
                    style={{ marginLeft: 20 }}>
                    <div className="itp-day-header"
                      onClick={() => setOpenDay(openDay === day.day ? null : day.day)}>
                      {/* Amber day badge — styled per context */}
                      <div className="itp-day-badge">D{day.day}</div>
                      <span className="fw-bold flex-grow-1" style={{ fontSize: ".95rem", color: BRAND.charcoal }}>
                        {day.title}
                      </span>
                      {day.meals?.length > 0 && (
                        <span className="me-2 d-none d-sm-inline" style={{ fontSize: ".72rem", color: BRAND.placeholder, whiteSpace: "nowrap" }}>
                          🍽 {day.meals.join(" · ")}
                        </span>
                      )}
                      {openDay === day.day
                        ? <FaChevronUp size={12} color={BRAND.placeholder} />
                        : <FaChevronDown size={12} color={BRAND.placeholder} />}
                    </div>
                    <div className={`itp-day-body ${openDay === day.day ? "open" : ""}`}>
                      {day.description && (
                        <p style={{ fontSize: ".87rem", color: BRAND.bodyText, lineHeight: 1.72, marginBottom: ".9rem" }}>
                          {day.description}
                        </p>
                      )}
                      {day.activities?.length > 0 && (
                        <div className="d-flex flex-wrap gap-1 mb-2">
                          {day.activities.map((a, j) => (
                            <span key={j} className="itp-activity-pill">✦ {a}</span>
                          ))}
                        </div>
                      )}
                      {day.accommodation && (
                        <div className="d-flex align-items-center gap-2"
                          style={{ fontSize: ".79rem", color: BRAND.meta, marginTop: 4 }}>
                          <span>🏨</span><span>{day.accommodation}</span>
                        </div>
                      )}
                    </div>
                  </div>
                )) : (
                  <div className="text-center p-4 rounded-3"
                    style={{ background: BRAND.bgCard, border: `1px dashed ${BRAND.border}`, color: BRAND.placeholder, marginLeft: 20 }}>
                    No itinerary details available for this package.
                  </div>
                )}
              </div>
            )}

            {/* ── INCLUSIONS tab ────────────────────────────────────────── */}
            {activeTab === "inclusions" && (
              <div className="row g-4">
                {[
                  {
                    title: "Included", items: inclusions,
                    icon: <FaCheck size={11} color={BRAND.success} />,
                    titleColor: "#2e7d32",
                  },
                  {
                    title: "Not Included", items: exclusions,
                    icon: <FaTimes size={11} color={BRAND.primary} />,
                    titleColor: "#c62828",
                  },
                ].map((col, ci) => (
                  <div key={ci} className="col-md-6">
                    <h4 className="d-flex align-items-center gap-2 mb-3"
                      style={{ color: col.titleColor, fontSize: ".9rem", fontWeight: 700 }}>
                      {col.icon} {col.title}
                    </h4>
                    {col.items.length > 0 ? col.items.map((item, i) => (
                      <div key={i} className="itp-incl-row">
                        <span style={{ flexShrink: 0, marginTop: 2 }}>{col.icon}</span>
                        {item}
                      </div>
                    )) : (
                      <div className="text-center p-3 rounded-3"
                        style={{ background: BRAND.bgCard, border: `1px dashed ${BRAND.border}`, color: BRAND.placeholder, fontSize: ".85rem" }}>
                        No {col.title.toLowerCase()} listed.
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* ── GALLERY tab ───────────────────────────────────────────── */}
            {activeTab === "gallery" && (
              images.length > 0 ? (
                <div className="row g-2">
                  {images.map((img, i) => (
                    <div key={i} className={i === 0 ? "col-12" : "col-6"}>
                      <img
                        src={getCloudinaryUrl(img, 800)} alt={`${locationTitle} ${i + 1}`}
                        className={`itp-gal-img w-100 ${i === 0 ? "itp-gal-first" : ""}`}
                        onClick={() => setActiveImg(i)}
                        onError={(e) => { e.target.style.display = "none"; }}
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center p-4 rounded-3"
                  style={{ background: BRAND.bgCard, border: `1px dashed ${BRAND.border}`, color: BRAND.placeholder }}>
                  No gallery images available.
                </div>
              )
            )}
          </div>

          {/* ── RIGHT: Booking / Enquiry card ────────────────────────────── */}
          <div className="col-lg-4">
            <div ref={bookingRef} className="itp-booking-card" style={{ position: "sticky", top: 80 }}>

              {/* ── Navy head — price + checklist ─────────────────────── */}
              <div className="itp-booking-head">
                {/* Price display */}
                <div style={{ marginBottom: "1rem" }}>
                  <div style={{ fontSize: ".75rem", color: "rgba(255,255,255,.55)", textTransform: "uppercase", letterSpacing: ".08em", marginBottom: 4 }}>
                    Starting from
                  </div>
                  <div className="font-serif fw-bold" style={{ fontSize: "2.6rem", color: "#fff", lineHeight: 1 }}>
                    {livePrice > 0 ? `₹${livePrice.toLocaleString()}` : "Price on request"}
                  </div>
                  <div style={{ fontSize: ".78rem", color: "rgba(255,255,255,.55)", marginTop: 4 }}>
                    per person{selDur?.label ? ` · ${selDur.label}` : ""} · all inclusive
                  </div>
                </div>

                {/* Inclusions checklist */}
                {inclusions.slice(0, 6).map((item, i) => (
                  <div key={i} className="itp-checklist-item">
                    <FaCheck size={10} color={BRAND.success} style={{ flexShrink: 0 }} />
                    <span>{item}</span>
                  </div>
                ))}
                {inclusions.length === 0 && (
                  <>
                    {["Accommodation included", "Daily breakfast", "Airport transfers", "All sightseeing", "Expert guide"].map((item, i) => (
                      <div key={i} className="itp-checklist-item">
                        <FaCheck size={10} color={BRAND.success} style={{ flexShrink: 0 }} />
                        <span>{item}</span>
                      </div>
                    ))}
                  </>
                )}
              </div>

              {/* ── White body — form ──────────────────────────────────── */}
              <div className="itp-booking-body">
                {/* Live price trend + countdown */}
                {livePrice > 0 && (
                  <div className="mb-3">
                    <div className="d-flex align-items-center gap-2 flex-wrap mb-2">
                      <span className="d-inline-flex align-items-center gap-1 rounded-pill px-2 py-1"
                        style={{
                          fontSize: ".72rem", fontWeight: 600,
                          background: trend === "rising" ? "#FFF3E0" : trend === "falling" ? "#E8F5E9" : BRAND.borderLight,
                          color: trend === "rising" ? "#E65100" : trend === "falling" ? "#2E7D32" : BRAND.meta,
                        }}>
                        {trend === "rising" ? "📈 Price rising" : trend === "falling" ? "📉 Price dropping" : "📊 Price stable"}
                      </span>
                    </div>
                    <div className="d-flex align-items-center gap-2 rounded-3 px-3 py-2"
                      style={{ background: "rgba(240,75,90,.06)", border: `1px solid rgba(240,75,90,.15)`, fontSize: ".78rem" }}>
                      <FaBolt color={BRAND.primary} size={11} />
                      <span style={{ color: BRAND.meta }}>Offer ends in</span>
                      <span className="fw-bold" style={{ color: BRAND.primary, fontVariantNumeric: "tabular-nums", fontSize: ".94rem" }}>
                        {String(countdown.h).padStart(2, "0")}:{String(countdown.m).padStart(2, "0")}:{String(countdown.s).padStart(2, "0")}
                      </span>
                    </div>
                  </div>
                )}

                {/* Login prompt */}
                {!user && (
                  <div className="d-flex align-items-center gap-2 rounded-3 p-3 mb-3"
                    style={{ background: "linear-gradient(135deg,#f0f4ff,#faf0ff)", border: "1px solid #d8deff", fontSize: ".8rem", color: BRAND.bodyText }}>
                    <FaLock color="#3D52A0" size={13} />
                    <span>
                      <Link to={`/login?redirect=${encodeURIComponent(window.location.pathname)}`}
                        style={{ color: "#3D52A0", fontWeight: 700, borderBottom: "1px solid #3D52A0", textDecoration: "none" }}>
                        Login
                      </Link>{" "}to submit an enquiry and get personalised quotes
                    </span>
                  </div>
                )}

                {/* Travel date */}
                <div className="mb-3">
                  <label className="d-block text-uppercase fw-bold mb-1"
                    style={{ fontSize: ".72rem", color: BRAND.placeholder, letterSpacing: ".06em" }}>
                    Travel Date
                  </label>
                  <input type="date" className="itp-input"
                    value={travelDate} min={new Date().toISOString().split("T")[0]}
                    onChange={(e) => setTravelDate(e.target.value)} />
                </div>

                {/* Travelers counter */}
                <div className="mb-3">
                  <label className="d-block text-uppercase fw-bold mb-1"
                    style={{ fontSize: ".72rem", color: BRAND.placeholder, letterSpacing: ".06em" }}>
                    Travelers
                  </label>
                  <div className="itp-counter">
                    <button type="button" className="itp-counter-btn"
                      onClick={() => setTravelers(t => Math.max(1, t - 1))}>−</button>
                    <span className="fw-bold" style={{ color: BRAND.charcoal }}>{travelers}</span>
                    <button type="button" className="itp-counter-btn"
                      onClick={() => setTravelers(t => Math.min(20, t + 1))}>+</button>
                  </div>
                </div>

                {/* Total */}
                {livePrice > 0 && (
                  <div className="d-flex justify-content-between align-items-center py-3 mb-3"
                    style={{ borderTop: `1px solid ${BRAND.borderLight}` }}>
                    <div>
                      <div style={{ fontSize: ".83rem", color: BRAND.meta }}>Estimated Total</div>
                      <div style={{ fontSize: ".72rem", color: BRAND.placeholder }}>
                        ₹{livePrice.toLocaleString()} × {travelers} {travelers === 1 ? "person" : "people"}
                      </div>
                    </div>
                    <div className="font-serif fw-bold" style={{ fontSize: "1.55rem", color: BRAND.primary }}>
                      ₹{totalPrice.toLocaleString()}
                    </div>
                  </div>
                )}

                {/* Primary CTA */}
                <button className="itp-btn-primary mb-2" onClick={openEnquiry}>
                  <FaEnvelope size={14} />
                  {user ? "Submit Enquiry" : "Login & Enquire"}
                </button>

                {/* Compare */}
                <button className="itp-btn-outline mb-2" onClick={openCompare}>
                  <FaBalanceScale size={13} /> Compare Durations &amp; Packages
                </button>

                {/* Trip planner */}
                <TripPlannerModal prefillDestination={locationTitle} prefillTripType={typeTitle} />

                {/* Contact chips */}
                <div className="d-flex gap-2 mt-3">
                  <a href="tel:+917888251550" className="itp-contact-chip">
                    <FaPhone size={11} /> Call Us
                  </a>
                  <a href="https://wa.me/917888251550" target="_blank" rel="noreferrer" className="itp-contact-chip">
                    <FaWhatsapp size={11} /> WhatsApp
                  </a>
                </div>
              </div>

              {/* ── Trust bar ─────────────────────────────────────────── */}
              <div className="itp-booking-trust">
                {[
                  { icon: <FaShieldAlt size={10} color={BRAND.success} />, text: "100% secure enquiry" },
                  { icon: "🔄", text: "Free cancellation up to 48 hours" },
                  { icon: "✅", text: "Expert responds within 30 minutes" },
                ].map((r, i) => (
                  <div key={i} className="itp-trust-row d-flex align-items-center gap-2"
                    style={{ fontSize: ".77rem", color: BRAND.meta }}>
                    <span>{r.icon}</span> {r.text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Sticky mobile bar ─────────────────────────────────────────────── */}
      <div className="itp-sticky-bar px-4 py-2 align-items-center justify-content-between">
        <div>
          <div className="font-serif fw-bold" style={{ fontSize: "1.45rem", color: BRAND.primary }}>
            {livePrice > 0 ? `₹${livePrice.toLocaleString()}` : "Price on request"}
          </div>
          <div style={{ fontSize: ".72rem", color: BRAND.meta }}>{selDur?.label || ""} · per person</div>
        </div>
        <button className="itp-btn-primary" style={{ width: "auto", padding: ".6rem 1.5rem", fontSize: ".88rem" }}
          onClick={() => bookingRef.current?.scrollIntoView({ behavior: "smooth", block: "center" })}>
          Enquire Now →
        </button>
      </div>

      {/* ══ ENQUIRY MODAL ═══════════════════════════════════════════════════ */}
      {enquiryOpen && (
        <div className="position-fixed d-flex align-items-end align-items-sm-center justify-content-center p-0 p-sm-3"
          style={{ inset: 0, background: "rgba(10,10,30,.55)", backdropFilter: "blur(6px)", zIndex: 1050 }}
          onClick={(e) => { if (e.target === e.currentTarget) setEnquiryOpen(false); }}>
          <div className="itp-modal-anim bg-white overflow-hidden d-flex flex-column"
            style={{ borderRadius: "20px", width: "100%", maxWidth: 580, maxHeight: "92vh", boxShadow: "0 32px 80px rgba(0,0,0,.22)" }}>

            {!enquiryDone ? (
              <>
                {/* Modal head — navy stripe */}
                <div className="shrink-0 p-4 pb-3"
                  style={{ borderBottom: `1px solid ${BRAND.borderLight}`, background: BRAND.navy }}>
                  <button onClick={() => setEnquiryOpen(false)}
                    className="position-absolute border-0 d-flex align-items-center justify-content-center"
                    style={{
                      top: "1.1rem", right: "1.1rem", width: 32, height: 32,
                      background: "rgba(255,255,255,.12)", borderRadius: "50%", cursor: "pointer", color: "#fff", zIndex: 1,
                    }}>
                    <FaTimes />
                  </button>
                  <div className="font-serif fw-bold" style={{ fontSize: "1.5rem", color: "#fff" }}>Submit Enquiry</div>
                  <div style={{ fontSize: ".82rem", color: "rgba(255,255,255,.55)" }}>
                    {pkg?.title || `${locationTitle} ${typeTitle}`}{selDur?.label ? ` · ${selDur.label}` : ""}
                  </div>
                </div>

                {/* Modal body */}
                <div className="p-4 overflow-auto flex-grow-1">
                  {/* Package summary */}
                  <div className="rounded-3 p-3 mb-4"
                    style={{ background: "linear-gradient(135deg,#f7f9ff,#fdf5ff)", border: "1px solid #e4e8ff" }}>
                    <div className="fw-bold mb-2" style={{ fontSize: ".92rem", color: BRAND.charcoal }}>📦 Package Summary</div>
                    {[
                      ["Destination", enquiryForm.destination || locationTitle],
                      ["Tour Type", typeTitle],
                      selDur?.label && ["Duration", selDur.label],
                      livePrice > 0 && ["Price / person", `₹${livePrice.toLocaleString()}`],
                      ["Adults", enquiryForm.adults],
                    ].filter(Boolean).map(([k, v], i) => (
                      <div key={i} className="d-flex justify-content-between"
                        style={{ fontSize: ".8rem", color: BRAND.meta, padding: ".2rem 0" }}>
                        <span>{k}</span>
                        <span className="fw-semibold" style={{ color: BRAND.charcoal }}>{v}</span>
                      </div>
                    ))}
                    {livePrice > 0 && (
                      <div className="d-flex justify-content-between align-items-center pt-2 mt-1"
                        style={{ borderTop: "1px dashed #d8deff" }}>
                        <span className="fw-bold" style={{ fontSize: ".82rem", color: BRAND.bodyText }}>Quoted Total</span>
                        <span className="font-serif fw-bold" style={{ fontSize: "1.45rem", color: BRAND.primary }}>
                          ₹{(livePrice * enquiryForm.adults).toLocaleString()}
                        </span>
                      </div>
                    )}
                  </div>

                  {enquiryError && (
                    <div className="rounded-3 p-3 mb-3"
                      style={{ background: "#FFF0F0", border: "1px solid #FFD0D0", fontSize: ".82rem", color: "#c62828" }}>
                      ⚠️ {enquiryError}
                    </div>
                  )}
                  <p style={{ fontSize: ".72rem", color: BRAND.placeholder, marginBottom: ".85rem" }}>
                    <span style={{ color: BRAND.primary }}>*</span> Required fields
                  </p>

                  <form id="enquiry-form" onSubmit={handleEnquirySubmit}>
                    <div className="row g-3">
                      {/* Full name */}
                      <div className="col-6">
                        <label className="d-block text-uppercase fw-bold mb-1"
                          style={{ fontSize: ".72rem", color: BRAND.placeholder, letterSpacing: ".06em" }}>
                          Full Name <span style={{ color: BRAND.primary }}>*</span>
                        </label>
                        <div className="itp-input-group">
                          <FaUser size={11} className="itp-input-icon" />
                          <input type="text" className="itp-input" placeholder="Your full name" required
                            value={enquiryForm.fullName}
                            onChange={(e) => setEnquiryForm(f => ({ ...f, fullName: e.target.value }))} />
                        </div>
                      </div>
                      {/* Mobile */}
                      <div className="col-6">
                        <label className="d-block text-uppercase fw-bold mb-1"
                          style={{ fontSize: ".72rem", color: BRAND.placeholder, letterSpacing: ".06em" }}>
                          Mobile <span style={{ color: BRAND.primary }}>*</span>
                        </label>
                        <div className="itp-input-group">
                          <FaMobileAlt size={11} className="itp-input-icon" />
                          <input type="tel" className="itp-input" placeholder="10-digit number" required
                            pattern="[0-9]{10}"
                            value={enquiryForm.mobile}
                            onChange={(e) => setEnquiryForm(f => ({ ...f, mobile: e.target.value }))} />
                        </div>
                      </div>
                      {/* Email */}
                      <div className="col-6">
                        <label className="d-block text-uppercase fw-bold mb-1"
                          style={{ fontSize: ".72rem", color: BRAND.placeholder, letterSpacing: ".06em" }}>
                          Email <span style={{ color: BRAND.primary }}>*</span>
                        </label>
                        <div className="itp-input-group">
                          <FaEnvelope size={11} className="itp-input-icon" />
                          <input type="email" className="itp-input" placeholder="you@email.com" required
                            value={enquiryForm.email}
                            onChange={(e) => setEnquiryForm(f => ({ ...f, email: e.target.value }))} />
                        </div>
                      </div>
                      {/* City */}
                      <div className="col-6">
                        <label className="d-block text-uppercase fw-bold mb-1"
                          style={{ fontSize: ".72rem", color: BRAND.placeholder, letterSpacing: ".06em" }}>
                          Your City
                        </label>
                        <div className="itp-input-group">
                          <FaCity size={11} className="itp-input-icon" />
                          <input type="text" className="itp-input" placeholder="Travelling from"
                            value={enquiryForm.city}
                            onChange={(e) => setEnquiryForm(f => ({ ...f, city: e.target.value }))} />
                        </div>
                      </div>
                      {/* Destination */}
                      <div className="col-12">
                        <label className="d-block text-uppercase fw-bold mb-1"
                          style={{ fontSize: ".72rem", color: BRAND.placeholder, letterSpacing: ".06em" }}>
                          Destination <span style={{ color: BRAND.primary }}>*</span>
                        </label>
                        <div className="itp-input-group">
                          <FaMapMarkerAlt size={11} className="itp-input-icon" />
                          <input type="text" className="itp-input" placeholder="Travel destination" required
                            value={enquiryForm.destination}
                            onChange={(e) => setEnquiryForm(f => ({ ...f, destination: e.target.value }))} />
                        </div>
                      </div>
                      {/* Travel date */}
                      <div className="col-6">
                        <label className="d-block text-uppercase fw-bold mb-1"
                          style={{ fontSize: ".72rem", color: BRAND.placeholder, letterSpacing: ".06em" }}>
                          Travel Date
                        </label>
                        <div className="itp-input-group">
                          <FaCalendarAlt size={11} className="itp-input-icon" />
                          <input type="date" className="itp-input"
                            min={new Date().toISOString().split("T")[0]}
                            value={enquiryForm.travelDate}
                            onChange={(e) => setEnquiryForm(f => ({ ...f, travelDate: e.target.value }))} />
                        </div>
                      </div>
                      {/* Adults counter */}
                      <div className="col-6">
                        <label className="d-block text-uppercase fw-bold mb-1"
                          style={{ fontSize: ".72rem", color: BRAND.placeholder, letterSpacing: ".06em" }}>
                          Adults <span style={{ color: BRAND.primary }}>*</span>
                        </label>
                        <div className="itp-counter">
                          <button type="button" className="itp-counter-btn"
                            onClick={() => setEnquiryForm(f => { const n = Math.max(1, f.adults - 1); return { ...f, adults: n, travelers: n }; })}>−</button>
                          <span className="fw-bold" style={{ color: BRAND.charcoal }}>{enquiryForm.adults}</span>
                          <button type="button" className="itp-counter-btn"
                            onClick={() => setEnquiryForm(f => { const n = Math.min(20, f.adults + 1); return { ...f, adults: n, travelers: n }; })}>+</button>
                        </div>
                      </div>
                      {/* Notes */}
                      <div className="col-12">
                        <label className="d-block text-uppercase fw-bold mb-1"
                          style={{ fontSize: ".72rem", color: BRAND.placeholder, letterSpacing: ".06em" }}>
                          Special Requests / Notes
                        </label>
                        <div className="itp-input-group" style={{ alignItems: "flex-start" }}>
                          <FaStickyNote size={11} className="itp-input-icon" style={{ top: 14, transform: "none" }} />
                          <textarea className="itp-input" rows={3}
                            placeholder="Dietary requirements, preferred hotels, special occasions…"
                            value={enquiryForm.notes}
                            onChange={(e) => setEnquiryForm(f => ({ ...f, notes: e.target.value }))} />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>

                {/* Modal footer */}
                <div className="px-4 py-3 shrink-0" style={{ borderTop: `1px solid ${BRAND.borderLight}` }}>
                  <button type="submit" form="enquiry-form"
                    className="itp-btn-primary"
                    disabled={enquiryLoading}>
                    {enquiryLoading ? "Submitting…" : "✉️  Submit Enquiry"}
                  </button>
                  <p className="text-center mt-2 mb-0" style={{ fontSize: ".73rem", color: BRAND.placeholder }}>
                    Your details are safe with us · No spam, ever
                  </p>
                </div>
              </>
            ) : (
              /* Success state */
              <div className="text-center p-5">
                <div style={{ fontSize: "3.5rem", marginBottom: "1rem" }}>🎉</div>
                <div className="font-serif fw-bold mb-2" style={{ fontSize: "1.7rem", color: BRAND.charcoal }}>Enquiry Submitted!</div>
                <p style={{ fontSize: ".86rem", color: BRAND.meta, lineHeight: 1.7, maxWidth: 380, margin: "0 auto 1.25rem" }}>
                  Our travel expert will call you within 30 minutes. A confirmation has been sent to{" "}
                  <strong style={{ color: BRAND.charcoal }}>{enquiryForm.email}</strong>.
                </p>
                <div className="d-inline-block rounded-3 px-4 py-2 mb-3"
                  style={{ background: BRAND.bgCard, fontSize: ".79rem", color: "#3D52A0", fontWeight: 600 }}>
                  📋 Ref: ENQ-{Date.now().toString(36).toUpperCase()}
                </div>
                <div className="d-flex align-items-center justify-content-center gap-2 mb-4"
                  style={{ fontSize: ".76rem", color: BRAND.placeholder }}>
                  <FaPrint size={11} /> Your full itinerary is saved — print option coming soon
                </div>
                <button className="itp-btn-primary" style={{ width: "auto", padding: ".75rem 2.5rem" }}
                  onClick={() => setEnquiryOpen(false)}>
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ══ COMPARE MODAL ════════════════════════════════════════════════════ */}
      {compareOpen && (() => {
        const getPkgDur = (p, idx) => {
          const durs = Array.isArray(p.durations) && p.durations.length ? p.durations : null;
          if (durs) return durs[Math.min(idx, durs.length - 1)];
          return { price: p.price, discountedPrice: null, label: p.duration || "—", days: p.durationDays, nights: null };
        };

        // ── Duration-compare mode ────────────────────────────────────────
        if (compareScope === "duration") {
          const cols = durationOptions;
          const rows = [
            { label: "Duration", render: (_p, d) => <strong style={{ color: BRAND.charcoal }}>{d?.label || "—"}</strong> },
            {
              label: "Price / person", render: (_p, d) => {
                const price = d?.discountedPrice || d?.price || 0;
                return (
                  <div>
                    <span className="font-serif fw-bold" style={{ fontSize: "1.3rem", color: BRAND.primary }}>
                      ₹{price.toLocaleString()}
                    </span>
                    {d?.discountedPrice && d?.price && (
                      <div style={{ fontSize: ".67rem", color: BRAND.placeholder, textDecoration: "line-through" }}>
                        ₹{d.price.toLocaleString()}
                      </div>
                    )}
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
            <div className="position-fixed d-flex align-items-center justify-content-center p-3"
              style={{ inset: 0, background: "rgba(10,10,30,.62)", backdropFilter: "blur(6px)", zIndex: 1060, overflowY: "auto" }}
              onClick={(e) => { if (e.target === e.currentTarget) setCompareOpen(false); }}>
              <div className="bg-white rounded-4 itp-modal-anim d-flex flex-column"
                style={{ width: "100%", maxWidth: 1000, maxHeight: "88vh", boxShadow: "0 40px 100px rgba(0,0,0,.28)", overflow: "hidden" }}>

                {/* Modal head — navy */}
                <div className="d-flex align-items-start justify-content-between p-4 pb-3 shrink-0 flex-wrap gap-2"
                  style={{ borderBottom: `1px solid ${BRAND.borderLight}`, background: BRAND.navy }}>
                  <div>
                    <div className="font-serif fw-bold" style={{ fontSize: "1.45rem", color: "#fff" }}>⚖️ Compare Durations</div>
                    <div style={{ fontSize: ".74rem", color: "rgba(255,255,255,.5)" }}>
                      {pkg?.title || `${locationTitle} ${typeTitle}`} — all available options
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-2 flex-wrap">
                    <button onClick={() => { setCompareScope("city"); setCompareSelected(pkg?._id ? [pkg._id] : []); }}
                      className="btn btn-sm rounded-pill fw-bold"
                      style={{ background: "rgba(255,255,255,.12)", color: "#fff", border: "1px solid rgba(255,255,255,.2)", fontSize: ".78rem" }}>
                      📍 {locationTitle} Packages
                    </button>
                    <button onClick={() => { setCompareScope("all"); setCompareSelected(pkg?._id ? [pkg._id] : []); }}
                      className="btn btn-sm rounded-pill"
                      style={{ background: "rgba(255,255,255,.08)", color: "rgba(255,255,255,.7)", border: "1px solid rgba(255,255,255,.15)", fontSize: ".78rem" }}>
                      🌏 All Cities
                    </button>
                    <button onClick={() => setCompareOpen(false)}
                      className="d-flex align-items-center justify-content-center border-0"
                      style={{ width: 32, height: 32, background: "rgba(255,255,255,.12)", borderRadius: "50%", cursor: "pointer", color: "#fff" }}>
                      <FaTimes />
                    </button>
                  </div>
                </div>

                {/* Compare table */}
                <div className="flex-grow-1 overflow-auto">
                  {cols.length === 0 ? (
                    <div className="text-center p-5" style={{ color: BRAND.meta }}>Only one duration available.</div>
                  ) : (
                    <table className="table table-bordered mb-0" style={{ minWidth: "100%", tableLayout: "auto" }}>
                      <thead>
                        <tr style={{ background: BRAND.bgCard }}>
                          <th style={{
                            width: 130, fontSize: ".7rem", fontWeight: 700, color: BRAND.placeholder,
                            textTransform: "uppercase", letterSpacing: ".06em", textAlign: "left",
                            background: BRAND.borderLight, position: "sticky", left: 0, zIndex: 3,
                          }}>Feature</th>
                          {cols.map((d, i) => (
                            <th key={i} className="text-center" style={{
                              minWidth: 170,
                              background: _safeIdx === i ? "rgba(240,75,90,.06)" : BRAND.bgCard,
                              fontSize: ".82rem", fontWeight: 700, color: BRAND.charcoal,
                            }}>
                              <span className="d-block">{d.label}</span>
                              <span className="d-block fw-normal" style={{ fontSize: ".72rem", color: BRAND.placeholder }}>
                                ₹{(d.discountedPrice || d.price || 0).toLocaleString()} / person
                              </span>
                              {_safeIdx === i && (
                                <span className="badge mt-1"
                                  style={{ background: "#E8F5E9", color: "#2E7D32", fontSize: ".67rem" }}>Selected</span>
                              )}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {rows.map((row) => (
                          <tr key={row.label}>
                            <td className="fw-semibold" style={{
                              fontSize: ".78rem", color: BRAND.meta,
                              background: BRAND.bgCard, position: "sticky", left: 0, zIndex: 2, whiteSpace: "nowrap",
                            }}>{row.label}</td>
                            {cols.map((d, i) => (
                              <td key={i} className="text-center" style={{
                                background: _safeIdx === i ? "rgba(240,75,90,.04)" : "transparent",
                                fontWeight: _safeIdx === i ? 600 : 400,
                                fontSize: ".84rem", color: BRAND.bodyText,
                              }}>
                                {row.render(pkg, d)}
                              </td>
                            ))}
                          </tr>
                        ))}
                        <tr>
                          <td className="fw-semibold" style={{
                            fontSize: ".78rem", color: BRAND.meta,
                            background: BRAND.bgCard, position: "sticky", left: 0,
                          }}>Select</td>
                          {cols.map((d, i) => (
                            <td key={i} className="text-center" style={{ background: _safeIdx === i ? "rgba(240,75,90,.04)" : "transparent" }}>
                              <button
                                onClick={() => { setSelectedDurationIdx(i); setCompareOpen(false); bookingRef.current?.scrollIntoView({ behavior: "smooth" }); }}
                                className="btn btn-sm rounded-pill fw-bold"
                                style={{
                                  background: _safeIdx === i ? BRAND.primary : BRAND.borderLight,
                                  color: _safeIdx === i ? "#fff" : BRAND.meta,
                                  border: "none", fontSize: ".76rem",
                                }}>
                                {_safeIdx === i ? "✓ Selected" : "Choose"}
                              </button>
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

        // ── City / All-compare mode ──────────────────────────────────────
        const visibleList = compareScope === "city"
          ? compareAllPkgs.filter((p) => (p.location || "").toLowerCase().replace(/\s+/g, "-") === (location || "").toLowerCase())
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
              return (
                <div>
                  <span className="font-serif fw-bold" style={{ fontSize: "1.3rem", color: BRAND.primary }}>
                    ₹{price.toLocaleString()}
                  </span>
                  {d?.discountedPrice && d?.price && (
                    <div style={{ fontSize: ".67rem", color: BRAND.placeholder, textDecoration: "line-through" }}>
                      ₹{d.price.toLocaleString()}
                    </div>
                  )}
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
          <div className="position-fixed d-flex align-items-end align-items-md-center justify-content-center"
            style={{ inset: 0, background: "rgba(10,10,30,.62)", backdropFilter: "blur(6px)", zIndex: 1060, overflowY: "auto", padding: "1rem" }}
            onClick={(e) => { if (e.target === e.currentTarget) setCompareOpen(false); }}>
            <div className="bg-white rounded-4 itp-modal-anim d-flex flex-column"
              style={{ width: "100%", maxWidth: 1000, maxHeight: "88vh", boxShadow: "0 40px 100px rgba(0,0,0,.28)", overflow: "hidden" }}>

              {/* Head — navy */}
              <div className="d-flex align-items-start justify-content-between p-4 pb-3 shrink-0 flex-wrap gap-2"
                style={{ borderBottom: `1px solid ${BRAND.borderLight}`, background: BRAND.navy }}>
                <div>
                  <div className="font-serif fw-bold" style={{ fontSize: "1.45rem", color: "#fff" }}>⚖️ Compare {typeTitle} Packages</div>
                  <div style={{ fontSize: ".74rem", color: "rgba(255,255,255,.5)" }}>
                    {compareScope === "city"
                      ? `${visibleList.length} package${visibleList.length !== 1 ? "s" : ""} in ${locationTitle}`
                      : `${visibleList.length} package${visibleList.length !== 1 ? "s" : ""} across all cities`}
                    {" · tap to select up to 3"}
                  </div>
                </div>
                <div className="d-flex align-items-center gap-2 flex-wrap">
                  <button onClick={() => setCompareScope("duration")}
                    className="btn btn-sm rounded-pill"
                    style={{ background: "rgba(255,255,255,.12)", color: "#fff", border: "1px solid rgba(255,255,255,.2)", fontSize: ".78rem" }}>
                    ← Duration Compare
                  </button>
                  <div className="d-flex rounded-pill p-1" style={{ background: "rgba(255,255,255,.08)" }}>
                    {[{ key: "city", label: `📍 ${locationTitle}` }, { key: "all", label: "🌏 All Cities" }].map(s => (
                      <button key={s.key}
                        className={`itp-scope-btn ${compareScope === s.key ? "active" : ""}`}
                        style={compareScope === s.key ? { background: "#fff", color: BRAND.charcoal } : { color: "rgba(255,255,255,.65)" }}
                        onClick={() => { setCompareScope(s.key); setCompareSelected(pkg?._id ? [pkg._id] : []); }}>
                        {s.label}
                      </button>
                    ))}
                  </div>
                  <button onClick={() => setCompareOpen(false)}
                    className="d-flex align-items-center justify-content-center border-0"
                    style={{ width: 32, height: 32, background: "rgba(255,255,255,.12)", borderRadius: "50%", cursor: "pointer", color: "#fff" }}>
                    <FaTimes />
                  </button>
                </div>
              </div>

              {compareLoading ? (
                <div className="p-4">
                  <Skel h={38} mb={10} r={50} w="280px" />
                  <Skel h={48} mb={8} r={10} />
                  <Skel h={48} mb={8} r={10} />
                  <Skel h={48} mb={8} r={10} />
                </div>
              ) : (
                <>
                  {/* Package picker */}
                  <div className="px-4 py-3 shrink-0" style={{ borderBottom: `1px solid ${BRAND.borderLight}` }}>
                    <div className="text-uppercase fw-bold mb-2"
                      style={{ fontSize: ".72rem", color: BRAND.placeholder, letterSpacing: ".07em" }}>
                      Choose packages to compare (up to 3)
                    </div>
                    {visibleList.length === 0 ? (
                      <div style={{ fontSize: ".82rem", color: BRAND.placeholder }}>
                        {compareScope === "city"
                          ? `No packages found for ${locationTitle}. Switch to "🌏 All Cities".`
                          : "No packages found for this tour type."}
                      </div>
                    ) : (
                      <div className="d-flex flex-wrap gap-2">
                        {visibleList.map((p) => {
                          const isSelected = effectiveSelected.includes(p._id);
                          const isCurrent = p._id === pkg?._id;
                          const label = compareScope === "all"
                            ? (p.location || p.title || "Package")
                            : (p.duration || p.durations?.[0]?.label || p.title || p.location || "Package");
                          return (
                            <button key={p._id}
                              className={`itp-cmp-pkg-chip ${isSelected ? "selected" : ""}`}
                              onClick={() => {
                                setCompareSelected((prev) => {
                                  const cur = prev.length === 0 && pkg?._id ? [pkg._id] : prev;
                                  if (cur.includes(p._id)) return cur.filter(x => x !== p._id);
                                  if (cur.length >= 3) return cur;
                                  return [...cur, p._id];
                                });
                              }}
                              disabled={!isSelected && effectiveSelected.length >= 3}>
                              {isSelected && <FaCheck size={9} style={{ marginRight: 4 }} />}
                              {label}
                              {isCurrent && <span style={{ fontSize: ".64rem", opacity: .65 }}> (current)</span>}
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>

                  {/* Duration tabs */}
                  {displayPkgs.length > 0 && allDurLabels.length > 1 && (
                    <div className="px-4 py-2 d-flex align-items-center gap-2 flex-wrap shrink-0"
                      style={{ borderBottom: `1px solid ${BRAND.borderLight}`, background: BRAND.bgCard }}>
                      <span className="text-uppercase fw-bold"
                        style={{ fontSize: ".7rem", color: BRAND.placeholder, letterSpacing: ".06em", whiteSpace: "nowrap" }}>
                        By Duration:
                      </span>
                      {allDurLabels.map((lbl, i) => (
                        <button key={lbl}
                          className={`itp-cmp-dur-tab ${safeCmpDurIdx === i ? "active" : ""}`}
                          onClick={() => setCompareDurIdx(i)}>{lbl}</button>
                      ))}
                    </div>
                  )}

                  {/* Compare table */}
                  <div className="flex-grow-1 overflow-auto">
                    {displayPkgs.length < 1 ? (
                      <div className="text-center p-5" style={{ color: BRAND.meta }}>
                        Select packages above to compare them side by side.
                      </div>
                    ) : (
                      <table className="table table-bordered mb-0" style={{ minWidth: "100%", tableLayout: "auto" }}>
                        <thead>
                          <tr>
                            <th style={{
                              width: 130, fontSize: ".7rem", fontWeight: 700, color: BRAND.placeholder,
                              textTransform: "uppercase", letterSpacing: ".06em", textAlign: "left",
                              background: BRAND.borderLight, position: "sticky", left: 0, zIndex: 3,
                            }}>Feature</th>
                            {displayPkgs.map((p) => (
                              <th key={p._id} className="text-center" style={{
                                minWidth: 170,
                                background: p._id === pkg?._id ? "rgba(240,75,90,.06)" : BRAND.bgCard,
                                fontSize: ".82rem", fontWeight: 700, color: BRAND.charcoal,
                              }}>
                                <span className="d-block">{p.location || p.title || "Package"}</span>
                                <span className="d-block fw-normal" style={{ fontSize: ".72rem", color: BRAND.placeholder }}>
                                  {getPkgDur(p, safeCmpDurIdx)?.label || p.duration || "—"}
                                </span>
                                {p._id === pkg?._id && (
                                  <span className="badge mt-1" style={{ background: "#E8F5E9", color: "#2E7D32", fontSize: ".67rem" }}>
                                    Viewing
                                  </span>
                                )}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {pkgRows.map((row) => (
                            <tr key={row.label}>
                              <td className="fw-semibold" style={{
                                fontSize: ".78rem", color: BRAND.meta,
                                background: BRAND.bgCard, position: "sticky", left: 0, zIndex: 2, whiteSpace: "nowrap",
                              }}>{row.label}</td>
                              {displayPkgs.map((p) => (
                                <td key={p._id} className="text-center" style={{
                                  background: p._id === pkg?._id ? "rgba(240,75,90,.04)" : "transparent",
                                  fontSize: ".84rem", color: BRAND.bodyText,
                                }}>
                                  {row.render(p)}
                                </td>
                              ))}
                            </tr>
                          ))}
                          <tr>
                            <td className="fw-semibold" style={{
                              fontSize: ".78rem", color: BRAND.meta,
                              background: BRAND.bgCard, position: "sticky", left: 0,
                            }}>Action</td>
                            {displayPkgs.map((p) => (
                              <td key={p._id} className="text-center"
                                style={{ background: p._id === pkg?._id ? "rgba(240,75,90,.04)" : "transparent" }}>
                                {p._id === pkg?._id ? (
                                  <span className="fw-bold" style={{ color: BRAND.primary, fontSize: ".78rem" }}>✓ Current</span>
                                ) : (
                                  <Link
                                    to={`/package/${type}/${(p.location || "").toLowerCase().replace(/\s+/g, "-") || p._id}`}
                                    className="btn btn-sm rounded-pill fw-bold"
                                    style={{ color: BRAND.primary, border: `1.5px solid ${BRAND.primary}`, background: "transparent", fontSize: ".78rem" }}
                                    onClick={() => setCompareOpen(false)}>
                                    View →
                                  </Link>
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
    </>
  );
}