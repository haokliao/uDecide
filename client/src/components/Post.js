import React, { useState } from "react";
import { Link } from "react-router-dom";
import BarChart from "../components/BarChart";
// import { View, Image } from "react-native";

//cheating on the images and names! Not being pulled from db
import imageZero from "../images/izero.jpg";
import imageOne from "../images/imgone.jpg";
import imageTwo from "../images/itwo.jpg";
import imageThree from "../images/ithree.jpg";
import imageFour from "../images/ifour.jpg";
import imageFive from "../images/ifive.jpg";
import imageSix from "../images/isix.jpg";

function Post({
  content,
  barf,
  meh,
  fire,
  createdAt,
  id,
  title,
  commTotal,
  UserId,
}) {
  // const [barfLocal, setBarf] = useState(barf);
  // const [mehLocal, setMeh] = useState(meh);
  // const [fireLocal, setFire] = useState(fire);
  // const [totalVotes, setTotalVotes] = useState(barf + meh + fire);
  const [stCommentTyped, setCommentState] = useState("");

  //cheating on the images and names! Not being pulled from db
  let img = "",
    username = "",
    usernamelist = [
      "subZero",
      "lukeSkyWalker",
      "happyBirthday",
      "homer",
      "bases",
      "merryChristmas",
      "happyNewYear",
    ];

  function whichImage() {
    let myId = (UserId * 10) % 6;
    switch (myId) {
      case 0:
        img = imageZero;
        username = usernamelist[myId];
        break;
      case 1:
        img = imageOne;
        username = usernamelist[myId];
        break;
      case 2:
        img = imageTwo;
        username = usernamelist[myId];
        break;
      case 3:
        img = imageThree;
        username = usernamelist[myId];
        break;
      case 4:
        img = imageFour;
        username = usernamelist[myId];
        break;
      case 5:
        img = imageFive;
        username = usernamelist[myId];
        break;
      case 6:
        img = imageSix;
        username = usernamelist[myId];
        break;

      default:
        img = imageSix;
        username = usernamelist[myId];
        break;
    }
  }

  // useEffect(() => {
  //   // whichImage();
  //   let myId = (UserId * 10) % 6;
  //   switch (myId) {
  //     case 0:
  //       img = imageZero;
  //       username = usernamelist[myId];
  //       break;
  //     case 1:
  //       img = imageOne;
  //       username = usernamelist[myId];
  //       break;
  //     case 2:
  //       img = imageTwo;
  //       username = usernamelist[myId];
  //       break;
  //     case 3:
  //       img = imageThree;
  //       username = usernamelist[myId];
  //       break;
  //     case 4:
  //       img = imageFour;
  //       username = usernamelist[myId];
  //       break;
  //     case 5:
  //       img = imageFive;
  //       username = usernamelist[myId];
  //       break;
  //     case 6:
  //       img = imageSix;
  //       username = usernamelist[myId];
  //       break;

  //     default:
  //       break;
  //   }
  // }, []);

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
    <div className="col-10 col-md-8 col-lg-7 mt-4">
      {whichImage()}
      <article className="userVotingArea row g-0 font-weight-bold">
        <h5 className="titleArea text-center labelFontSize">
          <Link to={"/posts/" + id}>{title}</Link>
        </h5>
        <div className="d-flex flex-row justify-content-between px-3">
          <div className="row flexItem1 mt-1 me-2">
            <img
              className="
                    publicUserPic
                    col-sm-3
                    bi bi-person-circle
                    iconSize
                    mt-1
                  "
              src={img}
              alt="j"
            />

            <div className="profileName col-sm-9">
              <p className="m-0">{username}</p>
              <p className="m-0">3 hrs ago</p>
            </div>
          </div>
          <div className="flexItem2">
            <div className="profileVotes">
              <p className="m-1">Total Votes:</p>
              <p className="m-1 text-center">{commTotal}</p>
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
        <BarChart barf={barf} meh={meh} fire={fire}></BarChart>
        {/* {console.log(barf)} */}
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
