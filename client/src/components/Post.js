import React, { useState } from "react";
import { Link } from "react-router-dom";

function Post({ content, barf, meh, fire, createdAt, id, title }) {
  // const [barfLocal, setBarf] = useState(barf);
  // const [mehLocal, setMeh] = useState(meh);
  // const [fireLocal, setFire] = useState(fire);
  // const [totalVotes, setTotalVotes] = useState(barf + meh + fire);
  const [stCommentTyped, setCommentState] = useState("");

  function contentChanged(event) {
    setCommentState(event.target.value);
  }

  // function fnBarfClick(bmf) {
  //   fetch("/api/posts/counter", {
  //     method: "POST",
  //     credentials: "include",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ id, bmf }),
  //   })
  //     .then((res) => {
  //       if (res.ok) {
  //         switch (bmf) {
  //           case 1:
  //             setBarf(barfLocal + 1);
  //             setTotalVotes(totalVotes + 1);
  //             break;
  //           case 2:
  //             setMeh(mehLocal + 1);
  //             setTotalVotes(totalVotes + 1);
  //             break;
  //           case 3:
  //             setFire(fireLocal + 1);
  //             setTotalVotes(totalVotes + 1);
  //             break;
  //           default:
  //             console.log("bmf error");
  //             break;
  //         }

  //         return res.json();
  //       }

  //       throw new Error("Content validation");
  //     })
  //     .then((post) => {})
  //     .catch((err) => {
  //       console.log("error" + id);
  //     });
  // }

  function saveComment(event) {
    fetch("/api/comments/", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content: stCommentTyped, pid: id }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }

        throw new Error("Content validation");
      })
      .then((post) => {
        if (window.location.href.indexOf("posts") > -1) {
          window.location.reload(false);
        } else {
        }
      })

      .catch((err) => {
        console.log("error");
      });
  }

  return (
    <div className="col-10 col-md-8 col-lg-7">
      <article className="userVotingArea row g-0 font-weight-bold">
        <h5 className="titleArea text-center labelFontSize">
          <Link to={"/posts/" + id}>{title}</Link>
        </h5>
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
              <p className="m-1 text-center">{"800"}</p>
            </div>
          </div>
        </div>
        <p className="row question contentPadding mt-3">
          <Link to={"/posts/" + id}>{content}</Link>
        </p>
        <div className="input-group">
          <input
            type="text"
            placeholder="Tell me! I need to know! "
            value={stCommentTyped}
            className="form-control mr-3 rounded"
            onChange={contentChanged}
          />
          <Link to={"/posts/" + id}>
            <button className="btn btn-primary" onClick={saveComment}>
              Add Option
            </button>
          </Link>
        </div>
      </article>

      {/* <div className="card mb-4 shadow">
        <div className="card-body card-text"></div>
        <div className="card-footer small text-muted text-right">
          <button onClick={fnBarfClick.bind(this, 1)}>
            {" "}
            {"\u{1F922} Barf: " + barfLocal}
          </button>
          <button onClick={fnBarfClick.bind(this, 2)}>
            {" "}
            {" \u{1F612}	 Meh: " + mehLocal}
          </button>
          <button onClick={fnBarfClick.bind(this, 3)}>
            {" "}
            {" \u{1f525} Fire: " + fireLocal}
          </button>

          {
            //any content / funchtions here
          }
        </div>
      </div> */}
    </div>
  );
}

export default Post;
