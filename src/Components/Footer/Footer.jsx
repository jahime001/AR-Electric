import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="Footer">
      <div className="footer-container">
        <div className="footer-left">
          <div className="footer-brand">
            <img
              src="/images/AR-ELECTRIC LOGO.PNG"
              alt="AR Electric Logo"
              className="footer-logo"
            />
            <h1>AR Electric</h1>
          </div>
          <Link to="/contact" className="footer-button">
            Let's Talk
          </Link>
          <div className="footer-contact">
            <p>(978)-397-9077</p>
            <p>arelectric@gmail.com</p>
            <p>Salem, New Hampshire, 03073</p>
          </div>
        </div>

        <div className="footer-right">
          <div className="footer-links">
            <p>Website</p>
            <a href="#home">Home</a>
            <a href="#about">About Us</a>
            <Link to="/services">Our Services</Link>
            <a href="#why">Why Choose Us</a>
            <a href="#gallery">Gallery</a>
          </div>
          <div className="footer-links">
            <p>Help?</p>
            <Link to="/contact">Contact Us</Link>
            <a href="#blog">Blog</a>
          </div>
          <div className="footer-links">
            <p>Community</p>
            <a href="#x">X</a>
            <a href="#linkedin">LinkedIn</a>
            <a href="#instagram">Instagram</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © 2025 AR Electric. Designed by{" "}
          <a
            href="https://jahimecameau.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Jahime Cameau
          </a>
        </p>
        <Link to="/privacy">Privacy Policy</Link>
      </div>
    </footer>
  );
}
