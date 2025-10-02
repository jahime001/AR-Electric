import React from "react";
import "./Services.css";
import services from "./servicesData.json";
import Icon from "@mdi/react";
import { Link } from "react-router-dom";

import {
  mdiLightningBolt,
  mdiToolbox,
  mdiEvStation,
  mdiDipSwitch,
  mdiCeilingLight,
  mdiWrench,
  // mdiArrowRight,
} from "@mdi/js";

export default function Services() {
  const iconMap = {
    BasicElectrical: mdiLightningBolt,
    ServiceChanges: mdiToolbox,
    TeslaBatteryChargers: mdiEvStation,
    PanelSwaps: mdiDipSwitch,
    LightInstallations: mdiCeilingLight,
    Troubleshooting: mdiWrench,
  };

  return (
    <div className="Services" id="services">
      <div className="services-header">
        <h2>Our Services</h2>
        <h3>Skilled hands. Trusted service. This is what we do best.</h3>
        <h4>Click To Learn More!</h4>
      </div>

      <div className="service-cards-container">
        {services.map((service, index) => {
          const iconPath = iconMap[service.icon];

          return (
            <Link
              to={`/services/${service.slug}`}
              key={index}
              className="service-card"
            >
              {iconPath && (
                <div className="service-icon-wrapper">
                  <Icon path={iconPath} size={1.5} color="#d8b14e" />
                </div>
              )}

              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
