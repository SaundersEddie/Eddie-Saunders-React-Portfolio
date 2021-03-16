import React, {Component} from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Container, Navbar, Nav } from 'react-bootstrap';

import OurFooter from "./Components/OurFooter";

import Homepage from './Pages/Homepage';
import Aboutpage from './Pages/Aboutpage';
import Contactpage from './Pages/Contactpage';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Container className="p-0" fluid={false}>
          <Navbar className="border-bottom" bg="transparent" expand="lg" sticky="top">
            <Navbar.Brand>Eddie Saunders</Navbar.Brand>
            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className='nav-link' style={{color:"#feda6a"}} to='/'>Home</Link>
                <Link className='nav-link' style={{color:"#feda6a"}} to='/about'>About</Link>
                <Link className='nav-link' style={{color:"#feda6a"}} to='/contact'>Contact</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Route path="/" exact render={() => <Homepage/>} />
          <Route path="/about" render={() => <Aboutpage/>} />
          <Route path="/contact" render={() => <Contactpage/>} />
          <OurFooter />
        </Container>
      </Router>
    );
  }
}
