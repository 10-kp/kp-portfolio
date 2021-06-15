import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import { AiOutlineMail, AiFillGithub, AiOutlineTwitter } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';

function Contact() {
  return (
    <Container fluid className='home-about-section' id='about'>
      <Container>
        <Row>
          <Col md={12} className='home-about-social'>
            <p>Feel free to connect with me</p>

            <ul className='home-about-social-links'>
              <ul className='social-icons'>
                <a
                  href='kp_1@outlook.com'
                  target='_blank'
                  className='icon-colour home-social-icons'
                >
                  <AiOutlineMail />
                </a>
              </ul>

              <ul className='social-icons'>
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
                <a
                  href='https://www.linkedin.com/in/soumyajit4419/'
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

// class Contact extends Component {
//   state = {};
//   render() {
//     return (
//       <div>
//         <h1>
//           <Fade bottom cascade>
//             {' '}
//             Contact.
//           </Fade>
//         </h1>
//         <Fade bottom>
//           <div className='contact-content'>
//             <a href={`mailto:${data.contactEmail}`} className='email'>
//               {data.contactEmail}
//             </a>
//             <ul>
//               {data.social.map((link, index) => (
//                 <ul key={index}>
//                   <a target='_blank' rel='noopener noreferrer' href={link.url}>
//                     {link.name}
//                   </a>
//                 </ul>
//               ))}
//             </ul>
//           </div>
//         </Fade>
//       </div>
//     );
//   }
// }

// export default Contact;
