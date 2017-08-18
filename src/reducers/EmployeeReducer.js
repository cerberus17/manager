import * as actions from '../actions/Types';
import {EMPLOYEE_FIELD_UPDATED} from "../actions/Types";

const INITIAL_STATE = {
  name: '',
  phone: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_FIELD_UPDATED:
      return { ...state, [action.property]: action.value };
    default:
      return state;
  }
};