import React from "react";
import { Redirect } from "react-router-dom";

class SignIn extends React.Component {
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
          action="#"
          className="
                d-flex
                flex-column
                justify-content-center
                align-items-center
              "
        >
          <div className="userNameInput p-1">
            <label htmlFor="username"></label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="username"
              value={this.state.userName}
              onChange={this.userChanged}
            />
          </div>
          <div className="passwordInput p-1">
            <label htmlFor="password"></label>
            <input
              type="password"
              id="password"
              placeholder="password"
              onChange={this.passwordChanged}
            />
          </div>

          <br />
          <input
            type="submit"
            className="text-white tabColorGreen borderColorGreen w-50 rounded"
            id="submitButtonSignIn"
            value="Sign In"
            onClick={this.fnLogin}
          />
        </div>
      </section>
    );
  }
}
export default SignIn;
