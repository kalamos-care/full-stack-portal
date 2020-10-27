import React, { FC, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import { getMessage } from '../utils/api';
import { isAuthenticated } from '../utils/auth';


const useStyles = makeStyles((theme) => ({
  link: {
    color: '#ff6e6c',
  },
  body: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },

  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));


export const Home: FC = () => {
  const [message, setMessage] = useState<string>('');
  const [error, setError] = useState<string>('');
  const classes = useStyles();

  const queryBackend = async () => {
    try {
      const message = await getMessage();
      setMessage(message);
    } catch (err) {
      setError(err);
    }
  };

  return (
    <main>
      {/* Hero unit */}
      <div className={classes.heroContent}>
        <Container maxWidth="sm">
          <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            Remote PrEP Patient Monitoring
            </Typography>
          <Typography variant="h5" align="center" color="textSecondary" paragraph>
            Let us automate the logistics of PrEP prescribing, from testing to medication delivery to adherenece monitoring.
              <br /><br />
              You focus on building strong personal relationships with your patients.
            </Typography>
          <div className={classes.heroButtons}>
            <Grid container spacing={2} justify="center">
              <Grid item>
                <Button variant="contained" color="primary">
                  <a className={classes.link} href="/signup">
                    Create Your Account
                  </a>
                </Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" color="primary">
                  <a className={classes.link} href="/aboutus">
                    Read More About Us
                  </a>
                </Button>
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
      <Container className={classes.cardGrid} maxWidth="md">
        {/* End hero unit */}
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                image="https://source.unsplash.com/random"
                title="Image title"
              />
              <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">Ping Backend</Typography>
                <Typography variant="body2" color="textSecondary" component="p">Click me!</Typography>
              </CardContent>
              <CardActions>
                {!message && !error && (
                  <Button size="small" color="primary">

                    <a className={classes.link} href="#" onClick={() => queryBackend()}>
                      Click to make request to backend
                    </a>
                  </Button>
                )}
                {message && (
                  <p>
                    <code>{message}</code>
                  </p>
                )}
                {error && (
                  <p>
                    Error: <code>{error}</code>
                  </p>
                )}
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                image="https://source.unsplash.com/random"
                title="Image title"
              />
              <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                  Admin Dashboard
    </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Monitor app users/usage</Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  <a className={classes.link} href="/admin">
                    Admin Dashboard
          </a>
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                image="https://source.unsplash.com/random"
                title="Image title"
              />
              <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                  Provider Dashboard
    </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Monitor your Patients!!!</Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  <a className={classes.link} href="/provider-dashboard">
                    Protected Route
      </a>
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </main>
  );
};