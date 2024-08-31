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
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
            </p>
            <ul className="footer-socials">
              <li>
                <a href="https://www.facebook.com" className="social-link" aria-label="Facebook">
                  <IoLogoFacebook className="social-icon" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com" className="social-link" aria-label="Instagram">
                  <FiInstagram className="social-icon" />
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com" className="social-link" aria-label="YouTube">
                  <IoLogoYoutube className="social-icon" />
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-links-section">
            <p className="footer-section-title">Company</p>
            <ul className="footer-links">
              <li>
                <a href="#" className="footer-link">About</a>
              </li>
              <li>
                <a href="#" className="footer-link">Features</a>
              </li>
              <li>
                <a href="#" className="footer-link">Works</a>
              </li>
              <li>
                <a href="#" className="footer-link">Career</a>
              </li>
            </ul>
          </div>

          <div className="footer-links-section">
            <p className="footer-section-title">Help</p>
            <ul className="footer-links">
              <li>
                <a href="#" className="footer-link">Customer Support</a>
              </li>
              <li>
                <a href="#" className="footer-link">Delivery Details</a>
              </li>
              <li>
                <a href="#" className="footer-link">Terms & Conditions</a>
              </li>
              <li>
                <a href="#" className="footer-link">Privacy Policy</a>
              </li>
            </ul>
          </div>

          <div className="footer-newsletter-section">
            <p className="footer-section-title">Subscribe to our newsletter</p>
            <form action="#" method="POST" className="newsletter-form">
              <div className="form-group">
                <label htmlFor="email" className="sr-only">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  className="newsletter-input"
                />
              </div>
              <button type="submit" className="newsletter-button">Subscribe</button>
            </form>
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
