import React, { Component } from 'react';
import './App.css';

// import Header from './Components/Header';
import Projects from './Components/Projects';



class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Header /> */}
        <Projects />
      </div>
    );
  }
}

export default App;
