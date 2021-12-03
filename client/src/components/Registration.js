import React from "react";

// This component has the structure for the registration form
class Registration extends React.Component {
    render(){
     return (
     <section className="logInInputArea rounded">
           
            <form
              action="#"
              className="
                d-flex
                flex-column
                justify-content-between
                align-items-center
              "
            >
              
              <div className="form-group userNameInput p-1">
                <label for="firstname"></label>
                <input className="formInputArea"
                  type="text"
                  id="fname"
                  name="firstname"
                  placeholder="firstname"
                
                />
              </div>
              <div className="form-group lastNameInput p-1">
                <label for="lastname"></label>
                <input className="formInputArea"
                  type="text"
                  id="lname"
                  name="lastname"
                  placeholder="lastname"
                 
                />
              </div>
             
              <div className="form-group userNameInput p-1">
                <label for="username"></label>
                <input className="formInputArea"
                  type="text"
                  id="username"
                  name="username"
                  placeholder="username"
                 
                />
              </div>
              <div className="form-group passwordInput p-1">
                <label for="password"></label>
                <input className="formInputArea"
                  type="password"
                  id="password"
                  name="newPassword"
                  placeholder="password"
                
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
              />
            </form>
        </section> 
        );
   
    }
}
    export default Registration;

