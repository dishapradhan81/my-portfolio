import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GithubIcon from "@mui/icons-material/GitHub";
import "../Styles/Home.css";
import classNames from "classnames";
import { useSpring, animated } from "react-spring";
import "animate.css";
import { Link } from "react-router-dom";
import js from "../images/js.png";
import react from "../images/react.png";
import redux from "../images/redux.jpg";
import download from "../images/download.png";
import expressjs from "../images/expressjs.png";
import mongodb from "../images/mongodb.png";
import html from "../images/html.png";
import css from "../images/css.png";
import gitimage from "../images/gitimage.png";

function Home() {
  const animateProps = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <animated.div style={animateProps} className="home">
      <div className="about">
        <animated.h2
          className={classNames("animate__animated", "animate__fadeInDown")}
          isVisible={true}
        >
          <span className="introText">Hi, My name is Disha Pradhan.</span>
        </animated.h2>
        <div className="prompt">
          <p className="introPara">
            {" "}
            I'm a skilled and passionate web designer with exprience in creating
            visual appealing and user-friendly websites.
          </p>
          {/* <Link>
            <button className="btn">Resume Here</button>
          </Link> */}
          <div className="icons">
            <LinkedInIcon />
            <EmailIcon />
            <GithubIcon />
          </div>
        </div>
      </div>
      <div className="aboutme">
        <h1> Technical Skills </h1>
        <p>
          Hi there! My name is Disha Pradhan, and I'm a full-stack web developer
          . I have a passion for creating beautiful, user-friendly websites that
          are both functional and efficient. In my spare time, I enjoy learning
          about new web technologies and experimenting with different coding
          languages. I achived AWS Certified Practitioner Course Certificate
          from Amazon. I am eager to further enhance my knowledge in Frontend
          Development and build my career in the same!{" "}
        </p>
        <div className="skillsimage">
          <img src={js} alt="js" className="image" />
          <img src={react} alt="react" className="image" />
          <img src={redux} alt="redux" className="image" />
          <img src={download} alt="download" className="image" />
          <img src={expressjs} alt="expressjs" className="image" />
          <img src={mongodb} alt="mongodb" className="image" />
          <img src={html} alt="html" className="image" />
          <img src={css} alt="css" className="image" />
          <img src={gitimage} alt="git" className="image" />
        </div>
      </div>
    </animated.div>
  );
}

export default Home;
