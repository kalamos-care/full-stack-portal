import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

}));

export const Notifications: FC = () => {
    const classes = useStyles();
    
    return (
        <div>
            <p>Beep Boop</p>
        </div>
    );
};