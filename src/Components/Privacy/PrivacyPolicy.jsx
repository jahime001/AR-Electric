import React from "react";
import "./PrivacyPolicy.css";

export default function PrivacyPolicy() {
  return (
    <div className="Privacy">
      <div className="privacy-container">
        <div className="privacy-header">
          <h1>Privacy Policy</h1>
          <p>Last updated: July 7, 2025</p>
        </div>
        <div className="privacy-subheader">
          <p>
            At <strong>AR Electric</strong>, we respect your privacy and are
            committed to protecting your personal information. This page
            explains what we collect and how we use it.
          </p>
        </div>
        <div className="privacy-content">
          <h2>Information We Collect</h2>
          <p>
            When you fill out the contact form on our website, we collect your
            full name, email address, phone number, and the message you submit.
            This information is provided by you voluntarily and is used solely
            for communication related to our services.
          </p>

          <h2>How We Use Your Information</h2>
          <p>
            We use your personal information to respond to inquiries, provide
            quotes or service details, and follow up with you regarding ongoing
            or completed projects. We do not use your data for marketing
            purposes or share it with third parties beyond what is required to
            deliver our services.
          </p>

          <h2>Third-Party Services</h2>
          <p>
            We use <strong>EmailJS</strong>, a third-party service, to handle
            contact form submissions and send them securely to our business
            email. You can view their privacy policy on their website to
            understand how they handle and protect your data. You can read their{" "}
            <a
              href="https://www.emailjs.com/legal/privacy-policy/"
              target="_blank"
              rel="noreferrer"
            >
              Privacy Policy here
            </a>
            .
          </p>

          <h2>Your Rights</h2>
          <p>
            You have the right to access the personal information we store about
            you. If you wish to correct or delete your data, you can contact us
            directly at jahimecameau@gmail.com and we will assist you promptly.
          </p>

          <h2>Changes</h2>
          <p>
            We may update this Privacy Policy occasionally to reflect any
            changes in our practices or legal obligations. Any updates will be
            posted here with the new effective date. If you have any questions
            about this policy or how we handle your data, please don’t hesitate
            to reach out.
          </p>
        </div>
      </div>

      <div className="footer-copyright">
        <p>© 2025 AR Electric. All rights reserved.</p>
        <p>Built by Jahime Cameau</p>
      </div>
    </div>
  );
}
