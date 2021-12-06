import React from "react";
import { Redirect } from "react-router-dom";
// import Registration from "../components/Registration";
import RegistrationTabs from "../components/RegistrationTabs";
// import SignIn from "../components/SignIn";
import UDecideTitleArea from "../components/UDecideTitleArea";
import "./css/userRegisterPage.css";
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
    myname: localStorage.getItem("uname"),
  };

  onSuccessChange = (newSuccess) => {
    this.setState({
      success: newSuccess,
    });
    console.log("userRegPage success state change");
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

  // fnLogin = (event) => {
  //   fetch("/api/register/login", {
  //     method: "POST",
  //     credentials: "include",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       password: this.state.password,
  //       userName: this.state.userName,
  //     }),
  //   })
  //     .then((res) => {
  //       if (res.ok) {
  //         return res.json();
  //       }

  //       throw new Error("Content validation");
  //     })
  //     .then((post) => {
  //       this.setState({
  //         success: true,
  //       });
  //       localStorage.setItem("uname", post.userName);
  //       localStorage.setItem("uid", post.id);
  //       window.location.reload(false);
  //     })
  //     .catch((err) => {
  //       this.setState({
  //         error: true,
  //       });
  //     });

  //   // console.log(this.state.userName + " " + this.state.password)
  // };

  // saveRegistration = (event) => {
  //   console.log("wtf");
  //   //return tbUser.create({firstName: this.state.firstName, lastName: this.state.lastName, userName: this.state.userName})

  //   fetch("/api/register/", {
  //     method: "POST",
  //     //method: 'GET',
  //     credentials: "include",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       firstName: this.state.firstName,
  //       lastName: this.state.lastName,
  //       password: this.state.password,
  //       userName: this.state.userName,
  //     }),
  //   })
  //     .then((res) => {
  //       if (res.ok) {
  //         return res.json();
  //       }

  //       throw new Error("Content validation");
  //     })
  //     .then((post) => {
  //       this.setState({
  //         success: true,
  //       });
  //     })
  //     .catch((err) => {
  //       this.setState({
  //         error: true,
  //       });
  //     });
  // };

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

        {/* <!-- bootstrap row and col layout for registration/login page -->*/}
        <div className="tabColorGreen containerSize">
          <div className="row rowHeight ">
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
              <section className="logInTitleArea text-white">
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
              <section className="logInInputArea rounded  d-flex flex-column  justify-content-around align-items-center">
                <RegistrationTabs />
                {/* Surendra's controls, these are for testing. they work too. Skip, go to RegistrationTabs
                <div>
                  <div
                    className="btn-group"
                    role="group"
                    aria-label="Basic example"
                  >
                    <button
                      className="btn backgroundColorDarkGreen "
                      onClick={this.fnSignin}
                    >
                      Sign In
                    </button>

                    <button
                      className="btn backgroundColorDarkGreen "
                      onClick={this.fnReg}
                    >
                      Register
                    </button>
                  </div>
                  <div
                    // action="#"
                    className="d-flex flex-column justify-content-between align-items-center"
                  >
                    <div className="input-group">
                      <div
                        style={{
                          display: this.state.registerSignUp ? "block" : "none",
                        }}
                      >
                        <div className="form-group userNameInput p-1">
                          <input
                            className="formInputArea"
                            type="text"
                            id="fname"
                            name="firstname"
                            placeholder="firstname"
                            value={this.state.firstName}
                            onChange={this.firstNameChanged}
                          />
                        </div>
                        <div className="form-group userNameInput p-1">
                          <input
                            className="formInputArea"
                            type="text"
                            id="lname"
                            name="lastname"
                            placeholder="lastname"
                            value={this.state.lastName}
                            onChange={this.lastNameChanged}
                          />
                        </div>
                      </div>
                      <div className="form-group userNameInput p-1">
                        <input
                          className="formInputArea"
                          type="text"
                          id="rusername"
                          name="username"
                          placeholder="username"
                          value={this.state.userName}
                          onChange={this.userChanged}
                        />
                      </div>
                      <div className="form-group userNameInput p-1">
                        <input
                          className="formInputArea"
                          type="password"
                          id="rpassword"
                          name="newPassword"
                          placeholder="password"
                          onChange={this.passwordChanged}
                        />
                      </div>
                      <button
                        style={{
                          display: this.state.registerSignUp ? "block" : "none",
                        }}
                        type="submit"
                        className="text-white tabColorGreen borderColorGreen w-50 rounded"
                        id="submitButtonRegister"
                        value="Sign Up"
                        onClick={this.saveRegistration}
                      >
                        Register
                      </button>
                      <button
                        style={{
                          display: this.state.registerSignUp ? "none" : "block",
                        }}
                        type="submit"
                        className="text-white tabColorGreen borderColorGreen w-50 rounded"
                        id="submitButtonSignIn"
                        value="Sign In"
                        onClick={this.fnLogin}
                      >
                        Login
                      </button>
                    </div>
                  </div>
                </div>
                 End surendra's controls.  */}
              </section>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserRegisterPage;
