import React, {Component} from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Container, Navbar, Nav } from 'react-bootstrap';

// import OurHeader from "./Components/OurHeader";
import Body from "./Components/Body/body";
import OurFooter from "./Components/OurFooter";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

export default class App extends Component {

  render() {
    return (
      <Router>
        <Container className="p-0" fluid={false}>
          <Navbar className="border-bottom" bg="light" expand="lg" sticky="top">
            <Navbar.Brand>Eddie Saunders</Navbar.Brand>
            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className='nav-link' to='/'> Home </Link>
                <Link className='nav-link' to='/about'> About </Link>
                <Link className='nav-link' to='/contact'> Contact </Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>


          <Body />
          <OurFooter />
        </Container>
      </Router>
    );
  }
}

// export default App;
