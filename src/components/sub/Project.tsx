import React from "react";
import "../../styling/Project.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import Carousel from "react-bootstrap/Carousel";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

function Experience(props: any) {
  return (
    <div className="project_block">
      <h2>
        {props.proj.title}{" "}
        <a
          target="_blank"
          href={props.proj.github}
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} className="github-icon-projects" />
          Github
        </a>
      </h2>

      <Carousel id="carousel">
        {props.proj.images.map((image: string) => {
          return (
            <Carousel.Item>
              <img
                className="carousel_img"
                src={require("../../assets/" + image)}
                alt="First slide"
              />
            </Carousel.Item>
          );
        }, [])}
      </Carousel>
      <div className="project_info">
        {props.proj.info.map((info: string) => {
          return <p>{info}</p>;
        }, [])}
      </div>
    </div>
  );
}

export default Experience;
