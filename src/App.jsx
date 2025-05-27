import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './component/Navbar';
import Service from './component/service';
import Car from './component/Carscard';
import LandingPage1 from './component/Landingpage1';
import LandingPage2 from './component/Landingpage2';
import LandingPage3 from "./component/Landingpage3";
import Contact from './component/Contact';    
import Footer from "./component/Footer";

// Optional: Move each of these to their own files like "pages/Home.js"
const Home = () => (
  <>
    {/* <LandingPage1 />
    <LandingPage2 /> */}
    <LandingPage3 />
    <Service />
  
  </>
);
 
 
function App() {
  return (
    <Router>
      <div className="relative bg-black min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Carscard" element={<Car />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
        <Footer />  
    </Router>
    

  );
}

export default App;


