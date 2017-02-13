/*
 * App Actions
 *
 */

import {
  TOGGLE_SIDEBAR,
} from './constants';

/**
 * toggles sidebar
 *
 *
 * @return {object} An action object with a type of TOGGLE_SIDEBAR
 */
export function toggleSidebar() {
  return {
    type: TOGGLE_SIDEBAR,
  };
}
