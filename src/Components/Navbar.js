import React, { useRef } from "react";

const Navbar = () => {
  const navbarRef = useRef(null);

  const handleNavlinkClick = (event) => {
    // Prevent the default link behavior (e.g., page reload).

    // Remove "highlight" class from all nav-links.
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach((link) => link.classList.remove("highlight"));

    // Add "highlight" class to the clicked nav-link.
    event.target.classList.add("highlight");

    // Close the navbar if open (optional, based on your requirement).
    const navbarNav = document.getElementById("navbarNav");
    if (navbarNav.classList.contains("show")) {
      navbarNav.classList.remove("show");
    }
  };

  return (
    <nav className="navbar navbar-expand-md p-1" ref={navbarRef}>
      <div className="container-fluid content">
        <a className="navbar-brand fw-bold" href="#home-section" style={{color : "var(--medium)"}}>BD</a>
        <button
          className="navbar-toggler bg-white p-1"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse d-lg-flex d-md-flex justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item d-flex justify-content-center">
              <a className="nav-link highlight" aria-current="page" href="#home-section" onClick={handleNavlinkClick}>Home</a>
            </li>
            <li className="nav-item d-flex justify-content-center">
              <a className="nav-link" href="#about-section" onClick={handleNavlinkClick}>About</a>
            </li>
            <li className="nav-item d-flex justify-content-center ">
              <a className="nav-link" href="#education-section" onClick={handleNavlinkClick}>Education</a>
            </li>
            <li className="nav-item d-flex justify-content-center">
              <a className="nav-link" href="#projects-section" onClick={handleNavlinkClick}>Projects</a>
            </li>
            <li className="nav-item d-flex justify-content-center">
              <a className="nav-link" href="#skills-section" onClick={handleNavlinkClick}>Skills</a>
            </li>
            <li className="nav-item d-flex justify-content-center">
              <a className="nav-link" href="#contactme-section" onClick={handleNavlinkClick}>Contact Me</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
