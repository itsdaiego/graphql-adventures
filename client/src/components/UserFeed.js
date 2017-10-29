import React, { Component } from 'react';
import '../assets/User.css';
import {
  gql,
  graphql,
} from 'react-apollo'

class User extends Component {
  componentWillMount() {
    if (this.props.loading) {
    }
  }

  render() {
    console.log('this props', this.props)
    return (
      <div className="User">
        <p> { this.props.location.data.login } </p>
        <img alt='user profile' src={this.props.location.data.avatar_url} />
      </div>
    );
  }
}

const UserFeed = graphql(gql`
  query ($name: String!) {
    user (name: $name) {
      avatar_url
      login
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
