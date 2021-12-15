import React from "react";
import { Link } from "react-router-dom";
// import BarChart from "../components/BarChart";
// import { View, Image } from "react-native";

//cheating on the images and names! Not being pulled from db
// import imageZero from "../images/izero.jpg";
// import imageOne from "../images/imgone.jpg";
// import imageTwo from "../images/itwo.jpg";
// import imageThree from "../images/ithree.jpg";
// import imageFour from "../images/ifour.jpg";
// import imageFive from "../images/ifive.jpg";
// import imageSix from "../images/isix.jpg";

function Post({post, setSelectedPost, isActive}) {
  const {
    // content,
    barf,
    // meh,
    // fire,
    // createdAt,
    id,
    title,
    commTotal,
    UserId
  } = post;
  // const [barfLocal, setBarf] = useState(barf);
  // const [mehLocal, setMeh] = useState(meh);
  // const [fireLocal, setFire] = useState(fire);
  // const [totalVotes, setTotalVotes] = useState(barf + meh + fire);
  // setCommentTyped
  // const [setCommentState] = useState("");

  //cheating on the images and names! Not being pulled from db
  let username = "",
  // img = "",
    usernamelist = [
      "subZero",
      "lukeSkyWalker",
      "happyBirthday",
      "homer",
      "bases",
      "merryChristmas",
      "happyNewYear",
    ];

  function whichID() {
    let myId = (UserId * 10) % 6;
    switch (myId) {
      case 0:
        username = usernamelist[myId];
        break;
      case 1:
        username = usernamelist[myId];
        break;
      case 2:
        username = usernamelist[myId];
        break;
      case 3:
        username = usernamelist[myId];
        break;
      case 4:
        username = usernamelist[myId];
        break;
      case 5:
        username = usernamelist[myId];
        break;
      case 6:
        username = usernamelist[myId];
        break;

      default:
        username = usernamelist[myId];
        break;
    }
  }



  // function contentChanged(event) {
  //   setCommentState(event.target.value);
  // }

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

  // function saveComment(event) {
  //   fetch("/api/comments/", {
  //     method: "POST",
  //     credentials: "include",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ content: setCommentTyped, pid: id }),
  //   })
  //     .then((res) => {
  //       if (res.ok) {
  //         return res.json();
  //       }

  //       throw new Error("Content validation");
  //     })
  //     .then((post) => {
  //       if (window.location.href.indexOf("posts") > -1) {
  //         window.location.reload(false);
  //       } else {
  //       }
  //     })

  //     .catch((err) => {
  //       console.log("error");
  //     });
  // }

  return (

    // <article class='entry row g-0'>
    // <h5 class="publicUserName col-9 offset-2">Lorem, ipsum dolor.</h5>
    // <div class='row g-0'>
    //   <i class="publicUserPic col-1 bi bi-person-circle "></i>
    //   <div class="publicPosts col-10 ">
    //   <p>
    //     Is Frank Ocean going to release an album soon?
    //   </p>
    //   <span class="publicVoteComponent">
    //     <p class='votes'> Votes: 789 </p>&nbsp;&nbsp;
    //     <i class="bi bi-check"></i>&nbsp;&nbsp;
    //     <i class="bi bi-lock-fill"></i>&nbsp;&nbsp;
    //     <p>3 hrs ago</p> 
    //   </span>
    // </div>
    // </article>

    // <div className="col-10 col-md-8 col-lg-7 mt-4">
  <article className="row g-0" onClick={() => setSelectedPost(post)}>
    <div className="entry col-12">

      {/* entry starts here */}
      <div className={`publicPosts row g-0 ${isActive ? 'active' : ''}`}>


      <h5 className="titleArea col-12">
        {whichID()}
        {title}
        {/* <Link to={"/posts/" + id}>{title}</Link> */}
      </h5>

      {/* <div className="d-flex flex-row justify-content-between px-3"> */}
      <div className="row">
        {/* <img className="publicUserPic col-sm-3 iconSize mt-1" src={img} alt="j"/> */}
        <span className="d-flex flex-row justify-content-between col-12">
          <p className="m-0">Submitted by: {username}</p>
          <p className="m-0">Total Votes: {commTotal}</p>
          <p className="m-0">3 hrs ago</p>
        </span>

        {/* <BarChart barf={barf}></BarChart> */}
      </div>

      

    </div>
    </div>
  </article >
  );
}
Post.defaultProps = {
  isActive: false,
}

export default Post;
