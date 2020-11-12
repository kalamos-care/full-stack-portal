import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles((theme) => ({

}));

export const Messages: FC = () => {
    const classes = useStyles();
    
    return (
        <div>
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>Sign up for the enterprise version to be able to message your patients.</Typography>
        </div>
    );
};