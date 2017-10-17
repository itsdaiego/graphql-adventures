import React from 'react';
import UsersListFeed from './UsersListFeed'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const App = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/users-list">Users List</Link></li>
      </ul>
      <hr/>
      <Route path="/users-list" component={UsersListFeed}/>
    </div>
  </Router>
)

export default App
