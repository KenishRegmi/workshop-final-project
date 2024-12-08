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
import Question from "./components/Question";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<div><Home/></div>} />
        <Route path="/games" element={<div><Games /></div>} />
        <Route path="/quizes" element={<div><Quizes /></div>} />
        <Route path="/aboutus" element={<div><Aboutus /></div>} />
        <Route path="/contact" element={<div><Contact/></div>} />
   </Routes>     
      <Footer />
    </BrowserRouter>
  );
}

export default App;
