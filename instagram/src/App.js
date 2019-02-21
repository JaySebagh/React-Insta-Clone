import React, { Component } from 'react';
import './App.css';
import withConditional from './components/authenticaion/withAuthentication';
import PostsPage from './components/PostContainer/PostsPage';
import LoggedOut from './components/PostContainer/LoggedOut';

const ToShow = withConditional(PostsPage)(LoggedOut)

class App extends Component {
  constructor() {
    super();
    this.state = {
      inputText: ''
    }
  }

  handleChanges = e => this.setState({ inputText: e.target.value });

  signIn = e => {
    e.preventDefault();
    localStorage.setItem('user', this.state.inputText);
    window.location.reload();
  }

  render() {
    return (
      <div className="App">
        <ToShow/>
        <input 
          type="text" 
          value={this.state.inputText} 
          onChange={this.handleChanges}
        />
        <button onClick={this.signIn}>Sign In</button>
      </div>
    );
  }
}


export default App;