import React, { Component } from 'react';

import Carusel from './carusel';

import './testimonialsStyles.css';

export default class Testimonial extends Component {
  render() {
    return (
      <div className="testimonials-wrapper">
        <div className="testimonials-title">
          <h1>Testimonials</h1>
          <span className="testimonials-mini-title">
            What our costumers told about us
          </span>
        </div>
        <Carusel />
      </div>
    );
  }
}
