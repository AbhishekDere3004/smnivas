import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Offers from "./pages/Offers";
import Blogs from "./components/Blogs";

function App() {
  return (
    <div className="bg-gray-200">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/blogs" element={<Blogs/>}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
