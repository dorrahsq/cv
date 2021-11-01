import React from "react";
import "./style.css";
import {
  FaLocationArrow,
  FaRegEnvelopeOpen,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";

const Inform = () => {
  return (
    <div className="contener">
      <div className="lineunder">
        <img
          src="https://i.pinimg.com/564x/2a/83/18/2a8318f09b0d139371d5320f14d03c4f.jpg"
          alt=""
        ></img>
        <h1 className="h1header">Dorrah Alqwifel</h1>
        <h3 className="h3header">Full Stack Developer </h3>
      </div>

      <div className="lineunder">
        <i className="icon">
          <FaLocationArrow />
        </i>{" "}
        Qassim <br />
        <div className="space">
          <i className="icon">
            <FaRegEnvelopeOpen />
          </i>{" "}
          <a href="mailto:dorrah.alqwifel.gmail.com">
            {" "}
            dorrah.alqwifel.gmail.com
          </a>
        </div>
      </div>

      <div className="lineunder">
        <a className="github" href="https://github.com/dorrahsq">
          <i className="bigicon">
            <FaTwitter />
          </i>
        </a>
        <a className="github" href="https://github.com/dorrahsq">
          <i className="bigicon">
            <FaGithub />
          </i>
        </a>
      </div>

      <div className="lastdiv">
        <p>
          I built this site with <a href="https://reactjs.org/">React</a>{" "}
          components. The full source code can be found in{" "}
          <a href="https://github.com/dorrahsq/cv.git">my Github repo</a>.
        </p>
      </div>
    </div>
  );
};

export default Inform;
