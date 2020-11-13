import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

}));

export const NewOrder: FC = () => {
    const classes = useStyles();
    
    return (
        <div>
            <p>Create an order!</p>
        </div>
    );
};