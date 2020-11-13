import React, { FC } from 'react';
import {
    Switch,
    Route,
    Link as RouterLink
} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';

import { PatientList, NewPatient, PatientDetail } from './';
import NewOrder from './Orders/NewOrder';

import Grid from '@material-ui/core/Grid';

import NewOrderIcon from '@material-ui/icons/LocalHospital';
import NewPatientIcon from '@material-ui/icons/PersonAdd';


const useStyles = makeStyles((theme) => ({
    speedDial: {
        position: 'absolute',
        '&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft': {
            bottom: theme.spacing(8),
            right: theme.spacing(2),
        },
    },
}));

const actions = [
    { icon: <RouterLink to="/clinic/patients/new"><NewPatientIcon /></RouterLink>, name: 'New Patient' },
    { icon: <RouterLink to="/clinic/patients/"><NewOrderIcon /></RouterLink>, name: 'New Order' },
];


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
                <Route path="/clinic/patients/orders/new">
                    <NewOrder />
                </Route>
                <Route path="/clinic/patients/:id">
                    <PatientDetail />
                </Route>
            </Switch>
        </Grid>
    );
};