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
        <Col md='4' className='footer-body'>
          <ul className='footer-icons'>
            <li className='social-icons'>
              <a href='https://github.com/10-kp/' style={{ color: 'white' }}>
                <AiFillGithub />
              </a>
            </li>
            <li className='social-icons'>
              <a href='https://twitter.com/KP_83' style={{ color: 'white' }}>
                <AiOutlineTwitter />
              </a>
            </li>
            <li className='social-icons'>
              <a
                href='https://www.linkedin.com/in/kunalkhetarpal'
                style={{ color: 'white' }}
              >
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
