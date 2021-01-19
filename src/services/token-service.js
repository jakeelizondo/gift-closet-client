import config from '../config';

const TokenService = {
  getAuthToken() {
    return window.localStorage.getItem(config.TOKEN_KEY);
  },
  hasAuthToken() {
    return !!TokenService.getAuthToken();
  },
  saveAuthToken(token) {
    window.localStorage.setItem(config.TOKEN_KEY, token);
  },

  clearAuthToken() {
    window.localStorage.removeItem(config.TOKEN_KEY);
  },
};

export default TokenService;
