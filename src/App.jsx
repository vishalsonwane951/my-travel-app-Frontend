import React, { Suspense, lazy, useState } from 'react';
import Services from './Pages/Services.jsx'
import { Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
// import Start from './Pages/Start';
const Start = lazy(() => import('./Pages/Start'));
const CustomTourP = lazy(() => import('./Pages/Packages/CustomTourP'));
const AdventureTourP = lazy(() => import('./Pages/Packages/AdventureTourP'));
const FamilyTourP = lazy(() => import('./Pages/Packages/FamilyTourP'));
const GroupTourP = lazy(() => import('./Pages/Packages/GroupTourP'));
const CityTourP = lazy(() => import('./Pages/Packages/CityTourP'));
const Manali = lazy(() => import('./Pages/Explore-Packages/Manali'));
const Goa = lazy(() => import('./Pages/Explore-Packages/Goa'));
import Kerala from './Pages/Explore-Packages/Kerala';
import Rajasthan from './Pages/Explore-Packages/Rajasthan'; 
import Sikkim from './Pages/Explore-Packages/Sikkim';
import Kashmir from './Pages/Explore-Packages/Kashmir';
import Rishikesh from './Pages/Explore-Packages/Rishikesh';
import Andman from './Pages/Explore-Packages/Andman';
import Agra from './Pages/Explore-Packages/Agra';
import Udaipur from './Pages/Explore-Packages/Udaipur';
import Ladakh from './Pages/Explore-Packages/Ladakh';
import Ooty from './Pages/Explore-Packages/Ooty';
import Header from './Components/Header/Header';
const Maharashtra = lazy(() => import('./Pages/Domestic/Maharashtra'));
// import Maharashtra from "./Pages/Domestic/Maharashtra";
import PageNotFound from './Pages/PageNotFound';
import BookingForm from './Components/BookingForm/BookingForm.jsx';
import UserProfilePopup from './Components/Profile/Profile.jsx';
import MyBookings from './Components/BookingForm/MyBookings.jsx';
import RegisterPage from './Pages/Register.jsx';
import UploadImagesByTitle from './Components/ImageUpload.jsx';
const App = () => {



  return (
    <>
    

     <Header/>
     
      <Suspense fallback={<div className="loading">Loading...</div>}>
        <Routes>
          {/* login /reg */}

          {/* <Route path="/login" element={<Login></Login>} />
        <Route path="/register" element={<Register></Register>} /> */}
          <Route path="/register" element={<RegisterPage />} />

          {/* Main Page Route */}

          <Route path="services" element={<Services />}>

          </Route>

          <Route path="" element={<Start />}>
          </Route>

          {/* Service Page Route */}

          <Route path="/custom-tours" element={<CustomTourP />}></Route>
          <Route path="/Adventure-tours" element={<AdventureTourP />}></Route>
          <Route path="/family-tours" element={<FamilyTourP />}></Route>
          <Route path="/group-tours" element={<GroupTourP />}></Route>
          <Route path="/city-tours" element={<CityTourP />}></Route>

          <Route path="/update" element={<UploadImagesByTitle/>}></Route>



          {/* Package Page Route */}

          {/* <Route path="rishikesh-Packages" element={<Rishikesh></Rishikesh>}></Route>
        <Route path="kerala-Packages" element={<Kerala></Kerala>}></Route>
        <Route path="rajasthan-Packages" element={<Rajasthan></Rajasthan>}></Route>
        <Route path="sikkim-Packages" element={<Sikkim></Sikkim>}></Route>
        <Route path="kashmir-Packages" element={<Kashmir></Kashmir>}></Route>
        <Route path="andaman-Packages" element={<Andaman></Andaman>}></Route>
        <Route path="agra-Packages" element={<Agra></Agra>}></Route>
        <Route path="udaipur-Packages" element={<Udaipur></Udaipur>}></Route>
        <Route path="ladakh-Packages" element={<Ladakh></Ladakh>}></Route>
        <Route path="ooty-Packages" element={<Ooty></Ooty>}></Route>
        <Route path="manali-Packages" element={<Manali></Manali>} />
        <Route path="goa-Packages" element={<Goa></Goa>} /> */}

          {/* Explore-Packgess Page Route */}

          <Route path="/manali-Packages" element={<Manali />} />
          <Route path="/goa-Packages" element={<Goa />} />
          <Route path="/kerala-Packages" element={<Kerala />} />
          <Route path="/rajasthan-Packages" element={<Rajasthan />} />
          <Route path="/sikkim-Packages" element={<Sikkim />} />
          <Route path="/kashmir-Packages" element={<Kashmir />} />
          <Route path="/rishikesh-Packages" element={<Rishikesh />} />
          <Route path="/andaman-Packages" element={<Andman />} />
          <Route path="/agra-Packages" element={<Agra />} />
          <Route path="/Udaipur-Packages" element={<Udaipur />} />
          <Route path="/ladakh-Packages" element={<Ladakh />} />
          <Route path="/Ooty-Packages" element={<Ooty />} />
          <Route path="/ladakh-Packages" element={<Ooty />} />



          <Route path="/booking/:packageId" element={<BookingForm />} />
          <Route path="/my-bookings" element={<MyBookings />} >
          </Route>

          <Route path="/my-profile" element={<UserProfilePopup />} />


          {/* All States Routing */}
          <Route path="/Maharashtra" element={<Maharashtra />} />

          {/* While */}
          <Route path="*" element={<PageNotFound />} />






          {/* <Route path="2N-3D" element={<CustomTourPage></CustomTourPage>} /> */}

        </Routes>
      </Suspense>

      <Outlet />

    </>
  );
}



export default App;
