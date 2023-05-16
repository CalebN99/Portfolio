import React from "react";
import "../../styling/Home.css";
import "../../styling/Projects.css";
import Nav from "../nav/Nav";
import Carousel from "react-bootstrap/Carousel";
function Interests() {
  return (
    <div className="projects_component">
    <Nav />
    <h1 className="project_h1">My Interests!</h1>
    <div className="projects_container">
      <Carousel id="parent_carousel" interval={null}>
        <Carousel.Item>
          <div className="project">
            <h2>
              Auto Detailing / Cars{" "}
            </h2>
            <p>
              Auto Detailing became something I love doing and do as a job since I graduated high school. My first job out of high school was auto detailing for 
              my brothers company, and I still do to this day. I do it all, from basic interior details and exterior washes, to high end paint corrections 
              and ceramic coatings. I'm also a lover of cars, so a huge benefit of this hobby & job is I get to work on a lot cars I probably would never even get to sit in!
              A long with many great opportunities such as being able to attend the SEMA show in Las Vegas every year. 
            </p>

            <Carousel id="child_carousel">
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={require("../../assets/auto_detail/auto_1.jpeg")}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={require("../../assets/auto_detail/auto_2.JPG")}
                  alt="Second slide"
                />
              </Carousel.Item>
            </Carousel>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="project">
            <h2>
              Fitness / Being Active
            </h2>
            <p>
              Fitness is very important to me. I had a huge mentality change in the summer of 2020, and ended up dieting and working out, losing 95lbs in a year.
              This is by far one of my greatest achievements. Most of my activity included cardio, biking, hiking, jogging, etc. However lately I'm focused
              on building muscle trying to achieve a full body recomposition. 
            </p>

            <Carousel id="child_carousel">

              <Carousel.Item>
                <img
                  className="d-block w-100 h-80"
                  src={require("../../assets/fitness/fitness_1.jpeg")}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={require("../../assets/fitness/fitness_2.jpeg")}
                  alt="First slide"
                />
              </Carousel.Item>
            </Carousel>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="project">
            <h2>
              PC Gaming
            </h2>
            <p>
              I've been gaming since I could remember, started out PC gaming even! I grew up doing lan parties with my family and family friends, a long with
              learning how to build and work on computers. My main games that I've played the most is World of Warcraft, Counter Strike, and League of Legends.
              However, I'm open and do play almost anything that seems appealing to me or whatever my friends are playing. I love being able to build and upgrade
              my computer to increase performance of my games, it's many hobbies in one! Current specs: RTX 3070, Ryzen 3600x, 32gbs DDR4, 1TB SSD, 2GB HDD
            </p>

            <Carousel id="child_carousel" variant="dark">
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={require("../../assets/gaming/gaming_1.jpeg")}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={require("../../assets/gaming/gaming_2.png")}
                  alt="Second slide"
                />
              </Carousel.Item>
            </Carousel>
          </div>
        </Carousel.Item>

  
      </Carousel>
    </div>
  </div>
  );
}

export default Interests;
