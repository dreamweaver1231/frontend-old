/**
*
* EmployeeList
*
*/

import React from 'react';
import { CircularProgress } from 'material-ui';

const EmployeeList = ({ loading, error, employees }) => {
  if (loading) {
    return <CircularProgress />;
  }

  if (error !== false) {
    const ErrorComponent = () => (
      <h4>Error Occured</h4>
    );
    return <ErrorComponent />;
  }

  if (employees !== false) {
    return (
      <div>
        {JSON.stringify(employees)}
      </div>
    );
  }

  return null;
};

EmployeeList.propTypes = {
  loading: React.PropTypes.bool,
  employees: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.bool,
  ]),
  error: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.bool,
  ]),
};

export default EmployeeList;
