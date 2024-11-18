import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "./components/Homepage";
import Navbar from "./components/NavBar";
import AppDevelopmentSection from "./components/AppDevelopmentSection";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/appdev" element={<AppDevelopmentSection />} />
      </Routes>
    </Router>
  );
}


export default App;
