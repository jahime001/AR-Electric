import React, { useState, useEffect } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { Squash as Hamburger } from "hamburger-react";
import "./Nav.css";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showMobileNav, setShowMobileNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isMobile = window.innerWidth <= 768;
      if (!isMobile) return;
      const y = window.scrollY;
      if (y > lastScrollY && y > 50) setShowMobileNav(false);
      else setShowMobileNav(true);
      setLastScrollY(y);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (menuOpen && window.innerWidth <= 768) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => (document.body.style.overflow = "");
  }, [menuOpen]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 768) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header
      className={`navbar ${showMobileNav ? "mobile-show" : "mobile-hide"}`}
    >
      <nav className="nav-container">
        <div className="nav-left">
          <RouterLink to="/" className="nav-logo" aria-label="AR Electric Home">
            <img src="/images/AR-ELECTRIC LOGO.PNG" alt="" />
            <span className="brand-text">AR Electric</span>
          </RouterLink>

          <div className="desktop-only">
            <div className="nav-links">
              <RouterLink
                className={
                  location.pathname === "/services" ? "nav-link-active" : ""
                }
                to="/services"
              >
                Our Services
              </RouterLink>
              <RouterLink
                className={
                  location.pathname === "/gallery" ? "nav-link-active" : ""
                }
                to="/gallery"
              >
                Gallery
              </RouterLink>
            </div>
          </div>
        </div>

        <div className="nav-right desktop-only">
          <RouterLink
            to="/contact"
            className={`nav-contact-btn ${
              location.pathname === "/contact" ? "nav-link-active" : ""
            }`}
          >
            Contact Us
          </RouterLink>
        </div>

        <button
          className="mobile-only mobile-menu-button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobileMenu"
        >
          <Hamburger
            toggled={menuOpen}
            toggle={setMenuOpen}
            size={20}
            duration={0.4}
          />
        </button>
      </nav>

      <div
        id="mobileMenu"
        className={`mobile-menu ${menuOpen ? "open" : ""}`}
        role="dialog"
        aria-modal="true"
      >
        <div className="mobile-menu-top">
          <RouterLink to="/services" onClick={() => setMenuOpen(false)}>
            Our Services
          </RouterLink>
          <RouterLink to="/gallery" onClick={() => setMenuOpen(false)}>
            Gallery
          </RouterLink>
        </div>
        <RouterLink
          to="/contact"
          onClick={() => setMenuOpen(false)}
          className="mobile-menu-contact-button"
        >
          Contact Us
        </RouterLink>
      </div>
    </header>
  );
}
