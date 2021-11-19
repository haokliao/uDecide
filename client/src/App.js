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
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark shadow mb-3 container-fluid">
      <Link className="navbar-brand" to="/">
        Micro Blog
      </Link>
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/posts/new">
            Create a Micro Post
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/about-us">
            About Us
          </NavLink>
        </li>
        {myName == null ? (
          <li className="nav-item">
            <NavLink className="nav-link" exact to="/register">
              {"Sign In"}
            </NavLink>
          </li>
        ) : (
          ""
        )}
        {myName != null ? (
          <li className="nav-item">
            <NavLink className="nav-link" exact to="/log">
              Hi {myName}!
            </NavLink>
          </li>
        ) : (
          ""
        )}
        {myName != null ? (
          <li className="nav-item">
            <button className="btn btn-primary" onClick={fnlogOut}>
              Log Out
            </button>
          </li>
        ) : (
          ""
        )}
      </ul>
    </nav>
  );
}

class App extends React.Component {
  render() {
    return (
      <Router>
        <Navigation />
        <div className="container-fluid text-center">
          <div className="row justify-content-center">
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
