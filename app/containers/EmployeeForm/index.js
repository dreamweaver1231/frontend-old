/*
 *
 * EmployeeForm
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';

export class EmployeeForm extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet
          title="EmployeeForm"
          meta={[
            { name: 'description', content: 'Description of EmployeeForm' },
          ]}
        />
      </div>
    );
  }
}

EmployeeForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(EmployeeForm);
