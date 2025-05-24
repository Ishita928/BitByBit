import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./frontend/Home";
import TelehealthSession from './pages/TelehealthSession';
import { WebRTCProvider } from './context/WebRTCContext';
import InputDetails from './components/InputDetails'


function App() {
  return (
    <Router>
      <WebRTCProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/video" element={<TelehealthSession />} />
          <Route path="/form" element={<InputDetails />} />
        </Routes>
      </WebRTCProvider>
    </Router>
  );
}

export default App;

