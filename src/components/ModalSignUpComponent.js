import React from 'react';
import '../css/App.css';
import { Button, Modal } from 'react-bootstrap';

class ModalSignUpComponent extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      show: false
    };
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClose() {
    this.setState({
      show: false
    })
  }
  handleShow() {
    this.setState({
      show: true
    });
  }


  render() {
    return (
      <div>
        <Button onClick={this.handleShow}>
          Sign Up
        </Button>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal Heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Text in a modal</h4>
            <p>More info here.......</p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Submit</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}

export default ModalSignUpComponent;
