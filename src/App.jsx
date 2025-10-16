import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero"; 

const App = () => {
  return (
    <Router>
      <Navbar />
      <main className="pt-24"> 
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/products" element={<Hero />} />
          <Route path="/pricing" element={<Hero />} />
          <Route path="/resources" element={<Hero />} />
          <Route path="/about" element={<Hero />} />
          <Route path="/signin" element={<Hero />} />
          <Route path="/help" element={<Hero />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
