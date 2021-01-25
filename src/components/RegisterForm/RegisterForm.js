import React from 'react';
import AuthApiService from '../../services/auth-api-service';

export default class RegisterForm extends React.Component {
  state = { error: null };

  handleRegisterSubmit = (event) => {
    event.preventDefault();
    const { first, last, email, username, password } = event.target;
    this.setState({ error: null });

    AuthApiService.postUser({
      user_name: username.value,
      password: password.value,
      first_name: first.value,
      last_name: last.value,
      email: email.value,
    })
      .then((user) => {
        username.value = '';
        password.value = '';
        first.value = '';
        last.value = '';
        email.value = '';
        this.props.onRegisterSuccess();
      })
      .catch((response) => {
        this.setState({ error: response });
      });
  };

  render() {
    return (
      <form className="register-form" onSubmit={this.handleRegisterSubmit}>
        {this.state.error && (
          <p style={{ color: 'red' }}>{this.state.error.error.message}</p>
        )}
        <div>
          <label htmlFor="first">First Name</label>
          <input type="text" name="first" id="first" required />
        </div>
        <div>
          <label htmlFor="last">Last Name</label>
          <input type="text" name="last" id="last" required />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email" required />
        </div>
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" name="username" id="username" required />
        </div>
        <div>
          <label htmlFor="password">
            Password <br />
            <span className="tiny-text">
              (must contain at least 1 uppercase, 1 lowercase, 1 number, and 1
              special character)
            </span>
          </label>
          <input type="text" name="password" id="password" required />
        </div>

        <button type="submit">Sign Up</button>
      </form>
    );
  }
}
