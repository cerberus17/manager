import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Card, CardSection, Button } from './common';
import { employeeFieldUpdated, createEmployee } from "../actions/EmployeeActions";
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component {
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
          <EmployeeForm {...this.props} />
          <CardSection>
            <Button onPress={this.onButtonPress.bind(this)}>
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
    phone: state.employee.phone,
    shift: state.employee.shift
  }
};

export default connect(mapStateToProps, { employeeFieldUpdated, createEmployee })(EmployeeCreate);