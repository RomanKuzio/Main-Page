import React, { Component } from 'react';
import { Image } from 'react-bootstrap';

import FooterLogo from '../../../static/images/FooterLogo.png';

import './footerStyles.css';

export default class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="footer">
          <div className="footer-image">
            <Image responsive src={FooterLogo} />
          </div>
          <div className="footer-btns">
            <div>ABOUT US</div>
            <div>TERMS OF SERVICE</div>
            <div>PRIVACY POLICY</div>
            <div>CONTACT US</div>
          </div>
        </div>
        <div className="bottom-of-page">
          <div>© 2018 Find Parrot</div>
        </div>
      </React.Fragment>
    );
  }
}
