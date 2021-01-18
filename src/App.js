import React from 'react';
import { HashRouter as Router, Route } from "react-router-dom";
import {MainPage, BoardPage} from './pages'


function App() {
  return (
    <Router>
    <div>
      <Route path='/' exact component={MainPage}/>
      <Route path='/:boardID' component={BoardPage}/>
    </div>
    </Router>
  );
}

export default App;
