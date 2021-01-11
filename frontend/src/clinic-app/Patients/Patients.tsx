import React, { FC } from 'react';
import { Switch, Route, Link as RouterLink } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';

import { PatientList, NewPatient, PatientDetail } from '.';

const useStyles = makeStyles((theme) => ({
  speedDial: {
    position: 'absolute',
    '&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft': {
      bottom: theme.spacing(8),
      right: theme.spacing(2),
    },
  },
}));


export const Patients: FC = () => {
  const classes = useStyles();

  return (
    <Grid>
      <Switch>
        <Route exact path="/clinic/patients/">
          <PatientList />
        </Route>
        <Route exact path="/clinic/patients/new">
          <NewPatient />
        </Route>
        <Route path="/clinic/patients/:id">
          <PatientDetail />
        </Route>
      </Switch>
    </Grid>
  );
};
