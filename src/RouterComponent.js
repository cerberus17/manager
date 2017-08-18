import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';

const RouterComponent = () => {
  return (
      <Router>
        <Scene key="auth">
          <Scene style={{ paddingTop: 65 }} initial key="login" component={LoginForm} title="Please Login"/>
        </Scene>

        <Scene key="main">
          <Scene style={{ paddingTop: 65 }} key="employeeList" component={EmployeeList} title="Employee List"/>
        </Scene>
      </Router>
  );
};

export default RouterComponent;