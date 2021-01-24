import React, { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

import BreadcrumbTitle from '../layout/BreadcrumbTitle';

import { OrdersSpeedDial } from './OrdersSpeedDial';
import { LabOrderList } from './Labs/LabOrderList';
import { KitOrderList } from './Kits/KitOrderList';


const useStyles = makeStyles((theme) => ({}));

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          {children}
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export const OrderList: FC = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleTabChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };


  return (
    <Grid container>
      <BreadcrumbTitle title="Orders" subtitle="Display lab and kit orders here" />
      <Grid item xs={12}>
          <Tabs value={value} onChange={handleTabChange} variant="fullWidth" centered>
            <Tab label="Lab Orders" {...a11yProps(0)} />
            <Tab label="Kit Orders" {...a11yProps(1)} />
          </Tabs>
        <TabPanel value={value} index={0}>
          <LabOrderList />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <KitOrderList />
        </TabPanel>
        {/*
        <RouterLink to="./labs">Lab Order List</RouterLink>
        <RouterLink to="./kits">Kit Order List</RouterLink>
      */}
        <OrdersSpeedDial />
      </Grid>
    </Grid>
  );
};
