import React, { Component } from 'react';
import '../assets/UsersListFeed.css';
import {
  gql,
  graphql,
} from 'react-apollo'

class UsersList extends Component {
  componentWillMount() {
    console.log('this props', this.props.data)
    if (this.props.data.loading) {
      this.props.data.users = []
    }
  }

  render() {
    return (
      <div className="UsersList">
        <p> Fetched users: </p>
        {
          this.props.data.users.map(user => {
            return <img alt='user profile' src={user.avatar_url} />
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
