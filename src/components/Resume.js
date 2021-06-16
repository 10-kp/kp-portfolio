import React, { Component } from 'react';
import Portfolio from './Portfolio';
import Fade from 'react-reveal/Fade';
import data from '../data';

class Resume extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1 className='heading'>
          <Fade bottom cascade>
            Work.
          </Fade>
        </h1>
        <div className='work-content'>
          {data.portfolio.map((portfolio) => (
            <Portfolio
              key={portfolio.id}
              title={portfolio.title}
              service={portfolio.service}
              imageSrc={portfolio.imageSrc}
              url={portfolio.url}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Resume;
