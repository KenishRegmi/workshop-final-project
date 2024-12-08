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
import MathBlaster from "./Games/MathBlaster";
import MemoryTest from "./Games/MemoryTest"
import FlagGuesser from "./Games/FlagGuesser";
import PeriodicTableGame from "./Games/PeriodicTableGame";
import MathPuzzleGame from "./Puzzles/MathPuzzleGame";

function App() {

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
        <Route path="/memorytest" element={<MemoryTest />} />
        <Route path="/flagguesser" element={<FlagGuesser />} />
        <Route path="/periodictablegame" element={<PeriodicTableGame />} />
        <Route path="/mathpuzzlegame" element={<MathPuzzleGame />} />



      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
