import React, { Component } from 'react';

class Home extends Component {
  componentWillMount() {
    console.log('Home');
  }

  render() {
    return (
      <h1 className="foo">
        Home
      </h1>
    );
  }
}

export default Home;
