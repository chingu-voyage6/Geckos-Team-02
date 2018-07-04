import React, {Component} from "react";
import '../css/App.css';

class Form extends Component {
  state = {
    userName: '',
    email: '',
    password: ''
  };

  render () {
    return (
      <form>
        <div class="form-group">
          <label for="userName">username</label>
          <input type="text" class="form-control" id="userName" aria-describedby="userName" placeholder="Enter your preferred username" value={this.state.userName} />
        </div>
        <div class="form-group">
          <label for="Email">Email address</label>
          <input type="email" class="form-control" id="InputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={this.state.email} />
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
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
export default Form;