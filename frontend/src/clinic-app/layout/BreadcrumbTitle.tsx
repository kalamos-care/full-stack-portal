import React, { FC, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
//import { InputPropTypes } from 'react-admin';


const useStyles = makeStyles((theme) => ({

}));

type BreadcrumbTitleProps = {
    title: string,
    subtitle: string,
};

const BreadcrumbTitle: FC<BreadcrumbTitleProps> = ({ title, subtitle }) => {
    return (
        <Grid container>
            <Grid item xs={12}>
                <Typography variant="h5" gutterBottom>
                    {title}
                </Typography>
                <Typography variant="h6" gutterBottom>
                    {subtitle}
                </Typography>
            </Grid>
        </Grid>
    );
};

export default BreadcrumbTitle;
