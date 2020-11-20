import React, { FC, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Container } from '@material-ui/core/';
import PageTitle from '../layout/PageTitle';

const useStyles = makeStyles((theme) => ({}));

export const FAQ: FC = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="md">
      <PageTitle title="FAQ" subtitle="Coming Soon" />
    </Container>
  );
};
