import React, { useState } from "react";
import Fuse from "fuse.js";
import "./ServiceArea.css";
import serviceAreas from "./ServiceAreas.json";

export default function ServiceArea() {
  const [searchTerm, setSearchTerm] = useState("");
  const [result, setResult] = useState("");
  const [matchedCity, setMatchedCity] = useState("");

  const fuse = new Fuse(serviceAreas, {
    includeScore: true,
    threshold: 0.3,
  });

  const handleSearch = () => {
    if (!searchTerm.trim()) return;

    const results = fuse.search(searchTerm.toLowerCase());

    if (results.length > 0) {
      const match = results[0].item;
      setMatchedCity(match);
      setResult(`✅ Yes! We proudly service ${capitalize(match)}.`);
    } else {
      setMatchedCity("");
      setResult(`❌ Sorry, we do not currently service "${searchTerm}".`);
    }
  };

  const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  return (
    <div className="service-area-page">
      <h1 className="page-title">Where We Work</h1>
      <p className="intro">
        AR Electric proudly serves a growing list of towns and cities across
        Eastern Massachusetts and Southern New Hampshire.
      </p>
      <p className="region-list">
        <strong>Massachusetts Counties:</strong> Suffolk, Middlesex, Norfolk,
        Essex, Plymouth, Bristol <br />
        <strong>New Hampshire (South):</strong> Rockingham, Hillsborough
      </p>
      <p className="summary">
        <strong>
          Proudly servicing over 35 cities across Eastern Massachusetts.
        </strong>
      </p>

      <div className="divider" />

      <h2 className="subheading">Check If We Service Your Area</h2>
      <p className="subtitle">
        Enter your city below to see if it falls within our coverage.
      </p>

      <div className="search-group">
        <input
          type="text"
          placeholder="e.g., Cambridge"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <button onClick={handleSearch} className="search-button">
          Check
        </button>
      </div>

      {result && (
        <div className={`result-message ${matchedCity ? "success" : "error"}`}>
          {result}
        </div>
      )}
    </div>
  );
}
