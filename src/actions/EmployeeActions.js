import { Actions } from 'react-native-router-flux';
import firebase from 'firebase';

import * as actions from './Types';

export const employeeFieldUpdated = (property, text) => {
  return {
    type: actions.EMPLOYEE_FIELD_UPDATED,
    property: property,
    value: text
  };
};

export const createEmployee = (props) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
            .push({
              name: props.name,
              phone: props.phone,
              shift: props.shift
            })
            .then(() => {
              dispatch({ type: actions.EMPLOYEE_CREATE_RESET });
              Actions.employeeList({ type: 'reset' })
            });
  };
};

