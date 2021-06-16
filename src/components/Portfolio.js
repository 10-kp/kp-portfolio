import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCards';

import empdir from '../Assets/home-pagesnap.png';
import budget from '../Assets/budgetAppPic.png';
import workout from '../Assets/fitness-track.png';
import tech from '../Assets/tech-blog.png';
import note from '../Assets/note-taker-pic.png';
import stash from '../Assets/homepage.png';

function Projects() {
  return (
    <Container fluid className='project-section'>
      <Container>
        <h1 className='project-heading'>My Recent Projects</h1>

        <Row style={{ justifyContent: 'center', paddingBottom: '2px' }}>
          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={empdir}
              title='Employee Directory'
              description='Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages.'
              link='https://10-kp.github.io/employee_directory/'
              link2='https://github.com/10-kp/employee_directory'
            />
          </Col>

          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={budget}
              title='Budget Tracker'
              description='Progressive Web budget App to track account balance, withdrawals, and deposits with or without a data connection'
              link='https://github.com/10-kp/budget_tracker'
              link2='https://github.com/10-kp/budget_tracker'
            />
          </Col>

          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={workout}
              title='Workout Tracker'
              description='A NoSQL database to view, create, and track daily workouts with logging multiple resistance and cardio exercises'
              link='https://thawing-ravine-68564.herokuapp.com/?id=60b8081e9788b20015b3fcf0'
              link2='https://github.com/10-kp/workout-tracker'
            />
          </Col>

          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={tech}
              title='Tech-Blog'
              description='An MVC built blog app to post ideas and edit them, comment on other user posts and delete their own posts.'
              link='https://nameless-ridge-55768.herokuapp.com/'
              link2='https://github.com/10-kp/tech-blog'
            />
          </Col>

          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={note}
              title='Note Taker'
              description='A back-end app to write, delete and save notes.'
              link='https://damp-journey-24593.herokuapp.com/'
              link2='https://github.com/10-kp/note-taker'
            />
          </Col>

          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={stash}
              title='Stashbusters'
              description='Group Project - An app to help yarn hoarders organize their stash.'
              link='https://nameless-mesa-29731.herokuapp.com/'
              link2='https://github.com/10-kp/stashbusters'
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
