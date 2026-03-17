// pages/TourPackages/CustomTourP.jsx
import React from 'react';
import BaseTourPage from './BaseTourPage';
import api from '../../utils/api';

const CustomTourP = () => {
  return (
    <BaseTourPage
      title="Custom Tours"
      subtitle="Your journey, your rules! Design a travel experience that perfectly matches your dreams."
      themeColor="custom"
      icon="🎨"
      heroImage="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800"
      fetchApi1={() => api.get('/adventure-tours/getalladventurepackage1')}
      fetchApi2={() => api.get('/adventure-tours/getalladventurepackage2')}
      stats={{
        destinations: '50+',
        experiences: '150+',
        travelers: '5k+',
        rating: 4.9
      }}
    />
  );
};

export default CustomTourP;