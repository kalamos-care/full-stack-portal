import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

}));

export const NotificationsList: FC = () => {
    const classes = useStyles();
    
    return (
        <div>
            <h1>List notifications here!</h1>
        </div>
    );
};