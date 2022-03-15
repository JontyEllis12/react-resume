import { Stack, Button } from "@mui/material";
import React from "react";

const CompanyStack = () => {
  return (
    <Stack
      direction="row"
      spacing={5}
      style={{
          paddingTop: "25px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // height: "100vh",
      }}
    >
      <Button
        onClick={() => {
          window.open("https://www.betwaygroup.com/");
        }}
      >
        <img
          src="https://www.betwaygroup.com/Content/images/logo.png"
          alt="Betway Group"
          height={25}
        ></img>
      </Button>
      <Button
        onClick={() => {
          window.open("https://www.station10.co.uk/");
        }}
      >
        <img
          src="https://station10.co.uk/wp-content/uploads/2021/02/station10-logo-orange.svg"
          alt="Station10"
          height={25}
        ></img>
      </Button>
      <Button
        onClick={() => {
          window.open("https://www.blackswan.com/");
        }}
      >
        <img
          src="https://www.blackswan.com/wp-content/uploads/2019/05/black_swan_logo_HR.png"
          alt="Black Swan Data"
          height={25}
        ></img>
      </Button>
    </Stack>
  );
};

export default CompanyStack;
