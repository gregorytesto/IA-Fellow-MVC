import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import { FellowForm, DisplayAllFellows, DisplayFellow } from "./fellow";


export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Fellows</Link>
            </li>
            <li>
              <Link to="/fellows/create">Create</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/fellows/update/:id" component={FellowForm} />
          <Route path="/fellows/create" component={FellowForm} />
          <Route path="/fellows/:id" component={DisplayFellow} />
          <Route path="/" component={DisplayAllFellows} />
        </Switch>
      </div>
    </Router>
  );
}