import React from "react";


class PostDescription extends React.Component{
    render(){
        return(
         <div className="form-group">
            <label htmlFor="postDescription"
                ><h6 className="labelFontSize">Description</h6></label
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