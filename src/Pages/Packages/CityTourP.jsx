// pages/TourPackages/CityTourP.jsx
import React from 'react';
import BaseTourPage from './BaseTourPage';
import api from '../../utils/api';

const CityTourP = () => {
  return (
    <BaseTourPage
      title="City Tours"
      subtitle="Discover the heartbeat of amazing cities with our immersive urban adventures."
      themeColor="city"
      icon="🌆"
      heroImage="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800"
      fetchApi1={() => api.get('/adventure-tours/getalladventurepackage1')}
      fetchApi2={() => api.get('/adventure-tours/getalladventurepackage2')}
      stats={{
        destinations: '60+',
        experiences: '180+',
        travelers: '20k+',
        rating: 4.8
      }}
    />
  );
};

export default CityTourP;