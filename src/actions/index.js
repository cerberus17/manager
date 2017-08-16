import * as actions from './Types';
import firebase from 'firebase';

export const emailChanged = (text) => {
  return {
    type: actions.EMAIL_CHANGED,
    email: text
  };
};

export const passwordChanged = (text) => {
  return {
    type: actions.PASSWORD_CHANGED,
    password: text
  }
};

export const loginUser = ({email, password}) => {
  return (dispatch) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => {
              dispatch({
                type: actions.LOGIN_USER_SUCCESS,
                user: user
              });
            });
  }
};