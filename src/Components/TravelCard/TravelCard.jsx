import React from "react";

export default function TravelCard({ card, onBook }) {
  return (
    <div style={styles.card}>
      <img src={card.image} alt={card.title} style={styles.img} />
      <div style={styles.body}>
        <div style={{ fontWeight:800 }}>{card.title}</div>
        <div style={{ opacity:.7, fontSize:14, margin:"6px 0" }}>{card.subtitle}</div>
        <div style={{ fontWeight:700, marginBottom:8 }}>₹ {card.pricePerDay}/day</div>
        <button style={styles.btn} onClick={() => onBook(card)}>Book Now</button>
      </div>
    </div>
  );
}

const styles = {
  card: { width:260, borderRadius:12, overflow:"hidden", boxShadow:"0 8px 22px rgba(0,0,0,.12)", background:"#fff" },
  img: { width:"100%", height:160, objectFit:"cover" },
  body: { padding:12 },
  btn: { padding:"10px 12px", background:"#007bff", color:"#fff", border:"none", borderRadius:8, cursor:"pointer", fontWeight:700 }
};
