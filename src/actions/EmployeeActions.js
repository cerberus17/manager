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

export const retrieveEmployees = () => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
        .on('value', metadata => {
          dispatch({
            type: actions.EMPLOYEE_LIST_RETRIEVAL_SUCCESS,
            payload: metadata.val()
          });
        });
  };
};

export const updateEmployee = (props) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees/${props.uid}/`)
            .set({
              name: props.name,
              phone: props.phone,
              shift: props.shift
            })
            .then(() => {
              dispatch({ type: actions.EMPLOYEE_SAVE_RESET });
              Actions.employeeList({ type: 'reset' })
            });
  };
};

export const deleteEmployee = (props) => {
  const { currentUser } = firebase.auth();

  return () => {
    firebase.database().ref(`/users/${currentUser.uid}/employees/${props.uid}/`)
            .remove()
            .then(() => {
              Actions.employeeList({ type: 'reset' });
            });
  };
};

