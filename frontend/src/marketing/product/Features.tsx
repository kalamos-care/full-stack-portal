import React, { FC, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';

import { Typography, Grid, Container, Button, Card, CardActionArea, CardActions, CardHeader, CardContent, CardMedia } from '@material-ui/core/';

import NotificationImg from '../../assets/images/undraw_new_notification.svg';
import AdherenceImg from '../../assets/images/undraw_med_adherence.svg';
import InterventionImg from '../../assets/images/undraw_intervention_suggest.svg';
import MobileFirstImg from '../../assets/images/undraw_mobile_first.svg';
import DeliveredImg from '../../assets/images/undraw_order_delivered.svg';
import ScheduleImg from '../../assets/images/undraw_scheduling.svg';

import PageTitle from '../layout/PageTitle';

import { getMessage } from '../../utils/api';


const useStyles = makeStyles((theme) => ({
    featureSet: {
        padding: theme.spacing(4, 0, 4),
    },
    featureCard: {
        padding: theme.spacing(2, 2, 2),
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
            <PageTitle title="Kalamos Feature Set" subtitle="Kalamos was built from the ground up to make remote patient monitoring easy" />
            <Grid container className={classes.featureSet}>
                <Grid item xs={12}>
                    <Typography variant="h5" gutterBottom>
                        Intelligent Notifications
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                        Running a practice is time consuming. Our notifications make it easy to stay up-to-date on what matters most.
                    </Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Typography variant="h6" gutterBottom>
                        Diagnostic Alerts
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Set reminders for follow up testing and receive proactive updates about home-delivered test kits.
                    </Typography>
                    <img src={NotificationImg} alt="messaging" width="100%" />
                </Grid>
                <Grid item xs={12} md={4}>
                    <Typography variant="h6" gutterBottom>
                        Adherence Updates
                    </Typography>
                    <img src={AdherenceImg} alt="messaging" width="100%" />
                    <Typography variant="body1" gutterBottom>
                        Adherence and persistence monitoring let you know if patients are at risk of disusage.
                    </Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                    <img src={InterventionImg} alt="messaging" width="100%" />
                    <Typography variant="h6" gutterBottom>
                        Intervention Suggestions
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Based on demographics and behavior, we can suggest evidence-based behavioral health interventions.
                    </Typography>
                </Grid>
            </Grid>
            <Grid container className={classes.featureSet}>
                <Grid item xs={12}>
                    <Typography variant="h5" gutterBottom>
                        Remote Monitoring Toolkit
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                        Not every patient needs an office visit. That doesn't mean they don't need care.
                    </Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card className={classes.featureCard}>
                        <CardMedia
                            component="img"
                            image={MobileFirstImg}
                            title="Mobile First"
                        />
                        <CardContent>
                            <Typography variant="h6" gutterBottom>
                                Mobile First
                                </Typography>
                            <Typography variant="body1">
                                Our website is designed and built to be used like any other app on your phone, except it’s accessible anywhere.
                                </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card className={classes.featureCard}>
                        <CardMedia
                            component="img"
                            image={DeliveredImg}
                            title="At-Home Testing"
                        />
                        <CardContent>
                            <Typography variant="h6" gutterBottom>
                                At-Home Testing
                                </Typography>
                            <Typography variant="body1">
                                Our website is designed and built to be used like any other app on your phone, except it’s accessible anywhere.
                                </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card className={classes.featureCard}>
                        <CardMedia
                            component="img"
                            image={ScheduleImg}
                            title="Advanced Scheduling"
                        />
                        <CardContent>
                            <Typography variant="h6" gutterBottom>
                                Advanced Scheduling
                                </Typography>
                            <Typography variant="body1">
                                Coordinating checkups is time consuming. We sync schedules between you and your patients.                                </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            <Grid container className={classes.featureSet}>
                <Grid item xs={12}>
                    <Typography variant="h5" gutterBottom>
                        Care Team Coordination
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                        It takes a village, but it doesn’t have to be difficult to work together.
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
                        Peer Navigation
                    </Typography>
                </Grid>
            </Grid>
            <Grid container className={classes.featureSet}>
                <Grid item xs={12}>
                    <Typography variant="h5" gutterBottom>
                        Digital Practice Management
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                        A new paradigm calls for new management tools. Kalamos makes it simple to start and operate a digital-first clinic.
                    </Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Typography variant="h6" gutterBottom>
                        Recruit Patients
                    </Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Typography variant="h6" gutterBottom>
                        Claims Management
                    </Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Typography variant="h6" gutterBottom>
                        FHIR Integrations
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
        </Container >
    );
};