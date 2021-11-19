import React, { useState } from "react";
// import { Link } from "react-router-dom";

function Comments({ content, barf, meh, fire, createdAt, id }) {
  const [barfLocal, setBarf] = useState(barf);
  const [mehLocal, setMeh] = useState(meh);
  const [fireLocal, setFire] = useState(fire);
  // const [stCommentTyped, setCommentState] = useState("");

  // function contentChanged(event) {
  //   setCommentState(event.target.value);
  // }

  function fnBarfClick(bmf) {
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
              break;
            case 2:
              setMeh(mehLocal + 1);
              break;
            case 3:
              setFire(fireLocal + 1);
              break;
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
      body: JSON.stringify({ id, bmf }),
    })
      .then((res) => {
        if (res.ok) {
          switch (bmf) {
            case 1:
              setBarf(barfLocal + 1);
              break;
            case 2:
              setMeh(mehLocal + 1);
              break;
            case 3:
              setFire(fireLocal + 1);
              break;
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
  }

  return (
    <div className="col-10 col-md-8 col-lg-7">
      <div className="card mb-4 shadow">
        <div className="card-body card-text">
          {/* <Link to={"/posts/" + id}>{content}</Link> */}

          {content}
        </div>
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
      </div>
    </div>
  );
}

export default Comments;
