import React, { Component } from 'react';
import { reduxForm, Form } from 'redux-form';
import 'react-images-uploader/styles.css';
import 'react-images-uploader/font.css';
import { RaisedButton } from 'material-ui';

import Input from '../components/input';
import { required, email } from '../formsHelpers/validator';

import './registrationFormStyles.css';

class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.imageInput = React.createRef();
    this.openWindow = this.openWindow.bind(this);
  }

  openWindow() {
    this.imageInput.current.click();
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.props.handleSubmit} className="registration-form">
          <Input
            type="text"
            name="email"
            text="Введіть e-mail"
            validate={[required, email]}
          />
          <Input
            type="text"
            name="name"
            text="Введіть ім'я"
            validate={required}
          />
          <div className="image-uploader-wrapper">
            <input
              type="file"
              name="photos"
              ref={this.imageInput}
              style={{ display: 'none' }}
              accept="image/png, image/jpeg, image/bmp"
              onChange={this.props.onPhotoChange}
            />
            <RaisedButton backgroundColor="CFD8DC" onClick={this.openWindow}>
              Add Photo
            </RaisedButton>
          </div>
          <RaisedButton
            type="submit"
            backgroundColor="#4caf50"
            className="register-btns"
          >
            SING UP
          </RaisedButton>
        </Form>
      </div>
    );
  }
}
const Registration = reduxForm({
  form: 'registrationForm',
})(RegistrationForm);

export default Registration;
