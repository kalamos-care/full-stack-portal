// in src/users.js
import React, { FC } from 'react';
import {
  List,
  Datagrid,
  TextField,
  BooleanField,
  EmailField,
  EditButton,
} from 'react-admin';

// copied over from UserList
export const PatientList: FC = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <EmailField source="email" />
      <TextField source="first_name" />
      <TextField source="last_name" />
      <BooleanField source="is_active" />
      <BooleanField source="is_provider" />
      <BooleanField source="is_superuser" />
      <EditButton />
    </Datagrid>
  </List>
);
