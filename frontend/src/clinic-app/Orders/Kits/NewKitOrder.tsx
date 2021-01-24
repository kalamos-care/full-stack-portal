import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import BreadcrumbTitle from '../../layout/BreadcrumbTitle';

const useStyles = makeStyles((theme) => ({}));

export const NewKitOrder: FC = () => {
  const classes = useStyles();

  return (
    <BreadcrumbTitle title="New Kit Order" subtitle="Order a patient sample collection kit here" />
  );
};
