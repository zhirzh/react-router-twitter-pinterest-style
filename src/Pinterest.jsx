import React, { Component } from 'react';

class Pinterest extends Component {
  componentWillMount() {
    console.log('Pinterest');
  }

  render() {
    return (
      <h1 className="foo">
        Pinterest
      </h1>
    );
  }
}

export default Pinterest;
