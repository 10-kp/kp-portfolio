import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Pic from '../Assets/kunal-pic.jpg';

function About() {
  return (
    <Container fluid className='about-section'>
      <Container>
        <Row style={{ justifyContent: 'center', padding: '10px' }}>
          <Col
            md={7}
            style={{
              justifyContent: 'center',
              paddingTop: '30px',
              paddingBottom: '50px',
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
      </Container>
    </Container>
  );
}

export default About;

// class About extends Component {
//   state = {};
//   render() {
//     return (
//       <div className='about'>
//         <div className='about-content'>
//           <h1>
//             <Fade bottom cascade>
//               About
//             </Fade>
//           </h1>
//           <Fade bottom>
//             <p>{data.abouttext}</p>
//           </Fade>
//         </div>
//         {data.ShowAboutImage}
//       </div>
//     );
//   }
// }
