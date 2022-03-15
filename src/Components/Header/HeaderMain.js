import React from "react";
import { Stack, Typography, Button, Grid } from "@mui/material";
import { EmailOutline } from "styled-icons/evaicons-outline";
import { LinkedinSquare } from "styled-icons/boxicons-logos";
import { Github } from "styled-icons/bootstrap";
import { Telephone } from "styled-icons/bootstrap";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";

const HeaderMain = (props) => {
  const iconHeight = 35;
  const scrollPortfolioHandler = () => {
    document.getElementById("portfolio").scrollIntoView({ behavior: "smooth" });
  };
  return (
    <Stack
      sx={{
        height: "70vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Stack direction="row" spacing={2}>
      <Typography variant="h2" color="white">
        I'm 
      </Typography>
      <Typography variant="h2" color="orange">
        {props.info.name}.
      </Typography>
      </Stack>
      <Typography variant="h6" color="white" paddingTop={5}>
        {props.info.blurb}
      </Typography>
      <Stack
        direction="row"
        // spacing={0}
        justifyContent="center"
        paddingTop={5}
      >
        <Button
          onClick={() => {
            window.open(props.info.email);
          }}
          sx={{
            borderRadius:"10px",

            ":hover": {
              backgroundColor: "#4A63E7",
              fontStyle: { color: "white" },
            }
          }}
        >
          <EmailOutline color="white" height={iconHeight} />
        </Button>
        <Button
          onClick={() => {
            window.open(props.info.linkedIn);
          }}
          sx={{
            borderRadius:"10px",

            ":hover": {
              backgroundColor: "#4A63E7",
              fontStyle: { color: "white" },
            }
          }}
        >
          <LinkedinSquare color="white" height={iconHeight} />
        </Button>
        <Button
          onClick={() => {
            window.open(props.info.github);
          }}
          sx={{
            borderRadius:"10px",

            ":hover": {
              backgroundColor: "#4A63E7",
              fontStyle: { color: "white" },
            }
          }}
        >
          <Github color="white" height={iconHeight} />
        </Button>
        <Button
          onClick={() => {
            window.open(props.info.phone);
          }}
          sx={{
            borderRadius:"10px",

            ":hover": {
              backgroundColor: "#4A63E7",
              fontStyle: { color: "white" },
            }
          }}
        >
          <Telephone color="white" height={iconHeight} />
        </Button>
      </Stack>
      <Stack direction="row" spacing={3} justifyContent="center" paddingTop={3}>
        <Button
          onClick={scrollPortfolioHandler}
          sx={{
            backgroundColor: "#FE5959",
            ":hover": {
              // backgroundImage: project.img,
              // backgroundSize: "cover",
              // backgroundPosition: "center",

              backgroundColor: "#4A63E7",
              fontStyle: { color: "white" },
            },
          }}
        >
          <Grid container alignItems="center">
            <AiOutlineFundProjectionScreen color="white" />
            <Typography variant="b1" color="white" sx={{ pl: 2 }}>
              View Portfolio
            </Typography>
          </Grid>
        </Button>
        <Button
          onClick={() => {
            window.open(props.info.email);
          }}
          variant="outlined"
          sx={{
            backgroundColor: "transparent",
            borderColor: "white",
            fontStyle: { color: "white" },
            color: "white",
            borderStyle: {
              color: "white",
              width: "2px",
            },
            // borderRadius:0.5,
            // borderWidth:"1px",
            // outline:1,
            // outlineWidth:1,
            // outlineColor:1,

            ":hover": {
              // backgroundImage: project.img,
              // backgroundSize: "cover",
              // backgroundPosition: "center",

              backgroundColor: "#FFFFFF",
              borderColor: "white",

              fontStyle: { color: "black" },
            },
          }}
        >
          <Grid container alignItems="center">
            <AiOutlineFundProjectionScreen />
            <Typography variant="b1" sx={{ pl: 2 }}>
              Hire Me
            </Typography>
          </Grid>
        </Button>
      </Stack>
    </Stack>
  );
};

export default HeaderMain;
