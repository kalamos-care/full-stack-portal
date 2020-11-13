import React, { FC } from 'react';
import { useParams } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({

}));

export const Conversation: FC = () => {
    const classes = useStyles();

    return (
        <Grid>
            <Typography component="h4" variant="h5" gutterBottom>This is a conversation!</Typography>
        </Grid>
    );
};