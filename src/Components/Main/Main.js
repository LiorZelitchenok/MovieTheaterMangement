import React, { useState, useEffect, useContext } from "react";
import { Route, Switch } from "react-router-dom";
import Login from "../LoginPage/LoginPage";
import HomePage from "../HomePage/HomePage";
import axios from "axios";
import { AppContext } from "../../Context";
import "./Main.css";
const Main = () => {
  //Setting the inital data base using ContextApi with Hooks
  const [globalSate, setGlobalState] = useContext(AppContext);

  useEffect(() => {
    let currentDate = new Date();
    //Setting the users data
    const subscriptions = [];
    const allUsers = [
      {
        id: 0,
        firstName: "Lior",
        lastName: "Zelitchenok",
        createdDate: currentDate,
        userName: "liornok3",
        password: "liornok3",
        isAdmin: true,
        premissions: [
          { id: "viewSubscriptions", name: "View Subscriptions", value: true },
          {
            id: "createSubscriptions",
            name: "Create Subscriptions",
            value: true,
          },
          {
            id: "deleteSubscriptions",
            name: "Delte Subscriptions",
            value: false,
          },
          {
            id: "updateSubscriptions",
            name: "Update Subscriptions",
            value: true,
          },
          { id: "viewMovies", name: "View Movies", value: true },
          { id: "createMovies", name: "Create Movies", value: true },
          { id: "deleteMovies", name: "Delete Movies", value: true },
          { id: "updateMovies", name: "Update Movies", value: true },
        ],
      },
      {
        id: 1,
        firstName: "Anna",
        lastName: "Zelitchenok",
        createdDate: currentDate,
        userName: "anna123",
        password: "anna123",
        isAdmin: false,
        premissions: [
          { id: "viewSubscriptions", name: "View Subscriptions", value: true },
          {
            id: "createSubscriptions",
            name: "Create Subscriptions",
            value: true,
          },
          {
            id: "deleteSubscriptions",
            name: "Delte Subscriptions",
            value: false,
          },
          {
            id: "updateSubscriptions",
            name: "Update Subscriptions",
            value: true,
          },
          { id: "viewMovies", name: "View Movies", value: true },
          { id: "createMovies", name: "Create Movies", value: true },
          { id: "deleteMovies", name: "Delete Movies", value: true },
          { id: "updateMovies", name: "Update Movies", value: true },
        ],
      },
      {
        id: 2,
        firstName: "Uri",
        lastName: "Vish",
        createdDate: currentDate,
        userName: "uri123",
        password: "uri123",
        isAdmin: false,
        premissions: [
          { id: "viewSubscriptions", name: "View Subscriptions", value: true },
          {
            id: "createSubscriptions",
            name: "Create Subscriptions",
            value: true,
          },
          {
            id: "deleteSubscriptions",
            name: "Delte Subscriptions",
            value: false,
          },
          {
            id: "updateSubscriptions",
            name: "Update Subscriptions",
            value: true,
          },
          { id: "viewMovies", name: "View Movies", value: true },
          { id: "createMovies", name: "Create Movies", value: true },
          { id: "deleteMovies", name: "Delete Movies", value: true },
          { id: "updateMovies", name: "Update Movies", value: true },
        ],
      },
      {
        id: 3,
        firstName: "Snir",
        lastName: "Bandela",
        createdDate: currentDate,
        userName: "snir123",
        password: "snir123",
        isAdmin: false,
        premissions: [
          { id: "viewSubscriptions", name: "View Subscriptions", value: true },
          {
            id: "createSubscriptions",
            name: "Create Subscriptions",
            value: false,
          },
          {
            id: "deleteSubscriptions",
            name: "Delte Subscriptions",
            value: false,
          },
          {
            id: "updateSubscriptions",
            name: "Update Subscriptions",
            value: true,
          },
          { id: "viewMovies", name: "View Movies", value: true },
          { id: "createMovies", name: "Create Movies", value: true },
          { id: "deleteMovies", name: "Delete Movies", value: true },
          { id: "updateMovies", name: "Update Movies", value: true },
        ],
      },
    ];
    const getData = async () => {
      const membersResp = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      const moviesResp = await axios.get("https://api.tvmaze.com/shows");
      setGlobalState({
        ...globalSate,
        users: allUsers,
        movies: moviesResp.data,
        members: membersResp.data,
        subscriptions: subscriptions,
      });
    };
    getData();
  }, []);

  return (
    <div className="main">
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/homepage" component={HomePage} />
      </Switch>
    </div>
  );
};

export default Main;
