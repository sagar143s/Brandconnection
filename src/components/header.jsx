import React, { useState, useEffect, useRef } from "react";
import brandLogo from "../../src/assets/brand-connection-logo.png";
export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);

  const toggleMenu = (e) => {
    e.stopPropagation();
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMenu = (e) => {
    if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target)) {
      setIsMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", closeMenu);
    return () => {
      document.removeEventListener("click", closeMenu);
    };
  }, []);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };
  return (
    <>
      <div className="header">
        <div className="header-logo">
          <a href="/">
            <img src={brandLogo} alt="" className="brand-logo" />
          </a>
        </div>
        <div className="header-nav">
          <a href="/BrandPage" className="header-nav-tags">
            BRANDS
          </a>
          <div className="dropdown">
            <button className="dropbtn">RETAIL</button>
            <div className="dropdown-content">
              <a href="/PartnerPage" className="dropdown-content-link">
                Partner
              </a>
              <a href="/DirectPage" className="dropdown-content-link">
                Direct Retails
              </a>
            </div>
          </div>
          <a href="/BeyondUsPage" className="header-nav-tags">
            BEYOND US
          </a>
          <a href="/HistoryPage" className="header-nav-tags">
            HISTORY
          </a>
          <a href="/ContactUsPage" className="header-nav-tags">
            CONTACT
          </a>
        </div>
        <div className="header-right">
          <a href="tel:+971 507 7082291" alt="" className="header-phone">
            +971 507 708 2291
          </a>
          <div className="divider1"></div>
          <div>
            <button className="visit-office-button">VISIT OFFICE</button>
          </div>
        </div>
        <div className="mobile-header-nav-toggle">
          <button className="Mobile-Menu-toggle" onClick={(e) => toggleMenu(e)}>
            ☰
          </button>
          {isMobileMenuOpen && (
            <div className="mobile-menu" ref={mobileMenuRef}>
              <a href="/BrandPage" onClick={handleLinkClick}>
                BRANDS
              </a>
              <a href="/PartnerPage" onClick={handleLinkClick}>
                PARTNERS
              </a>
              <a href="/DirectPage" onClick={handleLinkClick}>
                DIRECT RETAILS
              </a>
              <a href="/BeyondUsPage" onClick={handleLinkClick}>
                BEYOND US
              </a>
              <a href="/HistoryPage" onClick={handleLinkClick}>
                HISTORY
              </a>
              <a href="/ContactUsPage" onClick={handleLinkClick}>
                CONTACT
              </a>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
