import React from "react";
import "../../styling/Projects.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

// Import Swiper React components
import Carousel from "react-bootstrap/Carousel";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

function Projects() {
  return (
    <div className="projects_component">
      <h1 className="project_h1">Some Projects</h1>
      <div className="projects_container">
        <div className="project">
          <h2>Dirty2Dreamy Quote Calculation System </h2>
          <a
            target="_blank"
            href="https://github.com/CalebN99/d2d_quote_calculator"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} className="github-icon-projects" />
            Github
          </a>
          <p>
            Quote calculation system giving customers a tool to get a detail
            quote for their automobile efficiently. Gives staff the ability to
            view quotes, pull quotes to a csv file for marketing, and to update
            all pricing. Application was just launched and has generated more
            leads which has lead to more sales.{" "}
          </p>

          <Carousel id="child_carousel">
            <Carousel.Item>
              <img
                src={require("../../assets/d2d_quote/d2d_1.png")}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={require("../../assets/d2d_quote/d2d_2.png")}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={require("../../assets/d2d_quote/d2d_3.png")}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>

          <p className="">
            Worked with client to plan, develop, and deploy a custom software
            solution for their business. Building project from start to finish
            using the MERN stack (MongoDB, Express, React, Node), it was
            deployed using Heroku. This is my college capstone project along
            with it being a freelance project.
          </p>
        </div>

        <div className="project">
          <h2>Movie Database (Practice Project)</h2>
          <a
            target="_blank"
            href="https://github.com/CalebN99/typescript_prac_tmdb"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} className="github-icon-projects" />
            Github
          </a>
          <p>
            Solo project practicing React and Typescript. Uses the open movie
            database api. Pulls lists of movies by genre with default being most
            popular, allows you to select genre, sort by popularity and rating,
            and click on a movie to view a description and the rating of the
            movie.
          </p>

          <Carousel id="child_carousel">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={require("../../assets/movies/movie_1.png")}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={require("../../assets/movies/movie_2.png")}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={require("../../assets/movies/movie_3.png")}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>

        <div className="project">
          <h2>Candology (School project) </h2>
          <a
            target="_blank"
            href="https://github.com/CalebN99/candology"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} className="github-icon-projects" />
            Github
          </a>
          <p>
            Group school project of a mock ecommerce website. Users can create
            an account to browse and purchase candles. Admins can login to to
            view and "fulfill" orders, along with updating product quantity.{" "}
          </p>

          <Carousel id="child_carousel" variant="dark">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={require("../../assets/candology/cando_1.png")}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={require("../../assets/candology/cando_2.png")}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={require("../../assets/candology/cando_4.png")}
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={require("../../assets/candology/cando_3.png")}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>

          <p className="">
            Worked on an agile development team of 3 to develop this website in
            a single quarter. Built using the LAMP stack (Linux, Apache, MySQL,
            PHP), along with a php MVC framework (Fat-free). Presented project
            at the end of the quarter and received an 100% grade on the project.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
