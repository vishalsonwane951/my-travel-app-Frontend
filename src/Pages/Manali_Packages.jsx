import React from 'react';
import { Link, useNavigate } from 'react-router-dom';


function Manali_Packages() {
  const carouselItems = [
    { img: "custom1.jpg", alt: "Custom Tour Packages", placeholder: "Search Places", title: "Explore with Custom Tour Package" },
    { img: "coustom.jpg", alt: "Custom Tour 1", placeholder: "Search Places", title: "Explore with Custom Tour Package" },
    { img: "custom2.jpg", alt: "Custom Tour 2", placeholder: "Search Places", title: "Explore with Custom Tour Package" },
    { img: "custom3.jpg", alt: "Custom Tour 3", placeholder: "Search Places", title: "Explore with Custom Tour Package" },
    { img: "custom4.jpg", alt: "Custom Tour 4", placeholder: "Search Places", title: "Explore with Custom Tour Package" },
    { img: "custom5.jpg", alt: "Custom Tour 5", placeholder: "Search Places", title: "Explore with Custom Tour Package" },
  ];


  const tourPackages =[
  {
    id: 1,
    title: "2N-3D",

    duration: "2N3D",
    location: "Langkawi, Malaysia",
    priceRange: "$299 - $499",
    highlights: ["Beach", "Island Hopping", "Cruise Dinner"],
    itinerary: [
      {
        day: "Day 1",
        activities: ["Arrival at Langkawi", "Pantai Cenang Beach", "Optional Sunset Cruise"]
      },
      {
        day: "Day 2",
        activities: ["Island Hopping Tour", "Sky Bridge", "Duty-Free Shopping"]
      },
      {
        day: "Day 3",
        activities: ["Breakfast", "Check-out & Airport Transfer"]
      }

    ],
    addOns: ["Jet Ski Adventure", "Private Car Rental", "Parasailing"]
  },
  {
    id: 2,
    title: "3N-4D",
    duration: "3N4D",
    location: "Cameron Highlands, Malaysia",
    priceRange: "$399 - $599",
    highlights: ["Nature", "Tea Plantation", "Farms"],
    itinerary: [
      {
        day: "Day 1",
        activities: ["Depart from KL", "Lata Iskandar Waterfall", "Evening Market Walk"]
      },
      {
        day: "Day 2",
        activities: ["BOH Tea Plantation", "Strawberry Farm", "Mossy Forest"]
      },
      {
        day: "Day 3",
        activities: ["Breakfast", "Return to KL"]
      }
    ],
    addOn: ["Forest Yoga", "Organic Food Tasting", "Night Walk"]
  },
  {
    id: 3,
    title: "4N-5D",
    duration: "4N5D",
    location: "Kuala Lumpur, Malaysia",
    priceRange: "$549 - $749",
    highlights: ["City", "Culture", "Shopping"],
    itinerary: [
      {
        day: "Day 1",
        activities: ["Arrival in KL", "Petronas Twin Towers", "KLCC Park"]
      },
      {
        day: "Day 2",
        activities: ["Batu Caves", "Royal Palace", "Street Food Tour"]
      },
      {
        day: "Day 3",
        activities: ["Breakfast", "Check-out", "Airport Drop"]
      }
    ],
    addOns: ["KL Tower Visit", "Cultural Show", "Chinatown Tour"]
  }
]
  return (
    <>
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
            <div key={index} className={`carousel-item${index === 0 ? " active" : ""}`}>
              <img src={`/${item.img}`} alt={item.alt} loading="lazy" className="d-block w-100" />
              <div className="carousel-caption d-none d-md-block">
                {/* <input
                  type="search"
                  placeholder={item.placeholder}
                  className="form-control m-auto text-primary"
                /> */}
                <p className="mt-4 mb-0">{item.title}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>


      <div className="container mt-5 p-4 rounded">
      <h2 className="mb-4 text-center ">Custom Tour Packages (2N3D)/(3N4D)/(4N5D)</h2>
      <div className="row">
        {tourPackages.map(pkg => (
          <div className="col-md-4 mb-4" key={pkg.id}>
            <div className="card h-100 shadow">
              <div className="card-body">
                <h5 className="card-title m-auto w-30px">{pkg.title}</h5>
                <p className="card-text"><strong>Location:</strong> {pkg.location}</p>
                <p><strong>Duration:</strong> {pkg.duration}</p>
                <p><strong>Price Range:</strong> {pkg.priceRange}</p>
                <p><strong>Highlights:</strong> {pkg.highlights}</p>
                <h6>Itinerary:</h6>
                <ul>
                  {pkg.itinerary.map((day, idx) => (
                    <li key={idx}>
                      <strong>{day.day}:</strong> {day.activities}
                    </li>
                  ))}
                </ul>
                <p><strong>Add-ons:</strong> {pkg.addOns}</p>
              </div>
              
              <div className="card-footer text-center bg-primary text-Dark w-30">
                <Link to={`/${pkg.title}`}><button className="btn btn-primary m-auto w-40">Book Now</button></Link>
              </div>
            </div>
          </div>
        ))}
         <div className="mt-5 p-4 bg-light border rounded">
            <blockquote className="blockquote text-center">
          <p className="mb-3">
           "At <strong>Your Company Name</strong>, we believe travel should be as unique as you are.
           That’s why we created our custom tour packages — to give you the freedom to explore your
           dream destinations, your way. Whether you're seeking adventure, relaxation, or cultural discovery,
           our 2N3D experiences are thoughtfully designed to fit your schedule and style.
           We’re here to make every journey personal, memorable, and effortless."
          </p>
          <footer className="blockquote-footer">Co-Founder, <cite title="Source Title">Your Company Name</cite>
          </footer>
         </blockquote>
         </div>
      </div>
    </div>
    </>

    
  );
}

export default Manali_Packages;