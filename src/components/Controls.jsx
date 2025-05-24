// src/components/Controls.jsx
import React, { useContext, useState } from 'react';
import WebRTCContext from '../context/WebRTCContext';

const Controls = () => {
  const { callUser } = useContext(WebRTCContext);
  const [peerId, setPeerId] = useState('');

  const handleCall = () => {
    if (peerId.trim()) {
      callUser(peerId.trim());
    } else {
      alert('Please enter peer ID to call.');
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center gap-4">
      <input
        type="text"
        placeholder="Enter Peer ID"
        value={peerId}
        onChange={(e) => setPeerId(e.target.value)}
        className="px-4 py-2 rounded-lg bg-gray-800 text-white placeholder-gray-400 border border-gray-600 focus:outline-none"
      />
      <button
        onClick={handleCall}
        className="px-6 py-2 rounded-lg bg-green-500 hover:bg-green-600 text-white font-medium transition"
      >
        Call
      </button>
    </div>
  );
};

export default Controls;
