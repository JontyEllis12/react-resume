import React from "react";
import { Box, Card } from "@mui/material";

const SideBarContentContainer = (props) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      position="fixed"
      paddingLeft="4vw"
    >
      <Card
        sx={{
          height: "70vh",
          width: "12vw",
          minWidth: "193px",
          justifyContent: "center",
          backgroundColor: "#4A63E7",
          borderRadius: 5,
          boxShadow: 3,
        }}
      >
        {props.children}
      </Card>
    </Box>
  );
};

export default SideBarContentContainer;
