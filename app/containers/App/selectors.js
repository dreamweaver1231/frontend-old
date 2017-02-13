import { createSelector } from 'reselect';

// makeSelectLocationState expects a plain JS object for the routing state
const makeSelectLocationState = () => {
  let prevRoutingState;
  let prevRoutingStateJS;

  return (state) => {
    const routingState = state.get('route'); // or state.route

    if (!routingState.equals(prevRoutingState)) {
      prevRoutingState = routingState;
      prevRoutingStateJS = routingState.toJS();
    }

    return prevRoutingStateJS;
  };
};

/**
 * Direct selector to the employeePage state domain
 */
const selectAppPageDomain = () => (state) => state.get('app');

/**
 * Other specific selectors
 */


/**
 * Default selector used by EmployeePage
 */

const makeSelectAppPage = () => createSelector(
  selectAppPageDomain(),
  (homeState) => homeState.get('sidebar')
);

export default makeSelectAppPage;

export {
  makeSelectLocationState,
  selectAppPageDomain,
};
