import React from "react";


class PostSubmitButton extends React.Component{
    render(){
        return(
        <div>
          <input
              type="submit"
              className="btn w-100 mt-4 mb-4"
              value="Submit Post"
            />
         </div>

        );
    }
}

export default PostSubmitButton;