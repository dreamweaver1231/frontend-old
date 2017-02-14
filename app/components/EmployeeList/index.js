/**
*
* EmployeeList
*
*/

import React from 'react';
import { CircularProgress } from 'material-ui';
import { Table, TableBody, TableHeaderColumn, TableRow } from 'material-ui/Table';

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
    const content = employees.map((item, index) => (
      <TableRow key={`item-${index}`}>
        <TableHeaderColumn>{item.Enterprise_ID}</TableHeaderColumn>
        <TableHeaderColumn>{item.FirstName}</TableHeaderColumn>
        <TableHeaderColumn>{item.LastName}</TableHeaderColumn>
        <TableHeaderColumn>{item.Supervisor}</TableHeaderColumn>
        <TableHeaderColumn>{item.EnterpriseId_Supervisor}</TableHeaderColumn>
        <TableHeaderColumn>{item.EnterpriseId_myteapprover}</TableHeaderColumn>
        <TableHeaderColumn>{item.Userid}</TableHeaderColumn>
        <TableHeaderColumn>{item.Contact_No}</TableHeaderColumn>
        <TableHeaderColumn>{item.Career_Level}</TableHeaderColumn>
        <TableHeaderColumn>{item.Cisco_Manager}</TableHeaderColumn>
        <TableHeaderColumn>{item.Portfolio_name}</TableHeaderColumn>
        <TableHeaderColumn>{item.Primary_Application}</TableHeaderColumn>
        <TableHeaderColumn>{item.Location}</TableHeaderColumn>
        <TableHeaderColumn>{item.SOW}</TableHeaderColumn>
      </TableRow>
    ));

    return (
      <Table bodyStyle={{ overflow: 'visible' }}>
        <TableBody>
          {content}
        </TableBody>
      </Table>
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
