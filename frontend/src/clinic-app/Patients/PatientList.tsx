import React, { FC } from 'react';
import { Switch, Route } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
import { FixedSizeList, ListChildComponentProps } from 'react-window';


const useStyles = makeStyles((theme) => ({

}));


function renderPatientRow(props: ListChildComponentProps) {
    const { index, style } = props;

    return (

        <ListItem button style={style} key={index}>
            <ListItemText primary={`Patient ${index + 1}`} />
        </ListItem>
    );
}


export const PatientList: FC = () => {
    const classes = useStyles();

    return (
        <>
            <h1>List patients here!</h1>
            <Paper>
                <FixedSizeList height={590} width={340} itemSize={46} itemCount={200}>
                    {renderPatientRow}
                </FixedSizeList>
            </Paper>
        </>
    );
};