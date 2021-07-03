import React from 'react';
import './App.css';
import BuildRoundedIcon from '@material-ui/icons/BuildRounded';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/.env" render={() => (window.location.href = "https://youtu.be/dQw4w9WgXcQ")} />
        <Route path="/" component={App} />
      </Switch>
    </Router>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BuildRoundedIcon
          className="App-logo"
          style={{
            fontSize: 200
          }}
        />
        <p>
          website under development, lol sorry
        </p>
        <p>
          <b>
            wait
          </b>
        </p>
      </header>
    </div>
  );
}

export default AppRouter;
