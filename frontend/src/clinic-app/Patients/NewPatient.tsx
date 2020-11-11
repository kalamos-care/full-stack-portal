import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles((theme) => ({

}));

export const NewPatient: FC = () => {
    const classes = useStyles();
    
    return (
        <Paper>
            <h1>Invite a patient to sign HIPAA Auth waivers</h1>
        </Paper>
    );
};