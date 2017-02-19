/*
 *
 * EmployeePage
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';

import EmployeeList from 'components/EmployeeList';

import { loadEmployees } from 'containers/EmployeePage/actions';
import { makeSelectEmployees, makeSelectLoading, makeSelectError } from 'containers/EmployeePage/selectors';

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
        {this.props.children}
        <EmployeeList {...employeesListProps} />
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
  children: React.PropTypes.node,
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
