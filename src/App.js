import React, {Component} from "react";
import { Container, Navbar, Nav } from 'react-bootstrap';

import Header from "./Components/Header/header";
import Body from "./Components/Body/body";
import OurFooter from "./Components/OurFooter";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

export default class App extends Component {

  render() {
    return (
      <Container>
        <Header />
        <Body />
        <OurFooter />
      </Container>
    );
  }
}

// export default App;
