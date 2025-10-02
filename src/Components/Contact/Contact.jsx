// Contact.jsx
import React, { useState, useEffect } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { Link as RouterLink, useLocation } from "react-router-dom";

export default function Contact() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const subjectFromURL = params.get("subject");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: subjectFromURL || "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const serviceId = "service_glmuk4s";
    const templateId = "template_561v9qy";
    const publicKey = "fPEIKVmXhr1oaeqoB";

    const templateParams = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      subject: formData.subject,
      to_name: "AR Electric",
      message: formData.message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully!", response);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
        setStatus("success");
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        setStatus("error");
        setLoading(false);
      });
  };

  return (
    <div className="Contact">
      {loading ? (
        <div className="loading-screen">
          <div className="loading-wrapper">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="shadow"></div>
            <div className="shadow"></div>
            <div className="shadow"></div>
          </div>
          <p className="loading-text">Sending your message...</p>
        </div>
      ) : status === "success" ? (
        <div className="success-message">
          <h1>Thank you!</h1>
          <h1>Your message has been sent</h1>
          <p>
            We appreciate you reaching out to AR Electric. A member of our team
            will review your message and respond shortly.
          </p>
          <RouterLink to="/" className="back-home-button">
            Back To Home
          </RouterLink>
        </div>
      ) : (
        <div className="contact-container">
          <div className="contact-left">
            <h1>Let’s Get In Touch</h1>
            <h2>Your Project Starts Here</h2>
            <p>
              Whether you’re planning a renovation, need troubleshooting, or a
              full panel upgrade — AR Electric is your licensed, experienced,
              and friendly team.
            </p>
            <div className="contact-info">
              <h3>Contact Information</h3>
              <p>
                <strong>Phone:</strong> (978) 397-9077
              </p>
              <p>
                <strong>Email:</strong> contact@arelectric.com
              </p>
              <p>
                <strong>Service Areas:</strong> MA, NH
              </p>
              <p>
                <strong>Hours:</strong> Mon–Fri: 8am–6pm | Sat: 9am–2pm
              </p>
            </div>
          </div>
          <form className="form" onSubmit={handleSubmit}>
            <h2 className="form-header">Request a Free Estimate</h2>
            <p className="form-subtext">
              Fill out the form below and we’ll get back to you within 24 hours.
            </p>
            <div className="flex">
              <label>
                <input
                  required
                  type="text"
                  name="firstName"
                  className="input"
                  value={formData.firstName}
                  onChange={handleChange}
                />
                <span>first name</span>
              </label>
              <label>
                <input
                  required
                  type="text"
                  name="lastName"
                  className="input"
                  value={formData.lastName}
                  onChange={handleChange}
                />
                <span>last name</span>
              </label>
            </div>

            <label>
              <input
                required
                type="email"
                name="email"
                className="input"
                value={formData.email}
                onChange={handleChange}
              />
              <span>email</span>
            </label>

            <label>
              <input
                required
                type="tel"
                name="phone"
                className="input"
                value={formData.phone}
                onChange={handleChange}
              />
              <span>contact number</span>
            </label>

            <label>
              <select
                required
                name="subject"
                className="input"
                value={formData.subject}
                onChange={handleChange}
              >
                <option value="" disabled hidden></option>
                <option value="Basic Electrical">Basic Electrical</option>
                <option value="Service Changes">Service Changes</option>
                <option value="Tesla Battery Chargers">
                  Tesla Battery Chargers
                </option>
                <option value="Panel Swaps">Panel Swaps</option>
                <option value="Light Installations">Light Installations</option>
                <option value="Troubleshooting">Troubleshooting</option>
                <option value="Other">Other</option>
              </select>
              <span>subject</span>
            </label>

            <label>
              <textarea
                required
                rows="3"
                name="message"
                className="input01"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              <span>message</span>
            </label>

            <button className="fancy" type="submit">
              <span className="top-key"></span>
              <span className="text">submit</span>
              <span className="bottom-key-1"></span>
              <span className="bottom-key-2"></span>
            </button>

            {status === "error" && (
              <p className="error-message">
                ❌ Something went wrong. Please try again.
              </p>
            )}

            <div className="form-nav-buttons">
              <RouterLink to="/services" className="form-nav-button">
                Explore Services
              </RouterLink>
              <RouterLink to="/" className="form-nav-button">
                Return Home
              </RouterLink>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
