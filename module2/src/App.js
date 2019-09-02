import React, { Component } from 'react';
import './App.css';
import Reader from './componenent/Task1/Reader/Reader';
import publications from './publications.json';
class App extends Component {


  render() {
    return (
      <>
        <Reader items={publications} />
      </>
    );
  }
}
export default App