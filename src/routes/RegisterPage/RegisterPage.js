import React from 'react';
import RegisterForm from '../../components/RegisterForm/RegisterForm';

export default class RegisterPage extends React.Component {
  onRegisterSuccess = () => {
    this.props.history.push('/login');
  };
  render() {
    return (
      <section className="register-page">
        <h2>Register for a Gift Closet account!</h2>
        <RegisterForm onRegisterSuccess={this.onRegisterSuccess} />
      </section>
    );
  }
}
