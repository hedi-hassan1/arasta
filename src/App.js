import React from "react";
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ScrollToTop from "./pages/ScrollToTop";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Connect from "./pages/Connect";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/connect" element={<Connect />} />
          {/* old addresses from the previous site */}
          <Route path="/programs" element={<Navigate to="/services" replace />} />
          <Route path="/blogs" element={<Navigate to="/" replace />} />
          <Route path="/post" element={<Navigate to="/" replace />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}
