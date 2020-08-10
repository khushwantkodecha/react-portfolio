import React from "react";
import "../css/Home.css";
import Arrow from "../images/arrow3.png";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

function Home() {
  return (
    <div className="home" id="home">
      <motion.div
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
        className="home__contents"
      >
        <h3>
          Hello I'm{" "}
          <span
            animate={{ x: 100 }}
            transition={{ ease: "easeOut", duration: 2 }}
          >
            <i>Khushwant.</i>
          </span>
          <br />
          I'm a MERN-stack developer.
        </h3>
        <Link to="about" smooth={true} duration={700}>
          <button className="btn btn-sm">
            View My Work
            <img src={Arrow} />
          </button>
        </Link>
      </motion.div>
    </div>
  );
}

export default Home;
