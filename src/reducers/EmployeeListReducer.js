import * as actions from '../actions/Types';

const INITIAL_STATE = {

};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actions.EMPLOYEE_LIST_RETRIEVAL_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}