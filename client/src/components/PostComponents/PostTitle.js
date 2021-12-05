import React from "react";
//DO NOT USE THIS FILE. MAKE UPDATES TO POSTS FROM PAGE

class PostTitle extends React.Component {
  render() {
    return (
      <div className="form-group">
        <label htmlFor="postTitle">
          <h6 className="labelFontSize">Title</h6>
        </label>
        <input
          type="text"
          className="form-control"
          id="postTitle"
          placeholder="What's on your mind?"
        />
      </div>
    );
  }
}

export default PostTitle;
