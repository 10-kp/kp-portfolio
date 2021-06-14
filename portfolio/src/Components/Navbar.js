import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
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
                to='/project'
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: '2px' }}
                />{' '}
                Projects
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to='/resume'
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

// import React, { Component } from 'react';
// import { Link, animateScroll as scroll } from 'react-scroll';
// class Navbar extends Component {
//   state = {};
//   scrollToTop = () => {
//     scroll.scrollToTop();
//   };
//   render() {
//     return (
//       <nav>
//         <ul>
//           <ul>
//             <Link
//               className='link'
//               activeClass='active'
//               to='home'
//               spy={true}
//               smooth={true}
//               offset={-70}
//               duration={500}
//               onClick={this.scrollToTop}
//             >
//               Home
//             </Link>
//           </ul>
//           <ul>
//             <Link
//               className='link'
//               activeClass='active'
//               to='About'
//               spy={true}
//               smooth={true}
//               offset={-70}
//               duration={500}
//             >
//               About
//             </Link>
//           </ul>
//           <ul>
//             <Link
//               className='link'
//               activeClass='active'
//               to='Portfolio'
//               spy={true}
//               smooth={true}
//               offset={-70}
//               duration={500}
//             >
//               Portfolio
//             </Link>
//           </ul>
//           <ul>
//             <Link
//               className='link'
//               activeClass='active'
//               to='Contact'
//               spy={true}
//               smooth={true}
//               offset={-70}
//               duration={500}
//             >
//               Contact
//             </Link>
//           </ul>
//         </ul>
//       </nav>
//     );
//   }
// }

// export default Navbar;
