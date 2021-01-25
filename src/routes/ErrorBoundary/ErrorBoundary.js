import React from 'react';

export default class ErrorPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <h1>
          Oops, looks like something went wrong. Please refresh the page and try
          again
        </h1>
      );
    }
    return this.props.children;
  }
}
