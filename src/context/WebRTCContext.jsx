// // src/context/WebRTCContext.jsx
// import React, { createContext, useRef, useState, useEffect } from 'react';
// import io from 'socket.io-client';

// const WebRTCContext = createContext();
// const socket = io('http://localhost:5000'); 

// export const WebRTCProvider = ({ children }) => {
//   const localVideoRef = useRef();
//   const remoteVideoRef = useRef();
//   const [peerConnection, setPeerConnection] = useState(null);
//   const [stream, setStream] = useState(null);

//   useEffect(() => {
//     navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then((currentStream) => {
//       localVideoRef.current.srcObject = currentStream;
//       setStream(currentStream);
//     });

//     socket.on('offer', async ({ offer, from }) => {
//       const pc = createPeerConnection(from);
//       await pc.setRemoteDescription(new RTCSessionDescription(offer));
//       const answer = await pc.createAnswer();
//       await pc.setLocalDescription(answer);
//       socket.emit('answer', { answer, to: from });
//     });

//     socket.on('answer', async ({ answer }) => {
//       await peerConnection.setRemoteDescription(new RTCSessionDescription(answer));
//     });

//     socket.on('ice-candidate', async ({ candidate }) => {
//       await peerConnection.addIceCandidate(new RTCIceCandidate(candidate));
//     });
//   }, []);

//   const createPeerConnection = (peerId) => {
//     const pc = new RTCPeerConnection();
//     setPeerConnection(pc);

//     stream.getTracks().forEach((track) => pc.addTrack(track, stream));

//     pc.onicecandidate = (event) => {
//       if (event.candidate) {
//         socket.emit('ice-candidate', { candidate: event.candidate, to: peerId });
//       }
//     };

//     pc.ontrack = (event) => {
//       remoteVideoRef.current.srcObject = event.streams[0];
//     };

//     return pc;
//   };

//   const callUser = async (peerId) => {
//     const pc = createPeerConnection(peerId);
//     const offer = await pc.createOffer();
//     await pc.setLocalDescription(offer);
//     socket.emit('offer', { offer, to: peerId });
//   };

//   return (
//     <WebRTCContext.Provider value={{ localVideoRef, remoteVideoRef, callUser }}>
//       {children}
//     </WebRTCContext.Provider>
//   );
// };

// export default WebRTCContext;







import React, { createContext, useState, useRef, useEffect } from 'react';
import {
  sendOffer,
  sendAnswer,
  sendIceCandidate,
  onOffer,
  onAnswer,
  onIceCandidate,
  getSocketId,
} from '../utils/signaling';

const WebRTCContext = createContext();

export const WebRTCProvider = ({ children }) => {
  const localVideoRef = useRef(null);
  const remoteVideoRef = useRef(null);
  const peerConnectionRef = useRef(null);
  const [localStream, setLocalStream] = useState(null);

  // Configuration for ICE servers (STUN/TURN)
  const iceServers = {
    iceServers: [
      { urls: 'stun:stun.l.google.com:19302' }, // Free public STUN server
    ],
  };

  useEffect(() => {
    // Get user's media
    const getMedia = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: true,
        });
        localVideoRef.current.srcObject = stream;
        setLocalStream(stream);
      } catch (error) {
        console.error('Error accessing media devices.', error);
      }
    };

    getMedia();

    // Handle incoming offer
    onOffer(async ({ offer, from }) => {
      console.log('Received offer from', from);
      const pc = createPeerConnection(from);
      await pc.setRemoteDescription(new RTCSessionDescription(offer));
      const answer = await pc.createAnswer();
      await pc.setLocalDescription(answer);
      sendAnswer(answer, from);
    });

    // Handle incoming answer
    onAnswer(async ({ answer }) => {
      await peerConnectionRef.current.setRemoteDescription(
        new RTCSessionDescription(answer)
      );
    });

    // Handle incoming ICE candidate
    onIceCandidate(async ({ candidate }) => {
      try {
        await peerConnectionRef.current.addIceCandidate(new RTCIceCandidate(candidate));
      } catch (err) {
        console.error('Error adding received ice candidate', err);
      }
    });
  });

  const createPeerConnection = (peerId) => {
    const pc = new RTCPeerConnection(iceServers);
    peerConnectionRef.current = pc;

    // Add local tracks to peer connection
    localStream?.getTracks().forEach((track) => {
      pc.addTrack(track, localStream);
    });

    // Handle ICE candidates
    pc.onicecandidate = (event) => {
      if (event.candidate) {
        sendIceCandidate(event.candidate, peerId);
      }
    };

    // Handle remote track
    pc.ontrack = (event) => {
      remoteVideoRef.current.srcObject = event.streams[0];
    };

    return pc;
  };

  const callUser = async (peerId) => {
    const pc = createPeerConnection(peerId);
    const offer = await pc.createOffer();
    await pc.setLocalDescription(offer);
    sendOffer(offer, peerId);
  };

  return (
    <WebRTCContext.Provider
      value={{
        localVideoRef,
        remoteVideoRef,
        callUser,
        socketId: getSocketId(),
      }}
    >
      {children}
    </WebRTCContext.Provider>
  );
};

export default WebRTCContext;
