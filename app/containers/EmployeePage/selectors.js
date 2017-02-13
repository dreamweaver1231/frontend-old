import { createSelector } from 'reselect';

/**
 * Direct selector to the employeePage state domain
 */
const selectEmployeePageDomain = () => (state) => state.get('employee');

/**
 * Other specific selectors
 */


/**
 * Default selector used by EmployeePage
 */

const makeSelectEmployeePage = () => createSelector(
  selectEmployeePageDomain(),
  (substate) => substate.toJS()
);

export default makeSelectEmployeePage;
export {
  selectEmployeePageDomain,
};
