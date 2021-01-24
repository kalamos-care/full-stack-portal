import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({}));

export const KitOrderDetail: FC = () => {
  const classes = useStyles();

  return (
    <div>
      <p>Here's some stuff about a kit order</p>
    </div>
  );
};
