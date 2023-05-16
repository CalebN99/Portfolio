import React from "react";
import "../../styling/Nav.css";
import { Link } from "react-router-dom";

import Resume from "../../resume/resume.pdf";

function Nav() {

  return (
    <div className="nav_componenet">
      <nav className="navbar navbar-expand-lg">

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
            <Link className="nav-link" to="/">
              Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/projects">
              Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/interests">
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
      </nav>
    </div>
  );
}

export default Nav;
