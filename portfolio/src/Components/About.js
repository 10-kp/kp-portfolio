import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function About() {
  return (
    <Container fluid className='about-section'>
      <Row style={{ justifyContent: 'center', padding: '10px' }}>
        <Col
          md={7}
          style={{
            justifyContent: 'center',
            paddingTop: '30px',
            paddingBottom: '50px',
          }}
        >
          <h1 style={{ fontSize: '2.1em', paddingBottom: '20px' }}>
            Know Who <strong className='purple'>I'M</strong>
          </h1>
        </Col>
      </Row>
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
