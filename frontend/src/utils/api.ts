import { BACKEND_URL } from '../config';

export const getMessage = async () => {
  const response = await fetch(BACKEND_URL);

  const data = await response.json();

  if (data.message) {
    return data.message;
  }

  return Promise.reject('Failed to get message from backend');
};

export const getUserInfo = async () => {
  var jwt = localStorage.getItem('token');
  
  const response = await fetch(`${BACKEND_URL}/users/me`, {
    method: 'GET',
    headers: {
      Authorization: `${jwt}`,
    },
    redirect: 'follow'
  });

  const data = await response.json();

  if (data.email) {
    return data.email;
  }

  return Promise.reject('Failed to get user info from backend. JWT:' + {jwt});
};


/**
 * Add provider registration needs here

export const mtlRegister = async (
  email: string,
  firstName: string,
  lastName: string,
  NPI: string,
  stateLicenses: Array<string>
) => {
  // Error checking
  if (!(email.length > 0)) {
    throw new Error('Email was not provided');
  }
  if (!(firstName.length > 0)) {
    throw new Error('First name was not provided');
  }
  if (!(lastName.length > 0)) {
    throw new Error('Last name was not provided');
  }
  if (!(NPI.length > 0)) {
    throw new Error('NPI was not provided');
  }
  if (!(stateLicenses.length > 0)) {
    throw new Error('State licensese were not provided');
  }

  const request = new Request('/api/register_provider', {});
};
*/