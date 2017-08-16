import React, { Component } from 'react';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';
import { connect } from 'react-redux';

import { Card, CardSection, Input, Button } from './common';
import { emailChanged, passwordChanged, loginUser } from "../actions/index";

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const loginUser = {
      email: this.props.email,
      password: this.props.password
    };

    this.props.loginUser(loginUser);
  }

  render() {
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <Card>
            <CardSection>
              <Input label="Email"
                     placeholder="email@gmail.com"
                     value={this.props.email}
                     onChangeText={this.onEmailChange.bind(this)} />
            </CardSection>

            <CardSection>
              <Input secureTextEntry
                     value={this.props.password}
                     onChangeText={this.onPasswordChange.bind(this)}
                     label="Password"
                     placeholder="password" />
            </CardSection>

            <CardSection>
              <Button onPress={this.onButtonPress.bind(this)}>
                Login
              </Button>
            </CardSection>
          </Card>
        </TouchableWithoutFeedback>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    email: state.auth.email,
    password: state.auth.password
  }
};

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);