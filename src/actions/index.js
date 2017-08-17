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

export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: actions.LOGIN_USER });

    firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => loginUserSuccess(dispatch, user))
            .catch(() => {
              firebase.auth().createUserWithEmailAndPassword(email, password)
                      .then(user => loginUserSuccess(dispatch, user))
                      .catch(() => loginUserFailure(dispatch));
            });
  };
};

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: actions.LOGIN_USER_SUCCESS,
    user: user
  });
};

const loginUserFailure = (dispatch) => {
  dispatch({
    type: actions.LOGIN_USER_FAILURE
  });
};