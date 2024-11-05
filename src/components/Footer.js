import React from 'react';
import InstagramIcon from "@mui/icons-material/Instagram";
/* import TwitterIcon from "@mui/icons-material/Twitter"; */
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../styles/Footer.css";

function SocialMediaLinks() {
  return (
    <div>
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
        <InstagramIcon />
      </a>
      {/* <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
        <TwitterIcon />
      </a> */}
      <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer">
        <FacebookIcon />
      </a>
      <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer">
        <LinkedInIcon />
      </a>
    </div>
  );
}

export default SocialMediaLinks;
