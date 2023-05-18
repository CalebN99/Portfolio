import React, { useState } from "react";
import "../../styling/Nav.css";
import { Link } from "react-router-dom";

import Resume from "../../resume/resume.pdf";

function Nav() {
  const [navSelection, setSelection] = useState("home");
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="nav_componenet">
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleNavbar}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse ${isCollapsed ? "" : "show"}`}
          >
            <ul className="navbar-nav ml-auto">
              <li
                className={
                  navSelection === "home" ? "nav-item active" : "nav-item"
                }
              >
                <Link
                  className="nav-link"
                  to="/"
                  onClick={() => setSelection("home")}
                >
                  Home
                </Link>
              </li>
              <li
                className={
                  navSelection === "projects" ? "nav-item active" : "nav-item"
                }
              >
                <Link
                  className="nav-link"
                  to="/projects"
                  onClick={() => setSelection("projects")}
                >
                  Projects
                </Link>
              </li>
              <li
                className={
                  navSelection === "interests" ? "nav-item active" : "nav-item"
                }
              >
                <Link
                  className="nav-link"
                  to="/interests"
                  onClick={() => setSelection("interests")}
                >
                  Interests
                </Link>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href={Resume}
                  download="Resume-PDF"
                  target="_blank"
                  rel="noreferrer"
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* <nav className="navbar navbar-expand-lg">

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className={navSelection === "home" ? "nav-item active" : "nav-item"}>
            <Link className="nav-link" to="/" onClick={() => setSelection("home")}>
              Home
              </Link>
            </li>
            <li className={navSelection === "projects" ? "nav-item active" : "nav-item"}>
              <Link className="nav-link" to="/projects" onClick={() => setSelection("projects")}>
              Projects
              </Link>
            </li>
            <li className={navSelection === "interests" ? "nav-item active" : "nav-item"}>
              <Link className="nav-link" to="/interests" onClick={() => setSelection("interests")}>
              Interests
              </Link>
            </li>
      
            <li className="nav-item">
            <a className="nav-link" href={Resume} download="Resume-PDF" target="_blank" rel="noreferrer">
                Resume
              </a>
            </li>
          </ul>
        </div>
      </nav> */}
    </div>
  );
}

export default Nav;
