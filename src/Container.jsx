import React, { Component } from "react";

import Modal from "./Modal";

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Container</h1>

        <Modal isModal={false} />
      </div>
    );
  }
}

export default Home;
