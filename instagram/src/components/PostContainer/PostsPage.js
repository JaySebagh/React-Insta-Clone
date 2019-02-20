import React, { Component } from 'react';
import dummyData from '../../dummy-data';
import PostContainer from './PostContainer';
import SearchBar from '../SearchBar/SearchBar';

class PostsPage extends Component {
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

export default PostsPage;