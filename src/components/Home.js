import React from "react";
import "../css/Home.css";
import Arrow from "../images/arrow3.png";

function Home() {
  return (
    <div className="home">
      <div className="home__contents">
        <h3>
          Hello I'm{" "}
          <span>
            <i>Khushwant.</i>
          </span>
          <br />
          I'm a MERN-stack developer.
        </h3>
        <button className="btn btn-sm">
          View My Work
          <img src={Arrow} />
        </button>
      </div>
    </div>
  );
}

export default Home;
