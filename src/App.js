import React, {Component} from "react";
import { Container, Navbar, Nav } from 'react-bootstrap';

import Header from "./Components/Header/header";
import Body from "./Components/Body/body";
import Footer from "./Components/Footer/footer";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

export default class App extends Component {

  render() {
    return (
      <Container>
        <Header />
        <Body />
        <Footer />
      </Container>
    );
  }
}

// export default App;
