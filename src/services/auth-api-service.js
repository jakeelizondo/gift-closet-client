import config from '../config';

const AuthApiService = {
  postLogin(loginCredentials) {
    return fetch(`${config.API_ENDPOINT}/auth/login`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(loginCredentials),
    })
      .then((response) => {
        if (!response.ok) {
          return response.json().then((event) => Promise.reject(event));
        } else {
          return response.json();
        }
      })
      .catch(() => alert('Oops! Something went wrong'));
  },
};

export default AuthApiService;
