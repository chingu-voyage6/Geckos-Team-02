import React from 'react';
import '../css/App.css';

import { Button, Modal } from 'react-bootstrap';

class ModalLoginComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }
  render() {
    return (
      <div>
        <Button>
          Login
        </Button>
      </div>
    )
  }
}

export default ModalLoginComponent;
