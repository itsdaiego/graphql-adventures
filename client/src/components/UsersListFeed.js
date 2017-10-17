import React, { Component } from 'react';
import '../assets/UsersListFeed.css';
import {
  gql,
  graphql,
} from 'react-apollo'

class UsersList extends Component {
  componentWillMount() {
    if (this.props.data.loading) {
      this.props.data.user = {
        avatar_url: 'http://s3.amazonaws.com/37assets/svn/765-default-avatar.png'
      }
    }
  }

  render() {
    return (
      <div className="UsersList">
        <p> Fetched users: </p>
        <ul>
          <li>
            <img alt='user profile' src={this.props.data.user.avatar_url} />
          </li>
        </ul>
      </div>
    );
  }
}

const UsersListFeed = graphql(gql`
  query {
    user (name: "drodrigo") {
      avatar_url
    }
  }
`)(UsersList);

export default UsersListFeed
