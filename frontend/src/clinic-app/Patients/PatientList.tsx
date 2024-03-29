import React, { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { FixedSizeList, ListChildComponentProps } from 'react-window';

import BreadcrumbTitle from '../layout/BreadcrumbTitle';

import { PatientSpeedDial } from './PatientSpeedDial';

const useStyles = makeStyles((theme) => ({}));

function renderPatientRow(props: ListChildComponentProps) {
  const { index, style } = props;

  return (
    <ListItem
      button
      style={style}
      key={index}
      component={RouterLink}
      to={`/clinic/patients/${index}`}
    >
      <ListItemText primary={`Patient ${index}`} />
    </ListItem>
  );
}

export const PatientList: FC = () => {
  const classes = useStyles();

  return (
    <Grid container>
      <BreadcrumbTitle title="Patients" subtitle="List patients here." />
      <Grid item xs={12}>
        <Paper>
          <FixedSizeList height={590} width={340} itemSize={46} itemCount={200}>
            {renderPatientRow}
          </FixedSizeList>
        </Paper>
        <PatientSpeedDial />
      </Grid>
    </Grid>
  );
};
