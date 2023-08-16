import { Menu } from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  IconButton,
  Link,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";

const Appbar = ({ drawerWidth, setMenuBlock, setDrawerType }) => {
  return (
    <AppBar
      sx={{
        width: { xs: "100 %", sm: `calc(100% - ${drawerWidth}px)` },
        ml: { xs: 0, sm: `${drawerWidth}px` },
      }}
      position="static"
    >
      <Toolbar>
        <IconButton
          onClick={() => {
            setDrawerType("temporary");
            setMenuBlock("block");
          }}
          sx={{ display: { sm: "none" }, mr: "10px" }}
        >
          <Menu />
        </IconButton>

        <Link
          href="/"
          color="inherit"
          sx={{
            flexGrow: 1,
            textDecoration: "none",
            "&:hover": { color: "red", fontSize: "20px" },
          }}
        >
          My expense
        </Link>

        <Typography mr={2} variant="body1" color="inherit">
          Omnia Rafat
        </Typography>
        <Avatar alt="Remy Sharp" src="./images/omnia.jpeg" />
      </Toolbar>
    </AppBar>
  );
};

export default Appbar;
