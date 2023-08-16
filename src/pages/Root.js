import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import { Box } from "@mui/material";
import Appbar from "../MUIComponents/Appbar";
import Drawerr from "../MUIComponents/Drawerr";
import getDesignTokens from "../styles/MyTheme";

const Root = () => {
  const [mode, setMode] = useState(
    localStorage.getItem("currentMode") === null
      ? "light"
      : localStorage.getItem("currentMode") === "dark"
      ? "light"
      : "dark"
  );

  const [menublock, setMenuBlock] = useState("none");
  const [draweType, setDrawerType] = useState("permanent");
  const drawerWidth = 240;

  const hideDrawer = () => {
    setDrawerType("permanent");
    setMenuBlock("none");
  };
  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <div>
        <Appbar
          setMenuBlock={setMenuBlock}
          drawerWidth={drawerWidth}
          setDrawerType={setDrawerType}
        />
        <Drawerr
          drawerWidth={drawerWidth}
          drawerType={draweType}
          setMode={setMode}
          menublock={menublock}
          hideDrawer={hideDrawer}
        />

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            sm: { ml: `${drawerWidth}px` },
            mt: "66px",
          }}
          className="border"
        >
          <Outlet />
        </Box>
      </div>
    </ThemeProvider>
  );
};

export default Root;
