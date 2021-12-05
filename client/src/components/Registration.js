import React from "react";
import { Redirect } from "react-router-dom";

// This component has the structure for the registration form
class Registration extends React.Component {
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

  onRegistrationSuccessChange() {
    this.props.changeSuccess(this.state.success);
  }

  sendSuccess() {
    this.props.changeSuccess(this.state.success);
  }

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
        localStorage.setItem("uname", post.userName);
        localStorage.setItem("uid", post.id);
        window.location.reload(false);
        // this.onRegistrationSuccessChange();
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
      <section className="logInInputArea rounded">
        {errorMessage}

        <div
          // action="#"
          className="
                d-flex
                flex-column
                justify-content-between
                align-items-center
              "
        >
          <div className="form-group userNameInput p-1">
            <label htmlFor="firstname"></label>
            <input
              className="formInputArea"
              type="text"
              id="fname"
              name="firstname"
              placeholder="firstname"
              onChange={this.firstNameChanged}
            />
          </div>
          <div className="form-group lastNameInput p-1">
            <label htmlFor="lastname"></label>
            <input
              className="formInputArea"
              type="text"
              id="lname"
              name="lastname"
              placeholder="lastname"
              onChange={this.lastNameChanged}
            />
          </div>

          <div className="form-group userNameInput p-1">
            <label htmlFor="username"></label>
            <input
              className="formInputArea"
              type="text"
              id="rusername"
              name="username"
              placeholder="username"
              onChange={this.userChanged}
            />
          </div>
          <div className="form-group passwordInput p-1">
            <label htmlFor="password"></label>
            <input
              className="formInputArea"
              type="password"
              id="rpassword"
              name="newPassword"
              placeholder="password"
              onChange={this.passwordChanged}
            />
          </div>
          {/* <div className="passwordInput p-1">
                <label for="confirmPassword"></label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="confirm password"
                />
              </div> */}

          <br />
          <input
            type="submit"
            className="text-white tabColorGreen borderColorGreen w-50 rounded"
            id="submitButtonRegister"
            value="Sign Up"
            onClick={this.saveRegistration}
          />
        </div>
      </section>
    );
  }
}
export default Registration;
