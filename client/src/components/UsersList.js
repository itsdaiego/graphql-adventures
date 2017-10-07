import React, { Component } from 'react';
import '../assets/UsersList.css';

class UsersList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      imageUrl: ''
    }
  }

  componentDidMount() {
    this.setState(() => ({imageUrl: 'https://avatars1.githubusercontent.com/u/4576630?v=4&s=400' }))
  }

  render() {
    return (
      <div className="UsersList">
        <p> Fetched users: </p>
        <ul>
          <li>
            <img alt='user profile' src={this.state.imageUrl} />
          </li>
        </ul>
      </div>
    );
  }
}

export default UsersList;
