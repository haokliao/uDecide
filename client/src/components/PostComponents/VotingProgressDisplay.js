import React from "react";


class votingInProgressComponent extends React.Component{
    render(){
        return(
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
          <div className="contactUs d-flex justify-content-end align-items-end">
            <a href="#">About</a>
            <a href="#">&nbsp;&nbsp;Contact Us</a>
          </div>
          </div>

        );
    }
}

export default votingInProgressComponent;