import React from 'react';

export default class RegisterForm extends React.Component {
  render() {
    return (
      <form className="register-form">
        <div>
          <label htmlFor="register-first">First Name</label>
          <input
            type="text"
            name="register-first"
            id="register-first"
            required
          />
        </div>
        <div>
          <label htmlFor="register-last">Email</label>
          <input type="text" name="register-last" id="register-last" required />
        </div>
        <div>
          <label htmlFor="register-email">Email</label>
          <input
            type="text"
            name="register-email"
            id="register-email"
            required
          />
        </div>
        <div>
          <label htmlFor="register-username">Username</label>
          <input
            type="text"
            name="register-username"
            id="register-username"
            required
          />
        </div>
        <div>
          <label htmlFor="register-password">Password</label>
          <input
            type="text"
            name="register-password"
            id="register-password"
            required
          />
        </div>

        <button type="submit">Sign Up</button>
      </form>
    );
  }
}
