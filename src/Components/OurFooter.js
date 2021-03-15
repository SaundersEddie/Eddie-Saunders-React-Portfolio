import React from "react";
import { Container, Row, Col } from 'react-bootstrap';

import EmailIcon from "../assets/Images/emailIcon.png";
import GithubLogo from "../assets/Images/gitHubLogo.png";
import LinkedInLogo from "../assets/Images/linkedInIcon.png";
import ResumeLogo from "../assets/Images/resumeLogo.png";
import Pdf from "../assets/documents/EddieSaundersResume.pdf";

export default function OurFooter() {
  return (
    <footer className="mt-5">
      <Container fluid={true}>
        <Row className="border-top justify-content-between p-3">
          <Col className="p-0" md={3} sm={12}>
            Eddie Saunders 2021
          </Col>
          <Col className="p-0" md={3} sm={12}>
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
          </Col>
        </Row>
      </Container>
    </footer>
  )
};
