import React, { useState } from "react";
import "./quran.css";
import Footer from "../components/Footer";

const surahs = [
  {
    name: "Surah Al-Fatiha",
    audio: "/audio/fatiha.mp3",
    video: "/video/fatiha.mp4",
  },
  {
    name: "Surah Al-Ikhlas",
    audio: "/audio/ikhlas.mp3",
    video: "/video/ikhlas.mp4",
  },
  {
    name: "Surah Al-Nas",
    audio: "/audio/nas.mp3",
    video: "/video/nas.mp4",
  },
];

const Quran = () => {
  const [showPDF, setShowPDF] = useState(false);
  const [selectedSurah, setSelectedSurah] = useState(surahs[0]);

  return (
    <>
      <div className="container py-5">
        <h2 className="fw-bold text-center mb-4">Quran Reader</h2>

        <div className="row g-4">
          {/* ===== PDF SECTION ===== */}
          <div className="col-lg-6">
            <div className="quran-box">
              <h5 className="section-title">📘 Quran (Kanzul Iman – PDF)</h5>

              <div className="d-flex gap-2 mb-3">
                <a
                  href="https://alqurankarim.net/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-primary"
                >
                  🌐 Read Quran Online
                </a>
              </div>
            </div>
          </div>

          {/* ===== AUDIO + VIDEO SECTION ===== */}
          <div className="col-lg-6">
            <div className="quran-box">
              <h5 className="section-title">🎧 Audio / 🎥 Video Tilawat</h5>

              {/* Surah Selector */}
              <select
                className="form-select mb-3"
                value={selectedSurah.name}
                onChange={(e) =>
                  setSelectedSurah(
                    surahs.find((s) => s.name === e.target.value),
                  )
                }
              >
                {surahs.map((surah, index) => (
                  <option key={index} value={surah.name}>
                    {surah.name}
                  </option>
                ))}
              </select>

              {/* Audio */}
              <audio controls className="w-100 mb-3">
                <source src={selectedSurah.audio} type="audio/mpeg" />
              </audio>

              {/* Video */}
              <video controls className="w-100 video-player">
                <source src={selectedSurah.video} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>

        {/* ===== PDF MODAL ===== */}
        {showPDF && (
          <div className="pdf-modal">
            <button className="close-btn" onClick={() => setShowPDF(false)}>
              ✖
            </button>
            <iframe
              src="/quran-kanzul-iman.pdf"
              title="Quran PDF"
              className="pdf-fullscreen"
            ></iframe>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Quran;
