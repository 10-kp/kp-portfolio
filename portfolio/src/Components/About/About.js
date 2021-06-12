import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Aboutcard from './AboutCard';
import './about.css';

function About() {
  return (
    <Container>
      <Container>
        <Row>
          <h1>A little about me</h1>
          <Aboutcard />
          {/* <Col
            md={5}
            style={{ paddingTop: '120px', paddingBottom: '50px' }}
            className='about-img'
          ></Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default About;
