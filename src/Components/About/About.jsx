import React from "react";
import "./About.css";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

export default function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div className="About" id="about">
      <div className="about-container">
        <h2>About Us</h2>
        <div className="about-content">
          <div className="about-text">
            <h1>Powering Your Future with Precision and Integrity</h1>
            <p>
              At AR Electric, we deliver safe, reliable electrical services for
              homes and businesses. From panel upgrades to EV chargers, our
              certified team brings experience, integrity, and code-compliant
              work to every job.
            </p>
            <Link to="/contact" className="about-button">
              Contact Us
            </Link>
          </div>
          <div className="about-stat-container">
            <div className="about-stats" ref={ref}>
              <div className="stat">
                <h3>{inView ? <CountUp end={6} duration={5} /> : 0}+</h3>
                <p>Years of Experience</p>
              </div>
              <div className="stat">
                <h3>{inView ? <CountUp end={100} duration={5} /> : 0}+</h3>
                <p>Projects Completed</p>
              </div>
              <div className="stat">
                <h3>{inView ? <CountUp end={99} duration={5} /> : 0}%</h3>
                <p>Client Satisfaction</p>
              </div>
              <div className="stat">
                <h3>0</h3>
                <p>Safety Violations</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
