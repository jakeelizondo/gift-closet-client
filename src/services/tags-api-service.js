import config from '../config.js';
import TokenService from './token-service.js';

const TagsApiService = {
  getAllTags: async function () {
    console.log('grabbing tags');

    try {
      const response = await fetch(`${config.API_ENDPOINT}/tags`, {
        headers: {
          'content-type': 'application/json',
          Authorization: `Bearer ${TokenService.getAuthToken()}`,
        },
      });
      if (!response.ok) {
        return response.json().then((event) => Promise.reject(event));
      } else {
        return response.json();
      }
    } catch (error) {
      alert(error.message);
    }
  },
};

export default TagsApiService;
