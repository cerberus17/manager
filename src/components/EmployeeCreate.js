import React, { Component } from 'react';
import { Picker, Text } from 'react-native';
import { connect } from 'react-redux';

import { Card, CardSection, Input, Button, Spinner } from './common';
import { employeeFieldUpdated, createEmployee } from "../actions/EmployeeActions";

class EmployeeCreate extends Component {
  onNameChange(text) {
    this.props.employeeFieldUpdated("name", text);
  }

  onPhoneChange(text) {
    this.props.employeeFieldUpdated("phone", text);
  }

  onButtonPress() {
    const employee = {
      name: this.props.name,
      phone: this.props.phone,
      shift: this.props.shift || 'Monday'
    };

    this.props.createEmployee(employee);
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
            <Text style={styles.pickerTextStyle}>Shift</Text>
            <Picker style={{ flex: 2, flexDirection: 'column' }}
                    selectedValue={this.props.shift}
                    onValueChange={text => this.props.employeeFieldUpdated("shift", text)}>
              <Picker.Item label="Monday" value="Monday" />
              <Picker.Item label="Tuesday" value="Tuesday" />
              <Picker.Item label="Wednesday" value="Wednesday" />
              <Picker.Item label="Thursday" value="Thursday" />
              <Picker.Item label="Friday" value="Friday" />
              <Picker.Item label="Saturday" value="Saturday" />
              <Picker.Item label="Sunday" value="Sunday" />
            </Picker>
          </CardSection>
          <CardSection>
            <Button onPress={this.onButtonPress.bind(this)}>
              Create
            </Button>
          </CardSection>
        </Card>
    );
  }
}

const styles = {
  pickerTextStyle: {
    flex: 1,
    fontSize: 18,
    paddingLeft: 20,
    paddingRight: 10,
    paddingTop: 10
  }
};

const mapStateToProps = (state) => {
  return {
    name: state.employee.name,
    phone: state.employee.phone,
    shift: state.employee.shift
  }
};

export default connect(mapStateToProps, { employeeFieldUpdated, createEmployee })(EmployeeCreate);