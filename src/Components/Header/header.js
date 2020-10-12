import React from "react";
import EmailIcon from "../../assets/Images/emailIcon.png";
import FacebookLogo from "../../assets/Images/facebookIcon.png";
import GithubLogo from "../../assets/Images/gitHubLogo.png";
import LinkedInLogo from "../../assets/Images/linkedInIcon.png";
import ResumeLogo from "../../assets/Images/resumeLogo.png";
import Pdf from "../../assets/documents/EddieSaundersResume.pdf";
import { GrLinkedin } from "react-icons/gr";

import "./header.css";

// GrLinkedin
// <div className="sticky top-0 bg-white-600 flex mb-4">
const Header = () => {
  return (
    <div className="myHeader sticky top-0 flex mb-4">
      <div className="w-1/5 socialMediaIcon">
        <a
          href="https://github.com/SaundersEddie"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={GithubLogo} alt="Eddies Github" />
        </a>
      </div>
      <div className="w-1/5 socialMediaIcon">
        <a
          href="https://facebook.com/EdwynSaunders"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={FacebookLogo} alt="Eddies Facebook" />
        </a>
      </div>
      <div className="w-1/5 socialMediaIcon">
        <a
          href="https://www.linkedin.com/in/edwyn-saunders/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={LinkedInLogo} alt="Eddies LinkedIn" />
        </a>
      </div>
      <div className="w-1/5 socialMediaIcon">
        <a href="mailto:edwyn.saunders@outlook.com">
          <img src={EmailIcon} alt="Email Eddie" />
        </a>
      </div>
      <div className="w-1/5 socialMediaIcon">
        <a href={Pdf} target="_blank" rel="noopener noreferrer">
          <img src={ResumeLogo} alt="Eddie Resume" />
        </a>
      </div>
    </div>
  );
};

export default Header;
