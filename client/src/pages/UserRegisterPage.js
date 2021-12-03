import React from "react";
import { Redirect } from "react-router-dom";
import Registration from "../components/Registration";
import RegistrationTabs from "../components/RegistrationTabs";
import SignIn from "../components/SignIn";
import UDecideTitleArea from "../components/UDecideTitleArea";
import "./userRegisterPage.css"
//const {tbUser } =require('/register')

class UserRegisterPage extends React.Component {
  state = {
    error: false,
    success: false,
    content: "",
    userName: "",
    password: "",
    firstName: "",
    lastName: "",
    registerSignin: false,
    notFound: false,
  };

  contentChanged = (event) => {
    this.setState({
      content: event.target.value,
    });
  };
  passwordChanged = (event) => {
    this.setState({
      password: event.target.value,
    });
  };
  userChanged = (event) => {
    this.setState({
      userName: event.target.value,
    });
  };

  firstNameChanged = (event) => {
    this.setState({
      firstName: event.target.value,
    });
  };

  lastNameChanged = (event) => {
    this.setState({
      lastName: event.target.value,
    });
  };

  fnReg = (event) => {
    this.setState({
      registerSignUp: true,
    });
  };

  fnSignin = (event) => {
    this.setState({
      registerSignUp: false,
    });
  };

  fnLogin = (event) => {
    fetch("/api/register/login", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        password: this.state.password,
        userName: this.state.userName,
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }

        throw new Error("Content validation");
      })
      .then((post) => {
        this.setState({
          success: true,
        });
        localStorage.setItem("uname", post.userName);
        localStorage.setItem("uid", post.id);
        window.location.reload(false);
      })
      .catch((err) => {
        this.setState({
          error: true,
        });
      });

    // console.log(this.state.userName + " " + this.state.password)
  };

  saveRegistration = (event) => {
    //return tbUser.create({firstName: this.state.firstName, lastName: this.state.lastName, userName: this.state.userName})

    fetch("/api/register/", {
      method: "POST",
      //method: 'GET',
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        password: this.state.password,
        userName: this.state.userName,
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }

        throw new Error("Content validation");
      })
      .then((post) => {
        this.setState({
          success: true,
        });
      })
      .catch((err) => {
        this.setState({
          error: true,
        });
      });
  };

  render() {
    if (this.state.success) {
      return <Redirect to="/" />;
    }

    let errorMessage = null;
    if (this.state.error) {
      errorMessage = <div className="alert alert-danger">"Invalid Login"</div>;
    }

    return (
      <div className="">
        {errorMessage}

        <div>
          <button onClick={this.fnReg}>Register</button>
          <button onClick={this.fnSignin}>Sign In</button>
        </div>

        <div className="input-group">
          <div
            style={{ display: this.state.registerSignUp ? "block" : "none" }}
          >
            <input
              id="fname"
              type="text"
              placeholder="First Name"
              value={this.state.firstName}
              className="form-control mr-3 rounded"
              onChange={this.firstNameChanged}
            />
            <input
              id="lname"
              type="text"
              placeholder="Last Name"
              value={this.state.lastName}
              className="form-control mr-3 rounded"
              onChange={this.lastNameChanged}
            />
          </div>

          <input
            type="text"
            placeholder="User Name"
            value={this.state.userName}
            className="form-control mr-3 rounded"
            onChange={this.userChanged}
          />
          <input
            placeholder="Password"
            value={this.state.password}
            className="form-control mr-3 rounded"
            type="password"
            onChange={this.passwordChanged}
          />
          <button
            style={{ display: this.state.registerSignUp ? "block" : "none" }}
            className="btn btn-primary"
            onClick={this.saveRegistration}
          >
            Register
          </button>
          <button
            style={{ display: this.state.registerSignUp ? "none" : "block" }}
            className="btn btn-primary"
            onClick={this.fnLogin}
          >
            Login
          </button>
        </div>
       
    
    {/* <!-- bootstrap row and col layout for registration/login page -->*/}
    <div class="tabColorGreen containerSize">
      <div class="row rowHeight ">
        <div
          className="
            col-sm-6
            d-flex
            flex-column
            justify-content-center
            align-items-center
          "
        >
          {/*<!-- uDecide left column- title area -->*/}
          <section class="logInTitleArea text-white">
          <UDecideTitleArea />
          </section>
        </div>
        <div
          className="
            col-sm-6
            d-flex
            flex-column
            justify-content-center
            align-items-center
          "
        >
          {/*<!-- uDecide right column- login and registration form -->*/}
          <section class="logInInputArea rounded  d-flex flex-column  justify-content-around align-items-center">
            <RegistrationTabs />
            <Registration />
          </section>
        </div>
      </div>
    </div>
    </div>
   
    );
  }
}

export default UserRegisterPage;
