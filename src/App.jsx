import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Home from './Home';
import Nav from './Nav';
import Pinterest from './Pinterest';
import PinterestContainer from './PinterestContainer';
import Twitter from './Twitter';

import './App.css';

class App extends Component {
  prevLocation = this.props.location;

  render() {
    const isModal = !!(this.props.location.state && this.props.location.state.modal) && !!this.prevLocation;

    this.prevLocation = this.props.location;

    return (
      <div>
        <Nav />

        <Route
          exact={!isModal}
          path="/"
          render={() => <Home isModal={isModal} />}
        />

        <Route
          path="/pinterest"
          render={(props) => {
            const Component = isModal ? Pinterest : PinterestContainer;

            return (
              <Component {...props} isModal={isModal} />
            );
          }}
        />

        <Route
          path="/twitter"
          render={props => (
            <div>
              {isModal ? null : <Home isModal={isModal} />}
              <Twitter {...props} isModal={isModal} />
            </div>
          )}
        />
      </div>
    );
  }
}

export default App;
