// import { response } from "express";
import React from "react";
import { Redirect } from "react-router-dom";
import "../components/PostComponents/PostComponentStyle.css";
// import OptionComponents from "../components/PostComponents/OptionComponents";
// import PostDescription from "../components/PostComponents/PostDescription";
// import PostSubmitButton from "../components/PostComponents/PostSubmitButton";
// import PostTitle from "../components/PostComponents/PostTitle";
// import TitleDisplay from "../components/PostComponents/TitleDisplay";
// import VotingProgressDisplay from "../components/PostComponents/VotingProgressDisplay";

class PostFormPage extends React.Component {

  state = {
    error: false,
    success: false,
    content: "",
    title: "",
    optOne: "",
    optTwo: "",
    optThree: "",
    postID: 0,
  };

  contentChanged = (event) => {
    this.setState({
      content: event.target.value,
    });
  };

  titleChanged = (event) => {
    this.setState({
      title: event.target.value,
    });
  };

  optOneChanged = (event) => {
    this.setState({
      optOne: event.target.value,
    });
  };

  optTwoChanged = (event) => {
    this.setState({
      optTwo: event.target.value,
    });
  };
  optThreeChanged = (event) => {
    this.setState({
      optThree: event.target.value,
    });
  };

  saveComment(comm) {
    fetch("/api/comments/", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: comm,
        pid: this.state.postID,
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }

        throw new Error("Content validation");
      })
      .then((post) => {
        if (window.location.href.indexOf("posts") > -1) {
          window.location.reload(false);
        } else {
        }
      })

      .catch((err) => {
        console.log("error");
      });
  }

  savePost = (event) => {
    let UserId = "1";
    // let newPostNum = 1 + Math.random() * 1000000;
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
        title: this.state.title,
        // ranNum: newPostNum,
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Content validation");
      })
      .then((res) => {
        this.setState({
          success: true,
          postID: res.id,
        });
      })
      .then((post) => {
        this.saveComment(this.state.optOne);
      })
      .then((post) => {
        this.saveComment(this.state.optTwo);
      })
      .then((post) => {
        this.saveComment(this.state.optThree);
      })

      .catch((err) => {
        this.setState({
          error: true,
        });
      });
  };


  render() {
    document.getElementsByTagName('body')[0].style.backgroundColor = '#fff'

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
          {/* <div className="input-group">
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
          </div> */}
         

          <div className="row gx-2 d-flex justify-content-center flex-row">
            {/*<!-- Left side Content Area -->*/}
            <div className="col-sm-5 leftColumn"> 
            <div className="row tabArea mb-3">
            {/*<!-- <h6 class="createPostTab"><span class="createPostTabTextStyling">Create a Post</span></h6> -->*/}
            <h5 className="badge createPostTab">Create a Post</h5>
          </div>
              <div method="get" id="postSubmission">
                {/* <PostTitle /> */}
                <div className="form-group">
                  <label htmlFor="postTitle">
                    <h6 className="labelFontSize">Title</h6>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="postTitle"
                    placeholder="What's on your mind?"
                    value={this.state.title}
                    onChange={this.titleChanged}
                  />
                </div>
                {/* <PostDescription /> */}
                <div className="form-group">
                  <label htmlFor="postDescription">
                    <h6 className="labelFontSize">Description</h6>
                  </label>
                  <textarea
                    className="form-control"
                    id="postDescription"
                    rows="2"
                    placeholder="What's been on your mind?"
                    value={this.state.content}
                    onChange={this.contentChanged}
                  ></textarea>
                </div>
                {/* <OptionComponents /> */}
                <div>
                  <div className="form-group">
                    <label htmlFor="option1">
                      <h6 className="labelFontSize">Option 1</h6>
                    </label>
                    <textarea
                      className="form-control"
                      id="option1"
                      rows="2"
                      placeholder="What's the first thing you need help choosing between?"
                      value={this.state.optOne}
                      onChange={this.optOneChanged}
                    ></textarea>
                  </div>
                  <div className="form-group">
                    <label htmlFor="postDescription">
                      <h6 className="labelFontSize">Option 2</h6>
                    </label>
                    <textarea
                      className="form-control"
                      id="option2"
                      rows="2"
                      placeholder="What's the second thing you need help choosing between?"
                      value={this.state.optTwo}
                      onChange={this.optTwoChanged}
                    ></textarea>
                  </div>
                  <div className="form-group">
                    <label htmlFor="postDescription">
                      <h6 className="labelFontSize">Option 3</h6>
                    </label>
                    <textarea
                      className="form-control"
                      id="option3"
                      rows="2"
                      placeholder="What's the third thing you need help choosing between?"
                      value={this.state.optThree}
                      onChange={this.optThreeChanged}
                    ></textarea>
                  </div>
                </div>
                {/* <PostSubmitButton /> */}
                <div>
                  <input
                    type="submit"
                    className="btn w-100 mt-4 mb-4"
                    value="Submit Post"
                    onClick={this.savePost}
                  />
                </div>
              </div>
            </div>
            {/*<!-- Right side content area -->
            <div className="col-sm-6 offset-1 rightColumn">
              {/* <TitleDisplay /> 
              <article className="userVotingArea row g-0 font-weight-bold">
                <h5 className="titleArea text-center labelFontSize">=Title</h5>
                <div className="d-flex flex-row justify-content-between px-3">
                  <div className="row flexItem1 mt-1 me-2">
                    <i
                      className="
                    publicUserPic
                    col-sm-3
                    bi bi-person-circle
                    iconSize
                    mt-1
                  "
                    ></i>
                    <div className="profileName col-sm-9">
                      <p className="m-0">natureisrad55</p>
                      <p className="m-0">3 hrs ago</p>
                    </div>
                  </div>
                  <div className="flexItem2">
                    <div className="profileVotes">
                      <p className="m-1">Total Votes:</p>
                      <p className="m-1 text-center">800</p>
                    </div>
                  </div>
                </div>
                <p className="row question contentPadding mt-3">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Eligendi dolorem maiores nulla, assumenda beatae similique a
                  voluptatibus.
                </p>
              </article>

              {/* <VotingProgressDisplay /> 
              <div>
                <article className="votingOptions row g-0">
                  <h5 className="votingInProgressComponent mt-2 text-center">
                    Voting In Progress
                  </h5>
                  <div className="">
                    <h6 className="option p-2 mb-2">=Option 1</h6>
                  </div>
                  <div className="">
                    <h6 className="option p-2">=Option 2</h6>
                  </div>
                  <div className="">
                    <h6 className="option p-2">=Option 3</h6>
                  </div>
                </article>
                {/* <div className="contactUs d-flex justify-content-end align-items-end">
                  About &nbsp;&nbsp;Contact Us
                </div> 
              </div>
            </div>*/}
          </div>
        </div>
      </div>
    );
  }
}

export default PostFormPage;
