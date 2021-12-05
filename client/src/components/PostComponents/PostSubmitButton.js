import React from "react";

//DO NOT USE THIS FILE. MAKE UPDATES TO POSTS FROM PAGE

class PostSubmitButton extends React.Component {
  render() {
    return (
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
