import React, { FC } from 'react';
import { useParams } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({

}));

export const PatientDetail: FC = () => {
    const classes = useStyles();

    return (
        <Grid>
            <Typography component="h4" variant="h5" gutterBottom>List patient <code>:id</code> details here!</Typography>
        </Grid>
    );
};