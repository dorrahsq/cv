import React from "react";
import { FaCode } from "react-icons/fa";
import "./style.css";

const Skills = () => {
  return (
    <div>
      <div>
        <h1>
          {" "}
          <i className="iconskills">
            <FaCode />
          </i>{" "}
          SKILLS{" "}
        </h1>
        <div className="lineunderabout"> </div>

        <p>
          <span className="spann"> HTML </span>
          <span className="spann"> CSS </span>
          <span className="spann"> Javascript </span>
          <span className="spann"> jQuery </span>
          <span className="spann"> React </span>
          <span className="spann"> Github </span>
          <span className="spann"> Java </span>
          <span className="spann"> MySQL </span>
          <p className="pabout"></p>
        </p>
      </div>
    </div>
  );
};

export default Skills;
