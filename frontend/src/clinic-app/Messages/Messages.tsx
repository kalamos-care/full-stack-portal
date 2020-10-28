import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

}));

export const Messages: FC = () => {
    const classes = useStyles();
    
    return (
        <div>
            <h1>Sign up for the enterprise version to be able to message your patients.</h1>
        </div>
    );
};