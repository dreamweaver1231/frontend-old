/*
 *
 * EmployeePage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  LOAD_EMPLOYEES_SUCCESS,
  LOAD_EMPLOYEES,
  LOAD_EMPLOYEES_ERROR,
} from './constants';

const initialState = fromJS({
  loading: false,
  error: false,
  employeeData: {
    employeeList: false,
  },
});

function employeePageReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_EMPLOYEES:
      return state
        .set('loading', true)
        .set('error', false)
        .setIn(['employeeData', 'employeeList'], false);
    case LOAD_EMPLOYEES_SUCCESS:
      return state
        .setIn(['employeeData', 'employeeList'], action.employees)
        .set('loading', false);
    case LOAD_EMPLOYEES_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
    default:
      return state;
  }
}

export default employeePageReducer;
