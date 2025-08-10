import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const projects = [
  {
    title: 'Project Alpha',
    description: 'A cutting-edge web application built with React and Node.js.',
    link: '#!',
    img: 'https://img.freepik.com/free-vector/cute-cartoon-character-with-laptop-sitting-on-cloud_1308-10000.jpg',
    technologies: ['React', 'Node.js', 'MongoDB'],
    github: 'https://github.com/yourusername/project-alpha',
    liveDemo: 'https://project-alpha.netlify.app/',
  },
  {
    title: 'Project Beta',
    description: 'An e-commerce platform featuring secure payment integration.',
    link: '#!',
    img: 'https://img.freepik.com/free-vector/cute-cartoon-character-with-laptop-sitting-on-cloud-with-rainbow_1308-10001.jpg',
    technologies: ['Angular', 'Express', 'PostgreSQL'],
    github: 'https://github.com/yourusername/project-beta',
    liveDemo: 'https://project-beta.vercel.app/',
  },
  {
    title: 'Project Gamma',
    description: 'A mobile-first responsive blog application.',
    link: '#!',
    img: 'https://img.freepik.com/free-vector/cute-cartoon-character-with-laptop-sitting-on-cloud-with-stars_1308-10002.jpg',
    technologies: ['Vue.js', 'Firebase', 'CSS3'],
    github: 'https://github.com/yourusername/project-gamma',
    liveDemo: 'https://project-gamma.firebaseapp.com/',
  },
  {
    title: 'Project Delta',
    description: 'A data visualization dashboard using D3.js.',
    link: '#!',
    img: 'https://img.freepik.com/free-vector/cute-cartoon-character-with-laptop-sitting-on-cloud-with-moon_1308-10003.jpg',
    technologies: ['D3.js', 'Python', 'Flask'],
    github: 'https://github.com/yourusername/project-delta',
    liveDemo: 'https://project-delta.herokuapp.com/',
  },
  {
    title: 'Project Epsilon',
    description: 'An AI-powered chatbot integrated with a web interface.',
    link: '#!',
    img: 'https://img.freepik.com/free-vector/cute-cartoon-character-with-laptop-sitting-on-cloud-with-sun_1308-10004.jpg',
    technologies: ['Python', 'TensorFlow', 'React'],
    github: 'https://github.com/yourusername/project-epsilon',
    liveDemo: 'https://project-epsilon.netlify.app/',
  },
  {
    title: 'Project Zeta',
    description: 'A real-time collaborative document editor.',
    link: '#!',
    img: 'https://img.freepik.com/free-vector/cute-cartoon-character-with-laptop-sitting-on-cloud-with-planets_1308-10005.jpg',
    technologies: ['Socket.IO', 'Node.js', 'React'],
    github: 'https://github.com/yourusername/project-zeta',
    liveDemo: 'https://project-zeta.vercel.app/',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-4">My Projects</h2>
        <Row>
          {projects.map((project, index) => (
            <Col md={4} key={index} className="mb-4">
              <Card>
                <Card.Img variant="top" src={project.img} className="card-img-top" />
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <Card.Text className="text-muted">Technologies: {project.technologies.join(', ')}</Card.Text>
                  <Card.Link href={project.github} target="_blank" rel="noopener noreferrer">GitHub</Card.Link>
                  {project.liveDemo && (
                    <Card.Link href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="ms-2">Live Demo</Card.Link>
                  )}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
