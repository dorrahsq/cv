import React from "react";
import "./style.css";
import { FaUserAlt } from "react-icons/fa";

const Aboutt = () => {
  return (
    <div>
      <h1>
        {" "}
        <i className="iconabout">
          <FaUserAlt />
        </i>{" "}
        ABOUT{" "}
      </h1>
      <div className="lineunderabout"> </div>

      <p className="pabout">
        MIS graduate with First Class Honor, natural leader, great at
        multi-tasking and handling a fast-paced team environment, Proficient in
        a range of technologies such as Java.
      </p>
    </div>
  );
};

export default Aboutt;
