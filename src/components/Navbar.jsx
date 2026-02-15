import { Link } from "react-router-dom";
import "./navbar.css";
export default function Navbar() {
  return (
    <>
      {/* top navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-success py-2">
        <div className="container-fluid d-flex align-items-center w-75 ">
          <div className="navbar-text fw-bold text-white arabic-text">
            مُحَمَّدٌ رَّسُولُ ٱللَّٰهِ
          </div>
          <div className="mx-auto navbar-text text-white arabic-bismillah">
            بِسْمِ ٱللَّٰهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ
          </div>
          <div className="navbar-text fw-bold text-white arabic-text">
            لَا إِلٰهَ إِلَّا ٱللَّٰهُ
          </div>
        </div>
      </nav>

      {/* ===== Main Navbar ===== */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container">
          {/* Logo / Brand */}
          <Link className="navbar-brand fw-bold" to="/">
            📘 IqraHub Quran Academy
          </Link>

          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-white" to="/courses">
                Courses
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-white" to="/instructors">
                Teachers
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-white" to="/quran">
                Quran
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/fees">
                Fees
              </Link>
            </li>

            {/* Social Media Icons */}
            <li className="nav-item d-flex align-items-center ms-3">
              <a
                href="https://www.facebook.com/waqar.ali.228809"
                className="nav-link text-white px-2"
              >
                <i className="bi bi-facebook fs-5"></i>
              </a>
              <a href="/instagram" className="nav-link text-white px-2">
                <i className="bi bi-instagram fs-5"></i>
              </a>
              <a href="/youtube" className="nav-link text-white px-2">
                <i className="bi bi-youtube fs-5"></i>
              </a>
              <a href="/whatsapp" className="nav-link text-white px-2">
                <i className="bi bi-whatsapp fs-5"></i>
              </a>
            </li>

            {/* Login Button */}
            <li className="nav-item ms-2">
              <Link
                className="nav-link btn btn-light text-white px-3"
                to="/login"
              >
                Register Now
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
