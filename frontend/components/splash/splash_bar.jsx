import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SplashBar = ({ loggedIn, startLoading }) => (
  <nav className="splash-nav">
    <nav>
      <Link to="/">
        <img src={window.logoIconURL} className="splash-logo-icon" alt="" />
        <img src={window.logoURL} className="splash-logo" alt="" />
      </Link>
    </nav>
    <ul className="splash-nav-right">
      <a
        href="https://www.github.com/SilentNN"
        target="_blank"
        rel="noopener noreferrer"
        className="splash-nav-link"
      >
        <FontAwesomeIcon icon={["fab", "github"]} className="splash-icon" />
      </a>
      <a
        href="https://www.linkedin.com/in/lawrence-nguyen-b75085204/"
        target="_blank"
        rel="noopener noreferrer"
        className="splash-nav-link"
      >
        <FontAwesomeIcon icon={["fab", "linkedin"]} className="splash-icon" />
      </a>
      <a
        href="https://angel.co/u/lawrence-nguyen-1"
        target="_blank"
        rel="noopener noreferrer"
        className="splash-nav-link"
      >
        <FontAwesomeIcon icon={["fab", "angellist"]} className="splash-icon" />
      </a>
      <Link
        to={loggedIn ? "/@me" : "/login"}
        className="splash-nav-link login"
        onClick={loggedIn ? startLoading : null}
      >
        <button type="button" className="splash-nav-btn">
          {loggedIn ? "Open" : "Login"}
        </button>
      </Link>
    </ul>
  </nav>
);

export default SplashBar;
