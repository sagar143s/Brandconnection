import "./App.css";
import "./style.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../src/components/HomePage/HomePage";
import BrandPage from "./components/BrandPage/BrandPage";
import Header1 from "./components/header1";
import Header from "./components/header";
import Footer from "./components/footer";
import Footer1 from "./components/footer1";
import PartnerPage from "./components/Partner/PartnerPage";
import DirectPage from "./components/DirectPage/DirectPage";
import BeyondUsPage from "./components/BeyondusPage/BeyondUsPage";
import ContactUsPage from "./components/ContactUsPage/ContactUsPage";
import HistoryPage from "./components/HistoryPage/HistoryPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Header1 />
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/BrandPage" element={<BrandPage />} />
          <Route path="/PartnerPage" element={<PartnerPage />} />
          <Route path="/DirectPage" element={<DirectPage />} />
          <Route path="/BeyondUsPage" element={<BeyondUsPage />} />
          <Route path="/ContactUsPage" element={<ContactUsPage />} />
          <Route path="/HistoryPage" element={<HistoryPage />} />
        </Routes>
        <Footer />
        <Footer1 />
      </Router>
    </div>
  );
}

export default App;
