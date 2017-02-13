/**
 * Gets the repositories of the user from Github
 */

import { take, call, put, cancel, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import request from 'utils/request';

import { LOAD_EMPLOYEES } from './constants';
import { employeesLoaded, employeeLoadingError } from './actions';
/**
 * Github repos request/response handler
 */
export function* getEmployees() {
  const requestURL = 'http://jsonplaceholder.typicode.com/posts';

  try {
    // Call our request helper (see 'utils/request')
    const repos = yield call(request, requestURL);
    yield put(employeesLoaded(repos));
  } catch (err) {
    yield put(employeeLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* employeeData() {
  // Watches for LOAD_EMPLOYEES actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  const watcher = yield takeLatest(LOAD_EMPLOYEES, getEmployees);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

// Bootstrap sagas
export default [
  employeeData,
];
