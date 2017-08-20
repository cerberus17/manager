import _ from 'lodash';
import React, { Component } from 'react';
import { Card, CardSection, Button, ConfirmationModal } from './common';
import { connect } from 'react-redux';
import Communications from 'react-native-communications';

import { employeeFieldUpdated, updateEmployee, deleteEmployee } from '../actions/EmployeeActions';
import EmployeeForm from './EmployeeForm';

class EmployeeEdit extends Component {
  state = {
    modalVisible: false
  };

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

  onFireButtonPress() {
    this.setState({
      modalVisible: !this.state.modalVisible
    });
  }

  onAccept() {
    this.props.deleteEmployee({ uid: this.props.employee.uid });
  }

  onDecline() {
    this.setState({
      modalVisible: false
    });
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
              Text Schedule
            </Button>
          </CardSection>

          <CardSection>
            <Button onPress={this.onFireButtonPress.bind(this)}>
              Fire
            </Button>
          </CardSection>

          <ConfirmationModal visible={this.state.modalVisible}
                             onAccept={this.onAccept.bind(this)}
                             onDecline={this.onDecline.bind(this)}>
            Are you sure you want constructor fire this employee?
          </ConfirmationModal>
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

export default connect(mapStateToProps, { employeeFieldUpdated, updateEmployee, deleteEmployee })(EmployeeEdit);