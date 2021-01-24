import React, { FC } from 'react';
import { Switch, Route, useParams, Link as RouterLink } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';

import { OrderList } from '.';
import  NewLabOrder from './Labs/NewLabOrder';
import { LabOrderList } from './Labs/LabOrderList';
import { LabOrderDetail } from './Labs/LabOrderDetail';
import { NewKitOrder } from './Kits/NewKitOrder';
import { KitOrderList } from './Kits/KitOrderList';
import { KitOrderDetail } from './Kits/KitOrderDetail';

const useStyles = makeStyles((theme) => ({}));

export const Orders: FC = () => {
  const classes = useStyles();

  return (
    <Grid>
      <Switch>
      <Route exact path="/clinic/orders/">
          <OrderList />
        </Route>
        {/*
        <Route exact path="/clinic/orders/labs">
          <LabOrderList />
        </Route>
        <Route exact path="/clinic/orders/kits">
          <KitOrderList />
        </Route>
        */}
        <Route exact path="/clinic/orders/labs/new">
          <NewLabOrder />
        </Route>
        <Route exact path="/clinic/orders/kits/new">
          <NewKitOrder />
        </Route>
        <Route path="/clinic/orders/labs/:id">
          <LabOrderDetail />
        </Route>
        <Route path="/clinic/orders/kits/:id">
          <KitOrderDetail />
        </Route>
      </Switch>
    </Grid>
  );
};