import config from '../config';
import TokenService from './token-service';

const GiftsApiService = {
  getAllUserGifts() {
    return fetch(`${config.API_ENDPOINT}/gifts`, {
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${TokenService.getAuthToken()}`,
      },
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

export default GiftsApiService;
