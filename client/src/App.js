import React, { Component } from 'react';
import './App.css';
import GoalsContainer from './components/GoalsContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Hello Budget App!</h1>
        </header>
        <GoalsContainer />
      </div>
    );
  }
}

export default App;
