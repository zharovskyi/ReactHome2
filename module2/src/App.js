import React, { Component } from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import './App.css';
import Reader from './componenent/Task1/Reader/Reader';
import publications from './publications.json';
import { createBrowserHistory } from "history";

const customHistory = createBrowserHistory();






class App extends Component {

  render() {
    return (
      <>
        <Switch>
          <Router history={customHistory} >
            <Route path="/reader" render={() => <Reader items={publications} />} />
            <Route path="" render={() => <Reader items={publications} />} />
          </Router>
        </Switch>
      </>
    );
  }
}
export default App