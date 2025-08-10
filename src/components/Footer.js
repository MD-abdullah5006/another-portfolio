import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <Container>
        <Row>
          <Col className="text-center">
            <p>Copyright &copy; {new Date().getFullYear()} My Portfolio</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
