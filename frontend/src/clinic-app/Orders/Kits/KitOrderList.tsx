import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({}));

export const KitOrderList: FC = () => {
  const classes = useStyles();

  return (
    <Grid>
      <Typography variant="body1">Here's a list of kit orders</Typography>
    </Grid>
  );
};
