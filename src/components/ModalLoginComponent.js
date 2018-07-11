import React from 'react';
import '../css/App.css';
import PropTypes from 'prop-types';

import { Modal, Button } from 'react-bootstrap';

class ModalLoginComponent extends React.Component {

  render() {
    if(!this.props.show) {
      return null;
    }

     return (
      <div className="backdropClass">
        <Modal.Dialog className="modalStyleClass">
          <Modal.Header>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <form>
              <div className="form-group">
                <label htmlFor="Email">Email address</label>
                <input type="email" className="form-control" id="InputEmail1" aria-describedby="emailHelp" placeholder="Enter email"  />
                <small id="emailHelp" className="form-text text-muted">We use your email like a username.</small>
              </div>
              <div className="form-group">
                <label htmlFor="inputPassword">Password</label>
                <input type="password" className="form-control" id="inputPassword" placeholder="Password"  />
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </Modal.Body>

          <Modal.Footer>
            <Button onClick={this.props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal.Dialog>
      </div>
    );
  }
}

Modal.propTypes = {
  onHide: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
}

export default ModalLoginComponent;
