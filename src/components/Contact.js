import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import 'materialize-css/dist/css/materialize.min.css';
import { AiOutlineMail, AiFillGithub, AiOutlineTwitter } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';

function Contact() {
  return (
    // <div className="uk-margin">
    //             <label className="uk-form-label uk-text-muted" htmlFor="name">Name</label>
    //             <div className="uk-form-controls">
    //                 <input className="uk-input" id="name" type="text" placeholder="John Doe" ref={nameRef} />
    //             </div>
    //   </div>
    // <div className="uk-margin">
    // <label className="uk-form-label uk-text-muted" htmlFor="email">Email</label>
    // <div className="uk-form-controls">
    //     <input className="uk-input" id="email" type="text" placeholder="your@email.com" ref={emailRef} />
    // </div>
    // </div>

    <Container fluid className='home-about-section' id='about'>
      <Container>
        <Row>
          <Col md={4} className='home-about-social'>
            <p>Feel free to connect with me</p>

            <ul className='home-about-social-links'>
              <h7>Email Me</h7>
              <ul className='social-icons'>
                <a
                  href='mailto: kp_1@outlook.com'
                  target='_blank'
                  className='icon-colour home-social-icons'
                >
                  <AiOutlineMail />
                </a>
              </ul>

              <ul className='social-icons'>
                <h7>My GitHub</h7>
                <a
                  href='https://github.com/10-kp/'
                  target='_blank'
                  rel='noreferrer'
                  className='icon-colour home-social-icons'
                >
                  <AiFillGithub />
                </a>
              </ul>
              <ul className='social-icons'>
                <h7>Tweet</h7>
                <a
                  href='https://twitter.com/KP_83'
                  target='_blank'
                  rel='noreferrer'
                  className='icon-colour  home-social-icons'
                >
                  <AiOutlineTwitter />
                </a>
              </ul>
              <ul className='social-icons'>
                <h7>linkedIn</h7>
                <a
                  href='https://www.linkedin.com/in/kunalkhetarpal'
                  target='_blank'
                  rel='noreferrer'
                  className='icon-colour  home-social-icons'
                >
                  <FaLinkedinIn />
                </a>
              </ul>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Contact;
