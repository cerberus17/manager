import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import _ from 'lodash';

import { retrieveEmployees } from '../actions/EmployeeActions';
import EmployeeListItem from './EmployeeListItem';

class EmployeeList extends Component {
  componentWillMount() {
    // Note componentDidMount does not work here.
    // this.dataSource will not be initialized in time.
    this.props.retrieveEmployees();

    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  createDataSource(props) {
    const ds = new ListView.DataSource( {
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(props.employeeList);
  }

  renderRow(employee) {
    return <EmployeeListItem employee={employee} />;
  }

  render() {
    return(
        <ListView enableEmptySections
                  dataSource={this.dataSource}
                  renderRow={this.renderRow} />
    );
  }
}

// Example data returned:
// { '-KrsA5_Vt9JmlFQBmxWm': { name: 'Dan', phone: '555-111-3333', shift: 'Wednesday' },
//   '-Ks-G9UdtGjgtJwgA3IK': { name: 'Susan', phone: '222-555-7776', shift: 'Sunday' } }
const mapStateToProps = (state) => {
  const employees = _.map(state.employeeList, (val, uid) => {
    return { ...val, uid };
  });

  return { employeeList: employees };
};

export default connect(mapStateToProps, { retrieveEmployees })(EmployeeList);