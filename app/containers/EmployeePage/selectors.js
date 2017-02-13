import { createSelector } from 'reselect';

/**
 * Direct selector to the employeePage state domain
 */
const selectEmployee = () => (state) => state.get('employee');

const makeSelectEmployees = () => createSelector(
  selectEmployee(),
  (employeeState) => employeeState.getIn(['employeeData', 'employeeList'])
);
const makeSelectLoading = () => createSelector(
  selectEmployee(),
  (employeeState) => employeeState.get('loading')
);

const makeSelectError = () => createSelector(
  selectEmployee(),
  (employeeState) => employeeState.get('error')
);

export {
  selectEmployee,
  makeSelectEmployees,
  makeSelectLoading,
  makeSelectError,
};
