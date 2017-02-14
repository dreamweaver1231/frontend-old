import React from 'react';
import Dimensions from 'react-dimensions';
import { Table, Column, Cell } from 'fixed-data-table-2';

const MyTextCell = ({ rowIndex, field, data, ...props }) => (
  <Cell {...props}>
    {data[rowIndex][field]}
  </Cell>
);

MyTextCell.propTypes = {
  data: React.PropTypes.array,
  rowIndex: React.PropTypes.number,
  field: React.PropTypes.string,
};


const EmployeeTable = ({ employees, containerWidth, containerHeight }) => (
  <Table
    rowsCount={47}
    rowHeight={50}
    headerHeight={50}
    width={containerWidth}
    height={containerHeight || 600}
  >
    <Column
      header={<Cell>Enterprise ID</Cell>}
      cell={
        <MyTextCell
          data={employees}
          field="Enterprise_ID"
        />
      }
      width={200}
    />
    <Column
      header={<Cell>First Name</Cell>}
      cell={
        <MyTextCell
          data={employees}
          field="FirstName"
        />
      }
      width={200}
    />
    <Column
      header={<Cell>Last Name</Cell>}
      cell={
        <MyTextCell
          data={employees}
          field="LastName"
        />
      }
      width={200}
    />
    <Column
      header={<Cell>Supervisor Name</Cell>}
      cell={
        <MyTextCell
          data={employees}
          field="Supervisor"
        />
      }
      width={200}
    />
    <Column
      header={<Cell>Supervisor ID</Cell>}
      cell={
        <MyTextCell
          data={employees}
          field="EnterpriseId_Supervisor"
        />
      }
      width={200}
    />
    <Column
      header={<Cell>Myte Approver Name</Cell>}
      cell={
        <MyTextCell
          data={employees}
          field="MyTE_Approver"
        />
      }
      width={200}
    />
    <Column
      header={<Cell>Myte Approver ID</Cell>}
      cell={
        <MyTextCell
          data={employees}
          field="EnterpriseId_myteapprover"
        />
      }
      width={200}
    />
    <Column
      header={<Cell>User Name</Cell>}
      cell={
        <MyTextCell
          data={employees}
          field="Userid"
        />
      }
      width={200}
    />
    <Column
      header={<Cell>Contact Number</Cell>}
      cell={
        <MyTextCell
          data={employees}
          field="Contact_No"
        />
      }
      width={200}
    />
    <Column
      header={<Cell>Career Level</Cell>}
      cell={
        <MyTextCell
          data={employees}
          field="Career_Level"
        />
      }
      width={200}
    />
    <Column
      header={<Cell>Cisco Manager Name</Cell>}
      cell={
        <MyTextCell
          data={employees}
          field="Cisco_Manager"
        />
      }
      width={200}
    />
    <Column
      header={<Cell>Portfolio Name</Cell>}
      cell={
        <MyTextCell
          data={employees}
          field="Portfolio_name"
        />
      }
      width={200}
    />
    <Column
      header={<Cell>Primary Application</Cell>}
      cell={
        <MyTextCell
          data={employees}
          field="Primary_Application"
        />
      }
      width={200}
    />
    <Column
      header={<Cell>Location</Cell>}
      cell={
        <MyTextCell
          data={employees}
          field="Location"
        />
      }
      width={200}
    />
    <Column
      header={<Cell>SOW Number</Cell>}
      cell={
        <MyTextCell
          data={employees}
          field="SOW"
        />
      }
      width={200}
    />
  </Table>
);

EmployeeTable.propTypes = {
  containerWidth: React.PropTypes.number,
  containerHeight: React.PropTypes.number,
  employees: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.bool,
  ]),
};

export default Dimensions()(EmployeeTable);
