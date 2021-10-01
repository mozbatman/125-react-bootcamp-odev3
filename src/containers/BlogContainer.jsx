import axios from "axios";
import React, { Component } from "react";
import CardWrapper from "../components/CardWrapper";

class BlogPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    axios.get(
      'https://dummyapi.io/data/v1/post?limit=10',  
      { headers: { "app-id": "613deab59443ae2c580f371b" } }
    ).then(res => this.setState({posts: res.data.data}));
  }

  deletePost = (postId) => {
    let posts = this.state.posts;
    posts = posts.filter(p => p.id !== postId);

    this.setState({posts: posts});
  }

  editPost = (editPost) => {
    let posts = this.state.posts;
    let post = posts.find(p => p.id !== editPost.id);
    post = editPost;

    this.setState({posts: posts});
  }

  render() {
    return(<div className="page-blog">
      <CardWrapper posts={this.state.posts} deletePost={this.deletePost} editPost={this.editPost} />
    </div>)
  }
}

export default BlogPage;