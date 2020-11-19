import React, { FC, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Divider from '@material-ui/core/Divider';

import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  footerArea: {
    marginTop: theme.spacing(4),
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
  copyright: {
    alignItems: 'center',
    width: '100%',
    paddingTop: theme.spacing(2),
  },
  divider: {
    margin: theme.spacing(4),
  },
}));

const social = [
  { name: 'GitHub', icon: <GitHubIcon /> },
  { name: 'Twitter', icon: <TwitterIcon /> },
];

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" component={RouterLink} to="/">
        Kalamos Care
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const footers = [
  {
    title: 'Company',
    subheaders: [
      {
        description: 'About Us',
        url: '/company/about-us',
      },
      {
        description: 'Blog',
        url: '/company/blog',
      },
    ],
  },
  {
    title: 'Product',
    subheaders: [
      {
        description: 'Features',
        url: '/product/features',
      },
      {
        description: 'Pricing',
        url: '/product/pricing',
      },
    ],
  },
  {
    title: 'Resources',
    subheaders: [
      {
        description: 'FAQ',
        url: '/resources/faq',
      },
      {
        description: 'API Docs',
        url: '/resources/api',
      },
    ],
  },
  {
    title: 'Legal',
    subheaders: [
      {
        description: 'Privacy policy',
        url: '/legal/privacy-policy',
      },
      {
        description: 'Terms of Use',
        url: '/legal/terms-of-use',
      },
    ],
  },
];

const Footer: FC = () => {
  const classes = useStyles();

  return (
    <Container>
      <Divider className={classes.divider} />
      <Grid container spacing={4} justify="space-evenly">
        {footers.map((footer) => (
          <Grid item xs={6} sm={3} key={footer.title}>
            <Typography variant="h6" color="textPrimary" gutterBottom>
              {footer.title}
            </Typography>
            <ul>
              {footer.subheaders.map((subheader) => (
                <li key={subheader.description}>
                  <Link
                    to={subheader.url}
                    component={RouterLink}
                    variant="subtitle1"
                    color="textSecondary"
                  >
                    {subheader.description}
                  </Link>
                </li>
              ))}
            </ul>
          </Grid>
        ))}
      </Grid>
      <Grid container spacing={4} className={classes.copyright}>
        <Grid xs={12}>
          {/* This is broken
                <ul>
                    {social.icon.map((item) => (
                        {item.icon}
                    )
                    )}
                </ul>
                */}
          <Copyright />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Footer;
