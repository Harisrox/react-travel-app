import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaTripadvisor,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container py-5">
        <div className="row">
          <div className="col-md-4 mb-4">
            <h5 className="mb-4">Travel & Tours</h5>
            <p>
              Creating unforgettable travel experiences since 2023. Let us take
              you on a journey you'll never forget.
            </p>
          </div>

          <div className="col-md-2 mb-4">
            <h5 className="mb-4">Explore</h5>
            <ul className="list-unstyled">
              <NavLink to={"/"} className="text-dark">
                <li className="mb-2">Home</li>
              </NavLink>
              <NavLink to={"/travel"} className="text-dark">
                <li className="mb-2">Tours</li>
              </NavLink>
              <li className="mb-2">
                <a href="#!" className="text-dark">
                  Destinations
                </a>
              </li>
              <li className="mb-2">
                <a href="#!" className="text-dark">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-3 mb-4">
            <h5 className="mb-4">Contact</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <FaMapMarkerAlt className="me-2" /> 123 Travel St, Wander City
              </li>
              <li className="mb-2">
                <FaPhone className="me-2" /> +1 234 567 890
              </li>
              <li className="mb-2">
                <FaEnvelope className="me-2" /> info@travelandtours.com
              </li>
            </ul>
          </div>

          <div className="col-md-3 mb-4">
            <h5 className="mb-4">Follow Us</h5>
            <div className="social-links">
              <a href="#!" className="me-3 text-dark">
                <FaFacebook size={20} />
              </a>
              <a href="#!" className="me-3 text-dark">
                <FaInstagram size={20} />
              </a>
              <a href="#!" className="me-3 text-dark">
                <FaTwitter size={20} />
              </a>
              <a href="#!" className="text-dark">
                <FaTripadvisor size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div
        className="text-center py-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        <p className="mb-0">
          &copy; {new Date().getFullYear()} Travel & Tours. Coded by Haris Rehan
          as a practice project.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
