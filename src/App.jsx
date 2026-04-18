import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import AllSameCatProducts from "./pages/AllSameCatProducts";
import AllProducts from "./pages/AllProducts";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:categoryName" element={<AllSameCatProducts />} />
          <Route path="/allProducts" element={<AllProducts />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
