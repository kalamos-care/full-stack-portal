import React, { FC } from 'react';
// import { Switch, Route } from 'react-router-dom';
import { Routes } from '../Routes';
import { makeStyles } from '@material-ui/core/styles';
// import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container';
// import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles((theme) => ({
  container: {

  }
}));

const Body: FC = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="md" className={classes.container}>
      <Routes />
    </Container>
  );
};

export default Body