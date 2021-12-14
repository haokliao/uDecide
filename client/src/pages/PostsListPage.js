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
    selectedPost: null,
    selectedPostComments: null
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

  setSelectedPost = post => {
    console.log(post);

    fetch("/api/comments/" + post.id)
      .then(res => res.json())
      .then(comments => {
        console.log(comments);
        this.setState({ selectedPost: post, selectedPostComments: comments });
      })
      .catch((err) => console.log("API ERROR: ", err));
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
          myPosts: posts
          // myPosts: posts.map((p, ii) => <Post {...p} key={ii} />),
        });
      })
      .catch((err) => console.log("API ERROR: ", err));

    fetch("/api/posts")
      .then((res) => res.json())
      .then((posts) => {
        this.setState({
          loading: false,
          posts: posts
          // posts: posts.map((p, ii) => <Post {...p} key={ii} />),
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

    const postsToDisplay = this.state.public ? this.state.posts : this.state.myPosts;

    const { selectedPost } = this.state;

    return (
      <div className="container-fluid">
        <div className="row tabArea mb-3">
          <h5 className="badge createPostTab">All Activity</h5>
          {/* this is used for styling*/}
        </div>

        <div className="row d-flex flex-row">

          {/* left column*/}
          <div className="col-lg-6 leftColumn">
            {postsToDisplay.map((post, index) =>
              <Post key={index} post={post} setSelectedPost={this.setSelectedPost} />
            )}
          </div>


          {/* <div className='col-lg-1'></div> */}

          {/* right column*/}
          <div className='col-lg-6'>
            {selectedPost && (
              <div className='selectedPostBox row g-0'>
                <div className="selectedPostTitle col-12">
                  <h3>{selectedPost.title}</h3>
                </div>
                
                <div className='selectedInfo row g-0'>
                  <div className="selectedUserName col-lg-6">
                    Submitted by: {selectedPost.UserId}
                  </div>
                  <div className="selectedPostVoteComponent  col-lg-6">
                    <p>Total Votes: {selectedPost.commTotal}</p>
                  </div>
                  <div className='postDescription col-12'>
                    {selectedPost.content}
                  </div>
                </div>

              </div>
            )}

            <div className="voting col-12">
              {this.state.selectedPostComments?.map(comment => (
                <div className="options col-12">
                  {comment.content}
                </div>
              ))}
            </div>
            

            {/* {UserId !== "1" ? (
              <button className="btn btn-primary" onClick={this.fnPubMy}>
                {this.state.buttonText}
              </button>
            ) : (
              ""
            )} */}

          </div>
        </div>
      </div>
    );

  }
}

export default PostsListPage;
