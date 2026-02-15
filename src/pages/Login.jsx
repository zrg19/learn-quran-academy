import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import "./login.css";

const Registration = () => {
  return (
    <>
      <div className="container py-4">
        {/* Breadcrumb */}
        <div className="breadcrumb-box">
          <Link to="/" className="breadcrumb-link">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="active">Registration</span>
        </div>

        <div className="row g-4">
          {/* LEFT CONTENT */}
          <div className="col-lg-8">
            <div className="card custom-card">
              <div className="card-header bg-success text-white">
                Online Quran Tutoring (Live)
              </div>
              <div className="card-body">
                <p>
                  We have qualified instructors and we will use the latest state
                  of the art technology for these classes. You will just need a
                  computer and internet access and our qualified engineers will
                  help you with the initial setup. We are offering the following
                  classes:
                </p>

                <ul className="list">
                  <li>Arabic Language</li>
                  <li>Basic Quran Reading Lessons</li>
                  <li>Quran Reading With Tajweed</li>
                  <li>Quran Translation</li>
                  <li>Quran Memorization</li>
                  <li>Qirat Competition</li>
                  <li>Basic Islamic Education</li>
                </ul>
              </div>
            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="col-lg-4">
            <div className="card custom-card mb-4">
              <div className="card-header bg-success text-white">
                PROMOTE QURAN LEARNING
              </div>
              <div className="card-body">
                <p>
                  Pass the knowledge of Quran by referring your friends &
                  relatives to this website. If you own a website, help promote
                  this site by linking to Quran Learning.
                </p>
              </div>
            </div>

            <div className="card signup-card success-card">
              <p className="fw-bold text-white mb-3">
                Sign up now for a 2 day free trial evaluation.
              </p>
              <button className="btn btn-outline-light fw-bold px-4">
                Sign Up Now →
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-4">
        <div className="row g-4">
          {/* LEFT FORM */}
          <div className="col-lg-8">
            <div className="card custom-card">
              <div className="card-header bg-success text-white">
                Student Registration
              </div>

              <div className="card-body">
                <p className="text-muted">
                  All fields marked in <span className="text-danger">*</span>{" "}
                  are required.
                </p>

                <h5 className="fw-bold text-center mb-4">Basic Information</h5>

                {/* Student Name */}
                <div className="row mb-3 align-items-center">
                  <label className="col-md-3 col-form-label fw-semibold">
                    Student Name <span className="text-danger">*</span>
                  </label>
                  <div className="col-md-6 d-flex">
                    <span className="input-group-text me-2">👤</span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="First Name"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="row mb-3 align-items-center">
                  <label className="col-md-3 col-form-label fw-semibold">
                    Email <span className="text-danger">*</span>
                  </label>
                  <div className="col-md-6 d-flex">
                    <span className="input-group-text me-2">✉️</span>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email Address"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div className="row mb-3 align-items-center">
                  <label className="col-md-3 col-form-label fw-semibold">
                    Phone <span className="text-danger">*</span>
                  </label>
                  <div className="col-md-6 d-flex">
                    <span className="input-group-text me-2">📞</span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="201-232-0025"
                    />
                  </div>
                </div>

                {/* MS Teams */}
                <div className="row mb-3 align-items-center">
                  <label className="col-md-3 col-form-label fw-semibold">
                    MS Teams ID
                  </label>
                  <div className="col-md-6 d-flex">
                    <span className="input-group-text me-2">👤</span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="MS Teams ID"
                    />
                  </div>
                </div>

                {/* Country */}
                <div className="row mb-3 align-items-center">
                  <label className="col-md-3 col-form-label fw-semibold">
                    Country <span className="text-danger">*</span>
                  </label>
                  <div className="col-md-6 d-flex">
                    <span className="input-group-text me-2">🌍</span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Country"
                    />
                  </div>
                </div>

                {/* City */}
                <div className="row mb-3 align-items-center">
                  <label className="col-md-3 col-form-label fw-semibold">
                    City
                  </label>
                  <div className="col-md-6 d-flex">
                    <span className="input-group-text me-2">📍</span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="City"
                    />
                  </div>
                </div>

                {/* Program */}
                <div className="row mb-3 align-items-center">
                  <label className="col-md-3 col-form-label fw-semibold">
                    Program
                  </label>
                  <div className="col-md-6 d-flex">
                    <span className="input-group-text me-2">📋</span>
                    <select className="form-select">
                      <option>Select a Program</option>
                      <option>Noorani Qaida</option>
                      <option>Quran Reading</option>
                      <option>Tajweed</option>
                      <option>Hifz</option>
                    </select>
                  </div>
                </div>

                {/* Preferred Days */}
                <div className="row mb-4 align-items-center">
                  <label className="col-md-3 col-form-label fw-semibold">
                    Preferred Days
                  </label>
                  <div className="col-md-6 d-flex">
                    <span className="input-group-text me-2">📅</span>
                    <select className="form-select">
                      <option>Select Preferred Days</option>
                      <option>Mon - Wed - Fri</option>
                      <option>Tue - Thu</option>
                      <option>Weekend</option>
                    </select>
                  </div>
                </div>

                <div className="text-center">
                  <button className="btn btn-primary px-5 fw-bold">
                    Submit Registration
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="col-lg-4">
            <div className="card custom-card success-card">
              <div className="card-header success-header text-white text-center">
                CONNECT WITH US
              </div>

              <div className="card-body  text-center">
                <div className="social-icons d-flex justify-content-center gap-3 fs-4">
                  <span className="icon fb">f</span>
                  <span className="icon tw">t</span>
                  <span className="icon yt">y</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Registration;
