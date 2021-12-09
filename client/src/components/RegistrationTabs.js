import React from "react";
// import "../App.css";
import SignIn from "./SignIn";
import Registration from "../components/Registration";
import "../pages/css/userRegisterPage.css"

class RegistrationTabs extends React.Component {
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

  onSuccessChangeRegTab = (newSuccess) => {
    this.setState({
      success: newSuccess,
    });
    console.log("reg tab success state change");
  };

  sendSuccessRegTab() {
    this.props.changeSuccessRegTab(this.state.success);
  }

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

  render() {

    return (
      <section className ='registration'>
        <div className="btn-group" role="group" aria-label="Basic example">
          <button
            type="button"
            className="btn backgroundColorWhite"
            onClick={this.fnSignin}
          >
            <p>Sign In</p>
          </button>

          <button
            type="button backgroundColorWhite"
            className="btn "
            onClick={this.fnReg}
          >
            <p>Sign Up</p>
          </button>
        </div>
        <div style={{ display: this.state.registerSignUp ? "block" : "none" }}>
          <Registration changeSuccess={this.onSuccessChangeRegTab.bind(this)} />
        </div>
        <div style={{ display: this.state.registerSignUp ? "none" : "block" }}>
          <SignIn />
        </div>
      </section>
    );
  }
}
export default RegistrationTabs;
