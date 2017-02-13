
import { fromJS } from 'immutable';
import employeePageReducer from '../reducer';

describe('employeePageReducer', () => {
  it('returns the initial state', () => {
    expect(employeePageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
