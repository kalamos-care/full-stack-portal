import React, { FC, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Typography, Grid, Container } from '@material-ui/core/';

const useStyles = makeStyles((theme) => ({}));

export const FAQ: FC = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="md">
      <Grid>
        <Typography variant="h4" gutterBottom>
          FAQ
        </Typography>
        <Typography variant="h6" gutterBottom>
          Coming Soon
        </Typography>
        {/*
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          FAQ
        </Typography>
        */}
      </Grid>
    </Container>
  );
};
