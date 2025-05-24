// src/components/VideoPlayer.jsx
import React, { useContext } from 'react';
import WebRTCContext from '../context/WebRTCContext';
import Controls from './Controls';

const VideoPlayer = () => {
  const { localVideoRef, remoteVideoRef } = useContext(WebRTCContext);

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen bg-gray-900 text-white p-4 space-y-6">
      <h1 className="text-3xl font-semibold">Telehealth Consultation</h1>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="relative w-72 h-48 md:w-96 md:h-64 bg-black rounded-xl overflow-hidden shadow-lg">
          <video
            ref={localVideoRef}
            autoPlay
            muted
            playsInline
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-2 left-2 bg-black bg-opacity-50 px-2 py-1 text-sm rounded">
            You
          </div>
        </div>

        <div className="relative w-72 h-48 md:w-96 md:h-64 bg-black rounded-xl overflow-hidden shadow-lg">
          <video
            ref={remoteVideoRef}
            autoPlay
            playsInline
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-2 left-2 bg-black bg-opacity-50 px-2 py-1 text-sm rounded">
            Patient/Doctor
          </div>
        </div>
      </div>

      <Controls />
    </div>
  );
};

export default VideoPlayer;
