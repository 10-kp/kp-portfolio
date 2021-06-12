import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { AiFillGithub, AiOutlineTwitter } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className='footer'>
      <Row>
        <Col md='12' className='footer-copywright'>
          <h3>Designed and Developed by </h3>
        </Col>
        <Col md='12' className='footer-copywright'>
          <h3>Copyright © {year} Kunal</h3>
        </Col>
        <Col md='7' className='footer-body'>
          <ul className='footer-icons'>
            <ul className='social-icons'>
              <a href='https://github.com/10-kp' style={{ color: 'black' }}>
                <AiFillGithub />
              </a>
            </ul>
            <ul className='social-icons'>
              <a href='https://twitter.com/KP_83' style={{ color: 'black' }}>
                <AiOutlineTwitter />
              </a>
            </ul>
            <ul className='social-icons'>
              <a
                href='https://www.linkedin.com/in/kunalkhetarpal/'
                style={{ color: 'black' }}
              >
                <FaLinkedinIn />
              </a>
            </ul>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
