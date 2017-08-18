import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';

const RouterComponent = () => {
  return (
      <Router>
        <Scene key="auth">
          <Scene style={{ paddingTop: 65 }} initial key="login" component={LoginForm} title="Please Login"/>
        </Scene>

        <Scene key="main">
          <Scene style={{ paddingTop: 65 }} key="employeeList"
                 component={EmployeeList} title="Employee List"
                 rightTitle="Add" onRight={() => Actions.employeeCreate()}/>
          <Scene style={{ paddingTop: 65 }} key="employeeCreate"
                 title="Create Employee" component={EmployeeCreate} />
        </Scene>

      </Router>
  );
};

export default RouterComponent;