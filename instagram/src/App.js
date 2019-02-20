import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      filterPost: []
    }
  }

  componentDidMount() {
    this.setState({ posts: dummyData })
  }

  search = e => {
    let filteredPost = this.state.posts.filter(allPosts => {
      if(allPosts.username.includes(e.target.value)) {
        return allPosts
      }
      return undefined;
    });
    this.setState({ filterPost: filteredPost })
  }

  render() {
    return (
      <div className="App">
        <SearchBar search={this.search}/>
        <PostContainer statusPost={
          this.state.filterPost.length > 0
          ? this.state.filterPost
          : this.state.posts
        }
        />
      </div>
    );
  }
}

export default App;