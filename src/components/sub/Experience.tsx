import React from "react";
import "../../styling/Experience.css";

function Experience(props: any) {
  return (
    <div className="experience_block">
      <p className="exp_date">{props.experience.date}</p>
      <div className="experience_info">
        <p>{props.experience.title}</p>
        <p className="exp_company">{props.experience.company}</p>
        <ul className="exp_list">
            {props.experience.description.map((desc: any) => {
                return <li>{desc}</li>
            }, [])}
        </ul>
      </div>
    </div>
  );
}

export default Experience;
