import React, { FC, useState } from 'react';
//import { Link as RouterLink } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';

import { Typography, Grid, Container, Button, Card, CardContent, CardMedia } from '@material-ui/core/';

import NotificationImg from '../../assets/images/undraw_new_notification.svg';
import AdherenceImg from '../../assets/images/undraw_med_adherence.svg';
import InterventionImg from '../../assets/images/undraw_intervention_suggest.svg';

import MobileFirstImg from '../../assets/images/undraw_mobile_first.svg';
import DeliveredImg from '../../assets/images/undraw_order_delivered.svg';
import ScheduleImg from '../../assets/images/undraw_scheduling.svg';

import SecureImg from '../../assets/images/undraw_secure.svg';
import ChatBotImg from '../../assets/images/undraw_chat_bot.svg';
import PeerNavImg from '../../assets/images/undraw_peers.svg';

import OnlineAdImg from '../../assets/images/undraw_online_adv.svg';
import ClaimsImg from '../../assets/images/undraw_billing.svg';
import IntegrationImg from '../../assets/images/undraw_data_processing.svg';

import PageTitle from '../layout/PageTitle';

// import { getMessage } from '../../utils/api';


const useStyles = makeStyles((theme) => ({
    featureSection: {
        padding: theme.spacing(4, 0, 4),
    },
    featureCard: {
        padding: theme.spacing(1),
        margin: theme.spacing(1),
        height: "350px",
    },
    featureImg: {
        height: "175px",
    },
}));

const featureList = [
    {
        sectionTitle: "Intelligent Notifications",
        sectionSubtitle: "Running a practice is time consuming. Our notifications make it easy to stay up-to-date on what matters most.",
        features: [
            {
                featureImg: NotificationImg,
                featureImgAlt: "Diagnostic Alerts",
                featureTitle: "Diagnostic Alerts",
                featureCaption: "Set reminders for follow up testing and receive proactive updates about home-delivered test kits.",
            },
            {
                featureImg: AdherenceImg,
                featureImgAlt: "Adherence Updates",
                featureTitle: "Adherence Updates",
                featureCaption: "Adherence and persistence monitoring let you know if patients are at risk of disusage.",
            },
            {
                featureImg: InterventionImg,
                featureImgAlt: "Intervention Suggestions",
                featureTitle: "Intervention Suggestions",
                featureCaption: "Based on patient data, we can suggest evidence-based behavioral health interventions.",
            },
        ],
    },
    {
        sectionTitle: "Remote Monitoring Toolkit",
        sectionSubtitle: "Not every patient needs an office visit. That doesn't mean they don't need care.",
        features: [
            {
                featureImg: MobileFirstImg,
                featureImgAlt: "Mobile-first Design",
                featureTitle: "Mobile-first Design",
                featureCaption: "Our website is designed and built to be used like any other app on your phone, except it’s accessible anywhere.",
            },
            {
                featureImg: DeliveredImg,
                featureImgAlt: "At-Home Testing",
                featureTitle: "At-Home Testing",
                featureCaption: "We’ve partnered with Molecular Testing Labs to provide world class diagnostics on patient collected samples.",
            },
            {
                featureImg: ScheduleImg,
                featureImgAlt: "Advanced Scheduling",
                featureTitle: "Advanced Scheduling",
                featureCaption: "Coordinating checkups is time consuming. We sync schedules between you and your patients.",
            },
        ],
    },
    {
        sectionTitle: "Care Team Coordination",
        sectionSubtitle: "It takes a village, but it doesn’t have to be difficult to work together.",
        features: [
            {
                featureImg: SecureImg,
                featureImgAlt: "Secure Conversations",
                featureTitle: "Secure Conversations",
                featureCaption: "",
            },
            {
                featureImg: ChatBotImg,
                featureImgAlt: "Text-based Interventions",
                featureTitle: "Text-based Interventions",
                featureCaption: "",
            },
            {
                featureImg: PeerNavImg,
                featureImgAlt: "Peer Navigation",
                featureTitle: "Peer Navigation",
                featureCaption: "",
            },
        ],
    },
    {
        sectionTitle: "Digital Practice Management",
        sectionSubtitle: "A new paradigm calls for new management tools. Kalamos makes it simple to start and operate a digital-first clinic.",
        features: [
            {
                featureImg: OnlineAdImg,
                featureImgAlt: "Patient Recruitment",
                featureTitle: "Patient Recruitment",
                featureCaption: "",
            },
            {
                featureImg: ClaimsImg,
                featureImgAlt: "Claims Management",
                featureTitle: "Claims Management",
                featureCaption: "",
            },
            {
                featureImg: IntegrationImg,
                featureImgAlt: "FHIR Integrations",
                featureTitle: "FHIR Integrations",
                featureCaption: "",
            },
        ],
    },
];

export const Features: FC = () => {
    const [message, setMessage] = useState<string>('');
    const [error, setError] = useState<string>('');
    const classes = useStyles();

    {/*
    const queryBackend = async () => {
        try {
            const message = await getMessage();
            setMessage(message);
        } catch (err) {
            setError(err);
        }
    };
    */}

    return (
        <Container maxWidth="md">
            <PageTitle title="Kalamos Feature Set" subtitle="Kalamos was built from the ground up to make remote patient monitoring easy" />
            {/* Insert button to pricing */}
            {featureList.map((featureSection) => (
                <Grid container className={classes.featureSection} key={featureSection.sectionTitle}>
                    <Grid item xs={12}>
                        <Typography variant="h5" gutterBottom>
                            {featureSection.sectionTitle}
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom>
                            {featureSection.sectionSubtitle}
                        </Typography>
                    </Grid>
                    {featureSection.features.map((feature) => (
                        <Grid item xs={12} md={4}>
                            <Card className={classes.featureCard}>
                                <CardMedia
                                    className={classes.featureImg}
                                    component="img"
                                    image={feature.featureImg}
                                    title={feature.featureImgAlt}
                                />
                                <CardContent>
                                    <Typography variant="h6" gutterBottom>
                                        {feature.featureTitle}
                                    </Typography>
                                    <Typography variant="body1">
                                        {feature.featureCaption}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            ))}
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