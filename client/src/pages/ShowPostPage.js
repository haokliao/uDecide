import React from "react";
import Post from "../components/Post";
import Comment from "../components/Comment";
import Loading from "../components/Loading";
import { Redirect } from "react-router-dom";

class ShowPostPage extends React.Component {
  state = {
    loading: true,
    posts: [],
    notFound: false,
    comments: [],
    error: false,
    success: false,
    content: "",
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    fetch("/api/posts/" + id)
      .then((res) => res.json())
      .then((posts) => {
        this.setState({
          loading: false,
          posts: posts.map((p, ii) => <Post {...p} key={ii} />),
        });
      })
      .catch((err) => console.log("API ERROR: ", err));
    fetch("/api/comments/" + id)
      .then((res) => res.json())
      .then((comments) => {
        this.setState({
          loading: false,
          comments: comments.map((p, ii) => <Comment {...p} key={ii} />),
        });
      })
      .catch((err) => console.log("API ERROR: ", err));
  }

  render() {
    if (this.state.notFound) return <Redirect to="/" />;
    if (this.state.loading) return <Loading />;

    return (
      <div className="container-fluid text-center">
        <div className="row justify-content-center">{this.state.posts}</div>
        <div className="row justify-content-center">{this.state.comments}</div>
      </div>
    );
  }
}

export default ShowPostPage;
