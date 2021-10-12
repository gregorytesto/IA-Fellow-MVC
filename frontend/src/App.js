import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import { DisplayAllFellows, DisplayFellow } from "./fellow";


export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Fellows</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/fellows/:id">
            <DisplayFellow />
          </Route>
          <Route path="/">
            <DisplayAllFellows />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}