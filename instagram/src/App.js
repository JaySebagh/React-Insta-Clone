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
      showFirst: true
    }
  }

  toggleComponents = () => this.setState({ showFirst: !this.state.showFirst })

  render() {
    return (
      <div className="App">
        <button onClick={this.toggleComponents}>Toggle Components</button>
        <ToShow showFirst={this.state.showFirst} />
        
      </div>
    );
  }
}


export default App;