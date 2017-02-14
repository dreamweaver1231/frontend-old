import React, { PropTypes } from 'react';
import EmployeeTable from 'components/EmployeeTable';
import { CircularProgress, Snackbar } from 'material-ui';

function EmployeeList({ loading, error, employees }) {
  if (loading) {
    return <CircularProgress size={80} thickness={5} />;
  }

  if (error !== false) {
    const MessageComponent = () => (
      <Snackbar
        open
        message="Error Occured"
        autoHideDuration={4000}
      />
    );
    return <MessageComponent />;
  }

  if (employees !== false) {
    return <EmployeeTable employees={employees} />;
  }

  return null;
}

EmployeeList.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  employees: PropTypes.any,
};

export default EmployeeList;
