import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AppContext } from "../../Context";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { StylesProvider } from "@material-ui/core/styles";
import "./NavBar.css";
export const NavBar = () => {
  const [globalState] = useContext(AppContext);
  return (
    <StylesProvider injectFirst>
      <div>
        <AppBar className="appBar">
          <Toolbar>
            <Typography variant="h6">News</Typography>
            <Button color="inherit">Login</Button>
            <Button color="inherit">Login</Button>
            <Button color="inherit">Login</Button>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </div>
    </StylesProvider>
  );
};

export default NavBar;
