import React from "react";
import { FaBuilding } from "react-icons/fa";
import "./style.css";

const Exper = () => {
  return (
    <div>
      <div>
        <h1>
          {" "}
          <i className="iconabout">
            <FaBuilding />
          </i>{" "}
          WORK EXPERIENCE{" "}
        </h1>
        <div className="lineunderabout"> </div>
        <h3 className="sen"> Full Stack Developer, Tuwaiq </h3>
        <p className="pres"> 10/2021 - Present </p>

        <p className="pabout">
          Building and testing web applications using JavaScript
        </p>
      </div>
    </div>
  );
};

export default Exper;
