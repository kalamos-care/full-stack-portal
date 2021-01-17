import React, { FC } from 'react';
import { fetchUtils, Admin as ReactAdmin, Resource } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';
import authProvider from './authProvider';

import { UserList, UserEdit, UserCreate } from './Users';
import { PatientList, PatientEdit, PatientCreate } from './Patients';

import { createMuiTheme } from '@material-ui/core/styles';

import GTHaptikMediumWoff2 from '../assets/fonts/GT-Haptik-Medium.woff2';
import 'typeface-arimo';

const gthaptikmedium = {
  fontFamily: 'GT-Haptik-Medium',
  fontStyle: 'normal',
  fontWeight: 400,
  src: `
    local('GT-Haptik-Medium'),
    url(${GTHaptikMediumWoff2}) format('woff2')
  `,
};

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#67568c',
      main: '#463366',
      dark: '#301e4e',
    },
    secondary: {
      main: '#ff6e6c',
    },
    text: {
      primary: "#1f1235",
      secondary: "#1b1425",
    }
  },
  typography: {
    button: {
      fontFamily: "GT-Haptik-Medium",
    },
    h1: {
      fontFamily: "GT-Haptik-Medium",
    },
    h2: {
      fontFamily: "GT-Haptik-Medium",
    },
    h3: {
      fontFamily: "GT-Haptik-Medium",
    },
    h4: {
      fontFamily: "GT-Haptik-Medium",
    },
    h5: {
      fontFamily: "GT-Haptik-Medium",
    },
    h6: {
      fontFamily: "GT-Haptik-Medium",
    },
    fontFamily: [
      'Arimo',
      'sans-serif',
    ].join(','),
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [gthaptikmedium],
      },
    },
  },
});

const httpClient = (url: any, options: any) => {
  if (!options) {
    options = {};
  }
  if (!options.headers) {
    options.headers = new Headers({ Accept: 'application/json' });
  }
  const token = localStorage.getItem('token');
  options.headers.set('Authorization', `Bearer ${token}`);
  return fetchUtils.fetchJson(url, options);
};

const dataProvider = simpleRestProvider('api/v1', httpClient);

const resources = [
  <Resource name="users" list={UserList} edit={UserEdit} create={UserCreate}/>,
];

/*
            {resources.map((resource) => (
              {resource}
            )}
*/

export const Admin: FC = () => {
  return (
      <ReactAdmin theme={theme} dataProvider={dataProvider} authProvider={authProvider}>
        <Resource name="users" list={UserList} edit={UserEdit} create={UserCreate} />
        <Resource name="providers" />
        <Resource name="clinics" />
        <Resource name="patients" list={PatientList} edit={PatientEdit} create={PatientCreate} />
        <Resource name="assays" />
        <Resource name="diagnostic_orders" />
        <Resource name="kits" />
      </ReactAdmin>
  );
};

/* Removed check for admin privileges
{(permissions: 'admin' | 'user') => [
  permissions === 'admin' ? (
    <Resource />
  ) : null,
]}
*/