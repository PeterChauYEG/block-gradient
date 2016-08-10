import React, { Component } from 'react'

// import styles
import './App.css'

// import components
import BlocksContainer from './imports/components/BlocksContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <BlocksContainer />
      </div>
    );
  }
}

export default App;
