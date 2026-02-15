import React from "react";
import "./courses.css";
import Footer from "../components/Footer";

// course list
const coursesData = [
  {
    title: "Noorani Qaida",
    desc: "Learn basic Arabic letters with proper pronunciation for beginners.",
    icon: "bi bi-journal-bookmark",
  },
  {
    title: "Quran Reading with Tajweed",
    desc: "Correct your Quran recitation with proper Tajweed rules.",
    icon: "bi bi-book",
  },
  {
    title: "Quran Memorization (Hifz)",
    desc: "Step-by-step Quran memorization with experienced teachers.",
    icon: "bi bi-award",
  },
  {
    title: "Quran Translation (Kanzul Iman)",
    desc: "Understand Quran with authentic Urdu translation.",
    icon: "bi bi-translate",
  },
  {
    title: "Islamic Studies",
    desc: "Learn basic Islamic teachings, duas, and daily practices.",
    icon: "bi bi-moon-stars",
  },
  {
    title: "Kids Special Quran Classes",
    desc: "Interactive and engaging Quran classes designed for kids.",
    icon: "bi bi-emoji-smile",
  },
];

const Courses = () => {
  return (
    <>
      <div className="courses-section py-5">
        <div className="container">
          <h2 className="fw-bold text-center mb-2">Our Courses</h2>
          <p className="text-center text-muted mb-5">
            Learn Quran Online with Qualified & Experienced Teachers
          </p>

          <div className="row g-4">
            {coursesData.map((course, index) => (
              <div className="col-md-6 col-lg-4" key={index}>
                <div className="course-card h-100">
                  <div className="course-icon">
                    <i className={course.icon}></i>
                  </div>
                  <h5>{course.title}</h5>
                  <p>{course.desc}</p>
                  <button className="btn btn-success btn-sm mt-auto">
                    Enroll Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Courses;
