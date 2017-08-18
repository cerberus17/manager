import * as actions from './Types';

export const employeeFieldUpdated = (property, text) => {
  return {
    type: actions.EMPLOYEE_FIELD_UPDATED,
    property: property,
    value: text
  };
};

