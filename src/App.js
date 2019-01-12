import React, { Component } from 'react';
import './App.css';

// import Header from './Components/Header';
import Projects from './Components/Projects';



class App extends Component {
  render() {
    alert("각 웹페이지는 데스크탑으로 볼 때 최적화되어 있습니다.\n모바일 최적화는 곧 적용될 예정입니다.");
    return (
      <div className="App">
        {/* <Header /> */}
        <Projects />
      </div>
    );
  }
}

export default App;
