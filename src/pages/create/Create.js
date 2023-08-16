import { Box, InputAdornment, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { purple } from "@mui/material/colors";
import React, { useState } from "react";
import { ChevronRight } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[900]),
  backgroundColor: purple[900],
  "&:hover": {
    backgroundColor: purple[700],
  },
}));

const Create = () => {
  const [title, settitle] = useState("");
  const [price, setprice] = useState(0);
  const navigate = useNavigate();

  return (
    <Box noValidate autoComplete="off" component="form">
      <TextField
        onChange={(e) => {
          settitle(e.target.value);
        }}
        fullWidth={true}
        label="With normal TextField"
        id="filled-start-adornment"
        sx={{ mt: "22px", display: "block" }}
        InputProps={{
          startAdornment: <InputAdornment position="start">👉</InputAdornment>,
        }}
        variant="filled"
      />
      <TextField
        onChange={(e) => {
          setprice(Number(e.target.value));
        }}
        fullWidth={true}
        label="With normal TextField"
        id="filled-start-adornment"
        sx={{ mt: "22px", display: "block" }}
        InputProps={{
          startAdornment: <InputAdornment position="start">$</InputAdornment>,
        }}
        variant="filled"
      />
      <ColorButton
        onClick={() => {
          fetch("http://localhost:3100/mydata", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ price, title }),
          }).then(() => {
            navigate("/home");
          });
        }}
        sx={{ mt: "20px" }}
        variant="contained"
      >
        Submit
        <ChevronRight />
      </ColorButton>
    </Box>
  );
};

export default Create;
