import React from 'react';
import Card from 'react-bootstrap/Card';

function AboutCard() {
  return (
    <Card className='quote-card-view'>
      <Card.Body>
        <p style={{ textAlign: 'justify' }}>
          Hi, I am <span className='orange'>Kunal! </span>
          <br />I am a budding, Full-Stack WebDeveloper
          <br />
          Apart from coding, some other activities that I love to do!
        </p>
        <ul>
          <li className='about-activity'>Reading</li>
          <li className='about-activity'>Travelling</li>
          <li className='about-activity'>Runnning</li>
        </ul>
      </Card.Body>
    </Card>
  );
}
export default AboutCard;
