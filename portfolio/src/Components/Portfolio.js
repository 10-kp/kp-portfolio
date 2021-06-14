import React, { Component } from 'react';

class Portfolio extends Component {
  state = {};
  render() {
    return (
      <div className='portfolio'>
        <a href={this.props.url}>
          <img src={this.props.imageSrc} alt={this.props.title}></img>
        </a>
        <h1>{this.props.title}</h1>
        <span>{this.props.service}</span>
      </div>
    );
  }
}

export default Portfolio;
