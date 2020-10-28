import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

}));

export const Patients: FC = () => {
    const classes = useStyles();
    
    return (
        <div>
            <h1>List patients here!</h1>
        </div>
    );
};