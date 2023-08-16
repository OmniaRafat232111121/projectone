import { Close } from "@mui/icons-material";
import { Box, IconButton, Paper, Typography, useTheme } from "@mui/material";
import React, { useEffect, useState } from "react";

const Home = () => {
  const theme = useTheme();
  const [mydata, setmydata] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3100/mydata")
      .then((response) => response.json())
      .then((data) => setmydata(data));
  }, [mydata]);
  let totalPrice = 0;

  return (
    <>
      <Box>
        {mydata.map((item) => {
          totalPrice += item.price;
          return (
            <>
              <Paper
                key={item.id}
                sx={{
                  position: "relative",
                  width: "366px",
                  display: "flex",
                  justifyContent: "space-between",
                  pt: "27px",
                  pb: "7px",
                  mt: "22px",
                }}
              >
                <Typography
                  sx={{ ml: "16px", fontSize: "1.4em" }}
                  color="initial"
                >
                  {item.title}
                </Typography>
                <Typography
                  sx={{ mr: "40px", opacity: "0.7", fontWeight: 500 }}
                  variant="body1"
                  color="initial"
                >
                  $ {item.price}
                </Typography>
                <IconButton
                  onClick={() => {
                    fetch(`http://localhost:3100/mydata/${item.id}`, {
                      method: "DELETE",
                    });
                  }}
                  sx={{ position: "absolute", top: "0", right: "0" }}
                >
                  <Close sx={{ fontSize: "20px" }} />
                </IconButton>
              </Paper>
            </>
          );
        })}

        <Typography mt="55px" textAlign="center" variant="h6">
          👉 You Spend ${totalPrice}
        </Typography>
      </Box>
    </>
  );
};

export default Home;
