import * as actions from "../actions/Types";

const INITIAL_STATE = {
  email: '',
  password: '',
  user: null,
  error: '',
  loading: null
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
    case actions.LOGIN_USER_SUCCESS:
      return {
        ...state,
        user: action.user,
        email: '',
        password: '',
        error: '',
        loading: false
      };
    case actions.LOGIN_USER_FAILURE:
      return {
        ...state,
        password: '',
        error: 'Authentication Failed',
        loading: false
      };
    case actions.LOGIN_USER:
      return {
        ...state,
        loading: true,
        error: '',
      };
    default:
      return state;
  }
};