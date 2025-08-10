import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Home = () => {
  return (
    <section id="home" className="py-5 text-center">
      <Container>
        <Row>
          <Col>
            <h1>Welcome to My Portfolio</h1>
            <p className="lead">I'm a passionate developer creating modern and responsive web applications.</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Home;
