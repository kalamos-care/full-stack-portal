import React, { FC, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';

import { Typography, Grid, Container, Button, Card, CardActions, CardHeader, CardContent, CardMedia } from '@material-ui/core/';

import DeliveryImg from '../../assets/images/undraw_delivery.svg';
import BillingImg from '../../assets/images/undraw_billing.svg';
import MessagingImg from '../../assets/images/undraw_messaging.svg';
import AiImg from '../../assets/images/undraw_ai.svg';
import OpenSourceImg from '../../assets/images/undraw_open_source.svg';

import PageTitle from '../layout/PageTitle';

import { getMessage } from '../../utils/api';


const useStyles = makeStyles((theme) => ({
    featureSet: {
        padding: theme.spacing(4,0,4),
    },
    promoFeatures: {

    },
    promoFeature: {
        padding: theme.spacing(4),
    },
    promoImage: {
        maxHeight: "180px",
    },
}));

export const Features: FC = () => {
    const [message, setMessage] = useState<string>('');
    const [error, setError] = useState<string>('');
    const classes = useStyles();

    const queryBackend = async () => {
        try {
            const message = await getMessage();
            setMessage(message);
        } catch (err) {
            setError(err);
        }
    };

    return (
        <Container maxWidth="md">
            <PageTitle title="Your remote monitoring toolkit" subtitle="Not every patient needs an office visit. That doesn't mean they don't need care." />
            <Grid container className={classes.featureSet}>
                <Grid item xs={12}>
                    <Typography variant="h5" gutterBottom>
                        Intelligent Notifications
                    </Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Typography variant="h6" gutterBottom>
                        Diagnostic Alerts
                    </Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Typography variant="h6" gutterBottom>
                        Adherence Updates
                    </Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Typography variant="h6" gutterBottom>
                        Enrollment Opportunities
                    </Typography>
                </Grid>
            </Grid>
            <Grid container className={classes.featureSet}>
                <Grid item xs={12}>
                    <Typography variant="h5" gutterBottom>
                        Remote Monitoring Tools
                    </Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Typography variant="h6" gutterBottom>
                        Mobile First
                    </Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Typography variant="h6" gutterBottom>
                        At-Home Testing
                    </Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Typography variant="h6" gutterBottom>
                        Advanced Scheduling
                    </Typography>
                </Grid>
            </Grid>
            <Grid container className={classes.featureSet}>
                <Grid item xs={12}>
                    <Typography variant="h5" gutterBottom>
                        Integrated Messaging
                    </Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Typography variant="h6" gutterBottom>
                        Secure Conversations
                    </Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Typography variant="h6" gutterBottom>
                        Text-based Interventions
                    </Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Typography variant="h6" gutterBottom>
                        Care Team Coordination
                    </Typography>
                </Grid>
            </Grid>
            <Grid container className={classes.featureSet}>
                <Grid item xs={12}>
                    <Typography variant="h5" gutterBottom>
                        Digital Practice Management
                    </Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Typography variant="h6" gutterBottom>
                        Recruit Patients
                    </Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Typography variant="h6" gutterBottom>
                        EMR Integration
                    </Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Typography variant="h6" gutterBottom>
                        Claims Management
                    </Typography>
                </Grid>
            </Grid>
            {/*
            <Container className={classes.cardGrid} maxWidth="md">
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card className={classes.card}>
                            <CardMedia
                                className={classes.cardMedia}
                                image="https://source.unsplash.com/random"
                                title="Image title"
                            />
                            <CardContent className={classes.cardContent}>
                                <Typography gutterBottom variant="h5" component="h2">Ping Backend</Typography>
                                <Typography variant="body2" color="textSecondary" component="p">Click me!</Typography>
                            </CardContent>
                            <CardActions>
                                {!message && !error && (
                                    <Button size="small" color="primary">

                                        <a href="#" onClick={() => queryBackend()}>
                                            Call the backend
                    </a>
                                    </Button>
                                )}
                                {message && (
                                    <p>
                                        <code>{message}</code>
                                    </p>
                                )}
                                {error && (
                                    <p>
                                        Error: <code>{error}</code>
                                    </p>
                                )}
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card className={classes.card}>
                            <CardMedia
                                className={classes.cardMedia}
                                image="https://source.unsplash.com/random"
                                title="Image title"
                            />
                            <CardContent className={classes.cardContent}>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Admin Dashboard
    </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Monitor app users/usage</Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" color="primary" component={RouterLink} to="/admin">
                                    Admin Dashboard
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card className={classes.card}>
                            <CardMedia
                                className={classes.cardMedia}
                                image="https://source.unsplash.com/random"
                                title="Image title"
                            />
                            <CardContent className={classes.cardContent}>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Provider Dashboard
    </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Monitor your Patients!!!</Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" color="primary" component={RouterLink} to="/clinic">
                                    Protected Route
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
                                */}
        </Container>
    );
};