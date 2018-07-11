import React from 'react';
import '../css/App.css';
import PropTypes from 'prop-types';
import { Button, Modal } from 'react-bootstrap';

class ModalSignUpComponent extends React.Component {


  render() {
    if(!this.props.show) {
      return null;
    }

    return (
      <div className="backdropClass">

          <Modal.Dialog className="modalStyleClass">
          <Modal.Header>
            <Modal.Title>Signup</Modal.Title>
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
              <div className="form-group">
                <label htmlFor="inputPassword2">Confirm Password</label>
                <input type="password" className="form-control" id="inputPassword" placeholder="Confirme Password"  />
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </Modal.Body>

          <Modal.Footer>
            <Button onClick={this.props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal.Dialog>
      </div>

    )
  }
}
Modal.propTypes = {
  onHide: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
}

export default ModalSignUpComponent;
