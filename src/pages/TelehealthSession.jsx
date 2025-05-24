// src/pages/TelehealthSession.jsx
import React from 'react';
import VideoPlayer from '../components/VideoPlayer';
import Controls from '../components/Controls';

const TelehealthSession = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <h1 className="text-2xl text-center font-bold p-4">Telehealth Video Consultation</h1>
      <VideoPlayer />
      <Controls />
    </div>
  );
};

export default TelehealthSession;
