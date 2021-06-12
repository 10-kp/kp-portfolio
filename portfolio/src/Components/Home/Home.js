import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Type from './Type';
// import { AiFillGithub, AiOutlineTwitter } from 'react-icons/ai';
// import { FaLinkedinIn } from 'react-icons/fa';
import PageTitle from '../PageTitle';

function Home() {
  return (
    <Container fluid className='about-box'>
      <Row>
        <Col md={12} className='home-header'>
          <h1 style={{ paddingBottom: 50 }} className='heading'>
            Hi, there!
          </h1>

          <h1 className='heading-name'>
            I'M <strong className='main-name'> Kunal</strong>
          </h1>

          <p className='aboutMeText uk-text-justify uk-padding'>
            I'm a budding Web Developer with a Certificate in Full Stack Web
            Deveopment Bootcamp Certificate Program from the University of
            Oregon.
          </p>
        </Col>
      </Row>
    </Container>
  );
}
export default Home;
