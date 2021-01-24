import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const assays = [
    {
        assay_type: 'Infectious Disease',
        devices: [
            {
                device_name: 'Dried Blood Spot Card',
                assays: [
                    {
                        assay_name: "HIV p24 Ag/Ab"
                    },
                    {
                        assay_name: "HBV sAg"
                    },
                    {
                        assay_name: "HCV Ab"
                    },
                    {
                        assay_name: "Syphilis Ab"
                    },
                ]
            },
            {
                device_name: 'Pharyngeal Swab',
                assays: [
                    {
                        assay_name: "Chlamydia"
                    },
                    {
                        assay_name: "Gonorrhea"
                    },
                ]
            },
            {
                device_name: 'UrineCup/Vaginal Swab',
                assays: [
                    {
                        assay_name: "Chlamydia"
                    },
                    {
                        assay_name: "Gonorrhea"
                    },
                ]
            },
            {
                device_name: 'Rectal Swab',
                assays: [
                    {
                        assay_name: "Chlamydia"
                    },
                    {
                        assay_name: "Gonorrhea"
                    },
                ]
            },
        ],
    },
    {
        assay_type: 'Toxicology',
        devices: [
            {
                device_name: 'Dried Blood Spot Card',
                assays: [
                    {
                        assay_name: "Creatinine"
                    },
                    {
                        assay_name: "HbA1c"
                    },
                    {
                        assay_name: "Lipid Panel"
                    },
                    {
                        assay_name: "Total Testosterone"
                    },
                    {
                        assay_name: "Tenofovir Diphosphate"
                    },
                ]
            },
            {
                device_name: 'Neat Urine',
                assays: [
                    {
                        assay_name: "hCG"
                    },
                ]
            },
        ]
    }

]

export default function AssayForm() {
    return (
        <>
            <Typography variant="h6" gutterBottom>
                Assays
      </Typography>
            <Typography variant="body1" gutterBottom>
                Select the targets you would like your patient tested for.
      </Typography>
            <Grid container spacing={3}>
                {assays.map((assay) => (
                    <Grid item xs={12} sm={6} key={assay.assay_type}>
                        <Typography variant="h6" color="textPrimary" gutterBottom>
                            {assay.assay_type}
                        </Typography>
                        <ul>
                            {assay.devices.map((device) => (
                                <Grid item xs={12}>
                                    <Typography variant="subtitle2">
                                        {device.device_name}
                                    </Typography>
                                    <Grid>
                                        {device.assays.map((assay) => (
                                            <Grid item xs={12}>
                                                <FormControlLabel
                                                    control={
                                                        <Checkbox color="secondary" name={assay.assay_name} value="yes" />
                                                    }
                                                    label={assay.assay_name}
                                                />
                                            </Grid>
                                        ))}
                                    </Grid>
                                </Grid>
                            ))}
                        </ul>
                    </Grid>
                ))}
            </Grid>
        </>
    );
}
