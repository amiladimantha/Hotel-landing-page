import React from "react";
import "./footer.css";
import cinnamon from "../../static/cinnamon.jpg";
import base from "../../static/cinnamonbase.png";
import end from '../../static/end.png';
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
    <div className="footer-container">
      <div className="top-image">
        <img
          src={cinnamon}
          alt="cinnamon"
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
        />

        <div>
          <img className="base-image" src={base} alt="cinnamon" />
        </div>
      </div>

      <footer className="footer">
        <div className="footer-row">
          <div className="footer-col">
            <h2 className="footer-heading">Corporate information</h2>
            <p className="footer-list"> Cinnamon Hotels & Resorts</p>
            <p className="footer-list"> John Keells Group</p>
          </div>

          <div className="footer-col">
            <h2 className="footer-heading">Blogs</h2>
            <p className="footer-list">Cinnamon Ublog</p>
          </div>

          <div className="footer-col">
            <h2 className="footer-heading">Careers</h2>
            <p className="footer-list">Careers</p>
          </div>
        </div>

        <div className="footer-row">
          <div className="footer-col">
            <h2 className="footer-heading">News and Awards</h2>
            <p className="footer-list"> News</p>
            <p className="footer-list"> Awards</p>
          </div>

          <div className="footer-col">
            <h2 className="footer-heading">Corporate Governance</h2>
            <p className="footer-list">CSR</p>
          </div>
        </div>

        <div className="footer-row">
          <div className="footer-col">
            <h2 className="footer-heading">Data Privacy & Security Policy</h2>
            <p className="footer-list"> Terms & Conditions</p>
            <p className="footer-list"> Privacy Statement</p>
          </div>

          <div className="footer-col">
            <h2 className="footer-heading">Get in Touch</h2>
            <p className="footer-list">Corporate Contact Information</p>
            <p className="footer-list">Hotel Contact Information</p>
          </div>

          <div className="footer-col">
            <h2 className="footer-heading">Follow Us</h2>
            <div className="social-icons">
              <a href="#" className="social-icon">
                <FaFacebook />
              </a>
              <a href="#" className="social-icon">
                <FaTwitter />
              </a>
              <a href="#" className="social-icon">
                <FaLinkedin />
              </a>
              <a href="#" className="social-icon">
                <FaInstagram />
              </a>
              <a href="#" className="social-icon">
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-row">
          <div className="footer-col">
            <h2 className="footer-heading">Get Cinnamon in your inbox</h2>
            <input type="text" className="input-mail" placeholder="Email" />
            <div className="radio-paragraph-container">
              <input type="radio" id="subscribe" name="subscription" />
              <p className="footer-subscribe">
                By checking this box, I consent to the processing of my Personal
                Data by Cinnamon for the purpose and within the Conditions set
                out in this form and the <b>Cinnamon Data Protection Policy*</b>
              </p>
            </div>
          </div>
        </div>
      </footer>

      <div>
        <img  className="end-image" src={end} alt="end" />
      </div>

    </div>
    </>
  );
};

export default Footer;
