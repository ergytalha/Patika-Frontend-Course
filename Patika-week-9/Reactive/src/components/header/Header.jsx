import React, { useEffect, useRef } from "react";
import "./header.css";
import Logo from "../../assets/images/logo.png";

const Header = () => {
  const navbarRef = useRef(null);
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        navbarRef.current.classList.add("nav-bg");
      } else {
        navbarRef.current.classList.remove("nav-bg");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); // Cleanup
  }, []);

  const toggleMobileMenu = () => {
    if (mobileMenuRef.current.style.display === "flex") {
      mobileMenuRef.current.style.display = "none";
    } else {
      mobileMenuRef.current.style.display = "flex";
    }
  };

  return (
    <header id="header" ref={navbarRef}>
      <div className="">
        <nav className="navbar">
          <a href="#hero">
            <img src={Logo} alt="Logo" />
          </a>
          <ul>
            <li>
              <a className="scroll" href="#hero">Home</a>
            </li>
            <li>
              <a className="scroll" href="#classes">Courses</a>
            </li>
            <li>
              <a className="scroll" href="#trainers">Trainer</a>
            </li>
            <li>
              <a className="scroll" href="#review">Review</a>
            </li>
            <li>
              <a className="scroll" href="#contact">Contact</a>
            </li>
            <a href="#" className="header-btn">JOIN US</a>
          </ul>
          <button id="menu-btn" onClick={toggleMobileMenu}>
            <i className="bi bi-list"></i>
          </button>
        </nav>
        <div className="mobile-menu" ref={mobileMenuRef}>
          <ul>
            <li>
              <a href="#hero">Home</a>
            </li>
            <li>
              <a href="#classes">Courses</a>
            </li>
            <li>
              <a href="#trainers">Trainer</a>
            </li>
            <li>
              <a href="#review">Review</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <a href="#" className="header-btn">JOIN US</a>
          </ul>
          <button id="close-btn" onClick={toggleMobileMenu}>
            <i className="bi bi-x"></i>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
