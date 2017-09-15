import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Nav from "./Nav";

import Home from "./Home";
import Modal from "./Modal";

import PinterestContainer from "./PinterestContainer";
import TwitterContainer from "./TwitterContainer";

import "./App.css";

class App extends Component {
  previousLocation = this.props.location;

  componentWillUpdate(nextProps) {
    const { location } = this.props;
    if (
      nextProps.history.action !== "POP" &&
      (!location.state || !location.state.modal)
    ) {
      this.previousLocation = this.props.location;
    }
  }

  render() {
    const { location } = this.props;

    const isModal = !!(
      location.state &&
      location.state.modal &&
      this.previousLocation !== location
    );

    return (
      <div>
        <Nav />

        <Switch location={isModal ? this.previousLocation : location}>
          <Route exact path="/" component={Home} />

          <Route
            path="/twitter"
            render={() => (
              <div>
                {isModal ? null : <TwitterContainer />}

                <Modal onClose={() => this.props.history.push("/")} />
              </div>
            )}
          />

          <Route
            path="/pinterest"
            render={() => {
              const Component = isModal ? Modal : PinterestContainer;

              return <Component />;
            }}
          />
        </Switch>

        {isModal ? <Route component={Modal} /> : null}
      </div>
    );
  }
}
export default App;
