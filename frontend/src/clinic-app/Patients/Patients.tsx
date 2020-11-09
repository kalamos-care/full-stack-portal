import React, { FC } from 'react';
import { Switch, Route } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';

import { PatientList } from './PatientList'


const useStyles = makeStyles((theme) => ({

}));

export const Patients: FC = () => {
    const classes = useStyles();

    return (
        <Switch>
            <Route path="/clinic/patients">
                <PatientList />
            </Route>            
        </Switch>
    );
};