import React, { FC } from 'react';
import { useParams } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const useStyles = makeStyles((theme) => ({}));

const patientDetails = {
  demographics: {
    firstName: 'Bradley',
    lastName: 'Thorson',
    preferredName: 'Brad',
    dateOfBirth: '10/30/1987',
    sexAtBirth: 'male',
    ethnicity: 'White, non-Hispanic',
    maritalStatus: 'partnered',
  },
  contact: {
    email: 'brad@kalamos.care',
    phone: '555-555-5555',
    facebook: 'N/A',
    twitter: 'N/A',
    instagram: 'N/A',
    snapchat: 'N/A',
    languages: 'English',
    preferredLanguage: 'English',
  },
  lab_orders: [
    {
      order_id: '123',
      kit_id: '789',
      ship_date: '11/1/20',
      received_date: '11/15/20',
      assay_ids: [
        {
          assay_id: '11',
          result: 'Non-reactive'
        },
        {
          assay_id: '46',
          result: 'Non-reactive'
        },
      ]
    },
    {
      order_id: '321',
      kit_id: '987',
      ship_date: '8/1/20',
      received_date: '8/15/20',
      assay_ids: [
        {
          assay_id: '11',
          result: 'Non-reactive'
        },
        {
          assay_id: '46',
          result: 'Non-reactive'
        },
      ]
    },
  ],
};

export const PatientDetail: FC = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
      <Typography component="h4" variant="h5" gutterBottom>
        List patient <code>:id</code> details here!
      </Typography>
      </Grid>
      <Grid item xs={12}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="patient-deails-content"
          id="patient-details-header"
        >
          <Typography variant="h6">
            Patient Details
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid>
          <p>Name</p>
          <p>{patientDetails.demographics.firstName} {patientDetails.demographics.lastName}</p>
          <p>Preferred Name</p>
          <p>{patientDetails.demographics.preferredName}</p>
          <p>Date of Birth</p>
          <p>{patientDetails.demographics.dateOfBirth}</p>
          <p>Sex at Birth</p>
          <p>{patientDetails.demographics.sexAtBirth}</p>
          <p>Ethnicity</p>
          <p>{patientDetails.demographics.ethnicity}</p>
          <p>Marital Status</p>
          <p>{patientDetails.demographics.maritalStatus}</p>
          </Grid>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="patient-contact-content"
          id="patient-contact-header"
        >
          <Typography variant="h6">
            Contact Information
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <p>{patientDetails.contact.email}</p>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="lab-orders-content"
          id="lab-orders-header"
        >
          <Typography variant="h6">
            Lab Orders
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <p>Lab Orders</p>
        </AccordionDetails>
      </Accordion>
      </Grid>
    </Grid>
  );
};
