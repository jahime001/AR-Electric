import React from "react";
import "./Hero.css";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-left">
        <h1>
          Bright Ideas, Professional <br /> Solutions
        </h1>
        <p>
          At AR Electric, we deliver safe, code-compliant electrical services —
          from panel upgrades to EV chargers and full-scale wiring.
        </p>
        <div className="hero-buttons">
          <Link to="/contact" className="btn-secondary">
            Get a Free Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
