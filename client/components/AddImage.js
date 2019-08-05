import React, { Component } from 'react';
import axios from 'axios';

class UserForm extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      image: '',
    };
  }

  onChange = (e) => {
    switch (e.target.name) {
      case 'image':
        this.setState({ image: e.target.files[0] });
        break;
      default:
        this.setState({ [e.target.name]: e.target.value });
    }
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { username, image } = this.state;
    let formData = new FormData();

    formData.append('username', username);
    formData.append('image', image);

    axios.post('/api/v1/users', formData)
      .then((result) => {
        console.log(result);
      });
  }

  render() {
    const { username, image } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          name="username"
          value={username}
          onChange={this.onChange}
        />
        <input
          type="file"
          name="image"
          onChange={this.onChange}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default UserForm;