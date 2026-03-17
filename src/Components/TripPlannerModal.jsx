import { useState, useRef, useEffect, useCallback } from 'react';
import {
  searchDestinations,
  searchAreas,
  getPlaceDetails,
  highlightMatch,
} from '../Data/destination.js';

const TRIP_TYPES = ['Adventure', 'Relaxation', 'Cultural', 'Family', 'Honeymoon', 'Solo'];
const BUDGETS = [
  { value: 'budget',   label: 'Budget',   range: '₹10,000 – ₹25,000' },
  { value: 'standard', label: 'Standard', range: '₹25,000 – ₹60,000' },
  { value: 'premium',  label: 'Premium',  range: '₹60,000 – ₹1,20,000' },
  { value: 'luxury',   label: 'Luxury',   range: '₹1,20,000+' },
];

// ── Async autocomplete hook ────────────────────────────────────────────────────
function useAutocomplete(fetchFn) {
  const [value,       setValue]       = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [open,        setOpen]        = useState(false);
  const [focusIdx,    setFocusIdx]    = useState(-1);
  const [loading,     setLoading]     = useState(false);
  const timer = useRef(null);

  const handleInput = useCallback(async (val) => {
    setValue(val);
    setFocusIdx(-1);
    clearTimeout(timer.current);
    if (!val || val.trim().length < 2) {
      setSuggestions([]); setOpen(false); return;
    }
    timer.current = setTimeout(async () => {
      setLoading(true);
      const results = await fetchFn(val);
      setSuggestions(results);
      setOpen(results.length > 0);
      setLoading(false);
    }, 220);
  }, [fetchFn]);

  const pick  = useCallback((name) => {
    setValue(name); setOpen(false); setFocusIdx(-1); setSuggestions([]);
  }, []);

  const clear = useCallback(() => {
    setValue(''); setSuggestions([]); setOpen(false);
  }, []);

  const handleKey = useCallback((e, onEnterFree) => {
    if (!open) return;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setFocusIdx(i => Math.min(i + 1, suggestions.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setFocusIdx(i => Math.max(i - 1, 0));
    } else if (e.key === 'Enter') {
      if (focusIdx >= 0 && suggestions[focusIdx]) {
        pick(suggestions[focusIdx].name ?? suggestions[focusIdx]);
      } else {
        setOpen(false);
        onEnterFree?.();
      }
    } else if (e.key === 'Escape') {
      setOpen(false);
    }
  }, [open, focusIdx, suggestions, pick]);

  return {
    value, setValue, suggestions, open, setOpen,
    loading, focusIdx, handleInput, pick, clear, handleKey,
  };
}

// ── Main Modal ─────────────────────────────────────────────────────────────────
export default function TripPlannerModal({ open, onClose, onItinerary }) {
  const [step,        setStep]        = useState(1);
  const [travelers,   setTravelers]   = useState(2);
  const [tripType,    setTripType]    = useState('');
  const [budget,      setBudget]      = useState('');
  const [checkin,     setCheckin]     = useState('');
  const [checkout,    setCheckout]    = useState('');
  const [destLocation,setDestLocation]= useState(null); // lat,lng for area bias
  const [loading,     setLoading]     = useState(false);
  const [errors,      setErrors]      = useState({});

  const dest = useAutocomplete(useCallback(q => searchDestinations(q), []));
  const area = useAutocomplete(
    useCallback(q => searchAreas(q, destLocation), [destLocation])
  );

  const showArea = dest.value.trim().length >= 2;

  const nights = (() => {
    if (!checkin || !checkout) return null;
    const d = Math.round((new Date(checkout) - new Date(checkin)) / 86400000);
    return d > 0 ? d : null;
  })();

  // When user picks a destination — fetch lat/lng to bias area search
  const handlePickDest = useCallback(async (suggestion) => {
    dest.pick(suggestion.name);
    area.clear();
    setDestLocation(null);
    if (suggestion.placeId) {
      const details = await getPlaceDetails(suggestion.placeId);
      if (details?.location) setDestLocation(details.location);
    }
  }, [dest, area]);

  // Reset area when destination text changes
  useEffect(() => {
    area.clear();
    setDestLocation(null);
  }, [dest.value]); // eslint-disable-line

  // Close dropdowns on outside click
  useEffect(() => {
    const handler = (e) => {
      if (!e.target.closest('.ac-wrap')) {
        dest.setOpen(false);
        area.setOpen(false);
      }
    };
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, []); // eslint-disable-line

  if (!open) return null;

  const today = new Date().toISOString().split('T')[0];

  function validate(s) {
    const err = {};
    if (s === 1) {
      if (!dest.value.trim()) err.destination = 'Please enter a destination';
      if (!checkin)           err.checkin      = 'Select check-in date';
      if (!checkout)          err.checkout     = 'Select check-out date';
      if (checkin && checkout && nights === null)
        err.checkout = 'Check-out must be after check-in';
    }
    if (s === 2 && !tripType) err.tripType = 'Please pick a trip type';
    if (s === 3 && !budget)   err.budget   = 'Please select a budget';
    return err;
  }

  function next() {
    const err = validate(step);
    if (Object.keys(err).length) { setErrors(err); return; }
    setErrors({});
    setStep(s => s + 1);
  }

  async function submit() {
    const err = validate(3);
    if (Object.keys(err).length) { setErrors(err); return; }
    setErrors({});
    setLoading(true);
    try {
      const res = await api.get('/plan-trip', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          destination: dest.value.trim(),
          area:        area.value.trim(),
          checkin, checkout, travelers, tripType, budget,
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        setErrors({ api: data.errors?.join(', ') || data.error || 'Something went wrong' });
        setLoading(false);
        return;
      }
      onItinerary(data.itinerary);
      onClose();
    } catch {
      setErrors({ api: 'Network error. Is the server running on port 5000?' });
      setLoading(false);
    }
  }

  // ── Dropdown ──────────────────────────────────────────────────────────────
  function Dropdown({ ac, onPick }) {
    if (!ac.open || !ac.suggestions.length) return null;
    return (
      <div className="dropdown">
        {ac.suggestions.map((s, i) => {
          const name = typeof s === 'string' ? s : s.name;
          const sub  = typeof s === 'string' ? null : s.sub;
          return (
            <div
              key={i}
              className={`dropdown-item${i === ac.focusIdx ? ' focused' : ''}`}
              onMouseDown={() => onPick ? onPick(s) : ac.pick(name)}
            >
              <span className="dd-icon">{sub ? '📍' : '🗺'}</span>
              <span>
                <span dangerouslySetInnerHTML={{ __html: highlightMatch(name, ac.value) }} />
                {sub && <div className="dd-sub">{sub}</div>}
              </span>
            </div>
          );
        })}
        <div className="dd-kbhint">
          <span><kbd>↑↓</kbd> navigate</span>
          <span><kbd>Enter</kbd> select</span>
          <span><kbd>Esc</kbd> close</span>
        </div>
      </div>
    );
  }

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-box" onClick={e => e.stopPropagation()}>

        {/* Header */}
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:4 }}>
          <div>
            <div style={{ fontSize:'0.72rem', fontWeight:600, letterSpacing:'0.12em', textTransform:'uppercase', color:'var(--saffron)', marginBottom:6 }}>
              AI-Powered
            </div>
            <h2 style={{ fontFamily:'Cormorant Garamond, serif', fontSize:'2rem', fontWeight:700, color:'var(--ink)' }}>
              Plan Your Trip ✨
            </h2>
          </div>
          <button
            onClick={onClose}
            style={{ background:'none', border:'none', fontSize:'1.4rem', cursor:'pointer', color:'var(--muted)', marginTop:4 }}
          >×</button>
        </div>

        {/* Progress */}
        <div className="progress">
          {[1,2,3].map(s => (
            <div key={s} className={`progress-seg${s <= step ? ' done' : ''}`} />
          ))}
        </div>

        {/* ── STEP 1 ── */}
        {step === 1 && (
          <div className="step-enter">
            <h3 style={{ fontFamily:'Cormorant Garamond, serif', fontSize:'1.35rem', fontWeight:600, marginBottom:20 }}>
              Where do you want to go?
            </h3>

            {/* Destination */}
            <div style={{ marginBottom:18 }}>
              <div className="field-label">
                Destination
                <span className="field-hint">type or pick a suggestion</span>
              </div>
              <div className="ac-wrap">
                <div className="ac-inner">
                  <input
                    className="input"
                    type="text"
                    placeholder="e.g. Goa, Kerala, Bali, Manali…"
                    autoComplete="off"
                    value={dest.value}
                    onChange={e => dest.handleInput(e.target.value)}
                    onFocus={() => { if (!dest.value) dest.handleInput(''); }}
                    onKeyDown={e => dest.handleKey(e)}
                  />
                  {dest.loading && (
                    <span style={{ position:'absolute', right:12, top:'50%', transform:'translateY(-50%)', fontSize:'0.7rem', color:'var(--muted)' }}>…</span>
                  )}
                  {dest.value && !dest.loading && (
                    <button className="clear-btn show" onClick={dest.clear} tabIndex={-1}>✕</button>
                  )}
                </div>
                <Dropdown ac={dest} onPick={handlePickDest} />
              </div>
              {errors.destination && <div className="error-msg">{errors.destination}</div>}
            </div>

            {/* Area within destination */}
            <div className={`area-wrap${showArea ? ' visible' : ''}`}>
              <div style={{ marginBottom:0 }}>
                <div className="field-label">
                  Where in{' '}
                  <strong style={{ color:'var(--saffron-dark)' }}>{dest.value || '—'}</strong>?
                  <span className="field-hint">optional · type or pick</span>
                </div>
                <div className="ac-wrap">
                  <div className="ac-inner">
                    <input
                      className="input"
                      type="text"
                      placeholder="Specific area, beach, neighbourhood…"
                      autoComplete="off"
                      value={area.value}
                      onChange={e => area.handleInput(e.target.value)}
                      onKeyDown={e => area.handleKey(e)}
                    />
                    {area.value && (
                      <button className="clear-btn show" onClick={area.clear} tabIndex={-1}>✕</button>
                    )}
                  </div>
                  <Dropdown ac={area} />
                </div>
              </div>
            </div>

            {/* Dates */}
            <div className="date-row">
              <div>
                <div className="field-label">Check-in</div>
                <input
                  className="input"
                  type="date"
                  min={today}
                  value={checkin}
                  onChange={e => {
                    setCheckin(e.target.value);
                    if (checkout && checkout < e.target.value) setCheckout('');
                  }}
                />
                {errors.checkin && <div className="error-msg">{errors.checkin}</div>}
              </div>
              <div>
                <div className="field-label">Check-out</div>
                <input
                  className="input"
                  type="date"
                  min={checkin || today}
                  value={checkout}
                  onChange={e => setCheckout(e.target.value)}
                />
                {errors.checkout && <div className="error-msg">{errors.checkout}</div>}
              </div>
            </div>
            <div className="nights-info">
              {nights && <span className="nights-badge">{nights} night{nights > 1 ? 's' : ''}</span>}
            </div>

            <div className="footer-btns">
              <button className="btn-primary" style={{ flex:1 }} onClick={next}>
                Continue →
              </button>
            </div>
          </div>
        )}

        {/* ── STEP 2 ── */}
        {step === 2 && (
          <div className="step-enter">
            <h3 style={{ fontFamily:'Cormorant Garamond, serif', fontSize:'1.35rem', fontWeight:600, marginBottom:20 }}>
              Who's traveling?
            </h3>

            <div className="range-wrap">
              <span className="range-label">
                Travelers: <span className="range-val">{travelers}</span>
              </span>
              <input
                type="range" min={1} max={20} value={travelers}
                onChange={e => setTravelers(+e.target.value)}
              />
            </div>

            <div className="field-label" style={{ marginBottom:10 }}>Trip Type</div>
            <div className="pills">
              {TRIP_TYPES.map(t => (
                <button
                  key={t}
                  className={`pill${tripType === t ? ' active' : ''}`}
                  onClick={() => setTripType(t)}
                >{t}</button>
              ))}
            </div>
            {errors.tripType && (
              <div className="error-msg" style={{ marginTop:6 }}>{errors.tripType}</div>
            )}

            <div className="footer-btns">
              <button className="btn-back" onClick={() => setStep(1)}>← Back</button>
              <button className="btn-primary" onClick={next}>Continue →</button>
            </div>
          </div>
        )}

        {/* ── STEP 3 ── */}
        {step === 3 && (
          <div className="step-enter">
            <h3 style={{ fontFamily:'Cormorant Garamond, serif', fontSize:'1.35rem', fontWeight:600, marginBottom:20 }}>
              What's your budget?
            </h3>

            {BUDGETS.map(b => (
              <div
                key={b.value}
                className={`budget-card${budget === b.value ? ' active' : ''}`}
                onClick={() => setBudget(b.value)}
              >
                <div className="budget-radio"><div className="budget-dot" /></div>
                <span className="budget-label">{b.label} &nbsp;·&nbsp; {b.range}</span>
              </div>
            ))}
            {errors.budget && <div className="error-msg">{errors.budget}</div>}
            {errors.api && (
              <div className="error-msg" style={{ marginTop:8, padding:'10px 14px', background:'#FEF2F2', borderRadius:8 }}>
                {errors.api}
              </div>
            )}

            <div className="footer-btns">
              <button className="btn-back" onClick={() => setStep(2)}>← Back</button>
              <button className="btn-primary" onClick={submit} disabled={loading}>
                {loading
                  ? <><div className="spinner" /> Crafting your trip…</>
                  : 'Get My Itinerary ✨'}
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}