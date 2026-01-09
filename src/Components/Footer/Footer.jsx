import React from "react";
import {
  FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaGooglePay, FaCcVisa, FaAmazonPay,
  FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaArrowRight, FaPaypal, FaCcMastercard
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Decorative Top Border */}
      <div className="footer-top-border"></div>

      {/* Main Footer Content */}
      <div className="footer-content">
        {/* Brand Section */}
        <div className="footer-section brand-section">
          <div className="footer-logo">
            <img src="/logo.png" alt="Desi VDESI Travel" className="logo-img"  />
            <h3 className="brand-name">
              <span className="gradient-text">DESI VDESI</span> TOUR'S
            </h3>
          </div>
          <p className="brand-tagline">
            Crafting unforgettable journeys through India's hidden gems and cultural wonders.
          </p>

          <div className="social-links">
            <a href="#" className="social-icon" aria-label="Facebook">
              <FaFacebookF />
              <span className="social-tooltip">Facebook</span>
            </a>
            <a href="#" className="social-icon" aria-label="Instagram">
              <FaInstagram />
              <span className="social-tooltip">Instagram</span>
            </a>
            <a href="#" className="social-icon" aria-label="Twitter">
              <FaTwitter />
              <span className="social-tooltip">Twitter</span>
            </a>
            <a href="#" className="social-icon" aria-label="YouTube">
              <FaYoutube />
              <span className="social-tooltip">YouTube</span>
            </a>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="footer-section">
          <h4 className="section-title">
            <span className="title-underline">Explore</span>
          </h4>
          <ul className="footer-links">
            {[
              "Home", "Destinations", "Tour Packages",
              "Special Offers", "Group Tours", "Custom Itineraries"
            ].map((item) => (
              <li key={item} className="link-item">
                <a href={`/${item.toLowerCase().replace(' ', '-')}`}>
                  <FaArrowRight className="link-icon" />
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Information */}
        <div className="footer-section">
          <h4 className="section-title">
            <span className="title-underline">Contact Us</span>
          </h4>
          <ul className="contact-info">
            <li className="contact-item">
              <div className="contact-icon">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h5>Our Office :<p>123 Travel Street, Mumbai, Maharashtra 400001</p>
                </h5>
              </div>
            </li>
            <li className="contact-item">
              <div className="contact-icon">
                <FaPhoneAlt />
              </div>
              <div>
                <h5>Call Us :  <p>+91 7888251550</p></h5>
              </div>
            </li>
            <li className="contact-item">
              <div className="contact-icon">
                <FaEnvelope />
              </div>
              <div>
                <h5>
                  Email Us: <a href="mailto:tours.desivdesi@gmail.com">tours.desivdesi@gmail.com</a>
                </h5>
              </div>
            </li>
          </ul>
        </div>

        {/* Newsletter Subscription */}
        <div className="footer-section newsletter-section">
          <h4 className="section-title">
            <span className="title-underline">Stay Updated</span>
          </h4>
          <p className="newsletter-text">
            Subscribe to our newsletter for exclusive travel deals and insider tips!
          </p>
          <form className="newsletter-form">
            <div className="input-group" style={{ width: "300px" }}>
              <input
                type="email"
                placeholder="Your email address"
                className="newsletter-input"
                required
              />
              <button type="submit" className="subscribe-btn">
                <span>Subscribe</span>
                <div className="arrow-wrapper">
                  <FaArrowRight />
                </div>
              </button>
            </div>
          </form>
          <div className="payment-methods">
            <p>We accept:</p>
            <div className="payment-icons">

              <a href="#" className="social-icon" aria-label="Google Pay">
                <FaGooglePay />
                <span className="social-tooltip">Google Pay</span>
              </a>
              <a href="#" className="social-icon" aria-label="Mastercard">
                <FaCcMastercard />
                <span className="social-tooltip">Mastercard</span>
              </a>
              <a href="#" className="social-icon" aria-label="Visa">
                <FaCcVisa />
                <span className="social-tooltip">Visa</span>
              </a>
              <a href="#" className="social-icon" aria-label="Amazon Pay">
                <FaAmazonPay />
                <span className="social-tooltip">Amazon Pay</span>
              </a>
              <a href="#" className="social-icon" aria-label="PayPal">
                <FaPaypal />
                <span className="social-tooltip">PayPal</span>
              </a>

            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p className="copyright">
            © {new Date().getFullYear()} Desi V Desi Travel. All rights reserved.
          </p>
          <div className="legal-links">
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
            <a href="/cookies">Cookie Policy</a>
            <a href="/sitemap">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;