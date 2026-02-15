import React, { useEffect } from "react";
import "./home.css";
import Footer from "../components/Footer";

const Home = () => {
  const cardsData = [
    {
      title: "Noorani Qaida",
      text: "Learn basic Arabic letters and pronunciation.",
      img: "/card-img-1.png",
    },
    {
      title: "Quran Reading",
      text: "Learn Quran reading with proper Tajweed.",
      img: "/card-img-2.avif",
    },
    {
      title: "Quran Tajweed",
      text: "Master Tajweed rules with expert teachers.",
      img: "/card-img-3.png",
    },
    {
      title: "Quran Memorization (Hifz)",
      text: "Memorize Quran step by step with guidance.",
      img: "/card-img-4.png",
    },
    {
      title: "Quran Translation",
      text: "Understand Quran with meaning and explanation.",
      img: "/card-img-5.png",
    },
    {
      title: "Islamic Studies",
      text: "Learn basic Islamic teachings and duas.",
      img: "/card-img-6.png",
    },
    {
      title: "Female Quran Teachers",
      text: "Qualified female teachers for kids & sisters.",
      img: "/card-img-7.png",
    },
    {
      title: "Kids Special Classes",
      text: "Interactive Quran classes designed for kids.",
      img: "/card-img-8.png",
    },
    {
      title: "Adults Quran Learning",
      text: "Flexible Quran learning for adults of all ages.",
      img: "/card-img-9.png",
    },
    {
      title: "Quran Reading",
      text: "Flexible Quran learning for adults of all ages.",
      img: "/card-img-10.png",
    },
  ];

  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.3 },
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ===== CAROUSEL ===== */}
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        {/* Indicators */}
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
          ></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="/bg-3.avif"
              className="d-block w-100 carousel-img"
              alt="Slide 1"
            />
            <div className="carousel-caption">
              <h5>Welcome to IqraHub Academy</h5>
              <p>Learn Quran online with certified teachers</p>
            </div>
          </div>

          <div className="carousel-item">
            <img
              src="/bg-4.jpg"
              className="d-block w-100 carousel-img"
              alt="Slide 2"
            />
            <div className="carousel-caption">
              <h5>Welcome to IqraHub Academy</h5>
              <p>Learn Quran online with certified teachers</p>
            </div>
          </div>

          <div className="carousel-item">
            <img
              src="/bg-2.jpg"
              className="d-block w-100 carousel-img"
              alt="Slide 3"
            />
            <div className="carousel-caption">
              <h5>Welcome to IqraHub Academy</h5>
              <p>Learn Quran online with certified teachers</p>
            </div>
          </div>
        </div>

        {/* Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* ===== INFO SECTION ===== */}
      <section className="info-section">
        <div className="container">
          <div className="row align-items-stretch">
            {/* LEFT CARD */}
            <div className="col-lg-4 mb-4 fade-in">
              <div className="info-card h-100 d-flex flex-column">
                <div className="info-card-header">Assalam-o-Alaikum!</div>
                <div className="info-card-body text-center">
                  <img
                    src="/student-3.avif"
                    alt="student"
                    className="profile-img"
                  />
                  <p>
                    Welcome to <span>Quran Learning CANADA</span>. We provide
                    online Quran classes for kids & adults.
                  </p>
                  <p>
                    Learn Quran with Tajweed from qualified teachers at home.
                    This platform offers online Quran classes for kids and
                    adults in CANADA.
                  </p>
                </div>
                <button className="btn btn-success mt-auto">Sign Up Now</button>
              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div className="col-lg-8 mb-4 fade-in">
              <div className="right-content h-100 d-flex flex-column">
                <h2 className="main-heading">ONLINE QURAN CLASSES IN CANADA</h2>
                <p className="sub-heading">
                  Quran with Tajweed for Kids & Adults
                </p>
                <div className="image-box">
                  <img src="/teacher.jpg" alt="Teacher" />
                </div>
                <div className="d-flex flex-wrap gap-3 mt-auto">
                  <button className="btn btn-success">
                    <i className="bi bi-person-video3 me-2"></i>
                    Best Female Quran Teachers
                  </button>
                  <button className="btn btn-warning">
                    <i className="bi bi-book me-1"></i>
                    Quran Memorization HIFZ
                  </button>
                  <button className="btn btn-success">
                    <i className="bi bi-book me-1"></i>
                    Best Quran Reading With Tajweed
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* CONTENT SECTION */}
          <div className="content-section fade-in">
            <h2 className="content-title">
              Online Quran Classes in CANADA – Learn Quran Academy For Kids
              Online
            </h2>
            <p className="content-subtitle">
              Quran Courses with Tajweed for Kids & Adults • Female Teachers •
              Two Days Free Trial
            </p>
            <p className="content-text">
              Our online Quran lessons provide a dynamic distance learning
              solution for mastering the Holy Quran from the comfort of home.
            </p>
          </div>

          {/* BENEFITS */}
          <div className="benefits-section fade-in">
            <h2 className="benefits-title">
              Benefits of Online Quran Learning
            </h2>
            <div className="benefits-list">
              <div className="benefit-item">
                <span className="benefit-heading">Anytime, Anywhere</span>
                <p>
                  Learn from the comfort of your home, no matter where you are.
                </p>
              </div>
              <div className="benefit-item">
                <span className="benefit-heading">Time-Saving Opportunity</span>
                <p>Flexible scheduling to fit your busy lifestyle.</p>
              </div>
              <div className="benefit-item">
                <span className="benefit-heading">Increased Interaction</span>
                <p>Engage more with instructors and peers online.</p>
              </div>
              <div className="benefit-item">
                <span className="benefit-heading">
                  Convenient Home Learning
                </span>
                <p>Study in a comfortable, distraction-free environment.</p>
              </div>
            </div>
          </div>

          {/* ISLAMIC HEADING */}
          <div className="islamic-heading fade-in">
            <h2>
              “Whoever follows a path in the pursuit of knowledge, ALLAH will
              make a path to Paradise easy for him.”
            </h2>
            <span className="reference">(Bukhari)</span>
            <h2 className="islamic-quote">
              O people! I am leaving behind among you the Holy Book (Quran) and
              the Sunnah (way of Prophet ﷺ). If you follow these in letter and
              spirit, you will never be strayed.
            </h2>
            <p>
              Muslims believe Allah revealed the Quran to the Prophet Muhammad
              (P.B.U.H) over 22 years. The Quran is sacred and remains
              unaltered, guiding Muslims to happiness on Earth and peace in the
              afterlife.
            </p>
          </div>

          {/* TAJWEED SECTION */}
          <div className="tajweed-section fade-in">
            <h2 className="tajweed-title">
              And this is a Book which We have revealed as a blessing
            </h2>
            <p className="tajweed-text">
              So follow it and be righteous, that ye may receive mercy. Tajweed
              is the grammar of the Quran and it is very important to learn
              tajweed for correct pronunciation.
            </p>
            <p className="tajweed-text">
              The only way to learn proper Tajweed is through a qualified
              scholar or teacher. This addresses the challenges Muslims face in
              Western countries where Islamic institutes are limited.
            </p>
            <p className="tajweed-text">
              Online Quran tutors and teachers are the best solution. Children
              and adults of any age, color, caste, or creed can learn the Quran.
              Even non-Muslims also benefit from it. (al-Anam, 6/155)
            </p>
          </div>
          <div className="prophet-quote-section fade-in">
            <h2>
              The Messenger of Allah said: Allah has His own people among
              mankind. ‘The people of the Qur’án, the people of Allah and those
              who are closest to Him.’
            </h2>
            <span className="reference">Sunan Ibn e Majah</span>
          </div>
        </div>
      </section>

      {/* ===== CARDS SECTION ===== */}
      <div className="cards-section fade-in">
        <h2 className="text-center mb-4 fw-bold">Our Online Quran Programs</h2>

        <div className="cards-wrapper">
          {cardsData.map((card, index) => (
            <div className="custom-card" key={index}>
              <img src={card.img} className="card-img" alt={card.title} />

              <div className="card-body text-center">
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text">{card.text}</p>
                <a href="/" className="btn btn-success">
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* container END */}
      <Footer />
    </>
  );
};

export default Home;
