import React, { Component } from 'react';
import { StyleSheet, TouchableWithoutFeedback, Keyboard, Text } from 'react-native';
import { connect } from 'react-redux';

import { Card, CardSection, Input, Button, Spinner } from './common';
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

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />
    }

    return (
        <Button onPress={this.onButtonPress.bind(this)}>
          Login
        </Button>
    );
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

            <Text style={styles.errorTextStyle}>
              {this.props.error}
            </Text>

            <CardSection>
              {this.renderButton()}
            </CardSection>
          </Card>
        </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  errorTextStyle: {
    fontSize: 20,
    color: 'red',
    alignSelf: 'center'
  }
});

const mapStateToProps = (state) => {
  return {
    email: state.auth.email,
    password: state.auth.password,
    error: state.auth.error,
    loading: state.auth.loading
  }
};

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);