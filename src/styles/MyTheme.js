import { cyan, red } from "@mui/material/colors";

const getDesignTokens = (mode) => ({
  palette: {
    mode: mode,
    ...(mode === "light"
      ? {
          primary: {
            main: red[50],
          },
          favColor: {
            second: cyan[500],
          },
        }
      : {
          primary: {
            main: red[100],
          },
          favColor: {
            second: cyan[200],
          },
        }),
  },
});
export default getDesignTokens;
