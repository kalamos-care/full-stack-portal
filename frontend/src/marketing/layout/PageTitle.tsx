import React, { FC, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
//import { InputPropTypes } from 'react-admin';


const useStyles = makeStyles((theme) => ({
    pageTitle: {
        paddingBottom: theme.spacing(2),
    },
}));

type PageTitleProps = {
    title: string,
    subtitle: string,
};

const PageTitle: FC<PageTitleProps> = ({ title, subtitle }) => {
    const classes = useStyles();

    return (
        <Grid container className={classes.pageTitle}>
            <Grid item xs={12}>
                <Typography variant="h4" gutterBottom>
                    {title}
                </Typography>
                <Typography variant="h6" gutterBottom>
                    {subtitle}
                </Typography>
            </Grid>
        </Grid>
    );
};

export default PageTitle;
