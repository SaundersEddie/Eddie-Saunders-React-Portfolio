import React from 'react';
import {Container, Carousel } from 'react-bootstrap';

import DCMetro from '../assets/Images/DC_Metro.jpg';

export default function Homepage() {

    return (
        <Container>
            <h1>There are projects I've worked on.</h1>
            <hr></hr>
            <Carousel>
                <Carousel.Item interval={2500}>
                    <a 
                        href="http://www.google.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                    <img className="d-block w-100"
                        src={DCMetro}
                        alt="DC Metro Logo"
                    />
                    </a>
                </Carousel.Item>
            </Carousel>
        </Container>
    )
}
