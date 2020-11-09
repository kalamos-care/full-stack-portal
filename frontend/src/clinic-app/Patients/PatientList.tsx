import React, { FC } from 'react';
import { Switch, Route } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';

import SpeedDial, { SpeedDialProps } from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';

import NewOrderIcon from '@material-ui/icons/LocalHospital';
import NewPatientIcon from '@material-ui/icons/PersonAdd';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
import { FixedSizeList, ListChildComponentProps } from 'react-window';


const useStyles = makeStyles((theme) => ({
    speedDial: {
        position: 'absolute',
        '&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft': {
            bottom: theme.spacing(8),
            right: theme.spacing(2),
        },
    },
}));


const actions = [
    { icon: <NewPatientIcon />, name: 'New Patient' },
    { icon: <NewOrderIcon />, name: 'New Order' },
];


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
    {/* Move all speeddial stuff to the main view and hide it when not on main list */ }
    const [direction, setDirection] = React.useState<SpeedDialProps['direction']>('up');
    const [open, setOpen] = React.useState(false);
    const [hidden, setHidden] = React.useState(false);


    const handleDirectionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDirection((event.target as HTMLInputElement).value as SpeedDialProps['direction']);
    };

    const handleHiddenChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setHidden(event.target.checked);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    return (
        <>
            <h1>List patients here!</h1>
            <Paper>
                <FixedSizeList height={590} width={340} itemSize={46} itemCount={200}>
                    {renderPatientRow}
                </FixedSizeList>
            </Paper>
            <SpeedDial
                ariaLabel="PatientList Speeddial"
                className={classes.speedDial}
                icon={<SpeedDialIcon />}
                onClose={handleClose}
                onOpen={handleOpen}
                open={open}
                direction={direction}
            >
                {actions.map((action) => (
                    <SpeedDialAction
                        key={action.name}
                        icon={action.icon}
                        tooltipTitle={action.name}
                        onClick={handleClose}
                    />
                ))}
            </SpeedDial>
        </>
    );
};