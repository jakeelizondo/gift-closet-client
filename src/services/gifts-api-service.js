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
  getGiftById(id) {
    return fetch(`${config.API_ENDPOINT}/gifts/${id}`, {
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
  addGift(gift) {
    return fetch(`${config.API_ENDPOINT}/gifts`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify(gift),
    })
      .then((response) => {
        if (!response.ok) {
          return response.json().then((event) => Promise.reject(event));
        } else {
          return response.json();
        }
      })
      .catch(() =>
        alert(
          'Oops! Something went wrong, please refresh the page to try again.'
        )
      );
  },
};

export default GiftsApiService;
