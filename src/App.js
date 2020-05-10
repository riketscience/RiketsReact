import React from 'react';
import './App.css';
import MainTitle from './Views/MainTitle'
import Intro from './Views/Intro'
import Projects from './Views/Projects'
import Coffees from './Views/Coffees'
import Experiments from './Views/Experiments'
import MainMenu from './Views/MainMenu'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <body>
      <header className="app-header">
        <MainTitle />
      </header>

      <Router>
        <MainMenu />
        <div className='main-content'>
          <Switch>        
          <Route path='/projects' component={Projects} />
          <Route path='/coffees' component={Coffees} />
          <Route path='/experiments' component={Experiments} />
          <Route path='/' component={Intro} />
          </Switch>
        </div>
      </Router>

      </body>
    </div>
  );
}

export default App;
