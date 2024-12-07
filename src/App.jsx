import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<div>This is home page</div>} />
        <Route path="/games" element={<div>games</div>} />
        <Route path="/quizes" element={<div>games</div>} />
        <Route path="/aboutus" element={<div>about us</div>} />
        <Route path="/contact" element={<div><Contact/></div>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
