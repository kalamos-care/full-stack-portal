import React, { FC, useState } from 'react';
import {
    BrowserRouter as Router
  } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';

import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import MaterialLink from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
    '@global': {
        ul: {
            margin: 0,
            padding: 0,
            listStyle: 'none',
        },
    },
    footer: {
        borderTop: `1px solid ${theme.palette.divider}`,
        marginTop: theme.spacing(8),
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
        [theme.breakpoints.up('sm')]: {
            paddingTop: theme.spacing(6),
            paddingBottom: theme.spacing(6),
        },
    },
    copyright: {
        alignItems: 'center',
        width: '100%',
    },
}));


function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <MaterialLink color="inherit" href="https://kalamos.care/">
                Kalamos Care
            </MaterialLink>
            {' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
};


const footers = [
    {
        title: 'Company',
        subheaders: [
            {
                description: 'About Us',
                url: '/company/about-us'
            },
            {
                description: 'Blog',
                url: '/company/blog'
            },
        ],
    },
    {
        title: 'Product',
        subheaders: [
            {
                description: 'Features',
                url: '/product/features'
            },
            {
                description: 'Pricing',
                url: '/product/pricing'
            },
        ],
    },
    {
        title: 'Resources',
        subheaders: [
            {
                description: 'FAQ',
                url: '#'
            },
            {
                description: 'API Docs',
                url: '/api/v1'
            },
        ],
    },
    {
        title: 'Legal',
        subheaders: [
            {
                description: 'Privacy policy',
                url: '/legal/privacy-policy'
            },
            {
                description: 'Terms of Use',
                url: '/legal/terms-of-use'
            },
        ],
    },
];


const Footer: FC = () => {
    const classes = useStyles();

    return (
        <Container maxWidth="md" component="footer" className={classes.footer}>
            <Grid container spacing={4} justify="space-evenly">
                <Router>
                {footers.map((footer) => (
                    <Grid item xs={6} sm={3} key={footer.title}>
                        <Typography variant="h6" color="textPrimary" gutterBottom>
                            {footer.title}
                        </Typography>
                        <ul>
                            {footer.subheaders.map((subheader) => (
                                <li key={subheader.description}>
                                    <MaterialLink href={subheader.url} variant="subtitle1" color="textSecondary">
                                        {subheader.description}
                                    </MaterialLink>
                                </li>
                            ))}
                        </ul>
                    </Grid>
                ))}
                </Router>
            </Grid>
            <Box mt={5}>
                <Copyright />
            </Box>
        </Container>
    );
};

export default Footer;