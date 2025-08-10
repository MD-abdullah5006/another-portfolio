import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const About = () => {
    return (
        <section id="about" className="py-5">
            <Container>
                <Row className="align-items-center">
                    <Col md={5} className="text-center mb-4 mb-md-0">
                        <Image src="https://static.vecteezy.com/system/resources/thumbnails/023/986/704/small_2x/anime-boy-avatar-png.png" roundedCircle fluid className="profile-image" />
                    </Col>
                    <Col md={7}>
                        <h2>About Me</h2>
                        <p>
                            I am a software developer with a passion for building beautiful and functional websites. I have experience with a variety of technologies, including React, Node.js, and Python. I am always looking for new challenges and opportunities to learn and grow.
                        </p>
                        <h2>Skills</h2>
                        <ul>
                            <li>React</li>
                            <li>Node.js</li>
                            <li>Python</li>
                            <li>JavaScript</li>
                            <li>HTML/CSS</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default About;