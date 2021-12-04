import React from "react";


class PostTitle extends React.Component{
    render(){
        return(
            <div className="form-group">
            <label for="postTitle"
              ><h6 className="labelFontSize">Title</h6></label
            >
            <input
              type="text"
              class="form-control"
              id="postTitle"
              placeholder="What's on your mind?"
            />
          </div>
        );
    }
}

export default PostTitle;