import React, { Component } from 'react';

class Twitter extends Component {
  componentWillMount() {
    console.log('Twitter');
  }

  render() {
    return (
      <h1 className="foo">
        Twitter
      </h1>
    );
  }
}

export default Twitter;
