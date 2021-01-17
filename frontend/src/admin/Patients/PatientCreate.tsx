import React, { FC } from 'react';
import {
  Create,
  SimpleForm,
  TextInput,
  DateInput
} from 'react-admin';

export const PatientCreate: FC = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="legal_first_name" />
      <TextInput source="preferred_first_name" />
      <TextInput source="legal_last_name" />
      <DateInput source="date_of_birth" />
      <TextInput source="email" />
      <TextInput source="phone_day" />
    </SimpleForm>
  </Create>
);