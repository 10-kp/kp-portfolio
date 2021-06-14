import React, { Component } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
class Navbar extends Component {
  state = {};
  scrollToTop = () => {
    scroll.scrollToTop();
  };
  render() {
    return (
      <nav>
        <ul>
          <ul>
            <Link
              className='link'
              activeClass='active'
              to='home'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={this.scrollToTop}
            >
              Home
            </Link>
          </ul>
          <ul>
            <Link
              className='link'
              activeClass='active'
              to='About'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              About
            </Link>
          </ul>
          <ul>
            <Link
              className='link'
              activeClass='active'
              to='Portfolio'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Portfolio
            </Link>
          </ul>
          <ul>
            <Link
              className='link'
              activeClass='active'
              to='Contact'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Contact
            </Link>
          </ul>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
