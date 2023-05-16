import React from "react";
import "../../styling/Home.css";
import portrait from "../../assets/self-image.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import Nav from "../nav/Nav";
function Home() {
  return (
    <div className="home_component">
      <Nav />
      <div className="selfPortrait-container">
        <img src={portrait} alt="Self portrait" className="self-portrait" />
        <h1 className="home-title">Junior Software Developer</h1>
        <div className="icons">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/caleb-norris/"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="linkedin-icon"
              style={{ color: "#ffffff" }}
            />
          </a>
          <a 
            target="_blank"
            href="https://github.com/CalebN99"
            rel="noreferrer">
            <FontAwesomeIcon
              icon={faGithub}
              className="github-icon"
              style={{ color: "#ffffff" }}
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
