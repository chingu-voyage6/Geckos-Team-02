import React from 'react';
import '../css/App.css';

class FormComponent extends React.Component {
  state = {
    userName: '',
    email: '',
    password: ''
  };

  render () {
    return (
      <form>
        <div className="form-group">
          <label htmlFor="Email">Email address</label>
          <input type="email" className="form-control" id="InputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={this.state.userName} />
          <small id="emailHelp" className="form-text text-muted">We use your email like a username.</small>
        </div>
        <div className="form-group">
          <label htmlFor="inputPassword">Password</label>
          <input type="password" className="form-control" id="inputPassword" placeholder="Password" value={this.state.password} />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    );
  }
}
export default FormComponent;
