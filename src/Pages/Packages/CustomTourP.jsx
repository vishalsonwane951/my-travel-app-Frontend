import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../utils/api';

const API_URL = import.meta.env.VITE_axios_URL;

// const packages = [
//   {id: 1,location: 'Manali',caption: 'Explore the beauty of Manali',image: 'manali.jpg',imglink:'/manali-Packages'},
//   {id: 2,location: 'Goa',caption: 'Relax on the beaches of Goa',image: '/goa.jpg',imglink:'/goa-Packages'},
//   {id: 3,location: 'Kerala', caption: 'Backwaters and greenery', image: 'kerla.jpg',imglink:'/kerala-Packages'},
//   {id: 4,location: 'Rajasthan',caption: 'Heritage and forts',image: 'rajasthan.jpg',imglink:'/rajasthan-Packages'},
//   {id: 5,location: 'Sikkim',caption: 'Mountains and monasteries',image: 'sikkim.jpg',imglink:'/sikkim-Packages'},
//   {id: 6,location: 'Kashmir',caption: 'Heaven on Earth',image: 'kashmir.jpg',imglink:'/kashmir-Packages'},
// ];

// const packages2 = [
//   {id: 7,location: 'Rishikesh, Uttarakhand',caption: 'Yoga caxiostal and river rafting',image: '/rishikesh.jpg',imglink:'/rishikesh-Packages'},
//   {id: 8,location: ' Andaman',caption: 'Crystal-clear beaches & scuba diving', image: '/andaman.jpg',imglink:'/andaman-Packages'},
//   {id: 9,location: 'Agra, Uttar Pradesh', caption: 'Home to the iconic Taj Mahal', image: '/Aagra.jpg',imglink:'/agra-Packages'},
//   {id: 10, location: 'Udaipur, Rajasthan',caption: 'City of lakes & romantic vibes',image: '/udaypur.jpg',imglink:'/udaipur-Packages'},
//   {id: 11,location: 'Ladakh',caption: 'High-altitude passes and monasteries',image: '/ladakh.jpg',imglink:'/ladakh-Packages'},
//   { id: 12, location: 'Ooty, Tamil Nadu', caption: 'Hill station with botanical charm', image: '/ooty.jpg',imglink:'/ooty-Packages'},
// ]


function CustomTourP() {
  // ✅ FIXED: initialize with empty array to avoid .length error
  const [packages1, setPackages1] = useState([]);
  const [packages2, setPackages2] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPackages() {
      try {
        const [res1, res2] = await Promise.all([
          api.get('/adventure-tours/getalladventurepackage1'),
          api.get('/adventure-tours/getalladventurepackage2')
        ]);
        setPackages1(res1.data);
        setPackages2(res2.data);
      } catch (err) {
        console.error("Error fetching Data:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchPackages();
  }, []);

  if (loading){
    return <p style={{ textAlign: 'center', marginTop: '2rem' }}>⏳Loading...</p>;
  }

 if ((!packages1 || packages1.length === 0) && (!packages2 || packages2.length === 0)) {
  return <p style={{ textAlign: 'center', marginTop: '2rem' }}>🛑 Card is empty</p>
}


  return (
    <div className="container my-5">
      <h2 className="text-center mb-4 p-2"
       style={{ backgroundImage: "linear-gradient(to right,rgb(192, 24, 226),rgb(21, 211, 199))",fontFamily: 'time new roman ',fontWeight: 'bold', color: 'white' }}>
      Custom Tour Packages</h2>

      <div className="row">
        <h1 className="container mb-4" style={{fontFamily:'fantasy'}}>“Uncover Hidden Gems Across <span style={{ color: 'tomato' }}>INDIA</span> with Personalized <br/> <span style={{ color: 'tomato'}}>Custom</span> Tour Packages...!”</h1>
        <h5 className='container mb-4'style={{fontFamily:'inherit'}}>“Plan Less.Travel More.Build Your Perfect Local Getaway Today -<span style={{background: 'linear-gradient(to right, rgb(73, 3, 87), rgb(232, 13, 13))'
        ,WebkitBackgroundClip: 'text',WebkitTextFillColor: 'transparent'}}>Your Dates, Your Destinations, Your Way."</span></h5>
        {Array.isArray(packages1) && packages1.map((pkg, i) => (
          <div key={pkg._id || pkg.id} className="col-md-4 mb-4"> {/* ✅ Used _id fallback for mongo documents */}
            <div className="card shadow h-100">
              <img src={pkg.images} alt={pkg.location} loading="lazy" className="card-img-top" style={{ height: '200px', objectFit: 'cover' }} />
              <div className="card-body bg-dark text-white text-center">
                <p className="mb-1 fw-semibold">{pkg.caption}</p>
              </div>
              <div className="card-footer text-center bg-light">
                <Link to={pkg.link}>
                <button className="btn btn-outline-primary btn-sm m-auto text-black border border-3 border-primary" >More Details</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

        {/* second para */}

      <div className="row">
        <h1 className="container mb-4 mt-4 text-center" style={{fontFamily:'initial', fontWeight:'bold'}}>“Discover Your Own Country Like Never Before <br/> <h2 style={{ fontFamily:'revert',color: 'purple'}}> With a Custom Tour Made Just for You”</h2></h1>
        <h5 className='container mb-4 text-center'style={{background: 'linear-gradient(to right,  rgb(29, 3, 30),rgb(23, 77, 2), rgb(236, 10, 10))'
        ,WebkitBackgroundClip: 'text',WebkitTextFillColor: 'transparent', fontFamily:'inherit'}}>“Experience the beauty of your homeland with flexible Tour packages built around you.”</h5>
        {Array.isArray(packages2) && packages2.map((pkg2, i) => (
          <div key={pkg2._ || pkg2.id} className="col-md-4 mb-4">
            <div className="card shadow h-100">
              <img src={pkg2.images} alt={pkg2.location} loading="lazy" className="card-img-top" style={{ height: '200px', objectFit: 'cover' }} />
              <div className="card-body bg-dark text-white text-center">
                <p className="mb-1 fw-semibold">{pkg2.caption}</p>
              </div>
              <div className="card-footer text-center bg-light">
                 <Link to={pkg2.link}>
                <button className="btn btn-outline-primary btn-sm m-auto text-black border border-3 border-primary" >More Details</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CustomTourP;
