import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Nav from "./Nav";

import Container from "./Container";
import Home from "./Home";
import Modal from "./Modal";

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

    console.log(isModal);

    return (
      <div>
        <Nav />

        <Switch location={isModal ? this.previousLocation : location}>
          <Route exact path="/" component={Home} />

          <Route
            path="/twitter"
            render={() => (
              <div>
                {isModal ? null : <Container />}

                <Modal onClose={() => this.props.history.push("/")} />
              </div>
            )}
          />
        </Switch>

        {isModal ? <Route path="/twitter" component={Modal} /> : null}
      </div>
    );
  }
}

export default App;
