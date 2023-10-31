import React from "react";
import "../../styling/Home.css";
import portrait from "../../assets/self-image.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
// import Resume from "../../resume/resume.pdf";

import Experience from "../sub/Experience";

import Project from "../sub/Project";
// import exp from "constants";
let experience = [
  {
    title: "Full-Stack Developer (Freelance / Capstone)",
    date: "Feb - July 2023",
    company: "Dirty2Dreamy Auto Detailing",
    description: [
      "Planned, designed, developed, and deployed a custom software solution for a small business (Quote Calculation System).",
      "Developed full-stack application using (React, Node.js, Express, MongoDB).",
      "Application has increased leads which led to more sales, long with gathering data for marketing.",
    ],
  },
  {
    title: "Back-end Developer (Client School Project)",
    date: "Sept - Dec 2022",
    company: "Neurian",
    description: [
      "Started the development of a software status report system for Neurian’s engineers and clients.",
      "Worked in an agile development team, having daily standups, and using a Kanban board system.",
      "Focused on developing the back-end using GraphQL, Typescript, and MongoDB",
    ],
  },
  {
    title: "Web Developement Intern",
    date: "Mar - June 2022",
    company: "Green River College",
    description: [
      "Worked on an agile dev team consisting of interns working as devs, project manager, and scrum master.",
      "Applications I worked on consisted of a scheduling system, job board system, and mobile text alert system.",
      "Presented bug fixes and new features to all stakeholders at the end of the quarter",
      "Full-stack development, using (PHP, mySQL, Javascript, Bootstrap, MVC PHP framework, HTML, CSS).",
    ],
  },
];

let projects = [
  {
    title: "Dirty2Dreamy Quote Calculation System",
    info: [
      `Quote calculation system giving customers a tool to get a detail quote for their automobile efficiently. 
      Gives staff the ability to view quotes, pull quotes to a csv file for marketing, and to update all pricing. 
      Application was just launched and has generated more leads which has lead to more sales.`,
      ` Worked with client to plan, develop, and deploy a custom software
      solution for their business. Building project from start to finish using
      the MERN stack (MongoDB, Express, React, Node), it was deployed using
      Heroku. This is my college capstone project along with it being a
      freelance project.`,
    ],
    images: [
      "d2d_quote/d2d_1.png",
      "d2d_quote/d2d_2.png",
      "d2d_quote/d2d_3.png",
    ],
    github: "https://github.com/CalebN99/d2d_quote_calculator",
    skills: "",
  },
  {
    title: "Movie Database (Practice Project)",
    info: [
      `Solo project practicing React and Typescript. Uses the open movie
      database api. Pulls lists of movies by genre with default being most
      popular, allows you to select genre, sort by popularity and rating,
      and click on a movie to view a description and the rating of the
      movie.`,
    ],
    images: ["movies/movie_1.png", "movies/movie_2.png", "movies/movie_3.png"],
    github: "https://github.com/CalebN99/typescript_prac_tmdb",
    skills: "",
  },
  {
    title: "Candology (School project)",
    info: [
      `Group school project of a mock ecommerce website. Users can create
      an account to browse and purchase candles. Admins can login to to
      view and "fulfill" orders, along with updating product quantity.`,
      `Worked on an agile development team of 3 to develop this website in
      a single quarter. Built using the LAMP stack (Linux, Apache, MySQL,
      PHP), along with a php MVC framework (Fat-free). Presented project
      at the end of the quarter and received an 100% grade on the project.`,
    ],
    images: [
      "candology/cando_1.png",
      "candology/cando_2.png",
      "candology/cando_4.png",
      "candology/cando_3.png",
    ],
    github: "https://github.com/CalebN99/candology",
    skills: "",
  },
];
function Home() {
  return (
    <div className="home_component">
      <div className="left_box">
        <div className="selfPortrait-container">
          <img src={portrait} alt="Self portrait" className="self-portrait" />
          <h1 className="home-name">Caleb Norris</h1>
          <h2 className="home-title">Junior Software Developer</h2>
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
        
          I'm Caleb Norris, a junior software engineer and new grad now based in
          South Jordan, Utah, relocating from Washingon state. I enjoy crafting
          things that live on the internet, whether that be websites,
          applications, or anything in between. I have a desire to learn and
          grow as a developer as I navigate this industry to find my first
          full-time position as a software engineer.
        </p>
        <br />
        <p className="about">
          Outside of coding, I enjoy spending
          time doing various hobbies of mine! I'm a fan of the outdoors, I love
          to go hiking, fishing, camping, and more. Being a nerd, I also am a
          big PC gamer. Health is also very important to me, a lot of my time is
          spent lifting weights, doing cardio, and attempting to cook healthy
          meals.
        </p>
        <br />

        {experience.map((exp) => {
          return <Experience experience={exp} />;
        }, [])}

        {projects.map((proj) => {
          return <Project proj={proj} />;
        }, [])}
      </div>
    </div>
  );
}

export default Home;
