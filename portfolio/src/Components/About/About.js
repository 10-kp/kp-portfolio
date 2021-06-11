import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Aboutcard from './AboutCard';

function About() {
  return (
    <Container fluid className='about-section'>
      <Container>
        <Row style={{ justifyContent: 'center', padding: '10px' }}>
          <Col
            md={7}
            style={{
              justifyContent: 'center',
              paddingTop: '40px',
              paddingBottom: '40px',
            }}
          >
            <h1 style={{ fontSize: '2.1em', paddingBottom: '20px' }}>
              Hi, there!<strong className='purple'>I'm Kunal</strong>
            </h1>
            <p>Please have a look around</p>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: '120px', paddingBottom: '50px' }}
            className='about-img'
          ></Col>
        </Row>
        <h1 className='project-heading'>
          Professional <strong className='orange'>Skillset </strong>
        </h1>

        <h1 className='project-heading'>
          <strong className='orange'>Tools</strong> I use
        </h1>
      </Container>
    </Container>
  );
}

export default About;
