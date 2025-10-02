import React, { useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import services from "../Services/servicesData.json";
import Icon from "@mdi/react";
import serviceHeroImg from "/images/service-hero-2.jpg";
import "./ServiceInfo.css";
import {
  mdiLightningBolt,
  mdiToolbox,
  mdiEvStation,
  mdiDipSwitch,
  mdiCeilingLight,
  mdiWrench,
} from "@mdi/js";

const iconMap = {
  BasicElectrical: mdiLightningBolt,
  ServiceChanges: mdiToolbox,
  TeslaBatteryChargers: mdiEvStation,
  PanelSwaps: mdiDipSwitch,
  LightInstallations: mdiCeilingLight,
  Troubleshooting: mdiWrench,
};
import serviceImage from "/images/service-image.jpg";
import Footer from "../Footer/Footer";

export default function ServiceInfo() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const service = services.find((s) => s.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const handleSelectChange = (e) => {
    navigate(`/services/${e.target.value}`);
  };

  const handleContactClick = () => {
    if (!service) return;
    const subject = encodeURIComponent(`Inquiry about ${service.title}`);
    navigate(`/contact?subject=${subject}`);
  };

  if (slug === undefined) {
    return (
      <div className="ServiceList">
        <h1 className="service-list-title">All Our Services</h1>
        <div className="services-intro">
          <div className="intro-row">
            <div className="intro-text">
              <h2>Expert Electrical Services for Homes & Businesses</h2>
              <p>
                At AR Electric, we offer a complete range of electrical services
                backed by years of hands-on experience. From small residential
                repairs to full commercial buildouts, we’re licensed, insured,
                and committed to doing the job right.
              </p>
            </div>
            <div className="gold-photo-placeholder">
              <img
                src={serviceImage}
                alt="Service visual"
                className="service-image"
              />
            </div>
          </div>

          <div className="intro-row reverse">
            <div className="intro-text">
              <h2>Reliable, Code-Compliant, and Built to Last</h2>
              <p>
                Whether you’re renovating your home, adding a Tesla charger, or
                upgrading outdated systems, we follow all local codes and
                national electrical standards to ensure every job is safe and
                future-proof.
              </p>
            </div>
            <div className="gold-photo-placeholder">
              <img
                src={
                  "https://images.unsplash.com/photo-1720371144384-92f98feb2627?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                alt="Service visual"
                className="service-image"
              />
            </div>
          </div>

          <div className="intro-row">
            <div className="intro-text">
              <h3>What Can We Help You With Today?</h3>
              <p>
                Use this page to explore our most requested services. Each card
                gives you a breakdown of what’s included, and when you're ready,
                click to dive deeper into the details or reach out for a quote.
              </p>
            </div>
          </div>
        </div>

        <div className="service-cards-container">
          {services.map((s, i) => {
            const iconPath = iconMap[s.icon];
            return (
              <Link to={`/services/${s.slug}`} key={i} className="service-card">
                {iconPath && (
                  <div className="service-icon-wrapper">
                    <Icon path={iconPath} size={1.5} color="#d8b14e" />
                  </div>
                )}
                <h3>{s.title}</h3>
                <p>{s.description}</p>
              </Link>
            );
          })}
        </div>
      </div>
    );
  }

  if (!service) {
    return (
      <div className="ServiceInfo">
        <h1>Service not found</h1>
        <p>The requested service doesn’t exist.</p>
        <Link to="/services">Back to All Services</Link>
      </div>
    );
  }

  return (
    <div className="Service-hero-Container">
      <img
        src={serviceHeroImg}
        alt={service.title}
        className="service-hero-image"
      />

      <div className="service-dropdown">
        <label>Services:</label>
        <select value={slug} onChange={handleSelectChange}>
          {services.map((s) => (
            <option key={s.slug} value={s.slug}>
              {s.title}
            </option>
          ))}
        </select>
      </div>

      <div className="ServiceInfo">
        <h1>{service.title}</h1>
        <p>{service.details}</p>

        <ul className="service-highlights">
          {service.highlights?.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>

        <button onClick={handleContactClick}>Contact Us About This</button>
      </div>
    </div>
  );
}
