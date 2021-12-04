import React from "react";


class PostDescription extends React.Component{
    render(){
        return(
         <div className="form-group">
            <label for="postDescription"
                ><h6 class="labelFontSize">Description</h6></label
              >
              <textarea
                className="form-control"
                id="postDescription"
                rows="2"
                placeholder="What's been on your mind?"
              ></textarea>
            </div>

        );

        
    }
}

export default PostDescription;