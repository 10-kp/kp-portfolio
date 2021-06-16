import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Type from './Type';

function Home() {
  return (
    <section>
      <Container fluid className='home-section'>
        <Container className='home-content'>
          <Row>
            <Col md={10} className='home-header'>
              <h1 className='heading'>Hi There!</h1>

              <h1 className='heading-name'>
                I'M
                <strong className='main-name'> Kunal</strong>
              </h1>

              <h2 className='heading-name'>Welcome to my webpage</h2>

              <div style={{ padding: 25, textAlign: 'left' }}>
                <Type />
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
