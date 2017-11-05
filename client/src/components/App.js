import React from 'react';
import UsersListFeed from './UsersListFeed'
import UserFeed from './UserFeed'
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
      <button> Login </button>
      <hr/>
      <Route path="/users-list" component={UsersListFeed}/>
      <Route path="/user" component={UserFeed}/>
    </div>
  </Router>
)

export default App
