import config from '../config.js';
import TokenService from './token-service.js';

const TagsApiService = {
  getAllTags: async function () {
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

  getTagById: async function (id) {
    try {
      const response = await fetch(`${config.API_ENDPOINT}/tags/${id}`, {
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

  addTag: async function (tag) {
    try {
      const response = await fetch(`${config.API_ENDPOINT}/tags`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          Authorization: `Bearer ${TokenService.getAuthToken()}`,
        },
        body: JSON.stringify(tag),
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

  deleteTag: async function (id) {
    try {
      const response = await fetch(`${config.API_ENDPOINT}/tags/${id}`, {
        method: 'DELETE',
        headers: {
          'content-type': 'application/json',
          Authorization: `Bearer ${TokenService.getAuthToken()}`,
        },
      });
      if (!response.ok) {
        return response.json().then((event) => Promise.reject(event));
      }
    } catch (error) {
      alert(error.message);
    }
  },
  updateTag: async function (tag, id) {
    try {
      const response = await fetch(`${config.API_ENDPOINT}/tags/${id}`, {
        method: 'PATCH',
        headers: {
          'content-type': 'application/json',
          Authorization: `Bearer ${TokenService.getAuthToken()}`,
        },
        body: JSON.stringify(tag),
      });
      if (!response.ok) {
        return response.json().then((event) => Promise.reject(event));
      } else {
        return response.ok;
      }
    } catch (error) {
      alert(error.message);
    }
  },
};

export default TagsApiService;
