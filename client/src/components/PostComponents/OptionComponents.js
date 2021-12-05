import React from "react";


class OptionComponents extends React.Component{
    render(){
        return(
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
            ></textarea>
            </div>
        </div>
        );
    }
}


export default OptionComponents;