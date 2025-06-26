import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <header className="navbar">
      <nav className="nav-container">
        <div className="nav-left">
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/why-us">Why Choose Us</Link>
        </div>

        <div className="nav-center">
        <img src="/images/AR-ELECTRIC LOGO.PNG" alt="AR Electric Logo" />
        </div>

        <div className="nav-right">
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact Us</Link>
        </div>
      </nav>
    </header>
  )
}
