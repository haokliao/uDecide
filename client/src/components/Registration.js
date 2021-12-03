import React from "react";


class Registration extends React.Component {
    render(){
     return (
     <section className="logInInputArea rounded">
            <ul className="nav nav-tabs">
              <li className="nav-item">
                <p className="nav-link text-muted" aria-current="page" onClick={this.fnSignin}
                  >SIGN IN</p>
              </li>
              <li className="nav-item">
                <p className="nav-link textColorGreen" onClick={this.fnReg}>SIGN UP</p>
              </li>
            </ul>
            <form
              action="#"
              className="
                d-flex
                flex-column
                justify-content-center
                align-items-center
              "
            >
              <div className="userNameInput p-1">
                <label for="username"></label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  placeholder="username"
                />
              </div>
              <div className="passwordInput p-1">
                <label for="password"></label>
                <input
                  type="password"
                  id="password"
                  name="newPassword"
                  placeholder="password"
                />
              </div>
              <div className="passwordInput p-1">
                <label for="confirmPassword"></label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="confirm password"
                />
              </div>
              <div className="checkBoxInput p-1">
                <input type="checkbox" id="staySignedIn" />
                <label for="staySignedIn">Keep Me Signed In</label>
              </div>
              <br />
              <input
                type="submit"
                className="text-white tabColorGreen borderColorGreen w-50 rounded"
                id="submitButton"
                value="Sign Up"
              />
            </form>
        </section> 
        );
   
    }
}
    export default Registration;

