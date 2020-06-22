import React from 'react'
import Header from '../containers/Header'
import MainSection from '../containers/MainSection'
import { TodoDetails } from '../containers/TodoDetails';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Header />
        <MainSection />
      </Route>
      <Switch>
        <Route path="/todo/:id" children={<TodoDetails />} />
      </Switch>
    </Switch>
  </Router>
)

export default App
