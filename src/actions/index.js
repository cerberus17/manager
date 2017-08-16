import * as actions from "./Types";

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