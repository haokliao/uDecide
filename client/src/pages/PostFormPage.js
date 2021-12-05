import React from "react";
import { Redirect } from "react-router-dom";
import OptionComponents from "../components/PostComponents/OptionComponents";
import "../components/PostComponents/PostComponentStyle.css";
import PostDescription from "../components/PostComponents/PostDescription";
import PostSubmitButton from "../components/PostComponents/PostSubmitButton";
import PostTitle from "../components/PostComponents/PostTitle";
import TitleDisplay from "../components/PostComponents/TitleDisplay";
import VotingProgressDisplay from "../components/PostComponents/VotingProgressDisplay";

class PostFormPage extends React.Component {
  state = {
    error: false,
    success: false,
    content: "",
  };

  contentChanged = (event) => {
    this.setState({
      content: event.target.value,
    });
  };

  savePost = (event) => {
    let UserId = "1";
    if (localStorage.getItem("uname") != null) {
      UserId = localStorage.getItem("uid");
      console.log(UserId);
    }

    fetch("/api/posts/", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: this.state.content,
        UserId: parseInt(UserId),
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }

        throw new Error("Content validation");
      })
      .then((post) => {
        this.setState({
          success: true,
        });
      })
      .catch((err) => {
        this.setState({
          error: true,
        });
      });
  };

  render() {
    if (this.state.success) return <Redirect to="/" />;

    let errorMessage = null;
    if (this.state.error) {
      errorMessage = (
        <div className="alert alert-danger">
          "There was an error saving this post."
        </div>
      );
    }

    return (
      <div className="container-fluid">
        {/*Components and styles imported from src/Components/PostComponents */}
        <div className="row">
          {errorMessage}
          <div className="input-group">
            <input
              type="text"
              placeholder="Add your words of wisdom here..."
              value={this.state.content}
              className="form-control mr-3 rounded"
              onChange={this.contentChanged}
            />
            <button className="btn btn-primary" onClick={this.savePost}>
              Save Post
            </button>
          </div>
          <div className="row tabArea mb-3 mt-5">
            {/*<!-- <h6 class="createPostTab"><span class="createPostTabTextStyling">Create a Post</span></h6> -->*/}
            <h5 className="badge createPostTab">Create a Post</h5>
          </div>

          <div className="row gx-2 d-flex flex-row">
            {/*<!-- Left side Content Area -->*/}
            <div className="col-sm-6 leftColumn">
              <form method="get" id="postSubmission">
              
                <PostTitle />
                <PostDescription />
                <OptionComponents />
                <PostSubmitButton />
                
              </form>
            </div>
            {/*<!-- Right side content area -->*/}
            <div className="col-sm-6 rightColumn">
             
              <TitleDisplay />
              <VotingProgressDisplay />

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PostFormPage;
