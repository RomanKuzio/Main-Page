import React, { Component } from 'react';

import Header from './header/index';
import SearchBlock from './searchBlock/index';
import PopularProducts from './products/index';
import Testimonial from './testimonial/index';
import Footer from './footer/index';

export default class MainPage extends Component {
  render() {
    return (
      <div>
        <div className="background">
          <Header />
          <SearchBlock />
        </div>
        <PopularProducts />
        <Testimonial />
        <Footer />
      </div>
    );
  }
}
