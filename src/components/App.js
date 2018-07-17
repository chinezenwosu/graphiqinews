import '../styles/App.css';
import React, { Component } from 'react';
import LinkList from './LinkList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Graphiqi News</h1>
        </header>
        <LinkList />
      </div>
    );
  }
}

export default App;
