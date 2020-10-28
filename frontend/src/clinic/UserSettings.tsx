import React, { FC, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { getUserInfo } from '../utils/api';


const useStyles = makeStyles((theme) => ({

}));

export const UserSettings: FC = () => {
  {/** 
  const [message, setMessage] = useState<string>('');
  const [error, setError] = useState<string>('');
  **/}
  const classes = useStyles();
{/**  
  const queryBackend = async () => {
    try {
      const message = await getUserInfo();
      setMessage(message);
    } catch (err) {
      setError(err);
    }
  };
**/}
  return (
    <>
      <p>List user settings here:</p>
        <p>
          <code>{/* getUserInfo() */}</code>
        </p>
    </>
  );
};