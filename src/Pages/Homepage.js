import React from 'react';
import {Container, Carousel, CardDeck, Card } from 'react-bootstrap';

import DCMetro from '../assets/Images/DC_Metro.jpg';
import JSCRUD from '../assets/Images/JS_OnlyCRUD.jpg';
import MusicPage from '../assets/Images/Music_Page.jpg';
import Weather from '../assets/Images/React_weather.jpg';
import WDII from '../assets/Images/WDII.jpg';
import DCWide from '../assets/Images/DC_Banner.jpg';

export default function Homepage() {
    return (
        <Container>
            <h1>My Current Project</h1>
            <hr></hr>
            <CardDeck>
                <Card>
                    <Card.Img variant="top" src={DCWide} />
                    <Card.Body>
                        <Card.Title>My Washington DC</Card.Title>
                        <Card.Text><a href="https://saunderseddie.github.io/dc-metro-status/" target="_blank" rel="noopener noreferrer">View Page</a></Card.Text>
                        <Card.Text><a href="https://github.com/SaundersEddie/dc-metro-status" target="_blank" rel="noopener noreferrer">Github</a></Card.Text>
                    </Card.Body>
                </Card>
            </CardDeck>
            <br />
            <h1>Previous Projects:</h1>
            <hr></hr>
            <Carousel>
                <Carousel.Item interval={2500}>
                    <CardDeck>
                        <Card border="info">
                            <Card.Img variant="top" src={DCMetro} />
                            <Card.Body>
                                <Card.Title>DC Metro Status</Card.Title>
                                <Card.Text>A small JQuery app that displays current DC weather and metro status</Card.Text>
                                <Card.Text><a href="https://saunderseddie.github.io/dc-metro-status/" target="_blank" rel="noopener noreferrer">View Page</a></Card.Text>
                                <Card.Text><a href="https://github.com/SaundersEddie/dc-metro-status" target="_blank" rel="noopener noreferrer">Github</a></Card.Text>
                            </Card.Body>
                            <Card.Footer className="text-muted">Last Updated: 17th March 2021</Card.Footer>
                        </Card>

                        <Card border="info">
                            <Card.Img variant="top" src={JSCRUD} />
                            <Card.Body>
                                <Card.Title>JS CRUD App</Card.Title>
                                <Card.Text>Simple JS only CRUD app, without user authentication or data storage</Card.Text>
                                <Card.Text><a href="https://saunderseddie.github.io/myDemoCRUD/" target="_blank" rel="noopener noreferrer">View Page</a></Card.Text>
                                <Card.Text><a href="https://github.com/SaundersEddie/myDemoCRUD" target="_blank" rel="noopener noreferrer">Github</a></Card.Text>
                            </Card.Body>
                            <Card.Footer className="text-muted">Last Updated: 17h March 2021</Card.Footer>
                        </Card>

                        <Card border="info">
                            <Card.Img variant="top" src={Weather} />
                            <Card.Body>
                                <Card.Title>React Weather</Card.Title>
                                <Card.Text>React base weather app, allowing the user to enter location and see current conditions.</Card.Text>
                                <Card.Text><a href="https://exs-weather-react.herokuapp.com/" target="_blank" rel="noopener noreferrer">View Page</a></Card.Text>
                                <Card.Text><a href="https://github.com/SaundersEddie/weather" target="_blank" rel="noopener noreferrer">Github</a></Card.Text>
                            </Card.Body>
                            <Card.Footer className="text-muted">Last Updated: 17h March 2021</Card.Footer>
                        </Card>
                    </CardDeck>
                </Carousel.Item>

                <Carousel.Item interval={2500}>
                    <CardDeck>
                        <Card border="info">
                            <Card.Img variant="top" src={MusicPage} />
                            <Card.Body>
                                <Card.Title>My Music Page</Card.Title>
                                <Card.Text>Pure HTML/CSS page, to show off some of my guitars and instruments, incorporates a contact me page.</Card.Text>
                                <Card.Text><a href="https://awesome-hypatia-cfdcf6.netlify.app/index.html" target="_blank" rel="noopener noreferrer">View Page</a></Card.Text>
                                <Card.Text><a href="https://github.com/SaundersEddie/guitar-collection" target="_blank" rel="noopener noreferrer">Github</a></Card.Text>
                            </Card.Body>
                            <Card.Footer className="text-muted">Last Updated Today</Card.Footer>
                        </Card>

                        <Card border="info">
                            <Card.Img variant="top" src={WDII} />
                            <Card.Body>
                                <Card.Title>What Day Is It?</Card.Title>
                                <Card.Text>A react based page that allows the user to see if it's a national day of.</Card.Text>
                                <Card.Text><a href="https://national-day-of.herokuapp.com/" target="_blank" rel="noopener noreferrer">View Page</a></Card.Text>
                                <Card.Text><a href="https://github.com/SaundersEddie/WhatDayIsIt" target="_blank" rel="noopener noreferrer">Github</a></Card.Text>
                            </Card.Body>
                            <Card.Footer className="text-muted">Last Updated: 17h March 2021</Card.Footer>
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
