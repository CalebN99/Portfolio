import React from "react";
import "../../styling/Home.css";
import portrait from "../../assets/self-image.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Home() {
  return (
    <div className="home_component">
      <div className="left_box">
        <div className="selfPortrait-container">
          <img src={portrait} alt="Self portrait" className="self-portrait" />
          <h1 className="home-name">Caleb Norris</h1>
          <h2 className="home-title">Junior Software Engineer</h2>
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
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faGithub}
                className="github-icon"
                style={{ color: "#ffffff" }}
              />
            </a>
          </div>
        </div>
      </div>
      <div className="right_box">
        <h1>Greetings,</h1>
        <p className="intro">
        {/* <span className="orange-it">Greetings!</span>  */}
          I'm Caleb Norris, a junior software engineer and new grad now based in
          South Jordan, Utah, relocating from Washingon state. I enjoy crafting things that live on the internet,
          whether that be websites, applications, or anything in between. I have a desire to learn and grow as a developer
          as I navigate this industry to find my first full-time position as a software engineer.
        </p>
        <br />
        <p className="about">
          Outside of <span className="orange-it">coding</span>, I enjoy spending time doing various hobbies of mine! I'm a fan 
          of the outdoors, I love to go hiking, fishing, camping, and more. Being a nerd, I also am a big PC gamer. Health is also very important to me, 
          a lot of my time is spent lifting weights, doing cardio, and attempting to cook healthy meals. 
        </p>
        <br />
        <h3>Experience</h3>
      </div>
    </div>
  );
}

export default Home;
