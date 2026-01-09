// import React from 'react'
// import { Link, useNavigate } from 'react-router-dom';
// // import '../Stylesheet/MHeader.css';
// // import header css
// import '../../Components/Header/MaharashtraHeader'


// function MaharashtraHeader() {
//     return (
//         <>
//          <style jsx>{`
//                 *{
//     margin: 0;
//     padding: 0;
// }
// .c1{
//      margin-left: 150px;
//     margin-right: 150px; 
//     z-index: 0;
//     position: fxed;
//     border: none;
    
// }
// .c1 li{
//     margin-left: 25px;
// }
// .c1 li:hover{
//     border-bottom: 4px solid red;
// }

// .navbar {
//   background-color: rgba(166, 164, 164, 0.1);
//   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
//   height:110px;
//   margin-top:20px;
//   border-radius: 10px;
//   color:red;
  
// }`}</style>
//             <div className="c1">
//                 <nav className=" navbar navbar-expand-lg ">
//                     {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                     </button> */}
                    

//                     <div className="collapse navbar-collapse" id="navbarSupportedContent"  >
//                         <Link to='/'><img src="logo.png" alt="" height={'120px'} style={{ marginLeft: '20px' }}/></Link>
//                         <ul className="navbar-nav m-auto">
                            
//                             <li><Link className="navbar-brand" to="#">Maharashtra</Link></li>

//                             <li className="nav-item active">
//                                 <Link className="nav-link" to="#">Hotels <span className="sr-only">(current)</span></Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link className="nav-link" to="#">Things To Go</Link>
//                             </li>

//                             <li className="nav-item">
//                                 <Link className="nav-link disabled" to="#">Restaurants</Link>
//                             </li> <li className="nav-item">
//                                 <Link className="nav-link" to="#">Holiday Homes</Link></li>

//                         </ul>
//                         {/* <form className="form-inline my-2 my-lg-0">
//                             <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
//                             <button className="btn btn-outline-success my-2 my-sm-0 text-white d-flex" type="submit">Search</button>
//                         </form> */}
//                     </div>
//                 </nav>
//             </div>
//         </>
//     )
// }

// export default MaharashtraHeader


import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function MaharashtraHeader() {
      const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Animate text on page load
    setTimeout(() => setVisible(true), 200);
  }, []);
  return (
    <>
      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: Arial, sans-serif;
        }

        .header-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          background-color: rgba(255, 255, 255, 0.95);
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
          z-index: 1000;
          padding: 10px 50px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .header-logo img {
          height: 80px;
        }

        .navbar {
          display: flex;
          list-style: none;
          align-items: center;
          gap: 25px;
        }

        .navbar li a {
          text-decoration: none;
          color: #333;
          font-weight: 500;
          padding: 6px 4px;
          transition: all 0.2s ease;
        }

        .navbar li a:hover {
          border-bottom: 3px solid red;
          color: red;
        }

        /* Page content spacing to account for fixed header */
        .page-content {
          margin-top: 120px;
          padding: 20px 50px;
        }

        .hero-section {
          background: url("maharashtra-hero.jpg") center/cover no-repeat;
          height: 400px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 36px;
          font-weight: bold;
          text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.5);
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

        .cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 20px;
        }

        .card {
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);
          background: #fff;
          transition: transform 0.2s ease;
        }

        .card:hover {
          transform: translateY(-5px);
        }

        .card img {
          width: 100%;
          height: 180px;
          object-fit: cover;
        }

        .card-content {
          padding: 10px 15px;
        }

        .card-content h4 {
          margin-bottom: 6px;
        }

        .card-content p {
          color: #555;
          font-size: 14px;
        }
      `}</style>

      {/* Fixed Header */}
      <div className="header-container">
        <div className="header-logo">
          <Link to="/">
            <img src="/logo.png" alt="Logo" />
          </Link>
        </div>
        <ul className="navbar">
          <li>
            <Link to="#">Maharashtra</Link>
          </li>
          <li>
            <Link to="#">Hotels</Link>
          </li>
          <li>
            <Link to="#">Things To Do</Link>
          </li>
          <li>
            <Link to="#">Restaurants</Link>
          </li>
          <li>
            <Link to="#">Holiday Homes</Link>
          </li>
        </ul>
      </div>

      
    </>
  );
}

export default MaharashtraHeader;

