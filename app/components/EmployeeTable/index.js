import React from 'react';
import Dimensions from 'react-dimensions';
import { RaisedButton } from 'material-ui';
import { Link } from 'react-router';
import { Table, Column, Cell } from 'fixed-data-table-2';
import * as _ from 'lodash';

const LinkCell = ({ rowIndex, data, field, ...props }) => (
  <Cell {...props}>
    <Link to={`/employee/${data[rowIndex][field]}`} >
      {data[rowIndex][field]}
    </Link>
  </Cell>
);

LinkCell.propTypes = {
  data: React.PropTypes.array,
  rowIndex: React.PropTypes.number,
  field: React.PropTypes.string,
};

const TextCell = ({ rowIndex, data, field, ...props }) => (
  <Cell {...props}>
    {data[rowIndex][field]}
  </Cell>
);

TextCell.propTypes = {
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
    const keyNames = _.drop(Object.keys(employees[0]));
    const ColumnNode = keyNames.map((value, index) =>
      <Column
        key={index}
        header={<Cell>{value.replace(/_/gi, ' ')}</Cell>}
        cell={
          <TextCell
            data={employees}
            field={value}
          />
        }
        width={300}
      />
    );

    return (
      <div>
        <div>
          <Table
            rowsCount={employees.length}
            rowHeight={50}
            headerHeight={50}
            width={containerWidth}
            height={containerHeight || 550}
          >
            <Column
              header={<Cell>Enterprise ID</Cell>}
              cell={<LinkCell data={employees} field="Enterprise_ID" />}
              width={200}
              fixed
            />
            {ColumnNode}
          </Table>
          <br />
          <Link to={'/employee/create'} >
            <RaisedButton primary label="Add Employee" style={style} />
          </Link>
        </div>
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
