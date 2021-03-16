import React from 'react';
import {Container, Carousel } from 'react-bootstrap';

import DCMetro from '../assets/Images/DC_Metro.jpg';
import JSCRUD from '../assets/Images/JS_OnlyCRUD.jpg'
import MusicPage from '../assets/Images/Music_Page.jpg'
import Weather from '../assets/Images/React_weather.jpg'

export default function Homepage() {

    return (
        <Container>
            <h1>There are projects I've worked on.</h1>
            <hr></hr>
            <Carousel>
                <Carousel.Item interval={2500}>
                    <a 
                        href="https://saunderseddie.github.io/dc-metro-status/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                    <img className="d-block w-100"
                        src={DCMetro}
                        alt="DC Metro Logo"
                    />
                    </a>
                </Carousel.Item>

                <Carousel.Item interval={2500}>
                    <a 
                        href="http://www.google.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                    <img className="d-block w-100"
                        src={JSCRUD}
                        alt="JS CRUD Page Link"
                    />
                    </a>
                </Carousel.Item>

                <Carousel.Item interval={2500}>
                    <a 
                        href="https://awesome-hypatia-cfdcf6.netlify.app/index.html"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                    <img className="d-block w-100"
                        src={MusicPage}
                        alt="DC Metro Logo"
                    />
                    </a>
                </Carousel.Item>

                <Carousel.Item interval={2500}>
                    <a 
                        href="https://exs-weather-react.herokuapp.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                    <img className="d-block w-100"
                        src={Weather}
                        alt="DC Metro Logo"
                    />
                    </a>
                </Carousel.Item>
            </Carousel>
        </Container>
    )
}
