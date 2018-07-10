import React from 'react';
import '../css/App.css';
import PropTypes from 'prop-types';

import { Modal, Button } from 'react-bootstrap';

class ModalLoginComponent extends React.Component {

  render() {
    if(!this.props.show) {
      return null;
    }

    const backDrop = {
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(0,0,0,0.3)',
      padding: 50
    };

    const modalStyle = {
      backgroundColor: '#fff',
      borderRadius: 5,
      maxWidth: 500,
      minHeight: 300,
      margin: '0 auto',
      padding: 30
    };
     return (
      // <div className="backdropClass" style={backDrop}>
      //     <div className="modal" style={modalStyle}>
      //
      //       <div className="footer">
      //         <button onClick={this.props.onClose}>Close</button>
      //       </div>
      //     </div>
      // </div>
      <div className="backdropClass" style={backDrop}>
        <Modal.Dialog style={modalStyle}>
          <Modal.Header>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>

          <Modal.Body>Login in form will go in here</Modal.Body>

          <Modal.Footer>
            <Button onClick={this.props.onClose}>Close</Button>
            <Button bsStyle="primary">Save changes</Button>
          </Modal.Footer>
        </Modal.Dialog>
      </div>
    );
  }
}

Modal.PropTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
}

export default ModalLoginComponent;
