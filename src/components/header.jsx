import React, { useState, useEffect, useRef } from "react";
import brandLogo from "../../src/assets/brand-connection-logo.png";
import './header.css';

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

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", closeMenu);
    return () => {
      document.removeEventListener("mousedown", closeMenu);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsMobileMenuOpen(false);
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="header">
        <div className="header-logo">
          <a href="/">
            <img src={brandLogo} alt="" className="brand-logo" />
          </a>
        </div>
        <div className="header-nav">
          <a href="/Brands" className="header-nav-tags">
            BRANDS
          </a>
          {/* <div className="dropdown" >
            <button className="dropbtn" >DIRECT RETAIL</button>
            <div className="dropdown-content">
              <a href="/Partner" className="dropdown-content-link">
                Partners
              </a>
              <a href="/Direct" className="dropdown-content-link">
                Direct Retails
              </a>
            </div>
          </div> */}
          <a href="./#marquepartner" className="header-nav-tags">
            PARTNERS
          </a>
            <a  href="./Direct" className="header-nav-tags">
            DIRECT RETAIL
          </a>
         
          <a href="/Ecom" className="header-nav-tags">
            E-COMMERCE
          </a>
          <a href="/BeyondUs" className="header-nav-tags">
            BEYOND
          </a>
         
          <a href="/ContactUs" className="header-nav-tags">
            CONTACT US
          </a>
        </div>
        <div className="header-right">
          {/* <a href="tel:+971 507 7082291" alt="" className="header-phone">
            +971 507 708 2291
          </a> */}
          {/* <div className="divider1"></div> */}
          {/* <div>
            <button className="visit-office-button">VISIT OFFICE</button>
          </div> */}
        </div>
        <div className="mobile-header-nav-toggle">
          <a className="Mobile-Menu-toggle" onClick={(e) => toggleMenu(e)} >
            ☰
          </a>
          {isMobileMenuOpen && (
            <div className="mobile-menu" ref={mobileMenuRef}>
              <a href="/Brands" onClick={handleLinkClick}>
                BRANDS
              </a>
              <a href="./#marquepartner" onClick={handleLinkClick}>
                PARTNERS
              </a>
              <a href="/Direct" onClick={handleLinkClick}>
                DIRECT RETAIL
              </a>
              <a href="/Ecom" onClick={handleLinkClick}>
              E-COMMERCE
              </a>
              <a href="/BeyondUs" onClick={handleLinkClick}>
                BEYOND 
              </a>
             
              <a href="/ContactUs" onClick={handleLinkClick}>
                CONTACT US
              </a>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
