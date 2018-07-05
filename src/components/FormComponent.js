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
        <div class="form-group">
          <label for="Email">Email address</label>
          <input type="email" class="form-control" id="InputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={this.state.userName} />
          <small id="emailHelp" class="form-text text-muted">We use your email like a username.</small>
        </div>
        <div class="form-group">
          <label for="inputPassword">Password</label>
          <input type="password" class="form-control" id="inputPassword" placeholder="Password" value={this.state.password} />
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    );
  }
}
export default FormComponent;