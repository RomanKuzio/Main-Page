import React, { Component } from 'react';
import { Form, Button, DropdownButton, MenuItem } from 'react-bootstrap';

import BottomButtons from './bottomButtons';

import './serchBlockStyles.css';

export default class SearchBlock extends Component {
  render() {
    return (
      <div className="search-block">
        <div>
          <div className="search-title-wrapper">
            <span className="search-title">
              Quick Search for Your
              <span className="highlighted-text"> Perect Product</span>
            </span>
          </div>
          <div className="mini-title">INNOVATE • LIST • CONNECT</div>
          <Form inline className="search-form">
            <div className="search-form-wrapper">
              <DropdownButton
                title="Category"
                className="dropdown"
                id="bg-nested-dropdown"
              >
                <MenuItem eventKey="1">Dropdown link</MenuItem>
                <MenuItem eventKey="2">Dropdown link</MenuItem>
              </DropdownButton>
              <Button type="submit" className="submit-btn">
                <div>START SEARCHING</div>
              </Button>
            </div>
          </Form>
        </div>
        <div className="search-block-footer">
          <BottomButtons />
        </div>
      </div>
    );
  }
}
