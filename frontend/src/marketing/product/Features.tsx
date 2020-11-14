import React, { FC, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Typography, Grid, Container } from '@material-ui/core/';

const useStyles = makeStyles((theme) => ({
  bodyText: {
    textAlign: 'left',
  },
}));

export const Features: FC = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="md">
      <Grid>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          Features
        </Typography>
      </Grid>
    </Container>
  );
};
