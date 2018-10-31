import React, { Component } from 'react';
import { Field } from 'redux-form';
import { green500 } from 'material-ui/styles/colors';
import TextField from 'material-ui/TextField';

const styles = {
  errorStyle: {
    color: green500,
  },
  underlineStyle: {
    borderColor: green500,
  },
  floatingLabelStyle: {
    color: green500,
  },
};

const hideAutoFillColorStyle = {
  WebkitBoxShadow: '0 0 0 1000px white inset',
};
const hintStyle = { zIndex: '1' };

class Text extends Component {
  render() {
    const {
      input: { onChange, value, name, onFocus, onBlur },
      type,
      meta: { error, visited, submitFailed },
    } = this.props;
    return (
      <TextField
        multiLine={this.props.multiLine}
        floatingLabelText={this.props.text}
        floatingLabelStyle={styles.floatingLabelStyle}
        floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
        underlineFocusStyle={styles.underlineStyle}
        type={type || 'text'}
        name={name}
        errorText={(visited || submitFailed) && error}
        onChange={(e, val) => e.preventDefault() || onChange(val)}
        onFocus={onFocus}
        value={value}
        inputStyle={hideAutoFillColorStyle}
        hintStyle={hintStyle}
        onBlur={onBlur}
        hintText={this.props.hintText}
      />
    );
  }
}

export default class Input extends Component {
  render() {
    return (
      <Field
        multiLine={this.props.multiLine}
        name={this.props.name}
        component={Text}
        validate={this.props.validate}
        type={this.props.type}
        text={this.props.text}
      />
    );
  }
}
