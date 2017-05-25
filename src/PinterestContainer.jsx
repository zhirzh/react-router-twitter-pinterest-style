import React, { Component } from 'react';

import Pinterest from './Pinterest';

class PinterestContainer extends Component {
  componentWillMount() {
    console.log('PinterestContainer');
  }

  render() {
    return (
      <div className="foo">
        <h1>PinterestContainer</h1>
        <Pinterest {...this.props} />
      </div>
    );
  }
}

export default PinterestContainer;
