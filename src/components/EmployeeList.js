import React, { Component } from 'react';
import { connect } from 'react-redux';
import { retrieveEmployees } from '../actions/EmployeeActions';
import { View, Text } from 'react-native';

class EmployeeList extends Component {
  componentDidMount() {
    this.props.retrieveEmployees();
  }
  
  render() {
    return(
        <View>
          <Text>Employee List</Text>
          <Text>Employee List</Text>
          <Text>Employee List</Text>
          <Text>Employee List</Text>
          <Text>Employee List</Text>
          <Text>Employee List</Text>
        </View>
    );
  }
}

export default connect(null, { retrieveEmployees })(EmployeeList);