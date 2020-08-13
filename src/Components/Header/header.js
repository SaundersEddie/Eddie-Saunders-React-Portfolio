import React from "react";
import EmailIcon from "../../assets/Images/EmailIcon.png";
import FacebookLogo from "../../assets/Images/FacebookIcon.png";
import GithubLogo from "../../assets/Images/gitHubLogo.png";
import LinkedInLogo from "../../assets/Images/LinkedInIcon.png";
import ResumeLogo from "../../assets/Images/Resume.png";
const Header = () => {
  return (
    <>
      <div className="sticky top-0 bg-white-600">
        <div className="flex mb-4">
          <div className="w-1/5">
            <a
              href="https://github.com/SaundersEddie"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={GithubLogo} alt="Eddies Github" />
            </a>
          </div>
          <div className="w-1/5">
            <a
              href="facebook.com/EdwynSaunders"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={FacebookLogo} alt="Eddies Facebook" />
            </a>
          </div>

          <div className="w-1/5">
            <a
              href="https://www.linkedin.com/in/edwyn-saunders/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={LinkedInLogo} alt="Eddies LinkedIn" />
            </a>
          </div>

          <div className="w-1/5">
            <a href="mailto:edwyn.saunders@outlook.com">
              <img src={EmailIcon} alt="Email Eddie" />
            </a>
          </div>
          <div className="w-1/5">
            <h1>Resume</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
