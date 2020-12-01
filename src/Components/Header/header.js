import React from "react";
import EmailIcon from "../../assets/Images/emailIcon.png";
import FacebookLogo from "../../assets/Images/facebookIcon.png";
import GithubLogo from "../../assets/Images/gitHubLogo.png";
import LinkedInLogo from "../../assets/Images/linkedInIcon.png";
import ResumeLogo from "../../assets/Images/resumeLogo.png";
import Pdf from "../../assets/documents/EddieSaundersResume.pdf";

import "./header.css";

const Header = () => {
  return (
    <div className = "myNavbar">
    <div className="socialMediaIcon">
        <a
          href="https://github.com/SaundersEddie"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="img-fluid rounded mx-auto" src={GithubLogo} alt="Eddies Github" />
        </a>
      </div>
      <div className="socialMediaIcon">
        <a
          href="https://facebook.com/EdwynSaunders"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="img-fluid rounded mx-auto" src={FacebookLogo} alt="Eddies Facebook" />
        </a>
      </div>
      <div className="socialMediaIcon">
        <a
          href="https://www.linkedin.com/in/edwyn-saunders/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="img-fluid rounded mx-auto" src={LinkedInLogo} alt="Eddies LinkedIn" />
        </a>
      </div>
      <div className="socialMediaIcon">
        <a href="mailto:edwyn.saunders@outlook.com">
          <img className="img-fluid rounded mx-auto" src={EmailIcon} alt="Email Eddie" />
        </a>
      </div>
      <div className="socialMediaIcon">
        <a href={Pdf} target="_blank" rel="noopener noreferrer">
          <img className="img-fluid rounded mx-auto" src={ResumeLogo} alt="Eddie Resume" />
        </a>
      </div>
</div>
  );
}

export default Header;
