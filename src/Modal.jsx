import React, { Component } from "react";

class Modal extends Component {
  onClose = () => {
    this.props.history.goBack();
  };

  render() {
    return (
      <div className="modal" style={{ display: "block" }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Modal title</h5>
              <button
                className="close"
                onClick={this.props.onClose || this.onClose}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

            <div className="modal-body">
              <p>Modal body</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
