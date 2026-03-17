// pages/TourPackages/FamilyTourP.jsx
import React from 'react';
import BaseTourPage from './BaseTourPage';
import api from '../../utils/api';

const FamilyTourP = () => {
  return (
    <BaseTourPage
      title="Family Tours"
      subtitle="Create lasting memories with your loved ones on our family-friendly journeys."
      themeColor="family"
      icon="👨‍👩‍👧‍👦"
      heroImage="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800"
      fetchApi1={() => api.get('/adventure-tours/getalladventurepackage1')}
      fetchApi2={() => api.get('/adventure-tours/getalladventurepackage2')}
      stats={{
        destinations: '35+',
        experiences: '100+',
        travelers: '12k+',
        rating: 4.9
      }}
    />
  );
};

export default FamilyTourP;