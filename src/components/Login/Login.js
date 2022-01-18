import React from 'react';
import './Login.css';
import {Link, Route, useRouteMatch, Switch, useLocation} from 'react-router-dom'
import CryptoJS from 'crypto-js';
import ReactDOM from 'react-dom';


var msg = 'helloworld';
var pw = ""+CryptoJS.SHA256(msg);

var Login = React.Component({
  getInitialState: function() {
    return {
      isAuthenticated: false,
      password: this.props.pw
    };
  },
  auth: function() {
      console.log(this.refs['password'].value);
    var input = ""+CryptoJS.SHA256(this.refs['password'].value);
    if (this.state.password == input) {
       this.setState({isAuthenticated: true});
    }
    this.refs['password'].value = "";
  },
  secretData: function() {
    if (this.state.isAuthenticated) 
    this.props.history.push('/embedded-finance')

  },


matchPath : function() {
  let { path, url } = useRouteMatch();

  if(url === '/embedded-finance')
  return Login();
},
  render: function() {
    return (
        
        <><div className='login-wrapper'>
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
     
        )
  }
});

if (typeof window !== 'undefined') {
              ReactDOM.render(<Login msg={msg} pw={pw} />,
                document.getElementById("my-app"));            }

export default Login;