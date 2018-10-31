import React, { Component } from 'react';
import { Image, Modal, Button } from 'react-bootstrap';
import axios from 'axios';

import HeaderLogo from '../../../static/images/HeaderLogo.png';
import Registration from '../../../container/registrationForm';

import './hederStyles.css';

export default class Header extends Component {
  state = {
    show: false,
    photo: undefined,
  };

  fileChange = event => {
    this.setState({ photo: event.target.files[0] });
  };

  handleClose = () => {
    this.setState({ show: false });
  };

  handleShow = () => {
    this.setState({ show: true });
  };

  handleSubmit = async value => {
    try {
      const response = await axios.post('', {
        email: value.email,
        name: value.name,
        image: this.state.photo.name,
      });
      this.setState({ show: false });
      console.log(response);
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    return (
      <React.Fragment>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Registration</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Registration
              onSubmit={this.handleSubmit}
              onPhotoChange={this.fileChange}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>

        <div className="header">
          <div className="header-image">
            <Image responsive src={HeaderLogo} />
          </div>
          <div className="header-btns">
            <div>ALL PRODUCTS</div>
            <div>ABOUT US</div>
            <div>LOGIN IN</div>
            <div onClick={this.handleShow}>SING UP</div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
