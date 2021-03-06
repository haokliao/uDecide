import React from "react";
import Post from "../components/Post";
import Comment from "../components/Comment";
import Loading from "../components/Loading";

import { Redirect } from "react-router-dom";
// import "../pages/css/feed.css";

class ShowPostPage extends React.Component {
  state = {
    loading: true,
    posts: null,
    notFound: false,
    comments: [],
    error: false,
    success: false,
    content: "",
  };

  updateTotalVotes = () => {
    const { id } = this.props.match.params;

    fetch("/api/posts/" + id)
      .then((res) => res.json())
      .then((posts) => {
        this.setState({
          posts: posts.map((p, ii) => <Post post={p} key={ii} />),
        });
      })
      .catch((err) => console.log("API ERROR: ", err));
    // console.log(this.state.posts);
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    fetch("/api/posts/" + id)
      .then((res) => res.json())
      .then((posts) => {
        this.setState({
          loading: false,
          posts: posts.map((p, ii) => <Post post={p} key={ii} />),
        });
      })
      .catch((err) => console.log("API ERROR: ", err));
    fetch("/api/comments/" + id)
      .then((res) => res.json())
      .then((comments) => {
        this.setState({
          loading: false,
          comments: comments.map((p, ii) => (
            <Comment {...p} key={ii} onVote={this.updateTotalVotes} />
          )),
        });
      })
      .catch((err) => console.log("API ERROR: ", err));
  }

  render() {
    document.getElementsByTagName("body")[0].style.backgroundColor = "#fff";

    if (this.state.notFound) return <Redirect to="/" />;
    if (this.state.loading) return <Loading />;

    return (
      <div className="container-fluid">
        <div className="row tabArea mb-3">
          <h5 className="badge createPostTab">All Activity</h5>
          {/* this is used for styling*/}
        </div>

        <div className="row d-flex">

          <div className="col-lg-6 leftColumn">
            {this.state.posts}
            
          </div>
          

          <div className="col-6 rightColumn">
            {this.state.comments}
          </div>
        </div>
      </div>
    );
  }
}

export default ShowPostPage;
