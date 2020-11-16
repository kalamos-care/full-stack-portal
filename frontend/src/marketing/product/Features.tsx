import React, { FC, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';

import { Typography, Grid, Container } from '@material-ui/core/';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import DeliveryImg from '../../assets/images/undraw_delivery.svg';
import BillingImg from '../../assets/images/undraw_billing.svg';
import MessagingImg from '../../assets/images/undraw_messaging.svg';
import AiImg from '../../assets/images/undraw_ai.svg';
import OpenSourceImg from '../../assets/images/undraw_open_source.svg';

import { getMessage } from '../../utils/api';


const useStyles = makeStyles((theme) => ({
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
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
            <Grid>
                <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>Features</Typography>
            </Grid>
            <Container className={classes.cardGrid} maxWidth="md">
                {/* End hero unit */}
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
            <Container maxWidth="md" className={classes.promoFeatures}>
                <Grid container spacing={2} className={classes.promoFeature}>
                    <Grid item xs={12}>
                        <Typography variant="h3" align="center" color="textPrimary" gutterBottom>
                            Home Testing
            </Typography>
                    </Grid>
                    <Grid item md={8} xs={12}>
                        <Typography variant="h6" color="textSecondary" paragraph>
                            Don’t let the constraints of brick and mortar phlebotomy prevent your patients from being up-to-date with their lab work.
            </Typography>
                        <Typography variant="h6" color="textSecondary" paragraph>
                            You can place an order for a self-collection kit for your patient while submitting a lab requisition.
            </Typography>
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <img src={DeliveryImg} alt="delivery" width="100%" />
                    </Grid>
                </Grid>
                <Grid container spacing={2} className={classes.promoFeature}>
                    <Grid item xs={12}>
                        <Typography variant="h3" align="center" color="textPrimary" gutterBottom>
                            Billing
            </Typography>
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <img src={BillingImg} alt="billing" width="100%" className={classes.promoImage} />
                    </Grid>
                    <Grid item md={8} xs={12}>
                        <Typography variant="h6" align="right" color="textSecondary" paragraph>
                            Changes to CMS reimbursement guidelines now allow providers to bill for remote patient monitoring.
            </Typography>
                        <Typography variant="h6" align="right" color="textSecondary" paragraph>
                            Easily maintain records so that both you and your patients can submit for reimbursement.
            </Typography>
                    </Grid>
                </Grid>
                <Grid container spacing={2} className={classes.promoFeature}>
                    <Grid item xs={12}>
                        <Typography variant="h3" align="center" color="textPrimary" gutterBottom>
                            Messaging
            </Typography>
                    </Grid>
                    <Grid item md={8} xs={12}>
                        <Typography variant="h6" align="right" color="textSecondary" paragraph>
                            Successful remote monitoring requires seamless communication between patients and providers.            </Typography>
                        <Typography variant="h6" align="right" color="textSecondary" paragraph>
                            With Kalamos, you can easily message your patients directly within the app.
            </Typography>
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <img src={MessagingImg} alt="messaging" width="100%" />
                    </Grid>
                </Grid>
                <Grid container spacing={2} className={classes.promoFeature}>
                    <Grid item xs={12}>
                        <Typography variant="h3" align="center" color="textPrimary" gutterBottom>
                            Interventions
            </Typography>
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <img src={AiImg} alt="interventions" width="100%" />
                    </Grid>
                    <Grid item md={8} xs={12}>
                        <Typography variant="h6" align="right" color="textSecondary" paragraph>
                            Most PrEP patients discontinue usage within a year of starting; and almost all patients struggle with adherence.
            </Typography>
                        <Typography variant="h6" align="right" color="textSecondary" paragraph>
                            We’ve integrated CDC-recommended interventions for adherence and persistence.
            </Typography>
                    </Grid>
                </Grid>
                <Grid container spacing={2} className={classes.promoFeature}>
                    <Grid item xs={12}>
                        <Typography variant="h3" align="center" color="textPrimary" gutterBottom>
                            Open Source
            </Typography>
                    </Grid>
                    <Grid item md={8} xs={12}>
                        <Typography variant="h6" align="left" color="textSecondary" paragraph>
                            It takes (at least) two to tango, so collaboration is at our core. To beat HIV and other STIs, we must work as a community.
            </Typography>
                        <Typography variant="h6" align="left" color="textSecondary" paragraph>
                            Our core capabilities will remain free and open to anyone that shares our mission.
            </Typography>
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <img src={OpenSourceImg} alt="open source" width="100%" />
                    </Grid>
                </Grid>
            </Container>
        </Container>
    );
};