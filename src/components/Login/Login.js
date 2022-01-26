import React from "react";
import styles from './styles.css';


import {
  Link,
  Route,
  useRouteMatch,
  Switch,
  useLocation,
} from "react-router-dom";
import CryptoJS from "crypto-js";
import ReactDOM from "react-dom";

var msg = "helloworld";
var pw = "" + CryptoJS.SHA256(msg);

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      isAuthenticated: false,
      password: pw,
    };
  }
  auth() {
    console.log(this.refs["password"].value);
    var input = "" + CryptoJS.SHA256(this.refs["password"].value);
    if (this.state.password == input) {
      this.setState({ isAuthenticated: true });
    }
    else alert(message="wrong password");
    this.refs["password"].value = "";                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             

    return isAuthenticated;
  }
  // secretData() {
  //   if (this.state.isAuthenticated)
  //     this.props.history.push("/embedded-finance");
  // }                                                                                                                                                                                   

  // matchPath = function() {
  //   let { path, url } = useRouteMatch();

  //   if(url === '/embedded-finance')
  //   return Login();
  // }
  render() {
    return (
      <>
        <div className="login-wrapper" style={{background:green}}>
          <form>
            <label>
              <p>Password</p>
              <input type="password" />
            </label>
            <div>
              <button type="submit">Validate</button>
            </div>
          </form>
        </div>
      </>
    );
  }
}

// if (typeof window !== 'undefined') {
//               ReactDOM.render(<Login msg={msg} pw={pw} />,
//                 document.getElementById("my-app"));            }




export default Login;


