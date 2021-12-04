import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import PostsListPage from "./pages/PostsListPage";
import PostFormPage from "./pages/PostFormPage";
import ShowPostPage from "./pages/ShowPostPage";
import AboutUsPage from "./pages/AboutUsPage";
import UserRegisterPage from "./pages/UserRegisterPage";

import "./App.css";

function Navigation(props) {
  function fnlogOut(event) {
    localStorage.removeItem("uname");
    localStorage.removeItem("uid");
    window.location.reload(false);
  }

  const [myName] = useState(localStorage.getItem("uname"));

  return (
    <nav className="uDecideNavBar  mb-0">
      <div className="navItemsGroup1 ">
        <Link to="/">
          <span className="uDecideLogo">:):</span>
          <span className="uDecideLogoTxt">uDecide</span>
        </Link>
      </div>

      <div className="navItemsGroup3 d-flex flex-row justify-content-between align-items-baseline">
        <h6>
          <NavLink exact to="/posts/new">
            New Post
          </NavLink>
          &nbsp;&nbsp;
        </h6>
        {/* <li></li> */}
        <h6>
          <NavLink exact to="/about-us">
            About Us
          </NavLink>
          &nbsp;&nbsp;
        </h6>
        {myName == null ? (
          <h6>
            <NavLink exact to="/register">
              {"Sign In"}
            </NavLink>
          </h6>
        ) : (
          ""
        )}
        {myName != null ? (
          <h6>
            <NavLink exact to="/log">
              {/* Hi {myName}! */}
              <i className="fas fa-user-cog textColorDarkGreen"></i>
            </NavLink>
            &nbsp;&nbsp;
          </h6>
        ) : (
          ""
        )}
        {myName != null ? (
          <button className="btn backgroundColorDarkGreen" onClick={fnlogOut}>
            Log Out
          </button>
        ) : (
          ""
        )}
      </div>
    </nav>
  );
}

class App extends React.Component {
  render() {
    return (
      <Router>
        <Navigation />
        {/* Main bootsrap container and row classes with uDecide NavBar Component*/}
        <div className="container-fluid">
          <div className="row">
            <Switch>
              <Route path="/posts/new" component={PostFormPage} />
              <Route path="/posts/:id" component={ShowPostPage} />
              <Route path="/about-us" component={AboutUsPage} />
              <Route path="/register" component={UserRegisterPage} />
              <Route path="/" component={PostsListPage} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
