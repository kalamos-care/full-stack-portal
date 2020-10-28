import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

}));

export const Messages: FC = () => {
    const classes = useStyles();
    
    return (
        <div>
            <h1>List messages here!</h1>
        </div>
    );
};