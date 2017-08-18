import * as actions from '../actions/Types';

const INITIAL_STATE = {
  name: '',
  phone: '',
  shift: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actions.EMPLOYEE_FIELD_UPDATED:
      return { ...state, [action.property]: action.value };
    case actions.EMPLOYEE_CREATE_RESET:
      return INITIAL_STATE;
    default:
      return state;
  }
};