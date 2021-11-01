import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import "./style.css";

const Educ = () => {
  return (
    <div>
      <div>
        <h1>
          {" "}
          <i className="iconskills">
            <FaGraduationCap />
          </i>{" "}
          EDUCATION{" "}
        </h1>
        <div className="lineunderabout"> </div>
        <h3 className="sen"> Qassim University, Qassim, SA </h3>
        <h3 className="sen">
          {" "}
          Bachelor of management information system, May 2021{" "}
        </h3>

        <p> • GPA: 4.94/5</p>
      </div>
    </div>
  );
};

export default Educ;
