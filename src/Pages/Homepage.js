import React from 'react';
import {Container, Carousel, CardDeck, Card } from 'react-bootstrap';

import DCMetro from '../assets/Images/DC_Metro.jpg';
import JSCRUD from '../assets/Images/JS_OnlyCRUD.jpg';
import MusicPage from '../assets/Images/Music_Page.jpg';
import Weather from '../assets/Images/React_weather.jpg';
import WDII from '../assets/Images/WDII.jpg';

export default function Homepage() {

    return (
        <Container>
            <h1>There are projects I've worked on.</h1>
            <hr></hr>
            <Carousel>
                <Carousel.Item interval={2500}>
                    <CardDeck>
                        <Card border="info">
                            <Card.Img variant="top" src={DCMetro} />
                            <Card.Body>
                                <Card.Title>DC Metro Status</Card.Title>
                                <Card.Text>Blah Blah Blah</Card.Text>
                            </Card.Body>
                            <Card.Footer className="text-muted">Last Updated Today</Card.Footer>
                        </Card>

                        <Card border="info">
                            <Card.Img variant="top" src={JSCRUD} />
                            <Card.Body>
                                <Card.Title>JS CRUD App</Card.Title>
                                <Card.Text>Blah Blah Blah</Card.Text>
                            </Card.Body>
                            <Card.Footer className="text-muted">Last Updated Today</Card.Footer>
                        </Card>

                        <Card border="info">
                            <Card.Img variant="top" src={Weather} />
                            <Card.Body>
                                <Card.Title>My Weather Lookup Page</Card.Title>
                                <Card.Text>Blah Blah Blah</Card.Text>
                            </Card.Body>
                            <Card.Footer className="text-muted">Last Updated Today</Card.Footer>
                        </Card>
                    </CardDeck>
                </Carousel.Item>

                <Carousel.Item interval={2500}>
                    <CardDeck>
                        <Card border="info">
                            <Card.Img variant="top" src={MusicPage} />
                            <Card.Body>
                                <Card.Title>My Music Page</Card.Title>
                                <Card.Text>Blah Blah Blah</Card.Text>
                            </Card.Body>
                            <Card.Footer className="text-muted">Last Updated Today</Card.Footer>
                        </Card>

                        <Card border="info">
                            <Card.Img variant="top" src={WDII} />
                            <Card.Body>
                                <Card.Title>What Day Is It?</Card.Title>
                                <Card.Text>Blah Blah Blah</Card.Text>
                            </Card.Body>
                            <Card.Footer className="text-muted">Last Updated Today</Card.Footer>
                        </Card>

                        <Card border="info">
                            <Card.Img variant="top" src={Weather} />
                            <Card.Body>
                                <Card.Title>My Weather Lookup Page</Card.Title>
                                <Card.Text>Blah Blah Blah</Card.Text>
                            </Card.Body>
                            <Card.Footer className="text-muted">Last Updated Today</Card.Footer>
                        </Card>
                    </CardDeck>
                </Carousel.Item>




            </Carousel>
        </Container>
    )
}



// <Carousel.Item interval={2500}>
// <a 
//     href="https://saunderseddie.github.io/dc-metro-status/"
//     target="_blank"
//     rel="noopener noreferrer"
// >
// <img className="d-block w-100"
//     src={DCMetro}
//     alt="DC Metro Logo"
// />
// </a>
// </Carousel.Item>

// <Carousel.Item interval={2500}>
// <a 
//     href="http://www.google.com"
//     target="_blank"
//     rel="noopener noreferrer"
// >
// <img className="d-block w-100"
//     src={JSCRUD}
//     alt="JS CRUD Page Link"
// />
// </a>
// </Carousel.Item>

// <Carousel.Item interval={2500}>
// <a 
//     href="https://awesome-hypatia-cfdcf6.netlify.app/index.html"
//     target="_blank"
//     rel="noopener noreferrer"
// >
// <img className="d-block w-100"
//     src={MusicPage}
//     alt="DC Metro Logo"
// />
// </a>
// </Carousel.Item>

// <Carousel.Item interval={2500}>
// <a 
//     href="https://exs-weather-react.herokuapp.com/"
//     target="_blank"
//     rel="noopener noreferrer"
// >
// <img className="d-block w-100"
//     src={Weather}
//     alt="DC Metro Logo"
// />
// </a>
// </Carousel.Item>