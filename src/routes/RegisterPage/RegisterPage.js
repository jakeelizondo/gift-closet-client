import React from 'react';
import RegisterForm from '../../components/RegisterForm/RegisterForm';
import './RegisterPage.css';

export default class RegisterPage extends React.Component {
  onRegisterSuccess = () => {
    this.props.history.push('/login');
  };
  render() {
    return (
      <section className="register-section">
        <h2>Register for a Gift Closet account!</h2>
        <RegisterForm onRegisterSuccess={this.onRegisterSuccess} />
      </section>
    );
  }
}
