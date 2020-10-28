import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';

// import Header from '../layout/Header';
// import Footer from '../layout/Footer';
// import Body from '../layout/Body';


const useStyles = makeStyles((theme) => ({

}));

export const ProviderDash: FC = ( { children } ) => {
    const classes = useStyles();
    
    return (
        <div>
            <h1>Put app from provider portal here!</h1>
            { children }
        </div>
    );
};

// export default Protected