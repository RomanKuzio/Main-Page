import React, { Component } from 'react';
import { Button, ButtonToolbar, Glyphicon } from 'react-bootstrap';
import { debounce } from 'lodash';

import './serchBlockStyles.css';

export default class BottomButtons extends Component {
  state = {
    device: undefined,
  };

  componentDidMount() {
    this.setSizeName();
    window.addEventListener('resize', this.checkResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.checkResize);
  }

  setSizeName = (windowSize = window.innerWidth) => {
    if (windowSize < 480) {
      this.setState({ device: 'mobile' });
      return;
    }
    if (windowSize < 768) {
      this.setState({ device: 'tablet' });
      return;
    }
    this.setState({ device: 'desktop' });
  };

  checkResize = () =>
    debounce(() => {
      this.setSizeName();
    }, 5)();

  renderBottomButtons = () => {
    if (this.state.device === 'mobile') {
      return (
        <React.Fragment>
          <Button className="buttons">
            <Glyphicon className="icons" glyph="glyphicon glyphicon-th" />
            All categories
          </Button>
          <Button className="buttons">
            <Glyphicon className="icons" glyph="glyphicon glyphicon-hand-up" />
            How its works
          </Button>
        </React.Fragment>
      );
    }
    return (
      <React.Fragment>
        <Button className="buttons" bsSize="large">
          <Glyphicon className="icons" glyph="glyphicon glyphicon-th" />
          All categories
        </Button>
        <Button className="buttons" bsSize="large">
          <Glyphicon className="icons" glyph="glyphicon glyphicon-hand-up" />
          How its works
        </Button>
      </React.Fragment>
    );
  };

  render() {
    return (
      <ButtonToolbar className="btns-wrapper">
        {this.renderBottomButtons()}
      </ButtonToolbar>
    );
  }
}
