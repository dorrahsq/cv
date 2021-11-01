import React from "react";
import Exper from "./exper";
import Educ from "./educ";
import Skills from "./skills";
import Aboutt from "./aboutt";
import "./style.css";

const About = () => {
  return (
    <div className="rightDivP">
     
      <Aboutt />
      <Exper />
      <Skills />
      <Educ />
    </div>
  );
};

export default About;
