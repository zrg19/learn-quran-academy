import React, { useState } from "react";
import "./instructors.css";
import Footer from "../components/Footer";

const instructors = [
  {
    img: "/teacher-1.png",
    name: "Qari Waqar Ali",
    role: "Quran & Tajweed Expert",
    bio: "Qari Waqar Ali has over 10 years of experience teaching Quran with Tajweed to kids and adults online.",
  },
  {
    img: "/teacher-3.jpeg",
    name: "Ms. Amina",
    role: "Female Quran Instructor",
    bio: "Ms. Amina specializes in teaching kids and sisters with patience and effective learning techniques.",
  },
  {
    img: "/teacher-2.png",
    name: "Ustad Yusuf",
    role: "Hifz & Memorization",
    bio: "Expert in Quran memorization (Hifz) with structured lesson plans.",
  },
];

const Instructors = () => {
  const [selectedTeacher, setSelectedTeacher] = useState(null);

  return (
    <>
      <section className="instructors-section">
        <div className="container text-center">
          <h2 className="section-title">Qualified Quran Instructors</h2>
          <p className="section-desc">
            Learn Quran online with our experienced and certified teachers.
          </p>

          <div className="instructors-grid">
            {instructors.map((inst, i) => (
              <div key={i} className="instructor-card">
                <div className="img-box">
                  <img src={inst.img} alt={inst.name} />
                </div>

                <h5 className="inst-name">{inst.name}</h5>
                <p className="inst-role">{inst.role}</p>

                {/* SOCIAL ICONS */}
                <div className="social-icons">
                  <i className="bi bi-facebook"></i>
                  <i className="bi bi-whatsapp"></i>
                  <i className="bi bi-envelope"></i>
                </div>

                {/* PROFILE BUTTON */}
                <button
                  className="btn btn-success btn-sm mt-3"
                  onClick={() => setSelectedTeacher(inst)}
                >
                  View Profile
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MODAL ===== */}
      {selectedTeacher && (
        <div className="custom-modal">
          <div className="modal-box">
            <span
              className="close-btn"
              onClick={() => setSelectedTeacher(null)}
            >
              &times;
            </span>

            <img
              src={selectedTeacher.img}
              alt={selectedTeacher.name}
              className="modal-img"
            />

            <h3>{selectedTeacher.name}</h3>
            <h6>{selectedTeacher.role}</h6>
            <p>{selectedTeacher.bio}</p>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default Instructors;
