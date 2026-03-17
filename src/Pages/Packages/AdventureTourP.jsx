// pages/TourPackages/AdventureTourP.jsx
import React from 'react';
import BaseTourPage from './BaseTourPage';
import api from '../../utils/api';

const AdventureTourP = () => {
  return (
    <BaseTourPage
      title="Adventure Tours"
      subtitle="Unleash your inner explorer with thrilling adventures in stunning locations."
      themeColor="adventure"
      icon="🏔️"
      heroImage="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800"
      fetchApi1={() => api.get('/adventure-tours/getalladventurepackage1')}
      fetchApi2={() => api.get('/adventure-tours/getalladventurepackage2')}
      stats={{
        destinations: '40+',
        experiences: '120+',
        travelers: '8k+',
        rating: 4.8
      }}
    />
  );
};

export default AdventureTourP;