import React, { FC, useState } from 'react';
import { Switch, Route, Link, BrowserRouter as Router } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import { TermsOfUse } from './TermsOfUse';
import { PrivacyPolicy } from './PrivacyPolicy';

const useStyles = makeStyles((theme) => ({

}));

export const Legal: FC = () => {
    const classes = useStyles();

    return (
        <Grid>
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>Legal Documents</Typography>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography component="h4" variant="h5">Terms of Use</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <TermsOfUse />
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography component="h4" variant="h5">Privacy Policy</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <PrivacyPolicy />
                </AccordionDetails>
            </Accordion>
            <Switch>
                <Route path='/legal/terms-of-use'>
                    <TermsOfUse />
                </Route>
                <Route path='/legal/privacy-policy'>
                    <PrivacyPolicy />
                </Route>
            </Switch>
        </Grid>
    );
};