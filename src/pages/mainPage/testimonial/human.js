import React, { Component } from 'react';
import { Image } from 'react-bootstrap';

import './testimonialsStyles.css';

export default class Human extends Component {
  render() {
    return (
      <div className="human">
        <div className="testimonials-image-wrapper">
          <Image
            responsive
            className="testimonials-image"
            src={this.props.src}
          />
        </div>
        <div className="commetn">{this.props.comment}</div>
        <div className="testimonials-name-wrapper">
          <div className="testimonials-name">{this.props.name}</div>
          <div className="testimonials-work">{this.props.works}</div>
        </div>
      </div>
    );
  }
}
