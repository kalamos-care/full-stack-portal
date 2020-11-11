import React, { FC, useState } from 'react';
import { Switch, Route, Link, BrowserRouter as Router } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';

import { TermsOfUse } from './TermsOfUse';
import { PrivacyPolicy } from './PrivacyPolicy';

const useStyles = makeStyles((theme) => ({

}));

export const Legal: FC = () => {
    const classes = useStyles();

    return (
        <Switch>
            <Route path='/legal/terms-of-use'>
                <TermsOfUse />
            </Route>
            <Route path='/legal/privacy-policy'>
                <PrivacyPolicy />
            </Route>
        </Switch>
    );
};