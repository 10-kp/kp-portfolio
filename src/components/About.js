import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Pic from '../Assets/kunal-pic.jpg';
import Button from 'react-bootstrap/Button';
import { AiOutlineDownload } from 'react-icons/ai';

function About() {
  return (
    <Container fluid className='about-section'>
      <Container>
        <Row style={{ justifyContent: 'center', padding: '20px' }}>
          <Col
            md={12}
            style={{
              justifyContent: 'center',
              paddingTop: '30px',
              paddingBottom: '1px',
            }}
          >
            <h1>Something About Me</h1>
            <img src={Pic} alt='profile-pic' />

            <h5>
              I am a budding Web Developer with a Certificate in Full Stack Web
              Deveopment Bootcamp Certificate Program from the University of
              Oregon.
            </h5>
          </Col>
        </Row>
        <Col md={6}>
          <ul>
            Some of my Front-End skills
            <li>HTML</li>
            <li>CSS</li>
            <li>jQuery</li>
          </ul>
        </Col>
        <Col md={6}>
          <ul>
            Some of my Back-End skills
            <li>MySQL</li>
            <li>APIs</li>
            <li>JSON</li>
          </ul>
        </Col>
        <Row style={{ justifyContent: 'center', position: 'relative' }}>
          <h5>Check out my resume below.</h5>
          <Button
            variant='primary'
            href='https://docs.google.com/document/d/1Ru-sJ7flEH7-rsOqHtAzzqLpuIsMyCES7iQPQAEbADo/edit?usp=sharing'
            target='_blank'
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default About;
