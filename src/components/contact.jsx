/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/iframe-has-title */
import { IoLogoFacebook, IoLogoYoutube } from "react-icons/io";
import { FiInstagram } from "react-icons/fi";
import React from "react";

const Contact = () => {
  return (
    <section className="footer-section">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-logo-section">
            <p className="footer-description">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
            </p>
            <ul className="footer-socials">
              <li>
                <a
                  href="https://www.facebook.com"
                  className="social-link"
                  aria-label="Facebook"
                >
                  <IoLogoFacebook className="social-icon" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com"
                  className="social-link"
                  aria-label="Instagram"
                >
                  <FiInstagram className="social-icon" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com"
                  className="social-link"
                  aria-label="YouTube"
                >
                  <IoLogoYoutube className="social-icon" />
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-links-section">
            <p className="footer-section-title">Company</p>
            <ul className="footer-links">
              <li>
                <a href="#" className="footer-link">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Works
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Career
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-links-section">
            <p className="footer-section-title">Help</p>
            <ul className="footer-links">
              <li>
                <a href="#" className="footer-link">
                  Customer Support
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Delivery Details
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-map-section">
            <p className="footer-section-title">Our Location</p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120717.69823274073!2d72.74262567824347!3d19.000849758995866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce221ba6ff37%3A0x712862a633fcc849!2sIntegrate%20360%20-%20Digital%20Marketing%20Agency!5e0!3m2!1sen!2sin!4v1725275322765!5m2!1sen!2sin"
              width="380"
              height="250"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <p className="footer-copy">
          &copy; {new Date().getFullYear()} Integrate360. All Rights Reserved.
        </p>
      </div>
    </section>
  );
};

export default Contact;
