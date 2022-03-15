import React from "react";
import { Stack } from "@mui/material";
import HeaderMenu from "./HeaderMenu";
import HeaderMain from "./HeaderMain";
import HeaderDown from "./HeaderDown";
import MainContentContainer from "../UI/MainContentContainer";

const Header = (props) => {
  
  return (
    <MainContentContainer id="home">
    <header
      // id="header"
      className="App"
      style={{
        backgroundImage: `url("https://images.pexels.com/photos/1361215/pexels-photo-1361215.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")`, //`url("https://images.pexels.com/photos/747964/pexels-photo-747964.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")`,
        backgroundSize: "auto",
        backgroundPosition: "center",
        position: "centered",
        // justifyContent: "space",
        // height: "100vh",
        height: "70vh",
        // width: "",
        // marginTop: "50px",
        // paddingTop: "50px",
        paddingLeft: "100px",
        paddingRight: "100px",
        // paddingBottom: "50px",
        // backgroundColor: "#325383",
      }}
    >
      <Stack
        // height="100vh"
        spacing={5}
        alignItems="center"
        justifyContent="center"
        display="flex"
      >
        {/* <HeaderMenu /> */}
        <HeaderMain info={props.info}/>
        {/* <HeaderDown /> */}
      </Stack>
    </header>
    </MainContentContainer>
  );
};

export default Header;
