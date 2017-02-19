/**
*
* EmployeeFormEdit
*
*/

import React from 'react';
import { reduxForm, Field } from 'redux-form/immutable';
import MenuItem from 'material-ui/MenuItem';
import { RaisedButton, Divider } from 'material-ui';
import { SelectField, TextField, DatePicker } from 'redux-form-material-ui';

const EmployeeFormEdit = ({ handleSubmit, pristine, reset, submitting }) => {
  const required = (value) => value == null ? 'Required' : undefined;
  const style = {
    margin: 12,
  };
  return (
    <form onSubmit={handleSubmit}>
      <Field name="Enterprise_ID" component={TextField} hintText="Enterpise ID of Employee" />
      <Field name="First_Name" component={TextField} hintText="First Name" />
      <Field name="Last_Name" component={TextField} hintText="Last Name" />
      <Field name="Supervisor_Name" component={TextField} hintText="Supervisor Name" />
      <Field name="Supervisor_EnterpriseID" component={TextField} hintText="Supervisor Enterprise ID" />
      <Field name="MyTE_Approver_Name" component={TextField} hintText="MYte Approver Name" />
      <Field name="MyTE_Approver_ID" component={TextField} hintText="MYte Approver ID" />
      <Field name="User_ID" component={TextField} hintText="User ID" />
      <Field name="Contact_Number" component={TextField} hintText="Contact Number" />
      <Field name="Cisco_Manager_Name" component={TextField} hintText="Cisco Manager Name" />
      <Field name="Portfolio_Name" component={TextField} hintText="Portfolio Name" />
      <Field name="Primary_Application" component={TextField} hintText="Primary Application" />
      <Field name="Location" component={TextField} hintText="Location" />
      <Field name="SOW_Number" component={TextField} hintText="SOW Number" />
      <br />
      <Field
        name="HL_Date"
        component={DatePicker}
        format={null}
        hintText="HL Date"
        validate={required}
      />
      <Field
        name="Cisco_Start_Date"
        component={DatePicker}
        format={null}
        hintText="Cisco Start Date"
        validate={required}
      />
      <Field
        name="Liquid"
        component={SelectField}
        hintText="Core / Shared"
        floatingLabelText="Liquid"
        floatingLabelFixed
        autoWidth={false}
      >
        <MenuItem value="Core" primaryText="Core" />
        <MenuItem value="Shared" primaryText="Shared" />
      </Field>
      <br />
      <Field
        name="Career_Level"
        component={SelectField}
        hintText="Career Level"
        floatingLabelText="Career Level"
        floatingLabelFixed
        autoWidth={false}
      >
        <MenuItem value="08-Associate Manager" primaryText="Associate Manager" />
        <MenuItem value="09-Team Lead" primaryText="Team Lead" />
        <MenuItem value="10-Senior Software Engineer" primaryText="Senior Software Engineer" />
        <MenuItem value="11-Software Engineer" primaryText="Software Engineer" />
        <MenuItem value="12-Associate Software Engineer" primaryText="Associate Software Engineer" />
      </Field>
      <br />
      <Field
        name="Gender"
        component={SelectField}
        hintText="Gender"
        floatingLabelText="Gender"
        floatingLabelFixed
        autoWidth={false}
      >
        <MenuItem value="M" primaryText="Male" />
        <MenuItem value="F" primaryText="Female" />
      </Field>

      <div>
        <RaisedButton type="submit" label="Submit" primary style={style} disabled={submitting} />
        <RaisedButton onClick={reset} label="Reset" secondary style={style} disabled={pristine || submitting} />
      </div>
      <br />
      <br />
      <Divider />
    </form>
  );
};

EmployeeFormEdit.propTypes = {
  handleSubmit: React.PropTypes.func,
  reset: React.PropTypes.func,
  pristine: React.PropTypes.bool,
  submitting: React.PropTypes.bool,
};

// Decorate with redux-form
export default reduxForm({
  form: 'employeeForm',
})(EmployeeFormEdit);
