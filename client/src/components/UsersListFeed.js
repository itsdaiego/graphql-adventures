import React, { Component } from 'react';
import { Redirect } from 'react-router'
import '../assets/UsersListFeed.css';
import {
  gql,
  graphql,
} from 'react-apollo'

class UsersList extends Component {
  componentWillMount() {
    if (this.props.data.loading) {
      this.props.data.users = []
    }
  }

  redirectToUser = (user) => {
    this.setState({ redirect: true })
    this.props.data.currentUser = user
  }

  render() {
    if (this.state && this.state.redirect) {
      return <Redirect to={{
        pathname: '/user',
        data: this.props.data.currentUser
      }} />
    }

    return (
      <div className="UsersList">
        <p> Fetched users: </p>
        {
          this.props.data.users.map(user => {
            return <img onClick={() => this.redirectToUser(user)} alt='user profile' src={user.avatar_url} />
          })
        }
        <ul>
          <li>
          </li>
        </ul>
      </div>
    );
  }
}

const UsersListFeed = graphql(gql`
  query {
    users {
      avatar_url
      login
    }
  }
`)(UsersList);

export default UsersListFeed
