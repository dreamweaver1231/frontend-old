/*
 *
 * EmployeePage actions
 *
 */

import {
  LOAD_EMPLOYEES,
  LOAD_EMPLOYEES_SUCCESS,
  LOAD_EMPLOYEES_ERROR,
} from './constants';

/**
 * Load the employees, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_EMPLOYEES
 */
export function loadEmployees() {
  return {
    type: LOAD_EMPLOYEES,
  };
}

/**
 * Dispatched when the employees are loaded by the request saga
 *
 * @param  {array} employees The employees data
 *
 * @return {object}      An action object with a type of LOAD_EMPLOYEES_SUCCESS passing the repos
 */
export function employeesLoaded(employees) {
  return {
    type: LOAD_EMPLOYEES_SUCCESS,
    employees,
  };
}

/**
 * Dispatched when loading the employees fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_EMPLOYEES_ERROR passing the error
 */
export function employeeLoadingError(error) {
  return {
    type: LOAD_EMPLOYEES_ERROR,
    error,
  };
}
