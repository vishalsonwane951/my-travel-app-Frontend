import React, { useState, useRef, useEffect } from 'react';
import { BrowserRouter, Outlet } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../Components/Header/Header';
// import Header from '../Components/Header/Header';


// import "./Services.css";





function Services () {
  const tourPackages =[
  {
    id: 1,
    title: "Custom-Tours",link:"custom-Tours",
    duration: "Highlights",
    itinerary: [
      { activities: ["✅ Tailor-Made Itineraries"]},
      { activities: ["✅ Flexible Scheduling"] },
      { activities: ["✅ Exclusive Experiences"] },
      { activities: ["✅ Handpicked Stays & Activities"] },
      { activities: ["✅  Local Expertise"] },
      { activities: ["✅ Your Budget, Your Way"] },
      { activities: ["✅ Perfect for All Types of Travelers"] },
   
          

    ],
    addOns: ["Your Trip, Your Rules! 🌍 Craft a travel story that's uniquely YOU!"],
    Tagline:['No templates — Only tailored travel.']
  },
  {
    id: 2,
    title: "Adventure-Tours",link: "Adventure-Tours",
    duration: "Highlights",
    itinerary: [
     { activities: ["✅ Thrilling Outdoor Activities"]},
      { activities: ["✅ Professional Safety Gear & Instructors"] },
      { activities: ["✅ Stunning Natural Landscapes"] },
      { activities: ["✅ Challenging Yet Rewarding Trails"] },
      { activities: ["✅ Group Adventures & Solo Options"] },
      { activities: ["✅ All-Inclusive Adventure Packages"] },
    
     
    ],
      addOns: ["Feel the Rush! ⛰️ Dare to explore the wild side of life!"],
     Tagline:[ "Not just a trip — it's an adrenaline journey..!"]
    
  },
  {
    id: 3,
    title: "Family-Tours",link: "Family-Tours",
    duration: "Highlights",
    
    itinerary: [
      { activities: ["✅ Customized Itineraries"]},
      { activities: ["✅ Comfortable Accommodations"] },
      { activities: ["✅ Safe and Secure Travel"] },
      { activities: ["✅ Kid-Friendly Activities"] },
      { activities: ["✅ Guided Sightseeing"] },
      { activities: ["✅ Meal Plans for Everyone"] },
      { activities: ["✅ Group Games & Entertainment"] },
       { activities:["✅ Memory-Making Moments"] },
      { activities: ["✅ 24x7 Travel Assistance"] },
    ],
    addOns: ["Great for Solo, Couple & Family Travelers"],
    Tagline:['Together we travel — together we grow!']
  },
  {
    id: 4,
    title: "Gorup-Tours",link: "Group-Tours",
    duration: "Highlights",
    
    itinerary: [
      { activities: ["✅ Fun With Friends & Family"]},
      { activities: ["✅ Pre-Planned Itineraries"] },
      { activities: ["✅ Great Discounts & Value"] },
      { activities: ["✅ Team Bonding & Icebreakers"] },
      { activities: ["✅ Comfortable Group Transport"] },
      { activities: ["✅ Dedicated Tour Manager"] },
      { activities: ["✅ Perfect for Schools, Colleges, Corporates & Families"] },
      
    ],
    addOns: ["More People, More Fun! 🚌 Travel together, laugh louder, bond stronger!"],
     Tagline:['Because the best memories are made in groups..!']
  },
  {
    id: 5,
    title: "City-Tours",link: "City-Tours",
    duration: "Highlights",
    
    itinerary: [
       { activities: ["✅ Explore Iconic Landmarks"]},
      { activities: ["✅ Local Street Food & Culture"] },
      { activities: ["✅  Shopping Hotspots"] },
      { activities: ["✅ Guided Tours Available"] },
      { activities: ["✅ Flexible Timings"] },
      { activities: ["✅  Photo Stops at Famous Spots"] },
      { activities: ["✅ Great for Solo, Couple & Family Travelers"] },
      
    ],
    addOns: ["Discover the City's Soul! 🏙️ Dive into culture, taste, and charm — one street at a time!"],
     Tagline:['Explore — Experience — Enjoy.']
  }
]
 

  // const [open, setOpen] = useState(false);
  // const [selected, setSelected] = useState(currencies[4]); // Default to INR
  // const dropdownRef = useRef(null);

  // // Close dropdown on outside click
  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
  //       setOpen(false);
  //     }
  //   };
  //   document.addEventListener('mousedown', handleClickOutside);
  //   return () => document.removeEventListener('mousedown', handleClickOutside);
  // }, []);

  // const handleSelect = (currency) => {
  //   setSelected(currency);
  //   setOpen(false);
  // };

   const currencies = [
        { code: 'USD', symbol: '$', name: 'US Dollar', flag: '🇺🇸' },
        { code: 'EUR', symbol: '€', name: 'Euro', flag: '🇪🇺' },
        { code: 'GBP', symbol: '£', name: 'British Pound', flag: '🇬🇧' },
        { code: 'JPY', symbol: '¥', name: 'Japanese Yen', flag: '🇯🇵' },
        { code: 'INR', symbol: '₹', name: 'Indian Rupee', flag: '🇮🇳' },
      ];

  
    const carouselItems = [
    {img: "services2.jpg",alt: "Malaysia",placeholder: "Search Places in Malaysia",title: "Explore Malaysia with",packageDis: "50+ New Packages"},
    {img: "services1.jpg",alt: "",placeholder: "Search Places ",title: "Explore  with",packageDis: "45+ New Packages"},
    {img: "services3.jpg",alt: "",placeholder: "Search Places ",title: "Explore  with",packageDis: "54+ New Packages"},
    {img: "Jaisalmaire.jpg",alt: "",placeholder: "Search Places ",title: "Explore  with",packageDis: "28+ New Packages"},
    {img: "services4.jpg",alt: "",placeholder: "Search Places ",title: "Explore  with",packageDis: "28+ New Packages"},

  ];

  const services = [
  {
    title: "Custom Tours",  img: "https://cdn.neamb.com/-/media/images/neamb/products/nea-travel-guided-tours/nea_travel_guided_tours_1464461781_1200x630.jpg",  link: "/custom-Tours",
    description: <><h1>Explore Your Way with Our Custom Travel Packages!</h1><p>
        Your journey, your rules! Whether you crave thrilling adventures, romantic escapes, family getaways, or cultural discoveries — we design packages tailored just for you.</p>
        <h3>You Dream it, We Plan it...!</h3>
        </>,
  },
  {
    title: "Adventure Tours", link: "/Adventure-Tours",
    img: "https://akap.ca/wp-content/uploads/2020/12/ISO-20611-Adventure-tourism.jpeg",
    description: <><h1>Embark on the Adventure of a Lifetime</h1><p>
       Unleash your inner explorer with our exhilarating adventure tours that take you beyond the ordinary. Traverse rugged terrains, navigate through lush forests, and conquer thrilling challenges that await at every turn. Whether you're scaling majestic peaks, rafting down roaring rivers, or camping under a canopy of stars, each moment is crafted to ignite your spirit of adventure.</p>
        <h3>Join us for an unforgettable journey where every step is a story, and every destination, a discovery...!</h3>
        </>,
  },
   {
    title: "family-tours",link: "/Family-Tours",
    img: "https://i.pinimg.com/736x/09/5a/5e/095a5e10d51cfc90f6adb17c159846c1.jpg",
    description: (
      <>
        <h2>Discover the joy of traveling with your loved ones on our specially crafted <strong>Family Tour Packages</strong>.</h2>
        <p>
          Enjoy safe, comfortable, and hassle-free journeys with kid-friendly activities, family-sized accommodations, and flexible itineraries. Explore popular attractions, cultural experiences, amusement parks, and scenic destinations with guided support and personalized touches.
        </p>
        <h3>Entertained—from kids to grandparents.</h3>
      </>
    )
    },
  {
    title: "group-tours",link: "/Group-Tours",
    img: "https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/1339/Group%20Tour%202.jpg",
    description: <><h1>Discover the Joy of Group Travel!</h1><p>
       Embark on an unforgettable journey where camaraderie meets adventure. Our group tours are crafted to bring like-minded travelers together, offering shared experiences that turn strangers into friends. Whether you're exploring ancient ruins, savoring local cuisines, or witnessing breathtaking landscapes, every moment is enriched by the company of fellow explorers.</p>
        <h3>Create lasting memories with new friends as you explore together...!</h3>
        </>,
  },
  {
    title: "city-tours",link: "/City-Tours",
    img: "https://wallpapers.com/images/hd/4k-computer-cityscape-nkcvws18wd5lvw8o.jpg",
    description: <><h1>Discover the Heartbeat of the City!</h1><p>
        Embark on an unforgettable journey through the city's vibrant streets, where history meets modernity at every corner. Our expertly guided city tours offer an immersive experience, unveiling hidden gems, iconic landmarks, and the rich tapestry of cultures that define the urban landscape. Whether you're a first-time visitor or a seasoned traveler, each step reveals a new story waiting to be discovered.</p>
        <h3> Experience the City Like Never Before...!</h3>
        </>,
  },
 
]



  return (
    <>
       {/* <Outlet></Outlet>  */}
       <Header/>
      
      <style>{`
        /* Prevent horizontal scrolling */
        * {
          box-sizing: border-box;
        }
        
        body, html {
          overflow-x: hidden;
          max-width: 100vw;
        }

        /* Highlights Section Responsive Only */
        
        /* Tablet specific - 2 cards per row */
        @media (min-width: 768px) and (max-width: 1024px) {
          .highlights-section .col-md-4 {
            flex: 0 0 50%;
            max-width: 50%;
          }
        }

        /* Mobile - highlights cards responsive */
        @media (max-width: 767px) {
          .highlights-section .col-md-4 {
            flex: 0 0 100%;
            max-width: 100%;
            margin-bottom: 1rem;
          }

          .highlights-section .card-body h4 {
            font-size: 1.1rem;
          }

          .highlights-section .card-body h3 {
            font-size: 1rem;
          }

          .highlights-section .card-body h6 {
            font-size: 0.9rem;
          }

          .highlights-section .card-body p {
            font-size: 12px;
          }

          .highlights-section .card-body li {
            font-size: 12px;
          }

          .highlights-section .btn {
            font-size: 12px;
            padding: 6px 12px;
          }
        }

        @media (max-width: 480px) {
          .highlights-section .card-body {
            padding: 10px;
          }

          .highlights-section .card-body h4 {
            font-size: 1rem;
          }

          .highlights-section .card-body h3 {
            font-size: 0.9rem;
          }

          .highlights-section .card-body h6 {
            font-size: 0.8rem;
          }

          .highlights-section .card-body p {
            font-size: 11px;
          }

          .highlights-section .card-body li {
            font-size: 11px;
          }

          .highlights-section .btn {
            font-size: 11px;
            padding: 5px 10px;
          }
        }
          
.zigzag-services {
  padding: 40px 20px;
}

.zigzag-row {
  display: flex;
  align-items: center;
  margin: 40px 0;
  gap: 60px;
  flex-wrap: wrap;
}

.zigzag-row.reverse {
  flex-direction: row-reverse;
}

.zigzag-image img {
  width: 500px;
  height: auto;
   transform: scale(1.02);
  border-radius: 10px;
  
}

.zigzag-description {
  flex: 1;
  max-width: 500px;
}

.zigzag-description h3 {
  margin-bottom: 10px;
  color: #333;
}

.zigzag-description p {
  color: #555;
  line-height: 1.6;
}

.btn {
  margin-top: 10px;
  display: inline-block;
  padding: 8px 16px;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 20px;
}
.zigzag-description a:hover{
    color:purple ;
     transform: scale(1.02);
    
}
.zigzag-description a{
    color: #333;
}
.services-header {
  /* background: linear-gradient(135deg, #f8f9fa, #e9ecef); */
  padding: 60px 20px;
  /* border-radius: 5px; */
  /* box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1); */
  transition: transform 0.3s ease;
}

.services-header:hover {
  transform: scale(1.02);
}

.services-header h2 {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #6f0568;
  font-family: fantasy;
  margin-bottom: 20px;
  text-shadow: 1px 1px 2px rgba(13, 110, 253, 0.2);
}

.services-header p {
  font-size: 1.25rem;
  color: #6c757d;
  font-style: italic;
}



@media (max-width: 768px) {
  .zigzag-row {
    flex-direction: column !important;
    text-align: center;
  }

  .zigzag-image img {
    width: 100%;
    max-width: 300px;
  }

  .zigzag-description {
    max-width: 100%;
  }
}


.services-dashboard {
  padding: 20px;
  font-family: Arial, sans-serif;
}

.dashboard-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  align-items: center;
}

.breadcrumb {
  font-weight: bold;
}

.header-right select,
.login-btn {
  margin-left: 10px;
  padding: 5px 10px;
}

.carousel .slide img {
  height: 300px;
  object-fit: cover;
}

.search-bar {
  margin: 20px 0;
  display: flex;
  justify-content: center;
  gap: 10px;
}

.search-bar input {
  padding: 10px;
  width: 60%;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.search-bar button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 15px;
}

.sub-heading {
  text-align: center;
  font-size: 24px;
  margin: 30px 0 10px;
}

.description {
  text-align: center;
  color: #666;
  margin-bottom: 30px; 
}

/* {currency picker} */
  .currency {
    float: right;
    margin-top: -650px;
    margin-right: 15px;
    color:white; 
}  
 .dropdown-toggle{
    background-color: transparent; 
    text-decoration: none; 
    border: none; 
    color: rgb(0, 4, 6);
    font-family:'Times New Roman', Times, serif;
} */

.log {
  
  margin-top: -1080px;
  padding: 7px 8px;
  
  margin-right: -80px;


}

/* .log.btn:hover {
  background-color: transparent;
  color: #0d6efd;
} */
/* .login{
  display: flex;
  justify-content:flex-end; 
  width:5%;               
  padding: -4PX;
   float: right;
   margin-left: 25px;
    margin-top: -650px;   
    background-color: transparent; 
    color: #fff; 
    border: none;        
    text-decoration: none;
    font-family:'Times New Roman', Times, serif;
} */

.login a{
   float: right;
    margin-top: -650px;
    text-decoration: none;
    color: #fff;
    
  
}
.login a:hover {
  color: #0d6efd;
  border: 2px solid black;
  border-radius: 5px;
}

.currency-select-wrapper {
  width: 350px;
  margin-bottom: 1rem;
}

.custom-dropdown {
  cursor: pointer;
  position: relative;
}

.dropdown-options {
  display: flex;
  position: absolute;
  background-color: white;
  border: 1px solid #ccc;
  z-index: 100;
  width: 100%;
  max-height: 200px;
  overflow-y: auto;
}
.flex-container {
  display: flex;
  flex-wrap: nowrap;
  float: right;
 
}

.flex-container  div {
  background-color: #f1f1f1;
  /* width: auto; */
  margin-top: -600px;
  /* text-align: center; */
  /* line-height: 40px;
  font-size: 30px; */ 
 
  height: 10px;

}
.currency-piker{
  float: right;
}
option{
  width: 100px;
}
      `}</style>
    
      {/* Carousel */}
      <div id="demo" className="carousel slide" data-bs-ride="carousel">
        {/* Indicators */}
        <div className="carousel-indicators">
          {carouselItems.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#demo"
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>

        {/* Slides */}
        <div className="carousel-inner">
          {carouselItems.map((item, index) => (
            <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
              <img src={`/${item.img}`}  alt={item.alt} loading="lazy" className="d-block w-100" style={{height:"550px", objectFit:"cover"}} />

              {/* Caption */}
              <div className="carousel-caption d-md-block">

               {/* Currency Selection */}

                 <div className="flex-container">
            <div className="currency-picker">
            <label htmlFor="currency" className="form-label">
                <select id="currency" className="form-select">
                    {currencies.map((currency) => (
                        <option key={currency.code} value={currency.code}>
                            {currency.flag} {currency.symbol}
                        </option>
                    ))}
                </select>
            </label>
            </div>

        </div>
                {/* Login Button */}
                {/* <div className="d-flex justify-content-end align-items-center mb-2">
                  <span
                    className="fw-bold login"
                    style={{ cursor: "pointer", textAlign: "right", width: "100%" }}
                    onClick={() => (window.location.href = "/login")}
                  >
                    Login
                  </span>
                </div> */}
                {/* Search */}
                {/* <input
                  type="search"
                  placeholder={item.placeholder}
                  className="form-control text-primary w-75 m-auto"
                /> */}
                <p className="mt-3 mb-0">
                  {item.title} <a href="#">{item.packageDis}</a>
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
        </button>
      </div>

      {/* Services Section */}
      <div className="container zigzag-services">
        <div className="services-header text-center my-5">
          <h2 className="display-4 fw-bold">Our Premium Services</h2>
          <p className="lead text-secondary">Plan Your Journey with Confidence</p>
        </div>

        {services.map((service, index) => (
          <div className={`zigzag-row ${index % 2 === 0 ? "normal" : "reverse"}`} key={index}>
            <div className="zigzag-image">
              <Link to={service.link}>
                <img src={service.img} alt={service.title}/>
              </Link>
            </div>
            <div className="zigzag-description">
              <div>
                <>
                  <h3 style={{ fontFamily: "cursive" }}>
                  <a href={service.link}>{service.title}</a>
                  </h3>
                  <p>{service.description}</p>
                  <a href={service.link} className="btn btn-outline-primary">
                    Learn More
                  </a>
                </>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/*Highlights  */}
      <div className='container highlights-section'>
      <div className=" row m-5" >
        {tourPackages.map((pkg, idx) => (
          <div className="col-md-4 mb-4" key={idx}>
            <div className="card h-100 shadow">
              <div className="card-body " style={{background:'linear-gradient(to right,rgba(211, 220, 212, 1))',color:'Black',textAlign:'left'}}>
                  <h4 className=' bg-white text-center  p-1 '>{pkg.title}</h4>
                
                <h3 className='text-center'>{pkg.duration}</h3>
                <h6>Itinerary:</h6>
                <ul>
                  {pkg.itinerary.map((day, idx2) => (
                    <li key={idx2}>{day.activities}</li>
                  ))}
                </ul>
                <p><strong>{pkg.addOns}</strong> </p>
                <p className='text-center ' style={{opacity: "0.5"}}><em>{pkg.Tagline}</em></p>
              </div>
              <div className="card-footer text-center bg-secondary text-Dark w-30">
                <Link to={`/${pkg.link}`}><button className="btn btn-secondary m-auto w-40">Book Now</button></Link>
              </div>
            </div>
          </div>
        ))}
     
      </div>
      </div>


    </>
  );
}

export default Services;