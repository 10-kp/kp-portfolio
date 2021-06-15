import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from 'react-icons/ai';

import { CgFile } from 'react-icons/cg';

function NavBar() {
  const [expand, updateExpanded] = useState(false);

  return (
    <Navbar expanded={expand} fixed='top' expand='md'>
      <Container>
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='ml-auto' defaultActiveKey='#home'>
            <Nav.Item>
              <Nav.Link as={Link} to='/' onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: '2px' }} /> Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to='/about'
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineUser style={{ marginBottom: '2px' }} /> About
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to='/contact'
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: '2px' }}
                />{' '}
                Contact
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to='/portfolio'
                onClick={() => updateExpanded(false)}
              >
                <CgFile style={{ marginBottom: '2px' }} /> Portfolio
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
