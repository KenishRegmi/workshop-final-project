import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Aboutus from "./components/Aboutus";
import Games from "./components/Games";
import Quizes from "./components/Quizes";
import MathBlaster from "./components/MathBlaster"; // Import the MathBlaster component

function App() {
  const [leaderboard, setLeaderboard] = useState([]);

  // Function to update the leaderboard
  const handleUpdateLeaderboard = (score) => {
    const newLeaderboard = [...leaderboard, { player: "Player 1", score }];
    setLeaderboard(newLeaderboard);
  };

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<Games/>} />
        <Route path="/quizes" element={<Quizes />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/math" element={<MathBlaster />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
