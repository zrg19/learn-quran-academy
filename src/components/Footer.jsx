import React from "react";
import { NavLink } from "react-router-dom";
import "./footer.css";
const Footer = () => {
  return (
    <footer className="footer-dark text-light pt-5">
      <div className="container">
        <div className="row gy-4">
          {/* Left Section */}
          <div className="col-lg-3 col-md-6">
            <img
              src="/q-logo.jpg"
              alt="Quran Learning USA"
              className="img-fluid mb-3 rounded-5 m-auto"
              style={{ maxWidth: "160px" }}
            />
            <h5 className="fw-bold">Online Quran Classes in CANADA</h5>
            <p className="small text-light opacity-75">
              Learn Quran with experienced tutors. Join us to deepen your
              understanding of the Holy Quran.
            </p>

            <div className="d-flex gap-2">
              <a
                className="btn btn-outline-light btn-sm rounded-circle"
                href="/"
              >
                <i className="fab fa-facebook-f">F</i>
              </a>
              <a
                className="btn btn-outline-light btn-sm rounded-circle"
                href="/"
              >
                <i className="fab fa-twitter">T</i>
              </a>
              <a
                className="btn btn-outline-light btn-sm rounded-circle"
                href="/"
              >
                <i className="fab fa-youtube">T</i>
              </a>
            </div>
          </div>

          {/* Courses */}
          <div className="col-lg-3 col-md-6">
            <h5 className="fw-bold border-bottom border-info pb-2">
              Quick Links
            </h5>
            <ul className="list-unstyled small mt-3">
              <li className="mb-2 footer-li">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="mb-2 footer-li">
                <NavLink to="/about">About Us</NavLink>
              </li>
              <li className="mb-2 footer-li">
                <NavLink to="/teachers">Our Teachers</NavLink>
              </li>
              <li className="mb-2 footer-li">
                <NavLink to="/fees">Fees</NavLink>
              </li>
              <li className="mb-2 footer-li">
                <NavLink to="/careers">Careers</NavLink>
              </li>
              <li className="mb-2 footer-li">
                <NavLink to="/blog">Blog</NavLink>
              </li>
              <li className="mb-2 footer-li">
                <NavLink to="/privacy">Privacy Policy</NavLink>
              </li>
              <li className="mb-2 footer-li">
                <NavLink to="/terms">Terms of Use</NavLink>
              </li>
              <li className="mb-2 footer-li">
                <NavLink to="/contact">Contact Us</NavLink>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="col-lg-3 col-md-6">
            <h5 className="fw-bold border-bottom border-info pb-2">
              Our Courses
            </h5>
            <ul className="list-unstyled small mt-3">
              <li className="mb-2 footer-li">
                <NavLink to="/courses/kids">
                  Online Quran Classes for Kids
                </NavLink>
              </li>
              <li className="mb-2 footer-li">
                <NavLink to="/courses/reading">Learn Quran Reading</NavLink>
              </li>
              <li className="mb-2 footer-li">
                <NavLink to="/courses/tajweed">
                  Learn Quran with Tajweed
                </NavLink>
              </li>
              <li className="mb-2 footer-li">
                <NavLink to="/courses/hifz">Quran Memorization Course</NavLink>
              </li>
              <li className="mb-2 footer-li">
                <NavLink to="/courses/translation">
                  Learn Quran Translation
                </NavLink>
              </li>
              <li className="mb-2 footer-li">
                <NavLink to="/courses/islamic">
                  Islamic Education Program
                </NavLink>
              </li>
              <li className="mb-2 footer-li">
                <NavLink to="/courses/arabic">Learn Arabic Language</NavLink>
              </li>
              <li className="mb-2 footer-li">
                <NavLink to="/courses/noorani">Learn Noorani Qaida</NavLink>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-lg-3 col-md-6">
            <h5 className="fw-bold border-bottom border-info pb-2">
              Contact Us
            </h5>

            <div className="bg-light bg-opacity-10 p-3 rounded mb-3 d-flex gap-3">
              <i className="fas fa-phone fs-4 text-info"></i>
              <div>
                <strong>Phone</strong>
                <p className="mb-0 small">+92 321-6458568</p>
              </div>
            </div>

            <div className="bg-light bg-opacity-10 p-3 rounded mb-3 d-flex gap-3">
              <i className="fab fa-whatsapp fs-4 text-success"></i>
              <div>
                <strong>WhatsApp</strong>
                <p className="mb-0 small">+92 321-6458568</p>
              </div>
            </div>

            <div className="bg-light bg-opacity-10 p-3 rounded d-flex gap-3">
              <i className="fas fa-envelope fs-4 text-warning"></i>
              <div>
                <strong>Email</strong>
                <p className="mb-0 small">contact@quranlearning.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center border-top border-light border-opacity-25 mt-4 py-3 small">
        © 2026 Quran Learning CANADA. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
