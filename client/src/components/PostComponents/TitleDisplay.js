import React from "react";


class TitleDisplay extends React.Component{
    render(){
        return(
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
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi
              dolorem maiores nulla, assumenda beatae similique a voluptatibus.
            </p>
        </article>

        );

        
    }
}

export default TitleDisplay;