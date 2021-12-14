import React, { useState } from "react";
import "../pages/css/feed.css";

// import { Link } from "react-router-dom";

function Comments({ content, barf, createdAt, id, postId, onVote }) {
  const [barfLocal, setBarf] = useState(barf);
  // const [mehLocal, setMeh] = useState(meh);
  // const [fireLocal, setFire] = useState(fire);
  // + meh + fire
  const [totalVotes, setTotalVotes] = useState(barf);

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
      .then((post) => { })
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
      .then((post) => { })
      .catch((err) => {
        console.log("error" + id);
      });
  }

  return (
    <section className='row'>
      <div className="rightColumn">
        <div className="userVotingArea font-weight-bold">

          {/* <div className="profileVotes">
              <p className="m-1">Option Votes: </p>
              <p className="m-1 text-center">{totalVotes}</p>
            </div> */}

          <h5 className="mb-3 titleArea">{content}</h5>

            <button className="btn " onClick={fnBarfClick.bind(this, 1)}>
              {"Current Votes: "}
              {+ barfLocal}
            </button>

        </div>

      </div>
    </section>
  );
}

export default Comments;
