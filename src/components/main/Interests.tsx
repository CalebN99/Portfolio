import React from "react";
import "../../styling/Home.css";
import "../../styling/Projects.css";
import Carousel from "react-bootstrap/Carousel";
function Interests() {
  return (
    <div className="projects_component">
      <h1 className="project_h1">My Interests!</h1>
      <div className="projects_container">
        <div className="project">
          <h2>Auto Detailing / Cars </h2>
          <p>
            Ever since I graduated from high school, I developed a deep passion
            for auto detailing, which eventually turned into my profession. My
            initial job right after high school was working in auto detailing
            for my brother's company. I still work for him and even started
            building software for the company for my capstone. I offer a wide
            range of services, from basic interior cleaning and exterior washes
            to advanced paint corrections and application of ceramic coatings.
            Being an ardent car enthusiast, one of the major perks of this hobby
            and occupation is the opportunity to work on a diverse array of
            vehicles that I might never have even had the chance to sit in.
            Moreover, I've been fortunate enough to take part in remarkable
            experiences such as attending the annual SEMA show in Las Vegas.
          </p>

          <Carousel id="child_carousel">
            <Carousel.Item>
              <img
                src={require("../../assets/auto_detail/auto_1.jpeg")}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={require("../../assets/auto_detail/auto_2.JPG")}
                alt="Second slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>

        <div className="project">
          <h2>Fitness / Being Active</h2>
          <p>
            Fitness holds tremendous significance in my life. In the summer of
            2020, I experienced a profound shift in my mindset, leading me to
            embark on a journey of dieting and exercise. Over the course of a
            year, I managed to shed an impressive 95 pounds, a feat that stands
            as one of my most remarkable accomplishments. Initially, my
            activities primarily revolved around cardio exercises such as
            biking, hiking, and jogging. However, more recently, my focus has
            shifted towards muscle building, as I strive to attain a complete
            body recomposition.
          </p>

          <Carousel id="child_carousel">
            <Carousel.Item>
              <img
                src={require("../../assets/fitness/fitness_1.jpeg")}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={require("../../assets/fitness/fitness_2.jpeg")}
                alt="First slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="project">
          <h2>PC Gaming</h2>
          <p>
            Since my earliest memories, I have been an avid gamer, starting with
            PC gaming. Growing up, my family and friends would gather for LAN
            parties, and during those times, I also gained knowledge in computer
            building and maintenance. Among the games I have devoted most of my
            time to are World of Warcraft, Counter-Strike, and League of
            Legends. However, I am open to exploring and playing almost any game
            that catches my interest or that my friends are into. I take great
            pleasure in assembling and upgrading my computer to enhance the
            performance of my games, as it combines multiple hobbies into one.
            Currently, my PC specifications include an RTX 3070, Ryzen 3600x,
            32GB DDR4 RAM, two 500GB SSD's, and a 2TB HDD.
          </p>

          <Carousel id="child_carousel">
            <Carousel.Item>
              <img
                src={require("../../assets/gaming/gaming_1.jpeg")}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={require("../../assets/gaming/gaming_2.png")}
                alt="Second slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Interests;
