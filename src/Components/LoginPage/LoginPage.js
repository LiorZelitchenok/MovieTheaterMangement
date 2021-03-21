import React, { useState, useContext } from "react";
import { Switch, Route } from "react-router-dom";
import "./LoginPage.css";
import Typography from "@material-ui/core/Typography";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Avatar from "@material-ui/core/Avatar";
import movieTheaterImage from "../../assets/movieTheater.jpg";
import HomePage from "../HomePage/HomePage";
import { AppContext } from "../../Context";
const LoginPage = (props) => {
  const [globalState, setGlobalState] = useContext(AppContext);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  //Setting the user name in the state
  function setTheUserName(e) {
    setUserName(e.target.value);
  }

  //Setting the password in the state
  function setThePassword(e) {
    setPassword(e.target.value);
  }
  //Cheking if for valid user
  function login(e) {
    globalState.users.forEach((element) => {
      let boolFlag;
      if (userName === element.userName && password === element.password) {
        if (element.isAdmin) {
          boolFlag = true;
        }
        setGlobalState({
          ...globalState,
          isAdmin: boolFlag,
          currentUser: element,
        });
        props.history.push(`/homepage`);
      }
    });
  }
  return (
    <div className="loginContainer">
      <img className="loginPageImage" src={movieTheaterImage} alt="" />
      <div className="loginForm">
        <h1 className="loginHeader">Welcome!</h1>
        <div className="form">
          <h3 style={{ alignSelf: "center", fontSize: "1.5em" }}>Sign In</h3>
          <Avatar style={{ alignSelf: "center", backgroundColor: "#f50057" }}>
            <LockOutlinedIcon />
          </Avatar>
          <input
            type="text"
            placeholder="Email"
            className="emailInput"
            onChange={setTheUserName}
          />
          <input
            type="password"
            placeholder="Password"
            className="passwordInput"
            onChange={setThePassword}
          />
          <button className="signInButton" onClick={login}>
            <span>SIGN IN</span>
          </button>
        </div>
      </div>
      <Switch>
        <Route path="homepage/:ID" component={HomePage} />
      </Switch>
    </div>
  );
};

export default LoginPage;
