// src/utils/signaling.js
import { io } from 'socket.io-client';

// Connect to signaling server
const socket = io('http://localhost:5000'); // Replace with your signaling server URL

// Send signaling data
export const sendOffer = (offer, to) => {
  socket.emit('offer', { offer, to });
};

export const sendAnswer = (answer, to) => {
  socket.emit('answer', { answer, to });
};

export const sendIceCandidate = (candidate, to) => {
  socket.emit('ice-candidate', { candidate, to });
};

// Register event listeners
export const onOffer = (callback) => {
  socket.on('offer', callback);
};

export const onAnswer = (callback) => {
  socket.on('answer', callback);
};

export const onIceCandidate = (callback) => {
  socket.on('ice-candidate', callback);
};

export const getSocketId = () => socket.id;

export default socket;
