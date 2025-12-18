import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Collection from "./pages/Collection";
import Party from "./pages/Party";
import Contact from "./pages/Contact";

import Farmhouseone from "./pages/Farmhouseone";
import Farmhousetwo from "./pages/Farmhousetwo";
import Farmhousethree from "./pages/Farmhousethree";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/collection" element={<Collection />} />

        {/* FARMHOUSE ROUTES */}
        <Route path="/farmhouse-one" element={<Farmhouseone/>} />
        <Route path="/farmhouse-two" element={<Farmhousetwo />} />
        <Route path="/farmhouse-three" element={<Farmhousethree />} />
    

        <Route path="/party" element={<Party />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
