import React, { Component } from 'react';
import '../assets/UserFeed.css';
import {
  gql,
  graphql,
} from 'react-apollo'

class User extends Component {
  componentWillMount() {
    if (this.props.data.loading) {
      this.props.data.user = {
        repositories: []
      }
    }
  }

  render() {
    return (
      <div className="User">
        <p className='profile'> { this.props.location.data.login } </p>
        <img alt='user profile' src={this.props.location.data.avatar_url} />
        {
          this.props.data.user.repositories.map(repository => {
            return (
              <div>
                <a href={ repository.html_url }> { repository.name } </a>
                <span> { repository.description } </span>
              </div>
            )
          })
        }
      </div>
    );
  }
}

const UserFeed = graphql(gql`
  query ($name: String!) {
    user (name: $name) {
      avatar_url
      login
      repositories {
        name
        html_url
        description
      }
    }
  }`, {
    options: (props) => ({
      variables: {
        name: props.location.data.login
      }
    })
  }
)(User);

export default UserFeed
