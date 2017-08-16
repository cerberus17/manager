import * as actions from "../actions/Types";

const INITIAL_STATE = {
  email: '',
  password: ''
};

export default (state=INITIAL_STATE, action) => {
  switch (action.type) {
    case actions.EMAIL_CHANGED:
      return {
        ...state,
        email: action.email
      };
    case actions.PASSWORD_CHANGED:
      return {
        ...state,
        password: action.password
      };
    default:
      return state;
  }
};