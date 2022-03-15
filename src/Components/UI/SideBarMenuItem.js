import React from "react";
import { Typography, Button, Grid, Box } from "@mui/material";

const SideBarMenuItem = (props) => {
  return (
    <Button onClick={props.scrollHandler} 
    sx={
      {
        ":hover": {
          backgroundColor: "#ff5959",
        },
      }
    }
    >
      <Grid container alignItems="center" sx={
        {
          padding:"10px"
        }
      }>
            {props.children}
            <Typography variant="b1" color="white" sx={{pl:2}}>
              {props.label}
            </Typography>
      </Grid>
    </Button>
  );
};

export default SideBarMenuItem;
