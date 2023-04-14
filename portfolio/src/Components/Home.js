import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GithubIcon from "@mui/icons-material/GitHub";
import  "../Styles/Home.css";
import classNames from "classnames";
import { useSpring, animated } from 'react-spring';
import 'animate.css';


function Home() {

  const animateProps = useSpring({ opacity: 1, from: { opacity: 0 } });

    return (
        <animated.div style={animateProps} className="home">
        <div className="about">
        <animated.h2 className={classNames("animate__animated", "animate__fadeInDown")} isVisible={true}>
          Hi, My name is Disha Pradhan.
        </animated.h2>
          <div className="prompt">
            <p> I'm a frontend developer with a passion for building great user experiences.
            I have experience in using React to create responsive and interactive web applications
            </p>
            <div className="icons">
            <LinkedInIcon />
            <EmailIcon />
            <GithubIcon />
            </div>
          </div>
        </div>

        <div className="aboutme">
          <h1> About Me </h1>
          <p>Hi there! My name is Disha Pradhan, and I'm a full-stack web developer . I have a passion for creating beautiful, user-friendly websites that are both functional and efficient.
          In my spare time, I enjoy learning about new web technologies and experimenting with different coding languages.
          I achived AWS Certified Practitioner Course Certificate from Amazon. 
          I am eager to further enhance my knowledge in Frontend Development and build my career in the same! </p>
          <br/>
          <p><b>Technical Skills: </b>Java, JavaScript, React JS, SQL, HTML, CSS, Git.</p>
           
        </div>
        </animated.div>

        

    );

}

export default Home;