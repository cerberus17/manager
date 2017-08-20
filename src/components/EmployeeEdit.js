import _ from 'lodash';
import React, { Component } from 'react';
import { Card, CardSection, Button } from './common';
import { connect } from 'react-redux';
import Communications from 'react-native-communications';

import { employeeFieldUpdated, updateEmployee } from '../actions/EmployeeActions';
import EmployeeForm from './EmployeeForm';

class EmployeeEdit extends Component {
  componentWillMount() {
    _.each(this.props.employee, (value, prop) => {
      this.props.employeeFieldUpdated(prop, value);
    });
  }

  onSaveButtonPress() {
    this.props.updateEmployee({
      name: this.props.name,
      phone: this.props.phone,
      shift: this.props.shift,
      uid: this.props.employee.uid
    });
  }

  onTextButtonPress() {
    Communications.text(this.props.phone, `Your upcoming shift is on ${this.props.shift}`);
  }

  render() {
    return (
        <Card>
          <EmployeeForm/>
          <CardSection>
            <Button onPress={this.onSaveButtonPress.bind(this)}>
              Save Changes
            </Button>
          </CardSection>

          <CardSection>
            <Button onPress={this.onTextButtonPress.bind(this)}>
              Text Employee
            </Button>
          </CardSection>
        </Card>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    name: state.employee.name,
    phone: state.employee.phone,
    shift: state.employee.shift
  }
};

export default connect(mapStateToProps, { employeeFieldUpdated, updateEmployee })(EmployeeEdit);