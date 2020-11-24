import React, { FC, useState } from 'react';
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';

import { Typography, Grid, Container, Button, Card, CardActions, CardContent, CardHeader } from '@material-ui/core/';

import StarIcon from '@material-ui/icons/StarBorder';

import PageTitle from '../layout/PageTitle';

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  tiers: {
    paddingTop: theme.spacing(4),
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === 'light'
        ? theme.palette.grey[200]
        : theme.palette.grey[700],
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  },
}));

const tiers = [
  {
    title: 'Open Source',
    price: '0',
    description: [
      'Self-hosted',
      'Fully customizeable',
    ],
    buttonText: 'Read the Docs',
    buttonVariant: 'outlined',
    url: '/resources/api'
  },
  {
    title: 'Basic',
    subheader: 'Most popular',
    price: '10',
    description: [
      'Order and track kits',
      'Receive proactive alerts',
      'Email support',
    ],
    buttonText: 'Get started',
    buttonVariant: 'contained',
    url: '/signup',
  },
  {
    title: 'Pro',
    price: '50',
    description: [
      'All basic features',
      'Message patients',
      'Generate claims',
    ],
    buttonText: 'Contact us',
    buttonVariant: 'outlined',
    url: '/contact-us',
  },
];

export const Pricing: FC = () => {
  const classes = useStyles();

  return (
      <Container maxWidth="lg" component="main">
      <PageTitle title="Simple pricing for any practice" subtitle="Select the plan that's right for your remote monitoring practice" />
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="subtitle1" gutterBottom>
            No long-term contracts, just pay as you go. Try risk-free for 30 days. 
          </Typography>
        </Grid>
      </Grid>
        <Grid container spacing={5} alignItems="flex-end" className={classes.tiers}>
          {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid
              item
              key={tier.title}
              xs={12}
              sm={tier.title === 'Enterprise' ? 12 : 6}
              md={4}
            >
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{ align: 'center' }}
                  action={tier.title === 'Basic' ? <StarIcon /> : null}
                  className={classes.cardHeader}
                />
                <CardContent>
                  <div className={classes.cardPricing}>
                    <Typography component="h2" variant="h3" color="textPrimary">
                      ${tier.price}
                    </Typography>
                    <Typography variant="h6" color="textSecondary">
                      /mo
                    </Typography>
                  </div>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                        key={line}
                      >
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  {/* Button variant was throwing an error for being undefined type */}
                  {/* variant={tier.buttonVariant} */}
                  <Button fullWidth color="primary" variant="outlined" component={RouterLink} to={tier.url}>
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
  );
};
