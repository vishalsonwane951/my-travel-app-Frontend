import{s as v,t as w,o as i,j as e,L as N,O as k,p as S}from"./index-BS50Ti_m.js";function z({images:r}){const[n,o]=i.useState(0);return i.useEffect(()=>{const s=setInterval(()=>{o(l=>(l+1)%r.length)},4e3);return()=>clearInterval(s)},[r.length]),e.jsxs("div",{style:{position:"relative",width:"100%",paddingTop:"75%",borderRadius:"12px",overflow:"hidden"},children:[e.jsx("img",{src:r[n],alt:`Slide ${n+1}`,loading:"lazy",style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover"}}),e.jsx("button",{onClick:()=>o(s=>(s-1+r.length)%r.length),style:h("left"),children:"‹"}),e.jsx("button",{onClick:()=>o(s=>(s+1)%r.length),style:h("right"),children:"›"}),e.jsx("div",{style:C,children:r.map((s,l)=>e.jsx("div",{onClick:()=>o(l),style:{...F,backgroundColor:l===n?"white":"rgba(255,255,255,0.5)"}},l))})]})}const h=r=>({position:"absolute",top:"50%",[r]:"10px",transform:"translateY(-50%)",backgroundColor:"rgba(0,0,0,0.5)",color:"white",border:"none",padding:"8px 12px",borderRadius:"50%",cursor:"pointer",zIndex:2}),C={position:"absolute",bottom:"10px",width:"100%",display:"flex",justifyContent:"center",gap:"8px",zIndex:2},F={width:"10px",height:"10px",borderRadius:"50%",border:"1px solid white",cursor:"pointer"},g={essential:{label:"Essentials",url:"/maharashtra-cards/essential"},travellers:{label:"Travellers' Choice",url:"/travellers-choice/gettraveller"},family:{label:"Family friendly",url:"/family-friendly/getfamily"},hidden:{label:"Hidden gems",url:"/hidden-games/gethidden-games"},Museums:{label:"Museums",url:"/maharashtra-museums/getallmuseums"},outdoors:{label:"Outdoors",url:"/outdoors/getalloutdoors"},arts:{label:"Arts & theatre",url:"/arts&theatre/getallarts-theatre"},nightlife:{label:"Night-life",url:"/night-life/getallnightlife"}};function D(){const r=v(),[n]=w(),o=n.get("category")||localStorage.getItem("category")||"essential",[s,l]=i.useState(o),[c,d]=i.useState([]),[u,p]=i.useState(!0),[m,b]=i.useState(!1);i.useEffect(()=>{setTimeout(()=>b(!0),300)},[]);const f=async t=>{p(!0);try{const a=g[t]?.url;if(!a){console.error("Invalid category key:",t),d([]);return}const j=await S.get(a);d(j.data||[])}catch(a){console.error("Fetch error:",a),d([])}finally{p(!1)}};i.useEffect(()=>{f(s)},[s]);const y=t=>{t!==s&&(l(t),localStorage.setItem("category",t),r(`?category=${t}`,{replace:!0}))},x=[{img:"https://i.pinimg.com/1200x/e2/5e/42/e25e42288c45a808d6bf52c9426db8e7.jpg",alt:"Malaysia",placeholder:"Search Places in Malaysia",title:"Explore Malaysia with",packageDis:"50+ New Packages",loading:"lazy"},{img:"https://i.pinimg.com/736x/20/e9/e5/20e9e5115a8ed1fed84542f4923d393e.jpg",alt:"Assam",placeholder:"Search Places in Assam",title:"Explore Assam with",packageDis:"45+ New Packages",loading:"lazy"},{img:"https://i.pinimg.com/1200x/3d/f2/69/3df269be901bf8063b8f7b385d4418d2.jpg",alt:"Dubai",placeholder:"Search Places in Dubai",title:"Explore Dubai with",packageDis:"54+ New Packages",loading:"lazy"},{img:"https://image.cnbcfm.com/api/v1/image/107393342-1711505001678-gettyimages-552552059-d71652b4-3459-4fda-a90c-88632afbe92c.jpeg?v=1711505112&w=1920&h=1080",alt:"India",placeholder:"Search Places in India",title:"Explore India with",packageDis:"28+ New Packages",loading:"lazy"}];return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
        /* Prevent horizontal scrolling */
        * {
          box-sizing: border-box;
        }
        
        body, html {
          overflow-x: hidden;
          max-width: 100vw;
        }

        .carousel-item img {
          width: 100%;
          height: auto;
          max-height: 500px;
          object-fit: cover;
        }

        .category-button {
          display: flex;
          
          flex-wrap: wrap;
          justify-content: center;
          gap: 12px;
          margin-top: 16px;
        }

        .card-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
          padding: 24px;
        }

        .carousel-caption input[type="search"] {
          max-width: 500px;
          width: 90%;
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {

          .carousel-caption p {
            font-size: 14px;
          }

          .carousel-caption input[type="search"] {
            font-size: 14px;
            width: 95%;
          }

          .card-grid {
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
            padding: 20px 10px;
          }
            .category-buttons {
          margin: 30px 0;
          display: flex;
          gap: 15px;
        }

        .category-buttons button {
          padding: 10px 20px;
          border-radius: 8px;
          border: 1px solid #007bff;
          background: white;
          color: #007bff;
          font-weight: bold;
          cursor: pointer;
          transition: 0.3s ease;
        }

        .category-buttons button:hover {
          background: #007bff;
          color: white;
        }

          .category-button {
            gap: 8px;
            color:red;
          }
        }

        @media (max-width: 480px) {

          .card-grid {
            grid-template-columns: 1fr;
            gap: 16px;
            padding: 16px 5px;
          }

          .carousel-caption input[type="search"] {
            width: 98%;
            font-size: 12px;
          }

          .carousel-caption p {
            font-size: 12px;
          }

          .category-button {
            gap: 6px;
          }

          .btn {
            font-size: 12px;
            padding: 6px 12px;
            
          }

          h2 {
            font-size: 1.5rem;
          }

          h4 {
            font-size: 1.2rem;
          }
        }

        @media (max-width: 360px) {

          .btn {
            font-size: 11px;
            padding: 5px 10px;
          }
        }
      `}),e.jsx("br",{}),e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",margin:"120px 20px 40px 20px",flexWrap:"wrap",gap:"40px"},children:[e.jsx("div",{style:{flex:"1 1 400px",minWidth:"300px"},children:e.jsx("img",{src:"MH1.png",alt:"Maharashtra",style:{width:"100%",height:"450px",borderRadius:"20px",objectFit:"cover",boxShadow:"0 20px 60px rgba(0,0,0,0.3)"}})}),e.jsxs("div",{className:`explore-text-container ${m?"visible":""}`,style:{flex:"1 1 400px",minWidth:"300px"},children:[e.jsxs("h1",{className:"explore-heading",style:{fontSize:"clamp(3rem, 8vw, 5.5rem)",fontWeight:"800",background:"linear-gradient(135deg, #FF6B35, #F7931E, #FFB84D)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",marginBottom:"20px",letterSpacing:"-0.02em",lineHeight:"1.1",textTransform:"uppercase"},children:["Explore",e.jsx("br",{}),"Maharashtra"]}),e.jsx("p",{className:"explore-subtitle",style:{fontSize:"clamp(1.1rem, 2vw, 1.4rem)",color:"#555",lineHeight:"1.6",fontWeight:"400",maxWidth:"500px"},children:"Discover forts, beaches, culture, and traditions — all in one vibrant state."})]})]}),e.jsx("div",{className:"category-button ",style:{display:"flex",gap:"15px",flexWrap:"wrap",justifyContent:"center",margin:"60px 20px 40px 20px"},children:["Hotels","Things To Do","Restaurants","Holiday Homes"].map(t=>e.jsx("button",{style:{padding:"14px 32px",fontSize:"1rem",fontWeight:"600",border:"2px solid #FF6B35",background:"transparent",color:"#FF6B35",borderRadius:"50px",cursor:"pointer",transition:"all 0.3s ease"},onMouseEnter:a=>{a.target.style.background="#FF6B35",a.target.style.color="white",a.target.style.transform="translateY(-2px)",a.target.style.boxShadow="0 8px 20px rgba(255,107,53,0.3)"},onMouseLeave:a=>{a.target.style.background="transparent",a.target.style.color="#FF6B35",a.target.style.transform="translateY(0)",a.target.style.boxShadow="none"},children:t},t))}),e.jsxs("div",{id:"demo",className:"carousel slide","data-bs-ride":"carousel",children:[e.jsx("div",{className:"carousel-indicators",children:x.map((t,a)=>e.jsx("button",{type:"button","data-bs-target":"#demo","data-bs-slide-to":a,className:a===0?"active":"","aria-label":`Slide ${a+1}`},a))}),e.jsx("div",{className:"carousel-inner",children:x.map((t,a)=>e.jsxs("div",{className:`carousel-item ${a===0?"active":""}`,children:[e.jsx("img",{src:t.img,alt:t.alt,loading:"lazy",className:"d-block w-100"}),e.jsxs("div",{className:"carousel-caption d-none d-md-block",children:[e.jsx("input",{type:"search",placeholder:t.placeholder,className:"form-control m-auto text-primary "}),e.jsxs("p",{className:"mt-4 mb-0",children:[t.title," ",e.jsx("a",{href:"#",children:t.packageDis})]})]})]},a))}),e.jsx("button",{className:"carousel-control-prev",type:"button","data-bs-target":"#demo","data-bs-slide":"prev",children:e.jsx("span",{className:"carousel-control-prev-icon","aria-hidden":"true"})}),e.jsx("button",{className:"carousel-control-next",type:"button","data-bs-target":"#demo","data-bs-slide":"next",children:e.jsx("span",{className:"carousel-control-next-icon","aria-hidden":"true"})})]}),e.jsxs("div",{className:"container mt-5",children:[e.jsxs("div",{children:[e.jsx("h2",{children:"Maharashtra, India"}),e.jsx("br",{}),e.jsx("h4",{children:"Maharashtra: A Journey Through the Heart of India"}),e.jsx("span",{children:"Pick a category to filter your recs"})]}),e.jsx("div",{className:"category-buttons",children:Object.entries(g).map(([t,{label:a}])=>e.jsx("button",{onClick:()=>y(t),className:`btn mt-3 m-1 text-decoration-none border border-2 border-success rounded-3 text-dark ${s===t?"btn-info":"btn-outline-info "}`,children:a},t))}),e.jsx("hr",{}),u?e.jsx("p",{className:"text-center mt-4",children:"⏳ Loading..."}):c.length===0?e.jsx("p",{className:"text-center mt-4",children:"🛑 No Cards Available"}):e.jsx("div",{className:"card-grid",children:Array.isArray(c)&&c.map((t,a)=>e.jsxs("div",{style:{backgroundColor:"#fff",borderRadius:"16px",boxShadow:"0 4px 10px rgba(0,0,0,0.1)",overflow:"hidden"},children:[e.jsx(z,{images:t.images,loading:"lazy"}),e.jsx("h2",{style:{padding:"12px 16px",fontSize:"1.25rem",fontWeight:600},children:e.jsx("u",{children:e.jsx(N,{to:t.link,style:{color:"black"},children:t.title})})}),e.jsx("h6",{style:{marginLeft:"14px"},children:t.subtitle})]},a))}),e.jsx(k,{})]})]})}export{D as default};
