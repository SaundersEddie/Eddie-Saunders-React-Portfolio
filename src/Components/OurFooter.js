import React from "react";
import { Container, Row, Col } from 'react-bootstrap';

// import EmailIcon from "../../assets/Images/EmailIcon.png";
// import FacebookIcon from "../../assets/Images/FacebookIcon.png";
// import GithubLogo from "../../assets/Images/gitHubLogo.png";
// import LinkedInIcon from "../../assets/Images/LinkedInIcon.png";
// import ResumeLogo from "../../assets/Images/Resume.png";

function OurFooter() {
  return (
    <footer className="mt-5">
      <Container fluid={true}>
        <Row className="border-top justify-content-between p-3">
          <Col className="p-0" md={3} sm={12}>
            Eddie Saunders
          </Col>
          <Col className="p-0 d-flex justify-content-end" md={3}>
            This site was coded by Eddie Saunders 2021
          </Col>
        </Row>
      </Container>
    </footer>
  )
};

export default OurFooter;
