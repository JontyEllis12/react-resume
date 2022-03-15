import React from "react";
import { Typography, Button, Grid } from "@mui/material";

const HeaderMenuItem = (props) => {
  return (
    <Grid item>
      <Button onClick={props.scrollHandler}>
        <Typography variant="b1" color="white">
          {props.children}
        </Typography>
      </Button>
    </Grid>
  );
};

export default HeaderMenuItem;
