import React, { FC } from 'react';
import {
    Switch,
    Route,
    Link as RouterLink
  } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';

import { PatientList } from './PatientList';
import { NewPatient } from './NewPatient';
import { PatientDetail } from './PatientDetail';

import Grid from '@material-ui/core/Grid';
import SpeedDial, { SpeedDialProps } from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';

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
    { icon: <RouterLink to="/clinic/patients/new"><NewPatientIcon/></RouterLink>, name: 'New Patient' },
    { icon: <RouterLink to="/clinic/patients/"><NewOrderIcon/></RouterLink>, name: 'New Order' },
];


export const Patients: FC = () => {
    const classes = useStyles();

    {/* Move all speeddial stuff to the main view and hide it when not on main list */ }
    const [direction, setDirection] = React.useState<SpeedDialProps['direction']>('up');
    const [open, setOpen] = React.useState(false);
    const [hidden, setHidden] = React.useState(false);


    const handleDirectionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDirection((event.target as HTMLInputElement).value as SpeedDialProps['direction']);
    };
    const handleHiddenChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setHidden(event.target.checked);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleOpen = () => {
        setOpen(true);
    };

    return (
        <Grid>
            <Switch>
                <Route exact path="/clinic/patients">
                    <PatientList />
                </Route>
                <Route exact path="/clinic/patients/new">
                    <NewPatient />
                </Route>
                <Route path="/clinic/patients/:id">
                    <PatientDetail />
                </Route>
            </Switch>

            <SpeedDial
                ariaLabel="PatientList Speeddial"
                className={classes.speedDial}
                icon={<SpeedDialIcon />}
                onClose={handleClose}
                onOpen={handleOpen}
                open={open}
                direction={direction}
            >
                {actions.map((action) => (
                    <SpeedDialAction
                        key={action.name}
                        icon={action.icon}
                        tooltipTitle={action.name}
                        onClick={handleClose}
                    />
                ))}
            </SpeedDial>
        </Grid>
    );
};