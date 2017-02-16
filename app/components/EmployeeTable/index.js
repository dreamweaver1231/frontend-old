import React from 'react';
import Dimensions from 'react-dimensions';
import { Link } from 'react-router';
import { RaisedButton } from 'material-ui';
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

const LinkCell = ({ rowIndex, field, data, ...props }) => (
  <Cell {...props}>
    <Link to={`/employee/${data[rowIndex][field]}`}>
      {data[rowIndex][field]}
    </Link>
  </Cell>
);

LinkCell.propTypes = {
  data: React.PropTypes.array,
  rowIndex: React.PropTypes.number,
  field: React.PropTypes.string,
};

export class EmployeeTable extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { employees, containerWidth, containerHeight } = this.props;
    const style = {
      margin: 12,
    };
    return (
      <div>
        <Table
          rowsCount={employees.length}
          rowHeight={50}
          headerHeight={50}
          width={containerWidth}
          height={containerHeight || 500}
        >
          <Column
            header={<Cell>Enterprise ID</Cell>}
            fixed
            cell={
              <LinkCell
                data={employees}
                field="Enterprise_ID"
              />
            }
            width={300}
          />
          <Column
            header={<Cell>First Name</Cell>}
            cell={
              <MyTextCell
                data={employees}
                field="First_Name"
              />
            }
            width={300}
          />
          <Column
            header={<Cell>Last Name</Cell>}
            cell={
              <MyTextCell
                data={employees}
                field="Last_Name"
              />
            }
            width={300}
          />
          <Column
            header={<Cell>Supervisor Name</Cell>}
            cell={
              <MyTextCell
                data={employees}
                field="Supervisor_Name"
              />
            }
            width={300}
          />
          <Column
            header={<Cell>Supervisor Enterprise ID</Cell>}
            cell={
              <MyTextCell
                data={employees}
                field="Supervisor_EnterpriseID"
              />
            }
            width={300}
          />
          <Column
            header={<Cell>Myte Approver Name</Cell>}
            cell={
              <MyTextCell
                data={employees}
                field="MyTE_Approver_Name"
              />
            }
            width={300}
          />
          <Column
            header={<Cell>Myte Approver ID</Cell>}
            cell={
              <MyTextCell
                data={employees}
                field="MyTE_Approver_ID"
              />
            }
            width={300}
          />
          <Column
            header={<Cell>User ID</Cell>}
            cell={
              <MyTextCell
                data={employees}
                field="User_ID"
              />
            }
            width={300}
          />
          <Column
            header={<Cell>Contact Number</Cell>}
            cell={
              <MyTextCell
                data={employees}
                field="Contact_Number"
              />
            }
            width={300}
          />
          <Column
            header={<Cell>Career Level</Cell>}
            cell={
              <MyTextCell
                data={employees}
                field="Career_Level"
              />
            }
            width={300}
          />
          <Column
            header={<Cell>Cisco Manager Name</Cell>}
            cell={
              <MyTextCell
                data={employees}
                field="Cisco_Manager_Name"
              />
            }
            width={300}
          />
          <Column
            header={<Cell>Portfolio Name</Cell>}
            cell={
              <MyTextCell
                data={employees}
                field="Portfolio_Name"
              />
            }
            width={300}
          />
          <Column
            header={<Cell>Primary Application</Cell>}
            cell={
              <MyTextCell
                data={employees}
                field="Primary_Application"
              />
            }
            width={300}
          />
          <Column
            header={<Cell>Location</Cell>}
            cell={
              <MyTextCell
                data={employees}
                field="Location"
              />
            }
            width={300}
          />
          <Column
            header={<Cell>SOW Number</Cell>}
            cell={
              <MyTextCell
                data={employees}
                field="SOW_Number"
              />
            }
            width={300}
          />
        </Table>
        <br />
        <RaisedButton primary label="Add Employee" style={style} />
      </div>
    );
  }
}

EmployeeTable.propTypes = {
  containerWidth: React.PropTypes.number,
  containerHeight: React.PropTypes.number,
  employees: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.bool,
  ]),
};

export default Dimensions()(EmployeeTable);
