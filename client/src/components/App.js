import '../styles/App.css'
import React, { Component } from 'react'
import LinkList from './LinkList'
import CreateLink from './CreateLink'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="App-logo">
            <div className="chat">
              <div className="lines"/>
              <div className="lines"/>
              <div className="lines"/>
            </div>
          </div>
          <h1 className="App-title">Graphiqi News</h1>
        </header>
        <main className="App-main">
          <div className="App-column App-column-2">
            <h3>Create Link</h3>
            <CreateLink />
          </div>
          <div className="App-column App-column-2">
            <h3>List of links</h3>
            <LinkList />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
