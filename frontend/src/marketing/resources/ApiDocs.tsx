import React, { FC, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Typography, Grid, Container } from '@material-ui/core/';

import PageTitle from '../layout/PageTitle';

const useStyles = makeStyles((theme) => ({}));

export const ApiDocs: FC = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="md">
      <PageTitle title="API Docs" subtitle="This is hosted thru FastAPI" />
    </Container>
  );
};
