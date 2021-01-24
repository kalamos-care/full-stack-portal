import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({}));

export const LabOrderDetail: FC = () => {
  const classes = useStyles();

  return (
    <div>
      <p>Here's some stuff about lab orders</p>
    </div>
  );
};
