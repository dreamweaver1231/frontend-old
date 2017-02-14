/*
 *
 * EmployeePage
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { loadEmployees } from 'containers/EmployeePage/actions';
import { makeSelectEmployees, makeSelectLoading, makeSelectError } from 'containers/EmployeePage/selectors';
import EmployeeList from 'components/EmployeeList';

export class EmployeePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
    this.props.dispatch(loadEmployees());
  }

  render() {
    const { loading, error, employees } = this.props;
    const employeesListProps = {
      loading,
      error,
      employees,
    };

    return (
      <div>
        <Helmet
          title="Employee Page"
          meta={[
            { name: 'description', content: 'Description of EmployeePage' },
          ]}
        />
        <pre>
          <EmployeeList {...employeesListProps} />
        </pre>
      </div>
    );
  }
}

EmployeePage.propTypes = {
  dispatch: React.PropTypes.func,
  loading: React.PropTypes.bool,
  error: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.bool,
  ]),
  employees: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.bool,
  ]),
};

const mapStateToProps = createStructuredSelector({
  employees: makeSelectEmployees(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeePage);
