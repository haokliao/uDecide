import React from "react";
import { Redirect } from "react-router-dom";
import "../components/PostComponents/PostComponentStyle.css"

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
        <div class="row tabArea mb-3 mt-5">
        {/*<!-- <h6 class="createPostTab"><span class="createPostTabTextStyling">Create a Post</span></h6> -->*/}
        <h5 class="badge createPostTab">Create a Post</h5>
      </div>

      <div class="row gx-2 d-flex flex-row">
        {/*<!-- Left side Content Area -->*/}
        <div class="col-sm-6 leftColumn">
          <form action="#" method="get" id="postSubmission">
            <div class="form-group">
              <label for="postTitle"
                ><h6 class="labelFontSize">Title</h6></label
              >
              <input
                type="text"
                class="form-control"
                id="postTitle"
                placeholder="What's on your mind?"
              />
            </div>

            <div class="form-group">
              <label for="postDescription"
                ><h6 class="labelFontSize">Description</h6></label
              >
              <textarea
                class="form-control"
                id="postDescription"
                rows="2"
                placeholder="What's been on your mind?"
              ></textarea>
            </div>
            <div class="form-group">
              <label for="option1"
                ><h6 class="labelFontSize">Option 1</h6></label
              >
              <textarea
                class="form-control"
                id="option1"
                rows="2"
                placeholder="What's the first thing you need help choosing between?"
              ></textarea>
            </div>
            <div class="form-group">
              <label for="postDescription"
                ><h6 class="labelFontSize">Option 2</h6></label
              >
              <textarea
                class="form-control"
                id="option2"
                rows="2"
                placeholder="What's the second thing you need help choosing between?"
              ></textarea>
            </div>
            <div class="form-group">
              <label for="postDescription"
                ><h6 class="labelFontSize">Option 3</h6></label
              >
              <textarea
                class="form-control"
                id="option3"
                rows="2"
                placeholder="What's the third thing you need help choosing between?"
              ></textarea>
            </div>
            <input
              type="submit"
              class="btn w-100 mt-4 mb-4"
              value="Submit Post"
            />
          </form>
        </div>
        {/*<!-- Right side content area -->*/}
        <div class="col-sm-6 rightColumn">
          {/*<!-- Votes Component -->*/}
          <article class="userVotingArea row g-0 font-weight-bold">
            <h5 class="titleArea text-center labelFontSize">=Title</h5>
            <div class="d-flex flex-row justify-content-between px-3">
              <div class="row flexItem1 mt-1 me-2">
                <i
                  class="
                    publicUserPic
                    col-sm-3
                    bi bi-person-circle
                    iconSize
                    mt-1
                  "
                ></i>
                <div class="profileName col-sm-9">
                  <p class="m-0">natureisrad55</p>
                  <p class="m-0">3 hrs ago</p>
                </div>
              </div>
              <div class="flexItem2">
                <div class="profileVotes">
                  <p class="m-1">Total Votes:</p>
                  <p class="m-1 text-center">800</p>
                </div>
              </div>
            </div>
            <p class="row question contentPadding mt-3">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi
              dolorem maiores nulla, assumenda beatae similique a voluptatibus.
            </p>
          </article>
          {/*<!-- Voting In Progress Component -->*/}
          <article class="votingOptions row g-0">
            <h5 class="votingInProgressComponent mt-2 text-center">
              Voting In Progress
            </h5>
            <div class="">
              <h6 class="option p-2 mb-2">=Option 1</h6>
            </div>
            <div class="">
              <h6 class="option p-2">=Option 2</h6>
            </div>
            <div class="">
              <h6 class="option p-2">=Option 3</h6>
            </div>
          </article>
          <div class="contactUs d-flex justify-content-end align-items-end">
            <a href="#">About</a>
            <a href="#">&nbsp;&nbsp;Contact Us</a>
          </div>
        </div>
      </div>
      </div>
      </div>
    );
  }
}

export default PostFormPage;
