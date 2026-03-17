// pages/TourPackages/GroupTourP.jsx
import React from 'react';
import BaseTourPage from './BaseTourPage';
import api from '../../utils/api';

const GroupTourP = () => {
  return (
    <BaseTourPage
      title="Group Tours"
      subtitle="Share incredible experiences with like-minded travelers from around the world."
      themeColor="group"
      icon="🚌"
      heroImage="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800"
      fetchApi1={() => api.get('/adventure-tours/getalladventurepackage1')}
      fetchApi2={() => api.get('/adventure-tours/getalladventurepackage2')}
      stats={{
        destinations: '30+',
        experiences: '90+',
        travelers: '15k+',
        rating: 4.7
      }}
    />
  );
};

export default GroupTourP;