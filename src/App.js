import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Quran from "./pages/Quran";
import Fees from "./pages/Fees";
import Instructors from "./pages/Instructors";
import Login from "./pages/Login";
import "./App.css";
import Footer from "./components/Footer";

// ===== App =====
export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/quran" element={<Quran />} />
        <Route path="/fees" element={<Fees />} />
        <Route path="/instructors" element={<Instructors />} />

        <Route path="/login" element={<Login />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </Router>
  );
}
