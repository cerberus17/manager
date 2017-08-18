import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import { Card, CardSection, Input, Button, Spinner } from './common';
import { employeeFieldUpdated } from "../actions/EmployeeActions";

class EmployeeCreate extends Component {
  onNameChange(text) {
    this.props.employeeFieldUpdated("name", text);
  }

  onPhoneChange(text) {
    this.props.employeeFieldUpdated("phone", text);
  }

  render() {
    return(
        <Card>
          <CardSection>
            <Input label="Name"
                   placeholder="Employee Name"
                   value={this.props.name}
                   onChangeText={this.onNameChange.bind(this)} />
          </CardSection>

          <CardSection>
            <Input value={this.props.phone}
                   onChangeText={this.onPhoneChange.bind(this)}
                   label="Phone"
                   placeholder="555-555-1212" />
          </CardSection>

          <CardSection>
            <Button>
              Create
            </Button>
          </CardSection>
        </Card>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    name: state.employee.name,
    phone: state.employee.phone
  }
};

export default connect(mapStateToProps, { employeeFieldUpdated })(EmployeeCreate);