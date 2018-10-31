import React, { Component } from 'react';
import { Panel, Image } from 'react-bootstrap';

import './popularProductsStyles.css';

export default class ProductPanel extends Component {
  render() {
    return (
      <Panel className="panel">
        <div className="image-wrapper">
          <Panel.Body>
            <Image responsive src={this.props.src} />
          </Panel.Body>
        </div>
        <Panel.Body>{this.props.text}</Panel.Body>
      </Panel>
    );
  }
}
