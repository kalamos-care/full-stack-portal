import React, { FC, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
// import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import DrsImg from '../assets/images/undraw_doctors.svg';
import DeliveryImg from '../assets/images/undraw_delivery.svg';
import BillingImg from '../assets/images/undraw_billing.svg';
import MessagingImg from '../assets/images/undraw_messaging.svg';
import AiImg from '../assets/images/undraw_ai.svg';
import OpenSourceImg from '../assets/images/undraw_open_source.svg';

import { ContactUs } from './ContactUs';


const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    padding: theme.spacing(4),
  },
  heroButtons: {
    margin: theme.spacing(2),
  },
  divider: {
    margin: theme.spacing(4),
  },
  promoFeatures: {

  },
  promoFeature: {
    padding: theme.spacing(4),
  },
  promoImage: {
    maxHeight: "180px",
  },
  contactForm: {
    padding: theme.spacing(4),
  },
}));


const LandingPage: FC = () => {
  const classes = useStyles();

  return (
    <Container>
      {/* Hero unit */}
      <Grid container spacing={2} justify="center" className={classes.heroContent}>
        <Grid item xs={12}>
          <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            Remote PrEP Patient Monitoring
            </Typography>
        </Grid>
        <Grid item md={6} xs={12}>
          <Typography variant="h5" align="center" color="textSecondary" paragraph>
            Let us automate the logistics of PrEP prescribing: from testing to medication delivery to adherence monitoring.
              </Typography>
          <Typography variant="h5" align="center" color="textSecondary" paragraph>
            You focus on building strong personal relationships with your patients.
            </Typography>
        </Grid>
        <Grid item md={4} xs={12}>
          <img src={DrsImg} alt="doctors" width="100%" />
        </Grid>
      </Grid>
      <Grid container spacing={2} justify="center" className={classes.heroButtons}>
        <Grid item>
          <Button variant="contained" color="primary" component={RouterLink} to="/signup">
            Create Your Account
                </Button>
        </Grid>
        <Grid item>
          <Button variant="outlined" color="primary" component={RouterLink} to="/company/about-us">
            Read More About Us
                </Button>
        </Grid>
      </Grid>
      <Divider className={classes.divider} />
      {/* Feature List */}
      <Grid container className={classes.promoFeatures}>
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
      </Grid>
      <Divider className={classes.divider} />
      {/* Contact Us */}
      <Grid container className={classes.contactForm}>
        <ContactUs />
      </Grid>
    </Container>
  );
};

export default LandingPage;