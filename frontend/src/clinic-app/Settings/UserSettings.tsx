import React, { FC, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import BreadcrumbTitle from '../layout/BreadcrumbTitle';

import { getUserInfo } from '../../utils/api';

const useStyles = makeStyles((theme) => ({}));

export const UserSettings: FC = () => {
  const [userInfo, setUserInfo] = useState<string>('');
  const [error, setError] = useState<string>('');
  const classes = useStyles();

  const queryBackend = async () => {
    try {
      const userInfo = await getUserInfo();
      setUserInfo(userInfo);
    } catch (err) {
      setError(err);
    }
  };

  queryBackend();

  return (
    <Grid container spacing={2}>
      <BreadcrumbTitle title="User Settings" subtitle="Manage your account here" />
      <Grid item xs={12}>
        {userInfo && (
          <p>User Email: <code>{userInfo}</code></p>
        )}
        {error && (
          <p>
            Error: <code>{error}</code>
          </p> 
        )}
      </Grid>
      <Grid item xs={12}>
        <p>First Name - string*</p>
        <p>Last Name - string*</p>
        <p>Email - string*</p>
        <p>NPI - integer</p>
        <p>State License #s - array/strings</p>
        <p>Medicaid ID - string</p>
        <p>Phone Number - string*</p>
        <p>Email Address - string*</p>
        <p>[Clinic] Mailing Address - string*</p>
        <p>MTL Provider ID - string (probably hide this)</p>
        <p>Publically accepting patients - boolean</p>
      </Grid>
    </Grid>
  );
};
