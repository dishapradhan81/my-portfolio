import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import  "../Styles/Footer.css";






function Footer() {
    return (
      <div className="footer">
        <div className="socialMedia">
          <InstagramIcon />
          <TwitterIcon />
          <FacebookIcon />
          <LinkedInIcon />
        </div>
        <p> &copy; 2023 portfolioweb.com</p>
      </div>
    );
  }
  
  export default Footer;