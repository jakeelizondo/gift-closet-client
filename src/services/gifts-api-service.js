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
  deleteGift(id) {
    return fetch(`${config.API_ENDPOINT}/gifts/${id}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          return response.json().then((event) => Promise.reject(event));
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  },
  editGift(gift, id) {
    return fetch(`${config.API_ENDPOINT}/gifts/${id}`, {
      method: 'PATCH',
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
          return response.ok;
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  },
};

export default GiftsApiService;
