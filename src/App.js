import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Collection from "./pages/Collection";
import Contact from "./pages/Contact";
import Party from "./pages/Party";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/party" element={<Party/>} />
        <Route path="/contact" element={<Contact />} />
        {/* <Router path="/party" element={<Party/>}/> */}
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
