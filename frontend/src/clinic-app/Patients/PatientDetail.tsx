import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

}));

export const PatientDetail: FC = () => {
    const classes = useStyles();
    
    return (
        <div>
            <h1>List patient details here!</h1>
        </div>
    );
};