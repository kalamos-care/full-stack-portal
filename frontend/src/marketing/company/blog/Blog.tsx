import React, { FC } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import { Container } from '@material-ui/core/';

import PageTitle from '../../layout/PageTitle';


const useStyles = makeStyles((theme) => ({}));

export const Blog: FC = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="md">
      <PageTitle title="Blog" subtitle="Coming Soon" />
    </Container>
  );
};