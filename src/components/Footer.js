import React from "react";
import "../css/Footer.css";
// import FacebookIcon from "@material-ui/icons/Facebook";
import {
  FaFacebookMessenger,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaStackOverflow,
  FaTwitter,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <ul className="footer__links">
        <li>
          <a href="https://www.github.com/khushwantkodecha" target="_blank">
            <FaGithub />
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/khushwant.kodecha" target="_blank">
            <FaFacebookMessenger />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/khushwanth.codes/" target="_blank">
            <FaInstagram />
          </a>
        </li>

        <li>
          <a
            href="https://www.linkedin.com/in/khushwant-kodecha/"
            target="_blank"
          >
            <FaLinkedin />
          </a>
        </li>

        <li>
          <a
            href="https://stackoverflow.com/users/12650696/khushwant-kodecha"
            target="_blank"
          >
            <FaStackOverflow />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/khushwant1211" target="_blank">
            <FaTwitter />
          </a>
        </li>
      </ul>
      <h5>khushwant Kodecha &copy;2020</h5>
    </div>
  );
}

export default Footer;
