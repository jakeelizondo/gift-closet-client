import React from 'react';
import Header from './components/Header/Header';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main className="App">React is running</main>
      </div>
    );
  }
}

export default App;
