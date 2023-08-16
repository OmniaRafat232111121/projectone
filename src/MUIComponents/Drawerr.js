import { Drawer, Toolbar, Divider, useTheme, IconButton } from "@mui/material";
import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useLocation, useNavigate } from "react-router-dom";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

import { Create, Home, Logout, Person, Settings } from "@mui/icons-material";
const Drawerr = ({
  drawerWidth,
  setMode,
  menublock,
  hideDrawer,
  drawerType,
}) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const currentLocation = useLocation();

  const myList = [
    { text: "Home", icon: <Home />, path: "/home" },
    { text: "Create", icon: <Create />, path: "/create" },
    // { text: "Profile", icon: <Profile />, path: "/profile" },
    { text: "Settings", icon: <Settings />, path: "/settings" },
    { text: "Logout", icon: <Logout />, path: "/logout" },
  ];

  return (
    <>
      <Drawer
        sx={{
          display: { xs: menublock, sm: "block" },
          width: `${drawerWidth}px`,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: `${drawerWidth}px`,
            boxSizing: "border-box",
          },
        }}
        variant={drawerType}
        anchor="left"
        open={true}
        onClose={() => {
          hideDrawer();
        }}
      >
        <List>
          <ListItem
            disablePadding
            sx={{ display: "flex", justifyContent: "center", mb: "9px" }}
          >
            <IconButton
              sx={{ ml: 1 }}
              onClick={() => {
                localStorage.setItem(
                  "currentMode",
                  theme.palette.mode === "dark" ? "light" : "dark"
                );
                setMode(theme.palette.mode === "light" ? "dark" : "light");
              }}
              color="initial"
            >
              {theme.palette.mode === "dark" ? (
                <Brightness7Icon sx={{ color: "orange" }} />
              ) : (
                <Brightness4Icon />
              )}
            </IconButton>
            <Toolbar />
          </ListItem>
          <Divider />
          {myList.map((item) => {
            return (
              <>
                <ListItem
                  key={item.id}
                  sx={{
                    bgcolor:
                      currentLocation.pathname === item.path
                        ? // @ts-ignore
                          theme.palette.favColor.main
                        : null,
                  }}
                  disablePadding
                >
                  <ListItemButton
                    onClick={() => {
                      navigate(item.path);
                    }}
                  >
                    <ListItemIcon>{item.icon}</ListItemIcon>

                    <ListItemText primary={item.text} />
                  </ListItemButton>
                </ListItem>
              </>
            );
          })}
        </List>
      </Drawer>
    </>
  );
};

export default Drawerr;
