import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Nav from "./Components/Nav/Nav.jsx";
import Hero from "./Components/Hero/Hero.jsx";
import Services from "./Components/Services/Services.jsx";
import About from "./Components/About/About.jsx";
import Gallery from "./Components/Gallery/Gallery.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import PrivacyPolicy from "./Components/Privacy/PrivacyPolicy.jsx";
import ServiceInfo from "./Components/ServiceInfo/ServiceInfo.jsx";
import ScrollToTop from "./ScrollToTop.jsx";
import ServiceArea from "./Components/ServiceArea/ServiceArea.jsx";

function AppContent() {
  const location = useLocation();

  return (
    <div className="App">
      <ScrollToTop />
      {location.pathname !== "/contact" && <Nav />}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Services />
            </>
          }
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/services/:slug" element={<ServiceInfo />} />
        <Route path="/services" element={<ServiceInfo />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
