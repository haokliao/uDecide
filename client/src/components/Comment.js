import React, { useState } from "react";
import "../pages/css/feed.css";

// import { Link } from "react-router-dom";

function Comments({ content, barf, meh, fire, createdAt, id, postId, onVote }) {
  const [barfLocal, setBarf] = useState(barf);
  // const [mehLocal, setMeh] = useState(meh);
  // const [fireLocal, setFire] = useState(fire);
  // + meh + fire
  const [totalVotes, setTotalVotes] = useState(barf );

  // const [stCommentTyped, setCommentState] = useState("");

  // function contentChanged(event) {
  //   setCommentState(event.target.value);
  // }

  function fnBarfClick(bmf) {
    onVote();
    fetch("/api/comments/counter", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, bmf }),
    })
      .then((res) => {
        if (res.ok) {
          switch (bmf) {
            case 1:
              setBarf(barfLocal + 1);
              setTotalVotes(totalVotes + 1);
              break;
            // case 2:
            //   setMeh(mehLocal + 1);
            //   setTotalVotes(totalVotes + 1);
            //   break;
            // case 3:
            //   setFire(fireLocal + 1);
            //   setTotalVotes(totalVotes + 1);
            //   break;
            default:
              console.log("bmf error");
              break;
          }

          return res.json();
        }

        throw new Error("Content validation");
      })
      .then((post) => {})
      .catch((err) => {
        console.log("error" + id);
      });

    fetch("/api/posts/counter", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, postId, bmf }),
    })
      .then((res) => {
        if (res.ok) {
          // console.log("bmf ");

          return res.json();
        }

        throw new Error("Content validation");
      })
      .then((post) => {})
      .catch((err) => {
        console.log("error" + id);
      });
  }

  return (
    <div className="col-12 col-md-6 col-lg-6">
      <article className="userVotingArea row g-0 font-weight-bold">
        <div className="d-flex flex-row justify-content-between px-3">
          <div className="row flexItem1 mt-1 me-2">
            {/* <i
              className="
                    publicUserPic
                    col-sm-3
                    bi bi-person-circle
                    iconSize
                    mt-1
                  "
            ></i> */}
          </div>
          <div className="flexItem2">
            <div className="profileVotes">
              <p className="m-1">Option Votes:asdas</p>
              <p className="m-1 text-center">{totalVotes}</p>
            </div>
          </div>
        </div>
        <h5 className="row contentPadding mt-3">{content}</h5>
        <div className="d-flex px-3">
          <button className="btn " onClick={fnBarfClick.bind(this, 1)}>
            {" "}
            {"\u{1F600} " + barfLocal}
          </button>

          {/* <button className="btn" onClick={fnBarfClick.bind(this, 2)}>
            {" "}
            {" \u{1F641} " + mehLocal}
          </button>
          <button className="btn " onClick={fnBarfClick.bind(this, 3)}>
            {" "}
            {" \u{1f525} " + fireLocal}
          </button> */}
        </div>
      </article>

      {/* <div className="card mb-4 shadow">
        <div className="card-body card-text">
          <Link to={"/posts/" + id}>{content}</Link>

          {content}
        </div> 
        <div className="card-footer small text-muted text-right">
          {
            //any content / funchtions here
          }
        </div>
      </div> */}
    </div>
  );
}

export default Comments;
