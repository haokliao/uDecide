import React from "react";


class SignIn extends React.Component {
    render(){
     return (
       
     <section className="logInInputArea rounded">
            
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
              
             
              <br />
              <input
                type="submit"
                className="text-white tabColorGreen borderColorGreen w-50 rounded"
                id="submitButtonSignIn"
                value="Sign In"
              />
            </form>
        </section> 
        );
   
    }
}
    export default SignIn;

