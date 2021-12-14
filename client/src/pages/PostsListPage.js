import React from "react";
import Post from "../components/Post";
// import Comment from "../components/Comment";
import Loading from "../components/Loading";
import { Redirect } from "react-router-dom";

class PostsListPage extends React.Component {
  state = {
    posts: [],
    myPosts: [],
    loading: true,
    error: false,
    success: false,
    content: "",
    public: true,
    buttonText: "My Posts",
  };

  fnPubMy = (event) => {
    this.setState({
      public: !this.state.public,
    });
    if (this.state.public === true) {
      this.setState({
        buttonText: "Public Post",
      });
    } else {
      this.setState({
        buttonText: "My Posts",
      });
    }
  };

  componentDidMount() {
    let UserId = "1";
    if (localStorage.getItem("uname") != null) {
      UserId = localStorage.getItem("uid");
    }

    fetch("/api/posts/home/" + UserId)
      .then((res) => res.json())
      .then((posts) => {
        this.setState({
          loading: false,
          myPosts: posts.map((p, ii) => <Post {...p} key={ii} />),
        });
      })
      .catch((err) => console.log("API ERROR: ", err));

    fetch("/api/posts")
      .then((res) => res.json())
      .then((posts) => {
        this.setState({
          loading: false,
          posts: posts.map((p, ii) => <Post {...p} key={ii} />),
        });
      })
      .catch((err) => console.log("API ERROR: ", err));
  }

  render() {
    document.getElementsByTagName("body")[0].style.backgroundColor = "#fff";

    let UserId = "1";
    if (localStorage.getItem("uname") != null) {
      UserId = localStorage.getItem("uid");
    }
    if (this.state.success) {
      return <Redirect to="/" />;
    }

    if (this.state.loading) {
      return <Loading />;
    }

    return (
      <div className="container-fluid">
        <div className="row tabArea mb-3">
          <h5 className="badge createPostTab">All Activity</h5>
          {/* this is used for styling*/}
        </div>

        <div className="row d-flex flex-row">
          <div className="col-lg-5 leftColumn">
            {this.state.public ? this.state.posts : this.state.myPosts}
          </div>

          {/* make this == grey display, figure out showpostpage.html to make it pretty
          drop comments and add comments on this
          and then connect right side with maybe this.public or whatever and wahla */}
          <div className='col-lg-1'></div>
          <div className='col-lg-6'>
          {UserId !== "1" ? (
              <button className="btn btn-primary" onClick={this.fnPubMy}>
                {this.state.buttonText}
              </button>
            ) : (
              ""
            )}
            
          
          
          </div>
          <div className="row justify-content-center">
          </div>
        </div>


      </div>
    );
  }
}

export default PostsListPage;
