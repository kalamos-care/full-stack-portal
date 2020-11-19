import React, { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  messageList: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));

const conversations = [
  {
    id: 789,
    avatar: {
      alt: 'Marsha P Johnson',
      src: 'https://source.unsplash.com/random',
    },
    preview: {
      title: 'Brunch this weekend?',
      participants: 'Marsha P Johnson',
      text: " — I'll be in your neighborhood doing errands this…",
    },
  },
  {
    id: 456,
    avatar: {
      alt: 'Harvey Milk',
      src: 'https://source.unsplash.com/random',
    },
    preview: {
      title: 'Summer BBQ',
      participants: 'Harvey Milk',
      text: " — Wish I could come, but I'm out of town this…",
    },
  },
  {
    id: 123,
    avatar: {
      alt: 'Bayard Rustin',
      src: 'https://source.unsplash.com/random',
    },
    preview: {
      title: 'Oui Oui',
      participants: 'Bayard Rustin',
      text: ' — Do you have Paris recommendations? Have you ever…',
    },
  },
];

export const MessageList: FC = () => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography component="h4" variant="h5" gutterBottom>
          Messages
        </Typography>
        <Typography component="h5" variant="h6" gutterBottom>
          Sign up for a Pro plan to message your patients.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <List className={classes.messageList}>
          {conversations.map((conversation) => (
            <>
              <ListItem
                alignItems="flex-start"
                component={RouterLink}
                to={`/clinic/messages/${conversation.id}`}
                key={conversation.id}
              >
                <ListItemAvatar>
                  <Avatar
                    alt={conversation.avatar.alt}
                    src={conversation.avatar.src}
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={conversation.preview.title}
                  secondary={
                    <>
                      <Typography
                        component="span"
                        variant="body2"
                        className={classes.inline}
                        color="textPrimary"
                      >
                        {conversation.preview.participants}
                      </Typography>
                      {conversation.preview.text}
                    </>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
            </>
          ))}
        </List>
      </Grid>
    </Grid>
  );
};
